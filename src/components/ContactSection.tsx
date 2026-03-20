import ParticlesBackground from './ParticlesBackground';
import { MapPin, Phone, Mail } from 'lucide-react';
import { SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si';

const ContactSection = () => {
  return (
    <section id="contact" className="relative overflow-hidden py-20 bg-gradient-to-b from-yellow-50 to-green-50">
      <ParticlesBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold section-title-shine mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600">Visit us, call us, or connect with us online for admissions and school information.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Words That Guide Our Learning</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Education at Minervaa is not only about marks; it is about character, curiosity, and confidence for life.
            </p>

            <div className="space-y-5">
              <blockquote className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-lg font-semibold text-gray-800">"Education is the most powerful weapon which you can use to change the world."</p>
                <footer className="mt-2 text-sm text-blue-700">- Nelson Mandela</footer>
              </blockquote>

              <blockquote className="rounded-2xl border border-green-100 bg-green-50 p-5">
                <p className="text-lg font-semibold text-gray-800">"The beautiful thing about learning is that no one can take it away from you."</p>
                <footer className="mt-2 text-sm text-green-700">- B.B. King</footer>
              </blockquote>

              <blockquote className="rounded-2xl border border-orange-100 bg-orange-50 p-5">
                <p className="text-lg font-semibold text-gray-800">"A child's mind is not a container to be filled, but a lamp to be lit."</p>
                <footer className="mt-2 text-sm text-orange-700">- Plutarch</footer>
              </blockquote>

              <blockquote className="rounded-2xl border border-purple-100 bg-purple-50 p-5">
                <p className="text-lg font-semibold text-gray-800">"Education is not preparation for life; education is life itself."</p>
                <footer className="mt-2 text-sm text-purple-700">- John Dewey</footer>
              </blockquote>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">Jothi Nagar, Pollachi-642001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 99949 59484</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">mvmofficepollachi@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t-2 border-gray-100">
                <h4 className="font-bold text-gray-800 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/minervaaschool"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:bg-blue-700 transform hover:scale-110 transition-all duration-300"
                  >
                    <SiFacebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/minervaa_vidhya_mandhir?igsh=ZzdqODNyajRiazhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                  >
                    <SiInstagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://youtube.com/@mvmschoolpollachi?si=HKpGdJQ9Lo2S9zN7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white hover:bg-red-700 transform hover:scale-110 transition-all duration-300"
                  >
                    <SiYoutube className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.1145329945607!2d77.01541767480299!3d10.64820958949289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba837645bed4889%3A0x97b7f04ee4177b85!2sMinerva%20School%2Cjothinagar%2Cpollachi!5e0!3m2!1sen!2sin!4v1770132946592!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
