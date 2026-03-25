import ParticlesBackground from './ParticlesBackground';
import { useState } from 'react';
import { Image, Video, Play } from 'lucide-react';
import { getPublicAssetUrl } from '../utils/publicAsset';

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState<'images' | 'videos'>('images');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const defaultDriveLink = 'https://drive.google.com/drive/folders/1B3nLfQ-FCS7lAXOwag21_-wgHHcN3iCd?usp=sharing';

  const events = [
    {
      title: 'Independence Day',
      thumbnail: '/independence%20day.JPG',
      driveLink: defaultDriveLink,
    },
    {
      title: 'Rainbow Day',
      thumbnail: '/rainbow%20day.jpeg',
      driveLink: 'https://drive.google.com/drive/folders/10lahVHxNPCb0u6Im68Acli9PHxfarJLN?usp=sharing',
    },
    {
      title: 'Bharathiyar Celebration Day',
      thumbnail: '/bharathiyar%20celebration%20day.JPG',
      driveLink: 'https://drive.google.com/drive/folders/1URUjY_Ap-gg9ZjQT56oouMzyfefPpilg?usp=sharing',
    },
    {
      title: 'Vijayadhasamy',
      thumbnail: '/vijayadhasamy.JPG',
      driveLink: 'https://drive.google.com/drive/folders/1sglvKputKPV5xNuoNOFk6l6DAQe_FaBe?usp=sharing',
    },
    {
      title: 'Food Festival',
      thumbnail: '/food%20festival.jpeg',
      driveLink: 'https://drive.google.com/drive/folders/1x0_OCCvbVp-JSYvwH4zcbu8W7EtZXdZQ?usp=sharing',
    },
    {
      title: 'Award Day',
      thumbnail: '/award%20day.jpeg',
      driveLink: 'https://drive.google.com/drive/folders/17-sIaYLUh_UPWGj5nX3Ex6TgT5GyFqt2?usp=sharing',
    },
    {
      title: 'Pongal Celebration',
      thumbnail: '/pongal%20celebration.jpeg',
      driveLink: 'https://drive.google.com/drive/folders/15ysCMHTKh80jj0oE26I6SU5Rjv4fE2dp?usp=sharing',
    },
    {
      title: 'Annual Day',
      thumbnail: '/annual%20day.JPG',
      driveLink: 'https://drive.google.com/drive/folders/1fyXQJ27XvxKn8nH51TWlD-yGx1Zvco83?usp=sharing',
    },
  ];

  const videos = [
    {
      title: 'Gardening',
      videoId: 'o55qCxI3riI',
    },
    {
      title: 'Diwali Celebration',
      videoId: 'nv2Cb1IS9bA',
    },
    {
      title: 'Annual Day Celebration',
      videoId: 'TjIeZ4ZB2w8',
    },
    {
      title: 'School Overview',
      videoId: 'eATH9UUNlZM',
    },
    {
      title: 'Field Trip',
      videoId: 'sQj-mgkdhAk',
    },
    {
      title: 'Happy Independence Day',
      videoId: 'FrIs130k9oQ',
    },
  ];

  return (
    <section id="gallery" className="relative overflow-hidden py-20">
      <ParticlesBackground />
      <div className="relative z-10 max-w-[95rem] mx-auto px-2 sm:px-3 lg:px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6" style={{ color: '#1E3F8A' }}>Our Gallery</h2>
          <p className="text-xl text-gray-600">Capturing moments of joy, learning, and growth</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('images')}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'images'
                  ? 'bg-indigo-600 text-white shadow-lg hover:bg-indigo-700'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Image className="w-5 h-5" />
              <span>Images</span>
            </button>
          </div>
          <div className="bg-white rounded-full p-2 shadow-lg ml-4">
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'videos'
                  ? 'bg-indigo-600 text-white shadow-lg hover:bg-indigo-700'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Video className="w-5 h-5" />
              <span>Videos</span>
            </button>
          </div>
        </div>

        {activeTab === 'images' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <a
                key={index}
                href={event.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={getPublicAssetUrl(event.thumbnail)}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg">{event.title}</h3>
                </div>
              </a>
            ))}
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                onClick={() => setSelectedVideo(video.videoId)}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-red-600 ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 text-center text-lg">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl"
            >
              Close ✕
            </button>
            <div className="relative pt-[56.25%] bg-black rounded-xl overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
