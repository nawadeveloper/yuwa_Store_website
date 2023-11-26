const FrameSection = () => {
  return (
    <div className="display_size_noPadding px-5 sm:px-16 md:px-24 py-10 lg:py-28">
      <div className="lg:relative lg:flex lg:justify-end">
        <div className="hidden lg:block absolute w-[22.5%] h-[70%] -top-[20%] left-[5%] border-4 border-white rounded-md drop_shadow">
          <img
            className="w-full h-full object-cover brightness-75"
            loading="lazy"
            src="display_1.jpg"
            alt="Shop_item_display"
          />
        </div>
        <div className="hidden lg:block absolute w-[15%] h-[60%] top-[20%] left-[22%] border-4 border-white rounded-md drop_shadow">
          <img
            className="w-full h-full object-cover brightness-75"
            loading="lazy"
            src="display_2.jpg"
            alt="Shop_item_display"
          />
        </div>

        <div className="hidden lg:block absolute w-[15%] h-[80%] top-[35%] left-0 border-4 border-white rounded-md drop_shadow">
          <img
            className="w-full h-full object-cover brightness-75"
            loading="lazy"
            src="lady_fashion.jpg"
            alt="Shop_item_display"
          />
        </div>
        <div className="lg:w-[70%] bg-rambow-200 rounded-2xl">
          <div className="p-12 lg:ml-[10%]">
            <h3 className="font-bold text-lg text-rambow-100 pb-4 text_shadow">
              Ultimate Destination for High-End Fashion
            </h3>
            <p className="text-justify text-rambow-400 xl:text-lg">
              Indulge in luxury at Yuwa Collection, your one-stop destination
              for high-end fashion. Elevate your style with ease as we showcase
              an exclusive selection of top brands, ensuring that you find
              premium, on-trend products all in one place. Welcome to a shopping
              experience where luxury meets convenience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameSection;
