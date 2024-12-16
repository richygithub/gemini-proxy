# Personal Blog

This is a personal blog built with Hugo and deployed on Netlify.

## Prerequisites

- Hugo (v0.121.1 or later)
- Git
- Node.js (for any additional tooling)

## Local Development

1. Clone this repository:
```bash
git clone <your-repo-url>
cd <repo-name>
```

2. Install Hugo theme (if not already included):
```bash
git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke
```

3. Start the local development server:
```bash
hugo server -D
```

Your site will be available at http://localhost:1313/

## Creating New Content

To create a new blog post:
```bash
hugo new posts/my-first-post.md
```

## Deployment

This site is automatically deployed to Netlify when changes are pushed to the main branch.

## License

MIT
