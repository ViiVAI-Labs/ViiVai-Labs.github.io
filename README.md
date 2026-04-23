# ViiVAI Labs Static Website

This project is a static multi-page website built with plain HTML, CSS, and JavaScript so it can be uploaded directly to most hosting providers.

## Files

- `index.html` - home page
- `technology.html` - technology and product details
- `software-development.html` - under construction page
- `about.html` - company story and founder section
- `styles.css` - shared styling
- `script.js` - mobile navigation
- `logo.png` - company logo

## Local preview

You can preview locally by opening `index.html` in a browser, or by serving the folder with a simple static server.

## Wix.com

Wix is not the best fit for uploading a ready-made static codebase like this one. Wix does not let you replace the full underlying HTML of a site, and custom code is mainly added through embeds, custom elements, or Velo-based development.

If you still want to use Wix:

1. Create a site in Wix Studio or Wix Editor.
2. Recreate these pages in the Wix editor manually.
3. Upload `logo.png` and any future images through the Wix media manager.
4. Copy the text from these HTML files into Wix sections.
5. Use Wix custom elements, embeds, or Velo only for special interactive pieces.
6. Connect your domain and publish.

## Recommended hosting services

### Netlify

1. Create a Netlify account.
2. Drag the full project folder into Netlify Drop, or connect a Git repository.
3. If asked for build settings, leave them blank because this site is static.
4. Keep the current file names so `index.html` loads automatically.
5. Add your custom domain in Netlify domain settings.

### Vercel

1. Create a Vercel account.
2. Import the project from GitHub, GitLab, or Bitbucket.
3. Because this is a static site, no framework preset is required.
4. Deploy and connect your domain.

### GitHub Pages

1. Create a GitHub repository and upload all files from this folder.
2. In repository settings, enable GitHub Pages.
3. Set the source to the main branch root.
4. Wait for the site URL to be generated.
5. Connect a custom domain if needed.
