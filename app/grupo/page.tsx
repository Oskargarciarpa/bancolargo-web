import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function GrupoPage() {
  return (
    <main className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-background px-6 text-center">
      <img
        src="/images/live-stage.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40"
      />
      <div className="relative z-10 max-w-xl">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold">
          Agrupación Musical
        </p>
        <h1 className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-balance text-foreground sm:text-6xl">
          Propuesta en vivo
        </h1>
        <p className="mx-auto mt-6 max-w-md text-pretty leading-relaxed text-foreground/70">
          Shows en vivo, giras y presentaciones exclusivas. Pronto encontrarás
          aquí nuestro repertorio, fechas de gira y el rider técnico completo.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 border-b border-gold/40 pb-1 text-sm font-semibold uppercase tracking-wider text-gold transition-all hover:gap-3 hover:border-gold"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Volver al inicio
        </Link>
      </div>
    </main>
  )
}
