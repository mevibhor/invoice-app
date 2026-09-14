import { useState } from "react";
import AdditionalInfo from "./AdditionalInfo";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import FormItemList from "./FormItemList";

const randomID = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomLetters =
    alphabet[Math.floor(Math.random() * alphabet.length)] +
    alphabet[Math.floor(Math.random() * alphabet.length)];
  const randomNumbers = Math.floor(1000 + Math.random() * 9000);
  return `${randomLetters}${randomNumbers}`;
};

const defaultValue = {
  id: "",
  createdAt: "",
  paymentDue: "",
  description: "",
  paymentTerms: 1,
  clientName: "",
  clientEmail: "",
  status: "",
  senderAddress: { street: "", city: "", postCode: "", country: "" },
  clientAddress: { street: "", city: "", postCode: "", country: "" },
  items: [{ name: "", quantity: "", price: "", total: "" }],
  total: 0.0,
};

const Form = ({ onClose, receiptData, setWholeData }) => {
  const [formData, setFormData] = useState(receiptData || defaultValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const path = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [path[0]]: { ...(prevData[path[0]] || {}), [path[1]]: value },
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleAction = (e, status) => {
    e.preventDefault();
    const id = randomID();
    const createdAt = new Date().toLocaleDateString();
    const formDataWithID = { ...formData, id, createdAt, status };
    const existingInvoices = JSON.parse(localStorage.getItem("invoices")) || [];
    localStorage.setItem(
      "invoices",
      JSON.stringify([formDataWithID, ...existingInvoices]),
    );
    setFormData(defaultValue);
    onClose();
  };

  const handleSaveAndSend = (e) => handleAction(e, "pending");
  const handleDraft = (e) => handleAction(e, "draft");

  const handleDiscard = (e) => {
    e.preventDefault();
    setFormData(defaultValue);
    onClose();
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    const existingInvoices = JSON.parse(localStorage.getItem("invoices")) || [];
    const index = existingInvoices.findIndex(
      (invoice) => invoice.id === formData.id,
    );
    existingInvoices[index] = formData;
    localStorage.setItem("invoices", JSON.stringify(existingInvoices));
    setWholeData(existingInvoices);
    onClose();
  };

  return (
    <form className="flex flex-col w-full p-6 md:p-8 overflow-x-hidden">
      <h1 className="text-2xl font-bold mb-8 text-[#0C0E19] dark:text-white">
        {receiptData ? "Edit Invoice" : "New Invoice"}
      </h1>

      <BillFrom onChange={handleChange} formData={formData} />
      <BillTo onChange={handleChange} formData={formData} />
      <AdditionalInfo onChange={handleChange} formData={formData} />
      <FormItemList
        formData={formData}
        setFormData={setFormData}
        onChange={handleChange}
      />

      {!receiptData ? (
        <div className="flex flex-col md:flex-row w-full justify-between py-8 gap-4">
          <button
            className="w-full md:w-auto text-[#7E88C3] font-semibold h-12 px-6 rounded-3xl bg-[#F2F2F2] dark:bg-[#252940] text-sm hover:bg-[#e5e5e5] dark:hover:bg-[#2f344f] transition-colors"
            onClick={handleDiscard}
          >
            Discard
          </button>
          <div className="flex flex-col md:flex-row w-full md:w-auto gap-4">
            <button
              onClick={handleDraft}
              className="w-full md:w-auto bg-[#373B53] px-6 h-12 rounded-3xl text-[#7E88C3] text-sm font-bold hover:bg-[#2d3047] transition-colors"
            >
              Save as Draft
            </button>
            <button
              type="submit"
              className="w-full md:w-auto bg-[#7C5DFA] text-white px-6 h-12 rounded-3xl hover:bg-[#8e72fc] text-sm font-semibold transition-colors"
              onClick={handleSaveAndSend}
            >
              Save & Send
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row w-full gap-4 justify-end items-center py-8">
          <button
            onClick={handleDiscard}
            className="w-full md:w-auto bg-[#373B53] px-6 h-12 rounded-3xl text-[#7E88C3] text-sm font-bold hover:bg-[#2d3047] transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full md:w-auto bg-[#7C5DFA] text-white px-6 h-12 rounded-3xl hover:bg-[#8e72fc] text-sm font-semibold transition-colors"
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>
        </div>
      )}
    </form>
  );
};

export default Form;
