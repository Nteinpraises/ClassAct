// storage.js — shared localStorage helpers used by tasks.js, timer.js, habits.js
function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function load(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value === null || value === undefined ? fallback : value;
  } catch (e) {
    return fallback;
  }
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
