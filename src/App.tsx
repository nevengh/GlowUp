import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LanguageProvider, useLanguage } from './LanguageContext';
import WhatsAppBtn from './components/WhatsAppBtn/WhatsAppBtn';
import Footer from './components/Footer/Footer';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import WhyChooseUS from './pages/WhyChooseUS/WhyChooseUS';
import Hero from './components/Hero/Hero';
import FAQ from './pages/FAQ/FAQ';
import ContactUs from './pages/ContactUs/ContactUs';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect, useRef, useState } from 'react';
import SeoComponent from './components/SeoComponnent/SeoComponnent';
import en from './locales/en';
import ar from './locales/ar';

const App = () => {
  const AppContent = () => {
    
    const [currentSection, setCurrentSection] = useState<'home' | 'service' | 'whyChooseUs' | 'faq' | 'contact'>('home');
    const { language } = useLanguage();
    const translations = language === "en" ? en : ar;
    useEffect(() => {
      console.log('Current Section:', currentSection);
    }, [currentSection]);
    const homeRef = useRef<HTMLDivElement | null>(null);
    const servicesRef = useRef<HTMLDivElement | null>(null);
    const whyChooseUsRef = useRef<HTMLDivElement | null>(null);
    const faqRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);

    const seoData = {
      home: {
        title: translations.Hero_Title,
        description: translations.Hero_Desc,
        keywords: "Glow up clinic ,افضل عيادة اسنان في دبي...",
        url: "https://www.glowupclinic.ae/landingpage/#home",
      },
      service: {
        title: translations.Service_Title,
        description: translations.Service_Desc,
        keywords: "hydrafacial dubai offers,acne treatment dubai...",
        url: "https://www.glowupclinic.ae/landingpage/#service",
      },
      whyChooseUs: {
        title: translations.WhyChooseUs_Title,
        description: translations.WhyChooseUs_Desc,
        keywords: "الرعاية الطبية، عيادة متقدمة...",
        url: "https://www.glowupclinic.ae/landingpage/#whyChooseUs",
      },
      faq: {
        title: translations.FAQ_Title,
        description: translations.FAQ_Desc,
        keywords: "how many sessions for tattoo removal...",
        url: "http://yourdomain.com/#Media",
      },
      contact: {
        title: translations.contact_Title,
        description: translations.contact_Desc,
        keywords: "Glow up clinic...",
        url: "http://yourdomain.com/#OurClients",
      },
    };

    useEffect(() => {
     

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          console.log('Observed Entry:', entry.target.id, 'Is Intersecting:', entry.isIntersecting);
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id as 'home' | 'service' | 'whyChooseUs' | 'faq' | 'contact');
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback);

      if (homeRef.current) observer.observe(homeRef.current);
      if (servicesRef.current) observer.observe(servicesRef.current);
      if (whyChooseUsRef.current) observer.observe(whyChooseUsRef.current);
      if (faqRef.current) observer.observe(faqRef.current);
      if (contactRef.current) observer.observe(contactRef.current);

      return () => {
        observer.disconnect();
      };
    }, []);
    useEffect(() => {
      console.log('Sections Registered for Observation:');
      console.log('Home:', homeRef.current);
      console.log('Service:', servicesRef.current);
      console.log('WhyChooseUs:', whyChooseUsRef.current);
      console.log('FAQ:', faqRef.current);
      console.log('Contact:', contactRef.current);
    }, []);
    
    const seo = seoData[currentSection] || {
      title: "Default Title",
      description: "Default Description",
      keywords: "default, keywords",
      url: "https://www.default.com",
    };

    return (
      <>
        <SeoComponent
          title={seo.title}
          description={seo.description}
          type="website"
          keyword={seo.keywords}
          url={seo.url}
        />
        <div id="home" ref={homeRef}>
          <Hero />
        </div>
        <div id="service" ref={servicesRef}>
          <ServicesPage />
        </div>
        <div id="whyChooseUs" ref={whyChooseUsRef}>
          <WhyChooseUS />
        </div>
        <div id="faq" ref={faqRef}>
          <FAQ />
        </div>
        <div id="contact" ref={contactRef}>
          <ContactUs />
        </div>
        <WhatsAppBtn />
        <Footer />
      </>
    );
  };

  return (
    <LanguageProvider>
      <HelmetProvider>
        <AppContent />
      </HelmetProvider>
    </LanguageProvider>
  );
};

export default App;
