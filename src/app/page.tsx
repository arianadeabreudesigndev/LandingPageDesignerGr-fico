import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Agenda from '@/components/sections/Agenda';
import Promo from '@/components/sections/Promo';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Agenda />
        <Promo />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}