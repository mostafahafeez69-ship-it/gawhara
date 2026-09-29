/* =====================================================================
   23 HEARTS — EDIT YOUR CONTENT HERE
   ---------------------------------------------------------------------
   • Every heart below is one popup. Change the title / text freely.
   • type can be: "message", "joke", "memory", "compliment", "photo", "birthday"
   • To show a picture, put the file in the /photos folder and set
       photo: "photos/your-file.jpg"
     (leave photo: null for no picture)
   • Keep exactly 23 hearts. The ORDER here does not matter for where
     they are hidden — the map decides the hiding spots.
   ===================================================================== */

const CONFIG = {
  name: "Jawhara",              // her name, used in texts
  bigName: "JAWHARA",           // name in the final big title
  signature: "your Batooti",    // how you sign
  music: "assets/music.m4a",    // background song (leave "" for none)
  player: "assets/her.png"      // the playable character image
};

const HEARTS = [
  { type: "birthday",   title: "Heart #1 — it begins",
    text: "Happy 23rd birthday, Jawhara. 23 hearts are hidden in this little world. Each one is a piece of mine. Go find them all ♥",
    photo: null },

  { type: "compliment", title: "Those eyes",
    text: "Bambi eyes with a soft deep stare, a thousand emotions hiding there. They win every argument before it even starts.",
    photo: null },

  { type: "joke",       title: "Sleeping Beauty, official title",
    text: "You can fall asleep anywhere, anytime, in any position — and still look like a painting. Honestly unfair.",
    photo: "photos/04.jpg" },

  { type: "memory",     title: "March",
    text: "Our first date was in March. I didn't know it yet, but that was the day my favorite chapter started.",
    photo: null },

  { type: "photo",      title: "Exhibit A: stunning",
    text: "No caption needed. Just look at her.",
    photo: "photos/01.jpg" },

  { type: "joke",       title: "Order for the queen",
    text: "One chicken shawarma, extra love, delivered at midnight. As always.",
    photo: null },

  { type: "message",    title: "Every reason",
    text: "I love you for every reason you gave me — and for every reason you didn't.",
    photo: null },

  { type: "joke",       title: "Warning: cats nearby",
    text: "Don't worry. In this world the cats are asleep and I'm standing guard. You're safe with me.",
    photo: null },

  { type: "compliment", title: "Elegant lady",
    text: "You walk into a room and it suddenly looks expensive. My elegant lady and my cute baby — both, always, at once.",
    photo: "photos/09.jpg" },

  { type: "joke",       title: "Salted caramel",
    text: "Salted caramel over everything else. Correct opinion. This is why I trust your taste — you picked me too.",
    photo: null },

  { type: "photo",      title: "Golden hour",
    text: "The sun was setting and it still wasn't the prettiest thing in the picture.",
    photo: "photos/02.jpg" },

  { type: "message",    title: "Gift giver",
    text: "You always give so much — to me, to everyone. So today it's your turn to open things. Let me spoil you.",
    photo: null },

  { type: "joke",       title: "Energy drink report",
    text: "Studies show you are 40% energy drinks, 60% sleep, and 100% my favorite person.",
    photo: null },

  { type: "photo",      title: "Roses for a rose",
    text: "You hold flowers like they're lucky to be held.",
    photo: "photos/03.jpg" },

  { type: "memory",     title: "Distance",
    text: "Miles between us, and somehow you still feel closer than anyone. Every call, every message, every 'goodnight' — I keep them all.",
    photo: null },

  { type: "joke",       title: "The Shein situation",
    text: "Your Shein orders scare the bank account more than cats scare you. And I wouldn't change a thing.",
    photo: null },

  { type: "photo",      title: "Us",
    text: "My favorite place in the world is next to you.",
    photo: "photos/06.jpg" },

  { type: "compliment", title: "Wallahi",
    text: "Wallahi, you are art — divine and rare. No one alive can ever compare.",
    photo: "photos/05.jpg" },

  { type: "message",    title: "A gem",
    text: "In my eyes there is a gem, a shining gem beyond all tales. From desert sands to the heart you came, and nothing in me stayed the same.",
    photo: null },

  { type: "photo",      title: "Night out",
    text: "City lights behind us, and I was only looking at you.",
    photo: "photos/07.jpg" },

  { type: "birthday",   title: "Twenty-three",
    text: "23 looks so good on you. Here's to a year of sleep-ins, shawarma, salted caramel and me annoying you with love.",
    photo: "photos/08.jpg" },

  { type: "message",    title: "Batooti's promise",
    text: "Whatever this year brings — exams, stress, long days — I'm right here. Always on your side.",
    photo: null },

  { type: "birthday",   title: "The last one",
    text: "You found all 23. Now go to the locked gate in the Star Garden… something is waiting for you there ♥",
    photo: null }
];
