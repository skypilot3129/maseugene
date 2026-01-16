import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PhilosophySection from '@/components/PhilosophySection';
import SkillsSection from '@/components/SkillsSection';
import TimelineSection from '@/components/TimelineSection';
import ArchiveSection from '@/components/ArchiveSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ArticlesSection from '@/components/ArticlesSection';
import EfficiencyCalculator from '@/components/EfficiencyCalculator';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <div id="philosophy">
          <PhilosophySection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="experience">
          <TimelineSection />
        </div>
        <div id="archive">
          <ArchiveSection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="articles">
          <ArticlesSection />
        </div>
        <div id="calculator">
          <EfficiencyCalculator />
        </div>
        <ContactSection />
      </main>
    </>
  );
}
