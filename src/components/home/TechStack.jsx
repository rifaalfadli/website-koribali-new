import React from "react";

const techRow1 = [
  {
    name: "Autodesk Inventor",
    role: "3D Mechanical Design",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/autocad/autocad-original.svg",
  },
  {
    name: "AutoCAD",
    role: "2D/3D Drafting",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/autocad/autocad-original.svg",
  },
  {
    name: "SolidWorks",
    role: "3D CAD Design",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidworks/solidworks-original.svg",
  },
  {
    name: "React JS",
    role: "Frontend Development",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next JS",
    role: "React Framework",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "HTML5",
    role: "Markup Language",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    role: "Styling & UI",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    role: "Web Programming",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "REST API",
    role: "System Integration",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/networkx/networkx-original.svg",
  },
  {
    name: "Docker",
    role: "Containerization",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
];

const techRow2 = [
  {
    name: "Python",
    role: "Backend & Data",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "Flask",
    role: "Python Framework",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
  },
  {
    name: "Pandas",
    role: "Data Analysis",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
  },
  {
    name: "NumPy",
    role: "Scientific Computing",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
  },
  {
    name: "Matplotlib",
    role: "Data Visualization",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
  },
  {
    name: "MySQL",
    role: "Relational Database",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "MariaDB",
    role: "Relational Database",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg",
  },
  {
    name: "DBeaver",
    role: "Database Tool",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dbeaver/dbeaver-original.svg",
  },
  {
    name: "Git",
    role: "Version Control",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    role: "Code Repository",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
];

const TechStack = () => {
  // Menggunakan efek fade ujung layar seperti di ClientSlider
  const fadeStyle = {
    maskImage:
      "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
  };

  return (
    <section className="w-full max-w-[100vw] lg:max-w-6xl mx-auto bg-slate-950 py-20 overflow-hidden border-t border-slate-900/50">
      <div className="w-full px-4 md:px-8 mb-12 text-center">
        {/* Menggunakan warna text-red-500 agar selaras dengan tema Dark Blood */}
        <div className="text-red-500 font-bold mb-3 uppercase tracking-widest text-xs md:text-sm">
          Teknologi & Tools
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white font-display tracking-tight">
          Ekosistem Pengembangan Kami
        </h2>
        <p className="text-slate-400 mt-4 max-w-3xl mx-auto text-sm md:text-base">
          Kami menggunakan teknologi standar industri terkini untuk memastikan
          setiap perancangan sipil dan sistem aplikasi digital Anda berjalan
          stabil, aman, dan dapat diskalakan.
        </p>
      </div>

      {/* Row 1 — Bergerak ke Kiri */}
      <div className="relative overflow-hidden mb-6 py-2" style={fadeStyle}>
        {/* Tambahan hover:[animation-play-state:paused] agar animasi berhenti saat disentuh */}
        <div className="flex gap-4 sm:gap-6 animate-scroll-left w-max hover:[animation-play-state:paused]">
          {[...techRow1, ...techRow1].map((tech, index) => (
            <div
              key={`row1-${index}`}
              className="flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-2xl p-4 min-w-[260px] md:min-w-[280px] hover:shadow-lg transition-all duration-300 group cursor-default"
            >
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-slate-950 rounded-xl border border-slate-800/50 p-2">
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-white font-bold text-sm md:text-base font-display tracking-tight">
                  {tech.name}
                </span>
                <span className="text-slate-400 text-xs md:text-[13px]">
                  {tech.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — Bergerak ke Kanan */}
      <div className="relative overflow-hidden py-2" style={fadeStyle}>
        <div className="flex gap-4 sm:gap-6 animate-scroll-right w-max hover:[animation-play-state:paused]">
          {[...techRow2, ...techRow2].map((tech, index) => (
            <div
              key={`row2-${index}`}
              className="flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-2xl p-4 min-w-[260px] md:min-w-[280px] hover:shadow-lg transition-all duration-300 group cursor-default"
            >
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-slate-950 rounded-xl border border-slate-800/50 p-2">
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-white font-bold text-sm md:text-base font-display tracking-tight">
                  {tech.name}
                </span>
                <span className="text-slate-400 text-xs md:text-[13px]">
                  {tech.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
