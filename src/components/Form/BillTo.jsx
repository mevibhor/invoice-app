const BillTo = ({ onChange, formData }) => {
  const inputClass =
    "w-full border border-slate-300 dark:border-slate-600 rounded-md p-3 bg-white dark:bg-[#1E2139] text-[#0C0E19] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#7C5DFA] focus:ring-1 focus:ring-[#7C5DFA] transition-colors";
  const labelClass = "text-slate-500 dark:text-slate-400 text-sm mb-2 block";

  return (
    <div className="w-full mt-8 md:mt-12">
      <h5 className="text-[#7C5DFA] font-bold text-sm mb-6">Bill To</h5>

      <div className="flex flex-col w-full mb-4">
        <label htmlFor="clientName" className={labelClass}>
          Client's Name
        </label>
        <input
          type="text"
          id="clientName"
          name="clientName"
          className={inputClass}
          onChange={onChange}
          value={formData.clientName}
        />
      </div>

      <div className="flex flex-col w-full mb-4">
        <label htmlFor="clientEmail" className={labelClass}>
          Client's Email
        </label>
        <input
          type="email"
          id="clientEmail"
          name="clientEmail"
          className={inputClass}
          placeholder="e.g. email@example.com"
          onChange={onChange}
          value={formData.clientEmail}
        />
      </div>

      <div className="flex flex-col w-full mb-4">
        <label htmlFor="clientStreet" className={labelClass}>
          Street Address
        </label>
        <input
          type="text"
          id="clientStreet"
          name="clientAddress.street"
          className={inputClass}
          onChange={onChange}
          value={formData.clientAddress.street}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col">
          <label htmlFor="clientCity" className={labelClass}>
            City
          </label>
          <input
            type="text"
            id="clientCity"
            name="clientAddress.city"
            className={inputClass}
            onChange={onChange}
            value={formData.clientAddress.city}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="clientPostCode" className={labelClass}>
            Post Code
          </label>
          <input
            type="text"
            id="clientPostCode"
            name="clientAddress.postCode"
            className={inputClass}
            onChange={onChange}
            value={formData.clientAddress.postCode}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="clientCountry" className={labelClass}>
            Country
          </label>
          <input
            type="text"
            id="clientCountry"
            name="clientAddress.country"
            className={inputClass}
            onChange={onChange}
            value={formData.clientAddress.country}
          />
        </div>
      </div>
    </div>
  );
};

export default BillTo;
