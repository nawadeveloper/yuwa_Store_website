import TiltPopUpImage from "./TiltPopUpImage";

const InnovateSection = () => {
  return (
    <section className="display_size mt-10 lg:mt-16">
      <h2 className="text-center mt-5 mb-10 font-bold text-lg text-rambow-400">
        Innovate-Discover-Uncover
      </h2>
      <TiltPopUpImage
        title="Tailored Designs for Your Unique Style"
        article="At Yuwa collection, we believe in the power of individuality. Our first and foremost commitment is to design according to your needs and preferences. Whether you're seeking a personalized touch for your home, office, or personal accessories, our dedicated team of designers is here to transform your vision into reality. We understand that each client is unique, and our goal is to create designs that resonate with your distinct style, making your space truly yours."
        img_path="design.jpg"
      />

      <div className="w-5 h-8 mx-auto -skew-x-12 light_to_dark hidden lg:block"></div>

      <TiltPopUpImage
        title="Perfection in Every Detail "
        article="At yuwa collection, we believe in the power of individuality. Our first and foremost commitment is to design according to your needs and preferences. Whether you're seeking a personalized touch for your home, office, or personal accessories, our dedicated team of designers is here to transform your vision into reality. We understand that each client is unique, and our goal is to create designs that resonate with your distinct style, making your space truly yours."
        img_side="right"
        bg_color="bg-rambow-400"
        article_color="text-rambow-100"
        img_path="men_suit.jpg"
      />
      <div className="w-5 h-8 mx-auto skew-x-12 dark_to_light hidden lg:block"></div>

      <TiltPopUpImage
        title="Hurry Up and Pick Your Bag of Elegance"
        article="Time is of the essence, and at Yuwa Collection, we understand the urgency of elevating your style. Hurry up and pick your bag of elegance! Whether it's a statement piece for your wardrobe or a transformative design for your living space, our collection is curated to meet your needs swiftly and stylishly. Don't miss out on the opportunity to embrace sophistication and functionality in every detail. Your perfect design awaits seize it now and redefine your surroundings with Yuwa Collection."
        img_path="pick_bag.png"
        title_color="text-rambow-400"
        bg_color="bg-rambow-100"
        article_color="text-rambow-400"
        button={true}
      />
    </section>
  );
};

export default InnovateSection;
