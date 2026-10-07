// ============================================================
//  CRAFTY – Products Data
//  Products are ready-to-order print bundles.
//  Prices are in EUR (€). Update with real pricing.
// ============================================================

const products = [
  {
    id: 'p1',
    image: 'https://images.unsplash.com/photo-1601933470096-0e34634ffcde?w=500&q=80',
    name: { en: '100 Business Cards', pt: '100 Cartões de Visita' },
    description: { en: 'Premium 350gsm, double-sided, matte finish', pt: 'Premium 350gsm, dupla face, acabamento mate' },
    price: '€ 24.99',
    serviceId: 'business-cards',
    whatsappMsg: {
      en: "Hi Crafty! I'd like to order the 100 Business Cards pack (€24.99). What details do you need from me?",
      pt: 'Olá Crafty! Gostaria de encomendar o pacote de 100 Cartões de Visita (€24,99). Que dados precisam de mim?',
    },
  },
  {
    id: 'p2',
    image: 'https://images.unsplash.com/photo-1634084462412-b54873c0a56d?w=500&q=80',
    name: { en: '500 A5 Flyers', pt: '500 Folhetos A5' },
    description: { en: 'Full colour, 130gsm gloss, same-day design', pt: 'Cores totais, 130gsm brilhante, design no mesmo dia' },
    price: '€ 39.99',
    serviceId: 'flyers-brochures',
    whatsappMsg: {
      en: "Hi Crafty! I'd like to order 500 A5 Flyers (€39.99). Can we proceed?",
      pt: 'Olá Crafty! Gostaria de encomendar 500 Folhetos A5 (€39,99). Podemos avançar?',
    },
  },
  {
    id: 'p3',
    image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=500&q=80',
    name: { en: 'Roll-Up Banner 85×200cm', pt: 'Banner Roll-Up 85×200cm' },
    description: { en: 'Full colour, with carry bag & stand', pt: 'Cores totais, com saco de transporte e suporte' },
    price: '€ 59.99',
    serviceId: 'banners-signage',
    whatsappMsg: {
      en: "Hi Crafty! I'd like to order a Roll-Up Banner 85×200cm (€59.99). Please send details.",
      pt: 'Olá Crafty! Gostaria de encomendar um Banner Roll-Up 85×200cm (€59,99). Por favor, enviem detalhes.',
    },
  },
  {
    id: 'p4',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80',
    name: { en: '10 Custom T-Shirts', pt: '10 Camisetas Personalizadas' },
    description: { en: 'DTG printing, front & back, any colour', pt: 'Impressão DTG, frente e costas, qualquer cor' },
    price: '€ 89.99',
    serviceId: 'tshirt-printing',
    whatsappMsg: {
      en: "Hi Crafty! I'd like to order 10 Custom T-Shirts (€89.99). What information do you need?",
      pt: 'Olá Crafty! Gostaria de encomendar 10 Camisetas Personalizadas (€89,99). Que informação precisam?',
    },
  },
  {
    id: 'p5',
    image: 'https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?w=500&q=80',
    name: { en: '100 Vinyl Stickers', pt: '100 Autocolantes em Vinil' },
    description: { en: 'Die-cut, waterproof, glossy finish', pt: 'Die-cut, impermeáveis, acabamento brilhante' },
    price: '€ 19.99',
    serviceId: 'stickers-labels',
    whatsappMsg: {
      en: "Hi Crafty! I'd like to order 100 Vinyl Stickers (€19.99). Can you help me?",
      pt: 'Olá Crafty! Gostaria de encomendar 100 Autocolantes em Vinil (€19,99). Podem ajudar?',
    },
  },
  {
    id: 'p6',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&q=80',
    name: { en: 'A1 Event Poster', pt: 'Cartaz de Evento A1' },
    description: { en: '170gsm silk, full colour, laminated', pt: '170gsm silk, cores totais, laminado' },
    price: '€ 12.99',
    serviceId: 'posters',
    whatsappMsg: {
      en: "Hi Crafty! I need an A1 Poster (€12.99). What's the process?",
      pt: 'Olá Crafty! Preciso de um Cartaz A1 (€12,99). Qual é o processo?',
    },
  },
  {
    id: 'p7',
    image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=500&q=80',
    name: { en: '50 Gift Boxes', pt: '50 Caixas de Presente' },
    description: { en: 'Custom branded, kraft or white board', pt: 'Com marca personalizada, cartão kraft ou branco' },
    price: '€ 74.99',
    serviceId: 'packaging',
    whatsappMsg: {
      en: "Hi Crafty! I'd like to order 50 custom Gift Boxes (€74.99). Can we discuss?",
      pt: 'Olá Crafty! Gostaria de encomendar 50 Caixas de Presente personalizadas (€74,99). Podemos falar?',
    },
  },
  {
    id: 'p8',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&q=80',
    name: { en: '50 Wedding Invitations', pt: '50 Convites de Casamento' },
    description: { en: 'Luxury 400gsm stock, envelope included', pt: 'Papel de luxo 400gsm, envelope incluído' },
    price: '€ 69.99',
    serviceId: 'invitations',
    whatsappMsg: {
      en: "Hi Crafty! I'm interested in 50 Wedding Invitations (€69.99). What are the customisation options?",
      pt: 'Olá Crafty! Tenho interesse em 50 Convites de Casamento (€69,99). Quais são as opções de personalização?',
    },
  },
  {
    id: 'p9',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80',
    name: { en: '250 Business Cards', pt: '250 Cartões de Visita' },
    description: { en: 'Soft-touch laminate, spot UV, premium', pt: 'Laminação soft-touch, verniz UV, premium' },
    price: '€ 44.99',
    serviceId: 'business-cards',
    whatsappMsg: {
      en: "Hi Crafty! I'd like to order 250 premium Business Cards (€44.99). Please advise.",
      pt: 'Olá Crafty! Gostaria de encomendar 250 Cartões de Visita premium (€44,99). Por favor, aconselhem.',
    },
  },
  {
    id: 'p10',
    image: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=500&q=80',
    name: { en: 'Photo Book 20 Pages', pt: 'Foto Livro 20 Páginas' },
    description: { en: 'A4 hardcover, lay-flat binding, premium paper', pt: 'A4 capa dura, encadernação lay-flat, papel premium' },
    price: '€ 34.99',
    serviceId: 'packaging',
    whatsappMsg: {
      en: "Hi Crafty! I'd like a custom photo book (€34.99). Can you tell me more about the process?",
      pt: 'Olá Crafty! Gostaria de um foto livro personalizado (€34,99). Podem explicar o processo?',
    },
  },
]

export default products
