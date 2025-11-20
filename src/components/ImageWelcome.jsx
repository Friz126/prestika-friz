export default function ImageWelcome() {
  const fakultas = [
    {
      src: "https://www.uhamka.ac.id/static/media/FKIP.73a225f609e63ab24aca.jpg",
      title: "Fakultas Keguruan dan Ilmu Pendidikan",
      className: ""
    },
    {
      src: "https://uhamka.ac.id/static/media/FEB.94011c44541da0fc4ef5.webp",
      title: "Fakultas Ekonomi dan Bisnis",
      className: ""
    },
    {
      src: "https://uhamka.ac.id/static/media/FT.e3ae1a5100a597d3085a.jpg",
      title: "Fakultas Teknik Industri dan Informatika",
      className: ""
    },
    {
      src: "https://uhamka.ac.id/static/media/FAI_FIKES_FISIP_FPsi.3ffa482f8ef7a313ecf2.jpg",
      title: "Fakultas Ilmu Kesehatan",
      className: ""
    },
    {
      src: "https://uhamka.ac.id/static/media/FK_FFS.c655025c14df1acea0eb.jpg",
      title: "Fakultas Farmasi dan Sains",
      className: "h-44 object-cover"
    },
    {
      src: "https://uhamka.ac.id/static/media/FK_NEW.c58ebcaeeeada9a1c07e.jpeg",
      title: "Fakultas Kedokteran",
      className: "h-44 object-cover"
    },
    {
      src: "https://uhamka.ac.id/static/media/FAI_FIKES_FISIP_FPsi.3ffa482f8ef7a313ecf2.jpg",
      title: "Fakultas Psikologi",
      className: "h-44 object-cover"
    },
    {
      src: "https://uhamka.ac.id/static/media/SPS.3d2a79a4b01b3fe1da93.jpg",
      title: "Sekolah Pascasarjana",
      className: "h-44 object-cover"
    },
    {
      src: "https://uhamka.ac.id/static/media/FAI_FIKES_FISIP_FPsi.3ffa482f8ef7a313ecf2.jpg",
      title: "Fakultas Ilmu Sosial & Politik",
      className: "h-44 object-cover"
    },
    {
      src: "https://uhamka.ac.id/static/media/FAI_FIKES_FISIP_FPsi.3ffa482f8ef7a313ecf2.jpg",
      title: "Fakultas Agama Islam",
      className: "h-44 object-cover"
    }
  ];

  return (
    <div className="relative bg-black/10 p-5 rounded-2xl">
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     text-5xl font-bold text-[#e6f39a] drop-shadow-lg text-center z-50">
        Welcome to the PRESTIKA
      </h1>
      <div className="grid grid-cols-4 gap-3 bg-white p-3 rounded-xl">
        {fakultas.slice(0, 9).map((fac, i) => (
          <div key={i} className="relative">
            <img
              src={fac.src}
              alt={fac.title}
              className={`rounded-2xl w-full hover:-translate-y-1 transition duration-300 ${fac.className}`}
            />
            <div className="absolute bottom-0 w-full bg-blue-900/90 text-white text-sm py-1 rounded-b-2xl text-center">
              {fac.title}
            </div>
          </div>
        ))}
        <div className="relative">
          <img
            src={fakultas[9].src}
            alt={fakultas[9].title}
            className={`rounded-2xl w-full hover:-translate-y-1 transition duration-300 ${fakultas[9].className}`}
          />
          <div className="absolute bottom-0 w-full bg-blue-900/90 text-white text-sm py-1 rounded-b-2xl text-center">
            {fakultas[9].title}
          </div>
        </div>
        <div className="col-span-2 flex items-center">
          <strong className="text-black w-full p-6 rounded-2xl shadow-black shadow-md bg-white text-center">
            Yuk, Tambahkan Prestasimu!
          </strong>
        </div>
      </div>
    </div>
  );
}
