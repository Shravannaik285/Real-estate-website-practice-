import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // 1. Added these imports
import { About } from "@/sections/About";
import { Navigation } from "@/layout/Navigation";
import { Home } from "@/sections/Home";
import { Contact } from "@/sections/Contact";
import { Properties } from "@/sections/Properties";
import { Footer } from "@/layout/Footer";

function App(){
  return(
    <Router>
      <div>
        <Navigation />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/properties" element={<Properties />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  )
}

export default App;
