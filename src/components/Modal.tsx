import { createPortal } from "react-dom";
import "../styles/Modal.css";
import { ModalType } from "../hooks/useModal";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  type: ModalType;
};

export const Modal = ({ isOpen, onClose, type }: ModalProps) => {
  if (!isOpen) return null;

  const getModalContent = () => {
    switch (type) {
      case "info":
        return <p>これは情報モーダルです。</p>;
      case "warning":
        return <p>⚠️ 警告！何か問題があります。</p>;
      case "success":
        return <p>✅ 操作が成功しました！</p>;
      default:
        return <p>デフォルトのモーダルです。</p>;
    }
  };

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>{type?.toUpperCase()}</h2>
        {getModalContent()}
      </div>
    </div>,
    document.body
  );
};
