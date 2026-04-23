---
title: "Hybrid Graph Neural Network for Ionic Liquid Viscosity Prediction"
type: "research"
summary: "A novel ML architecture combining Graph Neural Networks with physicochemical descriptors to predict critical properties for green chemistry."
---

## The Challenge
Accurately predicting the viscosity of ionic liquids is a critical bottleneck in the advancement of green chemistry applications. Traditional modeling often struggles to capture both the complex molecular graph structure and the dense, numeric physicochemical properties simultaneously.

## Architectural Innovation
I designed and implemented a novel **Hybrid Machine Learning Architecture** that bridges this gap. 

My model utilizes a highly effective dual-stream encoder:
1.  **Graph Stream**: A 3-layer Graph Convolutional Network (GCN) that processes complex molecular graphs, explicitly learning from node and edge features.
2.  **Descriptor Stream**: A dense Multi-Layer Perceptron (MLP) that processes 434 distinct RDKit physicochemical descriptors.

These two distinct streams are then dynamically fused alongside vital thermodynamic context data (such as temperature and composition) to produce an end-to-end viscosity prediction.

## Rigorous Evaluation & Results
To ensure strict scientific validity and prevent data leakage, I implemented a robust group-based splitting methodology, splitting data strictly by *ionic liquid identity* rather than random rows. The dataset comprised 8,523 precise measurements spanning 151 unique ionic liquids.

**Performance:**
*   The hybrid model achieved an **R² = 0.886** on completely held-out ionic liquids.
*   This significantly outperformed strong baselines, including a descriptor-only model (XGBoost + RDKit, R² = 0.873) and a graph-only baseline (Pure GNN, R² = 0.842).

## Interpretability
Because scientific models must be explainable, I implemented a gradient-based feature importance analysis. This successfully revealed physically interpretable structure-property relationships, clearly validating that factors like temperature, anion charge density, and cation alkyl chain length dominate the viscosity predictions—aligning perfectly with known chemical principles.

*(Note: This research is currently in progress).*
