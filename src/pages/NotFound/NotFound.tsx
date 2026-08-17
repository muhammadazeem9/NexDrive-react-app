import React from "react";

const NotFound: React.FC = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 py-12 text-white">
      {/* Background effects */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <section className="relative z-10 w-full max-w-2xl text-center">
        {/* 404 */}
        <div className="bg-gradient-to-br from-white via-indigo-300 to-purple-400 bg-clip-text text-[10rem] leading-none font-black tracking-tighter text-transparent select-none sm:text-[13rem]">
          404
        </div>

        {/* Badge */}
        <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-indigo-200 backdrop-blur-xl">
          <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400 shadow-[0_0_12px_rgba(129,140,248,0.9)]" />
          Page not found
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Oops! Lost in space.
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-slate-400 sm:text-lg">
          The page you're looking for doesn't exist
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/"
            className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-indigo-500/40 sm:w-auto"
          >
            ← Back to Home
          </a>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 text-sm font-semibold text-slate-300 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
          >
            Go Back
          </button>
        </div>

        {/* Footer */}
        <div className="mt-16 text-xs text-slate-600">
          Error <span className="text-slate-500">404</span> · Nothing to see
          here
        </div>
      </section>
    </main>
  );
};

export default NotFound;
