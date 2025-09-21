import React from 'react';
import { ExternalLink, Star } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'The Last Garden',
      author: 'Maria Rodriguez',
      category: 'Literary Fiction',
      image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      description: 'A powerful novel about family, loss, and redemption set against the backdrop of a changing neighborhood.',
      services: 'Developmental Editing, Copy Editing',
      achievement: 'Winner, 2023 National Book Award',
      rating: 5,
    },
    {
      title: 'Midnight in Silicon Valley',
      author: 'James Chen',
      category: 'Contemporary Fiction',
      image: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      description: 'A thriller exploring the dark side of tech culture and corporate ambition.',
      services: 'Copy Editing, Proofreading',
      achievement: 'New York Times Bestseller',
      rating: 5,
    },
    {
      title: 'Finding Home',
      author: 'Sarah Thompson',
      category: 'Memoir',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      description: 'A moving memoir about immigration, identity, and building a new life in America.',
      services: 'Developmental Editing, Line Editing',
      achievement: 'Featured on NPR Fresh Air',
      rating: 5,
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Portfolio</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Here are some of the amazing projects I've had the privilege to work
            on with talented authors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-amber-600 font-medium mb-3">
                  by {project.author}
                </p>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-4">
                  <p className="text-sm text-slate-500 mb-2">
                    <strong>Services:</strong> {project.services}
                  </p>
                  <div className="flex items-center mb-2">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm font-medium text-green-600">
                    🏆 {project.achievement}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition-colors duration-300"
          >
            Start Your Project
            <ExternalLink size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;