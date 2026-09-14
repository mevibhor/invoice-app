import leftIcon from "../assets/icon-arrow-left.svg";
import { cn } from "../lib/utils";

const ReceiptLayout = ({
  receiptData,
  handleEditClick,
  statusColors,
  goBack,
  showDeleteConfirmation,
  markAsPaid,
}) => {
  const calculateTotal = () => {
    let total = 0;
    receiptData.items.forEach((item) => {
      total += item.total;
    });
    return total;
  };

  return (
    <div
      className={cn(
        "dark:bg-[#141625] dark:text-white bg-[#F2F2F2] flex flex-col items-center justify-center min-h-screen tracking-tighter",
      )}
    >
      {/* top navbar */}
      <div
        className={cn(
          "m-20 w-1/2 flex flex-col mobile:w-[95%] mobile:m-8 mobile:text-sm",
        )}
      >
        <button
          className={cn(
            "flex items-center justify-start cursor-pointer m-2 p-2 w-24",
          )}
          onClick={goBack}
        >
          <span className={cn("flex items-center justify-center mr-4")}>
            <img src={leftIcon} alt="icon" className={cn("w-full")} />
          </span>
          <span
            className={cn("flex items-center font-bold text-sm lg:text-base")}
          >
            Go back
          </span>
        </button>
        {/* Nav bar along work */}
        <div
          className={cn(
            "bg-white flex gap-6 lg:gap-0 justify-between items-center p-4 lg:p-8 rounded-lg dark:bg-[#1E2139]",
          )}
        >
          <div
            className={cn(
              "flex justify-center mobile:flex-col items-center gap-4 mobile:gap-2",
            )}
          >
            <span className={cn("text-slate-500")}>Status</span>
            <span
              className={cn(
                "dark:bg-opacity-5 font-semibold rounded-lg flex items-center justify-center px-2 py-0.5 gap-1 whitespace-nowrap",
                statusColors[receiptData.status],
                receiptData.status === "draft" && "dark:text-white",
              )}
            >
              <span
                className={cn(
                  "text-xl",
                  ["pending", "draft"].includes(receiptData.status) &&
                    "animate-pulse",
                )}
              >
                •
              </span>{" "}
              {receiptData.status}
            </span>
          </div>
          <div
            className={cn(
              "flex items-center gap-2 justify-center font-semibold text-xs mobile:gap-1",
            )}
          >
            <button
              className={cn(
                "text-[#7C5DFA] bg-slate-50 px-4 py-2 lg:px-6 lg:py-3 rounded-3xl hover:bg-[#DFE3FA]",
              )}
              onClick={handleEditClick}
            >
              Edit
            </button>

            <button
              className={cn(
                "text-white bg-red-500 px-4 py-2 lg:px-6 lg:py-3 rounded-3xl hover:bg-red-400",
              )}
              onClick={showDeleteConfirmation}
            >
              Delete
            </button>
            <button
              onClick={markAsPaid}
              disabled={receiptData.status === "paid"}
              className={cn(
                "bg-[#7C5DFA] text-white px-4 py-2 lg:px-6 lg:py-3  rounded-3xl hover:bg-[#8e72fc]",
                receiptData.status === "paid" &&
                  "bg-[#E5DFFE] hover:bg-[#E5DFFE] cursor-not-allowed",
              )}
            >
              <span className={cn("hidden lg:inline-block")}>Mark As Paid</span>
              <span className={cn("lg:hidden")}>Paid</span>
            </button>
          </div>
        </div>

        {/* receipt details */}
        <div
          className={cn(
            "mt-2 lg:mt-6 bg-white flex flex-col justify-between items-center p-4 lg:p-6 rounded-lg dark:bg-[#1E2139]",
          )}
        >
          <div className={cn("w-full flex justify-between mt-4")}>
            <span className={cn("flex flex-col text-sm lg:text-base")}>
              <span className={cn("font-bold mb-2")}>#{receiptData.id}</span>
              <span className={cn("text-slate-500 text-sm lg:text-base")}>
                {receiptData.description}
              </span>
            </span>
            <span
              className={cn(
                "flex flex-col text-slate-500 text-sm lg:text-base",
              )}
            >
              <span>{receiptData.clientAddress.street}</span>
              <span>{receiptData.clientAddress.city}</span>
              <span>{receiptData.clientAddress.postCode}</span>
              <span>{receiptData.clientAddress.country}</span>
            </span>
          </div>
          <div
            className={cn(
              "w-full flex flex-col lg:flex-row justify-between mt-4",
            )}
          >
            <div className={cn("mobile:flex mobile:justify-between")}>
              <span className={cn("flex flex-col")}>
                <span className={cn("text-slate-500")}>Invoice Date</span>
                <span className={cn("font-bold text-sm lg:text-base")}>
                  {receiptData.createdAt}
                </span>
              </span>
              <span className={cn("flex flex-col")}>
                <span className={cn("text-slate-500 text-sm lg:text-base")}>
                  Payment Due
                </span>
                <span className={cn("font-bold text-sm lg:text-base")}>
                  {receiptData.paymentDue}
                </span>
              </span>
            </div>
            <div className="mobile:mt-4">
              <div className={cn("flex flex-col")}>
                <span className={cn("text-slate-500")}>Bill to</span>
                <span className={cn("text-sm lg:text-lg font-semibold mb-4")}>
                  {receiptData.clientName}
                </span>
                <span className={cn("text-slate-500")}>
                  {receiptData.senderAddress.street}
                </span>
                <span className={cn("text-slate-500")}>
                  {receiptData.senderAddress.city}
                </span>
                <span className={cn("text-slate-500")}>
                  {receiptData.senderAddress.country}
                </span>
                <span className={cn("text-slate-500")}>
                  {receiptData.senderAddress.postCode}
                </span>
              </div>
            </div>
            <div className={cn("flex flex-col mobile:mt-4")}>
              <span className={cn("text-slate-500")}>Sent to</span>
              <span className={cn("text-sm lg:text-lg font-semibold")}>
                {receiptData.clientEmail}
              </span>
            </div>
          </div>

          {/* Items table */}
          <div
            className={cn(
              "py-6 px-4 mt-4 w-full bg-[#F9FAFE] dark:bg-[#252945] rounded-t-xl",
            )}
          >
            <div className={cn("flex items-center justify-between")}>
              <div className={cn("flex flex-col")}>
                <span className={cn("text-slate-500 mb-6")}>Item Name</span>
                {receiptData.items.map((item, index) => (
                  <span key={index} className={cn("font-bold mb-6")}>
                    {item.name}
                  </span>
                ))}
              </div>
              <div className={cn("flex flex-col")}>
                <span className={cn("text-slate-500 mb-6")}>QTY.</span>
                {receiptData.items.map((item, index) => (
                  <span key={index} className={cn("font-bold mb-6")}>
                    {item.quantity}
                  </span>
                ))}
              </div>
              <div className={cn("flex flex-col")}>
                <span className={cn("text-slate-500 mb-6")}>Price</span>
                {receiptData.items.map((item, index) => (
                  <span key={index} className={cn("font-bold mb-6")}>
                    £ {item.total}
                  </span>
                ))}
              </div>
              <div className={cn("flex flex-col")}>
                <span className={cn("text-slate-500 mb-6")}>Total</span>
                {receiptData.items.map((item, index) => (
                  <span key={index} className={cn("font-bold mb-6")}>
                    £ {item.total}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            className={cn(
              "flex justify-between w-full p-6 rounded-b-xl bg-[#373B53] text-white dark:bg-[#0C0E16]",
            )}
          >
            <span className={cn("flex items-center justify-center")}>
              Amount Due
            </span>
            <span className={cn("font-bold text-xl lg:text-2xl")}>
              £ {calculateTotal()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptLayout;
