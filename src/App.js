import "./App.css";
import Landing from "./Components/Landing/Landing";

import { About, Contact, Projects, Skills } from "./Components";
import NavBar from "./Components/NavBar/NavBar";
import BottomSeparator from "./Components/Separator/BottomSeparator";
import TopSeparator from "./Components/Separator/TopSeparator";
import useIntersectionObserver from "./Hooks/useIntersectionObserver";
import { ObserverContextProvider } from "./Hooks/useObserverContext";

function App() {
  const [visibleElement, observe, unobserve] = useIntersectionObserver();

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <ObserverContextProvider value={{ visibleElement, observe, unobserve }}>
          <Landing />
          <TopSeparator />
          <About />
          <BottomSeparator />
          <Skills />
          <TopSeparator />
          <Projects />
          <BottomSeparator />
          <Contact />
          <TopSeparator />
        </ObserverContextProvider>
      </main>
    </>
  );
}

export default App;
