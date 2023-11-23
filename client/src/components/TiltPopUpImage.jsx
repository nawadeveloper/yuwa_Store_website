const TiltPopUpImage = ({
  title = "Give Title",
  article = "article section",
  img_path,
  bg_color = "bg-rambow-300",
  title_color = "text-rambow-100",
  article_color = "text-white",
  img_side = "left",
  button = false,
}) => {
  let img_class =
    img_side === "left" ? "lg:left-0 lg:-rotate-12" : "lg:right-0 lg:rotate-12";

  let article_side =
    img_side === "left"
      ? "lg:ml-36 lg:pl-80 lg:pr-10 lg:rounded-r-[60px]"
      : "lg:mr-36 lg:pr-80 lg:pl-10 lg:rounded-l-[60px]";
  return (
    <div className="px-16 mt-64 lg:mt-0 md:px-24">
      <div className="relative">
        <div
          className={`lg:w-96 w-[80%] ml-[10%] h-64 p-2 border-2 border-white rounded-lg -top-52 absolute lg:top-1/2 lg:-translate-y-1/2 lg:ml-0 ${img_class}`}
        >
          <img
            className="object-cover w-full h-full rounded-lg"
            loading="lazy"
            src={img_path}
            alt="DESIGN"
          />
        </div>
        <div
          className={`${bg_color} ${article_side} p-10 pt-20 lg:py-24 text-justify rounded-lg`}
        >
          <h3 className={`font-bold ${title_color} text-2xl pb-3`}>{title}</h3>
          <article className={`text-md lg:text-lg ${article_color}`}>
            {article}
          </article>
        </div>
        {button && (
          <button className="absolute rounded-md border-2 border-white bg-rambow-300 text-rambow-100 font-bold left-1/2 px-6 py-3 bottom-0 translate-y-1/2 -translate-x-1/2 lg:-translate-x-0 hover:text-rambow-400 hover:bg-rambow-200">
            Contact Us For Detail.
          </button>
        )}
      </div>
    </div>
  );
};

export default TiltPopUpImage;
