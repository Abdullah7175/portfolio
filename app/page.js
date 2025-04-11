'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1974&auto=format&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      details: 'This project involved building a complete e-commerce platform with user authentication, product catalog, shopping cart, and payment processing. Implemented responsive design and optimized for performance.',
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application for teams',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop',
      tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      details: 'Developed a real-time task management system with drag-and-drop functionality, team collaboration features, and progress tracking. Integrated with Firebase for authentication and data storage.',
      link: '#'
    },
    {
      id: 3,
      title: 'AI Content Generator',
      description: 'AI-powered content generation tool with custom templates',
      image: 'https://images.unsplash.com/photo-1677442135136-760c813a743e?q=80&w=1932&auto=format&fit=crop',
      tags: ['Python', 'React', 'OpenAI API', 'FastAPI'],
      details: 'Built an AI content generation platform that helps marketers create high-quality content quickly. Integrated with OpenAI API and developed custom templates for different content types.',
      link: '#'
    }
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-background/80 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">John Doe</div>
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize ${activeSection === item ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'} transition-colors`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/background.jpg"
            alt="Background"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-8 border-4 border-primary"
              priority
            />
            <motion.h1 
              className="text-5xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              John Doe
            </motion.h1>
            <motion.h2 
              className="text-2xl text-muted-foreground mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Senior Software Engineer
            </motion.h2>
            <motion.div 
              className="flex justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8"
            >
              <button 
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Contact Me
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
              <div className="md:w-1/3">
                <Image
                  src="/about.jpg"
                  alt="About me"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-muted-foreground mb-6">
                  I am a passionate software engineer with over 8 years of experience in building web applications.
                  I specialize in React, Node.js, and cloud technologies. My goal is to create efficient,
                  scalable, and user-friendly solutions that solve real-world problems.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Throughout my career, I've had the privilege of working with startups and established companies,
                  helping them transform their ideas into robust digital products. I'm particularly interested in
                  the intersection of design and technology, creating applications that are both powerful and delightful to use.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                    <Download size={20} />
                    Download CV
                  </button>
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    View Projects
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Frontend Development', 
                  skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'GraphQL'],
                  icon: '💻'
                },
                { 
                  title: 'Backend Development', 
                  skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Python', 'Django'],
                  icon: '⚙️'
                },
                { 
                  title: 'DevOps & Tools', 
                  skills: ['Docker', 'AWS', 'Git', 'CI/CD', 'Kubernetes', 'Terraform'],
                  icon: '🛠️'
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-3xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
            <div className="max-w-3xl mx-auto">
              {[
                {
                  company: 'Tech Corp',
                  position: 'Senior Software Engineer',
                  period: '2020 - Present',
                  description: 'Led development of multiple high-impact projects, mentored junior developers, and implemented CI/CD pipelines that reduced deployment times by 40%.',
                  achievements: [
                    'Architected and implemented a microservices architecture that improved scalability',
                    'Reduced page load times by 60% through performance optimization',
                    'Mentored 5 junior developers who have since been promoted'
                  ]
                },
                {
                  company: 'StartupX',
                  position: 'Software Engineer',
                  period: '2018 - 2020',
                  description: 'Developed and maintained multiple client-facing applications with React and Node.js.',
                  achievements: [
                    'Built a real-time dashboard that increased user engagement by 35%',
                    'Implemented automated testing that reduced bugs in production by 50%',
                    'Collaborated with design team to create a more intuitive UI'
                  ]
                },
              ].map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="mb-12 border-l-2 border-primary pl-8 relative pb-8"
                >
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[8px] top-1" />
                  <h3 className="text-2xl font-semibold">{job.company}</h3>
                  <p className="text-muted-foreground mb-2">{job.position}</p>
                  <p className="text-sm text-muted-foreground mb-4">{job.period}</p>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <div className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-primary hover:underline"
                    >
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-background p-8 rounded-xl shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 mt-1 text-primary" />
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-muted-foreground">john.doe@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Linkedin className="w-5 h-5 mt-1 text-primary" />
                      <div>
                        <h4 className="font-medium">LinkedIn</h4>
                        <p className="text-muted-foreground">linkedin.com/in/johndoe</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Github className="w-5 h-5 mt-1 text-primary" />
                      <div>
                        <h4 className="font-medium">GitHub</h4>
                        <p className="text-muted-foreground">github.com/johndoe</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-background p-8 rounded-xl shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-muted rounded-lg focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-muted rounded-lg focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                      <textarea
                        id="message"
                        rows="4"
                        className="w-full px-4 py-2 border border-muted rounded-lg focus:ring-primary focus:border-primary"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Send Message
                    </button>
                  </form>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </footer>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="bg-background rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-background p-4 flex justify-between items-center border-b">
              <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <div className="h-64 relative mb-6 rounded-lg overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg text-muted-foreground mb-6">{selectedProject.details}</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}