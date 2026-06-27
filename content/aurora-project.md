---
title: "AURORA - AI-Driven Utility Regulation"
type: "project"
summary: "An intelligent automation system leveraging computer vision and IoT to optimize energy usage based on real-time human occupancy."
---

## Overview
**AURORA** (AI-driven Utility Regulation for Occupancy-aware Resource Allocation) is an intelligent automation system designed to aggressively tackle energy wastage in indoor spaces. Unlike traditional automation systems that rely on static schedules or simple, easily-fooled motion sensors, AURORA uses advanced computer vision to observe actual space utilization. It dynamically controls appliances—such as lights, fans, and cooling systems—ensuring that energy is consumed only when genuinely needed.

## System Architecture
I engineered a modular, highly scalable pipeline that seamlessly combines AI perception, cloud messaging, and hardware control:

*   **Computer Vision Perception**: A Python-based **YOLO** model actively detects and counts people in real-time via camera feeds.
*   **Cloud Communication**: The live occupancy data is transmitted securely and with extremely low latency across different networks using an **EMQX Cloud MQTT broker**.
*   **IoT Control Node**: An **ESP32** microcontroller receives the data streams and processes both the occupancy count and environmental conditions (such as temperature) to intelligently actuate physical relays connected to electrical devices.
*   **Live Analytics Dashboard**: A custom JavaScript/HTML dashboard visualizes the system's performance, displaying live occupancy trends, relay states, temperature fluctuations, and estimated energy savings.

## Impact & Use Cases
By successfully fusing AI-based perception with IoT hardware control, AURORA serves as a robust, practical approach to sustainable energy management. It is designed to be highly extendable with additional predictive models and multi-room control logic, making it a perfect architecture for smart classrooms, optimized office environments, and green building prototypes.

[**View Source Code on GitHub &rarr;**](https://github.com/IEEE-VIT/AURORA)
