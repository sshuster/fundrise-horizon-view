
// Mock data for startup dashboard
export const startupData = {
  // Funding progress
  funding: {
    target: 2000000,
    raised: 750000,
    investors: 12,
    pitches: 25,
    meetings: 15,
  },
  
  // Recent investor interactions
  recentInteractions: [
    { id: 1, investor: "Sequoia Capital", status: "Meeting Scheduled", date: "2023-06-15", amount: null },
    { id: 2, investor: "Andreessen Horowitz", status: "Pitch Sent", date: "2023-06-10", amount: null },
    { id: 3, investor: "Y Combinator", status: "Investment Received", date: "2023-05-28", amount: 250000 },
    { id: 4, investor: "Accel Partners", status: "Due Diligence", date: "2023-05-20", amount: null },
    { id: 5, investor: "Greylock Partners", status: "Rejected", date: "2023-05-15", amount: null },
  ],
  
  // Monthly fundraising activities
  monthlyActivities: [
    { month: "Jan", pitches: 2, meetings: 1, investments: 0 },
    { month: "Feb", pitches: 3, meetings: 2, investments: 0 },
    { month: "Mar", pitches: 5, meetings: 3, investments: 1 },
    { month: "Apr", pitches: 7, meetings: 4, investments: 1 },
    { month: "May", pitches: 5, meetings: 3, investments: 2 },
    { month: "Jun", pitches: 3, meetings: 2, investments: 0 },
  ],
  
  // Funding by round
  fundingRounds: [
    { name: "Pre-seed", value: 250000 },
    { name: "Seed", value: 500000 },
    { name: "Series A", value: 0 },
    { name: "Series B", value: 0 },
  ],
  
  // Upcoming meetings
  upcomingMeetings: [
    { id: 1, investor: "Lightspeed Venture Partners", date: "2023-06-20", time: "10:00 AM", location: "Virtual" },
    { id: 2, investor: "Benchmark", date: "2023-06-22", time: "2:00 PM", location: "San Francisco" },
    { id: 3, investor: "Founders Fund", date: "2023-06-25", time: "11:30 AM", location: "Virtual" },
  ],
};

// Mock data for investor dashboard
export const investorData = {
  // Portfolio overview
  portfolio: {
    totalInvested: 15000000,
    companies: 8,
    averageReturn: 2.7, // multiple
    topPerformer: "TechCorp",
    topPerformerReturn: 4.5, // multiple
  },
  
  // Deal flow statistics
  dealFlow: {
    totalDeals: 145,
    reviewed: 78,
    meetings: 25,
    dueDiligence: 12,
    invested: 8,
  },
  
  // Investment by sector
  sectorAllocation: [
    { name: "Fintech", value: 4500000 },
    { name: "SaaS", value: 3500000 },
    { name: "Health Tech", value: 2500000 },
    { name: "AI/ML", value: 3000000 },
    { name: "Consumer", value: 1500000 },
  ],
  
  // Portfolio performance
  portfolioCompanies: [
    { id: 1, company: "TechCorp", sector: "SaaS", invested: 2000000, currentValue: 9000000, multiple: 4.5, stage: "Series B" },
    { id: 2, company: "FinanceAI", sector: "Fintech", invested: 1500000, currentValue: 4500000, multiple: 3.0, stage: "Series A" },
    { id: 3, company: "HealthLink", sector: "Health Tech", invested: 2500000, currentValue: 5000000, multiple: 2.0, stage: "Series A" },
    { id: 4, company: "DataMind", sector: "AI/ML", invested: 3000000, currentValue: 7500000, multiple: 2.5, stage: "Series B" },
    { id: 5, company: "ShopWave", sector: "Consumer", invested: 1500000, currentValue: 3000000, multiple: 2.0, stage: "Series A" },
    { id: 6, company: "CloudSecure", sector: "SaaS", invested: 1500000, currentValue: 2250000, multiple: 1.5, stage: "Seed" },
    { id: 7, company: "PayEasy", sector: "Fintech", invested: 3000000, currentValue: 3000000, multiple: 1.0, stage: "Seed" },
    { id: 8, company: "AIAssist", sector: "AI/ML", invested: 2000000, currentValue: 1000000, multiple: 0.5, stage: "Seed" },
  ],
  
  // Monthly deal flow
  monthlyDealFlow: [
    { month: "Jan", received: 20, reviewed: 15, meetings: 5, investments: 1 },
    { month: "Feb", received: 25, reviewed: 18, meetings: 6, investments: 0 },
    { month: "Mar", received: 30, reviewed: 20, meetings: 8, investments: 2 },
    { month: "Apr", received: 35, reviewed: 25, meetings: 10, investments: 3 },
    { month: "May", received: 25, reviewed: 20, meetings: 8, investments: 2 },
    { month: "Jun", received: 10, reviewed: 8, meetings: 3, investments: 0 },
  ],
  
  // Upcoming startup meetings
  upcomingMeetings: [
    { id: 1, startup: "RoboTech", sector: "AI/ML", stage: "Seed", date: "2023-06-21", time: "11:00 AM", location: "Virtual" },
    { id: 2, startup: "GreenEnergy", sector: "Cleantech", stage: "Series A", date: "2023-06-23", time: "1:00 PM", location: "New York" },
    { id: 3, startup: "SecureID", sector: "Cybersecurity", stage: "Seed", date: "2023-06-26", time: "10:30 AM", location: "Virtual" },
  ],
};
