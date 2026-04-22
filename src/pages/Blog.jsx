import Footer from "../components/Footer";

const blogs = [
  { title: "How to Make Sure Your Gold Purity Test Is Fair & Accurate", desc: "The gold market in 2025 is witnessing a major shift. Rising prices, environmental responsibility, and technological advancements are reshaping how people handle their unused jewellery.", date: "January 23, 2026", img: "https://valuegold.com/wp-content/uploads/2026/03/Valuegold_jan_02.webp" },
  { title: "Why Customers Trust and Return to Harshdeep Jewellers", desc: "Instant Access to Liquid Funds, Taking Advantage of High Market Prices, Decluttering and Maximising Asset Value, Opportunities for Reinvestment.", date: "January 9, 2026", img: "https://valuegold.com/wp-content/uploads/2026/03/Valuegold_jan_01.webp" },
  { title: "The Process of Evaluating Gold and How Buyers Determine Value", desc: "We've all been there, discovering that a cherished gold chain has snapped, a ring is bent out of shape. But here's the truth: broken gold is still valuable.", date: "December 23, 2025", img: "https://valuegold.com/wp-content/uploads/2026/01/blog10.webp" },
  { title: "When to Sell, When to Hold Gold", desc: "Understanding Gold Karats Before You Buy or Sell. Gold has always been more than just a precious metal. The difference in purity plays a big role.", date: "December 9, 2025", img: "https://valuegold.com/wp-content/uploads/2026/01/blog9.webp" },
  { title: "18K, 22K and 24K Gold: Which Is Best?", desc: "What to know before selling gold? How to make sure the gold buyer is genuine? Gold selling tips in Hyderabad from trusted buyers.", date: "November 18, 2025", img: "https://valuegold.com/wp-content/uploads/2025/12/blog-8.webp" },
  { title: "How to Avoid Scams When Selling Gold", desc: "Why should I sell my gold to a certified buyer? What are the risks of selling to an uncertified buyer? Benefits of certified gold buyers.", date: "November 11, 2025", img: "https://valuegold.com/wp-content/uploads/2025/12/blog-7.webp" },
  { title: "Women's Financial Independence Through Gold", desc: "When it comes to selling gold, trust is everything. Harshdeep Jewellers delivers transparency, fair valuation, and a process you can rely on.", date: "October 25, 2025", img: "https://www.expatriates.com/img/62871920.1.jpg" },
  { title: "From Gifting to Cashing Gold Jewelry", desc: "Introduction to Purity, Weight, Current Market Rate, Hallmark Certification, Type of Gold Item, Wear and Tear, Deductions and Buyer's Credibility.", date: "October 25, 2025", img: "https://valuegold.com/wp-content/uploads/2025/10/blog6.webp" },
  { title: "Gold Recycling Trends 2025", desc: "Understanding Gold Price Trends in 2025. Insights into Current Gold Market Trends. Selling Gold for the Best Price.", date: "August 28, 2025", img: "https://valuegold.com/wp-content/uploads/2025/09/blog-5.webp" },
  { title: "Top Financial Benefits of Selling Gold", desc: "Understand the Value of Your Gold. Choose Only Trusted Gold Buyers. Verify Credentials and Insist on Transparent Valuation.", date: "August 14, 2025", img: "https://valuegold.com/wp-content/uploads/2025/09/blog-5-1.webp" },
];

export default function Blog() {
  return (
    <div className="bg-brand-cream">

      {/* HEADER */}
      <section className="bg-brand-navy py-8 sm:py-10 lg:py-12 text-center">
        <p className="text-brand-gold font-semibold text-xs sm:text-sm tracking-wider uppercase mb-1">Insights & Updates</p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Blog</h1>
      </section>

      {/* BLOG GRID */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
            {blogs.map((blog, i) => (
              <article
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col"
              >
                <div className="overflow-hidden">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full aspect-video object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col">
                  <h3 className="text-base sm:text-lg font-semibold text-brand-navy mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-3 flex-1">
                    {blog.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{blog.date}</span>
                    <span className="text-brand-navy font-medium text-xs sm:text-sm hover:text-brand-gold transition cursor-pointer">
                      READ MORE
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
