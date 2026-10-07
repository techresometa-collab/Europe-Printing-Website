// ============================================================
//  CRAFTY – Gallery Data
//  Replace image URLs with real portfolio photos.
//  Categories must match the GALLERY_CATEGORIES keys.
// ============================================================

export const GALLERY_CATEGORIES = {
  all:           { en: 'All',            pt: 'Todos' },
  cards:         { en: 'Business Cards', pt: 'Cartões' },
  banners:       { en: 'Banners',        pt: 'Banners' },
  apparel:       { en: 'T-Shirts',       pt: 'Camisetas' },
  flyers:        { en: 'Flyers',         pt: 'Folhetos' },
  packaging:     { en: 'Packaging',      pt: 'Embalagens' },
  invitations:   { en: 'Invitations',    pt: 'Convites' },
}

const gallery = [
  {
    id: 'g1',
    category: 'cards',
    src: 'https://images.unsplash.com/photo-1601933470096-0e34634ffcde?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1601933470096-0e34634ffcde?w=400&q=75',
    label: { en: 'Premium Business Cards', pt: 'Cartões de Visita Premium' },
  },
  {
    id: 'g2',
    category: 'banners',
    src: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=400&q=75',
    label: { en: 'Event Roll-Up Banner', pt: 'Banner Roll-Up para Evento' },
  },
  {
    id: 'g3',
    category: 'apparel',
    src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=75',
    label: { en: 'Custom Team T-Shirts', pt: 'Camisetas Personalizadas de Equipa' },
  },
  {
    id: 'g4',
    category: 'flyers',
    src: 'https://images.unsplash.com/photo-1634084462412-b54873c0a56d?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1634084462412-b54873c0a56d?w=400&q=75',
    label: { en: 'A5 Marketing Flyers', pt: 'Folhetos de Marketing A5' },
  },
  {
    id: 'g5',
    category: 'invitations',
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&q=75',
    label: { en: 'Wedding Invitation Suite', pt: 'Conjunto de Convites de Casamento' },
  },
  {
    id: 'g6',
    category: 'packaging',
    src: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=400&q=75',
    label: { en: 'Branded Gift Boxes', pt: 'Caixas de Presente com Marca' },
  },
  {
    id: 'g7',
    category: 'cards',
    src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=75',
    label: { en: 'Soft-Touch Business Cards', pt: 'Cartões Soft-Touch' },
  },
  {
    id: 'g8',
    category: 'banners',
    src: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400&q=75',
    label: { en: 'Outdoor Vinyl Banner', pt: 'Banner Exterior em Vinil' },
  },
  {
    id: 'g9',
    category: 'flyers',
    src: 'https://images.unsplash.com/photo-1609159454091-a24e8fbe3e8c?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1609159454091-a24e8fbe3e8c?w=400&q=75',
    label: { en: 'Event Programme', pt: 'Programa de Evento' },
  },
  {
    id: 'g10',
    category: 'apparel',
    src: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&q=75',
    label: { en: 'Screen-Printed Hoodies', pt: 'Sweatshirts com Serigrafia' },
  },
  {
    id: 'g11',
    category: 'packaging',
    src: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=400&q=75',
    label: { en: 'Custom Mailer Boxes', pt: 'Caixas de Envio Personalizadas' },
  },
  {
    id: 'g12',
    category: 'invitations',
    src: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=400&q=75',
    label: { en: 'Luxury Foil Invitations', pt: 'Convites com Douramento' },
  },
  {
    id: 'g13',
    category: 'cards',
    src: 'https://images.unsplash.com/photo-1622556498246-755f44ca76f3?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1622556498246-755f44ca76f3?w=400&q=75',
    label: { en: 'Spot UV Business Cards', pt: 'Cartões com Verniz UV' },
  },
  {
    id: 'g14',
    category: 'flyers',
    src: 'https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=400&q=75',
    label: { en: 'Restaurant Menu', pt: 'Ementa de Restaurante' },
  },
  {
    id: 'g15',
    category: 'apparel',
    src: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&q=75',
    label: { en: 'Corporate Polo Shirts', pt: 'Polo Corporativo' },
  },
  {
    id: 'g16',
    category: 'banners',
    src: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=400&q=75',
    label: { en: 'Trade Show Display', pt: 'Expositor para Feira' },
  },
]

export default gallery
