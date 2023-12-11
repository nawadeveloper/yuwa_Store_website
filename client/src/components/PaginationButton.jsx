const PaginationButton = ({ num, changePage, currentPage }) => {
  return (
    <button
      onClick={() => changePage(num)}
      disabled={currentPage === num}
      className={`w-10 h-10 flex justify-center items-center p-1 border-2
       border-rambow-300 text-rambow-400 rounded-lg hover:bg-rambow-100
        ${currentPage === num ? "active_page" : ""}`}
    >
      {num}
    </button>
  );
};

export default PaginationButton;
