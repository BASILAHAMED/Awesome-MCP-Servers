# Contributing to Awesome MCP Servers

Thank you for your interest in contributing! This guide will help you add new MCP servers to the list.

---

## 📝 How to Add a Server

### 1. Check if the server already exists
Search the `data/servers.json` file to avoid duplicates.

### 2. Gather server information
You'll need:
- **Name**: Server name (e.g., `mcp-server-fs`)
- **GitHub URL**: Link to the repository
- **Description**: Short, clear description (max 100 chars)
- **Category**: Choose from existing categories or suggest a new one
- **Stars**: Current GitHub star count (optional but helpful)
- **Language**: Primary programming language
- **Clients**: Which MCP clients it works with (Claude Desktop, Cursor, Windsurf, etc.)
- **Setup time**: Estimated setup time (e.g., "5 min", "30 min")
- **Maintainer**: Who maintains it (org or individual)
- **Last updated**: Date of last commit (YYYY-MM-DD)
- **Production ready**: `true` or `false` (if stable for production use)

### 3. Add to `data/servers.json`

```json
{
  "name": "mcp-server-fs",
  "github_url": "https://github.com/modelcontextprotocol/server-fs",
  "description": "File system access for reading and writing files",
  "category": "Search & Data Access",
  "stars": 2100,
  "language": "TypeScript",
  "clients": ["Claude Desktop", "Cursor", "Windsurf"],
  "setup_time": "5 min",
  "maintainer": "Anthropic",
  "last_updated": "2025-03-01",
  "production_ready": true
}
```

### 4. Run the README generator
```bash
npm run generate-readme
```

This will automatically update `README.md` with your new server in the correct category.

### 5. Submit a Pull Request
- Use the PR template below
- Include a link to the server repository
- Verify the server is actively maintained (last updated within 6 months)
- Ensure the description is accurate and helpful

---

## 🎯 Quality Guidelines

We only accept servers that meet these criteria:

✅ **Active maintenance** - Last commit within 6 months  
✅ **Clear documentation** - Has a README with setup instructions  
✅ **Functional** - Actually works with at least one MCP client  
✅ **Secure** - No hardcoded secrets, uses proper auth  
✅ **Unique** - Not a duplicate of an existing server  

We may reject servers that:
- ❌ Are abandoned or broken
- ❌ Have security vulnerabilities
- ❌ Duplicate existing functionality without improvement
- ❌ Contain malware or suspicious code

---

## 🏷️ Category Guidelines

Choose the most appropriate category:

| Category | What belongs here |
|----------|-------------------|
| Search & Data Access | File systems, databases, search tools |
| Web & APIs | HTTP clients, API integrations, web services |
| Communication | Slack, Discord, Telegram, email, SMS |
| Knowledge & Memory | Vector DBs, Redis, memory stores |
| AI & LLMs | OpenAI, Anthropic, local LLM servers |
| Analytics & Monitoring | Grafana, Prometheus, Datadog |
| DevOps | Docker, Kubernetes, AWS, infrastructure |
| Finance & Crypto | Stripe, payment processing, crypto APIs |
| Creative & Media | Image/video generation, audio processing |
| Learning & Research | ArXiv, Wikipedia, academic tools |
| Enterprise | Salesforce, Jira, Notion, business apps |
| Utilities | Calculators, time, secrets, generic tools |
| Experimental | Bleeding edge, beta, untested servers |

**Need a new category?** Propose it in your PR with 3+ example servers.

---

## 📦 PR Template

```markdown
## New Server

**Name**: mcp-server-example  
**GitHub**: https://github.com/owner/mcp-server-example  
**Category**: (choose from above)

### Why this server should be added

Brief explanation of what it does and why it's valuable to the MCP community.

### Verification

- [ ] Server repository exists and is accessible
- [ ] README has clear setup instructions
- [ ] Last commit within 6 months
- [ ] Works with at least one MCP client
- [ ] No security issues detected
- [ ] Description is accurate and concise (<100 chars)

### Additional Notes

Any other information (e.g., production use case, comparisons to similar servers)
```

---

## 🛠️ Local Development

### Setup
```bash
cd awesome-mcp-servers
npm install
```

### Validate servers.json
```bash
npm run validate
```

### Generate README from data/servers.json
```bash
npm run generate-readme
```

### Watch mode (auto-update README on changes)
```bash
npm run dev
```

---

## 📊 Data Format

The `data/servers.json` file is the single source of truth. Format:

```json
{
  "servers": [
    {
      "name": "string (required)",
      "github_url": "string (required, full GitHub URL)",
      "description": "string (required, max 100 chars)",
      "category": "string (required, must match category)",
      "stars": "number (optional)",
      "language": "string (optional)",
      "clients": ["array of strings (optional)"],
      "setup_time": "string (optional, e.g., '5 min')",
      "maintainer": "string (optional)",
      "last_updated": "string (optional, YYYY-MM-DD)",
      "production_ready": "boolean (optional)",
      "notes": "string (optional)"
    }
  ],
  "categories": [
    {
      "name": "string",
      "description": "string",
      "icon": "string (emoji or icon name)"
    }
  ]
}
```

---

## 🎉 Recognition

Contributors will be:
- Listed in the README under "Contributors"
- Mentioned in release notes
- Given credit in social media announcements

---

## ❓ Questions?

Open an issue or ask in the [MCP Discord](https://discord.gg/modelcontextprotocol).

Thank you for helping build the MCP community! 🚀