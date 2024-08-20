import { useEffect } from "react";
import ReactDOM from "react-dom";
import { IoCloseOutline } from "react-icons/io5";
import "./Modal.css"

const Modal = ({ children, closeModal, position }) => {

    useEffect(() => {
        const updateOverflow = () => {
            const hasOverflow = document.body.scrollHeight > window.innerHeight;
            return hasOverflow;
        }
        const doesOverflowExist = updateOverflow();
        window.addEventListener("resize", updateOverflow)
        document.body.style.overflowY = "hidden";
        return () => {
            window.removeEventListener("resize", updateOverflow)
            document.body.style.overflowY = doesOverflowExist ? "scroll" : "hidden";
        }
    }, [])

    return ReactDOM.createPortal(
        <div>
            <div onClick={closeModal} className="fixed top-0 bottom-0 left-0 right-0 bg-slate-800 opacity-30"></div>
            <div className={`fixed w-4/5 md:w-[450px] max-w-[450px] set-height bg-white rounded p-5 left-1/2 -translate-x-1/2 overflow-y-auto yes ${position === "top" ? "top-[19px]" : "top-1/2 -translate-y-1/2"}`}>
                <IoCloseOutline onClick={closeModal} className="text-3xl cursor-pointer absolute right-4 top-4" />
                {children}
            </div>
        </div>,
        document.querySelector(".modal-root")
    );
};

export default Modal;