/* eslint-disable react/no-unescaped-entities */
const Data = [
  {
    id: "1",
    title: "Nothing CMF Watch Pro 2 Smartwatch 1.32’’ AMOLED Display",
    image:
      "https://images.priceoye.pk/zero-luna-smart-watch-pakistan-priceoye-8yoph-500x500.webp",
    price: "8,999",
    reviewsPerc: "65% reviews of this product are genuine",
    productUrl:
      "https://www.daraz.pk/products/-i506837066-s2416615265.html?spm=a2a0e.searchlist.sku.5.7f6b2d4ft3SATT&search=1",
  },
  {
    id: "2",
    title:
      "Smart watch Y80 ULTRA Smart Watch 2.02 inch high-definition large screen high configuration version+8 strap combination+case",
    image:
      "https://m.media-amazon.com/images/I/41OeE8oZpdL._SX300_SY300_QL70_FMwebp_.jpg",
    price: "1,350",
    reviewsPerc: "65% reviews of this product are genuine",
    productUrl:
      "https://www.daraz.pk/products/y80-202-8-i472465052-s2251102287.html?spm=a2a0e.searchlist.sku.6.7f6b2d4fF8BwCo&search=1",
  },
  {
    id: "3",
    title: "Nothing CMF Watch Pro 2 Smartwatch 1.32’’ AMOLED Display",
    image:
      "https://images.priceoye.pk/zero-luna-smart-watch-pakistan-priceoye-8yoph-500x500.webp",
    price: "8,999",
    reviewsPerc: "65% reviews of this product are genuine",
    productUrl:
      "https://www.daraz.pk/products/-i506837066-s2416615265.html?spm=a2a0e.searchlist.sku.5.7f6b2d4ft3SATT&search=1",
  },
  {
    id: "4",
    title:
      "Smart watch Y80 ULTRA Smart Watch 2.02 inch high-definition large screen high configuration version+8 strap combination+case",
    image:
      "https://m.media-amazon.com/images/I/41OeE8oZpdL._SX300_SY300_QL70_FMwebp_.jpg",
    price: "1,350",
    reviewsPerc: "65% reviews of this product are genuine",
    productUrl:
      "https://www.daraz.pk/products/y80-202-8-i472465052-s2251102287.html?spm=a2a0e.searchlist.sku.6.7f6b2d4fF8BwCo&search=1",
  },
  {
    id: "5",
    title: "Nothing CMF Watch Pro 2 Smartwatch 1.32’’ AMOLED Display",
    image:
      "https://images.priceoye.pk/zero-luna-smart-watch-pakistan-priceoye-8yoph-500x500.webp",
    price: "8,999",
    reviewsPerc: "65% reviews of this product are genuine",
    productUrl:
      "https://www.daraz.pk/products/-i506837066-s2416615265.html?spm=a2a0e.searchlist.sku.5.7f6b2d4ft3SATT&search=1",
  },
  {
    id: "6",
    title:
      "Smart watch Y80 ULTRA Smart Watch 2.02 inch high-definition large screen high configuration version+8 strap combination+case",
    image:
      "https://m.media-amazon.com/images/I/41OeE8oZpdL._SX300_SY300_QL70_FMwebp_.jpg",
    price: "1,350",
    reviewsPerc: "65% reviews of this product are genuine",
    productUrl:
      "https://www.daraz.pk/products/y80-202-8-i472465052-s2251102287.html?spm=a2a0e.searchlist.sku.6.7f6b2d4fF8BwCo&search=1",
  },
];

const FakeReviewAnalyzer = () => {
  return (
    <>
      <section className="relative max-w-screen-xl mx-auto px-4 md:px-8 py-32 sm:py-40">
        <div className="relative z-10 gap-5 items-center">
          <div className="flex-1 flex justify-center items-center flex-col max-w-2xl py-5 sm:mx-auto text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Discover the Best Products on Daraz
            </h2>
            <p className="text-gray-500 leading-relaxed mt-3">
              Find the most reliable products based on authentic reviews. Enter
              the product keyword you're interested in, and our AI-powered
              review analyzer will fetch and rank the top 10 products for you.
            </p>
            <div className="w-full mt-10 border-2">
              <input
                type="text"
                className="w-3/4 sm:w-4/5 py-2 px-3 sm:py-4 sm:px-5 outline-none"
                placeholder="Enter a product keyword you're interested in"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-lg sm:text-xl font-semibold text-white w-1/4 sm:w-1/5 py-2 px-2 sm:py-4 sm:px-5">
                Analyze
              </button>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-lg font-bold tracking-tight text-gray-900 sm:text-2xl">
              Best 10 Products Based on Authentic Reviews
            </h3>
            <div className="border-t border-gray-300 my-4"></div>

            <div>
              <ul className="flex flex-col space-y-20 pt-20">
                {Data.map((data) => {
                  return (
                    <a key={data.id} href={data.productUrl} target="_blank">
                      <li className="relative flex flex-col sm:flex-row items-start gap-8">
                        <div className="text-2xl font-semibold">{data.id}.</div>
                        <img src={data.image} className="w-80 sm:w-40" alt="" />
                        <div className="flex flex-col justify-center space-y-2">
                          <h3 className="mb-1 text-slate-900 text-lg font-semibold">
                            {data.title}
                          </h3>
                          <p className="text-lg font-bold">Rs. {data.price}</p>
                          <p className="text-green-700 italic text-xl">
                            {data.reviewsPerc}
                          </p>
                        </div>
                      </li>
                    </a>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FakeReviewAnalyzer;
