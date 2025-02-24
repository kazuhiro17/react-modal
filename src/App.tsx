import { useState } from "react";
import "./App.css";
import { Modal } from "./components/Modal";

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="app">
        <h1>React Modal Example</h1>
        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>モーダルの内容</h2>
          <p>これはモーダルウィンドウです。</p>
        </Modal>
      </div>
    </>
  );
};
