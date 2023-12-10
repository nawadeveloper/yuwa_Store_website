import { Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div className="display_size divide-x-2 bg-rambow-400 text-white flex justify-center py-10 font-bold [&>*]:px-8 [&>*]:py-2">
      <Link to="/">go to home page</Link>
      <Link to="add_item">Add item</Link>
      <Link to="admin_product_list">view product list</Link>
    </div>
  );
};

export default AdminPanel;
