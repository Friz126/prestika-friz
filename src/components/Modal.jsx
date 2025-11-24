export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 animate-fadeIn"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#295f7b] p-6 rounded-2xl shadow-xl w-full max-w-lg animate-scaleIn"
      >
        {children}

        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-3xl text-black/50 hover:text-black"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
