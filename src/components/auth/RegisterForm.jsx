import { h2 } from 'framer-motion/client';
import { useState } from 'react';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [fakultas, setFakultas] = useState('');
  const [prodi, setProdi] = useState('');
  const prodiOption = {
    FTII: ["TEKNIK INFORMATIKA", "TEKNIK MESIN", "TEKNIK ELEKTRO", "STI", "TEKNIK MEKATRONIKA"],
    FKIP: ["BINA KONSELING", "PBJ", "PBI", "PBSI", "PEKOM", "PGSD", "PENDIDIKAN MATEMATIKA", "PENDIDIKAN GEOGRAFI", "PENDIDIKAN BIOLOGI", "PENDIDIKAN SEJARAH", "PENDIDIKAN FISIKA", "PG-PAUD"],
    FH: ["HUKUM BISNIS"],
    FEB: ["AKUNTANSI", "MANAJEMEN", "PERPAJAKAN", "EKONOMI ISLAM"],
    FFS: ["ANALISIS KESEHATAN", "FARMASI", "PROFESI APOTEKER"],
    FISIP: ["ILMU KOMUNIKASI"],
    FIK: ["GIZI", "KESEHATAN MASYARAKAT", "ILMU GIZI"],
    FAI: ["PAI", "PBA", "PERBANKAN SYARIAH"],
    PPSI: ["PSIKOLOGI"],
    FK: ["KEDOKTERAN", "PENDIDIKAN PROFESI DOKTER", "TEKNIK RADIOVASKULER"],
    S2: ["ADMINISTRASI PENDIDIKAN", 'ILMU FARMASI', 'ILMU KESEHATAN MASYARAKAT', 'MANAJEMEN', 'PENDIDIKAN BAHASA INDONESIA', 'PENDIDIKAN BAHASA INGGRIS', 'PENDIDIKAN DASAR', 'PENDIDIKAN ILMU SOSIAL', 'PENDIDIKAN MATEMATIKA', 'PENELITIAN & EVALUASI PENDIDIKAN', 'PENDIDIKAN AGAMA ISLAM'],
    S3: ['PENDIDIKAN BAHASA INDONESIA', 'PENDIDIKAN'],
  };
  return (
    <div className='space-y-3'>
      <h2 className='text-center text-2xl font-bold text-white'>Buat Akun</h2>
      <input type="text" className="border-b p-2 w-full mb-2 focus:outline-none" placeholder='Nama lengkap Anda' />
      <input className="border-b p-2 w-full mb-2 focus:outline-none" placeholder='Masukkan NIM aktif' />
      <select value={fakultas} onChange={(e) => {
        setFakultas(e.target.value);
        setProdi("");
      }} className='border p-2 w-full'
      >
        <option value="">---PILIH FAKULTAS---</option>
        {Object.keys(prodiOption).map((f) => (
          <option value={f} key={f} className='text-white'>{f}</option>
        ))}
      </select>
      <select value={prodi} onChange={(e) => setProdi(e.target.value)} disabled={!fakultas} className='border p-2 w-full disabled:bg-gray-200 disabled:text-gray-500'>
        <option value="">---PILIH PRODI---</option>
        {fakultas && prodiOption[fakultas].map((p) => (
          <option value={p} key={p}>{p}</option>
        ))}
      </select>
      <div className='relative'>
        <input className="border-b p-2 w-full mb-2 focus:outline-none" placeholder='Password Minimal 8 karakter, terdiri dari huruf dan angka'
          type={showPassword ? "text" : "password"} />
        <button type="button" onClick={() => setShowPassword(!showPassword)} className='absolute right-3 top-1/2 -translate-y-1/2'>
          {showPassword ? "Hide" : "show"}
        </button>
      </div>
      <button className="p-2 w-full mb-2 text-black bg-white hover:text-white hover:bg-black transition duration-500">Register</button>
    </div>
  );
}
