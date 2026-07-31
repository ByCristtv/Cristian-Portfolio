/**
 * Fixed, purely-CSS brand backdrop.
 * Replaces the old star/meteor field with subtle emerald aurora glows
 * and a faint grid — on-brand, GPU-cheap, and zero client JS.
 */
export function BackgroundGlow() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-backdrop opacity-[0.55]" />
      <div className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] animate-glow" />
      <div className="absolute top-[30%] -right-40 h-[34rem] w-[34rem] rounded-full bg-accent/15 blur-[130px] animate-glow [animation-delay:1.5s]" />
      <div className="absolute bottom-0 -left-32 h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-[120px] animate-glow [animation-delay:3s]" />
    </div>
  );
}
