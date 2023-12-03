"use client";

import ButtonCreate from "./components/Buttons/ButtonCreate";
import ButtonSearch from "./components/Buttons/ButtonSearch";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import Operation from "./components/Operation";
import Search from "./components/Search";
import { FaRegCircleUser } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="mx-40">
      <div className="grid grid-cols-2 my-12">
        <div className="text-4xl font-bold justify-end text-white">
          Allan Zhantaykozha
        </div>
        <div className="flex justify-end">
          <ButtonCreate />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-8">
        <Cart sum={12312} title="Доход" isIncome />
        <Cart sum={5212} title="Расход" isExpense />
        <Cart sum={2313} title="Итог" isTotal />
      </div>
      <div className="my-12 gap-x-3 flex">
        <Search />
        <ButtonSearch />
      </div>
      <div>
        <div className="grid grid-cols-4 text-gray5 px-8 py-2">
          <div className="">Title</div>
          <div className="flex justify-end">Sum</div>
          <div className="flex justify-end">Category</div>
          <div className="flex justify-end">Date</div>
        </div>
        <Operation
          title="Зарплата"
          sum={42000}
          date="02/20/2023"
          category="Зарлата"
        />
        <Operation
          title="Зарплата"
          sum={42000}
          date="02/20/2023"
          category="Зарлата"
        />
        <Operation
          isExpense
          title="Зарплата"
          sum={42000}
          date="02/20/2023"
          category="Зарлата"
        />
        <Operation
          title="Зарплата"
          sum={42000}
          date="02/20/2023"
          category="Зарлата"
        />
        <Operation
          isExpense
          title="Зарплата"
          sum={42000}
          date="02/20/2023"
          category="Зарлата"
        />
      </div>
      <Modal />
    </div>
  );
}
