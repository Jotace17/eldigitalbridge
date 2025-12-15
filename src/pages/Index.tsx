import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GrowthStatsSection from "@/components/GrowthStatsSection";
import WelcomeSection from "@/components/WelcomeSection";
import AboutSection from "@/components/AboutSection";
import KeyAreasSection from "@/components/KeyAreasSection";
import MethodologySection from "@/components/MethodologySection";
import ResourcesSection from "@/components/ResourcesSection";
import EventsSection from "@/components/EventsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PromiseSection from "@/components/PromiseSection";
import FaqSection from "@/components/FaqSection";
import EnrollmentSection from "@/components/EnrollmentSection";
import ProgramsSection from "@/components/ProgramsSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Popup from "@/components/Popup";

const Index = () => {
  const [showPrograms, setShowPrograms] = useState(false);
  const programsRef = useRef(null);

  const scrollToPrograms = () => {
    setTimeout(() => {
      programsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <GrowthStatsSection />
      <WelcomeSection />
      <AboutSection />
      <KeyAreasSection />
      <MethodologySection />
      <ResourcesSection />
      <EventsSection />
      <TestimonialsSection />
      <PromiseSection />
      <FaqSection />
      <EnrollmentSection />

      <FinalCta
        showPrograms={showPrograms}
        setShowPrograms={(v) => {
          setShowPrograms(v);
          if (v) scrollToPrograms();
        }}
      />

      {/* Animated programs block */}
      <AnimatePresence>
        {showPrograms && (
          <motion.div
            ref={programsRef}
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ProgramsSection />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      {/*<Popup />*/}
    </div>
  );
};

export default Index;
