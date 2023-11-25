const PaginationButton = ({ num }) => {
  let element = () => {
    if (num === "left") {
      return <span className="material-symbols-rounded">chevron_left</span>;
    } else if (num === "right") {
      return <span className="material-symbols-rounded">chevron_right</span>;
    } else {
      return num;
    }
  };

  return (
    <button className="w-10 h-10 flex justify-center items-center p-1 border-2 border-rambow-300 text-rambow-400 rounded-lg hover:bg-rambow-100">
      {element()}
    </button>
  );
};

export default PaginationButton;
