import logo from "../assets/yuwa_logo.png";
export default function Offer() {
  return (
    <div className="bg-rambow-300 w-full h-44 offer_gradient md:mt-28 mt-5">
      <div className="display_size h-full flex">
        <div className="flex-1 flex justify-center items-center flex-col">
          <img className="w-9 h-9" src={logo} alt="yuwa" />
          <h3 className="font-bold text-xl text-rambow-100 text_shadow mt-2">
            yuwa Collection
          </h3>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-rambow-400 text-lg font-bold">
              Enjoy Our Sale Offer!!!
            </p>
            <h2 className="font-bold text-white text-2xl my-3">25% - above</h2>
            <span className="text-rambow-400 text-sm">
              on eligible purchases
            </span>
          </div>
        </div>

        <div className="w-full h-44 flex-1 relative hidden md:block">
          <img
            loading="lazy"
            className="w-full h-72 object-cover absolute bottom-0 right-0"
            src="yes_men.png"
            alt="excited"
          />
        </div>
      </div>
    </div>
  );
}
