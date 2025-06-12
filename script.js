let display = document.getElementById("display");
const themeSwitch = document.getElementById("themeSwitch");

function append(val) {
  if (display.innerText === "0" || display.innerText === "Error") {
    display.innerText = val;
  } else {
    display.innerText += val;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1);
  if (display.innerText.length === 0) {
    display.innerText = "0";
  }
}

function calculate() {
  try {
    const result = eval(display.innerText.replace(/÷/g, "/").replace(/×/g, "*"));
    display.innerText = result;
  } catch {
    display.innerText = "Error";
  }
}

// 🔡 Keyboard input support
document.addEventListener("keydown", e => {
  const key = e.key;
  if (!isNaN(key) || "+-*/.%".includes(key)) {
    append(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key.toLowerCase() === "c") {
    clearDisplay();
  } else if (key === ".") {
    append(".");
  }
});

// 🌗 Theme switcher
themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});
