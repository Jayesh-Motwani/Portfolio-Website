---
title: "TRACE - AI-Powered Network Intrusion Detection System"
type: "project"
summary: "A production-ready intrusion detection system combining unsupervised anomaly detection with ensemble classification and LLM-powered alerts."
---

## Overview
**TRACE** is a production-ready Network Intrusion Detection System (NIDS) that I designed and built from the ground up. It seamlessly combines unsupervised anomaly detection, an ensemble of classifiers, and Large Language Model (LLM) powered alert generation to provide deep, actionable security insights.

## Core Architecture & Implementation
I engineered a highly robust **two-stage ML pipeline**:

1. **Unsupervised Anomaly Detection**: The first stage utilizes a Variational Autoencoder (VAE) trained exclusively on benign network traffic. It detects anomalies by analyzing reconstruction errors across 77 distinct CICIDS features.
2. **Mixture of Experts (MoE) Classification**: The second stage leverages an ensemble of 8 distinct classifiers (including XGBoost, LightGBM, CatBoost, Random Forest, SVM, Logistic Regression, and two PyTorch MLPs). These are dynamically weighted by a learned gating network to accurately classify specific attack types.

## Production Backend & LLM Integration
To transition the model from a theoretical pipeline to a practical tool, I wrapped the entire architecture in a fast, asynchronous **FastAPI backend**. 

For alert generation, I integrated **Google Gemini via LangChain**. This system processes the low-level model outputs and generates structured, human-readable security alerts complete with severity ratings and specific recommended actions. The backend also features robust input validation, top-contributor feature analysis, and batch processing to handle real-time network throughput efficiently.

## Impact
This project significantly deepened my expertise in multi-model orchestration, production-grade ML system design, and the critical skill of bridging raw model outputs with high-level, actionable insights for security operations teams.

[**View Source Code on GitHub &rarr;**](https://github.com/Jayesh-Motwani/TRACE)
