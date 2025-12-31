const content = {
  landing: {
    title: "One More Year With You ✨",
    subtitle: "Before this year ends,\nI wanted to give you something that stays.",
    lastLine: "A little world I made — just for you.",
    button: "Let's End This Year Together 🎆",
    footer: "Made with love, only for you 💕",
  },

  // ActivityPage/Letter configuration
  letter: {
    headerTitle: "A Letter for You 💌",
    headerSubtitle: "From my heart to yours",
    letterHeaderTitle: "My love,",
    letterMessage: `This year gave me a lot —
but the best thing it gave me was you.

You showed me what comfort feels like.
You showed me what patience looks like.
And somehow, even on the loudest days,
you became my calm.

Thank you for choosing me,
for understanding me,
and for staying — even when things weren't perfect.

I don't say this enough,
but life feels softer with you in it.`,
    letterSignature: "With all my love 💗",
    envelopeClickHint: "Click to open the letter",
    specialDeliveryText: "Special Delivery 💌",
    continueButton: "Keep going… I'm not done yet 💗"
  },

  chillZone: {
    heading: "The Soundtrack of Us 🎶",
    subheading: "Every song holds a memory of you.",
    chooseTrackHint: "Choose a track to start listening ✨",
    continueButton: "Continue to Next ✨",
    tracks: [
      { 
        id: 1, 
        title: "The First Song", 
        caption: "This reminds me of how you smile without realizing it." 
      },
      { 
        id: 2, 
        title: "Late Night Talks", 
        caption: "This feels like late-night talks with you." 
      },
      { 
        id: 3, 
        title: "Coming Home", 
        caption: "This sounds like home — like you." 
      }
    ]
  },

  cards: {
    heading: "Things I Don't Always Say Out Loud 💭",
    subheading: "Click each card to reveal what's in my heart",
    tapLabel: "✨ Tap!",
    progress: {
      start: "Start by tapping any card above ✨",
      discovered: (n: number, total: number) => `${n} of ${total} messages discovered! Keep exploring 💕`,
      complete: "Amazing! You've discovered all my feelings! 🎉"
    },
    popup: {
      title: "All Messages Unlocked!",
      message: "These are all the things I cherish about you. ✨",
      openFinal: "Open the Final Letter 💌",
      stay: "Stay here a bit longer"
    },
    cardMessages: [
      "You make me feel safe —\nin ways I didn't know I needed.\n\nLoving you changed how I see love itself.\n\nI don't just want you in my life —\nI want to grow with you.",
      "You are my favorite part of every day.\n\nThe way you listen without judgment,\nthe way you stay when things get hard.\n\nYou've taught me what real love is.",
      "With you, I don't have to pretend.\n\nI can be messy, uncertain, afraid —\nand you still choose me.\n\nThat means everything."
    ]
  },

  finalLetter: {
    title: "A Promise for the Next Year 💍",
    sealingText: "Sealing your letter...",
    sealButton: "Seal this Letter 💌",
    restartButton: "Restart",
    sealedTitle: "Letter Sealed with Love",
    sealedSubtitle: "Happy New Year, my love 🎆",
    typedDefault: "Always yours 💕",
    experienceAgain: "Experience This Again ✨",
    sendKissButton: "Send my love",
    dateLocale: "en-US",
    // Letter content
    letterGreeting: "My love,",
    letterParagraphs: [
      "You are the calm I reach for,\nand the laughter that brightens my days.",
      "This little world was my way of saying —\nthank you for being you,\nand thank you for being mine.",
      "I don't know everything the next year holds,\nbut I know I want to walk into it with you.\nLearning, growing, loving —\nside by side.",
      "Every moment with you feels like coming home.",
      "Always yours,\nin every little universe. 💕"
    ],
    sealingNote: "Sealing will finish the experience."
  },

  common: {
    continue: "Continue to Next ✨",
    close: "Close",
    ok: "OK"
  }
};

export default content;
