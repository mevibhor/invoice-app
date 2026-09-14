import Form from "./Form/Form";

const FormDrawer = ({ isOpen, onClose, receiptData, setWholeData }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 left-0 h-full z-50 bg-white dark:bg-[#141625] shadow-2xl 
          transition-transform duration-300 ease-in-out overflow-y-auto
          w-full md:w-[500px] lg:w-[600px] lg:ml-20 rounded-r-3xl
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Form
          onClose={onClose}
          receiptData={receiptData}
          setWholeData={setWholeData}
        />
      </div>
    </>
  );
};

export default FormDrawer;
