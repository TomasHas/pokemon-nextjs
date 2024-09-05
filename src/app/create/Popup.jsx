import { IoClose } from "react-icons/io5";

export default function Popup({ formData, setShowPopup, id, handleReset }) {
  const closePopup = (e) => {
    e.preventDefault();

    setShowPopup(false);
    handleReset();
  };

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-green-500 font-bold text-lg">
            Congratulations!! You created
          </p>
          <img src={formData.image} alt={formData.name} />
          <p>{`${formData.name}`}</p>

          <button
            onClick={closePopup}
            className=" capitalize bg-red-600
           rounded-xl p-2 text-white"
          >
            {/* <IoClose /> */}
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
