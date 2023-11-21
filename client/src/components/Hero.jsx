const Hero = () => {
  return (
    <section className="display_size py-8">
      <div className="text-center">
        <h1 className="text-5xl text-rambow-300 font-bold">yuwa Collection</h1>
        <p className="text-sm text-rambow-400">
          Beyond Fashion, It's a Lifestyle Revolution.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex-1">
          <div className="md:h-[669px] w-full flex flex-col md:relative">
            <img
              className="hidden md:inline-block absolute bottom-0 left-0"
              loading="lazy"
              src="men.png"
              alt="MEN STANDING IMAGE"
            />

            <div className="md:mt-[120px] lg:mt-auto">
              <h2 className="md:ml-[225px] p-8 pb-2 font-bold text-sm lg:text-md">
                Unveiling a World of Style for Every Man
              </h2>

              <div className="men_gradient rounded-t-3xl">
                <div className="md:ml-[225px] p-4 lg:p-8 text-justify text-rambow-400">
                  <article>
                    Explore unmatched style at our men's fashion hub, where
                    sophistication meets comfort. From sleek suits to casual
                    wear, discover diverse clothing, shoes, and accessories for
                    every age and size. Elevate your look with our curated
                    collection, blending fashion and functionality seamlessly.
                  </article>

                  <div className="flex justify-center">
                    <button className="px-8 py-2 font-bold mx-auto mt-10 border border-rambow-400 bg-rambow-300 hover:bg-rambow-100">
                      Check Our Men Collection.
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="md:h-[669px] w-full flex flex-col md:relative">
            <img
              className="hidden md:inline-block absolute bottom-0 right-0"
              loading="lazy"
              src="women.png"
              alt="WOMEN STANDING IMAGE"
            />

            <div className="md:mt-[120px] lg:mt-auto">
              <h2 className="md:mr-[225px] p-8 pb-2 font-bold text-sm lg:text-md">
                Elevate Your Wardrobe with Timeless Elegance
              </h2>

              <div className="women_gradient rounded-t-3xl">
                <div className="md:mr-[225px] p-4 lg:p-8 text-justify text-rambow-200">
                  <article>
                    Discover elegance at our women's fashion hub with a curated
                    collection of clothing, shoes, and accessories. From
                    timeless classics to the latest trends, find styles that
                    celebrate your individuality. Embracing diversity, we offer
                    sizes and age-appropriate selections to empower confidence.
                    Elevate your wardrobe with chic and inclusive fashion.
                  </article>

                  <div className="flex justify-center">
                    <button className="px-8 py-2 font-bold mx-auto mt-10 border text-rambow-400 border-rambow-100 bg-rambow-300 hover:bg-rambow-100">
                      Check Our Men Collection.
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
