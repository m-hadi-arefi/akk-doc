# Architectural Concepts & Theories

## 1. The CAP Theorem
In a distributed data store, you can only guarantee at most two of the three properties:
- **Consistency (C)**: Every read receives the most recent write or an error.
- **Availability (A)**: Every request receives a non-error response without guarantee of latest write.
- **Partition Tolerance (P)**: The system continues to operate despite network packet loss.
*In Arian Khodro's distributed environment, network partitions (P) are inevitable; systems must consciously choose between CP (strong consistency, e.g. financial ledgers) and AP (high availability, e.g. workshop repair logging).*

## 2. CQRS (Command Query Responsibility Segregation)
- **Commands**: Mutate state, execute domain validations, return void/status.
- **Queries**: Read-only, return DTOs optimized for UI views without domain logic overhead.

## 3. Event Sourcing
- Storing the state of a business entity as an append-only sequence of immutable state-changing events rather than overwriting current database rows.

## 4. Distributed Transaction Strategies
- **Two-Phase Commit (2PC)**: Synchronous blocking coordinator. High latency, fragile over WAN. Prohibited across microservices.
- **Saga Pattern**: Sequence of local transactions where each step publishes an event triggering the next step, with compensating transactions for rollback.
