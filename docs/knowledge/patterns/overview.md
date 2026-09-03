# Architecture & Integration Patterns Catalog

Every pattern in this catalog adheres to a standardized engineering schema.

---

## Pattern: Anti-Corruption Layer (ACL)

### Problem
When integrating modern services with legacy systems (e.g. Tadark), differences in data models, protocols, and semantic concepts threaten to pollute and compromise the new architecture.

### Context
Arian Khodro is migrating capabilities away from Tadark. Modern services use DDD and REST/JSON; Tadark uses 32-bit Delphi tables.

### Solution
Place a dedicated translation layer (adapter service) between the modern application and the legacy system. The ACL translates requests and responses bidirectionally without allowing legacy semantics to cross into the modern domain.

### How It Works
```text
[Modern Service] ──(Domain Model)──► [Anti-Corruption Layer] ──(Legacy Schema)──► [Tadark]
```

### When to Use
- Interfacing new Core Platform services with Tadark.
- Integrating external vendor software with proprietary internal schemas.

### When NOT to Use
- When both systems share modern schemas and ubiquitous language.

### Advantages
- Protects modern domain purity; enables independent evolution.

### Disadvantages
- Adds an extra network hop and translation latency; requires maintaining adapter code.

### Arian Khodro Relevance
Mandatory for all integrations touching Tadark accounting or inventory.

---

## Pattern: Transactional Outbox

### Problem
A service needs to update its local database and publish an event to Kafka atomically. Dual writes without 2PC cause data inconsistency if the broker fails or the database rollbacks.

### Context
A workshop repair order is closed in PostgreSQL, and an `order.completed` event must be published to the Event Platform.

### Solution
Save the domain entity mutation AND the event message inside the **same local database transaction** into a dedicated `outbox` table. A separate background process or CDC engine (Debezium) reads the outbox table and publishes events reliably to Kafka.

### When to Use
- Whenever domain state changes must guarantee downstream event publication.

---

## Pattern: Circuit Breaker

### Problem
When a remote service is slow or unresponsive, client requests pile up, exhausting thread pools and causing cascading system failure.

### Solution
Wrap remote calls in a circuit breaker monitoring failures. When failures exceed a threshold (e.g. 50% over 10s), the breaker trips to **OPEN**, failing fast immediately without calling the failing service. After a cooldown, it enters **HALF-OPEN** to test recovery.
