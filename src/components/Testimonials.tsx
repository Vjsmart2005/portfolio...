import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Rodriguez',
      title: 'Author of "The Last Garden"',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      quote: 'Sarah transformed my manuscript from a collection of ideas into a cohesive, powerful narrative. Her developmental editing helped me find the heart of my story.',
      rating: 5,
    },
    {
      name: 'James Chen',
      title: 'Bestselling Author',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      quote: 'Working with Sarah was a game-changer. Her attention to detail and understanding of storytelling helped my book reach the New York Times bestseller list.',
      rating: 5,
    },
    {
      name: 'Emily Watson',
      title: 'First-time Author',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      quote: 'As a first-time author, I was overwhelmed by the publishing process. Sarah guided me every step of the way with patience and expertise.',
      rating: 5,
    },
    {
      name: 'David Thompson',
      title: 'Memoir Writer',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      quote: 'Sarah helped me tell my story with honesty and grace. Her editing preserved my voice while making my memoir so much stronger.',
      rating: 5,
    },
    {
      name: 'Lisa Park',
      title: 'Independent Publisher',
      image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      quote: 'Sarah is our go-to editor for literary fiction. Her work consistently elevates every manuscript she touches. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Michael Foster',
      title: 'Young Adult Author',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      quote: 'Sarah understood my YA characters better than I did! Her developmental feedback helped me create more authentic, compelling protagonists.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">What Clients Say</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what authors and publishers have to say about working together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="text-amber-500 absolute top-4 right-4 opacity-20" size={48} />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-slate-800">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600">{testimonial.title}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-slate-700 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 bg-slate-800 p-12 rounded-lg">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Manuscript?
          </h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join the growing list of satisfied authors who've elevated their work with professional editing.
          </p>
          <a
            href="#contact"
            className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition-colors duration-300 inline-block"
          >
            Start Your Success Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;