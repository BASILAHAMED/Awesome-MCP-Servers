#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Load servers data
const dataPath = path.join(__dirname, '..', 'data', 'servers.json');
const readmePath = path.join(__dirname, '..', 'README.md');

const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Count stats
const totalServers = data.servers.length;
const categories = data.categories.length;
const productionReady = data.servers.filter(s => s.production_ready).length;

// Get current date
const lastUpdated = new Date().toISOString().split('T')[0];

// Generate categories section
function generateCategories() {
  let output = '';
  
  data.categories.forEach(category => {
    output += `### ${category.icon} ${category.name}\n\n`;
    
    const serversInCategory = data.servers.filter(s => s.category === category.name);
    
    serversInCategory.forEach(server => {
      const starBadge = server.stars ? `⭐ ${server.stars.toLocaleString()}` : '';
      const prodBadge = server.production_ready ? '✅' : '⚠️';
      output += `- [**${server.name}**](${server.github_url}) ${starBadge} - ${server.description}\n`;
    });
    
    output += '\n';
  });
  
  return output;
}

// Generate featured servers table (top 3 by stars)
function generateFeatured() {
  const topServers = [...data.servers]
    .sort((a, b) => (b.stars || 0) - (a.stars || 0))
    .slice(0, 3);
  
  let output = '| Server | Category | Stars | Why It\'s Great |\n|--------|----------|-------|----------------|\n';
  
  topServers.forEach(server => {
    const reason = getFeaturedReason(server);
    output += `| [${server.name}](${server.github_url}) | ${server.category} | ⭐ ${(server.stars || 0).toLocaleString()} | ${reason} |\n`;
  });
  
  return output;
}

function getFeaturedReason(server) {
  if (server.name.includes('fs') || server.name.includes('git')) return 'Official, rock-solid core functionality';
  if (server.name.includes('github')) return 'Full API coverage, essential for developers';
  if (server.name.includes('pinecone') || server.name.includes('weaviate')) return 'Production-ready RAG with vector search';
  if (server.name.includes('docker') || server.name.includes('k8s')) return 'Essential for DevOps workflows';
  if (server.name.includes('openai') || server.name.includes('anthropic')) return 'Direct LLM access, no middleman';
  return 'Popular choice with strong community support';
}

// Generate trending section (random selection of 3)
function generateTrending() {
  const trending = [...data.servers]
    .filter(s => s.production_ready)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  
  let output = '*Automatically updated via GitHub Actions*\n';
  
  const emojis = ['🔥', '🚀', '⭐'];
  trending.forEach((server, index) => {
    const emoji = emojis[index];
    output += `- ${emoji} [${server.name}](${server.github_url}) - ${server.description}\n`;
  });
  
  return output;
}

// Read the base README template (without the dynamic sections)
const baseReadme = `# Awesome MCP Servers

[![GitHub stars](https://img.shields.io/github/stars/BASILAHAMED/Awesome-MCP-Servers?style=social)](https://github.com/BASILAHAMED/Awesome-MCP-Servers)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](CONTRIBUTING.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Last Updated](https://img.shields.io/badge/last%20updated-auto?style=flat)](https://github.com/BASILAHAMED/Awesome-MCP-Servers/commits/main)

> **Curated list of Model Context Protocol (MCP) servers** - tools that extend Claude Desktop, Cursor, Windsurf, and other MCP clients with custom capabilities.

MCP servers enable AI assistants to **access your data**, **execute tools**, and **interact with external systems** safely and securely. This list helps you discover the best MCP servers for your workflow.

---

## 📊 Stats

- **Total Servers**: ${totalServers}+
- **Categories**: ${categories}
- **Last Updated**: ${lastUpdated}
- **Maintained by**: [Basil Ahamed](https://github.com/BASILAHAMED)

---

## 🎯 Quick Start

1. **Install an MCP Client**: [Claude Desktop](https://claude.ai/download), [Cursor](https://cursor.sh), or [Windsurf](https://codeium.com/windsurf)
2. **Choose a server** from the categories below
3. **Follow setup instructions** in the server's README
4. **Restart your client** and start using!

---

## 🗂️ Categories

${generateCategories()}

---

## 🎖️ Featured Servers

${generateFeatured()}

---

## 🤝 Contributing

We welcome contributions! Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a PR.

**Quick contribution**:
1. Fork the repo
2. Add your server to \`data/servers.json\`
3. Run \`npm run generate-readme\` to update README
4. Submit PR with proper formatting

---

## 📚 Resources

- [MCP Official Documentation](https://modelcontextprotocol.io)
- [MCP Specification](https://github.com/modelcontextprotocol/specification)
- [Build your first MCP server](https://modelcontextprotocol.io/quickstart/server)
- [MCP Clients Comparison](https://github.com/modelcontextprotocol/clients)

---

## 📈 Trending This Week

${generateTrending()}

---

## ⚠️ Disclaimer

This list is **community-maintained**. We do not endorse or guarantee the quality/security of any server. Always review code before installing. Use at your own risk.

---

**Made with ❤️ by the MCP community**`;

// Write the README
fs.writeFileSync(readmePath, baseReadme);

console.log(`✅ README generated with ${totalServers} servers across ${categories} categories`);