import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatIs from "./components/WhatIs";
import WhatYouLearn from "./components/WhatYouLearn";
import PracticalTraining from "./components/PracticalTraining";
import LearningScenarios from "./components/LearningScenarios";
import DiplomaInfo from "./components/DiplomaInfo";
import Faq from "./components/Faq";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-50 font-body">
      <Navbar />
      <main>
        <Hero />
        <WhatIs />
        <WhatYouLearn />
        <PracticalTraining />
        <LearningScenarios />
        <DiplomaInfo />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}