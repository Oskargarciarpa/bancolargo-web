'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Mic2, Radio } from 'lucide-react'

type Side = 'grupo' | 'estudio' | null

export function SplitScreen() {
  const [active, setActive] = useState<Side>(null)

  return (
    <div className="relative flex h-[100dvh] w-full flex-col overflow-hidden md:flex-row">
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
  <img
    src="/images/banco-largo-titulo.png"
    alt="Banco Largo Music"
    className="h-9 md:h-18 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
  />
</div>
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
        align="center"
      />

      <div
  aria-hidden="true"
  className={`pointer-events-none absolute left-1/2 top-1/2 md:top-0 z-20 -translate-x-1/2 -translate-y-1/2 md:translate-y-0 w-11/12 md:w-[2px] h-[2px] md:h-full bg-gradient-to-r md:bg-gradient-to-b from-transparent via-gold to-transparent shadow-[0_0_12px_rgba(212,175,55,0.8)] transition-opacity duration-500 ${
    active !== null ? 'opacity-0' : 'opacity-100'
  }`}
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
        align="center"
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
  align: 'left' | 'right' | 'center'
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
      onTouchStart={() => onActivate(side)}
      onTouchEnd={() => onActivate(null)}
      className="group relative flex flex-1 items-center justify-center text-center overflow-hidden outline-none transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:z-30 data-[active=true]:md:grow-[1.22] data-[dimmed=true]:md:grow-[0.78]"
      data-active={isActive}
      data-dimmed={isDimmed}
    >
      <img
        src={image || '/placeholder.svg'}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 group-data-[active=true]:scale-105"
      />

      {/* base darkening */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/50 transition-opacity duration-700 group-hover:opacity-60"
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

<div className="relative z-10 flex flex-col items-center text-center w-full max-w-lg p-6 sm:p-10 lg:p-12">
        {/* 1. LOGO ACHICADO Y CENTRADO */}
        {logo && (
          <img
            src={logo || '/placeholder.svg'}
            alt={logoAlt}
            className="mb-3 h-12 md:h-16 w-auto object-contain mx-auto drop-shadow-[0_2px_12px_oklch(0.82_0.13_82_/_0.35)] transition-transform duration-500 group-hover:scale-105 group-data-[active=true]:scale-105"
          />
        )}

        {/* 2. EYEBROW ("En vivo" / "En estudio") */}
        {eyebrow && (
          <div className="mb-2 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
            {eyebrow}
          </div>
        )}

        {/* 3. TÍTULO */}
        <h2 className="font-display text-2xl font-extrabold uppercase leading-[0.95] tracking-tight text-balance text-foreground sm:text-3xl lg:text-4xl">
          {title}
        </h2>

        {/* 4. SUBTÍTULO */}
        <p className="mt-3 max-w-xs text-pretty text-sm leading-relaxed text-foreground/80">
          {subtitle}
        </p>

        {/* 5. BOTÓN CTA */}
        <div className="mt-5 flex justify-center w-full">
          <span className="inline-flex items-center gap-2 border-b border-gold/40 pb-1 text-sm font-semibold uppercase tracking-wider text-gold transition-all duration-300 group-hover:gap-3">
            {cta}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </div>
      </div>
    </Link>
  )
}
