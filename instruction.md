🎮 Project Name (Working Title)
"Macbeth: Fate or Free Will?"
A branching-path narrative game where players make Macbeth’s decisions at key turning points. Every choice leads to different consequences—some aligned with the play, some alternate endings.

🧠 Purpose & Goal
Show deep understanding of the play’s characters, plot, and themes (ambition, guilt, power, fate vs. free will).

Let players explore “what if” scenarios.

Be interactive, engaging, and teach the play from a new perspective.

🧩 Game Structure (Website-Based)
You’ll need:

Start Screen

Title + short description: "Relive Macbeth’s story. Will you follow ambition or honor?"

Start button

Game Flow

Display of a dramatized scenario with text + decision options

Players pick a choice, and it leads to the next scene

Branching logic tree based on player decisions

Ending Screen

Summarize player's path (e.g., “You chose honor. Macbeth became Thane and lived in peace…”)

Maybe add a score: Ambition vs Honor Meter

“Try Again” button

🗺️ Sample Game Path
SCENE 1: The Witches’ Prophecy
Witches tell Macbeth he will be king

🟢 Choice A: Trust fate and wait

🔴 Choice B: Take action now

➡️ A leads to Scene 2A (noble path), B leads to Scene 2B (dark path)

SCENE 2B: Lady Macbeth Pushes for Murder
🟢 Choice A: Refuse and argue

🔴 Choice B: Agree to murder Duncan

➡️ A might get you banished, B leads to guilt spiral and next murder

And so on…

You can design 4–6 key decision points that explore:

Duncan’s murder

Banquo’s fate

Going back to the witches

Killing Macduff’s family

Fighting Macduff

🧠 Themes You’ll Explore
Ambition vs Honor

Fate vs Free Will

Guilt and Madness

Loyalty and Betrayal

Power’s Corruption

🧾 Required Extras (for full marks)
✅ Direct quotes in each scene (at least 1 per decision)

✅ Written rationale explaining:

Why you chose this format

How your decisions reflect understanding of characters/themes

What new perspective this gives your class

💻 Technical Stuff Cursor Can Help With
UI with branching choices

Simple backend using React or plain JS

Game state saved through the path

Mobile-friendly

Dark theme with eerie castle/witched aesthetic

Sound FX and transitions (if you want)

1. 🎯 Project Overview
md
Copy
Edit
# Macbeth: Fate or Free Will?
A choice-based interactive narrative game based on Shakespeare’s *Macbeth*. Players will make moral and plot-based decisions for Macbeth, leading to alternate storylines and endings. Designed as a classroom project to demonstrate deep understanding of the play’s characters, plot, and themes.
2. 🧠 Learning Goals
md
Copy
Edit
## Learning Goals
- Explore Macbeth’s downfall through the lens of fate vs. free will.
- Make meaningful decisions that reflect the core themes of the play: ambition, guilt, power, and morality.
- Demonstrate understanding through alternative endings and original analysis.
- Engage classmates with an educational and interactive experience.
3. 🌐 Website Requirements
md
Copy
Edit
## Website Requirements
- **Landing Page** with title, short description, and start button.
- **Scene Pages** with dramatized descriptions and two choices.
- **Decision Logic Tree** that controls branching paths.
- **Endings Page** that summarizes the player’s outcome.
- **Ambition Meter**: a visual indicator of how “ambitious” the player's path has been.
- **Dark Mode** aesthetic with eerie fonts, red/gold tones, and light horror/supernatural vibes.
- **Direct Quotes** from the play integrated into scenes (shown in stylized format or highlighted text).
- **Mobile Friendly**
4. 🧩 Game Design (Scene-by-Scene Breakdown)
md
Copy
Edit
## Scene Structure
Each scene should include:
- Scene title and text (dramatized, clear, 2-3 paragraphs max)
- Direct quote from the play
- Two decisions (Choice A / Choice B)
- Outcome based on choice
You can paste the actual scenes here. For example:

md
Copy
Edit
### Scene 1: The Prophecy
> "All hail, Macbeth! Hail to thee, Thane of Glamis! Hail to thee, Thane of Cawdor! Hail to thee, that shalt be king hereafter!" – Act 1, Scene 3

The witches appear before Macbeth and Banquo, delivering a cryptic prophecy. Macbeth, startled, is drawn to the idea of kingship. Banquo warns him that evil spirits often tell partial truths.

**Choices:**
- 🟢 A: Ignore the prophecy, trusting that fate will play out naturally.
- 🔴 B: Start thinking about how to make the prophecy come true.

➡️ **If A:** Macbeth focuses on being loyal to Duncan and earns more trust.  
➡️ **If B:** Macbeth writes to Lady Macbeth, starting a path toward murder.
💡 Aim for 5–6 key scenes total.

5. 🎨 Design Preferences (Optional but Helpful)
md
Copy
Edit
## Design Preferences
- Font: Serif (like Garamond or Playfair Display) for drama, and Sans-serif for UI
- Color palette: black, gold, deep red, off-white
- Background: subtle parchment or castle texture
- Buttons: hover effects with color changes
- Sounds: thunder, whispering witches (optional)
6. ✍️ Rationale (Short Paragraph for Teacher)
md
Copy
Edit
## Written Rationale
This interactive project reimagines Macbeth as a moral choice game to help players explore the consequences of ambition, power, and guilt. The branching structure reveals how a single choice can spiral into tragedy. Each choice is grounded in the original text and offers a new lens on Macbeth’s internal conflict. The project is designed to be engaging, replayable, and educational for the class.
7. 🧪 Extra Features (Optional)
md
Copy
Edit
## Optional Enhancements
- Save progress using local storage
- "Reset story" button
- Display player's path at the end (breadcrumbs or timeline)
- Add visual characters/icons next to quotes
- Easter egg: secret ending if player never kills anyone

8. 🗂️ Folder/File Structure (Optional but Helpful)
md
Copy
Edit
## Folder Structure (Suggested)

- /public
  - favicon.ico
  - bg.jpg (castle background texture)
- /src
  - /components
    - Scene.tsx (component to render each scene)
    - Ending.tsx (component for end screen)
    - QuoteBox.tsx (to display stylized quotes)
    - AmbitionMeter.tsx
  - /data
    - scenes.ts (all scenes and choices)
  - /pages
    - index.tsx (landing page)
    - game.tsx (handles navigation)
    - ending.tsx
  - App.tsx
  - main.tsx
- instruction.md
This helps Cursor understand how to structure the code.

9. 🧠 Logic Spec for the Choice System
md
Copy
Edit
## Game Logic

- Each scene has:
  - An ID
  - Text
  - A quote (optional)
  - Two choices: each with label, description, and nextScene ID
  - An optional effect on ambition score

- Keep track of:
  - Current scene
  - Choices made
  - Ambition score (range 0–100)

- At the end:
  - Show custom ending based on ambition level and choices made
10. 🧪 Scene Data Format (in code-style for easy parsing)
ts
Copy
Edit
// Example of a scene (in /data/scenes.ts)
{
  id: "scene1",
  title: "The Prophecy",
  quote: "All hail, Macbeth! Hail to thee...",
  text: "The witches speak a prophecy...",
  choices: [
    {
      label: "A",
      text: "Ignore the prophecy.",
      nextScene: "scene2A",
      ambitionChange: -10
    },
    {
      label: "B",
      text: "Act on the prophecy.",
      nextScene: "scene2B",
      ambitionChange: +20
    }
  ]
}
Letting Cursor know to build the game off a data-driven structure makes the site scalable and easy to change.

11. 📈 Ambition Meter Design Notes
md
Copy
Edit
## Ambition Meter Details
- A visual meter (horizontal bar or flame icon) that increases as the player makes darker choices
- Values range from 0 to 100
- Ends with low, medium, or high ambition ending
- Tooltips or labels:
  - “Balanced”
  - “Power-Hungry”
  - “Consumed by Ambition”
12. 💬 UI Microcopy Guidelines
md
Copy
Edit
## Microcopy Style Guide
- Tone: Dramatic, literary, slightly ominous
- Button labels: “Choose Your Fate”, “Proceed”, “Reflect”, “Try Again”
- Quotes: Should always be italicized and credited (e.g., *Macbeth, Act 1, Scene 3*)
- Tooltips: Use simple hints or reference inner thoughts (e.g., “What if you could change fate?”)
13. ✅ Final Deliverable Goals
md
Copy
Edit
## Deliverables Expected from AI

- Fully working website with branching choice-based scenes
- Mobile-responsive and styled to match Shakespearean/dark aesthetic
- Ambition meter that updates with each decision
- End screen showing result based on player path
- Easily expandable (just add new scenes to the data file)
- Bonus: deployable via Vercel/Netlify with 1-click deploy

🎯 Goal
Create a choice-based interactive website where the user plays as Macbeth. At each decision point, the player chooses between morally different actions, which affect:

The story outcome

A visible “Ambition Meter”

Final ending (multiple possible)

🔄 Core Gameplay Mechanics
Branching narrative: Clicking a choice changes the story.

Ambition meter: Increases or decreases based on user choices.

Three endings: Ambitious downfall, redemptive ending, or something in-between.

Direct quotes: Use actual quotes from Macbeth in scenes or text boxes.

🧱 Pages or Views
Start Screen

Title/logo

“Start Game” button

Optional “How to Play” modal

Scene Pages

Short descriptions of scenes adapted from key moments in the play (e.g., prophecy, murder of Duncan, Banquo’s ghost, Lady Macbeth’s guilt, etc.)

Two moral choices per scene

Display ambition meter

Dialogue or quotes from the play

Ending Page

Display user’s result based on ambition meter and choices

Summary of what their Macbeth became

About Page (optional)

Project context, theme explanation (ambition, power, guilt, etc.)

Your name(s)

🛠 Tech Stack
HTML + Tailwind CSS for styling

JavaScript for branching logic and ambition tracking

Data structure: JSON or JS object to hold scenes, choices, and outcomes

Optional: Save state in browser localStorage

🔊 Additional Features (Optional)
Sound effects (thunder, whispers)

Animated ambition meter

Voiceover or background music (eerie)

🧠 Concept
Create an interactive, branching narrative web game based on Macbeth, where the user plays as Macbeth and makes key decisions at major turning points in the play. Each decision affects the storyline and a visible Ambition Meter, culminating in one of multiple possible endings.

The purpose of this project is to demonstrate a deep understanding of the play’s characters, themes (especially ambition, power, guilt, and fate vs. free will), and moral dilemmas.

🛠 Tech Stack
HTML (structure)

Tailwind CSS (styling)

JavaScript (logic and interactivity)

JSON or JS object for storing scenes and choices

Optional: localStorage to save progress

🗺️ Page Structure
1. Home Page
Title: "Macbeth: Moral Choice Game"

“Start Game” button

Optional: “How to Play” modal or tooltip

2. Scene Pages
Each page should contain:

A dramatized scene description adapted from the play (key moments only)

A quote from Macbeth (original text)

Two moral choices for the player

A visible Ambition Meter

A function that updates story state and ambition score

Example:

js
Copy
Edit
{
  id: "scene1",
  title: "The Witches' Prophecy",
  text: "Three witches greet Macbeth with a prophecy: he will become king. Banquo is told his children will be kings.",
  quote: "All hail, Macbeth! Hail to thee, Thane of Glamis! Hail to thee, Thane of Cawdor! Hail to thee, that shalt be king hereafter!",
  choices: [
    { text: "Embrace the prophecy and begin plotting", nextScene: "scene2", ambitionChange: +10 },
    { text: "Ignore the prophecy and stay loyal", nextScene: "scene3", ambitionChange: -5 }
  ]
}
3. Ending Page
Based on ambition score and choice path, display one of the following:

High Ambition Ending: Macbeth becomes tyrant, dies in battle, guilt consumes him.

Low Ambition Ending: Macbeth resists temptation, remains noble, but haunted by fate.

Neutral Ending: Macbeth struggles, makes mixed choices, fate takes its toll.

Include a custom ending message:

"Your Macbeth let ambition rule him... and it led to ruin."

4. About Page (optional)
Brief explanation of project goal

Themes of ambition, guilt, moral choice

Student name(s)

⚙️ Core Logic
Use JS objects to store scenes and choices

Track ambitionScore as a global variable

Display ambition level (bar, number, or icon)

Use a central gameState object to keep track of progress

🎨 Styling & UX (Tailwind)
Gothic/dark color palette

Transitions between scenes (fade in/out)

Rounded buttons for choices

Ambition meter: red-to-black gradient bar at top of screen

Use appropriate font (e.g., Garamond or serif for Shakespearean tone)

🔊 Optional Enhancements
Thunder sound when ambition rises

Flickering torch or crown icon when ambition is high

Background music (haunting ambiance)

Voiceover lines from the play

✍️ Educational Goal
This project will:

Deepen understanding of Macbeth through interaction

Highlight themes like ambition and power

Use Shakespearean text to reinforce analysis

Be engaging, original, and reflective of critical thinking