import React from "react";
import { CgProfile } from "react-icons/cg";
import { BsCalculatorFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Home() {
  const Expense = [
    {
        id: "01",
        Description: "Pizza",
        Amount: -400,
        Date: "01-06-2020",
      },{
        id: "02",
        Description: "Burger",
        Amount: -600,
        Date: "21-11-2020",
      },{
        id: "03",
        Description: "Rent",
        Amount: 3000,
        Date: "05-12-2020",
      },{
        id: "04",
        Description: "Salary",
        Amount: 1000,
        Date: "10-02-2021",
      },
      {
        id: "05",
        Description: "Grocery",
        Amount: -8000,
        Date: "12-02-2021",
      },{
        id: "06",
        Description: "Stationery",
        Amount: -1200,
        Date: "08-03-2021",
      },
  ];

  return (
    <div className="bg-blue-400">
      <div className="flex justify-center flex-col items-center">
        <div className="bg-white p-10 m-10 max-w-6xl w-full flex flex-col rounded-lg">
          <div className="flex flex-col justify-center items-center">
            {/* <h1 className="text-4xl font-bold ">Expense Tracker System</h1> */}

            <h3 className="pt-6 pb-2 text-6xl text-blue-600">
              <CgProfile />
            </h3>
            <h3 className="font-bold text-2xl">Mudassir</h3>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="flex p-4 justify-center">
              <h1 className="text-4xl p-2 pt-4 ">
                <BsCalculatorFill />
              </h1>
              <div>
                <h1 className="text-2xl font-semibold">Your Balance</h1>
                <h4 className="text-2xl font-semibold">$500</h4>
              </div>
            </div>

            <div className="bg-blue-600 text-white w-64 p-3 rounded-lg flex justify-between px-6">
              <div>
                <h1 className="text-2xl font-semibold">Income</h1>
                <p className="text-center py-0 text-xl">$800</p>
              </div>
              <div>
                <h1 className="text-2xl font-semibold">Expense</h1>
                <p className="text-center py-0 text-xl">$500</p>
              </div>
            </div>
          </div>

          <div className="flex py-8 gap-4 justify-start  items-start">
            <div>
              <button className="bg-blue-600 text-white w-64 p-3 rounded-lg">
                Add Trannsaction
              </button>
            </div>
            <div>
              <button className="bg-red-600 text-white w-64 p-3 rounded-lg">
                Delete Transaction
              </button>
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-4 border text-sm lg:text-base">ID</th>
                  <th className="p-4 border text-sm lg:text-base">
                    Description
                  </th>
                  <th className="p-4 border text-sm lg:text-base">Amount</th>
                  <th className="p-4 border text-sm lg:text-base">Date</th>
                  <th className="p-4 border text-sm lg:text-base">Edit</th>
                  <th className="p-4 border text-sm lg:text-base">Delete</th>
                </tr>
              </thead>
              <tbody>
                {Expense.map((item, index) => (
                <tr
                  key="1"
                  className="text-center text-xs md:text-sm lg:text-base"
                >
                  <td className="p-4 border">{item.id}</td>
                  <td className="p-4 border">{item.Description}</td>
                  <td className="p-4 border">{item.Amount}</td>
                  <td className="p-4 border">{item.Date}</td>
                  <td className="p-4 border"><h1 className="flex justify-center text-xl"><FaEdit /></h1></td>
                  <td className="p-4 border"><h1 className="flex justify-center text-xl"><MdDelete /></h1></td>
                </tr>
                ))} 
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
