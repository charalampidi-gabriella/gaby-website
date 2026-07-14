/** The editorial themes notes can be filed under. Adding one here updates the
 * schema and the notes-page filter; also add it to public/admin/config.yml. */
export const TOPICS = ['Leadership', 'AI'] as const;

export function youtubeId(url: string): string | null {
  const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]+)/);
  return m ? m[1] : null;
}

export function youtubeEmbed(url: string): string {
  const id = youtubeId(url);
  return id ? `https://www.youtube-nocookie.com/embed/${id}` : url;
}

/** Thumbnail for a note: explicit image first, then the YouTube frame, else none. */
export function noteThumb(
  data: { image?: string; video?: string },
  size: 'mq' | 'hq' = 'mq'
): string | null {
  if (data.image) return data.image;
  if (data.video) {
    const id = youtubeId(data.video);
    if (id) return `https://i.ytimg.com/vi/${id}/${size}default.jpg`;
  }
  return null;
}

export function readingTime(body: string | undefined): number {
  if (!body) return 0;
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}
