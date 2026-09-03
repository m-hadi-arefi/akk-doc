# Identity Service Specification

## Problem
In the legacy landscape, user credentials and authentication were fragmented across multiple disconnected systems (Tadark, desktop applications, spreadsheets), resulting in poor security, password reuse, lack of MFA, and zero centralized revocation.

## Purpose
The Identity Service provides a centralized, authoritative authentication platform for all employees, dealership agents, partners, and customers across Arian Khodro.

## Responsibilities
- Centralized user identity storage and lifecycle (provisioning, activation, suspension).
- Single Sign-On (SSO) via OpenID Connect (OIDC) and OAuth 2.0.
- Mandatory Multi-Factor Authentication (MFA) via SMS OTP or Authenticator Apps.
- Secure token issuance (Signed JWT Access & Refresh Tokens).
- Password policy enforcement and brute-force protection.

## Non-Responsibilities
- Does not evaluate domain permissions or business access rights (handled by [Authorization Service](../authorization/overview.md)).
- Does not store business data or vehicle records.

## Architecture & Interfaces
- **Protocols**: OIDC / OAuth 2.0 endpoints (`/oauth/authorize`, `/oauth/token`, `/.well-known/openid-configuration`).
- **Token Format**: Cryptographically signed RS256 JWT tokens.

## Events Emitted
- `identity.user.registered`
- `identity.user.authenticated`
- `identity.user.password_changed`
- `identity.user.locked`
