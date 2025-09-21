import React from 'react';
import { ChevronDown, BookOpen, Award, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Sarah Mitchell
          </h1>
          <h2 className="text-2xl md:text-3xl text-amber-400 font-light mb-8">
            Professional Editor & Writing Consultant
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into compelling narratives with precision, clarity,
            and creative insight. Specializing in developmental editing,
            copyediting, and manuscript consultation.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 mb-12">
          <div className="flex items-center space-x-3 text-white">
            <BookOpen className="text-amber-400" size={28} />
            <div>
              <div className="text-2xl font-bold">200+</div>
              <div className="text-sm opacity-80">Projects Completed</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-white">
            <Award className="text-amber-400" size={28} />
            <div>
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm opacity-80">Years Experience</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-white">
            <Users className="text-amber-400" size={28} />
            <div>
              <div className="text-2xl font-bold">150+</div>
              <div className="text-sm opacity-80">Happy Clients</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          <a
            href="#portfolio"
            className="bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="text-white/60 animate-bounce" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;