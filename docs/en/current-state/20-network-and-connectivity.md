---
title: "20 — Network & Connectivity Assessment"
lang: en
translation: /fa/current-state/20-network-and-connectivity
---

# 20 — Network & Connectivity Assessment

## Telecommunications & Enterprise Network Baseline
The enterprise network linking Arian Khodro's headquarters, warehouses, external branches, and cloud portals was reviewed with Mr. Habibi during the Day 01 discovery sprint.

---

## WAN Architecture & Internet Redundancy
1. **Primary Internet Link:** High-bandwidth dedicated commercial link (Fiber / Microwave P2P link) connecting corporate headquarters.
2. **Secondary Backup ISP Link:** A secondary wireless/DSL connection exists on-premise as an emergency failover path.
3. **The Failover Vulnerability:** Automatic BGP or policy-based multi-WAN failover has **not been verified**. Historical incidents suggest that when the primary link experiences physical fiber cuts or ISP routing outages, external access to local services drops until manual administrative routing reconfigurations are applied.

---

## LAN Infrastructure & Server Room Connectivity
- **Core Switching:** Central Gigabit managed switches located in the main server room rack.
- **VLAN Segmentation:** Administrative, financial, and guest network segments are partially isolated; however, rigorous 802.1Q VLAN boundary enforcement across departmental wall ports requires auditing.
- **Inter-Building Connectivity:** Connection between administrative offices and storage yard facilities relies on overhead Ethernet cabling, exposed to lightning surges, electromagnetic interference, and physical wear.

---

## Wireless Infrastructure (Office & Warehouse)
- **Headquarters Wi-Fi:** Standard commercial wireless access points providing coverage for laptop users and conference rooms.
- **Warehouse Wi-Fi Mesh:** Warehouse facilities currently lack dense industrial Wi-Fi access points equipped with 802.11r/k fast roaming. Handheld scanners operating in metallic warehouse racking suffer signal dead zones and session drops, causing barcode scanning retries.

---

## Remote Access & External Perimeter
- **VPN Solutions:** Remote access for executives, home-based accountants, and external software vendor engineers is provided via OpenVPN or PPTP/L2TP tunnels.
- **Port Exposure & NAT:** Certain local services have been published to public IP addresses through static NAT port forwarding rules on the edge router.
- **Monitoring & Alerting Gap:** The network currently operates **without an automated Network Operations Center (NOC) dashboard** (e.g. Zabbix, PRTG, Prometheus/Grafana) or automated Telegram/SMS alerting for link drops and bandwidth saturation.

---

## Priority Network Validation Backlog (For Day 02)
- [ ] Verify automatic failover latency between the primary ISP and backup ISP under simulated cable pull.
- [ ] Audit the edge firewall configuration table for obsolete or dangerous port forwarding rules.
- [ ] Measure Wi-Fi signal attenuation (RSSI) within metallic warehouse aisles under full pallet load.
- [ ] Verify the existence of independent redundant paths between the server room and remote yard buildings.
