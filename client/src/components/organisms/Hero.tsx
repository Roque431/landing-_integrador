import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '@/styles/theme';
import { Container } from '@/components/molecules';
import { AnimatedText, Button, Heading, Text } from '@/components/atoms';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  backgroundImage?: string;
  illustrationImage?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const StyledHero = styled.section`
  background: ${theme.colors.background.hero};
  padding: ${theme.spacing['5xl']} 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, transparent 60%);
    pointer-events: none;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    padding: ${theme.spacing['3xl']} 0;
    min-height: auto;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['3xl']} 0 ${theme.spacing['4xl']} 0;
    min-height: auto;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: ${theme.spacing['2xl']} 0 ${theme.spacing['3xl']} 0;
  }

  @media (max-width: 480px) {
    padding: ${theme.spacing.xl} 0 ${theme.spacing['2xl']} 0;
  }
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: ${theme.spacing['3xl']};
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    max-width: 1200px;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    gap: ${theme.spacing['2xl']};
    max-width: 1000px;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing['2xl']};
    text-align: center;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    gap: ${theme.spacing.xl};
    padding: 0 ${theme.spacing.md};
  }
`;

const LeftSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
  width: 100%;
  max-width: 100%;
  padding-right: ${theme.spacing['2xl']};

  @media (max-width: 1200px) {
    padding-right: ${theme.spacing.lg};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding-right: 0;
    max-width: 100%;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    gap: ${theme.spacing.lg};
    padding: 0 ${theme.spacing.sm};
  }

  @media (max-width: 480px) {
    padding: 0 ${theme.spacing.xs};
  }
`;

const RightSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: ${theme.breakpoints.md}) {
    justify-content: center;
  }
`;

const IllustrationWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: auto;

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: ${theme.borderRadius['2xl']};
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    max-width: 400px;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    max-width: 100%;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    max-width: 100%;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;

    button {
      width: 100%;
    }
  }
`;

const TitleWrapper = styled(motion.div)`
  margin-bottom: ${theme.spacing.xl};
  width: 100%;
  max-width: 100%;

  h1 {
    margin-bottom: ${theme.spacing.lg};
    font-size: 3.2rem;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: ${theme.colors.text.primary};
    font-weight: ${theme.typography.fontWeight.bold};
    word-break: keep-all;
    white-space: nowrap;
    overflow-wrap: normal;
    width: 100%;
    max-width: 600px;
  }

  div {
    word-break: keep-all;
    white-space: nowrap;
    overflow-wrap: normal;
    width: 100%;
    max-width: 700px;
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 2.8rem;
      white-space: normal;
      word-break: break-word;
      max-width: 100%;
    }
    
    div {
      white-space: normal;
      word-break: break-word;
      max-width: 100%;
    }
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    h1 {
      font-size: 2.5rem;
      line-height: 1.25;
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    h1 {
      font-size: 2.2rem;
      line-height: 1.3;
      max-width: 100%;
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    h1 {
      font-size: 1.9rem;
      line-height: 1.35;
      letter-spacing: -0.01em;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.6rem;
      line-height: 1.4;
    }
  }
`;

const DescriptionText = styled(motion.div)`
  max-width: 600px;
  margin-top: ${theme.spacing.xl};
  
  p {
    font-size: 1.25rem;
    line-height: 1.6;
    letter-spacing: 0.01em;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    p {
      font-size: 1.1rem;
    }
  }
`;

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryButtonText,
  secondaryButtonText,
  illustrationImage,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  const containerVariants = {
    hidden: { 
      opacity: 0,
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      } 
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        duration: 0.3,
        ease: "easeOut"
      },
    },
  } as const;

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      transition: { 
        duration: 0.6,
        ease: "easeIn"
      } 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut"
      },
    },
  } as const;

  return (
    <StyledHero id="inicio">
      <Container maxWidth="2xl">
        <HeroContent>
          <LeftSection
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <TitleWrapper variants={itemVariants}>
              <Heading level={1}>
                <AnimatedText text={title} delay={0.3} />
              </Heading>
              {subtitle && (
                <Text size="lg" weight="semibold" color="secondary" as="div">
                  <AnimatedText text={subtitle} delay={1.8} />
                </Text>
              )}
            </TitleWrapper>

            <DescriptionText variants={itemVariants}>
              <Text size="lg" color="secondary">
                {description}
              </Text>
            </DescriptionText>

            <ButtonGroup variants={itemVariants}>
              <Button variant="primary" size="lg" onClick={onPrimaryClick}>
                {primaryButtonText}
              </Button>
              {secondaryButtonText && (
                <Button variant="outline" size="lg" onClick={onSecondaryClick}>
                  {secondaryButtonText}
                </Button>
              )}
            </ButtonGroup>
          </LeftSection>

          {illustrationImage && (
            <RightSection
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3, 
                ease: "easeOut"
              }}
            >
              <IllustrationWrapper>
                <img src={illustrationImage} alt={title} />
              </IllustrationWrapper>
            </RightSection>
          )}
        </HeroContent>
      </Container>
    </StyledHero>
  );
};
export default Hero;