const BillFrom = ({ onChange, formData }) => {
  const inputClass =
    "w-full border border-slate-300 dark:border-slate-600 rounded-md p-3 bg-white dark:bg-[#1E2139] text-[#0C0E19] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#7C5DFA] focus:ring-1 focus:ring-[#7C5DFA] transition-colors";
  const labelClass = "text-slate-500 dark:text-slate-400 text-sm mb-2 block";

  return (
    <div className="w-full mt-8 md:mt-12">
      <h5 className="text-[#7C5DFA] font-bold text-sm mb-6">Bill From</h5>

      <div className="flex flex-col w-full mb-4">
        <label htmlFor="senderStreet" className={labelClass}>
          Street Address
        </label>
        <input
          type="text"
          id="senderStreet"
          name="senderAddress.street"
          className={inputClass}
          onChange={onChange}
          value={formData.senderAddress.street}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col">
          <label htmlFor="senderCity" className={labelClass}>
            City
          </label>
          <input
            type="text"
            id="senderCity"
            name="senderAddress.city"
            className={inputClass}
            onChange={onChange}
            value={formData.senderAddress.city}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="senderPostCode" className={labelClass}>
            Post Code
          </label>
          <input
            type="text"
            id="senderPostCode"
            name="senderAddress.postCode"
            className={inputClass}
            onChange={onChange}
            value={formData.senderAddress.postCode}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="senderCountry" className={labelClass}>
            Country
          </label>
          <input
            type="text"
            id="senderCountry"
            name="senderAddress.country"
            className={inputClass}
            onChange={onChange}
            value={formData.senderAddress.country}
          />
        </div>
      </div>
    </div>
  );
};

export default BillFrom;
