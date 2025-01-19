import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { LanguageProvider } from './LanguageContext';
import WhatsAppBtn from './components/WhatsAppBtn/WhatsAppBtn';
import Footer from './components/Footer/Footer';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import WhyChooseUS from './pages/WhyChooseUS/WhyChooseUS';
import HimHer from './pages/HimHer/HimHer';
import Hero from './components/Hero/Hero';
import FAQ from './pages/FAQ/FAQ';
import ContactUs from './pages/ContactUs/ContactUs';
const App = () => {
  return (
    <div>
     <LanguageProvider>
      <Hero />
      <ServicesPage/>
      <WhyChooseUS/>
      <HimHer/>
      <FAQ/>
      <ContactUs/>
      <WhatsAppBtn/>
      <Footer/>
     </LanguageProvider>
    </div>
  )
}

export default App