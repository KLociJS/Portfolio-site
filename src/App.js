import './App.css'
import Landing from './Components/Landing/Landing';

import NavBar from './Components/NavBar/NavBar'
import TopSeparator from './Components/Separator/TopSeparator';
import BottomSeparator from './Components/Separator/BottomSeparator';
import { About, Projects, Skills, Contact } from './Components';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Landing />
        <TopSeparator />
        <About />
        <BottomSeparator />
        <Skills />
        <TopSeparator />
        <Projects />
        <BottomSeparator />
        <Contact />
      </main>
      <footer>

      </footer>
    </>

  );
}

export default App;
