import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    wordCount: '',
    timeline: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to take your manuscript to the next level? I'd love to hear about your project and discuss how I can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-amber-500 mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-slate-800">Email</h4>
                    <p className="text-slate-600">sarah@sarahmitchellediting.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-amber-500 mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-slate-800">Phone</h4>
                    <p className="text-slate-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-amber-500 mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-slate-800">Location</h4>
                    <p className="text-slate-600">New York, NY<br />Available for remote work</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-amber-50 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-3">
                  Response Time
                </h4>
                <p className="text-slate-600 text-sm">
                  I typically respond to new inquiries within 24 hours. For urgent projects, please mention it in your message.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Project Inquiry
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
                  <h4 className="text-2xl font-bold text-slate-800 mb-2">
                    Thank You!
                  </h4>
                  <p className="text-slate-600">
                    Your message has been sent. I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="project" className="block text-sm font-medium text-slate-700 mb-2">
                        Project Type *
                      </label>
                      <select
                        id="project"
                        name="project"
                        required
                        value={formData.project}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                      >
                        <option value="">Select a service...</option>
                        <option value="developmental">Developmental Editing</option>
                        <option value="copy">Copy Editing</option>
                        <option value="proofreading">Proofreading</option>
                        <option value="consultation">Manuscript Consultation</option>
                        <option value="multiple">Multiple Services</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="wordCount" className="block text-sm font-medium text-slate-700 mb-2">
                        Word Count (approximate)
                      </label>
                      <input
                        type="text"
                        id="wordCount"
                        name="wordCount"
                        value={formData.wordCount}
                        onChange={handleChange}
                        placeholder="e.g., 80,000 words"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-2">
                      Preferred Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                    >
                      <option value="">Select timeline...</option>
                      <option value="rush">Rush (2-3 weeks)</option>
                      <option value="standard">Standard (4-6 weeks)</option>
                      <option value="flexible">Flexible (6+ weeks)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Tell me about your project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your manuscript, genre, target audience, and any specific concerns or goals you have..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors resize-vertical"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-amber-600 transition-colors duration-300 flex items-center justify-center"
                  >
                    <Send size={20} className="mr-2" />
                    Send Project Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;