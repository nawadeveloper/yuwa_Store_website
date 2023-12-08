import { Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div>
      <Link to="/">go to home page</Link>
      <Link to="add_item">Add item</Link>
      <Link to="admin_product_list">view product list</Link>
    </div>
  );
};

export default AdminPanel;
