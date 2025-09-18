# Next.js WP Blog
Steps:
1. Install dependencies: `npm install`
2. Set your WordPress REST base in `.env.local`:
   NEXT_PUBLIC_WP_API=http://your-wp-site/wp-json/wp/v2
3. Run locally: `npm run dev`
Notes:
- Uses SSR via getServerSideProps for SEO.
- Tailwind is configured; run `npx tailwindcss init` if needed.
