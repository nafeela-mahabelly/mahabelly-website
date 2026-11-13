# CLAUDE.md: Mahabelly website maintenance guide

Permanent instructions for Claude when working on this repository.

## Permanent rules

1. **This is the Mahabelly restaurant business website.** Mahabelly serves Kerala cuisine across Delhi NCR. The live site is https://mahabelly.com.

2. **The person maintaining this website is non-technical** and will describe changes in simple English, for example: "Change Saket's closing time to 11:30 PM."

3. **Explain all technical steps in simple language.** Avoid jargon. If a technical word is unavoidable (such as "branch", "build" or "pull request"), explain it in a few plain words.

4. **Make only the changes explicitly requested.** Do not add improvements, tidy up code, reformat files or fix unrelated issues. If you notice a problem, mention it and ask before touching it.

5. **Preserve the existing design, branding, layout and mobile responsiveness.** Do not change colours, fonts, logos, spacing, page layout or how pages look on phones unless asked.

6. **Never invent business information, outlet details, menu prices, contact numbers or links.** Use only the exact details the maintainer provides or that already exist in the repository. If a detail is missing or unclear, ask. Do not guess.

7. **Do not change dependencies, configurations, integrations, SEO settings or website architecture unless explicitly authorised.** This includes:
   - Dependencies: `package.json`, `package-lock.json`. Never run `npm install <package>`, `npm update` or similar.
   - Configuration: `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `.eslintrc.json`, `.gitignore`.
   - Integrations: Google Tag Manager (`app/layout.tsx`), the Web3Forms contact form (`components/forms/ContactForm.tsx`), the WhatsApp chatbot, and the reservation and ordering services.
   - SEO settings: `lib/seo.ts`, page titles and descriptions (`metadata`), `app/sitemap.ts`, `app/robots.ts`, structured data (JSON-LD).
   - Website architecture: adding, removing, renaming or moving pages, folders or components.

   If a requested content change would require touching any of these, explain why and ask first.

8. **Run the available build checks after making changes** (see "Build checks" below) and report the results in simple language.

9. **Explain all modifications before submitting them.** For each change, say which file changed, what it said before, what it says now, and which page(s) of the website it affects.

10. **Use `main` as the starting branch for all routine maintenance tasks. Do not use `develop` for this workflow.** Do not branch from `develop`, merge into it or target it.

11. **Create a separate task branch for every change**, starting from the latest `main`. If the session has already assigned a branch name, use it, but make sure it starts from the latest `main`.

12. **Submit a pull request targeting `main`.** Never commit or push directly to `main`.

13. **Never merge a pull request automatically**, and never turn on auto-merge. Wait for the maintainer to review and approve it. Merging into `main` publishes the change to the live website.

14. **Never expose or commit passwords, API keys, environment variables or secrets.** Never create or commit `.env` files, and never put secret values in chat, code, commit messages or pull request descriptions.
    - Note: the Web3Forms access key in `components/forms/ContactForm.tsx` and the Google Tag Manager ID in `app/layout.tsx` are public-by-design values already used by the live site. Leave them exactly as they are and do not copy them anywhere else.

## How publishing works (Vercel)

- The site is hosted on **Vercel**, which is connected to this GitHub repository. The connection is set up in Vercel's dashboard; there are no Vercel settings in this repository. Never change Vercel or GitHub settings.
- When a pull request is merged into `main`, Vercel automatically builds the site and publishes it to mahabelly.com, usually within a few minutes.
- Changes on other branches do not affect the live site. Vercel normally creates a separate **preview link** for them, which the maintainer can open to check the change.
- If a build fails, Vercel keeps the previous version live.
- To undo a published change, use the **Revert** button on the merged pull request in GitHub (this creates a new pull request to review), or roll back to an earlier version in the Vercel dashboard.

## Build checks

Run these from the repository root after every change, before committing:

```bash
npm ci
```

```bash
npm run build
```

```bash
npm run lint
```

- `npm ci` installs the exact versions listed in `package-lock.json` without changing that file.
- `npm run build` must finish without errors. It is the same build Vercel runs.
- `npm run lint` already shows some older warnings (mostly unused code). Leave those alone; only make sure your change adds no new errors or warnings.
- These checks create `node_modules/`, `.next/` and `out/`. Git ignores them, and they must never be committed.
- Where possible, preview the changed page with `npm run dev` (http://localhost:3000) at both desktop and phone widths to confirm the design and mobile layout are unchanged.

## Where content lives

Most routine edits happen in the `lib/` folder:

| File | What it controls |
|---|---|
| `lib/site.ts` | Phone, email, outlets (addresses, hours, services), reservation links, Zomato/Swiggy links, social links, WhatsApp chatbot link, main navigation, headline stats, award line |
| `lib/menus.ts` | Web menus for Saket, Canteen Saidulajab and Canteen Vasant Kunj: dishes, descriptions, prices, footnotes |
| `lib/menuBooks.ts` | Menu page images shown in the flip-through menu viewer |
| `lib/content.ts` | Our Story timeline, signature experiences, people, catering, Sadhya FAQs, press, awards, reviews |
| `lib/habibi.ts` | Mahabelly Habibi text, dishes and order links |
| `lib/canteen.ts` | Mahabelly Canteen introduction text |
| `lib/onam.ts` | Onam 2026 archive and Sadhya photo gallery |
| `lib/ambience.ts` | Outlet photo slideshows on the Our Brands page |
| `lib/policies.ts` | Legal policy text |
| `public/` | Photos, logos, menu images and menu PDFs |

Some headings and paragraphs are written directly in page files (`app/**/page.tsx`) or components (`components/**`). If text is not in `lib/`, search for it.

`README.md` is partly out of date. For example, it says the contact form opens an email, but the form now sends through Web3Forms. Trust the code over the README.

## Routine maintenance workflow

1. Read the request and confirm what will change. Ask if anything is unclear or missing.
2. Get the latest `main` and create a new task branch from it:
   ```bash
   git fetch origin main
   ```
   ```bash
   git checkout -b <task-branch-name> origin/main
   ```
3. Find the exact text or setting and make the smallest possible edit.
4. Run the build checks.
5. Explain the change in simple language: file, before, after, affected pages, check results.
6. Commit with a clear message and push the task branch.
7. Open a pull request targeting `main`, with a plain-language description of what changed and why.
8. Stop. Tell the maintainer the pull request is ready for review and that merging it will publish the change. Do not merge it.
