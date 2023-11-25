const ItemSample = ({ img_path, product_name }) => {
  return (
    <div className="border border-rambow-400 p-2 pb-0 rounded-sm">
      <div className="h-64 md:h-80 border border-rambow-400 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          loading="lazy"
          src={img_path}
          alt="product"
        />
      </div>

      <div className="flex py-2 justify-between">
        <h4 className="font-bold text-sm">{product_name}</h4>
        <span className="material-symbols-rounded">favorite</span>
      </div>
    </div>
  );
};

export default ItemSample;
