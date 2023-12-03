"use client";

interface OperationProps {
  title: string;
  sum: number;
  date: string;
  category: string;
  isExpense?: boolean;
}

const Operation = ({
  title,
  sum,
  date,
  category,
  isExpense,
}: OperationProps) => {
  return (
    <div className="w-full bg-gray3 text-gray6 px-9 py-5 rounded-md grid grid-cols-4 my-3">
      <div className="">{title}</div>
      <div
        className={`flex justify-end ${
          isExpense ? "text-redBasic" : "text-greenLight"
        } `}
      >
        {isExpense ? "-" : "+"}
        {sum}
      </div>
      <div className="flex justify-end">{category}</div>
      <div className="flex justify-end">{date}</div>
    </div>
  );
};

export default Operation;
