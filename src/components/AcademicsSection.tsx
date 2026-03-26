import ParticlesBackground from './ParticlesBackground';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AcademicsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const programs = [
    {
      title: 'Foundational stage (Pre – Primary)',
      description: 'Where Little Minds Begin Their Big Journey',
      gradient: 'from-yellow-400 to-orange-500',
      features: [
        { icon: <span className="text-2xl">🎨</span>, text: 'Creative Expression' },
        { icon: <span className="text-2xl">🎶</span>, text: 'Music & Movement' },
        { icon: <span className="text-2xl">🤝</span>, text: 'Social Development' },
        { icon: <span className="text-2xl">🧩</span>, text: 'Play-Based Learning' },
      ],
    },
    {
      title: 'Primary School – Grades 1-5',
      description: 'Building Strong Foundations for Lifelong Learning',
      gradient: 'from-green-400 to-teal-500',
      features: [
        { icon: <span className="text-2xl">📖</span>, text: 'Core Academics' },
        { icon: <span className="text-2xl">📚</span>, text: 'Reading Programs' },
        { icon: <span className="text-2xl">⚽</span>, text: 'Sports & Activities' },
      ],
    },
    {
      title: 'Middle school – Grades 6 -8',
      description: 'Preparing Students for Future Success Highlights',
      gradient: 'from-blue-400 to-purple-500',
      features: [
        { icon: <span className="text-2xl">📊</span>, text: 'Advanced Curriculum' },
        { icon: <span className="text-2xl">🏆</span>, text: 'Competitive Exam Preparation' },
        { icon: <span className="text-2xl">🎯</span>, text: 'Career Guidance' },
        { icon: <span className="text-2xl">🌟</span>, text: 'Leadership Development' },
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % programs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + programs.length) % programs.length);
  };

  return (
    <section id="academics" className="relative overflow-hidden py-20">
      <ParticlesBackground />
      <div className="relative z-10 max-w-[95rem] mx-auto px-2 sm:px-3 lg:px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6" style={{ color: '#1E3F8A' }}>Our Educational Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive education for play school, pre school and primary school students with age-appropriate learning programs.
          </p>
        </div>

        <div className="mb-20 flex flex-col items-center w-full">
          <h3 className="text-5xl md:text-6xl font-extrabold mb-6 text-[#1E3F8A] tracking-tight drop-shadow-xl text-center bg-white/90 px-8 py-4 rounded-2xl shadow-lg border-b-8 border-blue-200">
            Academic Excellence Redefined
          </h3>
          <div className="text-2xl text-gray-800 font-medium mb-12 text-center max-w-4xl mx-auto leading-relaxed">
            Education at our school is designed to <span className="text-[#1E3F8A] font-bold">inspire</span>, <span className="text-[#1E3F8A] font-bold">empower</span>, and <span className="text-[#1E3F8A] font-bold">transform</span> young minds into confident individuals ready for the future.
          </div>
          <div className="w-full flex justify-center">
            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-3xl shadow-xl px-8 py-8 max-w-3xl w-full border border-blue-200">
              <div className="flex items-center gap-3 mb-4 justify-center">
                <span className="text-4xl">🌿</span>
                <span className="text-2xl md:text-3xl font-extrabold text-[#1E3F8A] drop-shadow-sm">A Thoughtfully Designed Learning Experience</span>
              </div>
              <ul className="text-lg md:text-xl text-gray-800 font-medium space-y-4 pl-2 md:pl-6">
                <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">•</span><span>We don’t just teach lessons — we create meaningful learning journeys.</span></li>
                <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">•</span><span>Concept-driven learning with real-world connections</span></li>
                <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">•</span><span>Student-centric classrooms that encourage curiosity</span></li>
                <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">•</span><span>Focus on understanding, not memorizing</span></li>
                <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">•</span><span>Personalized attention for every learner</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative">
          <h3 className="text-3xl font-bold text-center mb-8" style={{ color: '#1E3F8A' }}>Our Programs</h3>

          <div className="relative overflow-hidden rounded-3xl">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {programs.map((program, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div
                    className="relative bg-white/60 border border-white/40 shadow-2xl rounded-3xl p-12 transition-transform duration-300 hover:scale-105 backdrop-blur-xl overflow-hidden group"
                    style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)' }}
                  >
                    <div className={`absolute inset-0 z-0 bg-gradient-to-br ${program.gradient} opacity-30 rounded-3xl pointer-events-none`} />
                    <div className="relative z-10">
                      <h4 className="text-4xl font-extrabold mb-6 text-gray-900">{program.title}</h4>
                      <p className="text-xl mb-8 opacity-90 text-gray-700">{program.description}</p>
                      <div className="grid md:grid-cols-2 gap-5">
                        {program.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-4 bg-white/70 rounded-2xl p-5 border border-white/40 shadow">
                            <div className="flex-shrink-0 text-3xl md:text-4xl">{feature.icon}</div>
                            <span className="font-semibold text-lg md:text-xl text-gray-800">{feature.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-3">
            {programs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-purple-600 w-8' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
