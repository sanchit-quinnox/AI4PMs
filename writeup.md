# Nexus: Vision Document

## The Problem

Product Managers are the connective tissue between strategy and execution. Yet they operate in a world of fragmented tools and disconnected information:

**Strategic artifacts live in isolation.** OKRs are locked in slide decks and documents. Roadmaps exist as static images in Miro. There's no live connection between "what we said we'd achieve" and "what we're actually building."

**Technical feasibility is a black box.** When a PM wants to know "Can we add feature X? How hard would it be?" - the answer requires scheduling meetings, waiting for engineering bandwidth, and often getting rough guesses rather than informed estimates. This creates bottlenecks and delays in decision-making.

**Planning is manual and error-prone.** Breaking down a feature into epics, stories, and tasks is time-consuming. PMs often miss edge cases that engineers would catch, leading to incomplete tickets that require rework and back-and-forth.

**Progress tracking is retrospective, not real-time.** By the time a PM realizes an OKR is at risk, it's often too late. The connection between daily ticket movement and quarterly objectives is maintained manually, if at all.

---

## The Vision

**Nexus** is an intelligent copilot that gives Product Managers superpowers by unifying their strategic context, execution data, and technical reality into a single conversational interface.

Imagine a PM who can:

- See at a glance how every ticket in flight maps to their OKRs
- Ask "What would it take to add SSO support?" and get a grounded answer in minutes, not days
- Break down a feature into well-structured tickets through a collaborative dialogue with an AI that actually understands the codebase
- Get early warnings when execution is drifting from strategy

This isn't about replacing PM judgment - it's about removing the friction that slows it down.

---

## What We're Building

### 1. Unified Context Layer

The tool ingests and connects information from across the PM's ecosystem:

| Source | What It Provides |
|--------|------------------|
| OKR Documents (PPT, Docs, PDF) | Strategic objectives, key results, success metrics |
| Miro / Visual Planning Tools | Roadmaps, user flows, architectural diagrams |
| Jira / Ticket Systems | Epics, stories, tasks, status, descriptions, history |
| Analytics Platforms | Usage data, funnel metrics, adoption numbers |
| Code Repositories | Service structure, APIs, dependencies, complexity |

This isn't just data aggregation - the AI understands the relationships between these artifacts and can reason across them.

---

### 2. OKR Progress Dashboard

A living view of strategic progress grounded in execution reality.

**Example Dashboard View:**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│  PayFlow Q4 2024 OKRs                                    Last sync: 2m ago     │
├────────────────────────────────────────────────────────────────────────────────┤
│                                                                                │
│  ╔═══════════════════════════════════════════════════════════════════════╗    │
│  ║  SUMMARY METRICS                                                      ║    │
│  ╠═══════════════════════════════════════════════════════════════════════╣    │
│  ║  Overall Progress: 58%  │  At Risk: 2 KRs  │  Blocked: 3 tickets      ║    │
│  ║  Total Tickets: 40      │  Done: 24        │  In Progress: 11         ║    │
│  ╚═══════════════════════════════════════════════════════════════════════╝    │
│                                                                                │
│  ┌─ STATUS DISTRIBUTION ────┐  ┌─ SPRINT VELOCITY ─────────────────────┐     │
│  │                           │  │                                        │     │
│  │     Done: 24 (60%) ███    │  │  60 ┤                         ▓       │     │
│  │  In Prog: 11 (28%) ██     │  │  50 ┤            ▓       ▓    ░       │     │
│  │  Blocked:  3 (7%)  █      │  │  40 ┤     ▓      ░       ░    ░       │     │
│  │Not Start:  2 (5%)  █      │  │  30 ┤                                 │     │
│  │                           │  │     └─────────────────────────────    │     │
│  └───────────────────────────┘  │      S21   S22   S23   S24            │     │
│                                  │      ▓ Completed  ░ Planned           │     │
│                                  └────────────────────────────────────────┘     │
│                                                                                │
│  ◉ Objective 1: Improve payment success rate and reliability                  │
│    ├─ KR1: Increase payment success rate from 94% to 97%                      │
│    │   Progress: 75% ███████████████░░░░░  Current: 96.25% / Target: 97%     │
│    │   📊 12 tickets: 8 done • 3 in progress • 1 blocked                      │
│    │   ✅ Status: ON TRACK                                                    │
│    │                                                                           │
│    ├─ KR2: Reduce payment processing time from 2.5s to 1.5s                   │
│    │   Progress: 60% ████████████░░░░░░░░  Current: 1.9s / Target: 1.5s      │
│    │   📊 8 tickets: 5 done • 2 in progress • 1 not started                   │
│    │   ✅ Status: ON TRACK                                                    │
│    │                                                                           │
│    └─ KR3: Achieve 99.95% uptime for payment gateway                          │
│        Progress: 92% ██████████████████░░  Current: 99.93% / Target: 99.95%  │
│        📊 6 tickets: 5 done • 1 in progress                                   │
│        ✅ Status: ON TRACK                                                    │
│                                                                                │
│  ◉ Objective 2: Enable enterprise-grade security and compliance               │
│    ├─ KR1: Complete SOC 2 Type II certification                               │
│    │   Progress: 45% █████████░░░░░░░░░░░  Current: 45% / Target: 100%       │
│    │   📊 9 tickets: 2 done • 3 in progress • 2 blocked • 2 not started       │
│    │   ⚠️  Status: AT RISK                                                    │
│    │   🚫 SEC-204 blocked: Waiting for HR integration (4 days)                │
│    │                                                                           │
│    └─ KR2: Implement SSO for enterprise customers                             │
│        Progress: 30% ██████░░░░░░░░░░░░░░  Current: 30% / Target: 100%       │
│        📊 7 tickets: 1 done • 2 in progress • 1 blocked • 3 not started       │
│        ⚠️  Status: AT RISK                                                    │
│        🚫 AUTH-304 blocked: Dependency on user service refactor (3 days)      │
│                                                                                │
│  ◉ Objective 3: Scale merchant onboarding and activation                      │
│    ├─ KR1: Reduce time-to-first-transaction from 3 days to 1 day              │
│    │   Progress: 85% █████████████████░░░  Current: 1.3 days / Target: 1 day │
│    │   📊 10 tickets: 8 done • 2 in progress                                  │
│    │   ✅ Status: ON TRACK                                                    │
│    │                                                                           │
│    ├─ KR2: Increase merchant activation rate from 65% to 80%                  │
│    │   Progress: 20% ████░░░░░░░░░░░░░░░░  Current: 68% / Target: 80%        │
│    │   📊 4 tickets: 0 done • 1 in progress • 3 not started                   │
│    │   ⚠️  Status: BEHIND SCHEDULE                                            │
│    │                                                                           │
│    └─ KR3: Launch self-service onboarding portal                              │
│        Progress: 0% ░░░░░░░░░░░░░░░░░░░░  Current: 0% / Target: 100%         │
│        📊 0 tickets linked                                                    │
│        ⚠️  GAP: No execution items mapped to this KR                          │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

**What the dashboard enables:**

- **Summary Metrics**: At-a-glance view of overall progress, risks, and ticket distribution
- **Visual Analytics**: Status distribution pie chart and sprint velocity trends
- **Auto-mapping**: Tickets to OKRs based on semantic understanding of descriptions
- **Real-time Progress**: Live calculation from ticket status across Jira boards
- **Risk Detection**: Automatically identifies blocked items, velocity drops, and scope issues
- **Gap Analysis**: Highlights OKRs with insufficient execution coverage
- **Drill-down**: Click any KR to see linked tickets, assignees, and detailed history

---

### 3. Code-Aware Chat Interface

A conversational interface where PMs can ask questions and get answers grounded in the actual codebase, tickets, and plans.

**Chat Window:**

```
┌────────────────────────────────────────────────────────────────────────┐
│  💬 Code-Aware Chat                                    [PayFlow]        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  [🤖 AI] Welcome! I have context of your codebase, Jira tickets,      │
│          and OKRs. Ask me about feasibility, impact, or status.       │
│                                                                        │
│  ─────────────────────────────────────────────────────────────────    │
│                                                                        │
│  [You] Can we add cryptocurrency payments? What would that involve?   │
│                                                                   10:23│
│                                                                        │
│  [🤖 AI] Based on the codebase analysis, adding cryptocurrency        │
│          payment support would be a significant undertaking.          │
│          Here's what it would involve:                           10:23│
│                                                                        │
│          AFFECTED COMPONENTS                                          │
│          • payment-service (src/services/payment/)                    │
│          • transaction-service (src/services/transaction/)            │
│          • accounting-service (src/services/accounting/)              │
│          • merchant-dashboard (src/apps/dashboard/)                   │
│                                                                        │
│          NEW INFRASTRUCTURE NEEDED                                    │
│          • Crypto wallet integration (Coinbase Commerce, BitPay)      │
│          • Real-time price conversion service                         │
│          • Blockchain transaction monitoring                          │
│          • Separate settlement flow (10+ min vs instant)              │
│                                                                        │
│          ESTIMATED EFFORT                                             │
│          • Engineering: 12-16 weeks for 2 engineers                   │
│          • Compliance review: 4-6 weeks                               │
│          • Total: ~5 months for MVP                                   │
│                                                                        │
│          💡 RECOMMENDATION                                            │
│          This is a major initiative requiring dedicated focus.        │
│          Validate demand with top 20 merchants first.                 │
│                                                                        │
│  [You] That's helpful. What's currently blocking the SSO work?        │
│                                                                   10:25│
│                                                                        │
│  [🤖 AI] Looking at the SSO epic (AUTH-301 to AUTH-304), there's      │
│          one blocker:                                            10:25│
│                                                                        │
│          🚫 AUTH-304: Implement JIT user provisioning                 │
│             Status: BLOCKED (3 days)                                  │
│             Assignee: Marcus Johnson                                  │
│             Blocker: "Dependency on user service refactor"            │
│             Related: USER-156 (in progress, due Sprint 25)            │
│                                                                        │
│          The user-service refactor is 60% complete. Looking at        │
│          the code:                                                    │
│                                                                        │
│          ┌──────────────────────────────────────────────┐             │
│          │ // src/services/user/userService.ts          │             │
│          │ // TODO: Update createUser() to support      │             │
│          │ // external identity providers               │             │
│          │ export async function createUser(data) {     │             │
│          │   // Current: email/password only            │             │
│          │   return User.create(data);                  │             │
│          │ }                                             │             │
│          └──────────────────────────────────────────────┘             │
│                                                                        │
│          💡 ACTION ITEM                                               │
│          Sync with Sarah (working on USER-156) to unblock Marcus.     │
│          Expected resolution: Sprint 24 (current sprint).             │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│  Type your question...                                  [Send]         │
└────────────────────────────────────────────────────────────────────────┘
```

**Example Conversation 1: Feasibility Check**

```
PM: Can we add dark mode to the customer dashboard?

AI: Based on the codebase analysis, here's what dark mode would involve:

AFFECTED COMPONENTS:
• Dashboard UI (src/components/dashboard/) - 23 components
• Design system tokens (src/styles/tokens.ts) - currently hardcoded colors
• Chart library (using Recharts) - would need theme prop updates

CURRENT STATE:
The app doesn't have a theming system. Colors are defined inline or in 
scattered CSS files. There's no CSS variable infrastructure.

ESTIMATED EFFORT:
• If we add a proper theming system first: 2-3 weeks (recommended)
• If we do a quick pass with CSS overrides: 1 week (tech debt)

DEPENDENCIES:
• No backend changes required
• Would need design assets for dark color palette

Do you want me to break this down into a detailed epic structure?
```

**Example Conversation 2: Impact Analysis**

```
PM: We're thinking of deprecating the /api/v1/users endpoint. 
    What would break?

AI: I found 3 internal services and the mobile app consuming this endpoint:

INTERNAL CONSUMERS:
1. notification-service (src/services/notifications/userLookup.ts)
   - Calls GET /api/v1/users/{id} for user preferences
   - 847 calls/day average

2. billing-service (src/services/billing/customerSync.ts)  
   - Calls GET /api/v1/users?email={email} for customer matching
   - 2,100 calls/day average

3. analytics-pipeline (jobs/daily_user_export.py)
   - Bulk export via GET /api/v1/users with pagination
   - Runs nightly

EXTERNAL CONSUMERS:
• Mobile app v2.3 and below still uses this endpoint
• Based on analytics, ~12% of mobile users are on these versions

RECOMMENDATION:
Consider a 90-day deprecation window with v2 migration path. 
The billing-service dependency is the most complex to migrate.
```

**Example Conversation 3: Quick Context**

```
PM: What's the status of the checkout redesign work?

AI: Here's the current state of checkout redesign:

EPIC: PROJ-1234 "Checkout Flow Redesign"
Status: In Progress (Sprint 23)

BREAKDOWN:
✓ 5 stories completed (62 story points)
→ 2 stories in progress
  • PROJ-1245: Payment method selection (Dev: Sarah, Day 3)
  • PROJ-1247: Order summary component (Dev: Mike, blocked)
○ 3 stories not started (34 story points)

BLOCKERS:
PROJ-1247 is blocked waiting for design specs for the 
gift card redemption flow. Last comment was 4 days ago.

RELATED OKR:
This epic maps to KR2: "Reduce cart abandonment from 67% to 50%"
Currently that KR shows 45% progress.
```

---

### 4. Interactive Planning Mode (Unified with Chat)

Planning isn't a separate mode - it's a natural extension of the conversation. When you say "let's plan this out," the AI seamlessly enters planning mode within the same chat interface, asking clarifying questions conversationally and generating tickets inline.

**Example Planning Flow:**

```
┌────────────────────────────────────────────────────────────────────────┐
│  💬 Ask + Plan                                          [PayFlow]        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  [You] Can we add multi-currency support for international merchants? │
│                                                                   10:23│
│                                                                        │
│  [🤖 AI] Let me analyze the codebase for multi-currency support.      │
│                                                                   10:23│
│          ┌─────────────────────────────────────────────────────────┐  │
│          │ FEASIBILITY ANALYSIS                                    │  │
│          │                                                          │  │
│          │ CURRENT STATE                                           │  │
│          │ • payment-service handles USD only (hardcoded)          │  │
│          │ • Stripe integration already supports multi-currency    │  │
│          │ • Database schema has currency field but unused         │  │
│          │                                                          │  │
│          │ ESTIMATED EFFORT: 4-6 weeks with 2 engineers            │  │
│          │                                                          │  │
│          │ 💡 Very feasible. Stripe does the heavy lifting.        │  │
│          └─────────────────────────────────────────────────────────┘  │
│                                                                        │
│  [You] That sounds doable. Let's plan this out.                       │
│                                                                   10:25│
│                                                                        │
│  [🤖 AI] ╭─ Planning: Multi-Currency Support ─╮                       │
│          │ Status: Gathering requirements     │                       │
│          ╰────────────────────────────────────╯                       │
│                                                                        │
│          Great! A few questions to scope this properly:               │
│                                                                        │
│          ┌─────────────────────────────────────────────────────────┐  │
│          │ ❓ Which currencies should we support for MVP?          │  │
│          │                                                          │  │
│          │ Based on merchant requests, I see EUR, GBP, CAD, AUD,   │  │
│          │ and JPY are most requested.                             │  │
│          │                                                          │  │
│          │ (Supporting fewer initially = faster delivery)          │  │
│          └─────────────────────────────────────────────────────────┘  │
│                                                                        │
│  [You] Start with EUR and GBP. We can add more later.                 │
│                                                                   10:26│
│                                                                        │
│  [🤖 AI] Got it - EUR and GBP for MVP. Keeps scope tight.            │
│                                                                   10:26│
│          ┌─────────────────────────────────────────────────────────┐  │
│          │ ❓ For currency selection, should merchants set a       │  │
│          │    default at account level, or choose per-transaction? │  │
│          │                                                          │  │
│          │ Looking at your settings pattern in                     │  │
│          │ src/apps/dashboard/settings/, you have account-level   │  │
│          │ configs we could extend.                                │  │
│          └─────────────────────────────────────────────────────────┘  │
│                                                                        │
│  [You] Account-level default, but allow override per transaction.     │
│                                                                   10:27│
│                                                                        │
│  [🤖 AI] Perfect - default with override. Based on our discussion:   │
│                                                                   10:27│
│          ╭─ Planning: Multi-Currency Support ─╮                       │
│          │ Status: Complete                   │                       │
│          ╰────────────────────────────────────╯                       │
│                                                                        │
│          ┌─────────────────────────────────────────────────────────┐  │
│          │ EPIC: Multi-Currency Payment Support (MVP)              │  │
│          │ 4 stories • 21 points • Links to KR 3.1                 │  │
│          │                                                          │  │
│          │ ▸ Story 1: Merchant currency configuration     (5 pts) │  │
│          │ ▸ Story 2: Multi-currency payment processing   (8 pts) │  │
│          │ ▸ Story 3: Currency selection in checkout      (5 pts) │  │
│          │ ▸ Story 4: Multi-currency reporting            (3 pts) │  │
│          │                                                          │  │
│          │ [📤 Export to Jira] [✏️ Refine] [🔗 Link to OKR]        │  │
│          └─────────────────────────────────────────────────────────┘  │
│                                                                        │
│  [You] Story 2 seems big. Can you split it?                           │
│                                                                   10:28│
│                                                                        │
│  [🤖 AI] Sure! I'll split Story 2 into two smaller pieces:           │
│                                                                   10:28│
│          ┌─────────────────────────────────────────────────────────┐  │
│          │ STORY SPLIT                                             │  │
│          │                                                          │  │
│          │ ✕ Multi-currency payment processing (8 pts)            │  │
│          │                                                          │  │
│          │ + Stripe multi-currency integration (5 pts)            │  │
│          │ + Payment flow currency handling (3 pts)               │  │
│          │                                                          │  │
│          │ [📤 Export to Jira] [✏️ More Changes]                   │  │
│          └─────────────────────────────────────────────────────────┘  │
│                                                                        │
│  [You] Looks good. Export to Jira.                                    │
│                                                                   10:29│
│                                                                        │
│  [🤖 AI] ✅ Successfully created in Jira:                            │
│                                                                   10:29│
│          ┌─────────────────────────────────────────────────────────┐  │
│          │ ✓ Created in Jira                                       │  │
│          │                                                          │  │
│          │ EPIC: PAY-520                                           │  │
│          │                                                          │  │
│          │ PAY-521 - Merchant currency configuration               │  │
│          │ PAY-522 - Stripe multi-currency integration             │  │
│          │ PAY-523 - Payment flow currency handling                │  │
│          │ PAY-524 - Currency selection in checkout                │  │
│          │ PAY-525 - Multi-currency reporting                      │  │
│          │                                                          │  │
│          │ [🔗 View in Jira] [📅 Add to Sprint]                     │  │
│          └─────────────────────────────────────────────────────────┘  │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│  Type your message...                                      [Send]      │
└────────────────────────────────────────────────────────────────────────┘
```

**Key Design Principles:**

- **No separate planning page** - Planning is a mode within the chat, not a different screen
- **Natural language answers** - Respond conversationally, not by clicking options
- **Context preservation** - Feasibility analysis flows naturally into planning
- **Inline artifacts** - Generated epics appear in the chat, expandable for details
- **Iterative refinement** - Keep chatting to adjust: "split story 2", "add error handling task"
- **Action buttons** - Export to Jira, refine, link to OKR appear when relevant

---

## Why This Matters

### For the PM

- **Faster decisions**: Get feasibility answers in minutes, not days
- **Better visibility**: Always know how execution maps to strategy
- **Higher quality output**: AI-assisted planning catches gaps early
- **More time for strategy**: Less time on manual tracking and coordination

### For the Team

- **Clearer tickets**: Stories come with context and acceptance criteria
- **Fewer surprises**: Technical constraints surface during planning, not development
- **Better alignment**: Everyone can see how their work connects to OKRs

### For the Organization

- **Execution intelligence**: Real-time visibility into strategic progress
- **Reduced rework**: Better-scoped tickets mean less back-and-forth
- **Institutional knowledge**: Codebase understanding isn't locked in engineers' heads

---

## System Architecture

```mermaid
flowchart TB
    subgraph UserInterface["User Interface"]
        Dashboard["OKR Progress Dashboard"]
        Chat["Chat Interface"]
        Planner["Planning Workspace"]
    end

    subgraph AgentLayer["Agent Orchestration Layer"]
        Agent["Claude Agent SDK"]
        
        subgraph Skills["Agent Skills"]
            OKRSkill["OKR Mapper"]
            FeasibilitySkill["Feasibility Analyzer"]
            PlannerSkill["Ticket Planner"]
            IndexerSkill["Context Indexer"]
        end
    end

    subgraph MCPLayer["MCP Server Layer"]
        JiraMCP["Jira MCP"]
        MiroMCP["Miro MCP"]
        DocsMCP["Docs Parser"]
        CodeMCP["Codebase MCP"]
        AnalyticsMCP["Analytics MCP"]
    end

    subgraph DataSources["External Data Sources"]
        Jira[(Jira)]
        Miro[(Miro)]
        Docs[(PPT/Docs)]
        Repos[(Git Repos)]
        Analytics[(Analytics)]
    end

    subgraph Storage["Internal Storage"]
        DB[(PostgreSQL<br/>Projects, Mappings)]
        VectorDB[(Vector Store<br/>Embeddings)]
    end

    Dashboard --> Agent
    Chat --> Agent
    Planner --> Agent

    Agent --> Skills
    Skills --> MCPLayer

    JiraMCP --> Jira
    MiroMCP --> Miro
    DocsMCP --> Docs
    CodeMCP --> Repos
    AnalyticsMCP --> Analytics

    Agent --> DB
    Agent --> VectorDB
    IndexerSkill --> VectorDB
```

---

## User Flows

### Flow 1: Project Setup and Indexing

```mermaid
sequenceDiagram
    actor PM as Product Manager
    participant UI as Web App
    participant Agent as AI Agent
    participant MCP as MCP Servers
    participant Store as Data Store

    PM->>UI: Create new project workspace
    PM->>UI: Connect Jira (OAuth)
    UI->>MCP: Authenticate with Jira
    MCP-->>UI: Connection established
    
    PM->>UI: Upload OKR documents
    UI->>Agent: Parse and extract OKRs
    Agent->>Store: Store OKRs + embeddings
    
    PM->>UI: Add repository URLs
    UI->>Agent: Index codebase
    Agent->>MCP: Clone and analyze repos
    Agent->>Store: Store code index + embeddings
    
    Agent->>Agent: Auto-map tickets to OKRs
    Agent->>Store: Store mappings
    Agent-->>UI: Setup complete
    UI-->>PM: Dashboard ready
```

### Flow 2: Feasibility Check via Chat

```mermaid
sequenceDiagram
    actor PM as Product Manager
    participant Chat as Chat Interface
    participant Agent as AI Agent
    participant Code as Codebase MCP
    participant Jira as Jira MCP
    participant Vector as Vector Store

    PM->>Chat: "Can we add dark mode?"
    Chat->>Agent: Process query
    
    Agent->>Vector: Semantic search: theming, styles
    Vector-->>Agent: Relevant code chunks
    
    Agent->>Code: Analyze component structure
    Code-->>Agent: Components found, no theme system
    
    Agent->>Jira: Search related past tickets
    Jira-->>Agent: No prior theming work
    
    Agent->>Agent: Synthesize feasibility assessment
    Agent-->>Chat: Structured response with estimate
    Chat-->>PM: Display analysis + recommendations
```

### Flow 3: Interactive Planning Session

```mermaid
sequenceDiagram
    actor PM as Product Manager
    participant UI as Planning Workspace
    participant Agent as AI Agent
    participant Code as Codebase MCP
    participant Store as Data Store

    PM->>UI: "Plan SSO support for enterprise"
    UI->>Agent: Initialize planning session
    
    loop Clarification Loop
        Agent->>Agent: Identify knowledge gaps
        Agent-->>UI: Ask clarifying question
        UI-->>PM: Display question with options
        PM->>UI: Provide answer
        UI->>Agent: User response
    end
    
    Agent->>Code: Analyze auth system structure
    Code-->>Agent: Current auth implementation
    
    Agent->>Agent: Generate epic structure
    Agent-->>UI: Proposed Epic with Stories/Tasks
    UI-->>PM: Display structured breakdown
    
    PM->>UI: Approve and export
    UI->>Store: Save ticket definitions
    UI-->>PM: Ready for Jira export
```

---

## Data Flow Overview

```mermaid
flowchart LR
    subgraph Inputs["Data Inputs"]
        OKRs["OKR Documents"]
        Plans["Miro Plans"]
        Tickets["Jira Tickets"]
        Code["Code Repos"]
        Stats["Usage Analytics"]
    end

    subgraph Intelligence["AI Intelligence Layer"]
        Parse["Parse & Extract"]
        Index["Index & Embed"]
        Map["Map & Connect"]
        Reason["Reason & Respond"]
    end

    subgraph Outputs["PM Outputs"]
        Visibility["Strategic Visibility<br/>(Dashboard)"]
        Answers["Technical Answers<br/>(Chat)"]
        TicketsOut["Structured Tickets<br/>(Planning)"]
    end

    OKRs --> Parse
    Plans --> Parse
    Tickets --> Index
    Code --> Index
    Stats --> Index

    Parse --> Map
    Index --> Map
    Map --> Reason

    Reason --> Visibility
    Reason --> Answers
    Reason --> TicketsOut
```

---

## Technical Foundation

The system integrates three types of intelligence:

**1. Document Understanding**

OKRs, plans, and roadmaps are parsed and semantically indexed. The AI understands not just what the text says, but what it means in context.

**2. Code Intelligence**

Repositories are indexed with both structural analysis (AST parsing) and semantic embeddings. The AI can answer questions like "what calls this function" and "how complex would this change be."

**3. Execution State**

Jira (and similar tools) provide the real-time state of work. The AI maintains mappings between tickets and strategic objectives, updating as work progresses.

These three layers are unified through a conversational agent that can reason across all contexts simultaneously.

---

## Interactive Demo

A working demo application has been built to showcase these concepts in action. The demo includes:

- **Live Dashboard**: Interactive OKR progress tracking with charts and visualizations
- **Chat Interface**: Conversational UI with pre-loaded example queries
- **Planning Mode**: Step-by-step feature breakdown with AI-guided questions

**To run the demo:**

```bash
cd demo
npm install
npm run dev
```

The demo uses mock data for a fintech product called "PayFlow" to demonstrate realistic PM workflows.

**Technologies:** React 18, Vite, Tailwind CSS, Recharts, React Router

See `demo/README.md` for full details.