const DropMenuDesktop = (props) => {
  const menu_list = props.menu_list;

  // from props menu_name we get object.
  // menu_list include list of menu for each nav catagory.
  // check MENU_DATA.js file for menu list.

  return (
    <div className="display_size flex">
      {menu_list &&
        Object.keys(menu_list).map((col, i) => (
          <div key={i} className="flex-1">
            <ul>
              <li className="font-bold p-2">
                <a className="border-b border-rambow-400 p-2 pl-0" href="#">
                  {col}
                </a>
              </li>
              {menu_list[col].map((list, j) => (
                <li key={j} className="p-2">
                  <a className="p-2 hover:underline" href="#">
                    {list}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default DropMenuDesktop;
