---
title: "Coefficient of Variation-Weighted Gradient Curriculum (CVGC) for Deep Networks on Heterogeneous Tabular Data"
type: "research"
summary: "A novel training method addressing Adam optimizer instability on heterogeneous tabular data using a data-driven input weighting schedule."
---

## Core Idea

I designed and led a complete ML research project developing **CVGC**, a novel training method that addresses Adam optimizer instability on heterogeneous tabular data. 

The core idea uses the **Coefficient of Variation** of raw features to compute a data-driven input weighting schedule that decays exponentially during training. This implements a gradient curriculum, amplifying informative features early when Adam's adaptive scaling is uninformative, and then recovering to uniform weights as training stabilizes.

## Grounded Facts & Theoretical Framework

It was a math-heavy, first-principles-based research where I derived the full theoretical framework to guarantee and understand the method's effectiveness:

*   **Convergence Proofs:** Derived bounds ensuring an \(O(1/\sqrt{T})\) convergence rate.
*   **Gradient Energy Decomposition:** Analyzed how the curriculum affects the energy landscape during optimization.
*   **Formal Complementarity Theorem:** Provided a formal explanation for why CVGC and Adam are mechanistically complementary, proving why they work so well together rather than interfering.

## Implementation Details

The method was implemented from scratch to ensure maximum performance and compatibility:
*   Built in **PyTorch**.
*   Developed a custom **C++ extension** for GPU-accelerated Coefficient of Variation computation to avoid training bottlenecks.
*   The full paper was written targeting the *Neurocomputing Journal of Elsevier*.

## Results and Rigor

I designed and ran **3,465 training runs** across:
*   **11 benchmark datasets** with feature dimensions ranging from \(d = 6\) to \(d = 856\).
*   **3 architectures**: Shallow, Deep Residual, and Wide.
*   **10 random seeds** for strict statistical robustness.

**Outcomes:**
Achieved a **43-85% reduction** in the area under the validation loss curve on datasets where Adam diverges, with a statistical significance of \(p = 0.001\).

## Reflection
I felt very rewarded when I could derive theoretically-backed and mathematically-proven methods that worked exactly as expected in rigorous experimentation.
