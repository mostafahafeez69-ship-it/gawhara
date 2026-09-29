/* =====================================================================
   OUR STORY — ALL TEXT, PHOTOS AND MEMORIES LIVE IN THIS FILE
   ---------------------------------------------------------------------
   • Change any text between the quotes.
   • Photos: put your picture in the /photos folder and write its name,
     e.g.  photo: "photos/my-picture.jpg"   (use null for no photo)
   • Dialogue lines are  ["who", "text"]  where who is "me", "her" or "" (narrator).
   ===================================================================== */

const CONFIG = {
  her: "Gawhara",            // her name
  me: "Batooti",             // what she calls you (shown as your name in dialogue)
  music: "assets/music.m4a", // background song ("" for none)
  sprite: "assets/her.png"   // her character image
};

/* ---------------- CHAPTER 1 — the first hello ---------------- */
const CH1 = {
  title: "Hello, You",
  subtitle: "where it all started",
  intro: [
    ["", "A quiet night. Nothing special was supposed to happen."],
    ["", "Then her phone buzzed…"],
    ["", "(tap the phone)"]
  ],
  // the chat — "me" messages appear by themselves, "choices" let her answer
  chat: [
    { me: "hey" },
    { me: "I know this is random… but I had to say hi." },
    { choices: [
      { text: "who is this? 🤨", reply: ["Just someone who's about to become your favorite person."] },
      { text: "hi :)",           reply: ["okay that smile just made my whole day."] },
      { text: "*leaves on read*", reply: ["…that's fine. I'm patient. Very patient.", "(he was not patient)"] }
    ]},
    { me: "so… tell me one thing about you" },
    { choices: [
      { text: "I love sleeping 😴",           reply: ["a professional napper. respect."] },
      { text: "shawarma is my love language", reply: ["chicken shawarma at midnight? noted. forever."] },
      { text: "cats scare me",                reply: ["don't worry. I'll protect you from every cat on earth."] }
    ]},
    { me: "I think I like you." },
    { choices: [ { text: "I think I like you too ♥", reply: ["♥"] } ] }
  ],
  outro: [
    ["me", "And just like that, the best chapter of my life started."]
  ],
  memory: { title: "Chapter 1 — Hello", text: "One message. That's all it took.", photo: "photos/09-couple-car-selfie.jpg" }
};

/* ---------------- CHAPTER 2 — the first date ---------------- */
const CH2 = {
  title: "March",
  subtitle: "our first date",
  intro: [
    ["", "March. A little café. Two very nervous people."],
    ["me", "Okay. Be cool. Make her smile."],
    ["", "(tap things on the table to make her smile)"]
  ],
  menu:    ["her", "Chicken shawarma? You already know me too well."],
  icecream:["her", "Salted caramel!! Okay… you're doing good."],
  flower:  ["me",  "A flower for the prettiest girl in this café. And every café."],
  candle:  ["", "The candle flickers. Everything feels warmer."],
  drink:   ["her", "An energy drink? At dinner? …Marry me. (kidding. maybe.)"],
  cat:     ["me",  "Shoo, cat! Nobody scares my girl on our first date."],
  outro: [
    ["her", "This was… actually really nice."],
    ["me",  "Same time next forever?"]
  ],
  memory: { title: "Chapter 2 — March", text: "Our first date. I was nervous. You were perfect.", photo: "photos/13-couple-restaurant.jpg" }
};

/* ---------------- CHAPTER 3 — the distance ---------------- */
const CH3 = {
  title: "Miles Apart",
  subtitle: "same sky, different cities",
  intro: [
    ["", "Some nights, there were miles between us."],
    ["me", "But we always looked at the same sky."],
    ["", "(tap the glowing stars, one by one)"]
  ],
  outro: [
    ["me", "Every call, every 'goodnight', every 'did you eat?' — I kept them all."],
    ["her", "Distance is just a test."],
    ["me",  "And we're acing it."]
  ],
  memory: { title: "Chapter 3 — Same Sky", text: "Miles between us, and you still felt closer than anyone.", photo: "photos/17-couple-night-bw.jpg" }
};

/* ---------------- CHAPTER 4 — sleeping beauty ---------------- */
const CH4 = {
  title: "Sleeping Beauty",
  subtitle: "her favorite hobby",
  intro: [
    ["", "It's late. Somebody is VERY sleepy."],
    ["her", "I'm not tired… *yawns for 7 seconds*"],
    ["", "(help her get to bed — tap things in the room)"]
  ],
  lamp:    ["", "Lights off. Cozy mode: ON."],
  curtain: ["", "Curtains closed. The moon peeks in to say goodnight."],
  phone:   ["her", "Silent mode… okay, okay. Goodnight Shein app."],
  cat:     ["me",  "Out you go, little cat. She sleeps better without you staring."],
  tuck:    ["", "Tucked in. Zzz…"],
  outro: [
    ["me", "She can fall asleep anywhere, anytime — and still look like a painting."],
    ["me", "Sleep well, sleeping beauty."]
  ],
  memory: { title: "Chapter 4 — Sweet Dreams", text: "My favorite sleepyhead. Honestly unfair how cute you are asleep.", photo: "photos/11-sleeping-beauty.jpg" }
};

/* ---------------- CHAPTER 5 — gifts ---------------- */
const CH5 = {
  title: "Your Turn",
  subtitle: "to open the gifts",
  intro: [
    ["me", "You always give everyone gifts. You're the most generous person I know."],
    ["me", "So today… it's YOUR turn."],
    ["", "(catch 12 of your favorite things — dodge the cats!)"]
  ],
  gifts: [
    { item: "bag",    name: "A brown handbag",      line: "Brown, classy, elegant — like you." },
    { item: "makeup", name: "Makeup",               line: "Not that you need it. At all." },
    { item: "shirt",  name: "A new shirt",          line: "It will look better on you than on any model." }
  ],
  outro: [
    ["her", "Wait… all of this is for me?"],
    ["me",  "All of it. And there's more. Come."]
  ],
  memory: { title: "Chapter 5 — Your Turn", text: "You give so much love to everyone. Today, let me spoil you.", photo: "photos/14-closeup-red-roses.jpg" }
};

/* ---------------- THE ENDING ---------------- */
const FINALE = {
  line1: "Happy 23rd Birthday, Gawhara ❤️",
  line2: "If I could replay one game forever, I'd choose ours.",
  poem: [
    "In my eyes there is a gem, a shining gem beyond all tales,",
    "From desert sands to the heart you came, and nothing in me stayed the same,",
    "Bambi eyes with soft deep stare, a thousand emotions hiding there,",
    "Wallahi, you are art, divine and rare, no one alive can ever compare."
  ],
  credits: [
    ["STARRING", "Gawhara — the main character"],
    ["ALSO STARRING", "Batooti — the luckiest guy in the game"],
    ["DIRECTED BY", "Love"],
    ["WRITTEN BY", "Every text we ever sent"],
    ["CATERING", "Chicken shawarma & salted caramel"],
    ["ENERGY SUPPLIED BY", "Way too many energy drinks"],
    ["WARDROBE", "Shein (sorry, bank account)"],
    ["SPECIAL THANKS", "The cats — for staying far away"],
    ["NO ANIMALS WERE HARMED", "Several were shooed"]
  ],
  // photos that scroll by in the credits (add or remove freely)
  photos: [
    "photos/02-car-cream-top-flowers.jpg", "photos/04-infinity-pool-sunset.jpg", "photos/06-hill-at-dusk.jpg",
    "photos/01-couple-store-mirror.jpg", "photos/10-art-gallery.jpg", "photos/12-couple-cat-masks.jpg",
    "photos/16-mirror-pink-scarf.jpg", "photos/18-couple-night-color.jpg", "photos/03-couple-car-sunglasses.jpg",
    "photos/08-couple-cartoon-wall.jpg", "photos/15-mirror-long-skirt.jpg", "photos/07-mirror-grey-dress.jpg",
    "photos/05-childhood-photo.jpg", "photos/19-maroon-dress.jpg"
  ],
  // the proposal after the credits
  proposalIntro: "Wait… there's one more level.",
  question: "Gawhara, will you be my girlfriend?",
  yes: "Yes ♥",
  yes2: "Of course yes",
  no: "No",
  noDodges: ["No?", "Nice try", "Nope", "Try again ♥", "Impossible", "Wrong button"],
  saidYes: "Achievement unlocked: Girlfriend ♥",
  afterYes: "Then it's official, my love. Now hold out your hand… this ring has been waiting for you."
};
