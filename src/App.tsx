import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { LanguageProvider } from './LanguageContext';
import WhatsAppBtn from './components/WhatsAppBtn/WhatsAppBtn';
import Home from './pages/Home/Home';
const App = () => {
  return (
    <div>
     <LanguageProvider>

      <Home/>
      <WhatsAppBtn/>
     </LanguageProvider>
    </div>
  )
}

export default App