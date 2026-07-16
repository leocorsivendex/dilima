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
  headline: "Toda casa de casal tem uma historinha boba que",
  headlineHighlight: "vira risada",
  subheadline:
    "A ideia é simples: rir junto das coisas que já são normais, com respeito e identificação.",
  ctaLabel: "Marca esse dia com quem faz até os probleminhas valerem a pena",
};

export const about = {
  headline: "Isso não é só piada.",
  headlineHighlight: "É a sua vida lá em casa.",
  paragraphs: [
    "Você já brigou por besteira com seu cônjuge? Tipo, uma besteira mesmo. Quem esqueceu de avisar que ia chegar tarde. Quem deixou a louça pro dia seguinte de novo. Quem cochilou no meio do culto e jurou que só fechou os olhos pra orar melhor.",
    "A gente sabe. Todo casamento tem essas fricções pequenas do dia a dia.",
    "\"Vida de Crente Casado\" pega exatamente essas situações, as mesmas que rolam na sua casa, e transforma numa noite de risada, leve e sem cobrança. A ideia é simples, rir junto das coisas que já são normais, com respeito e identificação.",
    "Casais e noivos cristãos de todo tipo já se pegaram rindo e se olhando com aquele \"isso é a gente\" no rosto.",
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
  // TODO: substituir por depoimento real assim que tiver (print de comentário/DM do Instagram do artista, por ex.)
  testimonial: {
    quote:
      "É comum ver casais saindo do teatro de mãos dadas, ainda rindo da última piada, lembrando por que decidiram ficar juntos.",
    author: "Reação recorrente do público em edições anteriores",
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
