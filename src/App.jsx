import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Code, Send, Smartphone, ChevronDown, Star, Calendar, User, Briefcase, GraduationCap, Award, Server, Database, Globe, Cloud, Zap, Monitor } from 'lucide-react';
import mailerjob from './assets/mailerjob.png';
import sml from './assets/sml.png';
import fechzo from './assets/fechzo.png';
import pic from './assets/pic.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = [
    { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
    { name: 'React', level: 95, color: 'bg-blue-500' },
    { name: 'Node.js', level: 88, color: 'bg-green-600' },
    { name: 'Express.js', level: 85, color: 'bg-gray-600' },
    { name: 'MongoDB', level: 85, color: 'bg-green-700' },
    { name: 'Next.js', level: 80, color: 'bg-black' },
    { name: 'Java', level: 75, color: 'bg-red-600' },
    { name: 'HTML5', level: 95, color: 'bg-orange-500' },
    { name: 'CSS3', level: 90, color: 'bg-blue-600' },
    { name: 'MySQL', level: 80, color: 'bg-blue-700' },
    { name: 'AWS S3', level: 75, color: 'bg-orange-600' }
  ];

  const projects = [
    {
      title: 'MailerJobs - Job Portal Website',
      description: 'A comprehensive Naukri-like job portal using the MERN stack with responsive web design, API integration, and role-based authentication & authorization for employers and job seekers.',
      image: mailerjob,
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3', 'Vercel'],
      github: '#',
      demo: 'https://mailerjobs.com',
      status: 'Ongoing - Freelance'
    },
    {
      title: 'Food Ordering Web Application',
      description: 'MERN-based platform with separate portals for users, restaurants, and admins, featuring order tracking, menu management, and automated notifications via cron jobs.',
      image: fechzo,
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Cron Jobs'],
      demo: '#',
      status: 'Completed'
    },
    {
      title: 'SmlNexgen Company Website',
      description: 'Full-stack company website with Next.js, React, GSAP, and Three.js for animations, plus Node.js/Express.js backend and MongoDB. Deployed via Vercel and Render with 99% uptime.',
      image: sml,
      tech: ['Next.js', 'React', 'GSAP', 'Three.js', 'Node.js', 'MongoDB'],
      demo: 'https://www.smlnexgenllp.com/',
      status: 'Completed'
    }
  ];

  const experiences = [
    {
      title: 'Full Stack Developer - MERN',
      company: 'Freelance',
      period: 'Jun 2025 - Present',
      location: 'Remote',
      type: 'Freelance',
      description: 'Designing scalable job portals with responsive web design principles and comprehensive API integration.',
      achievements: [
        'Designed a scalable job portal with responsive web design principles and API integration',
        'Implemented authentication & authorization for employer and job seeker accounts',
        'Used AWS S3 and Vercel for cloud deployment and file storage'
      ]
    },
    {
      title: 'Engineer Trainer (Full Stack Developer - MERN)',
      company: 'SmlNexgen LLP Pvt. Ltd.',
      period: 'Jan 2025 - June 2025',
      location: 'Hosur',
      type: 'Full-time',
      description: 'Built responsive UIs with React and developed RESTful APIs with MongoDB for database optimization.',
      achievements: [
        'Built responsive UIs with React, ensuring responsive web design across devices',
        'Developed RESTful APIs and integrated third-party services with MongoDB for database optimization',
        'Implemented authentication & authorization for role-based access control',
        'Deployed to Vercel and Render for cloud deployment'
      ]
    },
    {
      title: 'Associate Engineer (Product Development)',
      company: 'Harman Connected Services Corporation India Pvt. Ltd.',
      period: 'May 2022 - Feb 2023',
      location: 'Bangalore',
      type: 'Full-time',
      description: 'Built and maintained MERN stack applications with seamless frontend–backend integration.',
      achievements: [
        'Built and maintained MERN stack applications with seamless frontend–backend integration',
        'Designed RESTful APIs and responsive UIs with React/Bootstrap',
        'Applied Git for collaborative code management and problem-solving projects'
      ]
    },
    {
      title: 'Software Developer (Intern)',
      company: 'Iprimed Solutions Pvt. Ltd.',
      period: 'March 2022 - April 2022',
      location: 'Bangalore',
      type: 'Internship',
      description: 'Developed internal web applications using Python and Selenium with responsive interfaces.',
      achievements: [
        'Developed an internal web application using Python and Selenium',
        'Created a responsive interface and used Git for version control'
      ]
    }
  ];

  const professionalDevelopment = [
    {
      title: 'Upskilling',
      period: 'March 2023 – Dec 2023',
      description: 'Focused on advanced React, Node.js, and MongoDB through online courses, enhancing full-stack development skills.'
    },
    {
      title: 'Java Full Stack Development Course',
      period: 'Jan 2024 – July 2024',
      description: 'Completed a 7-month course covering Java, SpringBoot, OOP, JDBC, and front-end development, building a dynamic web application project.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Dhanush Kumar K
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.id
                        ? 'text-blue-600 bg-blue-50'
                       : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-blue-600 font-medium">Hello, I'm</p>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Dhanush Kumar <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">K</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Full Stack Developer with 1.5+ years of experience delivering scalable, high-performance web applications using the MERN stack.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Get In Touch
                </button>
                <a
                  href="https://drive.google.com/file/d/1zRWAmpSOUPSvFs4CoNyBu0LX1qvaF5kw/view?usp=sharing"
                  download="Dhanush_Resume.pdf"
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </div>

              <div className="flex space-x-6">
                <a href="https://www.linkedin.com/in/dhanush-kumar-k-0b75241b7/" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:3dhanushkccd@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  <Mail className="h-6 w-6" />
                </a>
                <a href="tel:+919361428388" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  <Phone className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src = {pic}
                  alt="Profile"
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl transform rotate-6"></div>
            </div>
          </div>

          <div className="mt-20 animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="mx-auto block text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <ChevronDown className="h-8 w-8" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full Stack Developer skilled in responsive web design, API integration, database optimization, and cloud deployment. Adept in Agile/Scrum environments with experience in authentication & authorization for secure applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <User className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Personal Info</h3>
                  <p className="text-gray-600">Get to know me better</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-600">4/91, Punugandoddi, Hosur</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-600">+91-9361428388</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-600">3dhanushkccd@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-600">B.E. Biomedical Engineering</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                I have extensive experience in building scalable MERN stack applications, with expertise in cloud deployment, authentication systems, and modern development practices. I thrive in collaborative environments and have a proven track record of delivering high-quality solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1.5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-gray-600">Technologies</div>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">2</div>
                <div className="text-gray-600">Companies Worked</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technical skills across full-stack development, cloud technologies, and modern frameworks
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Frontend Development</h3>
              <p className="text-gray-600">React, Next.js, HTML5, CSS3, Bootstrap, GSAP, Three.js</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Backend Development</h3>
              <p className="text-gray-600">Node.js, Express.js, Java, Spring Boot, RESTful APIs</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Database & Storage</h3>
              <p className="text-gray-600">MongoDB, MySQL, SQLite3, AWS S3</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud & DevOps</h3>
              <p className="text-gray-600">AWS S3, Vercel, Render, Git, Agile/Scrum</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-900 font-medium">{skill.name}</span>
                  <span className="text-gray-600 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My professional journey and the valuable experiences that shaped my career in full-stack development
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Briefcase className="h-5 w-5 text-blue-600" />
                      <span className="text-sm text-blue-600 font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-3 mb-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{exp.location}</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      {exp.type}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-3">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h3>
                    <p className="text-lg text-blue-600 mb-3">{exp.company}</p>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-3">
                            <Award className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Professional Development */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Development</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {professionalDevelopment.map((dev, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{dev.title}</h4>
                  <p className="text-blue-600 text-sm font-medium mb-3">{dev.period}</p>
                  <p className="text-gray-600 text-sm">{dev.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my recent work and professional projects that demonstrate my full-stack development expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                      project.status === 'Ongoing - Freelance' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My academic background and educational achievements
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Bachelor of Engineering in Biomedical Engineering
                  </h3>
                  <p className="text-lg text-blue-600 mb-2">Adhiyamaan College of Engineering</p>
                  <div className="flex items-center space-x-4 text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>Hosur, Tamil Nadu</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4" />
                      <span>CGPA: 8.54</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Completed my undergraduate degree in Biomedical Engineering with excellent academic performance. 
                    This interdisciplinary program provided me with a strong foundation in both engineering principles 
                    and life sciences, which has been valuable in my transition to software development.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Certifications */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Certifications & Courses</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-green-100 p-2 rounded">
                      <Award className="h-5 w-5 text-green-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Java Full Stack Development</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">7-month comprehensive course</p>
                  <p className="text-gray-700 text-sm">
                    Covered Java, SpringBoot, OOP, JDBC, and front-end development with hands-on project experience.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-purple-100 p-2 rounded">
                      <Code className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">MERN Stack Specialization</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Advanced React, Node.js, MongoDB</p>
                  <p className="text-gray-700 text-sm">
                    Intensive training in modern full-stack development with hands-on project implementations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can work together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="text-lg font-medium text-gray-900">3dhanushkccd@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="text-lg font-medium text-gray-900">+91-9361428388</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Location</p>
                      <p className="text-lg font-medium text-gray-900">4/91, Punugandoddi, Hosur</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Linkedin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/dhanush-kumar-k-0b75241b7/" className="text-lg font-medium text-blue-600 hover:text-blue-700">
                        Connect with me
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">What I Can Help With</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <Globe className="h-8 w-8 text-blue-600 mb-2" />
                  <h4 className="font-medium text-gray-900">Web Development</h4>
                  <p className="text-sm text-gray-600">Full-stack MERN applications</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <Server className="h-8 w-8 text-green-600 mb-2" />
                  <h4 className="font-medium text-gray-900">API Development</h4>
                  <p className="text-sm text-gray-600">RESTful API design & integration</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <Cloud className="h-8 w-8 text-purple-600 mb-2" />
                  <h4 className="font-medium text-gray-900">Cloud Deployment</h4>
                  <p className="text-sm text-gray-600">AWS, Vercel, Render solutions</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <Monitor className="h-8 w-8 text-orange-600 mb-2" />
                  <h4 className="font-medium text-gray-900">UI/UX Design</h4>
                  <p className="text-sm text-gray-600">Responsive & modern interfaces</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="mb-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Dhanush Kumar K
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Full Stack Developer with 1.5+ years of experience delivering scalable, high-performance web applications using the MERN stack.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/dhanush-kumar-k-0b75241b7/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:3dhanushkccd@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Mail className="h-6 w-6" />
                </a>
                <a href="tel:+919361428388" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Phone className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Full Stack Development</li>
                <li>MERN Stack Applications</li>
                <li>API Development</li>
                <li>Cloud Deployment</li>
                <li>Database Design</li>
                <li>Responsive Web Design</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 Dhanush Kumar K. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;