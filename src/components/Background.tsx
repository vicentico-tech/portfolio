export function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base radial */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(124,92,255,0.18),transparent_60%),radial-gradient(900px_500px_at_10%_20%,rgba(34,211,238,0.10),transparent_60%),radial-gradient(700px_500px_at_90%_10%,rgba(244,114,182,0.08),transparent_60%)]" />

      {/* Aurora blobs */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[conic-gradient(from_120deg,rgba(124,92,255,0.35),rgba(34,211,238,0.25),rgba(244,114,182,0.25),rgba(124,92,255,0.35))] blur-3xl opacity-40 animate-aurora" />
      <div className="absolute top-[40%] -left-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.3),transparent_60%)] blur-3xl opacity-40 animate-aurora [animation-delay:-4s]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.28),transparent_60%)] blur-3xl opacity-40 animate-aurora [animation-delay:-8s]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.65)_100%)]" />
    </div>
  );
}
