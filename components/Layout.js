import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Next.js WP Blog</title>
        <meta name="description" content="Blog powered by WordPress and Next.js" />
      </Head>
      <div className="max-w-4xl mx-auto p-4">
        <header className="py-6">
          <h1 className="text-3xl font-bold">Next.js WP Blog</h1>
        </header>
        <main>{children}</main>
      </div>
    </>
  );
}
