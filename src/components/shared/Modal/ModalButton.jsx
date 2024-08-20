import { useState } from "react";
import Modal from "./Modal";

const ModalButton = ({ children, Component, position }) => {

    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    }

    const openModal = () => {
        setShowModal(true);
    }

    return (
        <>
            <div onClick={openModal} className="cursor-pointer">
                {children}
            </div>
            {
                showModal &&
                <Modal closeModal={closeModal} position={position}>
                    {
                        Component && <Component />
                    }
                </Modal>
            }
        </>
    );
};

export default ModalButton;