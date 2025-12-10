import styled from 'styled-components';
import { FaCar, FaBuilding, FaSuitcase, FaUserDoctor } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { theme } from '@/styles/theme';
import { Container } from '@/components/molecules';
import { Heading, Text } from '@/components/atoms';

const StyledSection = styled.section`
  background-color: ${theme.colors.background.main};
  padding: ${theme.spacing['4xl']} 0;

  @media (max-width: ${theme.breakpoints.lg}) {
    padding: ${theme.spacing['3xl']} 0;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['2xl']} 0;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing['4xl']};

  h2 {
    margin-bottom: ${theme.spacing.lg};
  }

  p {
    max-width: 700px;
    margin: 0 auto;
    font-size: ${theme.typography.fontSize.lg};
    color: ${theme.colors.text.secondary};
  }
`;

const UseCasesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing['2xl']};

  @media (max-width: ${theme.breakpoints.lg}) {
    gap: ${theme.spacing.xl};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`;

const UseCaseCard = styled(motion.div)`
  background: ${theme.colors.background.main};
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['2xl']};
  transition: all ${theme.transitions.base};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${theme.colors.primary.main}, ${theme.colors.primary.light});
  }

  &:hover {
    box-shadow: ${theme.shadows.xl};
    border-color: ${theme.colors.primary.light};
    transform: translateY(-4px);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing.lg};

  .icon {
    font-size: 32px;
    color: ${theme.colors.primary.main};
    margin-right: ${theme.spacing.lg};
  }
`;

const CardTitle = styled(Heading)`
  font-size: ${theme.typography.fontSize.xl};
  color: ${theme.colors.text.primary};
  margin: 0;
`;

const Scenario = styled.div`
  margin-bottom: ${theme.spacing.lg};
  padding: ${theme.spacing.md};
  background: ${theme.colors.primary.light}15;
  border-radius: ${theme.borderRadius.md};
  border-left: 4px solid ${theme.colors.primary.main};
`;

const ScenarioText = styled(Text)`
  font-style: italic;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
`;

const ResponseSteps = styled.div`
  margin-top: ${theme.spacing.md};
`;

const Step = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${theme.spacing.md};

  .step-number {
    background: ${theme.colors.primary.main};
    color: white;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.typography.fontSize.sm};
    font-weight: ${theme.typography.fontWeight.bold};
    margin-right: ${theme.spacing.md};
    flex-shrink: 0;
    margin-top: 2px;
  }

  .step-content {
    flex: 1;
  }
`;

const StepTitle = styled.span`
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
`;

const StepDescription = styled(Text)`
  color: ${theme.colors.text.secondary};
  margin-top: ${theme.spacing.xs};
`;

const useCases = [
  {
    icon: <FaCar size={32} />,
    title: 'Accidente de Tránsito',
    scenario: '"Tuve un choque en la avenida, el otro conductor dice que fue mi culpa. ¿Qué debo hacer?"',
    steps: [
      {
        title: 'Orientación Legal Inmediata',
        description: 'LexIA te explica las reglas de tránsito aplicables y cómo determinar responsabilidades.'
      },
      {
        title: 'Servicios de Emergencia',
        description: 'Te conecta con grúas cercanas, talleres mecánicos y refaccionarias con disponibilidad inmediata.'
      },
      {
        title: 'Abogados de Tránsito',
        description: 'Lista de abogados especializados en accidentes vehiculares con experiencia comprobada.'
      },
      {
        title: 'Contacto Directo',
        description: 'Un click para llamar o chatear directamente con el profesional que necesites.'
      }
    ]
  },
  {
    icon: <FaSuitcase size={32} />,
    title: 'Multa de Tránsito Injusta',
    scenario: '"Me pusieron una multa por exceso de velocidad pero estoy seguro que respetaba el límite"',
    steps: [
      {
        title: 'Análisis de la Infracción',
        description: 'Información sobre tus derechos y los procedimientos para impugnar multas de tránsito.'
      },
      {
        title: 'Evidencia Necesaria',
        description: 'Te explicamos qué documentos y pruebas necesitas para defenderte efectivamente.'
      },
      {
        title: 'Abogados Especialistas',
        description: 'Abogados con experiencia en defensa de infracciones de tránsito y multas.'
      },
      {
        title: 'Proceso de Apelación',
        description: 'Te guían en el proceso completo de impugnación ante las autoridades correspondientes.'
      }
    ]
  },
  {
    icon: <FaBuilding size={32} />,
    title: 'Licencia Suspendida',
    scenario: '"Me suspendieron la licencia por acumulación de puntos. ¿Puedo recuperarla?"',
    steps: [
      {
        title: 'Revisión del Expediente',
        description: 'Análisis de tu historial de infracciones y opciones legales disponibles.'
      },
      {
        title: 'Procedimientos de Recuperación',
        description: 'Pasos específicos para solicitar la reactivación de tu licencia de conducir.'
      },
      {
        title: 'Gestores y Abogados',
        description: 'Profesionales especializados en trámites vehiculares y recuperación de licencias.'
      },
      {
        title: 'Seguimiento del Proceso',
        description: 'Acompañamiento completo hasta la recuperación de tu licencia de conducir.'
      }
    ]
  },
  {
    icon: <FaUserDoctor size={32} />,
    title: 'Lesiones por Accidente',
    scenario: '"Sufrí lesiones en un accidente vehicular y necesito reclamar gastos médicos"',
    steps: [
      {
        title: 'Derechos por Lesiones',
        description: 'Explicación sobre compensaciones por daños físicos y gastos médicos en accidentes.'
      },
      {
        title: 'Documentación Médica',
        description: 'Qué documentos médicos y evidencias necesitas para sustentar tu reclamación.'
      },
      {
        title: 'Peritos y Médicos Forenses',
        description: 'Red de médicos forenses y peritos especializados en valoración de lesiones.'
      },
      {
        title: 'Abogados de Seguros',
        description: 'Abogados con experiencia en reclamaciones a aseguradoras por accidentes de tránsito.'
      }
    ]
  }
];

export const UseCasesSection: React.FC = () => {
  return (
    <StyledSection id="casos-de-uso">
      <Container>
        <SectionHeader>
          <Heading level={2}>Especialistas en Tránsito y Accidentes</Heading>
          <Text size="lg">
            Ve cómo LexIA te ayuda con problemas de tránsito, desde accidentes hasta multas, conectándote con los especialistas exactos que necesitas.
          </Text>
        </SectionHeader>

        <UseCasesGrid>
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2, ease: "easeInOut" }
              }}
            >
              <CardHeader>
                <div className="icon">{useCase.icon}</div>
                <CardTitle level={3}>{useCase.title}</CardTitle>
              </CardHeader>

              <Scenario>
                <ScenarioText size="base">
                  {useCase.scenario}
                </ScenarioText>
              </Scenario>

              <ResponseSteps>
                {useCase.steps.map((step, stepIndex) => (
                  <Step key={stepIndex}>
                    <div className="step-number">{stepIndex + 1}</div>
                    <div className="step-content">
                      <StepTitle>{step.title}</StepTitle>
                      <StepDescription size="sm">
                        {step.description}
                      </StepDescription>
                    </div>
                  </Step>
                ))}
              </ResponseSteps>
            </UseCaseCard>
          ))}
        </UseCasesGrid>
      </Container>
    </StyledSection>
  );
};

export default UseCasesSection;