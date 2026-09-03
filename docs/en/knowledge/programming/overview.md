---
title: "Programming & Engineering Practices"
lang: en
translation: /fa/knowledge/programming/overview
---

# Programming & Engineering Practices

## 1. SOLID Principles
- **Single Responsibility Principle (SRP)**: A class or module should have one, and only one, reason to change.
- **Open/Closed Principle (OCP)**: Software entities should be open for extension, but closed for modification.
- **Liskov Substitution Principle (LSP)**: Subtypes must be substitutable for their base types without altering correctness.
- **Interface Segregation Principle (ISP)**: Clients should not be forced to depend on interfaces they do not use.
- **Dependency Inversion Principle (DIP)**: Depend upon abstractions, not concretions. High-level modules must not depend on low-level modules.

## 2. Clean Code Discipline
- **Meaningful Names**: Use intention-revealing names (`calculateVehicleDepreciation` over `calc`).
- **Function Simplicity**: Functions should do one thing, be small, and avoid side effects.
- **Error Handling**: Use exceptions or explicit Result types rather than returning error codes. Never swallow exceptions silently.
- **Immutability**: Prefer immutable data structures and pure functions where feasible.
