import { SplitScreen } from '@/components/split-screen'

export default function Page() {
  return (
    <main className="relative h-[100dvh] w-full overflow-hidden bg-background">
      <SplitScreen />

      <header className="pointer-events-none absolute inset-x-0 top-0 z-30 flex flex-col items-center px-4 pt-7 text-center">
        <h1
          className="font-display text-lg font-extrabold uppercase tracking-[0.35em] text-foreground sm:text-xl"
          style={{
            textShadow:
              '0 0 18px oklch(0.82 0.13 82 / 0.45), 0 0 42px oklch(0.82 0.13 82 / 0.25)',
          }}
        >
          Banco Largo Music
        </h1>
        <span className="mt-2 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </header>
    </main>
  )
}
