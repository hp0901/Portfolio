import React from "react";
import { motion } from "framer-motion";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiGithub,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const Vision = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-black text-white font-sans">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 space-y-32">

        {/* 1. Intro */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 1 }}
          className="text-center space-y-6"
        >
          <h1 className="text-7xl font-extrabold text-yellow-400 drop-shadow-lg">
            Harsh Patel
          </h1>
          <p className="text-3xl max-w-4xl mx-auto leading-relaxed text-blue-200/90">
            MERN Stack Developer passionate about transforming innovative ideas into scalable and elegant full-stack applications.
          </p>
          <p className="text-xl max-w-3xl mx-auto text-blue-200/80">
            I’m driven by curiosity, creativity, and the constant pursuit of growth — blending clean code with intuitive design and efficient architecture.
          </p>
        </motion.section>

        {/* 2. Vision */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeLeft}
          transition={{ duration: 1 }}
          className="space-y-6 max-w-5xl mx-auto"
        >
          <h2 className="text-5xl font-bold mb-4 text-amber-400 text-center drop-shadow-md">
            My Vision & Philosophy
          </h2>
          <p className="text-lg leading-relaxed text-blue-200/90 text-justify">
            Technology is more than just tools — it’s a language for solving problems and creating connections...
          </p>
          <p className="text-lg leading-relaxed text-blue-200/90 text-justify">
            I believe every line of code should serve a purpose and every interface should delight the user.
          </p>
        </motion.section>

        {/* 3. Skills */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeRight}
          transition={{ duration: 1 }}
          className="space-y-12 max-w-6xl mx-auto"
        >
          <h2 className="text-5xl font-bold text-yellow-400 text-center mb-8 drop-shadow-lg">
            Skills & Tech Stack
          </h2>

          <div className="flex flex-wrap justify-center gap-12 text-7xl">
            <SiReact className="text-cyan-400 cursor-default" />
            <SiNodedotjs className="text-green-500 cursor-default" />
            <SiExpress className="text-gray-300 cursor-default" />
            <SiMongodb className="text-green-400 cursor-default" />
            <SiGithub className="text-white cursor-default" />
            <SiJavascript className="text-yellow-300 cursor-default" />
            <SiTailwindcss className="text-sky-400 cursor-default" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg text-blue-200/90 text-justify">
            <div>
              <h3 className="font-semibold text-amber-300 mb-2">Frontend Development</h3>
              <p>Expert in React and Tailwind CSS for building responsive UIs.</p>
            </div>
            <div>
              <h3 className="font-semibold text-amber-300 mb-2">Backend Development</h3>
              <p>Experienced in Node.js, Express, and REST APIs for server-side logic.</p>
            </div>
            <div>
              <h3 className="font-semibold text-amber-300 mb-2">Databases & DevOps</h3>
              <p>Proficient with MongoDB and familiar with CI/CD and Azure cloud services.</p>
            </div>
            <div>
              <h3 className="font-semibold text-amber-300 mb-2">Version Control</h3>
              <p>Git & GitHub for collaboration, branching, and code review workflows.</p>
            </div>
          </div>
        </motion.section>

        {/* 4. Projects */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeLeft}
          transition={{ duration: 1 }}
          className="space-y-10 max-w-6xl mx-auto"
        >
          <h2 className="text-5xl font-bold text-yellow-300 text-center mb-8 drop-shadow-md">
            Selected Projects
          </h2>

          <div className="space-y-8">
            <article className="p-6 rounded-3xl bg-gradient-to-r from-indigo-500 to-violet-700 text-white shadow-xl hover:scale-[1.03] transition">
              <h3 className="text-2xl font-semibold mb-2">Portfolio Website</h3>
              <p>Responsive React portfolio with animations and SEO optimizations.</p>
              <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 underline hover:text-yellow-300">GitHub Repo</a>
            </article>
            <article className="p-6 rounded-3xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-xl hover:scale-[1.03] transition">
              <h3 className="text-2xl font-semibold mb-2">E-commerce Web App</h3>
              <p>Full-featured MERN store with admin panel, cart, and payment system.</p>
              <a href="https://github.com/yourusername/ecommerce" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 underline hover:text-yellow-200">GitHub Repo</a>
            </article>
            <article className="p-6 rounded-3xl bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-xl hover:scale-[1.03] transition">
              <h3 className="text-2xl font-semibold mb-2">Chat Application</h3>
              <p>Real-time chat app with private rooms and Socket.IO.</p>
              <a href="https://github.com/yourusername/chat-app" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 underline hover:text-pink-200">GitHub Repo</a>
            </article>
          </div>
        </motion.section>

        {/* 5. Timeline */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeRight}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-5xl font-bold text-amber-400 text-center mb-12 drop-shadow-md">
            Learning Timeline & Milestones
          </h2>

          <div className="relative border-l-4 border-yellow-400 ml-6 space-y-12">
            {[
              { year: "2019", event: "Started C and C++ at university." },
              { year: "2020", event: "Explored Java and Python fundamentals." },
              { year: "2021", event: "Began JavaScript and web dev basics." },
              { year: "2022", event: "Completed MERN stack development course." },
              { year: "2023", event: "Built full-stack apps and improved DSA." },
              { year: "2024", event: "Targeting internships & roles in the USA." },
            ].map(({ year, event }) => (
              <div key={year} className="relative pl-10 ">
                <div className="absolute -left-7 top-(-1) w-14 h-14 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center">
                  {year}
                </div>
                <p className="text-lg text-blue-200/90">{event}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 6. Goals */}
        
{/* 6. Goals & Future Plans */}
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
  transition={{ duration: 1 }}
  className="max-w-4xl mx-auto text-center space-y-6"
>
  <h2 className="text-5xl font-bold text-yellow-400 drop-shadow-lg">
    Goals & Future Plans
  </h2>
  <ul className="text-lg leading-relaxed text-blue-200/90 space-y-4 text-left md:text-center md:inline-block">
    <li className="flex items-center gap-3">
      <FaArrowRight className="text-indigo-400 text-xl" />
      Secure an internship or job in the USA
    </li>
    <li className="flex items-center gap-3">
      <FaArrowRight className="text-indigo-400 text-xl" />
      Contribute to open-source projects
    </li>
    <li className="flex items-center gap-3">
      <FaArrowRight className="text-indigo-400 text-xl" />
      Learn AWS, Azure & AI integrations
    </li>
    <li className="flex items-center gap-3">
      <FaArrowRight className="text-indigo-400 text-xl" />
      Launch a SaaS product
    </li>
    <li className="flex items-center gap-3">
      <FaArrowRight className="text-indigo-400 text-xl" />
      Mentor junior developers globally
    </li>
  </ul>
</motion.section>



        {/* 7. Contact */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center py-20"
        >
          <h2 className="text-5xl font-bold mb-6 text-amber-400 drop-shadow-md">Get In Touch</h2>
          <p className="text-lg mb-8 text-blue-200/80">
            Want to work together, collaborate, or just connect? Let’s talk!
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hp9850018@gmail.com&su=Greetings&body=Hi%20!%20Harsh%20Patel"
            className="inline-flex items-center px-8 py-4 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail className="mr-2 text-xl" />
            Email Me
          </a>
        </motion.section>
      </div>
    </div>
  );
};

export default Vision;
