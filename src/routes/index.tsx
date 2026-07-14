import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Ticket, Users, AlertCircle, Instagram, Mail } from "lucide-react";

import heroImg from "@/assets/hero-vida-de-crente-casado.jpg";
import publico1 from "@/assets/publico-casais-1.jpg";
import publico2 from "@/assets/publico-casais-2.jpg";

const eventInfo = {
  name: "Vida de Crente Casado",
  date: "22 de Agosto de 2026",
  time: "20h",
  doors: "19h",
  venue: "Teatro Riachuelo",
  address: "R. do Lavapés, 438 — Liberdade, São Paulo · SP",
  mapEmbed:
    "https://www.google.com/maps?q=Teatro+Riachuelo,+São+Paulo,+SP&output=embed",
  mapLink: "https://maps.google.com/?q=Teatro+Riachuelo,+São+Paulo,+SP",
};

const tickets = [
  {
    name: "Bronze",
    price: "40",
    description: "Ingresso individual",
    included: ["Entrada para 1 pessoa", "Assento na plateia"],
    featured: false,
    cta: "Garantir meu Bronze",
  },
  {
    name: "Prata",
    price: "50",
    description: "Mais conforto para você",
    included: ["Ingresso individual", "Assento preferencial", "Reserva antecipada"],
    featured: true,
    cta: "Garantir meu Prata",
  },
  {
    name: "Ouro",
    price: "60",
    description: "A experiência completa para casal",
    included: ["Ingresso para 2 pessoas", "Assento preferencial", "Kit brinde do casal"],
    featured: false,
    cta: "Garantir meu Ouro",
  },
];

const socialProof = [
  {
    img: publico1,
    alt: "Casais na plateia rindo durante o show",
    caption: "A plateia em uma das edições anteriores.",
  },
  {
    img: publico2,
    alt: "Casais conversando e rindo no foyer do teatro",
    caption: "A diversão continua depois do palco.",
  },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Index() {
  return (
    <div className="relative overflow-x-hidden bg-cream text-charcoal">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SocialProofSection />
        <LocationSection />
        <TicketsSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="/" className="font-display text-lg font-semibold tracking-tight text-primary">
          Vida de Crente Casado
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
        </div>
        <Button variant="cta" size="sm" className="shadow-none">
          Garantir meu ingresso
        </Button>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-28 lg:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24">
        <div className="order-2 flex flex-col gap-6 lg:order-1">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="inline-block h-2 w-2 rounded-full bg-coral" />
            Stand-up comedy para casais e noivos cristãos
          </span>
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Ria junto. Se identifique. <span className="text-coral">Viva melhor o casamento.</span>
          </h1>
          <p className="max-w-lg text-lg text-muted-foreground">
            Uma noite de humor leve, honesto e cristão sobre a vida real de quem disse sim. Sem
            palavras pesadas, só risadas que renovam.
          </p>

          <div className="flex flex-wrap gap-4 py-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2">
              <Calendar className="h-4 w-4 text-coral" />
              <span className="font-medium text-foreground">{eventInfo.date}</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2">
              <Clock className="h-4 w-4 text-coral" />
              <span className="font-medium text-foreground">
                {eventInfo.time} <span className="text-muted-foreground">(portas {eventInfo.doors})</span>
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2">
              <MapPin className="h-4 w-4 text-coral" />
              <span className="font-medium text-foreground">{eventInfo.venue}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button variant="cta" size="lg" className="h-12 px-8 text-base">
              Garantir meu ingresso
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

          <p className="text-xs text-muted-foreground">
            Classificação etária: 18 anos · Lotação limitada
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
            <img
              src={heroImg}
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

function AboutSection() {
  return (
    <section id="sobre" className="bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          Isso não é só piada. <span className="text-coral">É a sua vida lá em casa.</span>
        </h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed opacity-95">
          <p>
            Você já tentou ler a Bíblia junto enquanto o cônjuge cochilava no sofá? Já discutiu
            sobre quem esqueceu o culto de jovens? Ou sobre a sogra que apareceu no domingo?
          </p>
          <p>
            "Vida de Crente Casado" é um show de stand-up comedy que pega essas situações do
            dia a dia e transforma em risada com leveza, respeito e muita identificação. É um
            convite para casais e noivos cristãos se encontrarem, relaxarem e lembrarem por que
            disseram "sim".
          </p>
          <p>
            O foco não é o artista. É a experiência de rir junto das mesmas coisas que acontecem
            na sua casa. Porque quando a gente ri junto, a gente se aproxima.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-primary-foreground/10 p-5 backdrop-blur-sm">
            <Users className="mx-auto h-6 w-6 text-coral" />
            <p className="mt-3 font-display text-xl font-semibold">Para casais</p>
            <p className="mt-1 text-sm opacity-90">Casados, noivos ou namorando sério.</p>
          </div>
          <div className="rounded-xl bg-primary-foreground/10 p-5 backdrop-blur-sm">
            <Ticket className="mx-auto h-6 w-6 text-coral" />
            <p className="mt-3 font-display text-xl font-semibold">Humor cristão</p>
            <p className="mt-1 text-sm opacity-90">Leve, respeitoso e sem ultrapassar linhas.</p>
          </div>
          <div className="rounded-xl bg-primary-foreground/10 p-5 backdrop-blur-sm">
            <Calendar className="mx-auto h-6 w-6 text-coral" />
            <p className="mt-3 font-display text-xl font-semibold">Uma noite só</p>
            <p className="mt-1 text-sm opacity-90">Aproximadamente 90 minutos de risada.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProofSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Casais que já viveram essa noite
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Fotos reais de edições anteriores. A reação é sempre a mesma: risada fácil, olhar de
            cumplicidade e vontade de voltar.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {socialProof.map((item, i) => (
            <figure key={i} className="group overflow-hidden rounded-2xl bg-card shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.alt}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="p-4 text-sm font-medium text-muted-foreground">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-8 md:p-10">
          <blockquote className="text-center text-xl font-medium italic text-foreground md:text-2xl">
            "A gente riu tanto que esqueceu o estresse da semana. Saiu lembrando por que a gente se
            casou."
          </blockquote>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            — Ana e Marcos, casados há 7 anos
          </p>
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
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
                <span className="font-medium text-foreground">Classificação etária: 18 anos</span>
              </div>
            </div>

            <Button
              variant="cta"
              size="lg"
              className="mt-8 h-12 px-8 text-base"
              asChild
            >
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

function TicketsSection() {
  return (
    <section id="ingressos" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Escolha seu ingresso
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Três opções para você viver essa noite do jeito que preferir. Todos dão acesso ao show
            completo.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tickets.map((ticket) => (
            <div
              key={ticket.name}
              className={`relative flex flex-col rounded-2xl border p-6 shadow-sm transition-shadow hover:shadow-lg ${
                ticket.featured
                  ? "border-coral bg-card shadow-coral/10"
                  : "border-border bg-card"
              }`}
            >
              {ticket.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-coral px-3 py-1 text-xs font-semibold text-accent-foreground">
                  Mais escolhido
                </span>
              )}
              <div className="mb-4">
                <h3 className="font-display text-xl font-semibold">{ticket.name}</h3>
                <p className="text-sm text-muted-foreground">{ticket.description}</p>
              </div>
              <div className="mb-6">
                <span className="font-display text-4xl font-bold text-foreground">R${ticket.price}</span>
              </div>
              <ul className="mb-8 flex-1 space-y-3 text-sm text-muted-foreground">
                {ticket.included.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-coral" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant={ticket.featured ? "cta" : "cta-outline"} className="w-full">
                {ticket.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Meia-entrada disponível conforme a legislação local. A integração com o checkout da
          plataforma de ingressos será ativada em breve.
        </p>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-hero py-20 text-hero-foreground lg:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          Não deixe o estresse roubar a alegria do casamento.
        </h2>
        <p className="mt-5 text-lg opacity-90">
          Venha rir com quem entende a sua rotina. Uma noite para lembrar que o casamento cristão
          também pode ser leve — e muito engraçado.
        </p>
        <Button variant="cta" size="lg" className="mt-8 h-12 px-8 text-base">
          Comprar agora
        </Button>
        <p className="mt-4 text-xs opacity-70">
          Classificação etária: 18 anos · Lotação limitada · Ingressos sujeitos à disponibilidade
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-cream py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-semibold text-primary">Vida de Crente Casado</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Stand-up comedy para casais e noivos cristãos.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/vidadecrentecasado"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
            <a
              href="mailto:contato@vidadecrentecasado.com"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              E-mail
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Vida de Crente Casado. Todos os direitos reservados.</p>
          <span className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3 py-1 text-xs font-medium text-destructive">
            <AlertCircle className="h-3.5 w-3.5" />
            Classificação etária: 18 anos
          </span>
        </div>
      </div>
    </footer>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
});
