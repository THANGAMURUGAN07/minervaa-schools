import Navigation from './components/Navigation';
import LoadingAnimation from './components/LoadingAnimation';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import AcademicsSection from './components/AcademicsSection';
import FacilitiesSection from './components/FacilitiesSection';
import GallerySection from './components/GallerySection';
import CareersSection from './components/CareersSection';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import AdmissionPopup from './components/AdmissionPopup';

function App() {
  return (
    <>
      <LoadingAnimation />
      <AdmissionPopup />
      <div className="min-h-screen bg-white">
        <Navigation />
        <HomeSection />
        <AboutSection />
        <AcademicsSection />
        <FacilitiesSection />
        <GallerySection />
        <CareersSection />
        <ContactSection />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
}

export default App;

