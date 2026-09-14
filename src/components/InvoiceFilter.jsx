import downIcon from "../assets/icon-arrow-down.svg";

const InvoiceFilter = ({
  isChecked,
  toggleCheckbox,
  selectedFilters,
  handleFilterChange,
  statusColors,
}) => {
  return (
    <>
      <div
        className="flex items-center text-base font-bold cursor-pointer relative mobile:text-xs"
        onClick={toggleCheckbox}
      >
        Filter by Status
        <img src={downIcon} alt="icon" className="ml-2" />
      </div>
      {isChecked && (
        <div className="absolute mt-44 bg-white rounded-2xl shadow-2xl w-48 px-2 py-3.5 flex flex-col justify-center text-base font-bold dark:bg-[#1E2139]">
          {Object.keys(statusColors).map((status) => (
            <div className="flex m-1" key={status}>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="ml-4 w-4 h-4 cursor-pointer"
                  onChange={handleFilterChange}
                  checked={selectedFilters.includes(status)}
                  value={status}
                />
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </label>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default InvoiceFilter;
