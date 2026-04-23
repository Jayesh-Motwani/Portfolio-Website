---
title: "Checkmate Machine - Autonomous Chess Engine"
type: "project"
summary: "A fully autonomous chess agent that uses computer vision to observe live games and algorithmic game theory to play optimal moves."
---

## Overview
The **Checkmate Machine** is a fully automated, end-to-end AI chess agent. It autonomously observes screens on platforms like Chess.com or Lichess, uses computer vision to perfectly recognize the board state, and computes optimal moves to play against human or bot opponents.

## Computer Vision Pipeline
To give the agent "eyes," I engineered a lightweight, real-time **OpenCV pipeline**. 
The system continuously captures full-screen screenshots, isolates the active chessboard using a sophisticated largest-contour square detection method, and segments the board into 64 individual squares. 

### Custom Dataset & Auto-Labeling
A major hurdle was acquiring accurately labeled training data for live screen pieces. To overcome this labeling bottleneck, I wrote an auto-labeling script that utilized known starting chess positions to rapidly generate a massive, balanced dataset of real-world piece crops (e.g., black queens, white kings) directly from the specific interfaces of Chess.com and Lichess.

Using this dataset, I trained a custom Convolutional Neural Network (CNN) that achieved **97.5% classification accuracy** on live, in-game screenshots.

## The Chess Engine
Once the board state is perceived, the agent needs to "think". I built a chess engine entirely from scratch utilizing the **Minimax algorithm with Alpha-Beta pruning**. 
This involved deeply implementing core game mechanics:
*   Legal move generation mapping
*   Advanced board evaluation heuristics
*   Optimal move selection under strict time constraints

## Impact
By successfully bridging computer vision perception with complex algorithmic game theory, I created a robust, fully automated agent that continuously observes, evaluates, and executes. This project was instrumental in deepening my skills in practical data engineering, overcoming real-world deployment constraints, and building highly robust, end-to-end AI systems.

[**Play Against the Engine Live &rarr;**](https://checkmate-machine.pages.dev/)  
[**View Source Code on GitHub &rarr;**](https://github.com/IEEE-VIT/checkmate-machine)
