# ClassAct

# PulseBoard

A personal productivity dashboard that brings together task management, focused work sessions, and habit tracking — all in one clean interface, with zero backend required.

![Status](https://img.shields.io/badge/status-in%20development-yellow)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## Overview

Most productivity apps split tasks, focus timers, and habits across three different tools. PulseBoard puts all three in one dashboard, so a day's work — what you did, how long you focused, and what habits you kept — lives in a single place.

Everything is saved directly in the browser using `localStorage`, so there's no backend, no sign-up, and no database to manage. Open the page and your data is there next time you come back.

## Features

- **Task List**
  - Add, complete, edit, and delete tasks
  - Mark priority level (low / medium / high)
  - Filter by status (all / active / completed)

- **Focus Timer (Pomodoro)**
  - Configurable work/break intervals
  - Visual countdown with start/pause/reset
  - Session count tracked per day

- **Habit Tracker**
  - Define daily habits (e.g. "Read 20 minutes", "No sugar")
  - Mark each habit complete for the current day
  - Visual streak counter showing consecutive days completed

- **Dashboard Summary**
  - Tasks completed today
  - Total focus sessions today
  - Current longest habit streak

- **Persistence**
  - All data saved to `localStorage` — no login, no server, no data loss on refresh

## Tech Stack

- **HTML5** — semantic page structure
- **CSS3** — responsive layout using Flexbox/Grid, no framework dependency
- **Vanilla JavaScript** — DOM manipulation, timers, and localStorage handling (no external libraries required)

## Project Structure

```
pulseboard/
├── index.html          # Main dashboard page
├── css/
│   └── style.css       # All styling
├── js/
│   ├── tasks.js         # Task list logic
│   ├── timer.js         # Pomodoro timer logic
│   ├── habits.js         # Habit tracker logic
│   └── storage.js        # localStorage read/write helpers
└── README.md
```

## Getting Started

No build tools or installs required.

1. Clone the repository
   ```bash
   git clone https://github.com/<your-username>/pulseboard.git
   ```
2. Open `index.html` directly in your browser, or serve it locally:
   ```bash
   npx serve .
   ```
3. Start adding tasks, running focus sessions, and tracking habits.

## Roadmap

- [ ] Dark mode toggle
- [ ] Export/import data as JSON (backup and restore)
- [ ] Weekly summary view (charts of tasks completed / focus time)
- [ ] Drag-and-drop task reordering
- [ ] Optional browser notifications when a Pomodoro session ends

## Why This Project

This project is a good showcase piece because it demonstrates:
- Working with multiple interactive UI components on one page
- Managing application state without a framework
- Persisting data client-side with `localStorage`
- Building something genuinely useful, not just a tutorial clone

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## Author

**[Your Name]**
[Portfolio](https://your-portfolio-link.com) · [LinkedIn](https://linkedin.com/in/your-profile) · [GitHub](https://github.com/your-username)
