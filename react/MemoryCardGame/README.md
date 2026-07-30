# Memory Card Game

[![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-000?logo=vercel)](https://memory-card-game-weld.vercel.app)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Odin Project](https://img.shields.io/badge/The%20Odin%20Project-Project%3A%20Memory%20Card-A435F0)](https://www.theodinproject.com/lessons/node-path-react-new-memory-card)

A **Memory Card** game built with **React** as part of [The Odin Project](https://www.theodinproject.com/) curriculum. Cards are pulled live from the [Jikan API](https://jikan.moe/) (top 20 popular anime) — click each card exactly once without repeating, and test your recall across three difficulties.

🔥 **Live Demo:** [memory-card-game-weld.vercel.app](https://memory-card-game-weld.vercel.app)

---

## How to Play

1. Choose a difficulty: **Easy** (6 cards), **Medium** (12 cards), or **Hard** (18 cards)
2. Click any card to flip — the deck shuffles after each click
3. **Goal:** click every unique card without repeating
4. Clicking the same card twice resets your streak to 0
5. Win by clicking all cards in a single streak

---

## Features

| Feature | Detail |
|---|---|
| 🎴 **Anime Cards** | Live cover art + titles fetched from the Jikan API via `useEffect` |
| 🔀 **Auto-shuffle** | Deck shuffles after every click |
| 🏆 **Best Score** | Tracks the highest streak within the current session |
| 🌓 **Light / Dark Theme** | Theme toggle persisted to `localStorage` |
| 🌸 **Background Particles** | Sakura and sparkle emoji float across the screen |
| 🎯 **3 Difficulties** | Easy (6), Medium (12), Hard (18) |
| 🏁 **Win Screen** | Overlay with stats, decor, and replay/home buttons |
| ⚡ **Responsive** | CSS Grid auto-fit layout adapts to any screen size |

---

## Component Tree

```
App
 └─ GameContainer (all state)
      ├─ BackgroundParticles
      ├─ ThemeToggle         ← theme, onToggle
      ├─ StartScreen         ← onStart, loading
      ├─ WinScreen           ← score, bestScore, totalCards, difficulty, onReplay, onHome
      ├─ ScoreContainer      ← score, bestScore, difficulty, totalCards
      └─ MemoryCardContainer ← cards, onCardClick, duplicateValue, shuffling
           └─ MemoryCard     ← item ({id, title, image}), onClick, isDuplicate
```

**State architecture:** All state is lifted to `GameContainer` (13 state variables + 2 `useEffect` hooks). Every child component is a stateless presentational leaf. The `gamePhase` state (`'start'` | `'playing'` | `'won'`) drives conditional rendering.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| **React 19** | UI framework |
| **Vite** | Build tool and dev server |
| **JavaScript (ES6+)** | Core logic |
| **CSS** | Styling, animations, responsive breakpoints |
| **Jikan API** | Anime data source (public, no API key required) |
| **Vercel** | Deployment |

---

## API Reference

Cards are fetched from the [Jikan v4 API](https://docs.api.jikan.moe/):

```
GET https://api.jikan.moe/v4/top/anime?limit=20&filter=bypopularity
```

Returns anime objects with `mal_id`, `title`, and `images.jpg.large_image_url` which are mapped to each card.

---

## Theme

The app ships with **dark mode as default**. Toggle via the ☀️/🌙 button in the top-right corner. The preference is saved to `localStorage('memory-theme')`.

| Token | Dark | Light |
|---|---|---|
| `--accent` | `#ff4081` (neon magenta) | `#d81b60` (deep pink) |
| `--accent-cyan` | `#00e5ff` | `#0097a7` |
| Background | Deep violet → magenta gradient | Soft pastel pink/lavender gradient |

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Subodh-Shah/_OdinProject_.git

# Navigate to the project
cd _OdinProject_/react/MemoryCardGame

# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build

# Deploy to Vercel
npm run deploy
```
