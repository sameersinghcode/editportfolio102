# Sameer Singh — Portfolio Site

Your editing portfolio site. Everything is editable from one file. No coding needed for changes.

---

## Files in this folder

```
portfolio/
├── index.html      ← the page itself, you don't need to touch this
├── style.css       ← the visual design, you don't need to touch this
├── app.js          ← the animations, you don't need to touch this
├── config.js       ← THIS IS THE ONE YOU EDIT (all your text and photos)
└── README.md       ← you are reading it
```

---

## How to change things

Open **`config.js`** in any text editor (VS Code, Notepad, Sublime, anything).

Everything is labelled clearly. Find the section you want to change, edit the text between the quotes, save the file. Done.

Examples:

**Change your tagline?** Find `hero:` near the top, edit `line1`, `line2`, `line3`.

**Add a new project to Selected Work?** Find `work:`, copy one of the lines, paste below it, change the text.

**Replace the photos in I Shoot Too?** Find `shoot:` then `photos:`. Replace each `url:` with a link to your real photo. You can:
- Use direct image links (any photo URL ending in .jpg or .png)
- Upload your photos to your GitHub repo and use `"photos/photo1.jpg"` style paths
- Use Cloudinary, Imgur, or any image host

**Change the colors?** Find `colors:` at the bottom of config.js. The defaults are tuned, but go wild.

**Add or remove a reel?** Find `reels:`. Each line is one phone mockup. Copy a line to add, delete a line to remove.

---

## How to publish it (GitHub Pages — free)

You already have `sameersinghcode.github.io`. Here is exactly what to do.

### Option 1 — replace your current site

1. Open your `sameersinghcode.github.io` repo on github.com
2. Delete all the old files (or move them to a `/old` folder if you want backup)
3. Click **Add file → Upload files**
4. Drag all four files from this `portfolio` folder into the upload box (`index.html`, `style.css`, `app.js`, `config.js`)
5. Scroll down, click **Commit changes**
6. Wait 1 to 2 minutes
7. Visit `https://sameersinghcode.github.io` — your new site is live

### Option 2 — make a new repo so the old site stays

1. On github.com, click **New repository**
2. Name it something like `editor-portfolio`
3. Upload the four files the same way as above
4. Go to repo **Settings → Pages**
5. Under Source, pick **main** branch, root folder, click Save
6. Your site will be at `https://sameersinghcode.github.io/editor-portfolio`

### Updating later

Every time you edit `config.js` and want changes live:

1. Open the repo on github.com
2. Click on `config.js`
3. Click the pencil icon (edit)
4. Make your changes right in the browser
5. Scroll down, click **Commit changes**
6. Wait 1 minute, refresh your live site

You can also edit locally and re-upload, whichever feels easier.

---

## Custom domain (optional)

If you want this on `sameersingh.in` or similar:

1. Buy the domain from any registrar (GoDaddy, Namecheap, Hostinger)
2. In your repo, go to **Settings → Pages**
3. Under Custom domain, type your domain, click Save
4. In your domain registrar's DNS settings, add an A record pointing to `185.199.108.153` (and 109, 110, 111)
5. Wait up to 24 hours for it to work
6. Tick **Enforce HTTPS** in GitHub once it's ready

---

## Testing locally before publishing

Want to see your changes before pushing them live?

Just double click `index.html` to open it in your browser. That's it. No server needed.

---

## What's on the site

1. **Hero** — your name, tagline, intro, stats counter
2. **Niches marquee** — the rotating words
3. **Selected work** — horizontal scrolling project cards
4. **Reels** — phone mockups showing your short form work
5. **I shoot too (Stills)** — magazine style photo mosaic with your signature
6. **Services** — 8 service tiles with hover effect
7. **Quote** — big animated quote
8. **Contact** — your email, IG, YouTube, location, status
9. **Footer**

---

## Quick fixes

**Photos look stretched?** Use landscape oriented photos (wider than tall) for the photo mosaic. The grid is designed for them.

**Numbers in stats wrong?** Edit `stats:` under `hero:` in config.js.

**Want a different font?** Open `index.html`, find the `<link>` line that loads Google Fonts, swap the font names. Then edit `style.css` and replace `'Fraunces'`, `'Instrument Serif'`, `'JetBrains Mono'` with your new font.

**Nothing changed after I edited config.js?** Hard refresh the browser. On Mac press Cmd+Shift+R, on Windows press Ctrl+Shift+R.

---

## Need help?

The whole site is self-contained. No external services, no signups, no monthly fees. Pure HTML, CSS, JavaScript. It will work for years.

If something breaks, the safest fix is to re-download a fresh copy of the four files and start over with your edited `config.js`.

Built ✦ April 2026
