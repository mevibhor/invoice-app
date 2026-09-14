import deleteLogo from "../../assets/icon-delete.svg";

const FormItemList = ({ formData, setFormData }) => {
  const inputClass =
    "w-full border border-slate-300 dark:border-slate-600 rounded-md p-3 bg-white dark:bg-[#1E2139] text-[#0C0E19] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#7C5DFA] focus:ring-1 focus:ring-[#7C5DFA] transition-colors";
  const labelClass = "text-slate-500 dark:text-slate-400 text-sm mb-2 block";

  const handleItemNameChange = (index, event) => {
    const updatedItems = [...formData.items];
    updatedItems[index].name = event.target.value;
    setFormData({ ...formData, items: updatedItems });
  };

  const handleQuantityChange = (index, event) => {
    const updatedItems = [...formData.items];
    const newQuantity = parseFloat(event.target.value) || 0;
    updatedItems[index].quantity = newQuantity;
    updatedItems[index].total = newQuantity * (updatedItems[index].price || 0);
    setFormData({ ...formData, items: updatedItems });
  };

  const handlePriceChange = (index, event) => {
    const updatedItems = [...formData.items];
    const newPrice = parseFloat(event.target.value) || 0;
    updatedItems[index].price = newPrice;
    updatedItems[index].total = (updatedItems[index].quantity || 0) * newPrice;
    setFormData({ ...formData, items: updatedItems });
  };

  const handleAddItem = () => {
    setFormData({
      ...formData,
      items: [
        ...formData.items,
        { name: "", quantity: "", price: "", total: "" },
      ],
    });
  };

  const handleRemoveItem = (index) => {
    if (formData.items.length > 1) {
      const updatedItems = [...formData.items];
      updatedItems.splice(index, 1);
      setFormData({ ...formData, items: updatedItems });
    }
  };

  return (
    <div className="w-full mt-8 md:mt-12">
      <h5 className="text-slate-500 dark:text-slate-400 font-bold text-sm mb-4">
        Item List
      </h5>

      {formData.items.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-3 mb-6 items-end"
        >
          {/* Name: Full width on mobile (col-span-2), 2fr on desktop */}
          <div className="flex flex-col col-span-2 md:col-span-1">
            <label className={labelClass} htmlFor={`name-${index}`}>
              Item Name
            </label>
            <input
              className={inputClass}
              type="text"
              id={`name-${index}`}
              value={item.name}
              onChange={(e) => handleItemNameChange(index, e)}
              placeholder="Item Name"
            />
          </div>

          {/* Qty: 1 col on mobile, 1fr on desktop */}
          <div className="flex flex-col col-span-1">
            <label className={labelClass} htmlFor={`quantity-${index}`}>
              Qty.
            </label>
            <input
              className={inputClass}
              type="number"
              id={`quantity-${index}`}
              min={0}
              value={item.quantity}
              onChange={(e) => handleQuantityChange(index, e)}
            />
          </div>

          {/* Price: 1 col on mobile, 1fr on desktop */}
          <div className="flex flex-col col-span-1">
            <label className={labelClass} htmlFor={`price-${index}`}>
              Price
            </label>
            <input
              className={inputClass}
              type="number"
              id={`price-${index}`}
              min={0}
              value={item.price}
              onChange={(e) => handlePriceChange(index, e)}
            />
          </div>

          {/* Total: 1 col on mobile, 1fr on desktop */}
          <div className="flex flex-col col-span-1">
            <label className={labelClass} htmlFor={`total-${index}`}>
              Total
            </label>
            <input
              className={`${inputClass} bg-slate-100 dark:bg-[#252940] cursor-not-allowed`}
              type="number"
              id={`total-${index}`}
              min={0}
              value={item.total}
              readOnly
            />
          </div>

          {/* Delete Button: 1 col on mobile, auto width on desktop */}
          <div className="flex items-end pb-3 col-span-1">
            <button
              type="button"
              onClick={() => handleRemoveItem(index)}
              className="hover:opacity-70 transition-opacity p-2"
            >
              <img src={deleteLogo} alt="remove" className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}

      <button
        type="button"
        className="w-full md:w-auto p-3 rounded-3xl text-[#7E88C3] font-bold bg-[#F2F2F2] dark:bg-[#252940] hover:bg-[#DFE3FA] dark:hover:bg-[#2f344f] transition-colors mt-2"
        onClick={handleAddItem}
      >
        + Add New Item
      </button>
    </div>
  );
};

export default FormItemList;
