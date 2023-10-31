import React, { memo, useState } from "react";
import ReactDOM from "react-dom";

const Modal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`https://app.loch.one/welcome?${email}`, "_blank");
    console.log("emal");
  };

  if (!isOpen) return null;
  const ModalJSON = {
    header: {
      titleClassName: "modalTitleText",
      titleText: "Signup for exclusive access",
      closeIconClassName: "modalCloseButton",
      closeIconText: "X",
    },
    formItem: {
      InputBox: { text: "Your email address", className: "ModalEmailInput" },
      submitButton: { text: "Submit", className: "modalSubmitButton" },
      extra: { text: "You will receive an email with an invite link to join.", className: "modalSubmitExtraTag" },
    },
  };
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal gap-4">
        <div className="modal-header">
          <h3 className={ModalJSON.header.titleClassName}>{ModalJSON.header.titleText}</h3>
          <button onClick={onClose} className={ModalJSON.header.closeIconClassName}>
            {ModalJSON.header.closeIconText}
          </button>
        </div>
        <form className="flex flex-col gap-4 items-center justify-center" onSubmit={handleFormSubmit}>
          <input
            type="email"
            value={email}
            className={ModalJSON.formItem.InputBox.className}
            placeholder={ModalJSON.formItem.InputBox.text}
            onChange={(e) => setEmail(e.target.value)}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
          <button
            disabled={email === ""}
            className={`${ModalJSON.formItem.submitButton.className} ${email === "" ? "cursor-not-allowed" : "cursor-pointer"}`}
            type="submit"
          >
            {ModalJSON.formItem.submitButton.text}
          </button>
          <p className={ModalJSON.formItem.extra.className}>{ModalJSON.formItem.extra.text}</p>
        </form>
      </div>
    </div>,
    document.getElementById("modal") as Element
  );
};
export default memo(Modal);
