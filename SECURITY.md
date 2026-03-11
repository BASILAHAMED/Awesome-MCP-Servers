# Security Policy

## Supported Versions

We actively maintain the `main` branch. All contributions are reviewed for security.

| Version | Supported          |
| ------- | ------------------ |
| main    | ✅ Yes             |
| < main  | ❌ No              |

## Reporting a Vulnerability

We take security seriously. If you discover a security vulnerability in this repository, please report it responsibly.

**DO NOT** open a public GitHub issue for security vulnerabilities.

Instead, please email: **basil.ahamed@example.com** (replace with actual email)

We will:
- Acknowledge receipt of your report within 48 hours
- Provide an estimated timeline for a fix
- Keep you updated on the progress
- Credit you in the security advisory (if desired)
- Not disclose the vulnerability publicly until a fix is available

## Security Best Practices for MCP Servers

When using MCP servers, keep these security considerations in mind:

1. **Review code before installing** - Always check the source code of any MCP server
2. **Use minimal permissions** - Only grant the permissions the server needs
3. **Keep dependencies updated** - Regularly update server dependencies
4. **Monitor logs** - Watch for suspicious activity
5. **Use environment variables** - Never hardcode secrets
6. **Network security** - Be cautious with servers that make external network calls
7. **Sandbox when possible** - Run untrusted servers in isolated environments

## Security Updates

We will publish security advisories via GitHub Security Advisories when vulnerabilities are discovered and fixed.

## Dependencies

This repository itself has minimal dependencies. The MCP servers listed are third-party projects. We encourage all server maintainers to:
- Enable Dependabot or similar dependency update bots
- Regularly audit dependencies for vulnerabilities
- Use secret scanning tools
- Follow secure coding practices

## License

All code in this repository is MIT licensed. See LICENSE for details.