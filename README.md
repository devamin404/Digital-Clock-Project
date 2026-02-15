# 🕐 Digital Clock

A beautiful **live digital clock** with a glassmorphism design, glowing background shapes, and real-time hours, minutes, and seconds — built with pure HTML, CSS, and JavaScript.

## ✨ Features

- ✅ Shows live time — updates every second
- ✅ Always shows 2 digits (e.g. `07` instead of `7`)
- ✅ Glassmorphism card with `backdrop-filter: blur`
- ✅ Decorative CSS shapes using `::before` and `::after`
- ✅ No libraries, no dependencies — just vanilla HTML, CSS, JS

## 🧠 How The JavaScript Works

1. setInterval runs a function every 1000ms (1 second)
2. new Date() gets the current system time
3. Hours, Minutes, Seconds are extracted
4. If any value is less than 10, a "0" is added in front
5. The values are placed into the HTML spans on screen

**Two ways to add leading zero — both are valid:**

In javascript:
// Method 1 — Manual check (used in this project)
let hours = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();

// Method 2 — Cleaner modern way (commented out in code)
let hours = currentTime.getHours().toString().padStart(2, "0");

````

> `padStart(2, "0")` is the cleaner and more readable approach for production code.

## 🔬 CSS Trick — Labels Under The Digits

The HOURS, MINUTES, SECONDS labels are **not in the HTML** — they are added purely with CSS:

```css
#hrs::after { content: "HOURS"; }
#min::after { content: "MINUTES"; }
#sec::after { content: "SECONDS"; }
````

This keeps the HTML clean and the styling fully in CSS.
