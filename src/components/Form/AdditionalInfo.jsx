const AdditionalInfo = ({ onChange, formData }) => {
  const inputClass =
    "w-full border border-slate-300 dark:border-slate-600 rounded-md p-3 bg-white dark:bg-[#1E2139] text-[#0C0E19] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#7C5DFA] focus:ring-1 focus:ring-[#7C5DFA] transition-colors";
  const labelClass = "text-slate-500 dark:text-slate-400 text-sm mb-2 block";

  return (
    <div className="w-full mt-8 md:mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col">
          <label htmlFor="paymentDue" className={labelClass}>
            Invoice Date
          </label>
          <input
            type="date"
            id="paymentDue"
            name="paymentDue"
            className={inputClass}
            onChange={onChange}
            value={formData.paymentDue}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="paymentTerms" className={labelClass}>
            Payment Terms
          </label>
          <select
            name="paymentTerms"
            id="paymentTerms"
            className={inputClass}
            onChange={onChange}
            value={formData.paymentTerms}
          >
            <option value="1">Next 1 Day</option>
            <option value="7">Next 7 Days</option>
            <option value="14">Next 14 Days</option>
            <option value="30">Next 30 Days</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <label htmlFor="description" className={labelClass}>
          Project Description
        </label>
        <input
          type="text"
          id="description"
          name="description"
          className={inputClass}
          placeholder="e.g. Graphic Design Service"
          onChange={onChange}
          value={formData.description}
        />
      </div>
    </div>
  );
};

export default AdditionalInfo;
