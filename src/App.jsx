import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Digital Photography",
      description: "Landscape and portrait photography collection showcasing natural beauty",
      image: "/api/placeholder/600/400",
      tags: ["Photography", "Lightroom", "Composition"]
    },
    {
      title: "Motion Graphics",
      description: "Animated logos and brand identity videos for corporate clients",
      image: "/api/placeholder/600/400",
      tags: ["After Effects", "Premiere Pro", "Animation"]
    },
    {
      title: "3D Modeling",
      description: "Character and environment design for gaming projects",
      image: "/api/placeholder/600/400",
      tags: ["Blender", "Maya", "Texturing"]
    },
    {
      title: "Video Production",
      description: "Short films and commercial video content",
      image: "/api/placeholder/600/400",
      tags: ["Video Editing", "Color Grading", "Sound Design"]
    },
    {
      title: "UI/UX Design",
      description: "Mobile app and website interface designs",
      image: "/api/placeholder/600/400",
      tags: ["Figma", "Sketch", "Prototyping"]
    },
    {
      title: "Digital Art",
      description: "Original artwork and illustrations for various clients",
      image: "/api/placeholder/600/400",
      tags: ["Photoshop", "Illustrator", "Digital Painting"]
    }
  ];

  const skills = [
    "Photography", "Video Editing", "3D Modeling", 
    "Motion Graphics", "Davinci Resolve", "Digital Art",
    "Adobe Creative Suite", "Blender", "3D Animating",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">Portfolio</span>
            <div className="space-x-4">
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Hi, I'm Daniel Francesco Totti
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Multimedia Artist | 3D Artist | Visual Storyteller
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="p-2 text-gray-600 hover:text-gray-900">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/danielfrancescototti/" className="p-2 text-gray-600 hover:text-gray-900">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-2 text-gray-600 hover:text-gray-900">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-white rounded-full shadow">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            Looking for a multimedia professional for your next project?<br />
            I'd love to discuss how we can work together!
          </p>
          <a 
            href="mailto:danitottinainggolan@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
          >
            Contact Me
            <ExternalLink className="ml-2" size={20} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Totti. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;