# gabycharalampidi.com

Personal site. Astro, no other dependencies. Static output, deploys anywhere.

## Run it

```
npm install
npm run dev      # local dev at localhost:4321
npm run build    # static output in dist/
```

## Post a note

Drop a markdown file in `src/content/notes/`. The filename becomes the URL slug.

Article:

```markdown
---
title: How the compliance tracker works
date: 2026-07-10
description: One-line summary shown on the notes list.
---

Body in markdown.
```

Video (any YouTube watch, share, or embed link works; the player renders above the body):

```markdown
---
title: Walkthrough of the inventory system
date: 2026-07-10
type: video
video: https://www.youtube.com/watch?v=XXXXXXXX
description: One-line summary.
---

Optional writeup below the video.
```

Video notes get their thumbnail on the notes list automatically, pulled from YouTube.

Article with a cover image (shown on the notes list and above the article; put the file in
`public/notes/` or use a full URL):

```markdown
---
title: The migration, week one
date: 2026-07-10
image: /notes/migration-week-one.jpg
description: One-line summary.
---
```

Images inside a note body are plain markdown: `![alt text](/notes/some-image.jpg)`. An italic
line directly under an image renders as its caption. You can also paste a YouTube embed
(`<iframe ...>`) anywhere in the body and it sizes itself to the column.

Add `draft: true` to keep a note out of the build.

Notes can be filed under a theme with `topic: Leadership`, `topic: AI`, or `topic: Coaching`
(also a dropdown in the admin). The topic shows as a tag and powers the filter pills on the
notes page. To add a new theme later, extend `TOPICS` in `src/lib/notes.ts` and the `topic`
options list in `public/admin/config.yml`.

## Admin (publish from the browser)

The site has a Sveltia CMS admin at `/admin/` (on the dev server use `/admin/index.html`).
It gives you a form editor for notes: title, date, type, YouTube link, cover image upload,
description, draft toggle, markdown body. Publishing commits the markdown file to GitHub,
which triggers the Cloudflare Pages rebuild. Config: `public/admin/config.yml`.

One-time setup, in order:

1. Get the site on GitHub + Cloudflare Pages (see Deploy below). The admin publishes through
   GitHub, so this is a prerequisite.
2. In `public/admin/config.yml`, set `repo:` to the real `owner/repo`.
3. Sign in at `/admin/` on the live site. Two options:
   - **Easiest:** "Sign In Using Access Token" with a GitHub fine-grained personal access token
     (github.com/settings/personal-access-tokens, scope it to just this repo with Contents
     read/write). No other setup needed; delete the `base_url` line from the config.
   - **Polished:** deploy the sveltia-cms-auth Cloudflare Worker
     (github.com/sveltia/sveltia-cms-auth, one-click deploy), create the GitHub OAuth app it
     asks for, and set `base_url` in the config to the worker URL. Then it's a normal
     "Sign In with GitHub" button.

For local writing without deploying anything, open the admin on the dev server in Chrome or
Edge and pick "Work with Local Repository": it edits the files on disk directly.

## Contact form

The homepage form sends through Web3Forms (free, no account). To activate it: go to
web3forms.com, enter gcharalampide@gmail.com, copy the access key from the email they send,
and replace `WEB3FORMS_ACCESS_KEY` in `src/pages/index.astro` (the hidden input in the
contact form). Until then the form falls back to opening the visitor's email app with the
message prefilled, so nothing is broken while the key is missing.

## Where things live

- Homepage copy: `src/pages/index.astro` (hero, Now, projects, about, contact)
- Colors and type: `src/styles/global.css` (`:root` block)
- Header and footer: `src/layouts/Layout.astro`

## Deploy (Cloudflare Pages)

Same flow as rippnertennis.com. Connect the repo in the Cloudflare dashboard with build command `npm run build` and output directory `dist`. Leave the root directory empty (the repo root is the site itself). Set the production domain when ready. The `site` value in `astro.config.mjs` currently assumes gabycharalampidi.com; change it if the domain differs.
