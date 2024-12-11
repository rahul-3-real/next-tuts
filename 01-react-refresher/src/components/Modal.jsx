import { useNavigate } from "react-router";

const Modal = ({ children }) => {
  const navigate = useNavigate();

  const closeModalHandler = () => {
    navigate("..");
  };

  return (
    <>
      <div
        className="fixed h-full w-full top-0 left-0 z-10 backdrop-blur-lg bg-gray-950 opacity-90"
        onClick={closeModalHandler}
      />
      <dialog
        open
        className="fixed top-50 left-1/2 -translate-x-1/2 z-20 w-96 p-5 bg-slate-800 rounded"
      >
        {children}
      </dialog>
    </>
  );
};

export default Modal;
