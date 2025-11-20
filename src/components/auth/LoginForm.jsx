export default function LoginForm() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3 text-center">Login</h2>
      <input className="border-b p-2 w-full mb-2 focus:outline-none" placeholder="NIM" />
      <input className="border-b p-2 w-full mb-2 focus:outline-none" placeholder="Password" />
      <button className="bg-black text-white px-4 py-2 rounded w-full shadow-black hover:bg-white hover:text-black transition duration-500">Login</button>
    </div>
  );
}
