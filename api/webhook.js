export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const data = req.body;
    
    // Transform Smartsheet data
    const reportData = {
      timestamp: new Date().toISOString(),
      scores: {
        maturity: parseFloat(data.maturityScore),
        risk: parseFloat(data.riskScore),
        resource: parseFloat(data.resourceScore)
      },
      priorityRating: data.priorityRating,
      painPoints: data.painPoints.split(',').map(p => p.trim()),
      assessmentDetails: {
        brandGuidelines: data.brandGuidelines,
        brandTeamSize: data.teamSize,
        brandAssetStorage: data.assetStorage,
        activeRegions: data.regions,
        channelUsage: data.channels,
        brandApprovalChain: data.approvalProcess
      }
    };

    // For development, just send back the transformed data
    res.status(200).json({ 
      success: true, 
      reportData: reportData
    });
  } catch (error) {
    console.error('Webhook Error:', error);
    res.status(500).json({ message: 'Error processing webhook' });
  }
}