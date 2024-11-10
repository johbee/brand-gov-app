import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const BrandGovernanceReport = ({ 
  scores = { maturity: 0, risk: 0, resource: 0 },
  priorityRating = "minimum",
  painPoints = [],
  customPainPointDetails = null,
  assessmentDetails = {
    brandGuidelines: "",
    brandTeamSize: "",
    brandAssetStorage: "",
    activeRegions: "",
    channelUsage: "",
    brandApprovalChain: ""
  }
}) => {
  // Response data structure
  const responseData = {
    maturity: [
      {
        id: "MAT-01",
        scoreRange: { min: 0, max: 1 },
        description: "Limited brand governance. No formal guidelines or processes exist.",
        recommendations: "Establish fundamental brand management structure.",
        nextSteps: "Create basic brand guidelines document, implement central asset storage, assign brand responsibilities."
      },
      {
        id: "MAT-02",
        scoreRange: { min: 1, max: 2 },
        description: "Basic brand governance with informal processes.",
        recommendations: "Formalize brand management processes and documentation.",
        nextSteps: "Develop comprehensive guidelines, establish approval workflows, create asset management system."
      },
      {
        id: "MAT-03",
        scoreRange: { min: 2, max: 3 },
        description: "Established brand governance with some formal processes.",
        recommendations: "Strengthen consistency and compliance.",
        nextSteps: "Implement brand training program, enhance approval systems, develop measurement metrics."
      },
      {
        id: "MAT-04",
        scoreRange: { min: 3, max: 4 },
        description: "Strong brand governance with documented processes.",
        recommendations: "Optimize and scale brand management.",
        nextSteps: "Expand digital asset management, automate workflows, enhance monitoring tools."
      },
      {
        id: "MAT-05",
        scoreRange: { min: 4, max: 5 },
        description: "Advanced brand governance with integrated systems.",
        recommendations: "Focus on innovation and optimization.",
        nextSteps: "Implement advanced analytics, enhance automation, develop predictive tools."
      }
    ],
    risk: [
      {
        id: "RISK-01",
        scoreRange: { min: 0, max: 1 },
        description: "Minimal brand risk exposure.",
        recommendations: "Maintain current practices while planning for growth.",
        nextSteps: "Document current processes, prepare scaling strategy."
      },
      {
        id: "RISK-02",
        scoreRange: { min: 1, max: 2 },
        description: "Low brand risk with potential growth concerns.",
        recommendations: "Implement preventive measures.",
        nextSteps: "Develop risk assessment checklist, create incident response plan."
      },
      {
        id: "RISK-03",
        scoreRange: { min: 2, max: 3 },
        description: "Moderate brand risk requiring attention.",
        recommendations: "Strengthen risk management framework.",
        nextSteps: "Establish monitoring systems, create compliance checkpoints, develop training programs."
      },
      {
        id: "RISK-04",
        scoreRange: { min: 3, max: 4 },
        description: "Significant brand risk requiring immediate action.",
        recommendations: "Implement comprehensive risk management.",
        nextSteps: "Deploy brand protection tools, establish governance committee, create audit schedule."
      },
      {
        id: "RISK-05",
        scoreRange: { min: 4, max: 5 },
        description: "High brand risk requiring urgent intervention.",
        recommendations: "Execute immediate risk mitigation strategy.",
        nextSteps: "Implement crisis management protocols, establish daily monitoring, deploy protection systems."
      }
    ],
    resource: [
      {
        id: "RES-01",
        scoreRange: { min: 0, max: 1 },
        description: "Minimal brand resources and support.",
        recommendations: "Build fundamental resource structure.",
        nextSteps: "Define core team roles, establish basic tools, create resource plan."
      },
      {
        id: "RES-02",
        scoreRange: { min: 1, max: 2 },
        description: "Basic resource framework with gaps.",
        recommendations: "Strengthen resource allocation and capabilities.",
        nextSteps: "Expand team capabilities, implement essential tools, develop training."
      },
      {
        id: "RES-03",
        scoreRange: { min: 2, max: 3 },
        description: "Established resource structure needing optimization.",
        recommendations: "Enhance resource efficiency and effectiveness.",
        nextSteps: "Streamline workflows, upgrade tools, improve collaboration."
      },
      {
        id: "RES-04",
        scoreRange: { min: 3, max: 4 },
        description: "Strong resource foundation with scaling needs.",
        recommendations: "Scale resources for growth.",
        nextSteps: "Expand team capacity, enhance systems, develop advanced capabilities."
      },
      {
        id: "RES-05",
        scoreRange: { min: 4, max: 5 },
        description: "Comprehensive resource structure requiring maintenance.",
        recommendations: "Optimize resource utilization.",
        nextSteps: "Implement advanced tools, enhance team expertise, develop innovation capacity."
      }
    ]
  };

  const painPointsData = {
    "PAIN-01": {
      name: "Inconsistent Brand Usage",
      impact: "Varying brand applications across channels undermining brand equity and recognition",
      recommendation: "Implement comprehensive brand consistency monitoring and training program",
      solutions: "Brand audit toolkit, compliance tracking system, standardization workshop"
    },
    "PAIN-02": {
      name: "Slow Approval Processes",
      impact: "Delayed approvals causing project bottlenecks and missed market opportunities",
      recommendation: "Streamline approval workflows with clear responsibilities and SLAs",
      solutions: "Process mapping, approval matrix, automation implementation"
    },
    "PAIN-03": {
      name: "Limited Access to Assets",
      impact: "Inefficient asset retrieval causing delays and unauthorized asset creation",
      recommendation: "Deploy centralized asset management system with role-based access",
      solutions: "DAM implementation, asset organization structure, access workflow design"
    }
    // ... Add other pain points as needed
  };

  const getResponseForScore = (category, score) => {
    const responses = responseData[category];
    return responses.find(r => score >= r.scoreRange.min && score <= r.scoreRange.max) || responses[0];
  };

  const SectionHeader = ({ children }) => (
    <h2 className="text-2xl font-bold mb-4">{children}</h2>
  );

  const SectionSubheader = ({ children }) => (
    <h3 className="text-xl font-semibold mb-3 mt-6">{children}</h3>
  );

  const DescriptionBox = ({ children }) => (
    <div className="bg-gray-50 p-4 rounded-lg mb-4">
      {children}
    </div>
  );

  const maturityResponse = getResponseForScore('maturity', scores.maturity);
  const riskResponse = getResponseForScore('risk', scores.risk);
  const resourceResponse = getResponseForScore('resource', scores.resource);

  const consolidatedNextSteps = {
    immediate: maturityResponse.nextSteps.split(', ').filter((_, i) => i < 2),
    mediumTerm: riskResponse.nextSteps.split(', ').filter((_, i) => i < 2),
    longTerm: resourceResponse.nextSteps.split(', ').filter((_, i) => i < 2)
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Brand Governance Assessment Report</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Executive Summary */}
        <section>
          <SectionSubheader>Assessment Overview</SectionSubheader>
          <DescriptionBox>
            <p>Your brand governance assessment indicates a {priorityRating} priority level for improvement and attention.</p>
          </DescriptionBox>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="font-medium">Maturity Score: {scores.maturity.toFixed(1)}</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="font-medium">Risk Level: {scores.risk.toFixed(1)}</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="font-medium">Resource Score: {scores.resource.toFixed(1)}</p>
            </div>
          </div>
        </section>

        {/* Maturity Assessment */}
        <section>
          <SectionHeader>Brand Maturity Assessment</SectionHeader>
          <DescriptionBox>
            <p>{maturityResponse.description}</p>
          </DescriptionBox>
          <SectionSubheader>Key Findings</SectionSubheader>
          <div className="space-y-3">
            <p><strong>Guidelines Status:</strong> {assessmentDetails.brandGuidelines}</p>
            <p><strong>Team Structure:</strong> {assessmentDetails.brandTeamSize}</p>
            <p><strong>Asset Management:</strong> {assessmentDetails.brandAssetStorage}</p>
          </div>
          <DescriptionBox>
            <p><strong>Recommendations:</strong> {maturityResponse.recommendations}</p>
          </DescriptionBox>
        </section>

        {/* Risk Analysis */}
        <section>
          <SectionHeader>Brand Risk Analysis</SectionHeader>
          <DescriptionBox>
            <p>{riskResponse.description}</p>
          </DescriptionBox>
          <SectionSubheader>Risk Factors</SectionSubheader>
          <div className="space-y-3">
            <p><strong>Geographic Presence:</strong> {assessmentDetails.activeRegions}</p>
            <p><strong>Channel Complexity:</strong> {assessmentDetails.channelUsage}</p>
          </div>
          <DescriptionBox>
            <p><strong>Recommendations:</strong> {riskResponse.recommendations}</p>
          </DescriptionBox>
        </section>

        {/* Resource Evaluation */}
        <section>
          <SectionHeader>Resource Evaluation</SectionHeader>
          <DescriptionBox>
            <p>{resourceResponse.description}</p>
          </DescriptionBox>
          <SectionSubheader>Current Capabilities</SectionSubheader>
          <div className="space-y-3">
            <p><strong>Team Structure:</strong> {assessmentDetails.brandTeamSize}</p>
            <p><strong>Approval Process:</strong> {assessmentDetails.brandApprovalChain}</p>
          </div>
          <DescriptionBox>
            <p><strong>Recommendations:</strong> {resourceResponse.recommendations}</p>
          </DescriptionBox>
        </section>

        {/* Pain Points Analysis */}
        {painPoints.length > 0 && (
          <section>
            <SectionHeader>Identified Pain Points</SectionHeader>
            <div className="space-y-4">
              {painPoints.map((painPoint) => {
                const details = painPoint === 'PAIN-12' && customPainPointDetails 
                  ? customPainPointDetails 
                  : painPointsData[painPoint];
                return (
                  <div key={painPoint} className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">{details.name}</h4>
                    <div className="space-y-2">
                      <p><strong>Impact:</strong> {details.impact}</p>
                      <p><strong>Recommendation:</strong> {details.recommendation}</p>
                      <p><strong>Solutions:</strong> {details.solutions}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Next Steps */}
        <section>
          <SectionHeader>Recommended Next Steps</SectionHeader>
          <div className="space-y-6">
            <div>
              <SectionSubheader>Immediate Actions</SectionSubheader>
              <DescriptionBox>
                <ul className="list-disc pl-5 space-y-2">
                  {consolidatedNextSteps.immediate.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </DescriptionBox>
            </div>
            <div>
              <SectionSubheader>Medium-term Recommendations</SectionSubheader>
              <DescriptionBox>
                <ul className="list-disc pl-5 space-y-2">
                  {consolidatedNextSteps.mediumTerm.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </DescriptionBox>
            </div>
            <div>
              <SectionSubheader>Long-term Strategy</SectionSubheader>
              <DescriptionBox>
                <ul className="list-disc pl-5 space-y-2">
                  {consolidatedNextSteps.longTerm.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </DescriptionBox>
            </div>
          </div>
        </section>
      </CardContent>
    </Card>
  );
};

export default BrandGovernanceReport;