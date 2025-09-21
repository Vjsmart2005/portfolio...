import React from 'react';
import { Edit3, FileText, Search, BookOpen, Clock, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'Developmental Editing',
      price: 'Starting at $0.08/word',
      description: 'Big-picture editing focused on structure, plot, character development, and overall narrative flow.',
      features: [
        'Story structure analysis',
        'Character development feedback',
        'Plot consistency review',
        'Pacing and tension optimization',
        'Theme and voice enhancement',
      ],
    },
    {
      icon: Edit3,
      title: 'Copy Editing',
      price: 'Starting at $0.04/word',
      description: 'Line-by-line editing for grammar, style, clarity, and consistency.',
      features: [
        'Grammar and punctuation',
        'Style and tone consistency',
        'Clarity and readability',
        'Fact-checking',
        'Style guide adherence',
      ],
    },
    {
      icon: Search,
      title: 'Proofreading',
      price: 'Starting at $0.02/word',
      description: 'Final polish to catch any remaining errors before publication.',
      features: [
        'Spelling and typo correction',
        'Punctuation refinement',
        'Formatting consistency',
        'Final quality check',
        'Publication-ready review',
      ],
    },
    {
      icon: FileText,
      title: 'Manuscript Consultation',
      price: 'Starting at $200/session',
      description: 'Strategic guidance and personalized feedback for your writing project.',
      features: [
        '1-on-1 consultation calls',
        'Manuscript evaluation',
        'Publishing strategy advice',
        'Writing craft guidance',
        'Career development support',
      ],
    },
  ];

  const process = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'We discuss your project goals, timeline, and specific needs.',
    },
    {
      step: 2,
      title: 'Sample Edit',
      description: 'I provide a sample edit of 1,000 words to ensure we\'re a good fit.',
    },
    {
      step: 3,
      title: 'Project Agreement',
      description: 'We finalize the scope, timeline, and terms of our collaboration.',
    },
    {
      step: 4,
      title: 'Editing Process',
      description: 'I work on your manuscript with regular check-ins and updates.',
    },
    {
      step: 5,
      title: 'Delivery & Review',
      description: 'You receive the edited manuscript with detailed feedback and notes.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Services</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive editing services tailored to your manuscript's unique needs and your goals as a writer.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <IconComponent className="text-amber-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">
                      {service.title}
                    </h3>
                    <p className="text-amber-600 font-semibold">
                      {service.price}
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              My Process
            </h3>
            <p className="text-lg text-slate-600">
              A collaborative approach that ensures your vision comes to life
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-amber-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition-colors duration-300"
          >
            <Clock size={20} className="mr-2" />
            Schedule Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;