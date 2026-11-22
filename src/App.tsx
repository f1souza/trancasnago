/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { TopBanner } from './components/TopBanner.tsx';
import { Hero } from './components/Hero.tsx';
import { LessonsSection, LessonItem } from './components/LessonsSection.tsx';
import { ModelsSection } from './components/ModelsSection.tsx';
import { CertificateSection } from './components/CertificateSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { BonusesSection } from './components/BonusesSection.tsx';
import { PricingSection } from './components/PricingSection.tsx';
import { GuaranteeSection } from './components/GuaranteeSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { Footer } from './components/Footer.tsx';
import { LessonModal } from './components/LessonModal.tsx';
import { SocialProofPopup } from './components/SocialProofPopup.tsx';

export default function App() {
  const [selectedLesson, setSelectedLesson] = useState<LessonItem | null>(null);

  const scrollToOffer = () => {
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
      {/* Dynamic Geolocation City Top Bar */}
      <TopBanner />

      <main>
        {/* Hero Section */}
        <Hero onCtaClick={scrollToOffer} />

        {/* Video Lessons & Apostilas Carousel */}
        <LessonsSection onSelectLesson={setSelectedLesson} />

        {/* 50+ Models Catalog Showcase */}
        <ModelsSection onCtaClick={scrollToOffer} />

        {/* Certificate Section */}
        <CertificateSection />

        {/* Real Testimonials Carousel */}
        <TestimonialsSection />

        {/* 4 Exclusive Bonuses */}
        <BonusesSection />

        {/* Offer & Pricing Section (Basic R$ 7,90 | Premium R$ 19,90 | Popout Upgrade R$ 12,90) */}
        <PricingSection />

        {/* 7-Day Guarantee */}
        <GuaranteeSection />

        {/* FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onCtaClick={scrollToOffer} />

      {/* Lesson Preview Modal */}
      <LessonModal
        lesson={selectedLesson}
        onClose={() => setSelectedLesson(null)}
        onGoToOffer={scrollToOffer}
      />

      {/* Social Proof Real-Time Notifications */}
      <SocialProofPopup />
    </div>
  );
}
