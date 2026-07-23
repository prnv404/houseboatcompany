export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: React.ReactNode;
  date: string;
  author: string;
  coverImage?: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "The Ultimate Guide to Alleppey Houseboats",
    slug: "ultimate-guide-alleppey-houseboats",
    excerpt: "Everything you need to know before booking your first houseboat experience in the backwaters of Kerala.",
    content: (
      <>
        <p className="mb-4">
          Alleppey, often referred to as the Venice of the East, is famous for its intricate network of backwaters and beautifully crafted houseboats. Booking a houseboat can be an overwhelming experience if you do not know what to look for, but it is truly a once-in-a-lifetime journey. The serene backwaters offer a unique glimpse into the daily life of the locals, surrounded by lush green landscapes, coconut groves, and diverse wildlife.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Choosing the Right Houseboat</h2>
        <p className="mb-4">
          Houseboats come in various sizes, ranging from one-bedroom cozy boats for couples to massive multi-bedroom vessels for large families. It's essential to consider your group size and privacy preferences. Premium houseboats often come with an upper deck, giving you an unobstructed 360-degree view of the tranquil backwaters, which is highly recommended for those who love photography and nature watching.
        </p>
        <p className="mb-4">
          Furthermore, houseboats are generally categorized into Standard, Deluxe, Premium, and Luxury classes. While Deluxe houseboats offer air conditioning only during the night, Premium and Luxury houseboats provide round-the-clock air conditioning, higher quality furnishings, and a more personalized culinary experience. Choose the category that best fits your budget and comfort requirements.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">What's Included?</h2>
        <p className="mb-4">
          Most premium houseboats include all meals—traditional Kerala lunch, evening tea with snacks, dinner, and breakfast. Ensure you communicate any dietary restrictions ahead of time so the onboard chef can prepare accordingly. You'll typically be treated to local delicacies like Karimeen Pollichathu (pearl spot fish grilled in a banana leaf), traditional Kerala chicken curry, and an array of fresh vegetarian dishes.
        </p>
        <p className="mb-4">
          A typical cruise starts around noon and docks by sunset, providing a peaceful night's sleep on the water before returning the next morning. The experience of waking up to the gentle lapping of water and the morning calls of tropical birds is something you will cherish forever. Don't forget to pack a good book, some comfortable clothing, and your camera!
        </p>
      </>
    ),
    date: "2026-07-15",
    author: "Alleppey HouseBoat Company",
    coverImage: "/blogs/exterior.jpeg",
    readTime: "8 min read",
  },
  {
    title: "Top 5 Places to See During Your Backwater Cruise",
    slug: "top-5-places-backwater-cruise",
    excerpt: "Discover the hidden gems and must-see attractions along the scenic routes of Vembanad Lake.",
    content: (
      <>
        <p className="mb-4">
          Cruising through the backwaters is not just about the boat; it's about the incredible sights along the way. The interconnected canals, rivers, lakes, and inlets formed by more than 900 km of waterways hold many secrets. Here are the top five places you shouldn't miss during your houseboat cruise in Alleppey.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">1. Pathiramanal Island</h2>
        <p className="mb-4">
          This small island on the backwaters is a haven for hundreds of rare birds migrating from different parts of the world. It's a paradise for nature lovers and bird watchers. Accessible only by boat, the island is completely uninhabited by humans, making it a pristine spot to experience untouched nature. Look out for the pintail ducks, common teals, and cormorants.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">2. Kuttanad - The Rice Bowl of Kerala</h2>
        <p className="mb-4">
          Famous for its vast paddy fields and geographical peculiarities, farming is done below sea level in Kuttanad. The scenic beauty of the lush green fields is unmatched. As you glide past, you'll see farmers working in the fields and traditional snake boats moored along the banks. It's a fantastic place to observe the harmonious relationship between the locals and their unique environment.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">3. Karumadikuttan</h2>
        <p className="mb-4">
          This historical site is known for a black granite statue of Lord Buddha, believed to date back to the 9th or 10th century. Left over from when Buddhism was prevalent in the region, the statue is a fascinating historical anomaly. It provides a quiet, contemplative stop along your journey, rich with ancient history and local legends.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">4. Marari Beach</h2>
        <p className="mb-4">
          While technically not in the backwaters, Marari Beach is just a short drive from Alleppey and makes for a perfect pre- or post-cruise destination. It's much quieter and cleaner than other popular beaches in Kerala, offering a serene environment to relax on the golden sands under the shade of swaying coconut palms.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">5. The Local Villages and Canals</h2>
        <p className="mb-4">
          Sometimes, the best sights are not specific landmarks but the journey itself. Cruising through the narrower canals allows you to see the vibrant daily life of the backwater villages. You will witness children going to school in tiny canoes, women washing clothes by the water's edge, and local vendors selling fresh catch straight from their boats. This authentic glimpse into rural Kerala is often the highlight of the trip.
        </p>
      </>
    ),
    date: "2026-07-02",
    author: "Alleppey HouseBoat Company",
    coverImage: "/blogs/exterior copy.jpeg",
    readTime: "4 min read",
  }
];

export const getBlogPostBySlug = (slug: string) => {
  return blogPosts.find((post) => post.slug === slug);
};
