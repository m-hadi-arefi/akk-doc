---
title: "05 — IT Infrastructure Assessment"
lang: en
translation: /fa/current-state/05-it-infrastructure
---

# 05 — IT Infrastructure Assessment

## Server Room Physical & Environmental Audit
The corporate server room at Arian Khodro headquarters was physically inspected during the Day 01 discovery sprint. The assessment revealed substantial vulnerabilities spanning environmental controls, electrical distribution, storage integrity, and hardware standardization.

---

## Physical Environment Observations
1. **Cabling Topology:** Network cables are routed via overhead ceiling trays dropping directly into rack tops. The server room lacks an elevated raised floor (false flooring), preventing clean separation of high-voltage power conduits and low-voltage structured Ethernet cables.
2. **Cooling & HVAC:** Room cooling is maintained by standard split-system commercial air conditioners without precision humidity or environmental airflow controls.
3. **Fire Detection & Suppression:** No automated clean-agent (FM-200 / Novec 1230) gaseous suppression system was observed. Fire risk relies on standard handheld extinguishers.
4. **Physical Security:** Access is managed through physical keys held by IT personnel rather than biometric or access-badge electronic audit logging.

---

## The Central UPS Overload & Bypass Incident
A critical operational vulnerability was identified regarding the electrical distribution infrastructure.

### Technical Facts:
- **Central UPS:** General Electric (GE) 3-phase online UPS with an estimated nominal rating of ~10kVA.
- **Connected Loads:** Powers critical server virtualization racks, core switches, and high-volume departmental laser printers located in adjacent offices.
- **The Heating Cycle Surge:** Laser printer fuser heating coils draw instantaneous inductive surges of 1,000–1,500W per unit when waking from standby.
- **System Behavior:** During peak printing periods, concurrent laser heating elements cause the UPS total load to surge to **120%–130%** of rated capacity.
- **Automatic Bypass Mode:** To protect internal inverters from thermal burnout, the UPS automatically transfers the load to raw, unfiltered city utility power (Bypass Mode).

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                          THE UPS BYPASS CATASTROPHE SCENARIO                           │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  1. High-draw laser printer begins heating cycle.                                      │
│  2. Total electrical load surges to 120%–130% of GE 10kVA capacity.                    │
│  3. UPS inverter triggers safety threshold and transfers to AUTOMATIC BYPASS.          │
│  4. Connected servers are now running DIRECTLY on raw industrial city power.           │
│  5. ⚠️ IF UTILITY POWER DIPS OR BLINKS DURING BYPASS:                                 │
│     ► Virtualization hosts, disk arrays, and databases crash simultaneously.          │
│     ► High probability of database corruption and filesystem damage.                   │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

> 🚨 **Immediate Risk Level: Critical**  
> Laser printers must be immediately decoupled from the server UPS circuit. This zero-cost operational intervention instantly eliminates an unforced existential risk to database integrity.

---

## Historical Storage Disaster & RAID Reconstruction
- **The Failure Incident:** In a previous operational cycle, a Samsung 870 EVO 1TB consumer-grade SATA SSD suffered an unrecoverable failure within an active RAID5 array.
- **Consequences:** Because RAID5 rebuilds place extreme continuous read strain on remaining aging drives, parity rebuild failed, resulting in catastrophic downtime that required several weeks of manual database recovery and data recreation.
- **Current Mitigation:** The failed drives were subsequently replaced with Lexar consumer SATA SSDs reconfigured in a RAID10 array. While RAID10 provides superior fault tolerance compared to RAID5, utilizing consumer-grade flash drives lacking Power Loss Protection (PLP) and enterprise write endurance (DWPD) retains latent risk.

---

## Backup Power & Standalone Workarounds
- **Mr. Khani's Dedicated UPS:** Due to recurring power interruptions and lack of confidence in the central circuit, an independent standalone UPS unit was procured specifically to power the database host operated by Mr. Khani.
- **Server Room Battery Replacement Quotation:** An official quotation for upgrading the central server room battery bank and power infrastructure was estimated at approximately **600–700 million IRR (~$600M IRR)**. The proposal was rejected by management due to recurrent battery degradation cycles and capital constraints.

---

## Hardware Governance: Workstations as Servers
A striking discovery during physical inspection was the deployment of consumer gaming/enthusiast hardware as primary production virtualization nodes:
- **Observed Hardware Profiles:** ASUS ProArt series motherboards, Intel Core i9-14900K desktop processors, ROG Maximus series chipsets, 128GB of unbuffered non-ECC desktop DDR5 RAM, and consumer 10GbE network cards.
- **Existing Enterprise Hardware:** A legacy HP ProLiant Gen9 server exists on-premise, with executive discussions debating the procurement of HP Gen10 or Gen11 units.
- **The Core Governance Flaw:** When internal development teams or departments encounter performance limitations, they submit ad-hoc hardware requests for top-tier desktop parts. IT procures these units based on raw clock speed rather than enterprise reliability criteria:
  - No ECC memory (leaving in-memory databases susceptible to silent single-bit corruption).
  - Single consumer ATX power supplies (zero power supply redundancy).
  - No enterprise out-of-band remote management (HP iLO or Dell iDRAC).

---

## The Target Hardware Governance Principle
To eliminate ad-hoc, unstandardized purchases, all future hardware investments must adhere to the standardized procurement lifecycle:

```text
Business Need ──► Technical Review ──► Standard Decision ──► Implementation ──► Documentation
```
*(This lifecycle is currently absent and represents an immediate operational governance target).*
