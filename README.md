# Nexus - Product Manager Copilot

An intelligent copilot that gives Product Managers superpowers by unifying strategic context, execution data, and technical reality into a single conversational interface.

## Overview

Nexus bridges the gap between strategy (OKRs), execution (Jira tickets), and technical reality (codebase) to enable faster, more informed product decisions.

### Core Capabilities

1. **OKR Progress Dashboard** - Real-time visibility into strategic progress with automatic ticket mapping
2. **Code-Aware Chat** - Ask feasibility and impact questions, get grounded answers in minutes
3. **Interactive Planning** - AI-assisted epic/story breakdown with code-informed estimates

## Repository Structure

```
Nexus/
├── writeup.md          # Comprehensive vision document with mockups
├── demo/               # Interactive React demo application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── data/
│   └── README.md
└── README.md           # This file
```

## Live Demo

🚀 **[View Live Demo](https://your-app.onrender.com)** (Deploy to see it live!)

## Quick Start

### 1. Read the Vision Document

```bash
cat writeup.md
```

Or open `writeup.md` in your favorite markdown viewer to see:
- Problem statement and vision
- Detailed feature descriptions with mockups
- Architecture diagrams
- User flows
- Sample interactions

### 2. Run the Interactive Demo

```bash
cd demo
npm install
npm run dev
```

Open http://localhost:3000 to explore:
- Live OKR dashboard with charts
- Code-aware chat interface
- Interactive planning mode

## Demo Features

The demo uses realistic mock data for a fintech product ("PayFlow") to showcase:

- **3 Objectives** with 8 Key Results
- **40+ tickets** across multiple epics
- Real-time status tracking
- Sprint velocity trends
- Risk alerts and blockers
- Pre-loaded chat conversations
- AI-guided planning session

## Technology Vision

**Frontend**: React + Tailwind CSS for web interface

**Backend**: Python (FastAPI) with Claude Agent SDK

**Agent Layer**: Claude Code Agent SDK for skills and orchestration

**Tool Access**: MCP (Model Context Protocol) servers for:
- Jira (tickets, epics, sprints)
- Git repositories (codebase indexing)
- Miro (visual plans)
- Analytics platforms
- Document parsing (PPTs, PDFs)

**Storage**:
- PostgreSQL for project data, mappings, user state
- Vector database (pgvector/Pinecone) for code/doc embeddings

## Key Differentiators

- **Code-Grounded Responses**: Feasibility estimates based on actual codebase analysis, not guesses
- **Automatic OKR-Ticket Mapping**: Semantic understanding of ticket descriptions
- **Real-Time Risk Detection**: Proactive alerts for blocked work and at-risk objectives
- **Interactive Planning**: Collaborative feature breakdown with AI that knows your architecture

## Target User

Product Managers who:
- Manage 1-3 products/services
- Work with multiple engineering teams
- Need to context-switch between strategic and tactical work
- Value speed and accuracy in planning

## Deployment

### Deploy to Render

This project is configured for easy deployment on Render:

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New" → "Blueprint"
3. Connect your GitHub repository: `sanchit-quinnox/AI4PMs`
4. Render will automatically detect the `render.yaml` configuration
5. Click "Apply" to deploy

The app will be built and deployed automatically. Render will:
- Run `npm install` in the demo directory
- Build the React app with `npm run build`
- Serve the static files from `demo/dist`

### Manual Deployment (Alternative)

If you prefer manual setup:

1. Create a new Static Site on Render
2. Connect your repository
3. Set build settings:
   - **Build Command**: `cd demo && npm install && npm run build`
   - **Publish Directory**: `demo/dist`
4. Deploy!

## Next Steps

This is a **vision and demo project**. To move toward production:

1. **Integrate Claude Agent SDK** for real conversational AI
2. **Build MCP servers** for Jira, Git, and other data sources
3. **Implement code indexing** with semantic search
4. **Design database schema** for projects, OKRs, and mappings
5. **Add authentication** and workspace management
6. **Pilot with real PM workflows**

## Contributing

This is currently a vision/demo project. If you're interested in building this:

1. Review the vision document (`writeup.md`)
2. Run the demo to understand the UX
3. Consider which components to prototype first

## Contact

For questions or collaboration inquiries, please open an issue or reach out via GitHub.

---

**Note**: The demo uses pre-scripted responses. A production implementation would integrate with real data sources and LLM-powered analysis.

