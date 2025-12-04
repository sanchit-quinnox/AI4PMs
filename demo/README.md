# Nexus Demo

Interactive demo showcasing the vision for Nexus - an intelligent copilot for Product Managers.

## Features Demonstrated

### 1. OKR Dashboard
- Real-time progress tracking for objectives and key results
- Visual status distribution charts
- Sprint velocity trends
- Risk alerts and blocked ticket monitoring
- Expandable KR details with linked tickets

### 2. Unified Chat Interface (with Planning Mode)

A single conversational interface that handles everything:

**Feasibility Checks**
- Ask "Can we add X?" and get code-grounded analysis
- Impact assessment with affected components
- Effort estimates based on codebase complexity

**Status Queries**
- "What's blocking SSO?" → Shows blocker analysis
- "How are Q4 OKRs tracking?" → Summary with risk flags

**Interactive Planning** (like Claude Code)
- Say "Let's plan adding Apple Pay" to enter planning mode
- AI asks clarifying questions conversationally
- Answers in natural language, not clicking options
- Generated epics appear inline in the chat
- Action buttons for "Export to Jira", "Refine", etc.
- Continue chatting to adjust: "Split story 2 into smaller pieces"

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
cd demo
npm install
```

### Running the Demo

```bash
npm run dev
```

The app will open at `http://localhost:3000`

## Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Routing**: React Router v6

## Demo Conversation Flow

The demo includes a pre-loaded conversation that demonstrates:

1. **Feasibility question** → "Can we add multi-currency support?"
2. **Analysis response** → Affected components, effort estimate
3. **Planning trigger** → "Let's plan this out"
4. **Clarifying questions** → Currencies for MVP? Currency selection UX?
5. **Natural responses** → "EUR and GBP for MVP"
6. **Epic generation** → Full breakdown with stories, tasks, ACs
7. **Action buttons** → Export to Jira, Refine, Link to OKR

Try typing:
- "What's blocking the SSO work?" 
- "How are we tracking against Q4 OKRs?"
- "Let's plan adding Apple Pay support"

## Structure

```
src/
├── components/
│   ├── Dashboard/       # OKR cards, charts, alerts
│   └── Chat/
│       ├── ChatWindow.jsx    # Main chat interface
│       ├── Message.jsx       # Handles all message types
│       ├── EpicCard.jsx      # Inline epic display
│       ├── ActionButtons.jsx # Export, Refine, etc.
│       └── ExportResult.jsx  # Jira export confirmation
├── pages/
│   ├── DashboardPage.jsx
│   └── ChatPage.jsx          # Unified chat + planning
├── data/
│   └── mockData.js           # All mock data
└── App.jsx                   # Main app with routing
```

## Key Design Decisions

### Unified Chat vs Separate Planning Page

We intentionally merged chat and planning into one interface because:

1. **Natural flow**: "Can we do X?" naturally leads to "Let's plan X"
2. **Context preservation**: No context switch between pages
3. **Claude Code pattern**: Familiar to users of AI coding tools
4. **Conversational refinement**: "Make story 2 smaller" instead of form editing

### Planning Mode Indicators

- Cyan badge shows "Planning: [Feature Name]"
- Status updates: "Gathering requirements" → "Generating" → "Complete"
- Questions appear in styled cards within the conversation
- Generated epics are expandable inline

### Action Buttons

After epic generation, contextual actions appear:
- **Export to Jira** - Creates tickets (simulated)
- **Refine** - Opens refinement dialogue
- **Link to OKR** - Associates with strategic objective

## Note

This is a **vision demo** - AI responses are pre-scripted. A real implementation would integrate with:
- Claude Agent SDK for conversational AI
- MCP servers for Jira, Git, etc.
- Code indexing and semantic search
- Real-time ticket synchronization
