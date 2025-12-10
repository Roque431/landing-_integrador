import { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '@/styles/theme';
import { GlobalStyles } from '@/styles/GlobalStyles';
import { Header, Hero, DemoSection, FeaturesSection, ProfessionalMatching, UseCasesSection, HowItWorks, WhyUseLexIA, TechnologyStack, FooterSection } from '@/components';
import AnimatedSection from '@/components/AnimatedSection';
import aiIllustrationImage from '@/assets/ai-illustration.png';

function App() {
  const handlePrimaryClick = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSecondaryClick = () => {
    console.log('Secondary button clicked');
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header logoText="LexIA" />
      <AnimatedSection>
        <Hero
        title="Tu Asistente Legal Inteligente"
        subtitle="Obtén respuestas legales instantáneas con IA y conecta con profesionales verificados"
        description="Obtén respuestas legales instantáneas con IA. Pregunta en lenguaje natural y recibe orientación legal precisa, referencias a leyes aplicables y conexión directa con abogados especializados y servicios profesionales cuando los necesites."
        primaryButtonText="Prueba LexIA en Acción"
        secondaryButtonText=""
        illustrationImage={aiIllustrationImage}
        onPrimaryClick={handlePrimaryClick}
        onSecondaryClick={handleSecondaryClick}
      />
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <DemoSection />
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <FeaturesSection />
      </AnimatedSection>
      <AnimatedSection delay={0.5}>
        <ProfessionalMatching />
      </AnimatedSection>
      <AnimatedSection delay={0.6}>
        <UseCasesSection />
      </AnimatedSection>
      <AnimatedSection delay={0.7}>
        <TechnologyStack />
      </AnimatedSection>
      <AnimatedSection delay={0.8}>
        <HowItWorks />
      </AnimatedSection>
      <AnimatedSection delay={1.0}>
        <WhyUseLexIA />
      </AnimatedSection>
      <AnimatedSection delay={1.2}>
        <FooterSection />
      </AnimatedSection>
    </ThemeProvider>
  );
}

export default App;
