import { ArrowRight, Code2, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] text-white p-6 relative overflow-hidden selection:bg-blue-500/30 selection:text-blue-200">
      {/* Decorative ambient glow background */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="z-10 flex flex-col items-center text-center max-w-2xl px-4">
        {/* Logo/Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-md text-zinc-400 text-sm mb-8 hover:border-zinc-700/80 transition-all duration-300">
          <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
          <span>Workspace Cleaned & Ready</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
          Codeplex Studio
        </h1>

        {/* Subtitle */}
        <p className="text-zinc-400 text-base sm:text-lg mb-10 max-w-lg leading-relaxed">
          Your project is now clean, fresh, and ready for development. Start coding in <code className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-100 text-sm border border-zinc-700 font-mono">app/page.tsx</code>.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 active:scale-95 transition-all duration-200"
          >
            Read Next.js Docs
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <div
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-zinc-700/80 backdrop-blur-sm text-zinc-300 font-semibold cursor-default transition-all duration-200"
          >
            <Code2 className="w-4 h-4 text-purple-400" />
            <span>tailwindcss v4 enabled</span>
          </div>
        </div>
      </div>

      {/* Footer info */}
      <div className="absolute bottom-8 text-zinc-600 text-xs font-mono select-none">
        d:\Projects\codplex
      </div>
    </main>
  );
}
