export interface BlogPost {
  id: string;
  titleEn: string;
  titleEs: string;
  excerptEn: string;
  excerptEs: string;
  contentEn: string;
  contentEs: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    titleEn: 'The Art of Coffee Roasting',
    titleEs: 'El Arte del Tueste de Café',
    excerptEn: 'Discover the secrets behind perfect coffee roasting and how it affects the final flavor of your cup.',
    excerptEs: 'Descubre los secretos detrás del tueste perfecto del café y cómo afecta el sabor final de tu taza.',
    contentEn: 'Coffee roasting is both an art and a science. The roasting process transforms green coffee beans into the aromatic brown beans we know and love. During roasting, chemical changes occur as the beans are rapidly brought to very high temperatures. When they reach the peak of perfection, they are quickly cooled to stop the process.',
    contentEs: 'El tueste del café es tanto un arte como una ciencia. El proceso de tueste transforma los granos de café verde en los aromáticos granos marrones que conocemos y amamos. Durante el tueste, ocurren cambios químicos mientras los granos se llevan rápidamente a temperaturas muy altas.',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80',
    date: '2024-12-15',
    author: 'Carlos Mendoza',
    category: 'Roasting',
  },
  {
    id: '2',
    titleEn: 'Sustainable Coffee Farming in Peru',
    titleEs: 'Cultivo Sostenible de Café en Perú',
    excerptEn: 'Learn about our sustainable farming practices and how we support local communities in the Central Jungle.',
    excerptEs: 'Conoce nuestras prácticas de cultivo sostenible y cómo apoyamos a las comunidades locales en la Selva Central.',
    contentEn: 'Sustainable coffee farming is at the heart of what we do at ANKU Coffee Project. We work directly with farmers in the Central Jungle of Peru, providing them with fair prices and supporting sustainable agricultural practices.',
    contentEs: 'El cultivo sostenible de café está en el corazón de lo que hacemos en ANKU Coffee Project. Trabajamos directamente con agricultores en la Selva Central del Perú, proporcionándoles precios justos y apoyando prácticas agrícolas sostenibles.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    date: '2024-12-10',
    author: 'Maria Huamán',
    category: 'Sustainability',
  },
  {
    id: '3',
    titleEn: 'Understanding Coffee Origins',
    titleEs: 'Entendiendo los Orígenes del Café',
    excerptEn: 'Explore how altitude, climate, and soil affect the unique characteristics of Peruvian coffee.',
    excerptEs: 'Explora cómo la altitud, el clima y el suelo afectan las características únicas del café peruano.',
    contentEn: 'The origin of coffee beans plays a crucial role in determining their flavor profile. Peruvian coffee, grown in the highlands of the Andes, is known for its mild acidity, medium body, and notes of chocolate and nuts.',
    contentEs: 'El origen de los granos de café juega un papel crucial en determinar su perfil de sabor. El café peruano, cultivado en las tierras altas de los Andes, es conocido por su acidez suave, cuerpo medio y notas de chocolate y nueces.',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
    date: '2024-12-05',
    author: 'Jorge Quispe',
    category: 'Origins',
  },
  {
    id: '4',
    titleEn: 'The Perfect Brew: Tips and Techniques',
    titleEs: 'El Café Perfecto: Consejos y Técnicas',
    excerptEn: 'Master the art of brewing with our expert tips for making the perfect cup of coffee at home.',
    excerptEs: 'Domina el arte de preparar café con nuestros consejos expertos para hacer la taza perfecta en casa.',
    contentEn: 'Brewing the perfect cup of coffee starts with quality beans and ends with the right technique. Water temperature, grind size, and brewing time all play crucial roles in extracting the best flavors from your coffee.',
    contentEs: 'Preparar la taza perfecta de café comienza con granos de calidad y termina con la técnica correcta. La temperatura del agua, el tamaño de la molienda y el tiempo de preparación juegan roles cruciales.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
    date: '2024-11-28',
    author: 'Ana García',
    category: 'Brewing',
  },
];
