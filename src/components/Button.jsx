export default function Button({ children, onClick }) {
    return (
      <button
        onClick={onClick}
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        {children}
      </button>
    );
  }
  