"use client";

const ButtonPagination = ({ isActive }: { isActive?: boolean }) => {
  return (
    <div
      className={`${
        isActive
          ? "bg-greenBasic text-white cursor-pointer"
          : "bg-gray4 text-gray8 cursor-pointer"
      } flex  w-10 h-10 rounded-md items-center justify-center`}
    >
      <div>1</div>
    </div>
  );
};

export default ButtonPagination;
