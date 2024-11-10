import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import BrandGovernanceReport from '../components/BrandGovernanceReport';

export default function HomePage() {
  const [reportData, setReportData] = React.useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {reportData ? (
        <BrandGovernanceReport {...reportData} />
      ) : (
        <div className="max-w-4xl mx-auto p-4">
          <Card>
            <CardHeader>
              <CardTitle>Brand Governance Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Our brand governance assessment helps organizations evaluate and improve 
                  their brand management practices across three key dimensions:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Brand Maturity - Evaluate your brand management maturity</li>
                  <li>Risk Assessment - Identify and assess brand-related risks</li>
                  <li>Resource Evaluation - Assess your brand management resources</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded">
                  <p className="font-medium">Ready to assess your brand governance?</p>
                  <p className="text-sm mt-2">
                    Complete our assessment form to receive a detailed analysis and recommendations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}