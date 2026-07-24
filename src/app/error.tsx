"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#030305] text-white p-4">
      <div className="glass-panel p-8 rounded-2xl max-w-md w-full text-center border-red-500/30 box-glow">
        <h2 className="text-3xl font-heading font-bold mb-4 text-red-400">SYSTEM FAILURE</h2>
        <p className="text-gray-400 mb-8 font-mono text-sm">
          An unexpected error occurred in the digital experience.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-medium transition-all text-sm tracking-widest uppercase hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        >
          REBOOT SYSTEM
        </button>
      </div>
    </div>
  );
}
