import { useRouter } from "next/router";
import data from "../../data/portfolio.json";

export default function Carrera() {
  const router = useRouter();

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 text-black shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-8">
          <div
            className="text-2xl font-bold cursor-pointer"
            onClick={() => router.push("/")}
          >
            {data.name}.
          </div>

          <div className="flex space-x-6">
            <button onClick={() => router.push("/work")} className="p-2">Work</button>
            <button onClick={() => router.push("/about")} className="p-2">About me</button>
            <button onClick={() => router.push("/")} className="p-2">Blog</button>
            <button onClick={() => router.push("/resume")} className="p-2">Resume</button>
            <button onClick={() => window.open("https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDnFLcdRXTHMbwcjZXTXCFfmZSWHNXskBjNsqTMkJHXPhdlBJgmlxDCFvVszhQRCkQrsfqg")} className="p-2">Contact</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold text-center mb-12">
          Formación Académica
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {[
            {
              titulo: "Ingeniero Electrónico con mención en Telecomunicaciones",
              año: "2019",
            },
            {
              titulo: "Maestría en Gestión de Sistemas de Información",
              año: "2023",
            },
            {
              titulo: "Maestría en Ciencia de Datos e Inteligencia Artificial",
              año: "2024",
            },
            {
              titulo: "Certificación en Dirección de Proyectos IPMA Level D",
              año: "Año no especificado",
            },
            {
              titulo: "Certificación Internacional Técnico de Fibra Óptica (CFOT)",
              año: "2018",
            },
          ].map((item, i) => (
            <div key={i} className="card">
              <h2>{item.titulo}</h2>
              <p>🗓 {item.año}</p>
            </div>
          ))}
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 py-8 mt-16">
        <div className="container mx-auto text-center">
          <div className="space-x-8 text-lg font-semibold">
            <a href="https://www.linkedin.com/in/pedropinedafdc/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              LinkedIn
            </a>
            <a href="https://github.com/pedropinedafdc" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
              GitHub
            </a>
            <a href="https://x.com/pedropinedafdc" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              X
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDnFLcdRXTHMbwcjZXTXCFfmZSWHNXskBjNsqTMkJHXPhdlBJgmlxDCFvVszhQRCkQrsfqg" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              Email
            </a>
            <a href="https://pedropinedafdc.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              Blog
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
