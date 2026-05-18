# Security Policy

## Supported Versions

Only the latest major version receives security updates.

| Version | Supported |
| ------- | --------- |
| 1.x     | ✅        |
| < 1.0   | ❌        |

## Reporting a Vulnerability

**Please do not open a public GitHub issue for security vulnerabilities.**

Use [GitHub Private Vulnerability Reporting](https://github.com/zerobertoo/r6operators/security/advisories/new) to report issues privately.
You can expect a response within **7 days**.

Include in your report:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

## Scope

This package is a collection of SVG icons and operator metadata. It contains no authentication, user data, or server-side logic. Likely relevant vulnerabilities include:

- Malicious SVG content (XSS via inline scripts or external references)
- Dependency vulnerabilities (flagged automatically via Dependabot)

## Out of Scope

- Issues in third-party dependencies (report directly to those maintainers)
- Vulnerabilities in applications that consume this package
