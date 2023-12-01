import "./App.css";
import Landing from "./Components/Landing/Landing";

import { About, Contact, Projects, Skills } from "./Components";
import NavBar from "./Components/NavBar/NavBar";
import BottomSeparator from "./Components/Separator/BottomSeparator";
import TopSeparator from "./Components/Separator/TopSeparator";
import useIntersectionObserver from "./Hooks/useIntersectionObserver";
import { ObserverContextProvider } from "./Hooks/useObserverContext";

function App() {
  const [visibleElements, observe, unobserve] = useIntersectionObserver();

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <ObserverContextProvider
          value={{ visibleElements, observe, unobserve }}
        >
          <Landing />
          <TopSeparator />
          <About />
          <BottomSeparator />
          <Skills />
          <TopSeparator />
          <Projects />
          <Contact />
        </ObserverContextProvider>
      </main>
    </>
  );
}

export default App;
