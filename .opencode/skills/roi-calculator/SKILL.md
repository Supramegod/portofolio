---
name: roi-calculator
description: Calculates marketing ROI and budget efficiency from provided cost and revenue data. Use when the user wants to know if their campaign spend is effective or how to allocate budget.
---

# ROI Calculator

Given campaign spend and revenue data:

1. **Basic ROI**: `(Revenue - Cost) / Cost × 100`
2. **ROAS (Return on Ad Spend)**: `Revenue / Cost`
3. **CPA (Cost Per Acquisition)**: `Total Cost / Conversions`
4. **Break-even point**: how many conversions needed to cover cost?
5. **Budget efficiency rating**:
   - ROAS > 4: Excellent
   - ROAS 2-4: Good
   - ROAS 1-2: Needs optimization
   - ROAS < 1: Losing money

If data is incomplete, state assumptions clearly and calculate what's possible. Output a summary table with all metrics.
