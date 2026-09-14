import { useState, useEffect } from "react";
import plusIcon from "../assets/plus.png";
import data from "../Data";
import InvoiceFilter from "./InvoiceFilter";
import InvoiceList from "./InvoiceList";
import emptyList from "../assets/illustration-empty.svg";

const statusColors = {
  pending: "bg-orange-50 text-[#ff8f00]",
  paid: "bg-[#e7fff4] text-[#33D69F]",
  draft: "bg-gray-100 text-black",
};

const InvoiceDashboard = ({ handleNewInvoiceClick }) => {
  const [initialValue, setInitialValue] = useState([]);
  const locallySavedInvoices =
    JSON.parse(localStorage.getItem("invoices")) || data;

  useEffect(() => {
    localStorage.setItem("invoices", JSON.stringify(locallySavedInvoices));
    setInitialValue(locallySavedInvoices);
    setFilteredData(locallySavedInvoices);
  }, [locallySavedInvoices.length]);

  const [isChecked, setIsChecked] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const toggleCheckbox = () => setIsChecked(!isChecked);

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filterValue)
        ? prevFilters.filter((filter) => filter !== filterValue)
        : [filterValue],
    );
  };

  useEffect(() => {
    const updatedData =
      selectedFilters.length === 0
        ? locallySavedInvoices
        : initialValue.filter((invoice) =>
            selectedFilters.includes(invoice.status),
          );

    setFilteredData(updatedData);
  }, [selectedFilters]);

  return (
    <div className="dark:bg-[#141625] dark:text-white bg-[#F2F2F2] flex justify-center tracking-tighter mobile:text-sm min-h-screen">
      <div className="m-20 w-[50%] mobile:w-[90%] mobile:m-4">
        <div className="flex justify-between mb-14 items-center mobile:mb-6">
          <div>
            <h1 className="text-4xl font-bold mobile:text-2xl">Invoices</h1>
            <span className="lg:hidden text-base mobile:text-sm text-slate-500">
              {filteredData.length} Invoices
            </span>
            <span className="hidden lg:inline-block text-base mobile:text-sm text-slate-500">
              Total {filteredData.length} invoices
            </span>
          </div>
          <div className="flex items-center justify-between mobile:justify-end w-72 mobile:gap-2">
            <InvoiceFilter
              isChecked={isChecked}
              toggleCheckbox={toggleCheckbox}
              selectedFilters={selectedFilters}
              handleFilterChange={handleFilterChange}
              statusColors={statusColors}
            />
            <button
              className="bg-[#7C5DFA] text-white flex items-center rounded-r-3xl rounded-l-3xl text-base font-bold p-2 mobile:text-sm mobile:p-0.5"
              onClick={handleNewInvoiceClick}
            >
              <img
                src={plusIcon}
                alt="+"
                className="rounded-full mobile:w-7 mobile:h-7"
              />
              <span className="lg:hidden px-2">New</span>
              <span className="hidden lg:inline-block px-2">New Invoice</span>
            </button>
          </div>
        </div>
        {filteredData.length === 0 ? (
          <div className="w-full flex flex-col items-center justify-center max-h-screen">
            <img src={emptyList} alt="No Invoices To Show!" />
            <p className="mt-12 text-2xl font-bold">There is nothing here</p>
            <p className="w-56 mt-4 text-center leading-4">
              Create an invoice by clicking the New Invoice button and get
              started
            </p>
          </div>
        ) : (
          <InvoiceList
            filteredData={filteredData}
            statusColors={statusColors}
          />
        )}
      </div>
    </div>
  );
};

export default InvoiceDashboard;
