# Coding Streak Counter

A simple and interactive web app built with **HTML, CSS, and JavaScript** to track how many coding problems are solved in a session.

Each time the **ADD PROBLEM** button is clicked, the counter increases by 1. When **SAVE PROGRESS** is clicked, the current count is added to the solved history and the counter resets to `0` for the next session.

## Demo

Live demo: _Add your Netlify link here_

## Features

- Increase solved problem count
- Save completed problem counts for each session
- Reset the counter after saving
- Display saved problem history
- Clean coding-themed interface with custom styling

## How It Works

- **ADD PROBLEM** increases the counter by 1
- **SAVE PROGRESS**
  - saves the current count to the history
  - appends it to the `Solved today:` section
  - resets the counter back to `0`

### Example

- Click **ADD PROBLEM** 3 times → counter becomes `3`
- Click **SAVE PROGRESS** → history becomes `Solved today: 3 -`
- Counter resets to `0`
- Start counting again for the next session

## Project Structure

```bash
.
├── counter.html
├── styles.css
├── app.js
└── coding_img.svg