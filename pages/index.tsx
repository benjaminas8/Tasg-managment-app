import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Modal from "@/components/Modal/Modal";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header />
      <Footer copyrightTitle="copyright" />
      {isModalOpen && (
        <Modal
          text="Do you really want to sign out?"
          onModalClose={() => {
            setModalOpen(false);
          }}
        />
      )}
    </>
  );
}
