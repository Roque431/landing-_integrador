import styled from 'styled-components';
import { FaUserTie, FaMessage, FaMagnifyingGlass, FaStar, FaPhone, FaTruck } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { theme } from '@/styles/theme';
import { Container } from '@/components/molecules';
import { Heading, Text, Button } from '@/components/atoms';

const StyledSection = styled.section`
  background: linear-gradient(135deg, ${theme.colors.primary.light}15, ${theme.colors.primary.main}08);
  padding: ${theme.spacing['4xl']} 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23${theme.colors.primary.main.replace('#', '')}" fill-opacity="0.05"><circle cx="30" cy="30" r="4"/></g></svg>');
    opacity: 0.3;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    padding: ${theme.spacing['3xl']} 0;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['2xl']} 0;
  }
`;

const SectionContent = styled.div`
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing['4xl']};

  h2 {
    margin-bottom: ${theme.spacing.lg};
    background: linear-gradient(135deg, ${theme.colors.primary.dark}, ${theme.colors.primary.main});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    max-width: 700px;
    margin: 0 auto;
    font-size: ${theme.typography.fontSize.lg};
    color: ${theme.colors.text.secondary};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    margin-bottom: ${theme.spacing['3xl']};
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing['2xl']};
  margin-bottom: ${theme.spacing['4xl']};

  @media (max-width: ${theme.breakpoints.lg}) {
    gap: ${theme.spacing.xl};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`;

const FeatureCard = styled(motion.div)`
  background: ${theme.colors.background.main};
  border: 2px solid ${theme.colors.primary.light}40;
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['2xl']};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, ${theme.colors.primary.main}, ${theme.colors.primary.light});
  }

  &:hover {
    box-shadow: ${theme.shadows.xl};
    transform: translateY(-2px);
  }
`;

const IconWrapper = styled.div`
  font-size: 40px;
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.primary.main};
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const FeatureTitle = styled(Heading)`
  margin-bottom: ${theme.spacing.md};
  font-size: ${theme.typography.fontSize['2xl']};
  color: ${theme.colors.text.primary};
`;

const FeatureDescription = styled(Text)`
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing.lg};
`;

const ProcessFlow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${theme.spacing['2xl']};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, ${theme.colors.primary.light}, ${theme.colors.primary.main}, ${theme.colors.primary.light});
    z-index: 0;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${theme.spacing.xl};

    &::before {
      display: none;
    }
  }
`;

const ProcessStep = styled(motion.div)`
  background: ${theme.colors.background.main};
  border: 3px solid ${theme.colors.primary.main};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  text-align: center;

  .icon {
    font-size: 24px;
    color: ${theme.colors.primary.main};
    margin-bottom: ${theme.spacing.xs};
  }

  .step-text {
    font-size: ${theme.typography.fontSize.sm};
    font-weight: ${theme.typography.fontWeight.semibold};
    color: ${theme.colors.text.primary};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    width: 100px;
    height: 100px;

    .icon {
      font-size: 20px;
    }

    .step-text {
      font-size: ${theme.typography.fontSize.xs};
    }
  }
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: ${theme.spacing['3xl']};

  p {
    margin-bottom: ${theme.spacing.lg};
    font-size: ${theme.typography.fontSize.lg};
    color: ${theme.colors.text.secondary};
  }
`;

export const ProfessionalMatching: React.FC = () => {
  return (
    <StyledSection id="matching-profesionales">
      <Container>
        <SectionContent>
          <SectionHeader>
            <Heading level={2}>Conecta con Profesionales Verificados</Heading>
            <Text size="lg">
              LexIA no solo te da respuestas, te conecta directamente con los expertos que necesitas.
              Abogados especializados, servicios de emergencia y profesionales verificados al alcance de un chat.
            </Text>
          </SectionHeader>

          <FeaturesGrid>
            <FeatureCard
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <IconWrapper>
                <FaUserTie size={40} />
              </IconWrapper>
              <FeatureTitle level={3}>Red de Abogados Especializados</FeatureTitle>
              <FeatureDescription size="base">
                Cuando necesites asesoría legal personalizada, te mostramos una lista de abogados especializados en tu área específica. 
                Revisa perfiles, calificaciones de otros clientes, especialidades y tarifas antes de elegir.
              </FeatureDescription>
              <ul style={{ color: theme.colors.text.secondary, paddingLeft: '20px' }}>
                <li>✓ Perfiles verificados con credenciales</li>
                <li>✓ Calificaciones y reseñas reales</li>
                <li>✓ Especialidades detalladas</li>
                <li>✓ Chat directo con el profesional</li>
              </ul>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <IconWrapper>
                <FaTruck size={40} />
              </IconWrapper>
              <FeatureTitle level={3}>Servicios de Emergencia</FeatureTitle>
              <FeatureDescription size="base">
                ¿Accidente? ¿Necesitas una grúa, taller mecánico o refaccionaria? 
                LexIA te muestra proveedores cercanos con contacto directo, calificaciones y disponibilidad en tiempo real.
              </FeatureDescription>
              <ul style={{ color: theme.colors.text.secondary, paddingLeft: '20px' }}>
                <li>✓ Servicios cercanos a tu ubicación</li>
                <li>✓ Contacto telefónico directo</li>
                <li>✓ Disponibilidad en tiempo real</li>
                <li>✓ Precios transparentes</li>
              </ul>
            </FeatureCard>
          </FeaturesGrid>

          <ProcessFlow>
            <ProcessStep
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaMessage className="icon" size={24} />
              <span className="step-text">Consulta en Chat</span>
            </ProcessStep>

            <ProcessStep
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <FaMagnifyingGlass className="icon" size={24} />
              <span className="step-text">IA Encuentra Profesionales</span>
            </ProcessStep>

            <ProcessStep
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <FaStar className="icon" size={24} />
              <span className="step-text">Revisas Perfiles</span>
            </ProcessStep>

            <ProcessStep
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <FaPhone className="icon" size={24} />
              <span className="step-text">Contacto Directo</span>
            </ProcessStep>
          </ProcessFlow>

          <CTASection>
            <Text size="lg">
              Desde consultas legales hasta servicios de emergencia, todo en una sola plataforma.
            </Text>
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => console.log('Ver demo de matching')}
            >
              Ver Demo del Matching
            </Button>
          </CTASection>
        </SectionContent>
      </Container>
    </StyledSection>
  );
};

export default ProfessionalMatching;