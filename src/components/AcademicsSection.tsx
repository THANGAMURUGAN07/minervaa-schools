import ParticlesBackground from './ParticlesBackground';
import { useState, useEffect } from 'react';
import { BookOpen, Target, Trophy, Palette, Music, Dumbbell, Rocket, ChevronLeft, ChevronRight } from 'lucide-react';

const AcademicsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const programs = [
    {
      title: 'Pre School – KGs',
      description: 'Play based learning environment developing social and motor skills.',
      gradient: 'from-yellow-400 to-orange-500',
      features: [
        { icon: <Palette className="w-6 h-6" />, text: 'Play based learning' },
        { icon: <Palette className="w-6 h-6" />, text: 'Creative arts' },
        { icon: <Music className="w-6 h-6" />, text: 'Music and movement' },
        { icon: <Target className="w-6 h-6" />, text: 'Social development' },
      ],
    },
    {
      title: 'Primary School – Grades 1-5',
      description: 'Strong academic foundations with curiosity driven learning.',
      gradient: 'from-green-400 to-teal-500',
      features: [
        { icon: <BookOpen className="w-6 h-6" />, text: 'Core subjects' },
        { icon: <Rocket className="w-6 h-6" />, text: 'STEM projects' },
        { icon: <BookOpen className="w-6 h-6" />, text: 'Reading programs' },
        { icon: <Dumbbell className="w-6 h-6" />, text: 'Sports activities' },
      ],
    },
    {
      title: 'Middle & High School – Grades 6-8',
      description: 'Advanced curriculum preparing students for higher education.',
      gradient: 'from-blue-400 to-purple-500',
      features: [
        { icon: <BookOpen className="w-6 h-6" />, text: 'Advanced subjects' },
        { icon: <Target className="w-6 h-6" />, text: 'Career counseling' },
        { icon: <Trophy className="w-6 h-6" />, text: 'Competitive exam preparation' },
        { icon: <Target className="w-6 h-6" />, text: 'Leadership programs' },
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % programs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [programs.length]);

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
                  <div className={`bg-gradient-to-br ${program.gradient} rounded-3xl p-12 text-white shadow-2xl`}>
                    <h4 className="text-4xl font-bold mb-4">{program.title}</h4>
                    <p className="text-xl mb-8 opacity-90">{program.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-xl p-4">
                          <div className="flex-shrink-0">{feature.icon}</div>
                          <span className="font-medium">{feature.text}</span>
                        </div>
                      ))}
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
