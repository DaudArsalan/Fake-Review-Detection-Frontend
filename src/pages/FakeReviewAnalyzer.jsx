/* eslint-disable react/no-unescaped-entities */
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
          </div>
        </div>
      </section>
    </>
  );
};

export default FakeReviewAnalyzer;
