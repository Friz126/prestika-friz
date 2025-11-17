export default function App() {
  return (
    <div className="min-h-screen bg-[#295f7b] text-white">
      <nav className="w-full bg-[#1d4b62] px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Universitas Muhammadiyah Prof. Dr. Hamka</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:underline">Artikel</a>
          <a href="#" className="hover:underline">Akademik</a>
          <a href="#" className="hover:underline">Prestasi</a>
        </div>
        <a href="#" className="bg-white text-[#1d4b62] px-4 py-1 rounded-lg font-semibold">
          Login
        </a>
      </nav>
      <section className="max-w-5xl mx-auto mt-10 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome To Prestika</h1>
        <p className="text-lg opacity-90">Yuk Tambah Presatasimu</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <div key={i} className="bg-white/10 p-4 rounded-lg">
              <div className="w-full h-24 bg-white/20 rounded"></div>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-5xl mx-auto mt-12 grid grid-cols-3 text-center">
        <div className="bg-white/10 p-6 rounded-lg text-center">
          <h3 className="text-xl">Total Penghargaan</h3>
          <p className="text-3xl font-bold mt-2">21.000</p>
        </div>
        <div className="bg-white/10 p-6 rounded-lg text-center">
          <h3 className="text-xl">Total Kompetisi</h3>
          <p className="text-3xl font-bold mt-2">5.000</p>
        </div>
        <div className="bg-white/10 p-6 rounded-lg text-center">
          <h3 className="text-xl">Total Mahasiswa Berprestasi</h3>
          <p className="text-3xl font-bold mt-2">12.000</p>
        </div>
      </section>
      <footer className="mt-16 py-6 bg[#1d4b62] text-center">
        <p>INTEGRITY, TRUST, COMPASSION</p>
      </footer>
    </div>
  );
}
