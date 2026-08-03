// BloomWire — Product Data (from original Base44 app)
const PRODUCTS = [
  {
    id: 'blush-peony-stem', slug: 'blush-peony-stem',
    name: 'Blush Peony Stem', tagline: 'A single peony, forever mid-bloom',
    category: 'single_flower', price: 249, mrp: 329, petals: 25,
    stock: 14, best_seller: true, featured: true,
    sale_tag: 'Studio Favourite', image: 'https://media.base44.com/images/public/6a6e582256382e3cc97b1d2c/522d97904_generated_9e277fc5.png',
    description: 'Our signature peony is wound petal by petal from blush chenille, layered until it catches light exactly like velvet. The sage wire stem bends and holds, so it can lean out of a bud vase or lie flat across a gift box.',
    color_name: 'Blush Rose', stem_length: 'Approx. 32 cm',
    wire_gauge: 'Craft-grade 6 mm core', sku: 'BW-PEO-01',
    care: 'Dust gently with a soft brush; keep away from water',
    deliveryTime: '3-5 business days', origin: 'India'
  },
  {
    id: 'sunflower-bouquet', slug: 'sunflower-bouquet',
    name: 'Sunflower Bouquet', tagline: 'Five suns that never set',
    category: 'bouquet', price: 899, mrp: 1199, petals: 89,
    stock: 8, best_seller: true, featured: true,
    sale_tag: 'Gift Ready', image: 'https://media.base44.com/images/public/6a6e582256382e3cc97b1d2c/d1eb52c37_generated_615343c8.png',
    description: 'Five handcrafted chenille sunflowers with sage stems, gathered and wrapped in cream artisan paper. Bright enough for a desk, generous enough to arrive as a whole gift on its own.',
    color_name: 'Butter Yellow', stem_length: 'Approx. 38 cm',
    sku: 'BW-SUN-05', care: 'Dust gently with a soft brush',
    deliveryTime: '3-5 business days', origin: 'India'
  },
  {
    id: 'lavender-bloom-pot', slug: 'lavender-bloom-pot',
    name: 'Lavender Bloom Pot', tagline: 'A little terracotta garden, indoors',
    category: 'pots', price: 749, mrp: 949, petals: 74,
    stock: 5, best_seller: false, featured: true,
    sale_tag: null, image: 'https://media.base44.com/images/public/6a6e582256382e3cc97b1d2c/f3207ee45_generated_28a83ec0.png',
    description: 'Slender lavender sprigs woven in dusty purple chenille, set into a hand-thrown terracotta pot. It needs no light, no water and no attention — only a shelf.',
    color_name: 'Dusty Lavender', stem_length: 'Approx. 24 cm with pot',
    sku: 'BW-LAV-11', care: 'Dust gently with a soft brush',
    deliveryTime: '3-5 business days', origin: 'India'
  },
  {
    id: 'marigold-keychain', slug: 'marigold-keychain',
    name: 'Marigold Keychain', tagline: 'A pocket-sized bloom',
    category: 'keychains', price: 149, mrp: 199, petals: 14,
    stock: 26, best_seller: false, featured: true,
    sale_tag: null, image: 'https://media.base44.com/images/public/6a6e582256382e3cc97b1d2c/e0179a0bd_generated_f0fedca8.png',
    description: 'A tiny marigold in warm saffron chenille on a brass ring — our most-gifted little thing, and the reward we send with milestone orders.',
    color_name: 'Saffron Marigold', stem_length: '5 cm bloom',
    sku: 'BW-KEY-02', care: 'Dust gently with a soft brush',
    deliveryTime: '2-4 business days', origin: 'India'
  },
  {
    id: 'everlasting-rose-vase-set', slug: 'everlasting-rose-vase-set',
    name: 'Everlasting Rose Vase Set', tagline: 'Deep red roses, styled and ready',
    category: 'bouquet', price: 1299, mrp: 1699, petals: 129,
    stock: 6, best_seller: true, featured: false,
    sale_tag: 'New', image: 'https://media.base44.com/images/public/6a6e582256382e3cc97b1d2c/5809dd090_generated_ef670f5c.png',
    description: 'Three velvet chenille roses in dusty red, arranged in a minimalist ceramic vase. Arrives styled, so it can be placed straight onto a table as it is.',
    color_name: 'Dusty Red', stem_length: 'Approx. 34 cm',
    sku: 'BW-ROS-03', care: 'Dust gently with a soft brush',
    deliveryTime: '3-5 business days', origin: 'India'
  },
  {
    id: 'daisy-cluster-stems', slug: 'daisy-cluster-stems',
    name: 'Daisy Cluster Stems', tagline: 'Butter-and-white, endlessly cheerful',
    category: 'single_flower', price: 399, mrp: 499, petals: 39,
    stock: 18, best_seller: false, featured: true,
    sale_tag: null, image: 'https://media.base44.com/images/public/6a6e582256382e3cc97b1d2c/91a9feb1f_generated_971fca92.png',
    description: 'A cluster of small chenille daisies on flexible sage stems — the easiest way to soften a bookshelf or top a wrapped present.',
    color_name: 'Ivory & Butter', stem_length: 'Approx. 30 cm',
    sku: 'BW-DAI-07', care: 'Dust gently with a soft brush',
    deliveryTime: '3-5 business days', origin: 'India'
  },
  {
    id: 'pink-peony-stem', slug: 'pink-peony-stem',
    name: 'Pink Peony Stem', tagline: 'Her favourite pink, permanently',
    category: 'single_flower', price: 259, mrp: 329, petals: 25,
    stock: 11, best_seller: false, featured: false,
    sale_tag: null, image: 'https://media.base44.com/images/public/6a6e582256382e3cc97b1d2c/522d97904_generated_9e277fc5.png',
    description: 'The peony you know, in a deeper rose. Single-stem, tissue-wrapped, and ready to slip into a card-sized gift.',
    color_name: 'Deep Rose', stem_length: 'Approx. 32 cm',
    sku: 'BW-PEO-02', care: 'Dust gently with a soft brush',
    deliveryTime: '3-5 business days', origin: 'India'
  },
  {
    id: 'sage-daisy-pot', slug: 'sage-daisy-pot',
    name: 'Sage Daisy Pot', tagline: 'Quiet green, quietly kept',
    category: 'pots', price: 649, mrp: 799, petals: 64,
    stock: 4, best_seller: false, featured: false,
    sale_tag: null, image: 'https://media.base44.com/images/public/6a6e582256382e3cc97b1d2c/f3207ee45_generated_28a83ec0.png',
    description: 'Ivory daisies with sage foliage planted into a small terracotta pot — our most understated piece, and the one people keep on their desks.',
    color_name: 'Sage & Ivory', stem_length: 'Approx. 22 cm with pot',
    sku: 'BW-DAI-12', care: 'Dust gently with a soft brush',
    deliveryTime: '3-5 business days', origin: 'India'
  }
];

const GIFT_SETS = [
  {
    id: 'birthday-bloom-box-set',
    name: 'Birthday Bloom Box',
    description: 'A bouquet, a keepsake and a note',
    includes: ['Sunflower Bouquet', 'Marigold Keychain', 'Handwritten gift card'],
    price: 999, mrp: 1398,
    image: 'https://media.base44.com/images/public/6a6e582256382e3cc97b1d2c/d1eb52c37_generated_615343c8.png'
  },
  {
    id: 'anniversary-rose-set-gift',
    name: 'Anniversary Rose Set',
    description: 'Three roses that outlast the year',
    includes: ['Everlasting Rose Vase Set', 'Blush Peony Stem', 'Gift note'],
    price: 1449, mrp: 1948,
    image: 'https://media.base44.com/images/public/6a6e582256382e3cc97b1d2c/5809dd090_generated_ef670f5c.png'
  },
  {
    id: 'thank-you-little-things',
    name: 'Thank You Little Things',
    description: 'Small, sincere, unforgettable',
    includes: ['Daisy Cluster Stems', 'Marigold Keychain', 'Kraft gift sleeve'],
    price: 499, mrp: 698,
    image: 'https://media.base44.com/images/public/6a6e582256382e3cc97b1d2c/91a9feb1f_generated_971fca92.png'
  }
];

const REVIEWS = [
  { customer_name: 'Ananya R.', location: 'Mumbai', rating: 5, title: 'Looks unreal in person', body: 'I ordered the blush peony expecting something craft-like, and it arrived looking like a real garden peony. The velvet catches light beautifully. Three months on my desk and it still looks brand new.' },
  { customer_name: 'Rahul M.', location: 'Delhi', rating: 5, title: 'Best gift I\'ve given', body: 'Gave the sunflower bouquet to my sister for her birthday. She has it on her bedside table and keeps telling people it never needs water. Packaging was genuinely lovely too.' },
  { customer_name: 'Priya S.', location: 'Bangalore', rating: 5, title: 'Perfect for an allergy home', body: 'We can\'t keep fresh flowers because of my son\'s allergies. This little lavender pot gave us that feeling back without any of the sneezing.' },
  { customer_name: 'Sneha K.', location: 'Pune', rating: 5, title: 'The stems really do bend', body: 'I reshaped the daisies twice to fit a narrow vase and they held every time. Feels sturdy, not flimsy.' },
  { customer_name: 'Vikram T.', location: 'Hyderabad', rating: 5, title: 'Tiny but so well made', body: 'Bought six marigold keychains as return gifts. Every single person asked where they were from.' },
  { customer_name: 'Pooja B.', location: 'Jaipur', rating: 5, title: 'Local pride', body: 'Lovely to see this level of craft coming out of Jaipur. The rose set is now the centrepiece of our dining table.' }
];

const PETALS_ACTIVITIES = [
  { user_name: 'Meera', action: 'just earned 75 Petals for buying', product_name: 'Sage Lavender Bouquet', type: 'earn', petals: 75 },
  { user_name: 'Ananya', action: 'just earned 40 Petals for buying', product_name: 'Blush Peony Stem', type: 'earn', petals: 40 },
  { user_name: 'Isha', action: 'just unlocked the', product_name: 'Bloom tier!', type: 'tier', petals: 0 },
  { user_name: 'Someone', action: 'just redeemed a', product_name: 'Free Marigold Keychain!', type: 'redeem', petals: 0 },
  { user_name: 'Rahul', action: 'just unlocked the', product_name: 'Blossom tier!', type: 'tier', petals: 0 }
];

const LEADERBOARD = [
  { rank: 1, name: 'Ananya R.', tier: 'Bloom', petals: 2100 },
  { rank: 2, name: 'Rahul M.', tier: 'Blossom', petals: 1640 },
  { rank: 3, name: 'Meera S.', tier: 'Blossom', petals: 980 },
  { rank: 4, name: 'Kabir D.', tier: 'Blossom', petals: 620 },
  { rank: 5, name: 'Isha K.', tier: 'Bud', petals: 410 }
];

const HOMEPAGE_TESTIMONIALS = [
  { text: 'Got the Red Rose Stem for our anniversary — it\'s been 6 months and it looks exactly like day one. My wife absolutely loves it!', author: 'Arjun', location: 'Mumbai' },
  { text: 'The Sunflower Bouquet Pot brightens my desk every day. No watering, no maintenance, just beauty.', author: 'Priya', location: 'Bangalore' },
  { text: 'Gifted the Birthday Bloom Box to my sister. She couldn\'t believe they weren\'t real flowers!', author: 'Sneha', location: 'Pune' },
  { text: 'Marigold Keychain on my bag always gets compliments. Best ₹199 I\'ve spent!', author: 'Aakash', location: 'Kolkata' }
];

if (typeof module !== 'undefined') module.exports = { PRODUCTS, GIFT_SETS, REVIEWS, PETALS_ACTIVITIES, LEADERBOARD, HOMEPAGE_TESTIMONIALS };
