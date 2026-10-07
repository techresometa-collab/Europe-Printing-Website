// ============================================================
//  CRAFTY – Services Data  (16 services)
// ============================================================

export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '351912345678'

export const buildWhatsAppUrl = (message) => {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

const services = [
  {
    id: 'posters-vinil',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80',
    name: { en: 'Posters (Vinil)', pt: 'Cartazes (Vinil)' },
    description: {
      en: 'High-quality vinyl poster printing for indoor and outdoor use. Vibrant colours, weather-resistant finishes.',
      pt: 'Impressão de cartazes em vinil de alta qualidade para interior e exterior. Cores vivas e acabamentos resistentes.',
    },
    highlights: {
      en: ['Indoor & outdoor use', 'Weather-resistant inks', 'Custom sizes available'],
      pt: ['Uso interior e exterior', 'Tintas resistentes às intempéries', 'Tamanhos personalizados'],
    },
    turnaround: { en: '2–4 working days', pt: '2–4 dias úteis' },
    minOrder:   { en: 'From 1 unit', pt: 'A partir de 1 unidade' },
    whatsappMsg: {
      en: "Hi Crafty! I'm interested in Vinyl Poster printing. Can you send me pricing?",
      pt: 'Olá Crafty! Tenho interesse em Cartazes em Vinil. Podem enviar os preços?',
    },
  },
  {
    id: 'banner-lonas',
    image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=600&q=80',
    name: { en: 'Banner (Lonas)', pt: 'Banner (Lonas)' },
    description: {
      en: 'Large-format banner printing on durable lona fabric. Perfect for events, shops, and outdoor advertising.',
      pt: 'Impressão de banners em lona durável. Perfeito para eventos, lojas e publicidade exterior.',
    },
    highlights: {
      en: ['Durable lona fabric', 'Full-colour print', 'Eyelets & hemming included'],
      pt: ['Lona resistente e durável', 'Impressão a cores totais', 'Ilhós e bainha incluídos'],
    },
    turnaround: { en: '3–5 working days', pt: '3–5 dias úteis' },
    minOrder:   { en: 'From 1 unit', pt: 'A partir de 1 unidade' },
    whatsappMsg: {
      en: "Hi Crafty! I need a quote for Banner (Lona) printing. What options do you have?",
      pt: 'Olá Crafty! Preciso de orçamento para Banners em Lona. Que opções têm?',
    },
  },
  {
    id: 'window-decoration',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    name: { en: 'Window & Interior Decoration', pt: 'Decoração de Janelas e Interior' },
    description: {
      en: 'Transform your space with custom-printed window films, wall graphics, and interior decoration prints.',
      pt: 'Transforme o seu espaço com filmes para janelas, gráficos de parede e impressões decorativas.',
    },
    highlights: {
      en: ['Window & wall films', 'Frosted & opaque options', 'Easy peel-and-stick application'],
      pt: ['Filmes para janelas e paredes', 'Opções fosco e opaco', 'Aplicação fácil destacável'],
    },
    turnaround: { en: '4–6 working days', pt: '4–6 dias úteis' },
    minOrder:   { en: 'Min 1 m²', pt: 'Mín 1 m²' },
    whatsappMsg: {
      en: "Hi Crafty! I'm interested in Window & Interior Decoration printing. Can you help?",
      pt: 'Olá Crafty! Tenho interesse em Decoração de Janelas e Interior. Podem ajudar?',
    },
  },
  {
    id: 'glass-decoration',
    image: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=600&q=80',
    name: { en: 'Glass Decoration', pt: 'Decoração em Vidro' },
    description: {
      en: 'Custom frosted, etched, and full-colour prints on glass surfaces for offices, shops, and homes.',
      pt: 'Impressões personalizadas em vidro fosco, gravado e a cores para escritórios, lojas e residências.',
    },
    highlights: {
      en: ['Frosted & full-colour options', 'Privacy & decorative solutions', 'Offices, shops & homes'],
      pt: ['Opções fosco e a cores', 'Soluções de privacidade e decoração', 'Escritórios, lojas e casas'],
    },
    turnaround: { en: '4–7 working days', pt: '4–7 dias úteis' },
    minOrder:   { en: 'From 1 panel', pt: 'A partir de 1 painel' },
    whatsappMsg: {
      en: "Hi Crafty! I'd like to know more about Glass Decoration options and pricing.",
      pt: 'Olá Crafty! Gostaria de saber mais sobre as opções de Decoração em Vidro e preços.',
    },
  },
  {
    id: 'roll-up-banner',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    name: { en: 'Roll Up Banner', pt: 'Roll Up Banner' },
    description: {
      en: 'Portable roll-up banners for trade shows, presentations, and events. Stand and carry bag included.',
      pt: 'Banners roll-up portáteis para feiras, apresentações e eventos. Suporte e saco incluídos.',
    },
    highlights: {
      en: ['Carry bag & stand included', 'Premium print quality', '85×200cm standard size'],
      pt: ['Saco e suporte incluídos', 'Qualidade de impressão premium', 'Tamanho padrão 85×200cm'],
    },
    turnaround: { en: '3–5 working days', pt: '3–5 dias úteis' },
    minOrder:   { en: 'From 1 unit', pt: 'A partir de 1 unidade' },
    whatsappMsg: {
      en: "Hi Crafty! I'd like a quote for a Roll Up Banner. What sizes are available?",
      pt: 'Olá Crafty! Gostaria de orçamento para um Roll Up Banner. Que tamanhos têm?',
    },
  },
  {
    id: 'standy',
    image: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?w=600&q=80',
    name: { en: 'Standy', pt: 'Standy' },
    description: {
      en: 'Custom standees and floor displays for retail, exhibitions, and promotional campaigns.',
      pt: 'Standees e displays de chão personalizados para retalho, exposições e campanhas.',
    },
    highlights: {
      en: ['Full-colour custom print', 'Lightweight & portable', 'Any size & shape'],
      pt: ['Impressão personalizada a cores', 'Leve e portátil', 'Qualquer tamanho e forma'],
    },
    turnaround: { en: '4–6 working days', pt: '4–6 dias úteis' },
    minOrder:   { en: 'From 1 unit', pt: 'A partir de 1 unidade' },
    whatsappMsg: {
      en: "Hi Crafty! I need a Standy for an event. Can you send pricing and sizes?",
      pt: 'Olá Crafty! Preciso de um Standy para um evento. Podem enviar preços e tamanhos?',
    },
  },
  {
    id: 'cutting-vinil-stickers',
    image: 'https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?w=600&q=80',
    name: { en: 'Cutting Vinil Stickers', pt: 'Autocolantes de Vinil Recortado' },
    description: {
      en: 'Precision-cut vinyl stickers for vehicles, walls, windows, and branding. Any colour, any shape.',
      pt: 'Autocolantes de vinil recortados para veículos, paredes, janelas e branding. Qualquer cor e forma.',
    },
    highlights: {
      en: ['Die-cut to any shape', 'Weatherproof & UV-resistant', 'Vehicles, walls & windows'],
      pt: ['Recortado em qualquer forma', 'Resistente a intempéries e UV', 'Veículos, paredes e janelas'],
    },
    turnaround: { en: '2–4 working days', pt: '2–4 dias úteis' },
    minOrder:   { en: 'From 10 units', pt: 'A partir de 10 unidades' },
    whatsappMsg: {
      en: "Hi Crafty! I'm interested in Cutting Vinyl Stickers. What shapes and sizes do you offer?",
      pt: 'Olá Crafty! Tenho interesse em Autocolantes de Vinil Recortado. Que formas oferecem?',
    },
  },
  {
    id: 'label-sticker-roll',
    image: 'https://images.unsplash.com/photo-1609198093260-9c6bb3b7e054?w=600&q=80',
    name: { en: 'Label & Sticker on Roll', pt: 'Etiqueta e Autocolante em Rolo' },
    description: {
      en: 'Product labels and stickers on rolls for easy application. Ideal for packaging and product branding.',
      pt: 'Etiquetas de produtos e autocolantes em rolo para fácil aplicação. Ideal para embalagem e branding.',
    },
    highlights: {
      en: ['Supplied on rolls', 'Custom shapes & sizes', 'Food-safe options available'],
      pt: ['Fornecido em rolos', 'Formas e tamanhos personalizados', 'Opções alimentares disponíveis'],
    },
    turnaround: { en: '3–5 working days', pt: '3–5 dias úteis' },
    minOrder:   { en: 'From 100 units', pt: 'A partir de 100 unidades' },
    whatsappMsg: {
      en: "Hi Crafty! I need Labels / Stickers on Roll for my products. Can you help?",
      pt: 'Olá Crafty! Preciso de Etiquetas / Autocolantes em Rolo. Podem ajudar?',
    },
  },
  {
    id: 'photo-posters',
    image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=600&q=80',
    name: { en: 'Photo Posters', pt: 'Cartazes Fotográficos' },
    description: {
      en: 'Premium photo-quality poster printing. Perfect for art, photography, and interior decoration.',
      pt: 'Impressão de cartazes em qualidade fotográfica premium. Perfeito para arte, fotografia e decoração.',
    },
    highlights: {
      en: ['True photo-quality resolution', 'Matte & gloss finish', 'A3 to A0 and custom sizes'],
      pt: ['Resolução de qualidade fotográfica', 'Acabamento mate e brilhante', 'A3 a A0 e tamanhos personalizados'],
    },
    turnaround: { en: '2–3 working days', pt: '2–3 dias úteis' },
    minOrder:   { en: 'From 1 unit', pt: 'A partir de 1 unidade' },
    whatsappMsg: {
      en: "Hi Crafty! I'd like to print Photo Posters. What paper options do you have?",
      pt: 'Olá Crafty! Gostaria de imprimir Cartazes Fotográficos. Que opções de papel têm?',
    },
  },
  {
    id: 'placa-pvc',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
    name: { en: 'Placa PVC', pt: 'Placa PVC' },
    description: {
      en: 'Rigid PVC sign boards for indoor and outdoor use. Durable, lightweight, and fully customisable.',
      pt: 'Placas em PVC rígido para interior e exterior. Duráveis, leves e totalmente personalizáveis.',
    },
    highlights: {
      en: ['3mm & 5mm thickness', 'Indoor & outdoor use', 'Pre-drilled holes available'],
      pt: ['Espessura 3mm e 5mm', 'Uso interior e exterior', 'Furos pré-perfurados disponíveis'],
    },
    turnaround: { en: '3–5 working days', pt: '3–5 dias úteis' },
    minOrder:   { en: 'From 1 unit', pt: 'A partir de 1 unidade' },
    whatsappMsg: {
      en: "Hi Crafty! I need PVC signs/plaques. Can you send me sizes and pricing?",
      pt: 'Olá Crafty! Preciso de Placas em PVC. Podem enviar tamanhos e preços?',
    },
  },
  {
    id: 'placa-acrylic',
    image: 'https://images.unsplash.com/photo-1558098329-a11cff621064?w=600&q=80',
    name: { en: 'Placa Acrylic', pt: 'Placa Acrílico' },
    description: {
      en: 'Premium acrylic plaques with a glass-like finish. Ideal for offices, awards, and branding signage.',
      pt: 'Placas em acrílico premium com acabamento semelhante ao vidro. Ideal para escritórios e prémios.',
    },
    highlights: {
      en: ['Crystal-clear gloss finish', 'Printed & engraved options', 'Standoffs & wall-mount hardware'],
      pt: ['Acabamento brilhante cristalino', 'Opções impressas e gravadas', 'Hardware de montagem incluído'],
    },
    turnaround: { en: '4–6 working days', pt: '4–6 dias úteis' },
    minOrder:   { en: 'From 1 unit', pt: 'A partir de 1 unidade' },
    whatsappMsg: {
      en: "Hi Crafty! I'm interested in Acrylic plaques/signs. What are the options?",
      pt: 'Olá Crafty! Tenho interesse em Placas de Acrílico. Quais são as opções?',
    },
  },
  {
    id: 'placa-aluminio',
    image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=600&q=80',
    name: { en: 'Placa Alumínio', pt: 'Placa Alumínio' },
    description: {
      en: 'Professional aluminium composite signs for long-lasting outdoor and indoor display applications.',
      pt: 'Placas em alumínio composto profissional para aplicações duradouras no exterior e interior.',
    },
    highlights: {
      en: ['Aluminium composite (dibond)', 'Rust-proof & weatherproof', 'Flat & rigid surface'],
      pt: ['Composto de alumínio (dibond)', 'Anti-ferrugem e impermeável', 'Superfície plana e rígida'],
    },
    turnaround: { en: '4–6 working days', pt: '4–6 dias úteis' },
    minOrder:   { en: 'From 1 unit', pt: 'A partir de 1 unidade' },
    whatsappMsg: {
      en: "Hi Crafty! I need Aluminium sign boards. Can you send details and pricing?",
      pt: 'Olá Crafty! Preciso de Placas em Alumínio. Podem enviar detalhes e preços?',
    },
  },
  {
    id: 'flyers',
    image: 'https://images.unsplash.com/photo-1634084462412-b54873c0a56d?w=600&q=80',
    name: { en: 'Flyers', pt: 'Folhetos' },
    description: {
      en: 'Eye-catching full-colour flyers for promotions, events, and marketing campaigns. Fast turnaround.',
      pt: 'Folhetos a cores chamativas para promoções, eventos e campanhas de marketing. Entrega rápida.',
    },
    highlights: {
      en: ['A4, A5, DL sizes', '130–170gsm coated stock', 'Single & double-sided'],
      pt: ['Tamanhos A4, A5, DL', 'Papel couché 130–170gsm', 'Simples e dupla face'],
    },
    turnaround: { en: '2–4 working days', pt: '2–4 dias úteis' },
    minOrder:   { en: 'From 100 units', pt: 'A partir de 100 unidades' },
    whatsappMsg: {
      en: "Hi Crafty! I need flyers printed. What sizes and quantities do you offer?",
      pt: 'Olá Crafty! Preciso de folhetos impressos. Que tamanhos e quantidades oferecem?',
    },
  },
  {
    id: 'visiting-card',
    image: 'https://images.unsplash.com/photo-1601933470096-0e34634ffcde?w=600&q=80',
    name: { en: 'Visiting Card', pt: 'Cartão de Visita' },
    description: {
      en: 'Premium business cards in matte, gloss, and soft-touch finishes. Make a lasting first impression.',
      pt: 'Cartões de visita premium em mate, brilhante e soft-touch. Cause uma ótima primeira impressão.',
    },
    highlights: {
      en: ['350gsm premium card stock', 'Matte, gloss & soft-touch', 'Spot UV & foil options'],
      pt: ['Cartão premium 350gsm', 'Mate, brilhante e soft-touch', 'Verniz UV e douramento'],
    },
    turnaround: { en: '3–5 working days', pt: '3–5 dias úteis' },
    minOrder:   { en: 'From 50 cards', pt: 'A partir de 50 cartões' },
    whatsappMsg: {
      en: "Hi Crafty! I'd like to order Visiting Cards. Can you send me pricing and finish options?",
      pt: 'Olá Crafty! Gostaria de encomendar Cartões de Visita. Podem enviar preços e opções?',
    },
  },
  {
    id: 'broucher',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    name: { en: 'Broucher', pt: 'Brochura' },
    description: {
      en: 'Professional multi-page brochures for businesses, portfolios, and product catalogues.',
      pt: 'Brochuras profissionais de várias páginas para negócios, portfólios e catálogos.',
    },
    highlights: {
      en: ['Saddle-stitch & perfect-bind', 'A4, A5 & custom sizes', 'Full-colour throughout'],
      pt: ['Agrafado e encadernação perfeita', 'A4, A5 e tamanhos personalizados', 'Cores totais em todas as páginas'],
    },
    turnaround: { en: '4–6 working days', pt: '4–6 dias úteis' },
    minOrder:   { en: 'From 25 units', pt: 'A partir de 25 unidades' },
    whatsappMsg: {
      en: "Hi Crafty! I need brochures printed for my business. What options do you have?",
      pt: 'Olá Crafty! Preciso de brochuras impressas para o meu negócio. Que opções têm?',
    },
  },
  {
    id: 'graphic-art-design',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    name: { en: 'Graphic Art & Design', pt: 'Arte Gráfica e Design' },
    description: {
      en: 'Professional graphic design for logos, layouts, and print-ready artwork. Creative solutions for your brand.',
      pt: 'Design gráfico profissional para logótipos, layouts e artes para impressão. Soluções criativas.',
    },
    highlights: {
      en: ['Logo & brand identity', 'Print-ready file formats', 'Fast turnaround revisions'],
      pt: ['Logótipo e identidade de marca', 'Formatos de ficheiro prontos a imprimir', 'Revisões com entrega rápida'],
    },
    turnaround: { en: '2–5 working days', pt: '2–5 dias úteis' },
    minOrder:   { en: 'Per project', pt: 'Por projeto' },
    whatsappMsg: {
      en: "Hi Crafty! I need graphic design / artwork help. Can we discuss the project?",
      pt: 'Olá Crafty! Preciso de ajuda com design gráfico. Podemos conversar sobre o projeto?',
    },
  },
]

export default services
