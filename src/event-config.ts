import heroImg from "@/assets/hero-vida-de-crente-casado-wide.png";
import publico1 from "@/assets/publico-plateia-1.jpg";
import publico2 from "@/assets/publico-plateia-2.jpg";
import testimonialPoster from "@/assets/testimonial-casal-poster.jpg";
import showPlateia1 from "@/assets/show-plateia-1.jpg";
import showPlateia2 from "@/assets/show-plateia-2.jpg";

// Único arquivo a editar para replicar esta LP em outro evento/cidade.
// Trocar também as imagens em src/assets/ mantendo os mesmos nomes de arquivo.

export const eventInfo = {
  name: "Vida de Crente Casado",
  tagline: "Especial de comédia para casais",
  date: "Sexta-feira, 14 de agosto de 2026",
  time: "20h",
  doors: "[ABERTURA DOS PORTÕES]",
  ageRating: "18 anos",
  venue: "Centro Cultural SESIMINAS, Uberaba/MG",
  address: "Praça Frei Eugênio, 231, Uberaba - MG",
  mapEmbed:
    "https://www.google.com/maps?q=Pra%C3%A7a+Frei+Eug%C3%AAnio+231+Uberaba+MG&output=embed",
  mapLink: "https://www.google.com/maps?q=Pra%C3%A7a+Frei+Eug%C3%AAnio+231+Uberaba+MG",
  heroImage: heroImg,
  ticketLink:
    "https://bileto.sympla.com.br/event/121652/d/389865/s/2575349?share_id=1-copiarlink",
};

export const hero = {
  badge: "Stand-up comedy para casais e noivos cristãos",
  headline: "Toda casa de casal tem uma historinha boba que",
  headlineHighlight: "vira risada",
  subheadline:
    "Se vocês já brigaram essa semana por besteira, essa noite é pra vocês. A ideia é simples: rir junto das coisas que já são normais, com respeito e identificação.",
  ctaLabel: "Garantir meu ingresso agora",
  ctaSubtext: "Marca esse dia com quem faz até os probleminhas valerem a pena",
};

export const about = {
  headline: "Isso não é só piada.",
  headlineHighlight: "É a sua vida lá em casa.",
  paragraphs: [
    "Se vocês já aguentaram trocentas besteiras um do outro e continuam de mãos dadas até hoje, isso já merece uma boa risada.",
    "Você já brigou por besteira com seu cônjuge? Tipo, uma besteira mesmo. Quem esqueceu de avisar que ia chegar tarde. Quem deixou a louça pro dia seguinte de novo. Quem cochilou no meio do culto e jurou que só fechou os olhos pra orar melhor.",
    "A gente sabe. Todo casamento tem essas fricções pequenas do dia a dia.",
    "\"Vida de Crente Casado\" pega exatamente essas situações, as mesmas que rolam na sua casa, e transforma numa noite de risada, leve e sem cobrança. A ideia é simples, rir junto das coisas que já são normais, com respeito e identificação.",
    "Casais e noivos cristãos de todo tipo já se pegaram rindo e se olhando com aquele \"isso é a gente\" no rosto.",
  ],
};

export const artist = {
  name: "Douglas Di Lima",
  blurb:
    "Comediante cristão e marido também, Douglas já levou a comédia cristã para 7 países e reúne mais de 1,5 milhão de seguidores acompanhando seu trabalho. Ele fala de casamento porque vive de casamento, com todas as besteiras incluídas.",
};

// Fotos reais do show, usadas para quebrar o bloco de texto da seção Sobre.
export const aboutGallery = [
  {
    img: showPlateia1,
    alt: "Douglas Di Lima sentado no palco com a plateia de pé e as mãos levantadas atrás dele",
  },
  {
    img: showPlateia2,
    alt: "Auditório lotado de pé com as mãos levantadas durante o show",
  },
];

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
    included: ["Ingresso individual", "Assento preferencial"],
    featured: true,
    cta: "Garantir meu Prata",
  },
  {
    name: "Ouro",
    price: "60",
    description: "A experiência completa para casal",
    included: ["Ingresso para 2 pessoas", "Assento preferencial"],
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
      alt: "Plateia lotada de pé, com as mãos levantadas, e Douglas Di Lima sentado no palco",
      caption: "Uma das edições anteriores, casa cheia.",
    },
    {
      img: publico2,
      alt: "Plateia lotada com as mãos levantadas durante o show",
      caption: "A energia da plateia em outra edição do show.",
    },
  ],
  testimonialVideo: {
    src: "/videos/testimonial-casal.mp4",
    poster: testimonialPoster,
    caption: "Depoimento real de um casal na plateia, gravado logo depois do show.",
  },
};

export const finalCta = {
  headline: "Bora rir dessas mesmas bobagens, juntos?",
  subheadline:
    "Traz seu par pra uma noite de identificação e risada, sem cobrança e sem sermão.",
  buttonLabel: "Garantir meu ingresso agora",
};

export const footer = {
  instagramUrl: "https://instagram.com/vidadecrentecasado",
  email: "contato@vidadecrentecasado.com",
};

// Urgência real. Substituir o número entre colchetes pela contagem real de ingressos ou datas
// disponíveis antes de publicar. Nunca deixar um número fixo que não reflita o estoque real.
export const scarcity = {
  text: "Restam [NÚMERO] ingressos Prata para essa edição em [CIDADE].",
};

export const guarantee = {
  headline: "Compra sem risco",
  text: "Não vai poder ir mais? Você pode remarcar seu ingresso para a próxima edição da sua cidade em até [NÚMERO] dias antes do evento, sem multa.",
};

// Preencher os campos entre colchetes com os dados reais do cliente antes de publicar.
export const faq = [
  {
    question: "O show tem humor pesado ou ofensivo?",
    answer:
      "Não. É humor cristão, leve e respeitoso, sem ultrapassar linhas. Feito pra rir junto, não pra ofender ninguém.",
  },
  {
    question: "Posso ir mesmo sem ser casado?",
    answer: "Sim. O show é pra casais, noivos e namorados sérios de todo tipo.",
  },
  {
    question: "Como funciona o pagamento?",
    answer: "[FORMAS DE PAGAMENTO ACEITAS, EX: PIX, CARTÃO EM ATÉ Nx, BOLETO]",
  },
  {
    question: "E se eu não puder mais ir?",
    answer:
      "Você pode remarcar seu ingresso para a próxima edição da sua cidade em até [NÚMERO] dias antes do evento, sem multa.",
  },
  {
    question: "Tem meia-entrada?",
    answer: "Sim, conforme a legislação local, mediante comprovação no dia do evento.",
  },
  {
    question: "Quem é Douglas Di Lima?",
    answer:
      "Comediante cristão que já levou sua comédia para 7 países e reúne mais de 1,5 milhão de seguidores, fazendo casais e noivos cristãos rirem das próprias besteiras do dia a dia.",
  },
  {
    question: "Tenho outras dúvidas, como falo com a produção?",
    answer: "Chama no WhatsApp [NÚMERO] ou manda um e-mail para contato@vidadecrentecasado.com.",
  },
];
