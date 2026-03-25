import ParticlesBackground from './ParticlesBackground';
import { useState } from 'react';
import { BookOpen, Target, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';

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

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-4">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Curriculum</h3>
            <p className="text-gray-600">Follows the CBSE framework with English as the primary medium.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white mb-4">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Levels of Schooling</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Kindergarten</li>
              <li>• Primary School</li>
              <li>• Secondary School</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white mb-4">
              <Trophy className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Key Focus Areas</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Discipline</li>
              <li>• Academic Excellence</li>
              <li>• English Communication</li>
              <li>• Sports</li>
            </ul>
          </div>
        </div>

        <div className="relative">
          <h3 className="text-3xl font-bold text-center mb-8" style={{ color: '#1E3F8A' }}>Our Programs</h3>

          <div className="relative overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {programs.map((program, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div
                    className={`relative bg-white/60 dark:bg-white/30 border border-white/40 shadow-2xl rounded-3xl p-12 transition-transform duration-300 hover:scale-105 hover:shadow-3xl backdrop-blur-xl overflow-hidden group`}
                    style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)' }}
                  >
                    <div className={`absolute inset-0 z-0 bg-gradient-to-br ${program.gradient} opacity-30 rounded-3xl pointer-events-none`} />
                    <div className="relative z-10">
                      <h4 className="text-4xl font-extrabold mb-6 text-gray-900 drop-shadow-lg dark:text-white">{program.title}</h4>
                      {program.description && (
                        <p className="text-xl mb-8 opacity-90 text-gray-700 dark:text-gray-200">{program.description}</p>
                      )}
                      <div className="grid md:grid-cols-2 gap-5">
                        {program.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-4 bg-white/60 dark:bg-white/30 backdrop-blur-md rounded-2xl p-5 border border-white/40 shadow group-hover:bg-white/80 transition-all duration-300"
                          >
                            <div className="flex-shrink-0 text-3xl md:text-4xl">{feature.icon}</div>
                            <span className="font-semibold text-lg md:text-xl text-gray-800 dark:text-gray-900">{feature.text}</span>
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
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-purple-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
