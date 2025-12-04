// Mock data for PayFlow - a fintech payment processing platform

export const project = {
  name: "PayFlow",
  description: "Modern payment processing platform for SMBs",
  lastSync: new Date(Date.now() - 2 * 60 * 1000) // 2 minutes ago
};

export const objectives = [
  {
    id: "obj-1",
    title: "Improve payment success rate and reliability",
    quarter: "Q1 2025",
    keyResults: [
      {
        id: "kr-1-1",
        title: "Increase payment success rate from 94% to 97%",
        progress: 75,
        target: 97,
        current: 96.25,
        unit: "%",
        status: "on-track",
        linkedTickets: 12,
        ticketStats: { done: 8, inProgress: 3, blocked: 1, notStarted: 0 }
      },
      {
        id: "kr-1-2",
        title: "Reduce payment processing time from 2.5s to 1.5s",
        progress: 60,
        target: 1.5,
        current: 1.9,
        unit: "s",
        status: "on-track",
        linkedTickets: 8,
        ticketStats: { done: 5, inProgress: 2, blocked: 0, notStarted: 1 }
      },
      {
        id: "kr-1-3",
        title: "Achieve 99.95% uptime for payment gateway",
        progress: 92,
        target: 99.95,
        current: 99.93,
        unit: "%",
        status: "on-track",
        linkedTickets: 6,
        ticketStats: { done: 5, inProgress: 1, blocked: 0, notStarted: 0 }
      }
    ]
  },
  {
    id: "obj-2",
    title: "Enable enterprise-grade security and compliance",
    quarter: "Q1 2025",
    keyResults: [
      {
        id: "kr-2-1",
        title: "Complete SOC 2 Type II certification",
        progress: 45,
        target: 100,
        current: 45,
        unit: "%",
        status: "at-risk",
        linkedTickets: 9,
        ticketStats: { done: 2, inProgress: 3, blocked: 2, notStarted: 2 }
      },
      {
        id: "kr-2-2",
        title: "Implement SSO for enterprise customers",
        progress: 30,
        target: 100,
        current: 30,
        unit: "%",
        status: "at-risk",
        linkedTickets: 7,
        ticketStats: { done: 1, inProgress: 2, blocked: 1, notStarted: 3 }
      }
    ]
  },
  {
    id: "obj-3",
    title: "Scale merchant onboarding and activation",
    quarter: "Q1 2025",
    keyResults: [
      {
        id: "kr-3-1",
        title: "Reduce time-to-first-transaction from 3 days to 1 day",
        progress: 85,
        target: 1,
        current: 1.3,
        unit: "days",
        status: "on-track",
        linkedTickets: 10,
        ticketStats: { done: 8, inProgress: 2, blocked: 0, notStarted: 0 }
      },
      {
        id: "kr-3-2",
        title: "Increase merchant activation rate from 65% to 80%",
        progress: 20,
        target: 80,
        current: 68,
        unit: "%",
        status: "behind",
        linkedTickets: 4,
        ticketStats: { done: 0, inProgress: 1, blocked: 0, notStarted: 3 }
      },
      {
        id: "kr-3-3",
        title: "Launch self-service onboarding portal",
        progress: 0,
        target: 100,
        current: 0,
        unit: "%",
        status: "not-started",
        linkedTickets: 0,
        ticketStats: { done: 0, inProgress: 0, blocked: 0, notStarted: 0 }
      }
    ]
  }
];

export const tickets = [
  // KR 1-1 tickets
  { id: "PAY-101", title: "Implement retry logic for failed transactions", status: "done", kr: "kr-1-1", epic: "Payment Reliability", assignee: "Sarah Chen", sprint: 22 },
  { id: "PAY-102", title: "Add circuit breaker for payment gateway", status: "done", kr: "kr-1-1", epic: "Payment Reliability", assignee: "Marcus Johnson", sprint: 22 },
  { id: "PAY-103", title: "Optimize payment validation rules", status: "done", kr: "kr-1-1", epic: "Payment Reliability", assignee: "Sarah Chen", sprint: 23 },
  { id: "PAY-104", title: "Add fallback payment processor", status: "inProgress", kr: "kr-1-1", epic: "Payment Reliability", assignee: "Alex Kumar", sprint: 24 },
  { id: "PAY-105", title: "Implement intelligent transaction routing", status: "inProgress", kr: "kr-1-1", epic: "Payment Reliability", assignee: "Sarah Chen", sprint: 24 },
  { id: "PAY-106", title: "Enhanced fraud detection integration", status: "blocked", kr: "kr-1-1", epic: "Payment Reliability", assignee: "Marcus Johnson", sprint: 24, blockedReason: "Waiting on vendor API access" },
  { id: "PAY-107", title: "Add real-time success rate monitoring", status: "done", kr: "kr-1-1", epic: "Payment Reliability", assignee: "Alex Kumar", sprint: 23 },
  
  // KR 2-1 tickets (SOC 2)
  { id: "SEC-201", title: "Implement audit logging system", status: "done", kr: "kr-2-1", epic: "SOC 2 Compliance", assignee: "Jennifer Lee", sprint: 22 },
  { id: "SEC-202", title: "Set up encryption key rotation", status: "done", kr: "kr-2-1", epic: "SOC 2 Compliance", assignee: "David Park", sprint: 23 },
  { id: "SEC-203", title: "Complete security policy documentation", status: "inProgress", kr: "kr-2-1", epic: "SOC 2 Compliance", assignee: "Jennifer Lee", sprint: 24 },
  { id: "SEC-204", title: "Implement access control reviews", status: "blocked", kr: "kr-2-1", epic: "SOC 2 Compliance", assignee: "David Park", sprint: 24, blockedReason: "Waiting for HR integration" },
  { id: "SEC-205", title: "Set up intrusion detection system", status: "inProgress", kr: "kr-2-1", epic: "SOC 2 Compliance", assignee: "Jennifer Lee", sprint: 24 },
  
  // KR 2-2 tickets (SSO)
  { id: "AUTH-301", title: "Design SSO architecture", status: "done", kr: "kr-2-2", epic: "Enterprise SSO", assignee: "Marcus Johnson", sprint: 23 },
  { id: "AUTH-302", title: "Implement SAML 2.0 support", status: "inProgress", kr: "kr-2-2", epic: "Enterprise SSO", assignee: "Alex Kumar", sprint: 24 },
  { id: "AUTH-303", title: "Add organization SSO settings UI", status: "inProgress", kr: "kr-2-2", epic: "Enterprise SSO", assignee: "Sarah Chen", sprint: 24 },
  { id: "AUTH-304", title: "Implement JIT user provisioning", status: "blocked", kr: "kr-2-2", epic: "Enterprise SSO", assignee: "Marcus Johnson", sprint: 24, blockedReason: "Dependency on user service refactor" },
  
  // KR 3-1 tickets (Onboarding speed)
  { id: "ONB-401", title: "Streamline KYC verification flow", status: "done", kr: "kr-3-1", epic: "Merchant Onboarding", assignee: "Lisa Wang", sprint: 22 },
  { id: "ONB-402", title: "Add instant bank account verification", status: "done", kr: "kr-3-1", epic: "Merchant Onboarding", assignee: "Tom Rodriguez", sprint: 23 },
  { id: "ONB-403", title: "Implement progressive onboarding", status: "done", kr: "kr-3-1", epic: "Merchant Onboarding", assignee: "Lisa Wang", sprint: 23 },
  { id: "ONB-404", title: "Pre-populate merchant data from external sources", status: "inProgress", kr: "kr-3-1", epic: "Merchant Onboarding", assignee: "Tom Rodriguez", sprint: 24 },
  
  // KR 3-2 tickets (Activation rate)
  { id: "ACT-501", title: "Analyze activation drop-off points", status: "done", kr: "kr-3-2", epic: "Activation Optimization", assignee: "Lisa Wang", sprint: 23 },
  { id: "ACT-502", title: "Implement onboarding email sequence", status: "inProgress", kr: "kr-3-2", epic: "Activation Optimization", assignee: "Emma Davis", sprint: 24 },
  { id: "ACT-503", title: "Add in-app onboarding checklist", status: "notStarted", kr: "kr-3-2", epic: "Activation Optimization", assignee: null, sprint: null },
  { id: "ACT-504", title: "Create tutorial videos for first transaction", status: "notStarted", kr: "kr-3-2", epic: "Activation Optimization", assignee: null, sprint: null }
];

export const velocityData = [
  { sprint: "Sprint 21", completed: 52, planned: 55 },
  { sprint: "Sprint 22", completed: 48, planned: 50 },
  { sprint: "Sprint 23", completed: 56, planned: 52 },
  { sprint: "Sprint 24", completed: 42, planned: 58 }
];

// Unified chat with planning - simulates a natural conversation flow
export const chatConversation = [
  {
    id: 1,
    type: "ai",
    content: "Welcome! I have context of your PayFlow codebase, Jira tickets, and OKRs. Ask me about feasibility, impact, status, or let's plan a new feature together.",
    timestamp: new Date(Date.now() - 15 * 60 * 1000)
  },
  {
    id: 2,
    type: "pm",
    content: "Can we add multi-currency support for international merchants?",
    timestamp: new Date(Date.now() - 14 * 60 * 1000)
  },
  {
    id: 3,
    type: "ai",
    content: "Let me analyze the codebase for multi-currency support.",
    timestamp: new Date(Date.now() - 13.5 * 60 * 1000),
    isThinking: false,
    analysis: {
      title: "Feasibility Analysis: Multi-Currency Support",
      sections: [
        {
          title: "CURRENT STATE",
          items: [
            "payment-service handles USD only (hardcoded in src/services/payment/constants.ts)",
            "Stripe integration already supports multi-currency",
            "Database schema has currency field but unused",
            "Dashboard displays $ symbol throughout"
          ]
        },
        {
          title: "AFFECTED COMPONENTS",
          items: [
            "payment-service (src/services/payment/) - Core processing",
            "merchant-dashboard (src/apps/dashboard/) - UI updates",
            "reporting-service (src/services/reporting/) - Analytics",
            "merchant-api (src/api/merchant/) - API endpoints"
          ]
        },
        {
          title: "ESTIMATED EFFORT",
          items: [
            "Backend: 2-3 weeks (Stripe already supports this)",
            "Frontend: 1-2 weeks (currency formatting, selectors)",
            "Testing: 1 week (payment flows per currency)",
            "Total: 4-6 weeks for MVP with 2 engineers"
          ]
        }
      ],
      recommendation: "This is very feasible. Stripe does the heavy lifting. Main work is UI and making currency configurable per merchant."
    }
  },
  {
    id: 4,
    type: "pm", 
    content: "That sounds doable. Let's plan this out - can you help me break it down into tickets?",
    timestamp: new Date(Date.now() - 12 * 60 * 1000)
  },
  {
    id: 5,
    type: "ai",
    content: "Absolutely! Let me ask a few questions to scope this properly.",
    timestamp: new Date(Date.now() - 11.5 * 60 * 1000),
    planningMode: true,
    planningContext: {
      feature: "Multi-Currency Support",
      status: "gathering-requirements"
    },
    question: {
      text: "Which currencies should we support for MVP? Based on merchant requests, I see EUR, GBP, CAD, AUD, and JPY are most requested.",
      context: "Supporting fewer currencies initially means faster delivery and simpler testing.",
      options: [
        { id: "a", label: "EUR and GBP only (most requested)", value: "eur-gbp", recommended: true },
        { id: "b", label: "EUR, GBP, CAD, AUD (top 4)", value: "top-4" },
        { id: "c", label: "All 5 currencies for complete coverage", value: "all-5" },
        { id: "d", label: "Custom selection", value: "custom" }
      ]
    }
  },
  {
    id: 6,
    type: "pm",
    content: "A: EUR and GBP only (most requested)",
    timestamp: new Date(Date.now() - 10 * 60 * 1000)
  },
  {
    id: 7,
    type: "ai",
    content: "Perfect - EUR and GBP for MVP keeps scope tight.",
    timestamp: new Date(Date.now() - 9.5 * 60 * 1000),
    planningMode: true,
    question: {
      text: "For currency selection, should merchants set a default currency for their account, or choose per-transaction?",
      context: "Looking at your merchant settings (src/apps/dashboard/settings/), you have an account-level settings pattern we could follow.",
      options: [
        { id: "a", label: "Account-level default only (simpler UX)", value: "account-only" },
        { id: "b", label: "Account-level default, but allow override per transaction", value: "default-override", recommended: true },
        { id: "c", label: "Per-transaction selection only (maximum flexibility)", value: "per-transaction" },
        { id: "d", label: "Multiple currency support with auto-detection", value: "auto-detect" }
      ]
    }
  },
  {
    id: 8,
    type: "pm",
    content: "B: Account-level default, but allow override per transaction",
    timestamp: new Date(Date.now() - 8 * 60 * 1000)
  },
  {
    id: 9,
    type: "ai",
    content: "Excellent choice - default with override provides flexibility. One more question:",
    timestamp: new Date(Date.now() - 7.5 * 60 * 1000),
    planningMode: true,
    question: {
      text: "Should we show real-time exchange rates to merchants, or just process in their selected currency?",
      context: "Real-time rates add complexity (need FX data feed) but provide transparency.",
      options: [
        { id: "a", label: "Just process in selected currency (MVP approach)", value: "process-only", recommended: true },
        { id: "b", label: "Show static daily rates (updated once per day)", value: "static-daily" },
        { id: "c", label: "Show real-time rates with live updates", value: "real-time" },
        { id: "d", label: "Show rates only in reporting, not during checkout", value: "reporting-only" }
      ]
    }
  },
  {
    id: 10,
    type: "pm",
    content: "A: Just process in selected currency (MVP approach)",
    timestamp: new Date(Date.now() - 6 * 60 * 1000)
  },
  {
    id: 11,
    type: "ai",
    content: "Perfect. I have enough context now. Let me generate the epic breakdown based on our discussion and the codebase.",
    timestamp: new Date(Date.now() - 5.5 * 60 * 1000),
    planningMode: true,
    planningContext: {
      feature: "Multi-Currency Support",
      status: "generating"
    }
  },
  {
    id: 12,
    type: "ai",
    content: "Here's the epic structure based on our discussion:",
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    planningMode: true,
    planningContext: {
      feature: "Multi-Currency Support",
      status: "complete"
    },
    generatedEpic: {
      title: "Multi-Currency Payment Support (MVP)",
      description: "Enable merchants to accept payments in EUR and GBP with account-level currency settings and per-transaction override.",
      totalPoints: 21,
      linkedOKR: "KR 3.1: Reduce time-to-first-transaction",
      stories: [
        {
          id: "story-1",
          title: "Merchant currency configuration",
          description: "As a merchant, I can set my default currency and enable additional currencies for my account.",
          points: 5,
          tasks: [
            "Add currency settings to merchant model (src/models/merchant.ts)",
            "Create currency config API endpoints",
            "Build currency settings UI in merchant dashboard",
            "Add validation for supported currencies"
          ],
          acceptanceCriteria: [
            "Merchant can select default currency (USD, EUR, GBP)",
            "Merchant can enable/disable each currency",
            "Settings persist and sync across sessions",
            "Validation prevents unsupported currency selection"
          ]
        },
        {
          id: "story-2", 
          title: "Multi-currency payment processing",
          description: "As a customer, I can pay in the merchant's supported currencies.",
          points: 8,
          tasks: [
            "Update payment-service to accept currency parameter",
            "Configure Stripe for multi-currency processing",
            "Update transaction model to store currency",
            "Modify payment webhook handlers for currency",
            "Add currency to payment confirmation flow"
          ],
          acceptanceCriteria: [
            "Payments process correctly in EUR and GBP",
            "Transaction records include currency information",
            "Stripe settlement happens in merchant's default currency",
            "Payment receipts show correct currency symbol"
          ],
          technicalNotes: [
            "Stripe already supports this - update src/services/payment/stripe.ts",
            "Need to update PaymentIntent creation with currency param",
            "Webhook handler needs currency extraction from event"
          ]
        },
        {
          id: "story-3",
          title: "Currency selection in checkout",
          description: "As a customer, I can see prices and pay in my preferred currency.",
          points: 5,
          tasks: [
            "Add currency selector to checkout UI",
            "Update price display components for multi-currency",
            "Implement currency formatting utilities",
            "Store customer currency preference"
          ],
          acceptanceCriteria: [
            "Checkout shows currency selector when merchant supports multiple",
            "Prices update when currency changes",
            "Currency symbol and formatting correct for each currency",
            "Selected currency persists through checkout flow"
          ]
        },
        {
          id: "story-4",
          title: "Multi-currency reporting",
          description: "As a merchant, I can view my transactions and revenue by currency.",
          points: 3,
          tasks: [
            "Update reporting queries for currency grouping",
            "Add currency filter to transactions list",
            "Show currency breakdown in revenue dashboard",
            "Export functionality includes currency data"
          ],
          acceptanceCriteria: [
            "Transaction list shows currency for each transaction",
            "Revenue dashboard shows breakdown by currency",
            "Can filter transactions by currency",
            "CSV export includes currency column"
          ]
        }
      ]
    },
    actions: ["export-jira", "refine", "link-okr"]
  }
];

// Demo responses for interactive chat
export const demoResponses = {
  "refine": {
    type: "ai",
    content: "Sure, what would you like to change?",
    planningMode: true,
    question: {
      text: "How would you like to refine this epic?",
      context: "I can help you adjust scope, split stories, or modify acceptance criteria.",
      options: [
        { id: "a", label: "Split Story 2 into smaller pieces (it's 8 points)", value: "split", recommended: true },
        { id: "b", label: "Add more detailed acceptance criteria", value: "criteria" },
        { id: "c", label: "Adjust story points based on team velocity", value: "points" },
        { id: "d", label: "Add or remove tasks from stories", value: "tasks" }
      ]
    }
  },
  "export-jira": {
    type: "ai", 
    content: "I'll create these tickets in Jira now.",
    planningMode: true,
    exportResult: {
      success: true,
      epicKey: "PAY-520",
      stories: [
        { key: "PAY-521", title: "Merchant currency configuration" },
        { key: "PAY-522", title: "Multi-currency payment processing" },
        { key: "PAY-523", title: "Currency selection in checkout" },
        { key: "PAY-524", title: "Multi-currency reporting" }
      ]
    },
    actions: ["view-in-jira", "add-to-sprint"]
  },
  "split-story": {
    type: "ai",
    content: "I'll split Story 2 (Multi-currency payment processing) into two smaller stories:",
    planningMode: true,
    splitResult: {
      original: "Multi-currency payment processing (8 points)",
      newStories: [
        { title: "Stripe multi-currency integration", points: 5 },
        { title: "Payment flow currency handling", points: 3 }
      ]
    }
  }
};

// Helper function to calculate overall progress
export const calculateOverallProgress = () => {
  const allKRs = objectives.flatMap(obj => obj.keyResults);
  const totalProgress = allKRs.reduce((sum, kr) => sum + kr.progress, 0);
  return Math.round(totalProgress / allKRs.length);
};

// Helper function to get ticket status distribution
export const getStatusDistribution = () => {
  const distribution = {
    done: 0,
    inProgress: 0,
    blocked: 0,
    notStarted: 0
  };
  
  tickets.forEach(ticket => {
    distribution[ticket.status]++;
  });
  
  return distribution;
};

// Helper function to count at-risk KRs
export const getAtRiskCount = () => {
  return objectives.flatMap(obj => obj.keyResults)
    .filter(kr => kr.status === 'at-risk' || kr.status === 'behind').length;
};

// Helper function to count blocked tickets
export const getBlockedCount = () => {
  return tickets.filter(t => t.status === 'blocked').length;
};
