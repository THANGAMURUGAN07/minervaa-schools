import ParticlesBackground from './ParticlesBackground';
import { useState, useEffect } from 'react';
import { Monitor, TestTube, Dumbbell, Bus, BookOpen, Music, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Facility {
  icon: JSX.Element;
  title: string;
  color: string;
  image: string;
  overview: string;
  technology: string;
  experience: string;
  access: string;
  viewAllImage?: string;
}

const facilities: Facility[] = [
  {
    icon: <Monitor className="w-12 h-12" />,
    title: 'Smart Classrooms',
    color: 'from-blue-500 to-cyan-500',
    image: '/smart%20classroom2.JPG',
    overview: 'Our smart classrooms are equipped with the latest interactive technology to create an engaging and immersive learning experience. Digital boards, projectors, and multimedia resources make every lesson come alive.',
    technology: 'Interactive whiteboards, HD projectors, high-speed internet connectivity, and tablet integration for collaborative learning.',
    experience: 'Students enjoy dynamic, visual learning experiences that cater to different learning styles. Teachers can access vast educational resources and create interactive lessons that keep students engaged.',
    access: 'All classrooms from Grade 1 onwards are equipped with smart technology. Regular maintenance ensures optimal performance throughout the academic year.',
  },
  {
    icon: <TestTube className="w-12 h-12" />,
    title: 'Science & Computer Lab',
    color: 'from-green-500 to-emerald-500',
    image: '/lab.JPG', // For carousel
    overview: 'State-of-the-art laboratories provide hands-on learning opportunities in science and technology. Our labs are designed to spark curiosity and encourage experimentation.',
    technology: 'Modern computers with educational software, high-speed internet, science equipment for physics, chemistry, and biology experiments, safety equipment, and digital microscopes.',
    experience: 'Students conduct real experiments, learn programming, and develop critical thinking skills through practical application of theoretical concepts.',
    access: 'Available to all students during scheduled lab periods and after school hours for project work under teacher supervision.',
    viewAllImage: '/lab2.jpg', // For View All overlay
  },
  {
    icon: <Dumbbell className="w-12 h-12" />,
    title: 'Sports Ground',
    color: 'from-orange-500 to-red-500',
    image: '/sports%20ground2.JPG',
    overview: 'Our expansive sports facilities promote physical fitness and team spirit. Multiple courts and fields support a variety of sports and outdoor activities.',
    technology: 'Professional-grade sports equipment, marked playing fields for cricket, football, basketball courts, and athletic tracks.',
    experience: 'Regular physical education classes, inter-house competitions, and coaching in various sports help students develop athletic skills, teamwork, and sportsmanship.',
    access: 'Open daily during school hours with dedicated PE periods. After-school sports programs and weekend practice sessions available for various teams.',
  },
  {
    icon: <Bus className="w-12 h-12" />,
    title: 'Transportation',
    color: 'from-purple-500 to-pink-500',
    image: '/transportation2.JPG',
    overview: 'Safe and reliable transportation services ensure students commute comfortably. Our fleet of buses covers extensive routes across the city.',
    technology: 'GPS-tracked buses, CCTV cameras, speed governors, first-aid kits, and real-time parent notification system.',
    experience: 'Trained drivers and attendants ensure student safety. Parents can track bus location in real-time through our mobile app.',
    access: 'Multiple routes covering major areas of the city. Door-to-door pickup and drop services available. Emergency contact system in place.',
  },
  {
    icon: <BookOpen className="w-12 h-12" />,
    title: 'Library',
    color: 'from-yellow-500 to-orange-500',
    image: '/library2.JPG',
    overview: 'Our well-stocked library is a treasure trove of knowledge with thousands of books, magazines, and digital resources fostering a love for reading.',
    technology: 'Extensive collection of books across genres, e-library access, reading nooks, computer terminals for research, and digital catalog system.',
    experience: 'Quiet study areas, storytelling sessions for younger students, book clubs, and reading challenges encourage students to explore literature.',
    access: 'Open throughout school hours. Students can borrow books for home reading. Library periods scheduled for each class weekly.',
  },
  {
    icon: <Music className="w-12 h-12" />,
    title: 'Music & Arts',
    color: 'from-pink-500 to-rose-500',
    image: '/music%20and%20arts2.JPG',
    overview: 'Dedicated spaces for creative expression through music, dance, and visual arts. Our arts program nurtures creativity and artistic talents.',
    technology: 'Musical instruments including keyboards, drums, guitars, art supplies, dance studio with mirrors, and audio system.',
    experience: 'Regular classes in music, dance, and visual arts. Annual cultural programs showcase student talents. Individual and group performances build confidence.',
    access: 'Scheduled classes for all grades. Optional additional training available. Practice rooms can be booked for individual practice.',
  },
];

const FacilitiesSection = () => {
  const [isViewAllOpen, setIsViewAllOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (isViewAllOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isViewAllOpen]);

  const goToSlide = (idx: number) => setCurrentSlide(idx);
  const nextSlide = () => setCurrentSlide((currentSlide + 1) % facilities.length);
  const prevSlide = () => setCurrentSlide((currentSlide - 1 + facilities.length) % facilities.length);

  const leftIdx = currentSlide === 0 ? facilities.length - 1 : currentSlide - 1;
  const rightIdx = currentSlide === facilities.length - 1 ? 0 : currentSlide + 1;
  const visibleCards = [leftIdx, currentSlide, rightIdx];

  return (
    <section id="facilities" className="relative overflow-hidden py-20 bg-gradient-to-b from-purple-50 to-pink-50">
      <ParticlesBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold section-title-shine mb-6">World Class Facilities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating the perfect environment for learning, growth and fun.
          </p>
        </div>

        <div className="relative max-w-full mx-auto py-12">
          <div className="relative flex items-center justify-center bg-pink-50 rounded-3xl shadow-xl py-12 overflow-hidden">
            {/* Left arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-0 z-20 bg-white border border-blue-600 text-blue-600 rounded-full p-3 shadow-lg hover:bg-blue-50 transition-colors"
              aria-label="Previous Facility"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            {/* Slider */}
            <div className="w-full px-8">
              <div className="flex items-center w-full gap-4">
                {visibleCards.map((facilityIndex, position) => {
                  const facility = facilities[facilityIndex];
                  const isCenter = position === 1;
                  return (
                    <div
                      key={`${facility.title}-${position}`}
                      className={`relative h-[500px] rounded-2xl bg-cover bg-center shadow-xl ${
                        isCenter ? 'w-2/5 scale-100 opacity-100' : 'w-1/4 scale-95 opacity-85'
                      }`}
                      style={{
                        backgroundImage: `url(${facility.image})`,
                        transition: 'transform 1.15s cubic-bezier(0.22,1,0.36,1), opacity 1.15s cubic-bezier(0.22,1,0.36,1), width 1.15s cubic-bezier(0.22,1,0.36,1)',
                      }}
                    >
                      {!isCenter && <div className="absolute inset-0 rounded-2xl bg-black/65 transition-all duration-[1150ms] ease-out" />}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-all duration-[1150ms] ease-out" />
                      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-8 px-4 text-center">
                        <div className={`bg-gradient-to-br ${facility.color} text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-[1150ms] ease-out`}>
                          {facility.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg transition-all duration-[1150ms] ease-out">{facility.title}</h3>
                        <p className="text-white/90 text-lg transition-all duration-[1150ms] ease-out">Explore our cutting-edge labs.</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Right arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-0 z-20 bg-white border border-pink-500 text-pink-500 rounded-full p-3 shadow-lg hover:bg-pink-50 transition-colors"
              aria-label="Next Facility"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {facilities.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full ${currentSlide === idx ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => setIsViewAllOpen(true)}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            View All
          </button>
        </div>
      </div>

      {isViewAllOpen && (
        <div
          className="fixed inset-0 z-50 bg-white overflow-y-auto overscroll-contain"
        >
          <div className="max-w-7xl mx-auto px-4 py-8 sm:py-10">
            <div className="flex justify-between items-center mb-8 sticky top-0 bg-white/95 backdrop-blur-sm py-4 z-10">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-800">All Facilities</h3>
              <button
                onClick={() => setIsViewAllOpen(false)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5" />
                Exit
              </button>
            </div>

            <div className="space-y-16 pb-8">
              {facilities.map((facility, index) => (
                <div
                  key={`view-all-${index}`}
                  className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 rounded-2xl shadow-lg bg-white p-8"
                >
                  {/* Alternate image/content sides */}
                  {index % 2 === 0 ? (
                    <>
                      <div className="flex-1 flex items-center justify-center">
                        <img src={facility.viewAllImage || facility.image} alt={facility.title} className="rounded-2xl w-full max-w-xs h-72 object-cover shadow-lg" />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <div className={`bg-gradient-to-br ${facility.color} text-white w-20 h-20 rounded-2xl flex items-center justify-center mb-6`}>{facility.icon}</div>
                        <h4 className="text-3xl font-bold mb-4 text-gray-800">{facility.title}</h4>
                        <div className="space-y-3">
                          <div><span className="font-semibold text-gray-700">Overview:</span> <span className="text-gray-600">{facility.overview}</span></div>
                          <div><span className="font-semibold text-gray-700">Technology & Equipment:</span> <span className="text-gray-600">{facility.technology}</span></div>
                          <div><span className="font-semibold text-gray-700">Learning Experience:</span> <span className="text-gray-600">{facility.experience}</span></div>
                          <div><span className="font-semibold text-gray-700">Access & Usage:</span> <span className="text-gray-600">{facility.access}</span></div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex-1 flex flex-col justify-center">
                        <div className={`bg-gradient-to-br ${facility.color} text-white w-20 h-20 rounded-2xl flex items-center justify-center mb-6`}>{facility.icon}</div>
                        <h4 className="text-3xl font-bold mb-4 text-gray-800">{facility.title}</h4>
                        <div className="space-y-3">
                          <div><span className="font-semibold text-gray-700">Overview:</span> <span className="text-gray-600">{facility.overview}</span></div>
                          <div><span className="font-semibold text-gray-700">Technology & Equipment:</span> <span className="text-gray-600">{facility.technology}</span></div>
                          <div><span className="font-semibold text-gray-700">Learning Experience:</span> <span className="text-gray-600">{facility.experience}</span></div>
                          <div><span className="font-semibold text-gray-700">Access & Usage:</span> <span className="text-gray-600">{facility.access}</span></div>
                        </div>
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                        <img src={facility.viewAllImage || facility.image} alt={facility.title} className="rounded-2xl w-full max-w-xs h-72 object-cover shadow-lg" />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FacilitiesSection;
