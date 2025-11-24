import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input.tsx";
import { Textarea } from "../../components/ui/textarea.tsx";
import { Card, CardContent } from "../../components/ui/card.tsx";

export default function SubmitAchievement() {
  const [step, setStep] = useState(1);
  const next = () => setStep((s) => Math.min(s + 1, 7));
  const prev = () => setStep((s) => Math.max(s - 1, 1));
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-white">Submit Achievement</h1>
      <Card className="rounded-2xl shadow p-4">
        <CardContent className="space-y-4">
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">1. Data Peserta</h2>
              <Input placeholder="Nama Lengkap" />
              <Input placeholder="NIM" />
              <Input placeholder="Prodi" />
              <Input placeholder="Fakultas" />
              <Input placeholder="Email" />
              <Input placeholder="Telepon" />
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">2. Jenis Kegiatan</h2>
              <Input placeholder="Nama Kegiatan" />
              <Input placeholder="Bidang Kegiatan" />
              <Input placeholder="Akademik / Non-Akademik" />
            </div>
          )}
          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">3. Tingkatan Kegiatan</h2>
              <Input placeholder="Tingkat Kegiatan" />
              <Input placeholder="Nama Penyelenggara" />
            </div>
          )}
          {step === 4 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">4. Bukti Kegiatan</h2>
              <Input placeholder="Juara yang Diperoleh" />
              <Input type="file" />
            </div>
          )}
          {step === 5 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">5. Waktu Kegiatan</h2>
              <Input placeholder="Lokasi" />
              <Input type="date" placeholder="Tanggal Mulai" />
              <Input type="date" placeholder="Tanggal Selesai" />
              <Input placeholder="Link Berita (opsional)" />
            </div>
          )}
          {step === 6 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">6. Anggota Kegiatan</h2>
              <Input placeholder="Tim / Individu" />
              <Input placeholder="Peran (Ketua, Anggota, dll)" />
            </div>
          )}
          {step === 7 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">7. Validasi & Konfirmasi</h2>
              <Input type="file" placeholder="Dokumen Pendukung" />
              <Input placeholder="Persetujuan (Prodi/Fakultas/Univ)" />
              <Textarea placeholder="Keterangan Tambahan" />
            </div>
          )}
          <div className="flex justify-between pt-6">
            {step > 1 ? <Button onClick={prev}>Back</Button> : <div />}
            {step < 7 ? (
              <Button onClick={next}>Next</Button>
            ) : (
              <Button className="bg-green-600 hover:bg-green-700">Submit</Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
