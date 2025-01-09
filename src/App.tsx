import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { LanguageProvider } from './LanguageContext';
import WhatsAppBtn from './components/WhatsAppBtn/WhatsAppBtn';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <div>
     <LanguageProvider>

      <Home/>
      <WhatsAppBtn/>
      <Footer/>
     </LanguageProvider>
    </div>
  )
}

export default App