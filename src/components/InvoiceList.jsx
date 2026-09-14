import { Link } from "react-router-dom";
import rightArrow from "../assets/icon-arrow-right.svg";
import { cn } from "../lib/utils";

const InvoiceList = ({ statusColors, filteredData }) => {
  const calculateTotal = (items) => {
    let total = 0;
    items.forEach((item) => {
      total += item.total;
    });
    return total;
  };

  return (
    <>
      {filteredData.map((invoice) => {
        return (
          <Link to={`/receipt/${invoice.id}`} key={invoice.id}>
            <div
              className="flex rounded-lg h-24 bg-white mt-3 justify-between items-center px-4
             dark:bg-[#1E2139] hover:border hover:border-[#7C5DFA] cursor-pointer"
            >
              {/* Left section: ID, date, name */}
              <div className="flex flex-col lg:flex-row items-center justify-evenly flex-1 min-w-0 gap-1">
                <span className="font-bold truncate">
                  <span className="text-slate-500">#</span>
                  {invoice.id}
                </span>
                <span className="text-slate-500 truncate">
                  {invoice.createdAt}
                </span>
                <span className="text-slate-500 truncate">
                  {invoice.clientName}
                </span>
              </div>

              {/* Right section: amount, status, arrow */}
              <div className="flex flex-col lg:flex-row items-center justify-evenly gap-4 flex-1 min-w-0">
                <span className="font-bold text-lg mobile:text-base whitespace-nowrap">
                  £ {calculateTotal(invoice.items)}
                </span>
                <span
                  className={cn(
                    "dark:bg-opacity-5 font-semibold rounded-lg flex items-center justify-center w-24 p-1 gap-1 mobile:text-base mobile:p-0 whitespace-nowrap",
                    statusColors[invoice.status],
                    invoice.status === "draft" && "dark:text-white",
                  )}
                >
                  <span
                    className={cn(
                      "text-xl",
                      ["pending", "draft"].includes(invoice.status) &&
                        "animate-pulse",
                    )}
                  >
                    •
                  </span>{" "}
                  {invoice.status}
                </span>
                <img src={rightArrow} alt=">" className="hidden lg:block" />
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default InvoiceList;
