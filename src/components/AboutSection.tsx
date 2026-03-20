import ParticlesBackground from './ParticlesBackground';
import { useEffect, useState, useRef } from 'react';
import { Award, Users, GraduationCap, Shield, Lightbulb, Heart, BookOpen, Trophy } from 'lucide-react';

const AboutSection = () => {
  const [counters, setCounters] = useState({ years: 0, students: 0, staff: 0, success: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let hasAnimated = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounters();
          hasAnimated = true;
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const targets = { years: 25, students: 250, staff: 20, success: 100 };

    let step = 0;
    setCounters({ years: 0, students: 0, staff: 0, success: 0 });
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounters({
        years: Math.floor(targets.years * progress),
        students: Math.floor(targets.students * progress),
        staff: Math.floor(targets.staff * progress),
        success: Math.floor(targets.success * progress),
      });

      if (step >= steps) {
        clearInterval(interval);
        setCounters(targets);
      }
    }, duration / steps);
  };

  const stats = [
    { value: counters.years, label: 'Years of Excellence', icon: <Award className="w-8 h-8" />, suffix: '+', color: 'from-blue-500 to-cyan-500' },
    { value: counters.students, label: 'Happy Students', icon: <Users className="w-8 h-8" />, suffix: '+', color: 'from-green-500 to-emerald-500' },
    { value: counters.staff, label: 'Dedicated Staff', icon: <GraduationCap className="w-8 h-8" />, suffix: '+', color: 'from-orange-500 to-red-500' },
    { value: counters.success, label: 'Success Rate', icon: <Trophy className="w-8 h-8" />, suffix: '%', color: 'from-purple-500 to-pink-500' },
  ];

  const features = [
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: 'Comprehensive Curriculum',
      description: 'CBSE curriculum enhanced with modern teaching methodologies, digital learning and skill development programs.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: 'Experienced Faculty',
      description: 'Highly qualified and passionate teachers committed to bringing out the best in every student.',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Safe Environment',
      description: 'CCTV surveillance, trained security and zero tolerance bullying policy.',
      color: 'from-red-400 to-red-600',
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: 'Holistic Development',
      description: 'Focus on sports, arts, life skills and character building.',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Modern Infrastructure',
      description: 'Well equipped classrooms, labs, library and sports facilities.',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'Caring Community',
      description: 'Warm environment where students, teachers and parents work together.',
      color: 'from-pink-400 to-pink-600',
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden py-20 bg-gradient-to-b from-white to-blue-50" ref={sectionRef}>
      <ParticlesBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold section-title-shine mb-6">Welcome to Minervaa School</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            A place where young minds blossom, dreams take flight and futures are shaped with care, dedication and excellence.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Minervaa Vidhya Mandhir, we believe that every child is unique and deserves an education that celebrates their individuality while nurturing their talents. Since our establishment, we have been committed to providing quality education that goes beyond textbooks, fostering critical thinking, creativity and strong moral values.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`bg-gradient-to-br ${stat.color} text-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-800 text-center mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm text-gray-600 text-center font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Minervaa School</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className={`bg-gradient-to-br ${feature.color} text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 text-center animate-fade-in-up">
          <div className="bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 rounded-3xl p-12 shadow-2xl max-w-3xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-4 md:text-4xl text-2xl font-bold text-white mb-4">Join Our Learning Community</h3>
            <p className="text-xl text-white/90 mb-8 md:text-xl text-base text-white/90 mb-8">Experience the Minervaa difference. Schedule a visit to see our facilities and meet our dedicated team.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg md:text-lg text-base hover:bg-yellow-400 hover:text-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Contact Us
              </button>
              <button
                onClick={() => {
                  window.dispatchEvent(new Event('openAdmission'));
                }}
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg md:text-lg text-base hover:bg-yellow-400 hover:text-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Admission
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
