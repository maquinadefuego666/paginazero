import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Top from './components/common/top'
import Header from './components/common/header'
import Footer from './components/common/footer'

import Index from './components/pages/index'
import Contact from './components/pages/contact'
import About from './components/pages/about'
import Confirm from './components/pages/confirm'

function App() {
  return (
      <>
        <Top />
        <Header />
        <Routes>
            <Route path="/">
                  <Route index element={<Index />} />
                  <Route path="AboutUs" element={<About />} />
                  <Route path="Contact" element={<Contact />} />
                  <Route path="Contact/:mail" element={<Contact />} />
                  <Route path="Confirm" element={<Confirm />} />
            </Route>
        </Routes>

        <Footer />
      </>
  );
}

export default App;
