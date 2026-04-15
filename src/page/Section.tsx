import foto from "../assets/m.png";
import laravel from "../assets/laravel.png";
import react from "../assets/react.png";
import php from "../assets/php.png";
import mysql from "../assets/mysql.png";
import js from "../assets/js.png";
import golang from "../assets/golang.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import html from "../assets/html.png";
import { Typewriter } from "react-simple-typewriter";

function AppSection() 
{
    return (

      <div className="min-h-screen bg-gradient-to-b from-black to-blue-900 flex flex-col px-6 py-10 mt-10">

  {/* TOP: PENJELASAN + FOTO (side by side) */}
  <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-10">

    {/* KIRI - TEKS */}
  <div className="text-white md:w-1/2">
  <h1 className="text-4xl font-bold mb-4">
    Hi, Saya Amipa Umadiniah
  </h1>

 <p className="text-gray-300 leading-relaxed">
  <span className="font-bold">
    <Typewriter
      words={[
        "Saya adalah seorang dengan ketertarikan yang kuat di bidang Software Development."
      ]}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={50}
      deleteSpeed={30}
      delaySpeed={2000}
    />
  </span>
</p>
</div>

    {/* KANAN - FOTO */}
 <div className="md:w-1/2 flex justify-center">
  <div className="relative group">
    
    {/* glow background */}
    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-500"></div>

    {/* image */}
    <img
      src={foto}
      alt="Foto saya"
      className="relative w-64 h-64 object-cover rounded-3xl border border-white/10
      shadow-[0_20px_60px_rgba(0,0,0,0.5)]
      group-hover:scale-105 transition duration-500"
    />
  </div>
</div>

  </div>



      {/* KEAHLIAN */}
<div  id="keahlian" className="max-w-6xl mx-auto w-full mt-20 text-center">

  <h2 className="text-white text-3xl font-bold mb-10">
    Keahlian
  </h2>

  <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">

    {/* Golang */}
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 hover:scale-105 transition">
      <img src={golang} className="w-25 h-25 mx-auto mb-2" />
      <p className="text-white font-bold">Golang</p>
    </div>
      {/* PHP */}
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 hover:scale-105 transition">
      <img src={php} className="w-25 h-25 mx-auto mb-2" />
      <p className="text-white font-bold">PHP</p>
    </div>
    {/* Laravel */}
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 hover:scale-105 transition">
      <img src={laravel} className="w-25 h-25 mx-auto mb-2" />
      <p className="text-white font-bold">Laravel</p>
    </div>

    {/* JavaScript */}
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 hover:scale-105 transition">
      <img src={js} className="w-25 h-25 mx-auto mb-2" />
      <p className="text-white font-bold">JavaScript</p>
    </div>

    {/* React */}
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 hover:scale-105 transition">
      <img src={react} className="w-25 h-25 mx-auto mb-2" />
      <p className="text-white font-bold">React </p>
    </div>

    {/* Mysql */}
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 hover:scale-105 transition">
      <img src={mysql} className="w-25 h-25 mx-auto mb-2" />
      <p className="text-white font-bold">MySQL</p>
    </div>
    {/* TailWindCss */}
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 hover:scale-105 transition">
      <img src={tailwind} className="w-25 h-25 mx-auto mb-2" />
      <p className="text-white font-bold">TailwindCss</p>
    </div>{/* Mysql */}
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 hover:scale-105 transition">
      <img src={css} className="w-25 h-25 mx-auto mb-5" />
      <p className="text-white font-bold">CSS</p>
    </div>{/* Mysql */}
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 hover:scale-105 transition">
      <img src={html} className=" w-35 h-35 mx-auto mb-0" />
      <p className="text-white font-bold">Html</p>
    </div>


  </div>
</div>

  <div id="proyek" className="max-w-6xl mx-auto w-full mt-24">
  <h2 className="text-white text-3xl font-bold text-center mb-16">
    Proyek 
  </h2>

  <div className="relative">
    {/* garis tengah */}
    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[2px] bg-gray-700 h-full"></div>

    {/* PROJECT 1 */}
    <div className="mb-20 flex flex-col md:flex-row items-center">

      {/* kiri */}
      <div className="md:w-1/2 flex justify-center md:justify-end md:pr-10">
        <div className="bg-gray-100 px-5 py-3 rounded-lg shadow-sm">
          <p className="font-semibold text-gray-800">
            Aplikasi Cuaca
          </p>
        </div>
      </div>

      {/* dot */}
      <div className="hidden md:flex justify-center w-0 relative">
        <div className="w-5 h-5 bg-gray-900 border-2 border-primary rounded-full z-10"></div>
      </div>

      {/* kanan */}
      <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0 text-left">

        <h3 className="text-2xl font-semibold text-white">
          Aplikasi Web Cuaca (Weather Web Application)
        </h3>

        <p className="text-sm text-gray-400 mt-4 leading-relaxed">
          Aplikasi web untuk menampilkan informasi cuaca secara real-time berdasarkan pencarian kota.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-gray-400">
          <li>• Menggunakan API cuaca eksternal untuk mengambil data kondisi cuaca</li>
          <li>• Menampilkan suhu, kelembapan, dan kecepatan angin</li>
          <li>• Antarmuka responsif dan ramah pengguna</li>
          <li>• Dibangun menggunakan React untuk UI dinamis</li>
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {["React", "JavaScript", "API Cuaca"].map((tech) => (
            <span
              key={tech}
              className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </div>

    {/* PROJECT 2 */}
    <div className="mb-20 flex flex-col md:flex-row items-center">

      {/* kiri */}
      <div className="md:w-1/2 flex justify-center md:justify-end md:pr-10">
        <div className="bg-gray-100 px-5 py-3 rounded-lg shadow-sm">
          <p className="font-semibold text-gray-800">
            Sistem Gudang
          </p>
        </div>
      </div>

      {/* dot */}
      <div className="hidden md:flex justify-center w-0 relative">
        <div className="w-5 h-5 bg-gray-900 border-2 border-primary rounded-full z-10"></div>
      </div>

      {/* kanan */}
      <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0 text-left">

        <h3 className="text-2xl font-semibold text-white">
          Sistem Manajemen Gudang (Frontend)
        </h3>

        <p className="text-sm text-gray-400 mt-4 leading-relaxed">
          Membangun antarmuka frontend untuk sistem manajemen gudang yang terhubung dengan backend API.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-gray-400">
          <li>• Membuat dashboard pengelolaan data gudang</li>
          <li>• Mengambil data dari backend API</li>
          <li>• Membangun UI responsif menggunakan React</li>
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {["React", "JavaScript", "API Backend"].map((tech) => (
            <span
              key={tech}
              className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </div>

  </div>
</div>

</div>
      
    );
}

export default AppSection;