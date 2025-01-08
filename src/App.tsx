import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero/Hero';
import { LanguageProvider } from './LanguageContext';
const App = () => {
  return (
    <div>
     <LanguageProvider>

      <Hero/>
     </LanguageProvider>
    </div>
  )
}

export default App