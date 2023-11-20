const DropMenuMobile = ({ data }) => {
  return (
    <ul className="w-full p-1 bg-rambow-100 absolute border border-rambow-400 text-rambow-400 hidden -right-full top-0">
      {Object.keys(data).map((list, j) => (
        <>
          <li className="font-bold underline p-1" key={list}>
            {list}
          </li>
          {data[list].map((innerList, k) => (
            <li
              className="hover:underline p-1 border-b border-rambow-300"
              key={innerList}
            >
              <a href="#">{innerList}</a>
            </li>
          ))}
        </>
      ))}
    </ul>
  );
};

export default DropMenuMobile;
