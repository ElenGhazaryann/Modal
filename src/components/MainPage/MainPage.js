import { useState } from "react";
import ModalPage from "../ModalPage/ModalPage";
import "./MainPage.css";

function MainPage() {
  const [opened, setOpened] = useState(false);

  const openModal = (evt) => setOpened(!opened);

  return (
    <div
      className="main"
      onClick={() => {
        setOpened(!opened);
      }}
    >
      <button className="btn-show" onClick={openModal}>
        Show modal
      </button>

      {opened && <ModalPage openModal={openModal} />}
    </div>
  );
}

export default MainPage;
