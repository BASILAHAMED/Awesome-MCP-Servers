# Awesome MCP Servers

[![GitHub stars](https://img.shields.io/github/stars/BASILAHAMED/Awesome-MCP-Servers?style=social)](https://github.com/BASILAHAMED/Awesome-MCP-Servers)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](CONTRIBUTING.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Last Updated](https://img.shields.io/badge/last%20updated-auto?style=flat)](https://github.com/BASILAHAMED/Awesome-MCP-Servers/commits/main)

> **Curated list of Model Context Protocol (MCP) servers** - tools that extend Claude Desktop, Cursor, Windsurf, and other MCP clients with custom capabilities.

MCP servers enable AI assistants to **access your data**, **execute tools**, and **interact with external systems** safely and securely. This list helps you discover the best MCP servers for your workflow.

---

## 📊 Stats

- **Total Servers**: 62+
- **Categories**: 13
- **Last Updated**: 2026-03-12
- **Maintained by**: [Basil Ahamed](https://github.com/BASILAHAMED)

---

## 🎯 Quick Start

1. **Install an MCP Client**: [Claude Desktop](https://claude.ai/download), [Cursor](https://cursor.sh), or [Windsurf](https://codeium.com/windsurf)
2. **Choose a server** from the categories below
3. **Follow setup instructions** in the server's README
4. **Restart your client** and start using!

---

## 🗂️ Categories

### 🔍 Search & Data Access

- [**mcp-server-filesystem**](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) ⭐ 2,100 - File system access for reading and writing files *(Official Reference)*
- [**mcp-server-git**](https://github.com/modelcontextprotocol/servers/tree/main/src/git) ⭐ 1,800 - Git repository operations (clone, commit, push, pull) *(Official Reference)*
- [**mcp-server-sqlite**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/sqlite) ⭐ 1,200 - Query SQLite databases with SQL *(Archived)*
- [**mcp-server-postgres**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/postgres) ⭐ 950 - PostgreSQL database access and querying *(Archived)*
- [**mcp-server-mysql**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/mysql) ⭐ 600 - MySQL database connectivity and queries *(Archived)*
- [**mcp-server-mongodb**](https://github.com/mongodb-js/mongodb-mcp-server) ⭐ 953 - MongoDB document database access *(Community)*
- [**mcp-server-supabase**](https://github.com/supabase-community/supabase-mcp) ⭐ 500 - Supabase PostgREST and real-time subscriptions *(Community)*
- [**mcp-server-firebase**](https://github.com/firebase/firebase-mcp-server) ⭐ 450 - Firebase Realtime Database and Firestore *(Removed - No active implementation)*
- [**mcp-server-everything**](https://github.com/modelcontextprotocol/servers/tree/main/src/everything) ⭐ 550 - Windows Everything search integration *(Official Reference)*

### 🌐 Web & APIs

- [**mcp-server-http**](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch) ⭐ 1,600 - Make HTTP requests to any REST API *(Official Reference)*
- [**mcp-server-github**](https://github.com/github/github-mcp-server) ⭐ 1,800 - Full GitHub API integration (issues, PRs, repos) *(Official)*
- [**mcp-server-google-drive**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/gdrive) ⭐ 800 - Google Drive file management and search *(Archived)*

### 📧 Communication

- [**mcp-server-slack**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/slack) ⭐ 1,100 - Send messages, read channels, interact with Slack *(Archived - Now maintained by Zencoder)*
- [**mcp-server-telegram**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/telegram) ⭐ 600 - Telegram bot integration for messaging *(Archived)*
- [**mcp-server-email**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/email) ⭐ 700 - Send and receive emails via SMTP/IMAP *(Archived)*
- [**mcp-server-sendgrid**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/sendgrid) ⭐ 350 - Send transactional emails via SendGrid *(Archived)*
- [**mcp-server-twilio**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/twilio) ⭐ 400 - Send SMS and make calls via Twilio *(Archived)*
- [**mcp-server-discord**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/discord) ⭐ 500 - Discord bot integration for messaging and channels *(Archived)*

### 🗃️ Knowledge & Memory

- [**mcp-server-pinecone**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/pinecone) ⭐ 1,200 - Vector database for RAG and semantic search *(Archived)*
- [**mcp-server-weaviate**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/weaviate) ⭐ 900 - Weaviate vector store for knowledge graphs *(Archived)*
- [**mcp-server-redis**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/redis) ⭐ 850 - Redis cache and storage for fast access *(Archived)*

### 🤖 AI & LLMs

- [**mcp-server-openai**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/openai) ⭐ 1,500 - Direct OpenAI API access (GPT-4, DALL-E, Whisper) *(Archived)*
- [**mcp-server-anthropic**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/anthropic) ⭐ 1,300 - Claude API integration with streaming *(Archived)*
- [**mcp-server-local-ai**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/local-ai) ⭐ 1,100 - Run local LLMs via Ollama, LM Studio, LocalAI *(Archived)*

### 📊 Analytics & Monitoring

- [**mcp-server-grafana**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/grafana) ⭐ 600 - Query Grafana dashboards and metrics *(Archived)*
- [**mcp-server-prometheus**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/prometheus) ⭐ 550 - Prometheus metrics querying and alerting *(Archived)*
- [**mcp-server-datadog**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/datadog) ⭐ 450 - Datadog API integration for monitoring *(Archived)*

### 🛠️ DevOps

- [**mcp-server-docker**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/docker) ⭐ 1,400 - Manage Docker containers, images, volumes *(Archived)*
- [**mcp-server-k8s**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/kubernetes) ⭐ 1,000 - Kubernetes cluster operations and management *(Archived)*
- [**mcp-server-aws**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/aws) ⭐ 900 - AWS services (S3, EC2, Lambda, DynamoDB) *(Archived)*
- [**mcp-server-azure**](https://github.com/microsoft/mcp) ⭐ 2,800 - Microsoft Azure services (all in one): storage, compute, databases, AI, and more *(Official)*
- [**mcp-server-azure-devops**](https://github.com/Tiberriver256/mcp-server-azure-devops) ⭐ 600 - Azure DevOps integration: work items, repos, pipelines, test plans, wikis *(Official)*
- [**mcp-server-fabric**](https://github.com/microsoft/mcp) ⭐ 450 - Microsoft Fabric: data engineering, analytics, and business intelligence *(Official)*

### 💰 Finance & Crypto

- [**mcp-server-stripe**](https://github.com/stripe/stripe-mcp-server) ⭐ 800 - Stripe payment processing and customer management *(Official)*
- [**mcp-server-coinbase**](https://github.com/base/base-mcp) ⭐ 400 - Cryptocurrency prices and trading via Coinbase/Base *(Community)*
- [**mcp-server-stock**](https://github.com/financial-datasets/mcp-server) ⭐ 350 - Stock market prices and financial data *(Official)*

### 🎨 Creative & Media

- [**mcp-server-canvas**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/canvas) ⭐ 750 - Image generation using DALL-E, Midjourney APIs *(Archived)*
- [**mcp-server-video**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/video) ⭐ 350 - Video processing, transcription, analysis *(Archived)*

### 📚 Learning & Research

- [**mcp-server-arxiv**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/arxiv) ⭐ 500 - Search and retrieve academic papers from arXiv *(Archived)*
- [**mcp-server-wikipedia**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/wikipedia) ⭐ 450 - Wikipedia search and article retrieval *(Archived)*

### 🏢 Enterprise

- [**mcp-server-dynamics365-erp**](https://github.com/d365devgit/d365fo-mcp-server-v1) ⭐ 250 - Microsoft Dynamics 365 ERP integration (Finance & SCM) - Public Preview *(Official)*
- [**mcp-server-salesforce**](https://github.com/salesforcecli/mcp) ⭐ 400 - Salesforce CRM data access and operations *(Official)*
- [**mcp-server-jira**](https://github.com/atlassian/atlassian-mcp-server) ⭐ 600 - Jira issue tracking and project management *(Official)*
- [**mcp-server-notion**](https://github.com/makenotion/notion-mcp-server) ⭐ 900 - Notion workspace pages and databases *(Official)*
- [**mcp-server-linear**](https://github.com/tacticlaunch/mcp-linear) ⭐ 550 - Linear issue tracking and project management *(Community)*
- [**mcp-server-clickup**](https://github.com/TaazKareem/clickup-mcp-server) ⭐ 300 - ClickUp task and project management *(Community)*

### 🔧 Utilities

- [**mcp-server-calculator**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/calculator) ⭐ 700 - Advanced math and scientific calculations *(Archived)*
- [**mcp-server-time**](https://github.com/modelcontextprotocol/servers/tree/main/src/time) ⭐ 550 - Timezone conversions, scheduling, timestamps *(Official Reference)*
- [**mcp-server-secrets**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/secrets) ⭐ 400 - Secure secret and credential management *(Archived)*
- [**mcp-server-calendar**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/calendar) ⭐ 450 - Google Calendar integration and scheduling *(Archived)*
- [**mcp-server-todoist**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/todoist) ⭐ 300 - Todoist task management integration *(Archived)*
- [**mcp-server-rss**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/rss) ⭐ 250 - RSS feed reader and aggregator *(Archived)*
- [**mcp-server-weather**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/weather) ⭐ 400 - Weather forecasts and current conditions *(Archived)*
- [**mcp-server-csv**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/csv) ⭐ 350 - Parse, query, and manipulate CSV files *(Archived)*
- [**mcp-server-excel**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/excel) ⭐ 300 - Read and write Excel files (.xlsx, .xls) *(Archived)*
- [**mcp-server-pdf**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/pdf) ⭐ 400 - Extract text and metadata from PDF files *(Archived)*

### 🧪 Experimental

- [**mcp-server-playwright**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/puppeteer) ⭐ 6,100 - Automate browser testing and web scraping with Playwright *(Archived)*
- [**mcp-server-browser**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/puppeteer) ⭐ 650 - Browser automation via Puppeteer *(Archived)*
- [**mcp-server-voice**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/voice) ⭐ 300 - Speech-to-text and text-to-speech *(Archived)*
- [**mcp-server-sequential-thinking**](https://github.com/modelcontextprotocol/servers/tree/main/src/sequential-thinking) ⭐ 800 - Chain-of-thought reasoning and step-by-step thinking *(Official Reference)*
- [**mcp-server-code-interpreter**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/code-interpreter) ⭐ 1,200 - Execute Python, JavaScript, and other code *(Archived)*
- [**mcp-server-websearch**](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/websearch) ⭐ 900 - Google and Bing web search integration *(Archived)*



---

## 🎖️ Featured Servers

| Server | Category | Stars | Why It's Great |
|--------|----------|-------|----------------|
| [mcp-server-playwright](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/puppeteer) | Experimental | ⭐ 6,100 | Popular choice with strong community support |
| [mcp-server-azure](https://github.com/microsoft/mcp) | DevOps | ⭐ 2,800 | Official Microsoft Azure integration |
| [mcp-server-filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) | Search & Data Access | ⭐ 2,100 | Official reference implementation |


---

## 🤝 Contributing

We welcome contributions! Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a PR.

**Quick contribution**:
1. Fork the repo
2. Add your server to `data/servers.json`
3. Run `npm run generate-readme` to update README
4. Submit PR with proper formatting

---

## 📚 Resources

- [MCP Official Documentation](https://modelcontextprotocol.io)
- [MCP Specification](https://github.com/modelcontextprotocol/specification)
- [Build your first MCP server](https://modelcontextprotocol.io/quickstart/server)
- [MCP Clients Comparison](https://github.com/modelcontextprotocol/clients)

---

## 📈 Trending This Week

*Automatically updated via GitHub Actions*
- 🔥 [mcp-server-pdf](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/pdf) - Extract text and metadata from PDF files
- 🚀 [mcp-server-github](https://github.com/github/github-mcp-server) - Full GitHub API integration (issues, PRs, repos)
- ⭐ [mcp-server-stripe](https://github.com/stripe/stripe-mcp-server) - Stripe payment processing and customer management


---

## ⚠️ Disclaimer

This list is **community-maintained**. We do not endorse or guarantee the quality/security of any server. Always review code before installing. Use at your own risk.

---

**Made with ❤️ by the MCP community**