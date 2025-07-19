import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ClinicSection from './components/ClinicSection';
import TeamSection from './components/TeamSection';
import InsightsSection from './components/InsightsSection';
import FAQSection from './components/FAQSection';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import { useLenis } from './hooks/useLenis';

function App() {
  // Initialize Lenis smooth scrolling
  useLenis();

  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ClinicSection />
        <TeamSection />
        <InsightsSection />
        <FAQSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;