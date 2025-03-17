import "./App.css";
import { Modal } from "./components/Modal";
import { useModal } from "./hooks/useModal";

export const App = () => {
  const { isOpen, modalType, openModal, closeModal } = useModal();

  return (
    <>
      <div className="app">
        <h1>React Modal Example</h1>
        <div className="button-wrap">
          <button onClick={() => openModal("info")}>情報モーダルを開く</button>
          <button onClick={() => openModal("warning")}>警告モーダルを開く</button>
          <button onClick={() => openModal("success")}>成功モーダルを開く</button>
        </div>

        <Modal isOpen={isOpen} onClose={closeModal} type={modalType} />
      </div>
    </>
  );
};
