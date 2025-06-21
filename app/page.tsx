import Header from './components/Header';
import {Hero, Features, Spec, Gallery, CtaSection} from './components/sections';

export default function Home() {
  return (
    <div className="min-h-dvh">
      <Header />

      <main>
        <Hero />

        <Features />

        <Spec />

        <Gallery />

        <CtaSection />

      </main>
    
    </div>
  );
}
