import React from 'react';
import { GraduationCap, Briefcase, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
              alt="Sarah Mitchell"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              Crafting Stories, One Word at a Time
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              With over 12 years of experience in the publishing industry, I've
              had the privilege of working with bestselling authors, emerging
              writers, and everything in between. My passion lies in helping
              writers discover their unique voice and bringing their stories to
              life.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              I believe that great editing is invisible—it enhances the author's
              voice without overshadowing it. Whether you're working on your
              first novel or your tenth, I'm here to help you create something
              extraordinary.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              When I'm not editing, you can find me reading contemporary fiction,
              hiking mountain trails, or experimenting with new coffee brewing
              methods.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-amber-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="text-amber-600" size={28} />
            </div>
            <h4 className="text-xl font-semibold text-slate-800 mb-3">
              Education
            </h4>
            <p className="text-slate-600">
              MFA in Creative Writing from Columbia University, BA in English
              Literature from Yale University
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-amber-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Briefcase className="text-amber-600" size={28} />
            </div>
            <h4 className="text-xl font-semibold text-slate-800 mb-3">
              Experience
            </h4>
            <p className="text-slate-600">
              Senior Editor at Penguin Random House, Freelance Editor for
              independent authors and small publishers
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-amber-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Heart className="text-amber-600" size={28} />
            </div>
            <h4 className="text-xl font-semibold text-slate-800 mb-3">
              Specialties
            </h4>
            <p className="text-slate-600">
              Contemporary Fiction, Literary Fiction, Memoir, Creative
              Non-fiction, and Young Adult
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;