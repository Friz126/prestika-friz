import Carousel from "../../components/Carousel";
import All from "./client-layout/All";
import gb1 from "../../assets/gb1.png";

export default function Home() {
  return (
    <All>
      <Carousel />
      <div className="flex flex-col items-center mt-10">
        <div className="flex flex-col justify-start w-9/12 p-3 gap-12">
          <h3 className="text-2xl font-bold text-yellow-200">Artikel Terbaru</h3>
          <div className="flex flex-row justify-between w-full items-center p-4">
            <div className="flex flex-col gap-3">
              <h5 className="text-xl text-white">LPMP UHAMKA</h5>
              <p className="font-bold text-xl text-white">Tutorial menambah prestasi</p>
              <small className="text-white">1 Day Ago</small>
            </div>
            <div className="">
              <img src={gb1} alt="gambar" className="h-40 w-72" />
            </div>
          </div>
          <div className="flex flex-row justify-between w-full items-center p-4">
            <div className="flex flex-col gap-3">
              <h5 className="text-xl text-white">BPPKA UHAMKA</h5>
              <p className="font-bold text-xl text-white">Peningkatan Data Prestasi Uhamka</p>
              <small className="text-white">2 Day Ago</small>
            </div>
            <div className="">
              <img src={gb1} alt="gambar" className="h-40 w-72" />
            </div>
          </div>
          <div className="flex flex-row justify-between w-full items-center p-4">
            <div className="flex flex-col gap-3">
              <h5 className="text-xl text-white">BPTI UHAMKA</h5>
              <p className="font-bold text-xl text-white">Peningkatan Digitalisasi Prestasi UHAMKA</p>
              <small className="text-white">2 Day Ago</small>
            </div>
            <div className="">
              <img src={gb1} alt="gambar" className="h-40 w-72" />
            </div>
          </div>
        </div>
      </div>
    </All>
  );
} 
