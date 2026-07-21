import type { SVGProps } from "react";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  MapPin,
  Ticket,
  Users,
  AlertCircle,
  Instagram,
  Mail,
  ShieldCheck,
  Heart,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  eventInfo,
  hero,
  about,
  artist,
  aboutGallery,
  socialProof,
  finalCta,
  footer,
  scarcity,
  guarantee,
  faq,
} from "@/event-config";

export function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

// Dispara no clique dos CTAs de ingresso. Ainda não existe checkout embutido
// (widget do Ingresso Cristão pendente), então o evento certo hoje é Lead,
// não Purchase/InitiateCheckout.
export function trackLeadClick() {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead");
  }
}

// O lucide-react nao tem um icone de alianças, entao desenhamos um simples.
export function Rings(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <circle cx="9" cy="13" r="6" />
      <circle cx="15" cy="13" r="6" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="/"
          className="font-display text-base font-semibold tracking-tight text-primary sm:text-lg"
        >
          {eventInfo.name}
        </a>
        <div className="hidden items-center gap-6 text-sm font-medium text-muted-foreground sm:flex">
          <button
            onClick={() => scrollTo("sobre")}
            className="transition-colors hover:text-foreground"
          >
            Sobre o show
          </button>
          <button
            onClick={() => scrollTo("local")}
            className="transition-colors hover:text-foreground"
          >
            Local
          </button>
          <button
            onClick={() => scrollTo("ingressos")}
            className="transition-colors hover:text-foreground"
          >
            Ingressos
          </button>
          <button
            onClick={() => scrollTo("faq")}
            className="transition-colors hover:text-foreground"
          >
            FAQ
          </button>
        </div>
        <Button variant="cta" size="sm" className="shadow-none" asChild>
          <a
            href={eventInfo.ticketLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackLeadClick}
          >
            <span className="hidden sm:inline">Garantir meu ingresso agora</span>
            <span className="sm:hidden">Ingressos</span>
          </a>
        </Button>
      </div>
    </header>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 lg:pt-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
        <Heart
          className="absolute left-4 top-24 h-7 w-7 -rotate-12 text-primary opacity-20 animate-float"
          style={{ animationDuration: "7s" }}
        />
        <Rings
          className="absolute right-6 top-24 h-9 w-9 rotate-6 text-coral opacity-15 animate-float"
          style={{ animationDuration: "9s", animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24">
        <div className="order-2 flex flex-col gap-6 lg:order-1">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="inline-block h-2 w-2 rounded-full bg-coral" />
            {hero.badge}
          </span>
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {hero.headline} <span className="text-coral">{hero.headlineHighlight}</span>
          </h1>
          <p className="max-w-lg text-lg text-muted-foreground">{hero.subheadline}</p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 py-1 text-sm">
            <span className="inline-flex items-center gap-2 text-foreground">
              <Calendar className="h-4 w-4 text-coral" />
              <span className="font-medium">{eventInfo.date}</span>
            </span>
            <span className="inline-flex items-center gap-2 text-foreground">
              <Clock className="h-4 w-4 text-coral" />
              <span className="font-medium">
                {eventInfo.time}{" "}
                <span className="text-muted-foreground">(portas {eventInfo.doors})</span>
              </span>
            </span>
            <span className="inline-flex items-center gap-2 text-foreground">
              <MapPin className="h-4 w-4 text-coral" />
              <span className="font-medium">{eventInfo.venue}</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button variant="cta" size="lg" className="h-12 px-8 text-base" asChild>
              <a
                href={eventInfo.ticketLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackLeadClick}
              >
                {hero.ctaLabel}
              </a>
            </Button>
            <Button
              variant="cta-outline"
              size="lg"
              className="h-12 px-8 text-base"
              onClick={() => scrollTo("local")}
            >
              Ver local no mapa
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">{hero.ctaSubtext}</p>

          <p className="text-xs text-muted-foreground">
            Classificação etária: {eventInfo.ageRating} · {scarcity.text}
          </p>
        </div>

        <div className="order-1 -mx-6 lg:order-2 lg:mx-0">
          <div className="relative overflow-hidden shadow-sm shadow-primary/5 lg:rounded-3xl">
            <img
              src={eventInfo.heroImage}
              alt="Casal cristão rindo juntos em um evento de stand-up comedy"
              width={1920}
              height={1080}
              className="h-auto w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-hero/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Variante V2: imagem de fundo full-bleed (igual referência de mercado), com um único CTA.
// Mantida separada da HeroSection original para comparação lado a lado antes de decidir qual fica.
export function HeroSectionV2() {
  return (
    <section className="relative flex min-h-[90vh] w-full items-center overflow-hidden pt-24">
      <img
        src={eventInfo.heroImage}
        alt="Casal cristão rindo juntos em um evento de stand-up comedy"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/35 to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-lg rounded-3xl bg-charcoal/40 p-6 backdrop-blur-sm sm:p-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-3 py-1 text-xs font-medium text-cream">
            <span className="inline-block h-2 w-2 rounded-full bg-coral" />
            {hero.badge}
          </span>

          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-cream md:text-5xl">
            {hero.headline} <span className="text-cream">{hero.headlineHighlight}</span>
          </h1>

          <p className="mt-4 text-lg text-cream/85">{hero.subheadline}</p>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <span className="inline-flex items-center gap-2 text-cream">
              <Calendar className="h-4 w-4 text-coral" />
              <span className="font-medium">{eventInfo.date}</span>
            </span>
            <span className="inline-flex items-center gap-2 text-cream">
              <Clock className="h-4 w-4 text-coral" />
              <span className="font-medium">
                {eventInfo.time} <span className="text-cream/70">(portas {eventInfo.doors})</span>
              </span>
            </span>
            <span className="inline-flex items-center gap-2 text-cream">
              <MapPin className="h-4 w-4 text-coral" />
              <span className="font-medium">{eventInfo.venue}</span>
            </span>
          </div>

          <div className="mt-6">
            <Button variant="cta" size="lg" className="h-12 w-full px-8 text-base sm:w-auto" asChild>
              <a
                href={eventInfo.ticketLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackLeadClick}
              >
                {hero.ctaLabel}
              </a>
            </Button>
          </div>

          <p className="mt-3 flex items-center gap-2 text-xs text-cream/70">
            <ShieldCheck className="h-4 w-4 text-coral" />
            Compra 100% segura · Classificação etária: {eventInfo.ageRating}
          </p>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  const [firstHalf, secondHalf] = [about.paragraphs.slice(0, 2), about.paragraphs.slice(2)];

  return (
    <section id="sobre" className="relative overflow-hidden bg-primary py-20 text-primary-foreground lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
        <Rings
          className="absolute left-6 top-8 h-8 w-8 -rotate-6 text-cream opacity-15 animate-float"
          style={{ animationDuration: "8s" }}
        />
        <Heart
          className="absolute right-8 top-16 h-6 w-6 rotate-12 text-cream opacity-15 animate-float"
          style={{ animationDuration: "10s", animationDelay: "1.4s" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          {about.headline} <span className="text-coral">{about.headlineHighlight}</span>
        </h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed opacity-95">
          {firstHalf.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-3 px-6 sm:grid-cols-2 lg:px-8">
        {aboutGallery.map((photo, i) => (
          <div key={i} className="overflow-hidden rounded-3xl">
            <img
              src={photo.img}
              alt={photo.alt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-3xl px-6 text-center lg:px-8">
        <div className="space-y-5 text-lg leading-relaxed opacity-95">
          {secondHalf.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {artist.blurb && <p className="mt-6 text-sm opacity-80">{artist.blurb}</p>}
      </div>

      <div className="mt-16 bg-hero py-12 text-hero-foreground">
        <div className="mx-auto grid max-w-4xl gap-8 px-6 text-center sm:grid-cols-3 sm:divide-x sm:divide-hero-foreground/20 lg:px-8">
          <div className="px-2">
            <Users className="mx-auto h-6 w-6 text-primary" />
            <p className="mt-3 font-display text-xl font-semibold">Para casais</p>
            <p className="mt-1 text-sm text-hero-foreground/90">
              Casados, noivos ou namorando sério.
            </p>
          </div>
          <div className="px-2">
            <Ticket className="mx-auto h-6 w-6 text-primary" />
            <p className="mt-3 font-display text-xl font-semibold">Humor cristão</p>
            <p className="mt-1 text-sm text-hero-foreground/90">
              Leve, respeitoso e sem ultrapassar linhas.
            </p>
          </div>
          <div className="px-2">
            <Calendar className="mx-auto h-6 w-6 text-primary" />
            <p className="mt-3 font-display text-xl font-semibold">Uma noite só</p>
            <p className="mt-1 text-sm text-hero-foreground/90">
              Aproximadamente 90 minutos de risada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SocialProofSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            {socialProof.headline}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{socialProof.subheadline}</p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-5">
          <figure className="group relative col-span-3 overflow-hidden rounded-3xl">
            <img
              src={socialProof.photos[0].img}
              alt={socialProof.photos[0].alt}
              loading="lazy"
              className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-cream">
              {socialProof.photos[0].caption}
            </figcaption>
          </figure>
          <figure className="group relative col-span-2 overflow-hidden rounded-3xl">
            <img
              src={socialProof.photos[1].img}
              alt={socialProof.photos[1].alt}
              loading="lazy"
              className="aspect-[3/4] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-cream">
              {socialProof.photos[1].caption}
            </figcaption>
          </figure>
        </div>

        <div className="mt-10 flex flex-col items-center">
          <video
            controls
            poster={socialProof.testimonialVideo.poster}
            className="aspect-[9/16] w-full max-w-xs rounded-3xl"
          >
            <source src={socialProof.testimonialVideo.src} type="video/mp4" />
          </video>
          <p className="mt-4 max-w-sm text-center text-sm text-muted-foreground">
            {socialProof.testimonialVideo.caption}
          </p>
        </div>
      </div>
    </section>
  );
}

export function LocationSection() {
  return (
    <section id="local" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-coral">
              <MapPin className="h-4 w-4" />
              Local do evento
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
              {eventInfo.venue}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{eventInfo.address}</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="h-5 w-5 text-coral" />
                <span className="font-medium text-foreground">{eventInfo.date}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="h-5 w-5 text-coral" />
                <span className="font-medium text-foreground">
                  {eventInfo.time} (portas às {eventInfo.doors})
                </span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <AlertCircle className="h-5 w-5 text-coral" />
                <span className="font-medium text-foreground">
                  Classificação etária: {eventInfo.ageRating}
                </span>
              </div>
            </div>

            <Button variant="cta" size="lg" className="mt-8 h-12 px-8 text-base" asChild>
              <a href={eventInfo.mapLink} target="_blank" rel="noopener noreferrer">
                Ver rotas no Google Maps
              </a>
            </Button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
            <iframe
              title="Mapa do local do evento"
              src={eventInfo.mapEmbed}
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function TicketsSection() {
  return (
    <section id="ingressos" className="py-20 lg:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          Garanta seu ingresso
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Acesso ao show completo. Valores e assentos disponíveis direto no checkout.
        </p>

        <div className="mt-10">
          <Button variant="cta" size="lg" className="h-12 px-10 text-base" asChild>
            <a
              href={eventInfo.ticketLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackLeadClick}
            >
              Garantir meu ingresso agora
            </a>
          </Button>
        </div>

        <div className="mx-auto mt-12 flex max-w-lg flex-col items-center gap-2 text-center">
          <ShieldCheck className="h-5 w-5 text-coral" />
          <p className="font-display text-base font-semibold text-foreground">
            {guarantee.headline}
          </p>
          <p className="text-sm text-muted-foreground">{guarantee.text}</p>
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Perguntas frequentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-10">
          {faq.map((item, i) => (
            <AccordionItem key={item.question} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-display text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 flex justify-center">
          <Button variant="cta" size="lg" className="h-12 px-8 text-base" asChild>
            <a
              href={eventInfo.ticketLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackLeadClick}
            >
              {finalCta.buttonLabel}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-hero py-20 text-hero-foreground lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
        <Heart
          className="absolute left-8 top-8 h-7 w-7 -rotate-6 text-cream opacity-15 animate-float"
          style={{ animationDuration: "8s" }}
        />
        <Rings
          className="absolute right-10 bottom-8 h-9 w-9 rotate-12 text-cream opacity-15 animate-float"
          style={{ animationDuration: "10s", animationDelay: "0.8s" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          {finalCta.headline}
        </h2>
        <p className="mt-5 text-lg opacity-90">{finalCta.subheadline}</p>
        <Button variant="cta" size="lg" className="mt-8 h-12 px-8 text-base" asChild>
          <a
            href={eventInfo.ticketLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackLeadClick}
          >
            {finalCta.buttonLabel}
          </a>
        </Button>
        <p className="mt-4 text-xs opacity-70">
          Classificação etária: {eventInfo.ageRating} · {scarcity.text}
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-semibold text-primary">{eventInfo.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Stand-up comedy para casais e noivos cristãos.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={footer.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
            <a
              href={`mailto:${footer.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              E-mail
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} {eventInfo.name}. Todos os direitos reservados.</p>
          <span className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3 py-1 text-xs font-medium text-destructive">
            <AlertCircle className="h-3.5 w-3.5" />
            Classificação etária: {eventInfo.ageRating}
          </span>
        </div>
      </div>
    </footer>
  );
}
