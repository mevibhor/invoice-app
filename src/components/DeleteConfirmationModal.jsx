const DeleteConfirmationModal = ({
  receiptData,
  hideDeleteConfirmation,
  deleteReceipt,
}) => {
  return (
    receiptData && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 px-4 py-6 transition-opacity duration-500 ease-in-out">
        <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-xl transition-transform duration-500 ease-in-out sm:p-8 dark:bg-[#1E2139] dark:text-white">
          <h1 className="mb-4 text-2xl font-semibold sm:text-3xl">
            Confirm Deletion
          </h1>
          <p className="mb-6 max-w-md text-base leading-relaxed text-slate-500 sm:text-lg">
            Are you sure you want to delete Invoice #{receiptData.id}? This
            action cannot be reversed.
          </p>
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">
            <button
              className="h-12 rounded-3xl bg-slate-50 px-6 text-[#7C5DFA] transition-colors duration-300 hover:bg-[#DFE3FA]"
              onClick={hideDeleteConfirmation}
            >
              Cancel
            </button>
            <button
              className="h-12 rounded-3xl bg-red-500 px-6 text-white transition-colors duration-300 hover:bg-red-600"
              onClick={deleteReceipt}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default DeleteConfirmationModal;
