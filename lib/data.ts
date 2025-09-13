import { Product, Category } from './types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    slug: 'electronics',
    description: 'Latest gadgets and tech devices',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop',
    productCount: 45,
    subcategories: [
      { id: '1-1', name: 'Smartphones', slug: 'smartphones', productCount: 12 },
      { id: '1-2', name: 'Laptops', slug: 'laptops', productCount: 8 },
      { id: '1-3', name: 'Headphones', slug: 'headphones', productCount: 15 },
      { id: '1-4', name: 'Cameras', slug: 'cameras', productCount: 10 },
    ]
  },
  {
    id: '2',
    name: 'Fashion',
    slug: 'fashion',
    description: 'Trendy clothing and accessories',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
    productCount: 78,
    subcategories: [
      { id: '2-1', name: 'Men\'s Clothing', slug: 'mens-clothing', productCount: 25 },
      { id: '2-2', name: 'Women\'s Clothing', slug: 'womens-clothing', productCount: 30 },
      { id: '2-3', name: 'Shoes', slug: 'shoes', productCount: 15 },
      { id: '2-4', name: 'Accessories', slug: 'accessories', productCount: 8 },
    ]
  },
  {
    id: '3',
    name: 'Home & Garden',
    slug: 'home-garden',
    description: 'Furniture and home essentials',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    productCount: 32,
    subcategories: [
      { id: '3-1', name: 'Furniture', slug: 'furniture', productCount: 18 },
      { id: '3-2', name: 'Decor', slug: 'decor', productCount: 8 },
      { id: '3-3', name: 'Kitchen', slug: 'kitchen', productCount: 6 },
    ]
  },
  {
    id: '4',
    name: 'Sports & Fitness',
    slug: 'sports-fitness',
    description: 'Sports equipment and fitness gear',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    productCount: 28,
    subcategories: [
      { id: '4-1', name: 'Fitness Equipment', slug: 'fitness-equipment', productCount: 12 },
      { id: '4-2', name: 'Outdoor Sports', slug: 'outdoor-sports', productCount: 10 },
      { id: '4-3', name: 'Team Sports', slug: 'team-sports', productCount: 6 },
    ]
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    description: 'The most advanced iPhone with titanium design, A17 Pro chip, and professional camera system.',
    price: 1199,
    originalPrice: 1299,
    images: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop'
    ],
    category: 'Electronics',
    subcategory: 'Smartphones',
    brand: 'Apple',
    rating: 4.8,
    reviewCount: 1247,
    inStock: true,
    stockCount: 25,
    tags: ['smartphone', 'apple', '5g', 'camera', 'premium'],
    specifications: {
      'Display': '6.7" Super Retina XDR',
      'Processor': 'A17 Pro chip',
      'Storage': '256GB',
      'Camera': '48MP Main, 12MP Ultra Wide, 12MP Telephoto',
      'Battery': 'Up to 29 hours video playback',
      'Material': 'Titanium'
    },
    has3DModel: true,
    modelUrl: '/3d-models/iphone-15-pro-max.glb',
    colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'],
    weight: '221g',
    dimensions: '159.9 × 76.7 × 8.25 mm',
    material: 'Titanium',
    features: ['5G', 'Face ID', 'Wireless Charging', 'Water Resistant', 'ProRAW']
  },
  {
    id: '2',
    name: 'MacBook Pro 16" M3 Max',
    description: 'Powerful laptop with M3 Max chip, Liquid Retina XDR display, and all-day battery life.',
    price: 3499,
    originalPrice: 3699,
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop'
    ],
    category: 'Electronics',
    subcategory: 'Laptops',
    brand: 'Apple',
    rating: 4.9,
    reviewCount: 892,
    inStock: true,
    stockCount: 12,
    tags: ['laptop', 'apple', 'm3-max', 'professional', 'creative'],
    specifications: {
      'Display': '16.2" Liquid Retina XDR',
      'Processor': 'M3 Max chip',
      'Memory': '36GB unified memory',
      'Storage': '1TB SSD',
      'Graphics': '40-core GPU',
      'Battery': 'Up to 22 hours'
    },
    has3DModel: true,
    modelUrl: '/3d-models/macbook-pro-16.glb',
    colors: ['Space Black', 'Silver'],
    weight: '2.16 kg',
    dimensions: '355.7 × 248.1 × 16.8 mm',
    material: 'Aluminum',
    features: ['Touch ID', 'FaceTime HD Camera', 'Six-speaker Sound System', 'MagSafe 3', 'Thunderbolt 4']
  },
  {
    id: '3',
    name: 'AirPods Pro (2nd Gen)',
    description: 'Active noise cancellation, spatial audio, and up to 6 hours of listening time.',
    price: 249,
    originalPrice: 279,
    images: [
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop'
    ],
    category: 'Electronics',
    subcategory: 'Headphones',
    brand: 'Apple',
    rating: 4.7,
    reviewCount: 2156,
    inStock: true,
    stockCount: 45,
    tags: ['wireless', 'noise-cancellation', 'spatial-audio', 'premium'],
    specifications: {
      'Driver': 'Custom high-excursion Apple driver',
      'Chip': 'H2 chip',
      'Battery': 'Up to 6 hours (with ANC)',
      'Case Battery': 'Up to 30 hours total',
      'Connectivity': 'Bluetooth 5.3',
      'Water Resistance': 'IPX4'
    },
    has3DModel: true,
    modelUrl: '/3d-models/airpods-pro-2.glb',
    colors: ['White'],
    weight: '5.3g (each earbud)',
    dimensions: '45.2 × 60.9 × 21.7 mm (case)',
    material: 'Plastic',
    features: ['Active Noise Cancellation', 'Transparency Mode', 'Spatial Audio', 'Adaptive EQ', 'Sweat and Water Resistant']
  },
  {
    id: '4',
    name: 'Nike Air Max 270',
    description: 'Comfortable running shoes with Max Air unit and breathable mesh upper.',
    price: 150,
    originalPrice: 180,
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop'
    ],
    category: 'Fashion',
    subcategory: 'Shoes',
    brand: 'Nike',
    rating: 4.5,
    reviewCount: 1834,
    inStock: true,
    stockCount: 67,
    tags: ['running', 'comfortable', 'athletic', 'casual'],
    specifications: {
      'Upper': 'Mesh and synthetic',
      'Midsole': 'Max Air unit',
      'Outsole': 'Rubber',
      'Weight': '320g (size 9)',
      'Drop': '8mm',
      'Type': 'Running/Casual'
    },
    has3DModel: true,
    modelUrl: '/3d-models/nike-air-max-270.glb',
    colors: ['Black/White', 'White/Black', 'Blue/White', 'Red/White'],
    sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'],
    weight: '320g',
    material: 'Mesh, Synthetic, Rubber',
    features: ['Max Air Cushioning', 'Breathable Mesh', 'Lightweight', 'Durable Rubber Outsole']
  },
  {
    id: '5',
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Premium Android smartphone with S Pen, 200MP camera, and AI-powered features.',
    price: 1299,
    originalPrice: 1399,
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop'
    ],
    category: 'Electronics',
    subcategory: 'Smartphones',
    brand: 'Samsung',
    rating: 4.6,
    reviewCount: 987,
    inStock: true,
    stockCount: 18,
    tags: ['android', 'samsung', 's-pen', 'camera', 'ai'],
    specifications: {
      'Display': '6.8" Dynamic AMOLED 2X',
      'Processor': 'Snapdragon 8 Gen 3',
      'Storage': '256GB',
      'Camera': '200MP Main, 50MP Periscope, 10MP Telephoto, 12MP Ultra Wide',
      'Battery': '5000mAh',
      'S Pen': 'Included'
    },
    has3DModel: true,
    modelUrl: '/3d-models/galaxy-s24-ultra.glb',
    colors: ['Titanium Black', 'Titanium Gray', 'Titanium Violet', 'Titanium Yellow'],
    weight: '232g',
    dimensions: '162.3 × 79.0 × 8.6 mm',
    material: 'Titanium',
    features: ['S Pen', '200MP Camera', 'AI Photo Editing', '5G', 'Wireless Charging', 'Water Resistant']
  },
  {
    id: '6',
    name: 'Sony WH-1000XM5',
    description: 'Industry-leading noise canceling headphones with 30-hour battery life.',
    price: 399,
    originalPrice: 449,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop'
    ],
    category: 'Electronics',
    subcategory: 'Headphones',
    brand: 'Sony',
    rating: 4.8,
    reviewCount: 1456,
    inStock: true,
    stockCount: 23,
    tags: ['noise-canceling', 'wireless', 'premium', 'long-battery'],
    specifications: {
      'Driver': '30mm dynamic',
      'Frequency Response': '4Hz-40kHz',
      'Battery': 'Up to 30 hours',
      'Quick Charge': '3 min = 3 hours',
      'Connectivity': 'Bluetooth 5.2',
      'Weight': '250g'
    },
    has3DModel: true,
    modelUrl: '/3d-models/sony-wh-1000xm5.glb',
    colors: ['Black', 'Silver'],
    weight: '250g',
    dimensions: '210 × 185 × 80 mm',
    material: 'Plastic, Metal',
    features: ['Industry-Leading Noise Canceling', '30-Hour Battery', 'Quick Attention Mode', 'Speak-to-Chat', 'Multipoint Connection']
  },
  {
    id: '7',
    name: 'Adidas Ultraboost 22',
    description: 'Responsive running shoes with Boost midsole and Primeknit+ upper.',
    price: 180,
    originalPrice: 200,
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop'
    ],
    category: 'Fashion',
    subcategory: 'Shoes',
    brand: 'Adidas',
    rating: 4.4,
    reviewCount: 1234,
    inStock: true,
    stockCount: 34,
    tags: ['running', 'boost', 'responsive', 'athletic'],
    specifications: {
      'Upper': 'Primeknit+',
      'Midsole': 'Boost',
      'Outsole': 'Continental Rubber',
      'Weight': '310g (size 9)',
      'Drop': '10mm',
      'Type': 'Running'
    },
    has3DModel: true,
    modelUrl: '/3d-models/adidas-ultraboost-22.glb',
    colors: ['Core Black/White', 'Cloud White/Black', 'Solar Red/White', 'Blue/White'],
    sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'],
    weight: '310g',
    material: 'Primeknit+, Boost, Continental Rubber',
    features: ['Boost Midsole', 'Primeknit+ Upper', 'Continental Rubber Outsole', 'Responsive Cushioning']
  },
  {
    id: '8',
    name: 'Canon EOS R5',
    description: 'Professional mirrorless camera with 45MP sensor and 8K video recording.',
    price: 3899,
    originalPrice: 4299,
    images: [
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop'
    ],
    category: 'Electronics',
    subcategory: 'Cameras',
    brand: 'Canon',
    rating: 4.9,
    reviewCount: 567,
    inStock: true,
    stockCount: 8,
    tags: ['camera', 'mirrorless', 'professional', '8k', '45mp'],
    specifications: {
      'Sensor': '45MP Full-Frame CMOS',
      'Video': '8K RAW, 4K 120p',
      'ISO': '100-51200 (expandable to 102400)',
      'Autofocus': 'Dual Pixel CMOS AF II',
      'Burst': 'Up to 20 fps',
      'Stabilization': '5-axis IBIS'
    },
    has3DModel: true,
    modelUrl: '/3d-models/canon-eos-r5.glb',
    colors: ['Black'],
    weight: '650g (body only)',
    dimensions: '138 × 97.5 × 88 mm',
    material: 'Magnesium Alloy',
    features: ['45MP Sensor', '8K Video', '5-Axis IBIS', 'Dual Pixel AF', 'Weather Sealed', 'Dual Card Slots']
  }
];

export const featuredProducts = products.slice(0, 6);
export const trendingProducts = products.slice(2, 8);
export const newArrivals = products.slice(0, 4);
