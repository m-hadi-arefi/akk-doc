---
title: "Master Data Management (MDM) Specification"
lang: en
translation: /fa/platform/master-data/overview
---

# Master Data Management (MDM) Specification

## Problem
Customer, vehicle, and supplier data was duplicated across multiple legacy applications, resulting in conflicting customer phone numbers, redundant vehicle records, and reporting discrepancies.

## Purpose
Establish an authoritative Single Source of Truth (Golden Record) for core business entities across Arian Khodro.

## Golden Record Domains

### 1. Vehicle Golden Record
- **Identifiers**: VIN (Primary Key), Chassis Number, Engine Serial Number.
- **Attributes**: Brand, Model, Trim, Model Year, Paint Color, Production Date, Assembly Plant, Warranty Expiration Date.

### 2. Customer Golden Record
- **Identifiers**: National ID (Individuals), National Commercial Code (Corporations).
- **Attributes**: Verified Mobile Phone, Full Name / Legal Name, Primary Address, Customer Tier.

### 3. Supplier & Dealership Golden Record
- **Identifiers**: Dealership Code, Supplier ID.
- **Attributes**: Dealership Grade, Authorized Repair Brands, Workshop Capacity, Location Coordinates.

## Interfaces & Synchronization
- Read APIs: High-speed cached read endpoints (Redis + PostgreSQL).
- Ingestion: CDC from operational applications; deduplication and conflict resolution engine.
