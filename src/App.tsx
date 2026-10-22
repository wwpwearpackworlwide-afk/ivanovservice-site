import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { OneOff } from './components/OneOff';
import { Subscriptions } from './components/Subscriptions';
import { Levels } from './components/Levels';
import { Process } from './components/Process';
import { About } from './components/About';
import { Contacts } from './components/Contacts';
import { useReveal } from './lib/useReveal';

export default function App() {
  useReveal();
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Portfolio />
        <Services />
        <OneOff />
        <Subscriptions />
        <Levels />
        <Process />
        <About />
        <Contacts />
      </main>
    </>
  );
}
