// =============================================================
//  SAMEER SINGH PORTFOLIO — EDIT EVERYTHING FROM THIS FILE
// =============================================================
//  Just change the text or image links below and save.
//  Refresh the page to see your changes.
//  Lines starting with // are comments, ignore them.
// =============================================================

window.SITE = {

  // ---------- BASIC INFO ----------
  name: "SAMEER✦SINGH",
  role: "Director / Cinematographer / Editor",
  location: "Karnal, India",
  status: "Booking Q3 / Q4 2026",
  available: true,   // shows green dot if true

  // ---------- HERO (top of the page) ----------
  // NOTE on the portrait illustration:
  // The stylized SVG portrait sits inside index.html (search "hero-portrait").
  // To swap with your real transparent PNG later, replace the entire <svg>...</svg>
  // block with: <img src="me.png" alt="Sameer" />
  // Upload your PNG to the repo root and that's it.
  hero: {
    line1: "I shoot. I edit.",
    line2: "I tell the story.",       // this one shows in italic red
    line3: "End to end.",
    intro: "I'm Sameer. A one man creative studio doing everything from camera to colour, script to social. Brand films, founder stories, music videos, travel docs, fitness, web3 and the marketing that carries them.",
    stats: [
      { number: 8,   label: "Years in craft" },
      { number: 240, label: "Projects shipped" },
      { number: 17,  label: "Countries reached" }
    ]
  },

  // ---------- NICHE MARQUEE (the rotating words) ----------
  niches: [
    "DIRECTION",
    "cinematography",
    "EDITING",
    "colour grading",
    "MOTION DESIGN",
    "brand strategy",
    "SOCIAL CONTENT",
    "marketing"
  ],

  // ---------- SELECTED WORK (horizontal scroll cards) ----------
  // Add or remove cards here. Keep 3 to 7 for best feel.
  work: [
    { tag: "Royale Fitness", category: "BRAND FILM",  visual: "RUN<br>WILD",         title: "Royale Fitness — Detox Box launch film" },
    { tag: "deBridge",       category: "WEB3",        visual: "de<br>Bridge",        title: "deBridge — Solana Summit aftermovie" },
    { tag: "Personal",       category: "TRAVEL DOC",  visual: "DALHOUSIE<br>'25",    title: "North India — cinematic travel series" },
    { tag: "NIVIXPE",        category: "MOTION",      visual: "NIVIXPE",             title: "Motion graphics brand reel" },
    { tag: "Indie",          category: "SHORT FILM",  visual: "STILL<br>NOT<br>SOBER", title: "Indie short — edit and colour" }
  ],

  // ---------- REELS (phone mockup cards) ----------
  // Each phone shows handle, caption, fake stats. Pure visual.
  reels: [
    { handle: "@royale.fitness",     caption: "7 day reset. Real food only.",  text: "DROP<br>EVERY<br>THING.", duration: "00:14", likes: "84.2K", shares: "12K",  comments: "2.1K" },
    { handle: "@debridge",           caption: "Bridging done right.",          text: "CROSS<br>CHAIN<br>MAGIC", duration: "00:09", likes: "41K",   shares: "8.6K", comments: "980"  },
    { handle: "@graceofgod.organic", caption: "Sapling to plate in 60 days.",  text: "tend<br>your<br>garden.", duration: "00:22", likes: "220K",  shares: "34K",  comments: "5.4K" },
    { handle: "@solana",             caption: "3 days. One movement.",         text: "SOLANA<br>SUMMIT",        duration: "00:16", likes: "67K",   shares: "14K",  comments: "1.8K" },
    { handle: "@royale.dubai",       caption: "New franchise. Coming.",        text: "DUBAI<br>OPENS<br>SOON",  duration: "00:11", likes: "38K",   shares: "6.2K", comments: "720"  },
    { handle: "@sameer.films",       caption: "Fog. Pine. Silence.",           text: "DALHOUSIE<br>AT 5AM",     duration: "00:19", likes: "95K",   shares: "18K",  comments: "3.2K" }
  ],

  // ---------- I SHOOT TOO (photography section) ----------
  // Replace photoUrl with your real photos. You can use:
  //   1. Direct image links (https://yoursite.com/photo.jpg)
  //   2. Photos uploaded to your github repo (just put filename like "photos/photo1.jpg")
  // Captions appear when you hover.
  shoot: {
    title: "I shoot too.",
    italic: "stills",                 // word that shows in italic
    intro: "Sony A6700 in hand, mostly. Long form travel, portraits, brand stills, the things between the cuts.",
    photos: [
      { url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900",  caption: "Dalhousie, 5 AM",       location: "Himachal Pradesh" },
      { url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900",  caption: "Pine and silence",      location: "Khajjiar"          },
      { url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=900",  caption: "Quiet light",            location: "Karnal"            },
      { url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900",  caption: "Forest study",           location: "Dalhousie"         },
      { url: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=900",  caption: "First snow",             location: "Khajjiar"          },
      { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900",  caption: "Mountain mood",          location: "Manali"            },
      { url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=900",  caption: "Fog at sunrise",         location: "Shimla"            },
      { url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=900",  caption: "Tall and tall",          location: "Dharamshala"       }
    ]
  },

  // ---------- SERVICES ----------
  services: [
    { title: "Direction",          italic: "Direction",       desc: "Concept, treatment, shot lists. Shaping the film before a single frame is shot." },
    { title: "Cinematography",     italic: "Cinematography",  desc: "Camera, lighting, composition. Sony A6700 in hand, gimbal ready." },
    { title: "Brand films",        italic: "films",           desc: "Founder stories, product launches, identity pieces. Script to delivery." },
    { title: "Editing",            italic: "Editing",         desc: "DaVinci Resolve. Pacing, rhythm, story structure. Where the soul shows up." },
    { title: "Colour grading",     italic: "grading",         desc: "Cinematic LUTs, skin tones, mood, finishing. Matching the feeling." },
    { title: "Motion design",      italic: "design",          desc: "Title cards, lower thirds, kinetic type, brand bumpers." },
    { title: "Reels and shorts",   italic: "+",               desc: "High retention vertical edits for fitness, food, lifestyle, finance brands." },
    { title: "Marketing",          italic: "Marketing",       desc: "Launch strategy, paid social, content calendars. Films that actually get seen." }
  ],

  // ---------- BIG QUOTE ----------
  quote: {
    line1: "Most edits inform.",
    line2: "The good ones make you feel.",
    attr: "Working principle, since day one"
  },

  // ---------- CONTACT ----------
  contact: {
    title1: "Let's make",
    title2: "something loud.",
    rows: [
      { label: "Email",      value: "hello@sameersingh.in",  link: "mailto:hello@sameersingh.in" },
      { label: "Instagram",  value: "@sameer.edits",          link: "https://instagram.com/sameer.edits" },
      { label: "YouTube",    value: "Sameer Singh",           link: "https://youtube.com/@sameersingh" },
      { label: "Based in",   value: "Karnal, India",          link: "#" },
      { label: "Status",     value: "Booking Q3 / Q4 2026",   link: "#" }
    ]
  },

  // ---------- FOOTER ----------
  footer: {
    left:  "© 2026 Sameer Singh",
    right: "Built with care · No templates ✦"
  },

  // ---------- COLOURS (advanced — only change if you want a new vibe) ----------
  colors: {
    ink:    "#0a0a0a",
    paper:  "#f4ede2",
    cream:  "#ece2cf",
    acid:   "#d4ff3a",
    punch:  "#ff4d2e",
    ocean:  "#1d4ed8",
    plum:   "#7c2d92",
    sun:    "#ffb800"
  }
};
