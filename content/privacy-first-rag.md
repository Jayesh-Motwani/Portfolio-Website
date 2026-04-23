---
title: "Privacy-First Legal RAG Pipeline"
type: "project"
summary: "A 100% local, privacy-first Retrieval-Augmented Generation system for navigating complex Indian Family and Child Law."
---

## Overview
I designed and built a specialized, privacy-first RAG (Retrieval-Augmented Generation) system tailored for Indian women and child law. The core philosophy of this project was to enable highly secure legal guidance without transmitting any sensitive, personal data to external cloud APIs.

## Core Engineering & NLP Pipeline

### Hierarchical Document Parsing
Legal documents are complex. I engineered a specialized hierarchical parser to systematically extract structured provisions (from *Act &rarr; Part &rarr; Chapter &rarr; Section &rarr; Proviso*) directly from PDF legislation. Each chunk of data is enriched with critical metadata detailing the specific personal law, demographic scope, jurisdiction, and law type, enabling highly accurate, applicability-aware retrieval.

### Privacy & PII Masking
To guarantee user privacy, I integrated a fine-tuned **BERT NER model** designed to detect and mask over 112 types of Personally Identifiable Information (PII)—including sensitive Indian IDs like Aadhaar and PAN numbers—*before* any query processing takes place.

### Advanced Retrieval & Conflict Detection
The multi-stage retrieval pipeline combines:
*   **Semantic Search**: Powered by `sentence-transformers` embeddings stored in ChromaDB.
*   **Metadata Filtering**: Utilizing the hierarchical data tags.
*   **Novel Conflict-Detection Layer**: I developed a unique system that actively flags legal tensions between retrieved provisions (for example, conflicts between the Hindu Marriage Act and the Domestic Violence Act) by cross-referencing a curated map of 25 known legal conflicts.

## 100% Offline Execution
Finally, I orchestrated the query rewriting and answer generation processes using entirely local LLMs via **Ollama** (`qwen2.5:7b` / `mistral:7b`). This ensures that the system provides end-to-end offline execution, maintaining absolute data sovereignty.

## Impact
This project allowed me to push the boundaries of privacy-preserving NLP, domain-adapted retrieval systems, and the construction of trustworthy AI applications tailored for high-stakes, highly sensitive domains.

[**View Source Code on GitHub &rarr;**](https://github.com/Jayesh-Motwani/Privacy-First-RAG)
