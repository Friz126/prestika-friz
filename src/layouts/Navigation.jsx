import { useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import Modal from "../components/Modal";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);
  const openLogin = () => {
    setContent(<LoginForm />);
    setIsOpen(true);
  }
  const openRegister = () => {
    setContent(<RegisterForm />);
    setIsOpen(true);
  }
  return (
    <nav className="w-full bg-[#1d4b62] px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Universitas Muhammadiyah Prof. Dr. Hamka</h1>
      <div className="space-x-6 hidden md:flex">
        <a href="#" className="hover:underline">Artikel</a>
        <a href="#" className="hover:underline">Akademik</a>
        <a href="#" className="hover:underline">Prestasi</a>
      </div>
      <button onClick={openLogin} className="bg-white text-[#1d4b62] px-4 py-1 rounded-lg font-semibold">
        Login
      </button>
      <button onClick={openRegister} className="bg-white text-[#1d4b62] px-4 py-1 rounded-lg font-semibold">
        Register
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {content}
      </Modal>
    </nav>
  );
}
