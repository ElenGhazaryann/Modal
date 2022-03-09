import { useState } from "react";
import "./ModalPage.css";

function ModalPage({ openModal }) {
  const separateModal = (e) => e.stopPropagation();
  const closeModal = () => openModal();
  return (
    <div className="modal-bck">
      <div onClick={separateModal} className="modal">
        <h2>Modal page</h2>
        <div>
          <button className="btn-close" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalPage;
