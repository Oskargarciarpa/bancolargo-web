'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Mic2, Radio } from 'lucide-react'

type Side = 'grupo' | 'estudio' | null

export function SplitScreen() {
  const [active, setActive] = useState<Side>(null)

  return (
    <div className="relative flex h-[100dvh] w-full flex-col overflow-hidden md:flex-row">
      <Panel
        href="/grupo"
        image="/images/live-stage.png"
        imageAlt="Banda tocando en vivo bajo luces cálidas en un escenario"
        logo="/logo-grupo.png"
        logoAlt="Emblema de Banco Largo Agrupación"
        eyebrow={<><Radio className="size-4" aria-hidden="true" /> En vivo</>}
        title="Agrupación Musical"
        subtitle="Shows en vivo, giras y presentaciones exclusivas."
        cta="Ver propuesta en vivo"
        side="grupo"
        active={active}
        onActivate={setActive}
        align="left"
      />

      <div
        aria-hidden="true"
        className="hidden md:block absolute left-1/2 top-0 z-20 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/40 to-transparent"
      />

      <Panel
        href="/estudio"
        image="/images/recording-studio.png"
        imageAlt="Consola de mezcla analógica en un estudio de grabación con luz cálida"
        logo="/logo-estudio.png"
        logoAlt="Emblema de Banco Largo Estudio"
        eyebrow={<><Mic2 className="size-4" aria-hidden="true" /> En estudio</>}
        title="Estudio de Grabación"
        subtitle="Producción, mezcla, captura y máster profesional."
        cta="Ver servicios del estudio"
        side="estudio"
        active={active}
        onActivate={setActive}
        align="right"
      />
    </div>
  )
}

function Panel({
  href,
  image,
  imageAlt,
  logo,
  logoAlt,
  eyebrow,
  title,
  subtitle,
  cta,
  side,
  active,
  onActivate,
  align,
}: {
  href: string
  image: string
  imageAlt: string
  logo: string
  logoAlt: string
  eyebrow: React.ReactNode
  title: string
  subtitle: string
  cta: string
  side: Exclude<Side, null>
  active: Side
  onActivate: (s: Side) => void
  align: 'left' | 'right'
}) {
  const isActive = active === side
  const isDimmed = active !== null && !isActive

  return (
    <Link
      href={href}
      onMouseEnter={() => onActivate(side)}
      onMouseLeave={() => onActivate(null)}
      onFocus={() => onActivate(side)}
      onBlur={() => onActivate(null)}
      className="group relative flex flex-1 items-end overflow-hidden outline-none transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:z-30 data-[active=true]:md:grow-[1.22] data-[dimmed=true]:md:grow-[0.78]"
      data-active={isActive}
      data-dimmed={isDimmed}
    >
      <img
        src={image || '/placeholder.svg'}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />

      {/* base darkening */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/25 transition-opacity duration-700 group-hover:opacity-80"
        aria-hidden="true"
      />
      {/* dim overlay when the other side is hovered */}
      <div
        className="absolute inset-0 bg-background/70 opacity-0 transition-opacity duration-700 data-[dimmed=true]:opacity-100"
        data-dimmed={isDimmed}
        aria-hidden="true"
      />
      {/* warm hover glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background:
            align === 'left'
              ? 'radial-gradient(60% 60% at 30% 75%, oklch(0.82 0.13 82 / 0.22), transparent 70%)'
              : 'radial-gradient(60% 60% at 70% 75%, oklch(0.82 0.13 82 / 0.22), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full p-6 sm:p-10 lg:p-12">
        <div className="max-w-md md:max-w-none">
          <img
            src={logo || '/placeholder.svg'}
            alt={logoAlt}
            className="mb-6 h-24 md:h-48 w-auto object-contain drop-shadow-[0_2px_12px_oklch(0.82_0.13_82_/_0.35)] transition-transform duration-500 group-hover:scale-105 sm:h-20 sm:w-20"
          />
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-gold">
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-sm text-pretty leading-relaxed text-foreground/70">
            {subtitle}
          </p>

          <span className="mt-7 inline-flex items-center gap-2 border-b border-gold/40 pb-1 text-sm font-semibold uppercase tracking-wider text-gold transition-all duration-300 group-hover:gap-3 group-hover:border-gold">
            {cta}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  )
}
