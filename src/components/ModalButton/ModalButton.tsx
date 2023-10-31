import React, { memo } from "react";

const ModalButton: React.FC<{ onOpen: () => void }> = ({ onOpen }) => {
  return (
    <div className="question-icon" onClick={onOpen}>
      ?
    </div>
  );
};

export default memo(ModalButton);
