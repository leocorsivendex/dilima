import heroImg from "@/assets/hero-vida-de-crente-casado-wide.png";
import publico1 from "@/assets/publico-casais-1.jpg";
import publico2 from "@/assets/publico-casais-2.jpg";

// Único arquivo a editar para replicar esta LP em outro evento/cidade.
// Trocar também as imagens em src/assets/ mantendo os mesmos nomes de arquivo.

export const eventInfo = {
  name: "Vida de Crente Casado",
  tagline: "Especial de comédia para casais",
  date: "[DATA DO EVENTO]",
  time: "[HORÁRIO]",
  doors: "[ABERTURA DOS PORTÕES]",
  ageRating: "18 anos",
  venue: "[NOME DO LOCAL, CIDADE/UF]",
  address: "[ENDEREÇO COMPLETO DO LOCAL]",
  mapEmbed: "https://www.google.com/maps?q=Brasil&output=embed",
  mapLink: "https://maps.google.com/?q=Brasil",
  heroImage: heroImg,
};

export const hero = {
  badge: "Stand-up comedy para casais e noivos cristãos",
  headline: "Ria junto. Se identifique.",
  headlineHighlight: "Viva melhor o casamento.",
  subheadline:
    "Uma noite de humor leve, honesto e cristão sobre a vida real de quem disse sim. Sem palavras pesadas, só risadas que renovam.",
};

export const about = {
  headline: "Isso não é só piada.",
  headlineHighlight: "É a sua vida lá em casa.",
  paragraphs: [
    "Você já tentou ler a Bíblia junto enquanto o cônjuge cochilava no sofá? Já discutiu sobre quem esqueceu o culto de jovens? Ou sobre a sogra que apareceu no domingo?",
    "\"Vida de Crente Casado\" é um show de stand-up comedy que pega essas situações do dia a dia e transforma em risada com leveza, respeito e muita identificação. É um convite para casais e noivos cristãos se encontrarem, relaxarem e lembrarem por que disseram \"sim\".",
    "O foco não é o artista. É a experiência de rir junto das mesmas coisas que acontecem na sua casa. Porque quando a gente ri junto, a gente se aproxima.",
  ],
};

// Bio curta do artista. Aparece de forma discreta, não como headline da página.
export const artist = {
  name: "Douglas Di Lima",
  blurb:
    "Ator, músico, humorista e comediante que vem ganhando destaque na cena da comédia com um nicho voltado para o público cristão, hoje com quase 2 milhões de seguidores em suas redes e lotando os principais teatros do Brasil.",
};

export const tickets = [
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

export const socialProof = {
  headline: "Casais que já viveram essa noite",
  subheadline:
    "Fotos reais de edições anteriores. A reação é sempre a mesma: risada fácil, olhar de cumplicidade e vontade de voltar.",
  photos: [
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
  ],
  testimonial: {
    quote:
      "A gente riu tanto que esqueceu o estresse da semana. Saiu lembrando por que a gente se casou.",
    author: "Ana e Marcos, casados há 7 anos",
  },
};

export const finalCta = {
  headline: "Não deixe o estresse roubar a alegria do casamento.",
  subheadline:
    "Venha rir com quem entende a sua rotina. Uma noite para lembrar que o casamento cristão também pode ser leve — e muito engraçado.",
  buttonLabel: "Comprar agora",
};

export const footer = {
  instagramUrl: "https://instagram.com/vidadecrentecasado",
  email: "contato@vidadecrentecasado.com",
};
