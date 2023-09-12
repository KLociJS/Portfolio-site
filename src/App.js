import './App.css'
import Landing from './Components/Landing/Landing';

import NavBar from './Components/NavBar/NavBar'
import TopSeparator from './Components/Separator/TopSeparator';
import BottomSeparator from './Components/Separator/BottomSeparator';
import { About, Skills } from './Components';

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
        <section id='featured'></section>
        <section id='contact'></section>
      </main>
      <footer>

      </footer>
    </>

  );
}

export default App;
