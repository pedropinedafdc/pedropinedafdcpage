import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// Local Data
import data from "../../data/portfolio.json";

export default function Carrera() {
  const router = useRouter();

  return (
    <div className="bg-white text-black py-20">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white text-black">
        <div className="container mx-auto flex justify-between items-center py-4 px-8">
          <div className="text-2xl font-semibold" onClick={() => router.push("/")}>
            {data.name}.
          </div>

          <div className="flex items-center">
            <div className="flex space-x-6 ml-6">
              <button onClick={() => router.push("/work")} className="p-2 text-black">Work</button>
              <button onClick={() => router.push("/about")} className="p-2 text-black">About me</button>
              <button onClick={() => router.push("/blog")} className="p-2 text-black">Blog</button>
              <button onClick={() => router.push("/resume")} className="p-2 text-black">Resume</button>
              <button onClick={() => window.open("mailto:ppinedacordova@gmail.com")} className="p-2 text-black">Contact</button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto mt-10 space-y-12">
      <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Hello, I&apos;m Pedro Pineda</h1>
          <p className="text-lg opacity-80">
            I design and develop apps and websites that help early-stage companies launch impactful solutions quickly.
          </p>
        </div>

        {/* Currently Building */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-6">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">University Projects</h3>
            <p className="text-sm opacity-75">
              Open-source UI components and templates made with React, Astro, Tailwind CSS, and Framer Motion.
            </p>
            <a href="https://webmakers.studio" className="text-blue-400 hover:underline">Check out the project</a>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Smart City Projects</h3>
            <p className="text-sm opacity-75">
              Using technology to create sustainable cities using data and analysis.
            </p>
            <a href="https://smartcity.pedropineda.com" className="text-blue-400 hover:underline">Check out the project</a>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Tech for Social Impact</h3>
            <p className="text-sm opacity-75">
              Leveraging technology to solve social issues and bridge digital gaps.
            </p>
            <a href="https://innovations.pedropineda.com" className="text-blue-400 hover:underline">Check out the project</a>
          </div>
        </section>

        {/* Projects Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-6">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">IEEE Projects</h3>
            <p className="text-sm opacity-75">Several technological projects for IEEE that improve connectivity and promote education.</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">City Smart Projects</h3>
            <p className="text-sm opacity-75">Innovative projects focused on creating sustainable and smart cities using technology and data analysis.</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Tech for Social Impact</h3>
            <p className="text-sm opacity-75">Leveraging technology to solve social problems and bridge digital gaps across communities.</p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 mt-12">
        <div className="container mx-auto text-center text-white">
          <div className="space-x-6">
            <a href="https://www.linkedin.com" className="text-xl hover:text-blue-400">LinkedIn</a>
            <a href="https://github.com" className="text-xl hover:text-gray-400">GitHub</a>
            <a href="https://twitter.com" className="text-xl hover:text-blue-300">Twitter</a>
            <a href="https://www.instagram.com" className="text-xl hover:text-pink-500">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
