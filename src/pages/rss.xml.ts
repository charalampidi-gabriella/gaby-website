import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Feed readers (and Substack's importer) need absolute URLs for images and links. */
const absolutize = (html: string, site: URL) =>
  html.replace(/(src|href)="\/(?!\/)/g, `$1="${site.origin}/`);

export const GET: APIRoute = async ({ site }) => {
  const origin = site!;
  const notes = (await getCollection('notes', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  const items = notes.map((note) => {
    const url = new URL(`/notes/${note.id}`, origin).href;
    let html = note.rendered?.html ?? '';
    if (note.data.video) {
      html = `<p><a href="${note.data.video}">Watch the video</a></p>` + html;
    } else if (note.data.image) {
      html = `<p><img src="${encodeURI(note.data.image)}" alt="" /></p>` + html;
    }
    html = absolutize(html, origin);
    return `    <item>
      <title>${escape(note.data.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${note.data.date.toUTCString()}</pubDate>${
        note.data.topic ? `\n      <category>${note.data.topic}</category>` : ''
      }${note.data.description ? `\n      <description>${escape(note.data.description)}</description>` : ''}
      <content:encoded><![CDATA[${html.replace(/]]>/g, ']]]]><![CDATA[>')}]]></content:encoded>
    </item>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Gaby Charalampidi · Notes</title>
    <link>${new URL('/notes', origin).href}</link>
    <atom:link href="${new URL('/rss.xml', origin).href}" rel="self" type="application/rss+xml" />
    <description>Notes on leadership, operations, and AI from Gaby Charalampidi.</description>
    <language>en-us</language>
${items.join('\n')}
  </channel>
</rss>
`;

  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
