/* =====================================================================
   GENIUS — OUR MELODY   (all text, photos and settings live here)
   • Change any text between the quotes.
   • Photos: put a picture in /photos and write its name. Use null for none.
   • memories: the number is the ROUND after which the memory pops up.
   ===================================================================== */
const CONFIG = {
  her: "Gawhara",
  me: "Batooti",
  rounds: 10,                 // how many rounds to win (each round adds one note)
  music: "assets/music.m4a",  // background song ("" for none)
  title: "Genius",
  subtitle: "our melody",
  howTo: "Watch the lights and listen. Then play the melody back. Every round adds one more note, just like us.",
  startBtn: "START",
  roundLabel: "round",
  watch: "watch…",
  yourTurn: "your turn ♥"
};

// shown when she taps the wrong pad (no game over, she just tries again)
const OOPS = [
  "Oops, baby. Listen again ♥",
  "Almost! The melody was so close.",
  "Sleepy fingers? One more try.",
  "Even Mozart replayed it. Again!",
  "Cute mistake. Watch closely ♥"
];

// little cheers after a round is completed
const CHEERS = ["nice ♥", "perfect", "wow", "yes!", "so good", "genius ♥", "amazing", "you got it"];

const MEMORIES = {
  3: { title: "Note 1 — Hello", text: "It started with one message. That's all it took.", photo: "photos/09-couple-car-selfie.jpg" },
  5: { title: "Note 2 — March", text: "Our first date. I was nervous. You were perfect.", photo: "photos/02-car-cream-top-flowers.jpg" },
  7: { title: "Note 3 — Same sky", text: "Miles between us, and you still felt closer than anyone.", photo: "photos/06-hill-at-dusk.jpg" },
  9: { title: "Note 4 — Sleeping beauty", text: "My favorite sleepyhead. Honestly unfair how cute you are asleep.", photo: "photos/11-sleeping-beauty.jpg" }
};

const WIN = {
  memory: { title: "The last note", text: "You just played our whole melody. Every note was you.", photo: "photos/14-closeup-red-roses.jpg" },
  line1: "Happy 23rd Birthday, Gawhara ❤️",
  line2: "Our song has no last note. Play it with me forever.",
  again: "play again"
};
