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
import HimHer from './pages/HimHer/HimHer';
import ClinicSlider from './components/ClinicSlider/ClinicSlider';


const App = () => {
  const AppContent = () => {
    
    const [currentSection, setCurrentSection] = useState<'home' | 'service' | 'whyChooseUs' | 'heim' | 'faq' | 'contact'>('home');
    const { language } = useLanguage();
    const translations = language === "en" ? en : ar;
    useEffect(() => {
      console.log('Current Section:', currentSection);
    }, [currentSection]);
    const homeRef = useRef<HTMLDivElement | null>(null);
    const servicesRef = useRef<HTMLDivElement | null>(null);
    const whyChooseUsRef = useRef<HTMLDivElement | null>(null);
    const heimRef = useRef<HTMLDivElement | null>(null);
    const faqRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);

    const seoData = {
      home: {
        title: translations.Hero_Title,
        description: translations.Hero_Desc,
        keywords: "Glow up clinic ,افضل عيادة اسنان في دبي, عيادة أسنان في دبي 24 ساعة, عيادة اسنان في دبي, عيادة جلو أب ",
        url: "https://www.glowupclinic.ae/landingpage/#home",
      },
      service: {
        title: translations.Service_Title,
        description: translations.Service_Desc,
         keywords: "hydrafacial dubai offers,acne treatment dubai,tattoo removal before and after,aser tattoo removal in dubai,best dermatology clinic in dubai,best laser hair removal dubai,botox in dubai,hair botox in dubai,best botox in dubai,fillers in dubai,dermal fillers in dubai,sculptra before and after,radiesse vs sculptra,hydrafacial dubai near me,top dental clinic in dubai,cheapest dental clinic in dubai,affordable dental clinic in dubai,the best dentist in dubai,best dentist in dubai reviews,best dentist in dubai recommendation,best dentist in dubai for cleaning,best dentist in dubai for veneers,hollywood smile dubai,hollywood smile dubai price,ابتسامة هوليود في دبي,laser hair removal dubai,laser hair removal dubai price list,full body laser hair removal dubai,laser hair removal dubai offers,laser hair removal dubai near me,beard laser hair removal dubai|,laser hair removal dubai price,bikini laser hair removal dubai,ازالة التاتو بالليزر",
        url: "https://www.glowupclinic.ae/landingpage/#service",
      },
      whyChooseUs: {
        title: translations.WhyChooseUs_Title,
        description: translations.WhyChooseUs_Desc,
        keywords: "الرعاية الطبية، عيادة متقدمة، التقنيات الحديثة,medical care, advanced clinic, modern technology",
        url: "https://www.glowupclinic.ae/landingpage/#whyChooseUs",
      },
      faq: {
        title: translations.FAQ_Title,
        description: translations.FAQ_Desc,
        keywords: "how many sessions for tattoo removal,can i shower after laser hair removal,ابتسامة هوليود3d كم سعرها,كم سعر عدسات الاسنان",
        url: "http://yourdomain.com/#Media",
      },
      contact: {
        title: translations.contact_Title,
        description: translations.contact_Desc,
        keywords: "Glow up clinic,عيادة جلو أب,افضل عيادة جلدية في دبي,حجز موعد اسنان",
        url: "http://yourdomain.com/#OurClients",
      },
      heim:{
        title:translations.Hero_Title,
        description:translations.Hero_Desc,
        keywords: "Glow up clinic ,افضل عيادة اسنان في دبي, عيادة أسنان في دبي 24 ساعة, عيادة اسنان في دبي, عيادة جلو أب ",
        url: "https://www.glowupclinic.ae/landingpage/#heim",
      }
    };

    useEffect(() => {
     

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          console.log('Observed Entry:', entry.target.id, 'Is Intersecting:', entry.isIntersecting);
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id as 'home' | 'service' | 'whyChooseUs' |'heim' | 'faq' | 'contact');
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
        <ClinicSlider/>
        <div id="service" ref={servicesRef}>
          <ServicesPage />
        </div>
        <div id="whyChooseUs" ref={whyChooseUsRef}>
          <WhyChooseUS />
        </div>
        <div id="heim" ref={heimRef}>
          <HimHer/>
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
