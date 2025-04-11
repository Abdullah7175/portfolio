'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Background"
            fill
            className="object-cover opacity-10"
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
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
              alt="Profile"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-8 border-4 border-primary"
            />
            <h1 className="text-5xl font-bold mb-4">John Doe</h1>
            <h2 className="text-2xl text-muted-foreground mb-6">Senior Software Engineer</h2>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center">
              I am a passionate software engineer with over 8 years of experience in building web applications.
              I specialize in React, Node.js, and cloud technologies. My goal is to create efficient,
              scalable, and user-friendly solutions that solve real-world problems.
            </p>
            <div className="mt-8 text-center">
              <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                <Download size={20} />
                Download CV
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Frontend Development', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
              { title: 'Backend Development', skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
              { title: 'DevOps & Tools', skills: ['Docker', 'AWS', 'Git', 'CI/CD'] },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg shadow-lg"
              >
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
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="max-w-3xl mx-auto">
            {[
              {
                company: 'Tech Corp',
                position: 'Senior Software Engineer',
                period: '2020 - Present',
                description: 'Led development of multiple high-impact projects, mentored junior developers.',
              },
              {
                company: 'StartupX',
                position: 'Software Engineer',
                period: '2018 - 2020',
                description: 'Developed and maintained multiple client-facing applications.',
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-8 border-l-2 border-primary pl-6 relative"
              >
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2" />
                <h3 className="text-xl font-semibold">{job.company}</h3>
                <p className="text-muted-foreground mb-2">{job.position}</p>
                <p className="text-sm text-muted-foreground mb-2">{job.period}</p>
                <p className="text-muted-foreground">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg"
              >
                <Mail className="w-8 h-8 mb-4 mx-auto text-primary" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">john.doe@example.com</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg"
              >
                <Linkedin className="w-8 h-8 mb-4 mx-auto text-primary" />
                <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                <p className="text-muted-foreground">@johndoe</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground">
        <p>© 2024 John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}