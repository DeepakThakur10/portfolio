import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ChevronDown, Code, Database, BarChart3, Award, GraduationCap, Briefcase, Download, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    programming: ['Python', 'SQL', 'Java', 'Kotlin', 'XML'],
    dataAnalysis: ['Excel', 'Seaborn', 'Matplotlib', 'Power BI'],
    tools: ['VS Code', 'Jupyter Notebook', 'Git', 'GitHub', 'Postman'],
    ml: ['Scikit-Learn', 'Efficient Net'],
    other: ['Flask', 'REST APIs', 'Gemini API']
  };

  const projects = [
    {
      title: 'FairCast – Online Voting System',
      period: 'June 2025 – Sept 2025',
      tech: ['Kotlin', 'XML', 'Firebase', 'Bitmap API'],
      description: [
        'Developed secure digital voting application with biometric face authentication',
        'Implemented QR-based login preventing unauthorized voting',
        'Designed multi-module system with Fragments + Bottom Navigation',
        'Integrated real-time FireStore for live vote updates and election insights'
      ],
      github: 'https://github.com/DeepakThakur10/FairCast',
      demo: 'https://github.com/DeepakThakur10/FairCast'
    },
    {
      title: 'Language Translator Chatbot',
      period: 'Apr 2025 – May 2025',
      tech: ['Flask', 'Gemini API', 'HTML/CSS', 'JavaScript'],
      description: [
        'Built AI-powered translation app across multiple languages',
        'Integrated real-time chatbot for dynamic conversational translations',
        'Created responsive frontend ensuring seamless cross-device usability',
        'Implemented scalable Flask backend with secure routing'
      ],
      github: 'https://github.com/DeepakThakur10/language-translator',
      demo: 'https://github.com/DeepakThakur10/language-translator'
    }
  ];

  const certificates = [
    { name: 'Data Science Professional', issuer: 'Oracle', date: 'Oct 2025' },
    { name: 'SQL (Advanced)', issuer: 'HackerRank', date: 'Sept 2025' },
    { name: 'Cloud Computing', issuer: 'NPTEL', date: 'April 2025' },
    { name: 'Java (Basic)', issuer: 'HackerRank', date: 'Feb 2025' }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      institution: 'Lovely Professional University',
      location: 'Punjab, India',
      period: 'Since August 2023',
      grade: 'CGPA: 7.34'
    },
    {
      degree: 'Intermediate',
      institution: 'M.L.S.M College',
      location: 'Darbhanga, Bihar',
      period: 'April 2020 - March 2022',
      grade: 'Percentage: 70%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            DKT
          </h1>
          <div className="flex gap-6">
            {['Home', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-500/50 mb-6">
              <img 
                src="/profile.png" 
                alt="Deepak Kumar Thakur" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-5xl font-bold" style={{display: 'none'}}>
                DK
              </div>
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Deepak Kumar Thakur
          </h1>
          <p className="text-2xl text-purple-300 mb-6">Aspiring Data Scientist</p>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Passionate about transforming data into actionable insights. Skilled in Python, SQL, and Machine Learning with a strong foundation in data analysis and visualization.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <a href="https://github.com/DeepakThakur10" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/deepak078" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:dk1816859@gmail.com" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
            <a href="tel:+919199631795" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-110">
              <Phone className="w-6 h-6" />
            </a>
          </div>
          <a 
            href="/resume.pdf" 
            download="Deepak_Kumar_Thakur_Resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 font-semibold mb-8"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
          <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-cyan-400" />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Code className="w-10 h-10 text-cyan-400" />
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-900/50 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Data Analysis & Visualization</h3>
              <div className="flex flex-wrap gap-2">
                {skills.dataAnalysis.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-900/50 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Developer Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-900/50 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Machine Learning</h3>
              <div className="flex flex-wrap gap-2">
                {skills.ml.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-900/50 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Other Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.other.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-900/50 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Problem-Solving', 'Team Player', 'Adaptability'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-900/50 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Briefcase className="w-10 h-10 text-cyan-400" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-2xl font-bold mb-2 text-cyan-400">{project.title}</h3>
                <p className="text-purple-300 text-sm mb-4">{project.period}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-purple-900/50 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 mb-6">
                  {project.description.map((desc, i) => (
                    <li key={i} className="text-slate-300 text-sm flex items-start">
                      <span className="text-cyan-400 mr-2">▹</span>
                      {desc}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4 pt-4 border-t border-slate-700">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-300 text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-all duration-300 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates & Achievements */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Award className="w-10 h-10 text-cyan-400" />
            Certificates & Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {certificates.map((cert, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">{cert.name}</h3>
                <p className="text-purple-300">{cert.issuer}</p>
                <p className="text-slate-400 text-sm">{cert.date}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 p-6 rounded-xl border border-cyan-500/20">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Pandas Badge - LeetCode</h3>
            <p className="text-slate-300">Earned "Introduction to Pandas" badge by completing hands-on data manipulation challenges using Python and the Pandas library.</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <GraduationCap className="w-10 h-10 text-cyan-400" />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400">{edu.degree}</h3>
                    {edu.field && <p className="text-purple-300">{edu.field}</p>}
                    <p className="text-slate-300">{edu.institution}</p>
                    <p className="text-slate-400 text-sm">{edu.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-purple-300">{edu.period}</p>
                    <p className="text-cyan-400 font-semibold">{edu.grade}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-8">
            I'm always open to discussing data science opportunities, collaborations, or just chatting about data!
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="mailto:dk1816859@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 hover:scale-105">
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a href="https://linkedin.com/in/deepak078" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-105">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a href="https://github.com/DeepakThakur10" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-105">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
          <p className="mt-8 text-slate-400">
            <Phone className="w-4 h-4 inline mr-2" />
            +91-9199631795
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2025 Deepak Kumar Thakur. Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}