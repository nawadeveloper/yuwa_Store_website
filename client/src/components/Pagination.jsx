import PaginationButton from "./PaginationButton";

const Pagination = () => {
  return (
    <div className="py-6 flex gap-3 justify-center items-center">
      <PaginationButton num="left" />
      <PaginationButton num="1" />
      <PaginationButton num="2" />
      <PaginationButton num="3" />
      <PaginationButton num="4" />
      <PaginationButton num="right" />
    </div>
  );
};

export default Pagination;
