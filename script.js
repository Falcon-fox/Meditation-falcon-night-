const lines = [
  "Begin.",
  "Lie down or curl up however feels most natural.",
  "Close your eyes gently. Let the darkness behind your lids welcome you like a sky before flight.",
  "",
  "Breathe.",
  "In… cool air.",
  "Out… warmth and calm.",
  "Again… Inhale the quiet. Exhale anything heavy.",
  "",
  "Feel your back… the soft pressure where your wings would be…",
  "Let them stretch out slowly in your mind.",
  "",
  "You are still, but your wings stir.",
  "The world is hushed, like the night is holding its breath.",
  "The stars begin to glow — distant, ancient, guiding.",
  "",
  "In your chest, a quiet wind builds.",
  "Not loud — not wild.",
  "Just enough to lift you.",
  "",
  "You rise.",
  "Not with muscles, but with memory.",
  "Not with force, but with instinct.",
  "The night welcomes you — vast, free, and gentle.",
  "",
  "Glide.",
  "Let yourself drift on phantom wings.",
  "Through dark clouds, past moonlight, over valleys of dream.",
  "",
  "You do not need to see.",
  "You feel.",
  "You trust the shape of the wind around you.",
  "The stars hum in time with your heartbeat.",
  "You are not lost. You are flying home.",
  "",
  "And now, slowly…",
  "Return.",
  "Let your wings fold.",
  "Let the night carry you downward, softly, into your resting place.",
  "",
  "The ground meets you like a nest.",
  "The dark wraps around you like feathers.",
  "You are still.",
  "You are safe.",
  "You are home.",
  "",
  "Sleep, little falcon.",
  "The sky will be waiting when you wake."
];

const container = document.getElementById("container");

let index = 0;
function showNextLine() {
  if (index < lines.length) {
    const text = lines[index];
    const p = document.createElement("p");
    p.className = "line";
    p.innerText = text;
    container.appendChild(p);
    setTimeout(() => {
      p.style.opacity = 1;
    }, 100);

    // Speak the line (skip if blank)
    if (text.trim() !== "") {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9; // slower speed for calming tone
      utterance.pitch = 1; // natural tone
      utterance.lang = "en-US";
      speechSynthesis.speak(utterance);
    }

    index++;
    setTimeout(showNextLine, 4000);
  }
}

showNextLine();