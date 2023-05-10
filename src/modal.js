import React from "react";
import "./modal.css";
import closeLogo from "../src/assets/close.png";

/**
 * Modal component to show on successful creation of employee
 * @param {closeModal} // function to close modal
 * @returns {JSX.Component}
 */
export default function Modal({ closeModal }) {
  return (
    <div className="modal">
      <div onClick={closeModal} className="modal-close">
        <img src={closeLogo} alt="close-modal" />
      </div>
      <div className="modal-content">Employee Created!</div>
    </div>
  );
}
