// Primary navigation shown in the sticky site header
export const headers = [
  { title: 'Products', key: 'products', url: '/products' },
  { title: 'About', key: 'about_us', url: '/about-us' },
  { title: 'Contact', key: 'contact_us', url: '/contact' },
]

// Anchor nav rendered only on the homepage
export const homeAnchors = [
  { title: 'Capabilities', href: '#specimens' },
  { title: 'Materials', href: '#materials' },
  { title: 'By the numbers', href: '#figures' },
  { title: 'FOB & lanes', href: '#lanes' },
]

// Category quick-links kept for programmatic use (product landing / footer)
export const productCategories = [
  { title: `Women's wear`, key: 'women', url: '/products/women' },
  { title: `Men's wear`, key: 'men', url: '/products/men' },
  { title: `Kids' wear`, key: 'kids', url: '/products/kids' },
]
