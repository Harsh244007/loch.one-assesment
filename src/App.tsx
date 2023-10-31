import { useEffect, useState } from "react";
import { RemoveLoader } from "./components/common/CommonFn";
import { Modal, ModalButton, NotificationMain, RecommendationMain, TestimonialsMain } from "./components/";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleLoading = setTimeout(() => {
      RemoveLoader();
      clearTimeout(handleLoading);
    }, 1500);
    return () => clearTimeout(handleLoading);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <main className="p-5 lg:p-8">
      <div className="max-w-7xl flex flex-col gap-9 m-auto">
        <NotificationMain />
        <RecommendationMain />
        <TestimonialsMain />
        <ModalButton onOpen={openModal} />
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </main>
  );
}

export default App;
