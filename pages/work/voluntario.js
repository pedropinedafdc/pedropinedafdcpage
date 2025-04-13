// pages/work/voluntariado.js

import { useRouter } from "next/router";
import data from "../../data/portfolio.json";

export default function Voluntariado() {
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
            <button onClick={() => router.push("/blog")} className="p-2">Blog</button>
            <button onClick={() => router.push("/resume")} className="p-2">Resume</button>
            <button onClick={() => window.open("mailto:ppinedacordova@gmail.com")} className="p-2">Contact</button>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold text-center mb-12">Voluntariado IEEE</h1>

        <div className="text-lg max-w-3xl mx-auto space-y-6">
          <p>
            Pedro ha liderado y participado en múltiples actividades de voluntariado
            tecnológico y social como parte de IEEE. Desde la presidencia de la Rama
            Estudiantil UPS Cuenca hasta la coordinación nacional del programa
            EMPRENDIEEE, su compromiso ha sido generar impacto con tecnología.
          </p>
          <p>
            Algunas de sus iniciativas destacadas incluyen la organización del Hackathon
            IEEE Hack Tech Ecuador, el proyecto #AcosoNuncaMás, y la celebración del
            IEEE Day con reconocimiento internacional.
          </p>
          <p>
            También ha promovido eventos sobre empoderamiento femenino, ciudades
            inteligentes, software libre y formación en programación con el evento Django Girls.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 py-8 mt-16">
        <div className="container mx-auto text-center">
          <div className="space-x-8 text-lg font-semibold">
            <a href="https://www.linkedin.com/in/pedropinedafdc/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
              GitHub
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              Twitter
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
