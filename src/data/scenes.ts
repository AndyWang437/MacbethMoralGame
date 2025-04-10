import { Scene, CriticalAnalysis, ModernTranslation, WhatIfScenario } from '../types/game';

export const scenes: Scene[] = [
  {
    id: "scene1",
    title: "The Witches' Prophecy",
    text: "You encounter three witches who prophecy that you will become Thane of Cawdor and then King. Their words fill you with both excitement and unease.",
    quote: "All hail, Macbeth! Hail to thee, Thane of Cawdor! All hail, Macbeth, that shalt be king hereafter!",
    quoteSource: "First Witch, Act 1, Scene 3",
    choices: [
      {
        label: "A",
        text: "Trust the prophecy and let it guide you",
        nextScene: "scene2A",
        ambitionChange: +15
      },
      {
        label: "B",
        text: "Dismiss the prophecy as mere fantasy",
        nextScene: "scene2B",
        ambitionChange: -10
      },
      {
        label: "C",
        text: "Share the prophecy with Lady Macbeth",
        nextScene: "scene2C",
        ambitionChange: +5
      }
    ],
    criticalLens: {
      interpretations: [
        {
          title: "The Supernatural in Macbeth",
          description: "The witches represent the supernatural forces that influence human behavior, blurring the line between reality and illusion.",
          critic: "Prof. Michael Brown"
        },
        {
          title: "Psychological Projection",
          description: "The witches can be seen as manifestations of Macbeth's subconscious desires and ambitions.",
          critic: "Dr. Elizabeth Chen"
        }
      ],
      criticQuotes: [
        {
          text: "The witches are not merely supernatural beings, but manifestations of Macbeth's own ambition.",
          critic: "A.C. Bradley",
          source: "Shakespearean Tragedy"
        },
        {
          text: "The prophecy scene marks the moment when Macbeth's latent ambition is awakened and given form.",
          critic: "Harold Bloom",
          source: "Shakespeare: The Invention of the Human"
        }
      ],
      adaptations: [
        {
          title: "Macbeth (2015)",
          description: "A modern adaptation directed by Justin Kurzel, featuring Michael Fassbender and Marion Cotillard. Notable for its dark, atmospheric interpretation and psychological depth.",
          differences: [
            "The witches appear as young girls rather than old hags",
            "The prophecy is delivered in a more modern, psychological context",
            "The supernatural elements are more ambiguous"
          ]
        },
        {
          title: "Throne of Blood (1957)",
          description: "Akira Kurosawa's adaptation set in feudal Japan, where the witches are replaced by a forest spirit.",
          differences: [
            "Uses traditional Japanese theater techniques",
            "Emphasizes the cultural aspects of prophecy",
            "Portrays the supernatural through stylized performance"
          ]
        }
      ]
    },
    modernTranslation: {
      original: "All hail, Macbeth! Hail to thee, Thane of Cawdor! All hail, Macbeth, that shalt be king hereafter!",
      modern: "Greetings, Macbeth! You are the Thane of Cawdor! You will become king in the future!",
      explanation: "The witches are using formal, prophetic language to announce Macbeth's future titles. The repetition of 'Hail' emphasizes the importance of each title."
    },
    whatIfScenarios: [
      {
        id: "whatif1",
        title: "What if Macbeth ignored the prophecy?",
        description: "Exploring an alternate path where Macbeth dismisses the witches' words.",
        originalChoice: "Trust the prophecy and let it guide you",
        alternativeChoice: "Completely ignore the witches and focus on your current duties.",
        consequences: [
          "Macbeth remains loyal to Duncan",
          "No murder plot is formed",
          "The natural order of succession is maintained",
          "Macbeth lives a peaceful but unremarkable life"
        ]
      },
      {
        id: "whatif2",
        title: "What if Macbeth sought guidance from Duncan?",
        description: "Exploring how the story might change if Macbeth confided in King Duncan about the prophecy.",
        originalChoice: "Share the prophecy with Lady Macbeth",
        alternativeChoice: "Seek Duncan's counsel about the strange encounter.",
        consequences: [
          "Duncan might have taken precautions",
          "The prophecy could have been interpreted differently",
          "Macbeth might have gained Duncan's trust",
          "The natural succession could have been altered"
        ]
      }
    ]
  },
  {
    id: "scene2A",
    title: "The First Step",
    text: "You've chosen to trust the prophecy. As you return to your castle, you receive news that the Thane of Cawdor has been executed for treason, and Duncan has named you as his successor. The first part of the prophecy has come true.",
    quote: "The Thane of Cawdor lives: why do you dress me in borrowed robes?",
    quoteSource: "Act 1, Scene 3",
    choices: [
      {
        label: "A",
        text: "Accept the title with humility",
        nextScene: "scene3E",
        ambitionChange: +5
      },
      {
        label: "B",
        text: "Let the prophecy strengthen your determination",
        nextScene: "scene3E",
        ambitionChange: +15
      }
    ]
  },
  {
    id: "scene2B",
    title: "The Path of Duty",
    text: "You've chosen to dismiss the prophecy. As you return to your duties, you receive news that the Thane of Cawdor has been executed for treason, and Duncan has named you as his successor. Despite your skepticism, the first part of the prophecy has come true.",
    quote: "The service and the loyalty I owe, in doing it, pays itself.",
    quoteSource: "Act 1, Scene 4",
    choices: [
      {
        label: "A",
        text: "Remain loyal to Duncan",
        nextScene: "scene3E",
        ambitionChange: -10
      },
      {
        label: "B",
        text: "Begin to question your skepticism",
        nextScene: "scene3E",
        ambitionChange: +5
      }
    ]
  },
  {
    id: "scene2C",
    title: "Loyalty to Duncan",
    text: "You choose to remain loyal to King Duncan, dismissing the witches' prophecy as mere trickery. As you return to your duties, you receive news that the Thane of Cawdor has been executed for treason, and Duncan has named you as his successor.",
    quote: "The service and the loyalty I owe, in doing it, pays itself.",
    quoteSource: "Macbeth, Act 1, Scene 4",
    choices: [
      {
        label: "A",
        text: "Accept the honor with humility and continue serving Duncan faithfully.",
        nextScene: "scene3A",
        ambitionChange: -5
      },
      {
        label: "B",
        text: "Begin to question if the witches' prophecy might be coming true.",
        nextScene: "scene3B",
        ambitionChange: 5
      },
      {
        label: "C",
        text: "Share your concerns about the prophecy with Duncan.",
        nextScene: "scene3C",
        ambitionChange: -10
      },
      {
        label: "D",
        text: "Use this opportunity to strengthen your position at court.",
        nextScene: "scene3D",
        ambitionChange: 10
      }
    ],
    criticalLens: {
      interpretations: [
        {
          title: "The Nature of Loyalty",
          description: "This scene explores the tension between personal ambition and feudal loyalty in medieval Scotland.",
          critic: "Dr. Elizabeth Smith"
        },
        {
          title: "The Role of Fate",
          description: "The fulfillment of the first prophecy raises questions about destiny and free will.",
          critic: "Dr. James Wilson"
        },
        {
          title: "Political Power Dynamics",
          description: "The scene reveals the complex power structures of medieval Scottish court politics.",
          critic: "Prof. David Thompson"
        }
      ],
      criticQuotes: [
        {
          text: "Macbeth's initial loyalty to Duncan represents the ideal feudal relationship between lord and vassal.",
          critic: "Harold Bloom",
          source: "Shakespeare: The Invention of the Human"
        },
        {
          text: "The execution of the Thane of Cawdor foreshadows the cycle of violence that will consume Macbeth.",
          critic: "A.C. Bradley",
          source: "Shakespearean Tragedy"
        }
      ],
      adaptations: [
        {
          title: "Macbeth (1971)",
          description: "Roman Polanski's adaptation, known for its graphic violence and psychological realism. Notable for its historical accuracy and attention to period detail.",
          differences: [
            "Emphasizes the political aspects of loyalty",
            "Shows more of the feudal system in action",
            "Focuses on the practical implications of succession"
          ]
        },
        {
          title: "Macbeth (2010)",
          description: "Patrick Stewart's portrayal in a modern military setting, emphasizing the political machinations of power.",
          differences: [
            "Set in a Soviet-style state",
            "Uses modern political context",
            "Emphasizes the bureaucratic aspects of power"
          ]
        }
      ]
    },
    modernTranslation: {
      original: "The service and the loyalty I owe, in doing it, pays itself.",
      modern: "The loyalty and service I owe to the king is its own reward.",
      explanation: "Macbeth is expressing the feudal concept that serving one's lord is both a duty and a privilege."
    },
    whatIfScenarios: [
      {
        id: "whatif2",
        title: "What if Duncan had different plans?",
        description: "Exploring how different succession plans might have affected Macbeth's choices.",
        originalChoice: "Accept the honor with humility and continue serving Duncan faithfully.",
        alternativeChoice: "Duncan names Malcolm as his immediate successor instead.",
        consequences: [
          "Macbeth might feel slighted",
          "The prophecy would seem less likely to come true",
          "Different power dynamics in the court",
          "Potential for political tension between Macbeth and Malcolm"
        ]
      },
      {
        id: "whatif3",
        title: "What if Macbeth revealed the prophecy?",
        description: "Exploring the consequences if Macbeth had been completely honest about the witches' prophecy.",
        originalChoice: "Begin to question if the witches' prophecy might be coming true.",
        alternativeChoice: "Share the full prophecy with Duncan and the court.",
        consequences: [
          "Duncan might have taken the prophecy seriously",
          "The court might have viewed Macbeth differently",
          "Banquo's role might have been more prominent",
          "The witches' influence might have been investigated"
        ]
      }
    ]
  },
  {
    id: "scene2B",
    title: "Lady Macbeth's Influence",
    text: "You write to Lady Macbeth about the prophecy. She sees this as an opportunity and begins to plan Duncan's murder. When you return home, she questions your manhood and determination, saying you are 'too full o' the milk of human kindness.' She urges you to 'look like the innocent flower, but be the serpent under it.'",
    quote: "Art thou afeard to be the same in thine own act and valour as thou art in desire?",
    quoteSource: "Act 1, Scene 7",
    choices: [
      {
        label: "A",
        text: "Stand firm against her manipulation",
        nextScene: "scene3C",
        ambitionChange: -15,
        guiltChange: 0
      },
      {
        label: "B",
        text: "Agree to help murder Duncan",
        nextScene: "scene3D",
        ambitionChange: +25,
        guiltChange: 0
      },
      {
        label: "C",
        text: "Seek counsel from Banquo about the prophecy",
        nextScene: "scene3E",
        ambitionChange: -10,
        guiltChange: 0
      },
      {
        label: "D",
        text: "Use her ambition to strengthen your own determination",
        nextScene: "scene3F",
        ambitionChange: +20,
        guiltChange: 0
      }
    ],
    criticalLens: {
      interpretations: [
        {
          title: "Gender and Power",
          description: "Lady Macbeth's manipulation of gender roles reveals the complex power dynamics in their relationship.",
          critic: "Dr. Maria Garcia"
        },
        {
          title: "The Psychology of Manipulation",
          description: "This scene demonstrates how Lady Macbeth uses psychological tactics to influence Macbeth's decisions.",
          critic: "Dr. James Wilson"
        },
        {
          title: "The Role of Ambition",
          description: "The scene explores how ambition can be both a driving force and a destructive influence.",
          critic: "Prof. David Thompson"
        }
      ],
      criticQuotes: [
        {
          text: "Lady Macbeth's manipulation of gender expectations reveals the fragility of masculine power in the play.",
          critic: "Prof. Elizabeth Chen",
          source: "Gender Politics in Shakespeare"
        },
        {
          text: "The scene marks a crucial turning point where Macbeth's moral compass begins to waver under pressure.",
          critic: "Harold Bloom",
          source: "Shakespeare: The Invention of the Human"
        }
      ],
      adaptations: [
        {
          title: "Lady Macbeth (2016)",
          description: "A film that explores the character of Lady Macbeth through a feminist lens.",
          differences: [
            "Focuses on Lady Macbeth's perspective",
            "Examines the cost of maintaining power",
            "Updates the gender dynamics for modern audiences"
          ]
        },
        {
          title: "Macbeth (2015)",
          description: "Justin Kurzel's adaptation emphasizes the psychological aspects of the relationship.",
          differences: [
            "Uses realistic psychological horror",
            "Emphasizes PTSD and trauma",
            "Blends supernatural and psychological elements"
          ]
        }
      ]
    },
    modernTranslation: {
      original: "Art thou afeard to be the same in thine own act and valour as thou art in desire?",
      modern: "Are you afraid to act on your desires with the same courage you feel them?",
      explanation: "Lady Macbeth is questioning Macbeth's masculinity and courage, suggesting he lacks the strength to act on his ambitions."
    },
    whatIfScenarios: [
      {
        id: "whatif4",
        title: "What if Macbeth had stronger convictions?",
        description: "Exploring how the story might change if Macbeth had resisted Lady Macbeth's influence more strongly.",
        originalChoice: "Agree to help murder Duncan",
        alternativeChoice: "Firmly reject the murder plan",
        consequences: [
          "Duncan might have lived longer",
          "The natural succession would have continued",
          "Macbeth might have remained a loyal thane",
          "Lady Macbeth's influence would have been limited"
        ]
      },
      {
        id: "whatif5",
        title: "What if Lady Macbeth had different motives?",
        description: "Exploring how the story might change if Lady Macbeth had different reasons for wanting power.",
        originalChoice: "Use her ambition to strengthen your own determination",
        alternativeChoice: "Question her true motives",
        consequences: [
          "Their relationship might have been more equal",
          "The murder plot might have been abandoned",
          "Different power dynamics in their marriage",
          "Alternative paths to power might have been considered"
        ]
      }
    ]
  },
  {
    id: "scene3A",
    title: "The King's Arrival",
    text: "Duncan arrives at your castle, praising its pleasant atmosphere. He speaks of the 'sweet air' and 'gentle senses,' unaware of the murderous plot brewing within. Lady Macbeth greets him with false hospitality.",
    quote: "This castle hath a pleasant seat; the air nimbly and sweetly recommends itself unto our gentle senses.",
    quoteSource: "Act 1, Scene 6",
    choices: [
      {
        label: "A",
        text: "Proceed with the murder plan",
        nextScene: "scene3D",
        ambitionChange: +20
      },
      {
        label: "B",
        text: "Seek a way to warn Duncan",
        nextScene: "scene3E",
        ambitionChange: -15
      }
    ]
  },
  {
    id: "scene3B",
    title: "The Porter's Scene",
    text: "After Duncan's murder, you hear the drunken Porter's ramblings about being the gatekeeper of hell. His dark humor about 'equivocation' and 'drink' mirrors your own moral corruption. The knocking at the gate grows louder, and you must decide how to handle the arriving nobles.",
    quote: "Knock, knock! Who's there, in the other devil's name?",
    quoteSource: "Act 2, Scene 3",
    choices: [
      {
        label: "A",
        text: "Let the Porter handle it and maintain composure",
        nextScene: "scene4A",
        ambitionChange: 10
      },
      {
        label: "B",
        text: "Take control of the situation yourself",
        nextScene: "scene4B",
        ambitionChange: 15
      },
      {
        label: "C",
        text: "Use the chaos to your advantage",
        nextScene: "scene4C",
        ambitionChange: 20
      },
      {
        label: "D",
        text: "Show signs of distress to appear innocent",
        nextScene: "scene4D",
        ambitionChange: -5
      }
    ],
    criticalLens: {
      interpretations: [
        {
          title: "Comic Relief and Tension",
          description: "The Porter's scene provides comic relief while heightening the dramatic tension of the murder discovery.",
          critic: "Dr. Sarah Johnson"
        },
        {
          title: "Moral Corruption",
          description: "The Porter's drunken ramblings about hell mirror Macbeth's moral descent.",
          critic: "Dr. James Wilson"
        },
        {
          title: "Dramatic Irony",
          description: "The audience's knowledge of the murder creates tension as the Porter jokes about hell.",
          critic: "Prof. David Thompson"
        }
      ],
      criticQuotes: [
        {
          text: "The Porter's scene serves as a crucial bridge between the murder and its discovery, using humor to heighten the dramatic tension.",
          critic: "A.C. Bradley",
          source: "Shakespearean Tragedy"
        },
        {
          text: "The Porter's references to hell and equivocation foreshadow the moral chaos that will consume Scotland.",
          critic: "Harold Bloom",
          source: "Shakespeare: The Invention of the Human"
        }
      ],
      adaptations: [
        {
          title: "Macbeth (1971)",
          description: "Roman Polanski's adaptation emphasizes the dark humor and tension of the Porter scene.",
          differences: [
            "Uses visual symbolism to enhance the scene's meaning",
            "Emphasizes the contrast between humor and horror",
            "Focuses on the psychological impact of the murder"
          ]
        },
        {
          title: "Macbeth (2015)",
          description: "Justin Kurzel's adaptation presents the Porter scene with a more psychological focus.",
          differences: [
            "Uses realistic psychological horror",
            "Emphasizes PTSD and trauma",
            "Blends supernatural and psychological elements"
          ]
        }
      ]
    },
    modernTranslation: {
      original: "Knock, knock! Who's there, in the other devil's name?",
      modern: "Who's knocking at the door at this ungodly hour?",
      explanation: "The Porter's drunken humor about being the gatekeeper of hell reflects the moral corruption in the castle."
    },
    whatIfScenarios: [
      {
        id: "whatif8",
        title: "What if the Porter had been sober?",
        description: "Exploring how the scene might have played out if the Porter had been more alert.",
        originalChoice: "Let the Porter handle it and maintain composure",
        alternativeChoice: "The Porter is sober and notices something amiss",
        consequences: [
          "The murder might have been discovered sooner",
          "Macbeth might have been caught off guard",
          "Different power dynamics might have emerged",
          "The investigation might have taken a different turn"
        ]
      },
      {
        id: "whatif9",
        title: "What if Macbeth had answered the door?",
        description: "Exploring how the scene might have changed if Macbeth had personally answered the knocking.",
        originalChoice: "Take control of the situation yourself",
        alternativeChoice: "Macbeth personally answers the door",
        consequences: [
          "The nobles might have noticed his distress",
          "The investigation might have started differently",
          "Macbeth might have revealed too much",
          "The power dynamics might have shifted"
        ]
      }
    ]
  },
  {
    id: "scene3C",
    title: "The Path of Honor",
    text: "You've chosen to resist Lady Macbeth's influence. As you stand firm in your decision, she questions your manhood and determination, trying to sway you back to the murderous path.",
    quote: "When you durst do it, then you were a man; And to be more than what you were, you would be so much more the man.",
    quoteSource: "Act 1, Scene 7",
    choices: [
      {
        label: "A",
        text: "Maintain your honorable stance",
        nextScene: "scene3E",
        ambitionChange: -20
      },
      {
        label: "B",
        text: "Let her words affect you",
        nextScene: "scene3D",
        ambitionChange: +15
      }
    ]
  },
  {
    id: "scene3D",
    title: "The Murder",
    text: "You've decided to proceed with Duncan's murder. As you approach his chamber, you see a dagger floating before you, its handle pointing toward your hand. You hear a voice cry 'Sleep no more!'",
    quote: "Is this a dagger which I see before me, The handle toward my hand?",
    quoteSource: "Act 2, Scene 1",
    choices: [
      {
        label: "A",
        text: "Follow the dagger's guidance",
        nextScene: "scene3F",
        ambitionChange: +25
      },
      {
        label: "B",
        text: "Recognize this as a sign to stop",
        nextScene: "scene3E",
        ambitionChange: -20
      }
    ]
  },
  {
    id: "scene3E",
    title: "The Confession",
    text: "You confess to the murder of Duncan. The court is in shock. Lady Macbeth tries to intervene, claiming you are not in your right mind. The guards and nobles are torn between their loyalty to the crown and their horror at your admission.",
    quote: "I have done the deed. Didst thou not hear a noise?",
    quoteSource: "Act 2, Scene 2",
    choices: [
      {
        label: "A",
        text: "Stand by your confession and accept the consequences",
        nextScene: "scene4A",
        ambitionChange: -30,
        guiltChange: -20
      },
      {
        label: "B",
        text: "Retract your confession, claiming temporary madness",
        nextScene: "scene3F",
        ambitionChange: +10,
        guiltChange: +10
      },
      {
        label: "C",
        text: "Accuse Lady Macbeth of forcing you into the act",
        nextScene: "scene3G",
        ambitionChange: +5,
        guiltChange: +15
      },
      {
        label: "D",
        text: "Claim the witches made you do it",
        nextScene: "scene5F",
        ambitionChange: 0,
        guiltChange: +5
      }
    ],
    criticalLens: {
      interpretations: [
        {
          title: "The Nature of Confession",
          description: "Macbeth's confession reveals the psychological toll of his actions and the conflict between guilt and ambition.",
          critic: "Dr. Emily Wilson"
        }
      ],
      criticQuotes: [
        {
          text: "The confession scene marks a crucial turning point in Macbeth's moral journey.",
          critic: "Prof. James Thompson",
          source: "Macbeth: A Critical Analysis"
        }
      ],
      adaptations: [
        {
          title: "Macbeth (2015)",
          description: "Justin Kurzel's adaptation emphasizes the psychological impact of confession through intense close-ups and sound design.",
          differences: [
            "Focus on facial expressions",
            "Use of silence and ambient sound",
            "Emphasis on psychological tension"
          ]
        }
      ]
    },
    modernTranslation: {
      original: "I have done the deed. Didst thou not hear a noise?",
      modern: "I've committed the murder. Didn't you hear anything?",
      explanation: "Macbeth's confession to Lady Macbeth reveals his immediate guilt and paranoia after the murder."
    },
    whatIfScenarios: [
      {
        id: "whatif4",
        title: "What if Macbeth had confessed publicly?",
        description: "Exploring how a public confession might have changed the course of events.",
        originalChoice: "Confess your crime and face the consequences",
        alternativeChoice: "Confess publicly in front of the entire court",
        consequences: [
          "Immediate arrest and trial",
          "Lady Macbeth's role might be exposed",
          "The witches' influence might be investigated",
          "Different power dynamics in Scotland"
        ]
      }
    ]
  },
  {
    id: "scene4A",
    title: "The Aftermath",
    text: "You've chosen to recognize the dagger as a sign to stop. As you turn away from Duncan's chamber, you must decide how to handle the situation.",
    quote: "I go, and it is done; the bell invites me. Hear it not, Duncan; for it is a knell That summons thee to heaven or to hell.",
    quoteSource: "Act 2, Scene 1",
    choices: [
      {
        label: "A",
        text: "Confess your intentions to Duncan",
        nextScene: "scene4E",
        ambitionChange: -25
      },
      {
        label: "B",
        text: "Keep your thoughts to yourself",
        nextScene: "scene3E",
        ambitionChange: -10
      }
    ]
  },
  {
    id: "scene4B",
    title: "The Investigation",
    text: "The murder of Duncan has been discovered. The court is in chaos, and suspicion falls on the guards. You must decide how to handle the investigation.",
    quote: "O, yet I do repent me of my fury, That I did kill them.",
    quoteSource: "Act 2, Scene 3",
    choices: [
      {
        label: "A",
        text: "Maintain the guards' guilt",
        nextScene: "scene4E",
        ambitionChange: +20
      },
      {
        label: "B",
        text: "Express doubt about their guilt",
        nextScene: "scene3E",
        ambitionChange: -15
      }
    ]
  },
  {
    id: "scene4C",
    title: "The Frame-up",
    text: "You've decided to frame someone else for Duncan's murder. The evidence you plant points to one of Duncan's loyal servants. The court is in chaos.",
    quote: "False face must hide what the false heart doth know.",
    quoteSource: "Act 1, Scene 7",
    choices: [
      {
        label: "A",
        text: "Strengthen the evidence",
        nextScene: "scene4E",
        ambitionChange: +25
      },
      {
        label: "B",
        text: "Show mercy to the accused",
        nextScene: "scene3E",
        ambitionChange: -10
      }
    ]
  },
  {
    id: "scene4D",
    title: "The Power Struggle",
    text: "You've chosen to follow Lady Macbeth's advice to maintain power. The court is divided, with some nobles supporting you and others growing suspicious.",
    quote: "What's done cannot be undone.",
    quoteSource: "Act 5, Scene 1",
    choices: [
      {
        label: "A",
        text: "Consolidate your power",
        nextScene: "scene4E",
        ambitionChange: +20
      },
      {
        label: "B",
        text: "Show mercy to your enemies",
        nextScene: "scene3E",
        ambitionChange: -15
      }
    ]
  },
  {
    id: "scene4E",
    title: "The Consequences",
    text: "You've been caught in the act of murder. The court is in chaos, and suspicion falls on the guards. You must decide how to handle the consequences.",
    quote: "I have done the deed. Didst thou not hear a noise?",
    quoteSource: "Act 2, Scene 2",
    choices: [
      {
        label: "A",
        text: "Confess your intentions to Duncan",
        nextScene: "scene4A",
        ambitionChange: -25
      },
      {
        label: "B",
        text: "Keep your thoughts to yourself",
        nextScene: "scene5B",
        ambitionChange: -10
      }
    ]
  },
  {
    id: "scene5A",
    title: "Banquo's Ghost Appears",
    text: "As you acknowledge the empty chair, Banquo's ghost suddenly appears, sitting in his place. His face is pale and bloody, his eyes fixed upon you. The guests cannot see him, but to you, he is as real as the table before you.",
    quote: "Avaunt! and quit my sight! let the earth hide thee!",
    quoteSource: "Act 3, Scene 4",
    choices: [
      {
        label: "A",
        text: "Confront the ghost and express your guilt",
        nextScene: "scene5C",
        ambitionChange: -15,
        guiltChange: 20
      },
      {
        label: "B",
        text: "Try to maintain composure despite the vision",
        nextScene: "scene5B",
        ambitionChange: 5,
        guiltChange: 10
      },
      {
        label: "C",
        text: "Blame the ghost on your tiredness",
        nextScene: "scene5D",
        ambitionChange: 10,
        guiltChange: 5
      },
      {
        label: "D",
        text: "Seek comfort from Lady Macbeth",
        nextScene: "scene5E",
        ambitionChange: -5,
        guiltChange: 15
      }
    ],
    criticalLens: {
      interpretations: [
        {
          title: "The Supernatural and the Mind",
          description: "The ghost's appearance can be interpreted as either a supernatural phenomenon or a manifestation of Macbeth's guilt-ridden conscience.",
          critic: "Dr. Sarah Johnson"
        },
        {
          title: "The Nature of Guilt",
          description: "The ghost represents the psychological toll of Macbeth's crimes and his inability to escape his guilt.",
          critic: "Dr. James Wilson"
        },
        {
          title: "The Role of Perception",
          description: "The scene explores how guilt can alter one's perception of reality.",
          critic: "Prof. David Thompson"
        }
      ],
      criticQuotes: [
        {
          text: "The ghost is a projection of Macbeth's guilty conscience, a psychological manifestation of his inner turmoil.",
          critic: "Harold Bloom",
          source: "Shakespeare: The Invention of the Human"
        },
        {
          text: "The banquet scene represents the moment when Macbeth's power begins to unravel, as his guilt becomes visible to others.",
          critic: "A.C. Bradley",
          source: "Shakespearean Tragedy"
        }
      ],
      adaptations: [
        {
          title: "Macbeth (2015)",
          description: "Justin Kurzel's adaptation emphasizes the psychological horror of the ghost scene.",
          differences: [
            "Uses realistic psychological horror",
            "Emphasizes PTSD and trauma",
            "Blends supernatural and psychological elements"
          ]
        },
        {
          title: "Macbeth (1971)",
          description: "Roman Polanski's adaptation presents the ghost scene with a focus on the supernatural.",
          differences: [
            "Uses visual effects to enhance the ghost's appearance",
            "Emphasizes the contrast between celebration and horror",
            "Focuses on the supernatural elements"
          ]
        }
      ]
    },
    modernTranslation: {
      original: "Avaunt! and quit my sight! let the earth hide thee!",
      modern: "Go away! Get out of my sight! May the earth swallow you up!",
      explanation: "Macbeth's terrified reaction to the ghost shows his inability to cope with the consequences of his actions."
    },
    whatIfScenarios: [
      {
        id: "whatif16",
        title: "What if the ghost had spoken?",
        description: "Exploring how the story might change if Banquo's ghost had spoken to Macbeth.",
        originalChoice: "Confront the ghost and express your guilt",
        alternativeChoice: "The ghost speaks to Macbeth",
        consequences: [
          "Macbeth might have been more affected",
          "Different power dynamics might have emerged",
          "The investigation might have taken a different turn",
          "Macbeth might have had to face his crimes more directly"
        ]
      },
      {
        id: "whatif17",
        title: "What if the ghost had been visible to others?",
        description: "Exploring how the story might change if the guests had also seen Banquo's ghost.",
        originalChoice: "Try to maintain composure despite the vision",
        alternativeChoice: "The guests see the ghost as well",
        consequences: [
          "The supernatural elements might have been confirmed",
          "Different power dynamics might have emerged",
          "The investigation might have taken a different turn",
          "Macbeth might have had to explain the ghost's presence"
        ]
      }
    ]
  },
  {
    id: "scene5B",
    title: "The Path of Tyranny",
    text: "Despite the ghost's appearance, you manage to maintain your composure. Your ambition begins to harden your heart, and you feel a growing determination to maintain your power at any cost. The guests look at you with concern, but you dismiss their worries.",
    quote: "I am in blood stepped in so far that, should I wade no more, returning were as tedious as go o'er.",
    quoteSource: "Act 3, Scene 4",
    choices: [
      {
        label: "A",
        text: "Embrace your growing tyranny and assert dominance",
        nextScene: "scene5D",
        ambitionChange: 20,
        guiltChange: -10
      },
      {
        label: "B",
        text: "Question your path and consider the consequences",
        nextScene: "scene5C",
        ambitionChange: -10,
        guiltChange: 15
      },
      {
        label: "C",
        text: "Use fear to maintain control over your subjects",
        nextScene: "scene5E",
        ambitionChange: 15,
        guiltChange: 5
      },
      {
        label: "D",
        text: "Seek counsel from the witches once more",
        nextScene: "scene5F",
        ambitionChange: 10,
        guiltChange: 0
      }
    ],
    criticalLens: {
      interpretations: [
        {
          title: "The Point of No Return",
          description: "This scene marks Macbeth's transition from reluctant murderer to determined tyrant, showing how power can corrupt absolutely.",
          critic: "Dr. James Wilson"
        },
        {
          title: "The Psychology of Power",
          description: "Macbeth's growing tyranny reveals how absolute power can lead to moral decay and psychological isolation.",
          critic: "Dr. Sarah Johnson"
        },
        {
          title: "The Nature of Ambition",
          description: "The scene demonstrates how unchecked ambition can transform a once noble character into a ruthless tyrant.",
          critic: "Prof. David Thompson"
        }
      ],
      criticQuotes: [
        {
          text: "Macbeth's realization that he has gone too far to turn back marks a crucial turning point in his character.",
          critic: "Prof. Elizabeth Chen",
          source: "The Psychology of Power"
        },
        {
          text: "The banquet scene represents the moment when Macbeth's power begins to unravel, as his guilt becomes visible to others.",
          critic: "A.C. Bradley",
          source: "Shakespearean Tragedy"
        }
      ],
      adaptations: [
        {
          title: "Throne of Blood (1957)",
          description: "Akira Kurosawa's adaptation set in feudal Japan, where the supernatural elements are portrayed through Noh theater traditions.",
          differences: [
            "Uses traditional Japanese theater techniques",
            "Emphasizes the cultural aspects of ambition",
            "Portrays the supernatural through stylized performance"
          ]
        },
        {
          title: "Macbeth (2015)",
          description: "Justin Kurzel's adaptation emphasizes the psychological horror of Macbeth's descent into tyranny.",
          differences: [
            "Uses realistic psychological horror",
            "Emphasizes PTSD and trauma",
            "Blends supernatural and psychological elements"
          ]
        }
      ]
    },
    modernTranslation: {
      original: "I am in blood stepped in so far that, should I wade no more, returning were as tedious as go o'er.",
      modern: "I've gone so far in this bloody path that turning back would be as difficult as going forward.",
      explanation: "Macbeth realizes he has committed too many crimes to turn back now, and must continue down his path of tyranny."
    },
    whatIfScenarios: [
      {
        id: "whatif18",
        title: "What if Macbeth had chosen a different path?",
        description: "Exploring how the story might change if Macbeth had rejected tyranny and sought redemption.",
        originalChoice: "Embrace your growing tyranny and assert dominance",
        alternativeChoice: "Choose the path of redemption",
        consequences: [
          "The cycle of violence might have been broken",
          "Different power dynamics might have emerged",
          "Macbeth might have found peace",
          "The kingdom might have been spared further bloodshed"
        ]
      },
      {
        id: "whatif19",
        title: "What if the guests had rebelled?",
        description: "Exploring how the story might change if the guests had openly opposed Macbeth's tyranny.",
        originalChoice: "Use fear to maintain control over your subjects",
        alternativeChoice: "The guests openly rebel against Macbeth",
        consequences: [
          "Macbeth might have faced immediate opposition",
          "Different power dynamics might have emerged",
          "The investigation might have taken a different turn",
          "The kingdom might have been divided"
        ]
      }
    ]
  },
  {
    id: "scene5C",
    title: "Lady Macbeth's Intervention",
    text: "Lady Macbeth dismisses the guests and confronts you about your behavior. She questions your manhood and determination, trying to help you regain composure. Her words are sharp, but you sense her growing concern for your mental state.",
    quote: "O proper stuff! This is the very painting of your fear.",
    quoteSource: "Act 3, Scene 4",
    choices: [
      {
        label: "A",
        text: "Accept her help and try to regain control",
        nextScene: "scene5D",
        ambitionChange: 5,
        guiltChange: -5
      },
      {
        label: "B",
        text: "Reject her influence and embrace your fears",
        nextScene: "scene5E",
        ambitionChange: -5,
        guiltChange: 10
      },
      {
        label: "C",
        text: "Question her about her own guilt",
        nextScene: "scene5F",
        ambitionChange: -10,
        guiltChange: 15
      },
      {
        label: "D",
        text: "Use her concern to manipulate her",
        nextScene: "scene5G",
        ambitionChange: 15,
        guiltChange: -10
      }
    ],
    criticalLens: {
      interpretations: [
        {
          title: "Gender and Power",
          description: "Lady Macbeth's intervention reveals the complex power dynamics in their relationship and her attempts to maintain control.",
          critic: "Dr. Maria Garcia"
        },
        {
          title: "The Psychology of Control",
          description: "This scene demonstrates how Lady Macbeth uses psychological manipulation to maintain her influence over Macbeth.",
          critic: "Dr. James Wilson"
        },
        {
          title: "The Role of Guilt",
          description: "The scene explores how guilt affects both characters differently, with Lady Macbeth trying to suppress it while Macbeth is consumed by it.",
          critic: "Prof. David Thompson"
        }
      ],
      criticQuotes: [
        {
          text: "Lady Macbeth's intervention reveals the fragility of masculine power in the play and her own growing desperation.",
          critic: "Prof. Elizabeth Chen",
          source: "Gender Politics in Shakespeare"
        },
        {
          text: "The scene marks a crucial turning point where Lady Macbeth's control over her husband begins to wane.",
          critic: "Harold Bloom",
          source: "Shakespeare: The Invention of the Human"
        }
      ],
      adaptations: [
        {
          title: "Lady Macbeth (2016)",
          description: "A film that explores the character of Lady Macbeth through a feminist lens.",
          differences: [
            "Focuses on Lady Macbeth's perspective",
            "Examines the cost of maintaining power",
            "Updates the gender dynamics for modern audiences"
          ]
        },
        {
          title: "Macbeth (2015)",
          description: "Justin Kurzel's adaptation emphasizes the psychological aspects of the relationship.",
          differences: [
            "Uses realistic psychological horror",
            "Emphasizes PTSD and trauma",
            "Blends supernatural and psychological elements"
          ]
        }
      ]
    },
    modernTranslation: {
      original: "O proper stuff! This is the very painting of your fear.",
      modern: "What nonsense! This is just your fear playing tricks on you.",
      explanation: "Lady Macbeth dismisses Macbeth's supernatural experience as mere cowardice, trying to maintain control of the situation."
    },
    whatIfScenarios: [
      {
        id: "whatif20",
        title: "What if Lady Macbeth had shown more empathy?",
        description: "Exploring how the story might change if Lady Macbeth had shown more understanding of Macbeth's psychological state.",
        originalChoice: "Accept her help and try to regain control",
        alternativeChoice: "Lady Macbeth shows genuine concern",
        consequences: [
          "Macbeth might have found emotional support",
          "Different power dynamics might have emerged",
          "The relationship might have strengthened",
          "Macbeth might have been more open about his fears"
        ]
      },
      {
        id: "whatif21",
        title: "What if Macbeth had confronted her about her role?",
        description: "Exploring how the story might change if Macbeth had openly blamed Lady Macbeth for their situation.",
        originalChoice: "Question her about her own guilt",
        alternativeChoice: "Macbeth openly blames Lady Macbeth",
        consequences: [
          "Their relationship might have fractured",
          "Different power dynamics might have emerged",
          "Lady Macbeth might have faced her own guilt sooner",
          "The investigation might have taken a different turn"
        ]
      }
    ]
  },
  {
    id: "scene5D",
    title: "The Second Prophecy",
    text: "You return to the witches, seeking more guidance. They show you three apparitions that deliver new prophecies, each more cryptic than the last. The first warns of Macduff, the second says no man born of woman can harm you, and the third says you will be safe until Birnam Wood comes to Dunsinane.",
    quote: "Macbeth! Macbeth! Macbeth! beware Macduff; Beware the thane of Fife.",
    quoteSource: "First Apparition, Act 4, Scene 1",
    choices: [
      {
        label: "A",
        text: "Take the prophecies at face value and act accordingly",
        nextScene: "scene5E",
        ambitionChange: 25,
        guiltChange: -10
      },
      {
        label: "B",
        text: "Question the witches' intentions and seek clarity",
        nextScene: "scene5F",
        ambitionChange: -15,
        guiltChange: 15
      },
      {
        label: "C",
        text: "Use the prophecies to strengthen your determination",
        nextScene: "scene5G",
        ambitionChange: 20,
        guiltChange: -5
      },
      {
        label: "D",
        text: "Consider the moral implications of your actions",
        nextScene: "scene5E",
        ambitionChange: -10,
        guiltChange: 20
      }
    ]
  },
  {
    id: "scene5E",
    title: "The Path of Desperation",
    text: "After hearing the prophecies, you grow increasingly desperate to maintain your power. You order the murder of Macduff's family, believing this will secure your position. The news of their deaths weighs heavily on your conscience, but you feel you have no choice but to continue down this path.",
    quote: "The very firstlings of my heart shall be the firstlings of my hand.",
    quoteSource: "Act 4, Scene 1",
    choices: [
      {
        label: "A",
        text: "Embrace your growing tyranny and order more executions",
        nextScene: "scene5F",
        ambitionChange: 30,
        guiltChange: -15
      },
      {
        label: "B",
        text: "Question your actions and consider the consequences",
        nextScene: "scene5G",
        ambitionChange: -20,
        guiltChange: 25
      },
      {
        label: "C",
        text: "Use fear to maintain control over your subjects",
        nextScene: "scene5F",
        ambitionChange: 25,
        guiltChange: 10
      },
      {
        label: "D",
        text: "Seek comfort in the prophecies' promises",
        nextScene: "scene5G",
        ambitionChange: 15,
        guiltChange: -5
      }
    ]
  },
  {
    id: "scene1A",
    title: "The Battlefield",
    text: "Macbeth stands victorious on the battlefield, having defeated Macdonwald. The air is thick with the scent of blood and victory. The Captain describes your bravery to King Duncan, saying you 'unseamed him from the nave to th'chaps.' Ross arrives with news of your victory over the Norwegian forces, calling you 'Bellona's bridegroom.'",
    quote: "For brave Macbeth—well he deserves that name—Disdaining fortune, with his brandished steel, Which smoked with bloody execution.",
    quoteSource: "Act 1, Scene 2",
    choices: [
      {
        label: "A",
        text: "Accept the praise humbly and focus on duty",
        nextScene: "scene1",
        ambitionChange: -5
      },
      {
        label: "B",
        text: "Let the praise fuel your ambition",
        nextScene: "scene1",
        ambitionChange: +10
      }
    ],
    criticalLens: {
      interpretations: [
        {
          title: "The Hero's Introduction",
          description: "This scene establishes Macbeth as a heroic figure, setting up the tragic fall that will follow.",
          critic: "Dr. Sarah Johnson"
        }
      ],
      criticQuotes: [
        {
          text: "The battlefield scene presents Macbeth at his most noble, making his subsequent fall all the more tragic.",
          critic: "A.C. Bradley",
          source: "Shakespearean Tragedy"
        }
      ],
      adaptations: [
        {
          title: "Macbeth (2015)",
          description: "Justin Kurzel's adaptation emphasizes the brutality of the battlefield and its psychological impact on Macbeth.",
          differences: [
            "Uses realistic battle sequences",
            "Focuses on the physical toll of war",
            "Emphasizes the transition from warrior to king"
          ]
        }
      ]
    },
    modernTranslation: {
      original: "For brave Macbeth—well he deserves that name—Disdaining fortune, with his brandished steel, Which smoked with bloody execution.",
      modern: "For brave Macbeth—he truly deserves that title—defying fate with his sword, which was covered in the smoke of bloody killing.",
      explanation: "The Captain describes Macbeth's bravery in battle, emphasizing his skill and courage."
    },
    whatIfScenarios: [
      {
        id: "whatif1",
        title: "What if Macbeth had lost the battle?",
        description: "Exploring how the story might change if Macbeth had been defeated.",
        originalChoice: "Accept the praise humbly and focus on duty",
        alternativeChoice: "Macbeth loses the battle",
        consequences: [
          "No prophecy from the witches",
          "Different power dynamics in Scotland",
          "Alternative paths to power",
          "Changed relationship with Duncan"
        ]
      }
    ]
  },
  {
    id: "scene3F",
    title: "The Guards' Fate",
    text: "You kill the guards to cover your tracks. Their blood stains your hands and clothes. The other guards and nobles are suspicious, but your position as Thane of Cawdor gives you authority. Lady Macbeth helps you clean up and maintain your composure.",
    quote: "The sleeping and the dead are but as pictures; 'tis the eye of childhood that fears a painted devil.",
    quoteSource: "Act 2, Scene 2",
    choices: [
      {
        label: "A",
        text: "Claim the guards were the murderers",
        nextScene: "scene4E",
        ambitionChange: +20,
        guiltChange: +15
      },
      {
        label: "B",
        text: "Express regret for killing the guards",
        nextScene: "scene3E",
        ambitionChange: -10,
        guiltChange: +10
      },
      {
        label: "C",
        text: "Blame the guards' deaths on an intruder",
        nextScene: "scene3G",
        ambitionChange: +15,
        guiltChange: +10
      },
      {
        label: "D",
        text: "Seek Lady Macbeth's help to maintain the lie",
        nextScene: "scene3H",
        ambitionChange: +10,
        guiltChange: +5
      }
    ],
    criticalLens: {
      interpretations: [
        {
          title: "The Psychology of Cover-up",
          description: "Macbeth's decision to kill the guards reveals his growing willingness to commit further violence to maintain his position.",
          critic: "Dr. Sarah Johnson"
        }
      ],
      criticQuotes: [
        {
          text: "The murder of the guards represents the point where Macbeth fully embraces his role as a tyrant.",
          critic: "Dr. Robert Smith",
          source: "Shakespeare's Tragic Heroes"
        }
      ],
      quotes: [
        {
          text: "The murder of the guards marks a point of no return in Macbeth's descent into tyranny.",
          critic: "Prof. Michael Brown",
          source: "Shakespearean Tragedy: Power and Morality"
        }
      ],
      adaptations: [
        {
          title: "Macbeth (2010)",
          description: "Patrick Stewart's portrayal emphasizes the cold calculation behind killing the guards.",
          differences: [
            "Modern military setting",
            "Emphasis on chain of command",
            "Focus on political implications"
          ]
        }
      ]
    },
    modernTranslation: {
      original: "The sleeping and the dead are but as pictures; 'tis the eye of childhood that fears a painted devil.",
      modern: "The sleeping and the dead are just like pictures; only a child would be afraid of a painted devil.",
      explanation: "Lady Macbeth tries to rationalize the murders, suggesting that only the weak would be troubled by them."
    },
    whatIfScenarios: [
      {
        id: "whatif5",
        title: "What if the guards had survived?",
        description: "Exploring how the guards' survival might have changed the course of events.",
        originalChoice: "Kill the guards to cover your tracks",
        alternativeChoice: "Let the guards live and try to convince them to stay silent",
        consequences: [
          "Potential witnesses to the crime",
          "Different power dynamics in the castle",
          "Possibility of blackmail or betrayal",
          "Alternative paths to maintaining power"
        ]
      }
    ]
  },
  {
    id: "scene3G",
    title: "The Frame-up",
    text: "You decide to frame someone else for Duncan's murder. The evidence you plant points to one of Duncan's loyal servants. The court is in chaos, with accusations flying and trust breaking down among the nobles.",
    quote: "False face must hide what the false heart doth know.",
    quoteSource: "Act 1, Scene 7",
    choices: [
      {
        label: "A",
        text: "Strengthen the evidence against your chosen scapegoat",
        nextScene: "scene4E",
        ambitionChange: +25,
        guiltChange: +20
      },
      {
        label: "B",
        text: "Show mercy to the accused but maintain their guilt",
        nextScene: "scene3F",
        ambitionChange: +10,
        guiltChange: +15
      },
      {
        label: "C",
        text: "Let the accused defend themselves",
        nextScene: "scene3E",
        ambitionChange: -5,
        guiltChange: +10
      },
      {
        label: "D",
        text: "Seek Lady Macbeth's advice on the frame-up",
        nextScene: "scene3H",
        ambitionChange: +15,
        guiltChange: +10
      }
    ],
    criticalLens: {
      interpretations: [
        {
          title: "The Nature of Deception",
          description: "Macbeth's decision to frame an innocent person reveals his growing moral corruption and political cunning.",
          critic: "Dr. Emily Wilson"
        }
      ],
      criticQuotes: [
        {
          text: "The frame-up scene reveals how power can corrupt even the most noble intentions.",
          critic: "Dr. Elizabeth White",
          source: "Power and Corruption in Shakespeare"
        }
      ],
      quotes: [
        {
          text: "The frame-up scene demonstrates how power corrupts and how the innocent often suffer for the crimes of the powerful.",
          critic: "Prof. James Thompson",
          source: "Macbeth: A Critical Analysis"
        }
      ],
      adaptations: [
        {
          title: "Macbeth (2015)",
          description: "Justin Kurzel's adaptation emphasizes the political implications of the frame-up.",
          differences: [
            "Focus on court politics",
            "Emphasis on power dynamics",
            "Modern parallels to political corruption"
          ]
        }
      ]
    },
    modernTranslation: {
      original: "False face must hide what the false heart doth know.",
      modern: "A false appearance must hide what the deceitful heart knows.",
      explanation: "Macbeth acknowledges the need to maintain a facade while knowing the truth of his actions."
    },
    whatIfScenarios: [
      {
        id: "whatif6",
        title: "What if the frame-up was discovered?",
        description: "Exploring how the discovery of the frame-up might have changed the course of events.",
        originalChoice: "Frame someone else for the murder",
        alternativeChoice: "The frame-up is discovered by a clever noble",
        consequences: [
          "Loss of trust among the nobles",
          "Potential rebellion",
          "Different power dynamics in the court",
          "Alternative paths to maintaining control"
        ]
      }
    ]
  },
  {
    id: "scene3H",
    title: "Lady Macbeth's Counsel",
    text: "You seek Lady Macbeth's guidance in the aftermath of Duncan's murder. She is both supportive and calculating, helping you maintain your composure while planning the next steps. Her strength contrasts with your growing unease.",
    quote: "What's done cannot be undone.",
    quoteSource: "Act 5, Scene 1",
    choices: [
      {
        label: "A",
        text: "Follow her advice to maintain power",
        nextScene: "scene4E",
        ambitionChange: +20,
        guiltChange: +10
      },
      {
        label: "B",
        text: "Express your growing guilt and doubt",
        nextScene: "scene3E",
        ambitionChange: -10,
        guiltChange: +15
      },
      {
        label: "C",
        text: "Question her role in the murder",
        nextScene: "scene3F",
        ambitionChange: -5,
        guiltChange: +10
      },
      {
        label: "D",
        text: "Blame the witches for influencing you both",
        nextScene: "scene5F",
        ambitionChange: 0,
        guiltChange: +5
      }
    ],
    criticalLens: {
      interpretations: [
        {
          title: "Gender and Power",
          description: "Lady Macbeth's role in guiding Macbeth reveals the complex dynamics of gender and power in the play.",
          critic: "Dr. Sarah Johnson"
        }
      ],
      criticQuotes: [
        {
          text: "The scene highlights the shifting power dynamic between Macbeth and Lady Macbeth.",
          critic: "Prof. Michael Brown"
        }
      ],
      adaptations: [
        {
          title: "Macbeth (2010)",
          description: "Patrick Stewart's adaptation emphasizes the psychological complexity of the Macbeths' relationship.",
          differences: [
            "Focus on marital dynamics",
            "Emphasis on power sharing",
            "Modern parallels to power couples"
          ]
        }
      ]
    },
    modernTranslation: {
      original: "What's done cannot be undone.",
      modern: "What's done is done and can't be changed.",
      explanation: "Lady Macbeth acknowledges the irreversible nature of their actions while trying to move forward."
    },
    whatIfScenarios: [
      {
        id: "whatif7",
        title: "What if Lady Macbeth had shown remorse?",
        description: "Exploring how Lady Macbeth's potential remorse might have changed the course of events.",
        originalChoice: "Seek Lady Macbeth's guidance",
        alternativeChoice: "Lady Macbeth shows signs of guilt and regret",
        consequences: [
          "Different power dynamics in their relationship",
          "Alternative approaches to maintaining power",
          "Potential for redemption or confession",
          "Changed psychological impact on both characters"
        ]
      }
    ]
  },
  {
    id: "scene4E",
    title: "The Murderers' Meeting",
    text: "You meet with two desperate men, questioning their manhood and blaming Banquo for their misfortunes. You manipulate them into agreeing to kill Banquo and Fleance. The third murderer appears unexpectedly, adding to the tension.",
    quote: "Know that it was he in the times past which held you so under fortune, which you thought had been our innocent self.",
    quoteSource: "Act 3, Scene 1",
    choices: [
      {
        label: "A",
        text: "Trust the murderers to do the job",
        nextScene: "scene4B",
        ambitionChange: +25,
        guiltChange: +15
      },
      {
        label: "B",
        text: "Join them to ensure success",
        nextScene: "scene4F",
        ambitionChange: +35,
        guiltChange: +25
      }
    ]
  },
  {
    id: "scene4F",
    title: "The Third Murderer",
    text: "You join the murderers in ambushing Banquo and Fleance. The attack is successful, but Fleance escapes. The third murderer's identity remains a mystery. You must decide how to handle this partial success.",
    quote: "The worm that's fled hath nature that in time will venom breed, no teeth for the present.",
    quoteSource: "Act 3, Scene 4",
    choices: [
      {
        label: "A",
        text: "Focus on consolidating your power",
        nextScene: "scene4D",
        ambitionChange: +30,
        guiltChange: +20
      },
      {
        label: "B",
        text: "Hunt down Fleance immediately",
        nextScene: "scene5E",
        ambitionChange: +40,
        guiltChange: +30
      }
    ]
  },
  {
    id: "scene5F",
    title: "The Final Battle",
    text: "The English forces, led by Malcolm and Macduff, approach Dunsinane. The prophecy about Birnam Wood coming to Dunsinane is fulfilled as the soldiers use tree branches for camouflage. Macduff reveals he was 'from his mother's womb untimely ripped,' meaning he was not 'of woman born.' You must face your final battle.",
    quote: "Lay on, Macduff, and damned be him that first cries, 'Hold, enough!'",
    quoteSource: "Act 5, Scene 8",
    choices: [
      {
        label: "A",
        text: "Fight to the death, embracing your fate",
        nextScene: "ending_ambition",
        ambitionChange: 40,
        guiltChange: -20
      },
      {
        label: "B",
        text: "Surrender and accept your punishment",
        nextScene: "ending_redemption",
        ambitionChange: -35,
        guiltChange: 30
      },
      {
        label: "C",
        text: "Try to negotiate with Macduff",
        nextScene: "scene5G",
        ambitionChange: -20,
        guiltChange: 25
      },
      {
        label: "D",
        text: "Use the prophecies to your advantage",
        nextScene: "scene5G",
        ambitionChange: 30,
        guiltChange: -15
      }
    ]
  },
  {
    id: "scene5G",
    title: "The Final Soliloquy",
    text: "Alone in your castle, you reflect on your life. You realize you have achieved nothing but fear and isolation. Your wife is dead, your friends have turned against you, and you face certain defeat. The news of Lady Macbeth's death reaches you, and you deliver your famous soliloquy about the meaninglessness of life.",
    quote: "Life's but a walking shadow, a poor player that struts and frets his hour upon the stage and then is heard no more.",
    quoteSource: "Act 5, Scene 5",
    choices: [
      {
        label: "A",
        text: "Face your fate with dignity and accept the meaninglessness",
        nextScene: "ending_ambition",
        ambitionChange: 30,
        guiltChange: -20
      },
      {
        label: "B",
        text: "Seek one last chance at redemption",
        nextScene: "ending_redemption",
        ambitionChange: -35,
        guiltChange: 30
      },
      {
        label: "C",
        text: "Rage against your fate and prepare for battle",
        nextScene: "scene5F",
        ambitionChange: 25,
        guiltChange: -15
      },
      {
        label: "D",
        text: "Reflect on your choices and their consequences",
        nextScene: "scene5F",
        ambitionChange: -20,
        guiltChange: 25
      }
    ]
  },
  {
    id: "ending_ambition",
    title: "The Ambition Ending",
    text: "You choose to fight to the end, embracing your fate with the same ambition that drove you to power. In your final moments, you realize that your ambition has led you to this inevitable conclusion. As Macduff's sword finds its mark, you understand that your pursuit of power has consumed everything, leaving you with nothing but the bitter taste of defeat.",
    quote: "I will not yield to kiss the ground before young Malcolm's feet.",
    quoteSource: "Act 5, Scene 8",
    choices: [
      {
        label: "A",
        text: "Start a new game",
        nextScene: "scene1",
        ambitionChange: 0,
        guiltChange: 0
      }
    ],
    criticalLens: {
      interpretations: [
        {
          title: "The Tragedy of Ambition",
          description: "Macbeth's final moments reveal how unchecked ambition can lead to self-destruction and isolation.",
          critic: "Dr. Sarah Johnson"
        },
        {
          title: "The Nature of Power",
          description: "The ending demonstrates how the pursuit of power can ultimately lead to one's downfall.",
          critic: "Dr. James Wilson"
        },
        {
          title: "The Role of Fate",
          description: "The scene shows how Macbeth's choices and the prophecies' fulfillment create an inevitable conclusion.",
          critic: "Prof. David Thompson"
        }
      ],
      criticQuotes: [
        {
          text: "Macbeth's final refusal to yield represents the ultimate expression of his tragic flaw - his unyielding ambition.",
          critic: "Harold Bloom",
          source: "Shakespeare: The Invention of the Human"
        },
        {
          text: "The ending reveals how Macbeth's ambition has led him to a point where he can neither advance nor retreat.",
          critic: "A.C. Bradley",
          source: "Shakespearean Tragedy"
        }
      ],
      adaptations: [
        {
          title: "Macbeth (2015)",
          description: "Justin Kurzel's adaptation emphasizes the psychological horror of Macbeth's final moments.",
          differences: [
            "Uses realistic psychological horror",
            "Emphasizes PTSD and trauma",
            "Blends supernatural and psychological elements"
          ]
        },
        {
          title: "Throne of Blood (1957)",
          description: "Akira Kurosawa's adaptation set in feudal Japan, where the ending is portrayed through traditional Japanese theater techniques.",
          differences: [
            "Uses traditional Japanese theater techniques",
            "Emphasizes the cultural aspects of ambition",
            "Portrays the supernatural through stylized performance"
          ]
        }
      ]
    },
    modernTranslation: {
      original: "I will not yield to kiss the ground before young Malcolm's feet.",
      modern: "I will not surrender and bow down to young Malcolm.",
      explanation: "Macbeth's final defiance shows his refusal to submit, even in the face of certain death."
    },
    whatIfScenarios: [
      {
        id: "whatif32",
        title: "What if Macbeth had achieved his ambition?",
        description: "Exploring how the story might change if Macbeth had successfully maintained his power.",
        originalChoice: "Fight to the death, embracing your fate",
        alternativeChoice: "Macbeth successfully maintains power",
        consequences: [
          "Scotland might have remained under tyrannical rule",
          "Different power dynamics might have emerged",
          "The cycle of violence might have continued",
          "The kingdom might have suffered under Macbeth's rule"
        ]
      },
      {
        id: "whatif33",
        title: "What if ambition had been tempered?",
        description: "Exploring how the story might change if Macbeth had learned to control his ambition.",
        originalChoice: "Start a new game",
        alternativeChoice: "Macbeth learns to control his ambition",
        consequences: [
          "Macbeth might have found a balance of power",
          "Different power dynamics might have emerged",
          "The kingdom might have prospered",
          "The cycle of violence might have been broken"
        ]
      }
    ]
  },
  {
    id: "ending_redemption",
    title: "The Redemption Ending",
    text: "You choose to surrender and face the consequences of your actions. As you stand before Malcolm and Macduff, you acknowledge your crimes and express genuine remorse. Though your life is forfeit, you find a measure of peace in accepting responsibility for your actions. Your final words reflect on the true cost of ambition and the value of honor.",
    quote: "I have lived long enough: my way of life is fall'n into the sear, the yellow leaf.",
    quoteSource: "Act 5, Scene 3",
    choices: [
      {
        label: "A",
        text: "Start a new game",
        nextScene: "scene1",
        ambitionChange: 0,
        guiltChange: 0
      }
    ],
    criticalLens: {
      interpretations: [
        {
          title: "The Possibility of Redemption",
          description: "Macbeth's final moments show that even in tragedy, there can be moments of self-awareness and redemption.",
          critic: "Dr. Sarah Johnson"
        },
        {
          title: "The Value of Honor",
          description: "The ending demonstrates how accepting responsibility can restore a measure of dignity, even in defeat.",
          critic: "Dr. James Wilson"
        },
        {
          title: "The Nature of Regret",
          description: "The scene reveals how Macbeth's understanding of his actions leads to a form of redemption.",
          critic: "Prof. David Thompson"
        }
      ],
      criticQuotes: [
        {
          text: "Macbeth's acceptance of his fate represents a moment of clarity and self-awareness in his tragic journey.",
          critic: "Harold Bloom",
          source: "Shakespeare: The Invention of the Human"
        },
        {
          text: "The redemption ending shows how even in tragedy, there can be moments of grace and understanding.",
          critic: "A.C. Bradley",
          source: "Shakespearean Tragedy"
        }
      ],
      adaptations: [
        {
          title: "Macbeth (2015)",
          description: "Justin Kurzel's adaptation emphasizes the psychological aspects of Macbeth's redemption.",
          differences: [
            "Uses realistic psychological horror",
            "Emphasizes PTSD and trauma",
            "Blends supernatural and psychological elements"
          ]
        },
        {
          title: "Throne of Blood (1957)",
          description: "Akira Kurosawa's adaptation set in feudal Japan, where the redemption is portrayed through traditional Japanese theater techniques.",
          differences: [
            "Uses traditional Japanese theater techniques",
            "Emphasizes the cultural aspects of honor",
            "Portrays the supernatural through stylized performance"
          ]
        }
      ]
    },
    modernTranslation: {
      original: "I have lived long enough: my way of life is fall'n into the sear, the yellow leaf.",
      modern: "I have lived long enough: my life has withered like a dying leaf.",
      explanation: "Macbeth reflects on how his life has lost its vitality and meaning through his pursuit of power."
    },
    whatIfScenarios: [
      {
        id: "whatif34",
        title: "What if Macbeth had sought redemption earlier?",
        description: "Exploring how the story might change if Macbeth had chosen the path of redemption sooner.",
        originalChoice: "Surrender and accept your punishment",
        alternativeChoice: "Macbeth seeks redemption earlier",
        consequences: [
          "The cycle of violence might have been broken sooner",
          "Different power dynamics might have emerged",
          "The kingdom might have been spared suffering",
          "Macbeth might have found peace"
        ]
      },
      {
        id: "whatif35",
        title: "What if redemption had been impossible?",
        description: "Exploring how the story might change if Macbeth had been denied any chance of redemption.",
        originalChoice: "Start a new game",
        alternativeChoice: "No possibility of redemption",
        consequences: [
          "The tragedy might have been more complete",
          "Different power dynamics might have emerged",
          "The cycle of violence might have continued",
          "The kingdom might have suffered more"
        ]
      }
    ]
  }
]; 