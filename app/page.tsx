export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center">
      <div className="max-w-3xl px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Trey
        </h1>

        <p className="mt-4 text-lg text-neutral-400">
          Research Portfolio
        </p>

        <p className="mt-8 text-base text-neutral-500">
          This site will document ongoing and completed research in
          robotics, sensing, control systems, and machine learning.
        </p>

        <div className="mt-12 flex justify-center gap-6 text-sm text-neutral-400">
          <span>GitHub</span>
          <span>Google Scholar</span>
          <span>Email</span>
        </div>
      </div>
    </main>
  );
}
