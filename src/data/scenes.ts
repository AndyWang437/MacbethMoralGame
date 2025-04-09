import { Scene, CriticalAnalysis, ModernTranslation, WhatIfScenario } from '../types/game';

export const scenes: Scene[] = [
  {
    id: "scene1",
    title: "The Witches' Prophecy",
    text: "On a dark and stormy heath, you and Banquo encounter three mysterious witches. They speak in riddles, foretelling your future. One hails you as Thane of Glamis, another as Thane of Cawdor, and the third proclaims you shall be king. Banquo is told his descendants will be kings.",
    quote: "All hail, Macbeth! Hail to thee, Thane of Glamis! Hail to thee, Thane of Cawdor! Hail to thee, that shalt be king hereafter!",
    quoteSource: "First Witch, Act 1, Scene 3",
    choices: [
      {
        label: "A",
        text: "Dismiss the witches as mere tricksters and continue your journey.",
        nextScene: "scene2A",
        ambitionChange: -10,
        guiltChange: 0
      },
      {
        label: "B",
        text: "Ponder the prophecy and its implications for your future.",
        nextScene: "scene2B",
        ambitionChange: 10,
        guiltChange: 0
      },
      {
        label: "C",
        text: "Demand more information from the witches about how this will come to pass.",
        nextScene: "scene2C",
        ambitionChange: 15,
        guiltChange: 0
      },
      {
        label: "D",
        text: "Share your concerns with Banquo about the witches' intentions.",
        nextScene: "scene2A",
        ambitionChange: -5,
        guiltChange: 0
      }
    ],
    criticalLens: {
      interpretations: [
        {
          title: "Fate vs. Free Will",
          description: "The witches' prophecy raises questions about whether Macbeth's actions are predetermined or if he has the power to choose his own path.",
          critic: "Dr. Sarah Johnson"
        },
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
      original: "All hail, Macbeth! Hail to thee, Thane of Glamis! Hail to thee, Thane of Cawdor! Hail to thee, that shalt be king hereafter!",
      modern: "Greetings, Macbeth! You are the Thane of Glamis! You will become the Thane of Cawdor! And you will be king in the future!",
      explanation: "The witches are using formal, prophetic language to announce Macbeth's future titles. The repetition of 'Hail' emphasizes the importance of each title."
    },
    whatIfScenarios: [
      {
        id: "whatif1",
        title: "What if Macbeth ignored the prophecy?",
        description: "Exploring an alternate path where Macbeth dismisses the witches' words.",
        originalChoice: "Ponder the prophecy and its implications for your future.",
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
        originalChoice: "Demand more information from the witches about how this will come to pass.",
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
    title: "Loyalty to Duncan",
    text: "You choose to remain loyal to King Duncan, dismissing the witches' prophecy as mere trickery. As you return to your duties, you receive news that the Thane of Cawdor has been executed for treason, and Duncan has named you as his successor.",
    quote: "The service and the loyalty I owe, in doing it, pays itself.",
    quoteSource: "Macbeth, Act 1, Scene 4",
    choices: [
      {
        label: "A",
        text: "Accept the honor with humility and continue serving Duncan faithfully.",
        nextScene: "scene3A",
        ambitionChange: -5,
        guiltChange: 0
      },
      {
        label: "B",
        text: "Begin to question if the witches' prophecy might be coming true.",
        nextScene: "scene3B",
        ambitionChange: 5,
        guiltChange: 0
      },
      {
        label: "C",
        text: "Share your concerns about the prophecy with Duncan.",
        nextScene: "scene3C",
        ambitionChange: -10,
        guiltChange: 0
      },
      {
        label: "D",
        text: "Use this opportunity to strengthen your position at court.",
        nextScene: "scene3D",
        ambitionChange: 10,
        guiltChange: 0
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
    text: "You write to Lady Macbeth about the prophecy. She sees this as an opportunity and begins to plan Duncan's murder. When you return home, she questions your manhood and resolve, saying you are 'too full o' the milk of human kindness.' She urges you to 'look like the innocent flower, but be the serpent under it.'",
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
        text: "Use her ambition to strengthen your own resolve",
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
        originalChoice: "Use her ambition to strengthen your own resolve",
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
    title: "Duncan's Arrival",
    text: "King Duncan arrives at your castle, praising its pleasant atmosphere. He speaks of the 'sweet air' and 'gentle senses,' unaware of the murderous plot brewing within. Lady Macbeth greets him with false hospitality, saying 'We rest your hermits.' The dramatic irony is palpable as you know what is to come.",
    quote: "This castle hath a pleasant seat; the air nimbly and sweetly recommends itself unto our gentle senses.",
    quoteSource: "Act 1, Scene 6",
    choices: [
      {
        label: "A",
        text: "Warn Duncan of the danger",
        nextScene: "scene4C",
        ambitionChange: -15,
        guiltChange: 0
      },
      {
        label: "B",
        text: "Proceed with the murder plan",
        nextScene: "scene3D",
        ambitionChange: +20,
        guiltChange: 0
      },
      {
        label: "C",
        text: "Seek a private audience with Duncan",
        nextScene: "scene3G",
        ambitionChange: -10,
        guiltChange: 0
      },
      {
        label: "D",
        text: "Use the opportunity to gather information",
        nextScene: "scene3H",
        ambitionChange: +10,
        guiltChange: 0
      }
    ],
    criticalLens: {
      interpretations: [
        {
          title: "Dramatic Irony",
          description: "The scene's dramatic irony heightens the tension as the audience knows what Duncan does not.",
          critic: "Dr. Sarah Johnson"
        },
        {
          title: "The Nature of Hospitality",
          description: "The scene explores the violation of the sacred bond between host and guest.",
          critic: "Dr. James Wilson"
        },
        {
          title: "The Role of Setting",
          description: "The castle's pleasant appearance contrasts with the dark deeds planned within.",
          critic: "Prof. David Thompson"
        }
      ],
      criticQuotes: [
        {
          text: "The scene's dramatic irony creates a sense of impending doom that permeates the entire play.",
          critic: "A.C. Bradley",
          source: "Shakespearean Tragedy"
        },
        {
          text: "Duncan's praise of the castle's pleasant atmosphere underscores the betrayal that is to come.",
          critic: "Harold Bloom",
          source: "Shakespeare: The Invention of the Human"
        }
      ],
      adaptations: [
        {
          title: "Macbeth (1971)",
          description: "Roman Polanski's adaptation emphasizes the contrast between the castle's appearance and its dark secrets.",
          differences: [
            "Uses visual symbolism to foreshadow events",
            "Emphasizes the castle's deceptive beauty",
            "Focuses on the contrast between appearance and reality"
          ]
        },
        {
          title: "Macbeth (2010)",
          description: "Patrick Stewart's portrayal in a modern military setting, emphasizing the political aspects.",
          differences: [
            "Set in a Soviet-style state",
            "Uses modern political context",
            "Emphasizes the bureaucratic aspects of power"
          ]
        }
      ]
    },
    modernTranslation: {
      original: "This castle hath a pleasant seat; the air nimbly and sweetly recommends itself unto our gentle senses.",
      modern: "This castle is in a lovely location; the air is fresh and pleasant to our senses.",
      explanation: "Duncan is praising the castle's pleasant atmosphere, unaware of the danger that awaits him."
    },
    whatIfScenarios: [
      {
        id: "whatif6",
        title: "What if Duncan had sensed the danger?",
        description: "Exploring how the story might change if Duncan had been more perceptive.",
        originalChoice: "Proceed with the murder plan",
        alternativeChoice: "Duncan notices something amiss",
        consequences: [
          "Duncan might have taken precautions",
          "The murder plot might have been discovered",
          "Macbeth might have been arrested",
          "The natural succession would have continued"
        ]
      },
      {
        id: "whatif7",
        title: "What if the castle's atmosphere had been different?",
        description: "Exploring how the story might change if the castle had a more ominous atmosphere.",
        originalChoice: "Use the opportunity to gather information",
        alternativeChoice: "The castle appears foreboding",
        consequences: [
          "Duncan might have been more cautious",
          "The murder plot might have been more difficult",
          "Different power dynamics might have emerged",
          "The supernatural elements might have been more prominent"
        ]
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
        ambitionChange: 10,
        guiltChange: 5
      },
      {
        label: "B",
        text: "Take control of the situation yourself",
        nextScene: "scene4B",
        ambitionChange: 15,
        guiltChange: 10
      },
      {
        label: "C",
        text: "Use the chaos to your advantage",
        nextScene: "scene4C",
        ambitionChange: 20,
        guiltChange: 0
      },
      {
        label: "D",
        text: "Show signs of distress to appear innocent",
        nextScene: "scene4D",
        ambitionChange: -5,
        guiltChange: 15
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
    id: "scene3D",
    title: "Duncan's Murder",
    text: "You and Lady Macbeth have planned Duncan's murder. As you approach his chamber, you see a dagger floating before you, its handle pointing toward your hand. You hear a voice cry 'Sleep no more!' After the deed is done, you are consumed by guilt and paranoia.",
    quote: "Is this a dagger which I see before me, The handle toward my hand?",
    quoteSource: "Act 2, Scene 1",
    choices: [
      {
        label: "A",
        text: "Confess your crime and face the consequences",
        nextScene: "scene3E",
        ambitionChange: -20,
        guiltChange: -10
      },
      {
        label: "B",
        text: "Kill the guards to cover your tracks",
        nextScene: "scene3F",
        ambitionChange: +30,
        guiltChange: +20
      },
      {
        label: "C",
        text: "Frame someone else for the murder",
        nextScene: "scene3G",
        ambitionChange: +25,
        guiltChange: +15
      },
      {
        label: "D",
        text: "Seek guidance from Lady Macbeth",
        nextScene: "scene3H",
        ambitionChange: +15,
        guiltChange: +10
      }
    ],
    criticalLens: {
      interpretations: [
        {
          title: "The Psychology of Murder",
          description: "The dagger hallucination reveals Macbeth's psychological state before committing the murder.",
          critic: "Dr. Sarah Johnson"
        },
        {
          title: "The Supernatural and the Mind",
          description: "The floating dagger represents the intersection of supernatural forces and psychological turmoil.",
          critic: "Dr. James Wilson"
        },
        {
          title: "Moral Descent",
          description: "This scene marks the point of no return in Macbeth's moral deterioration.",
          critic: "Prof. David Thompson"
        }
      ],
      criticQuotes: [
        {
          text: "The dagger scene represents the moment when Macbeth's conscience and ambition collide, with ambition ultimately prevailing.",
          critic: "A.C. Bradley",
          source: "Shakespearean Tragedy"
        },
        {
          text: "The floating dagger is both a supernatural manifestation and a psychological projection of Macbeth's guilt.",
          critic: "Harold Bloom",
          source: "Shakespeare: The Invention of the Human"
        }
      ],
      adaptations: [
        {
          title: "Macbeth (1971)",
          description: "Roman Polanski's adaptation emphasizes the psychological horror of the murder scene.",
          differences: [
            "Uses visual effects to enhance the dagger's appearance",
            "Emphasizes the psychological impact of the murder",
            "Focuses on the moral consequences of the act"
          ]
        },
        {
          title: "Macbeth (2015)",
          description: "Justin Kurzel's adaptation presents the murder with a more psychological focus.",
          differences: [
            "Uses realistic psychological horror",
            "Emphasizes PTSD and trauma",
            "Blends supernatural and psychological elements"
          ]
        }
      ]
    },
    modernTranslation: {
      original: "Is this a dagger which I see before me, The handle toward my hand?",
      modern: "Is that a dagger I see in front of me, with its handle pointing toward my hand?",
      explanation: "Macbeth's famous soliloquy reveals his psychological state as he prepares to commit murder."
    },
    whatIfScenarios: [
      {
        id: "whatif10",
        title: "What if Macbeth had resisted the dagger's call?",
        description: "Exploring how the story might change if Macbeth had resisted the supernatural temptation.",
        originalChoice: "Kill the guards to cover your tracks",
        alternativeChoice: "Resist the dagger's call and abandon the plan",
        consequences: [
          "Duncan might have lived longer",
          "The natural succession would have continued",
          "Macbeth might have remained a loyal thane",
          "Different power dynamics might have emerged"
        ]
      },
      {
        id: "whatif11",
        title: "What if the dagger had been real?",
        description: "Exploring how the story might change if the dagger had been a physical object rather than a hallucination.",
        originalChoice: "Frame someone else for the murder",
        alternativeChoice: "The dagger is a real weapon placed by someone else",
        consequences: [
          "Someone else might be manipulating Macbeth",
          "The supernatural elements might be more ambiguous",
          "Different power dynamics might have emerged",
          "The investigation might have taken a different turn"
        ]
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
        nextScene: "scene3H",
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
      quotes: [
        {
          text: "The confession scene marks a crucial turning point in Macbeth's moral journey.",
          critic: "Prof. James Thompson"
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
    title: "The Murder of Banquo",
    text: "You've grown increasingly paranoid about Banquo and his son Fleance. The witches' prophecy about Banquo's descendants becoming kings haunts you. You meet with two murderers, manipulating them by questioning their manhood and blaming Banquo for their misfortunes.",
    quote: "For Banquo's issue have I filed my mind; For them the gracious Duncan have I murdered.",
    quoteSource: "Act 3, Scene 1",
    choices: [
      {
        label: "A",
        text: "Call off the murder and face your guilt",
        nextScene: "scene5C",
        ambitionChange: -20,
        guiltChange: -10
      },
      {
        label: "B",
        text: "Proceed with Banquo's murder",
        nextScene: "scene4B",
        ambitionChange: +30,
        guiltChange: +20
      },
      {
        label: "C",
        text: "Hire additional assassins to ensure success",
        nextScene: "scene4C",
        ambitionChange: +35,
        guiltChange: +25
      },
      {
        label: "D",
        text: "Seek guidance from Lady Macbeth",
        nextScene: "scene4D",
        ambitionChange: +15,
        guiltChange: +10
      }
    ],
    criticalLens: {
      interpretations: [
        {
          title: "The Psychology of Paranoia",
          description: "Macbeth's growing paranoia about Banquo reveals his deteriorating mental state and moral compass.",
          critic: "Dr. Sarah Johnson"
        },
        {
          title: "The Cycle of Violence",
          description: "The decision to murder Banquo represents the continuation of a cycle of violence that began with Duncan's murder.",
          critic: "Dr. James Wilson"
        },
        {
          title: "The Nature of Power",
          description: "This scene demonstrates how power can corrupt and lead to increasingly desperate measures to maintain it.",
          critic: "Prof. David Thompson"
        }
      ],
      criticQuotes: [
        {
          text: "Macbeth's decision to murder Banquo marks his complete moral deterioration and descent into tyranny.",
          critic: "A.C. Bradley",
          source: "Shakespearean Tragedy"
        },
        {
          text: "The scene reveals how Macbeth's initial ambition has transformed into paranoia and desperation.",
          critic: "Harold Bloom",
          source: "Shakespeare: The Invention of the Human"
        }
      ],
      adaptations: [
        {
          title: "Macbeth (1971)",
          description: "Roman Polanski's adaptation emphasizes the psychological horror of the murder scene.",
          differences: [
            "Uses visual effects to enhance the scene's tension",
            "Emphasizes the psychological impact of the murder",
            "Focuses on the moral consequences of the act"
          ]
        },
        {
          title: "Macbeth (2015)",
          description: "Justin Kurzel's adaptation presents the murder with a more psychological focus.",
          differences: [
            "Uses realistic psychological horror",
            "Emphasizes PTSD and trauma",
            "Blends supernatural and psychological elements"
          ]
        }
      ]
    },
    modernTranslation: {
      original: "For Banquo's issue have I filed my mind; For them the gracious Duncan have I murdered.",
      modern: "I've filled my mind with thoughts of Banquo's descendants; I murdered Duncan for their sake.",
      explanation: "Macbeth reveals his growing paranoia about Banquo's descendants and how it drives his actions."
    },
    whatIfScenarios: [
      {
        id: "whatif12",
        title: "What if Macbeth had trusted Banquo?",
        description: "Exploring how the story might change if Macbeth had maintained his trust in Banquo.",
        originalChoice: "Proceed with Banquo's murder",
        alternativeChoice: "Trust Banquo and maintain their friendship",
        consequences: [
          "The cycle of violence might have been broken",
          "Macbeth might have had a loyal advisor",
          "Different power dynamics might have emerged",
          "The prophecy might have been interpreted differently"
        ]
      },
      {
        id: "whatif13",
        title: "What if the murderers had refused?",
        description: "Exploring how the story might change if the murderers had rejected Macbeth's offer.",
        originalChoice: "Hire additional assassins to ensure success",
        alternativeChoice: "The murderers refuse to kill Banquo",
        consequences: [
          "Macbeth might have had to find other means",
          "The plot might have been discovered",
          "Different power dynamics might have emerged",
          "The investigation might have taken a different turn"
        ]
      }
    ]
  },
  {
    id: "scene4B",
    title: "The Royal Banquet",
    text: "As king, you host a grand banquet. The hall is filled with nobles and guests, but one seat remains empty - the place where Banquo should be sitting. The atmosphere is tense as you notice the empty chair.",
    quote: "The table's full.",
    quoteSource: "Act 3, Scene 4",
    choices: [
      {
        label: "A",
        text: "Address the empty chair and acknowledge Banquo's absence",
        nextScene: "scene5A",
        ambitionChange: -10,
        guiltChange: 15
      },
      {
        label: "B",
        text: "Ignore the empty chair and continue the feast",
        nextScene: "scene5B",
        ambitionChange: 10,
        guiltChange: 0
      },
      {
        label: "C",
        text: "Make a toast in Banquo's honor",
        nextScene: "scene5C",
        ambitionChange: -5,
        guiltChange: 10
      },
      {
        label: "D",
        text: "Use the opportunity to assert your authority",
        nextScene: "scene5D",
        ambitionChange: 15,
        guiltChange: -5
      }
    ],
    criticalLens: {
      interpretations: [
        {
          title: "The Supernatural and the Human Psyche",
          description: "The ghost's appearance can be interpreted as either a supernatural phenomenon or a manifestation of Macbeth's guilt-ridden conscience.",
          critic: "Dr. Sarah Johnson"
        },
        {
          title: "The Nature of Power",
          description: "The banquet scene reveals how power can isolate and corrupt, even in moments of celebration.",
          critic: "Dr. James Wilson"
        },
        {
          title: "The Role of Guilt",
          description: "The empty chair symbolizes the weight of Macbeth's guilt and the consequences of his actions.",
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
          description: "Roman Polanski's adaptation presents the banquet scene with a focus on the supernatural.",
          differences: [
            "Uses visual effects to enhance the ghost's appearance",
            "Emphasizes the contrast between celebration and horror",
            "Focuses on the supernatural elements"
          ]
        }
      ]
    },
    modernTranslation: {
      original: "The table's full.",
      modern: "All the seats are taken.",
      explanation: "Macbeth's seemingly simple statement carries deep irony, as he sees Banquo's ghost in what appears to others to be an empty chair."
    },
    whatIfScenarios: [
      {
        id: "whatif14",
        title: "What if Banquo had attended the banquet?",
        description: "Exploring how the story might change if Banquo had been present at the banquet.",
        originalChoice: "Address the empty chair and acknowledge Banquo's absence",
        alternativeChoice: "Banquo attends the banquet",
        consequences: [
          "The ghost might not have appeared",
          "Different power dynamics might have emerged",
          "The investigation might have taken a different turn",
          "Macbeth might have had to face Banquo directly"
        ]
      },
      {
        id: "whatif15",
        title: "What if the guests had seen the ghost?",
        description: "Exploring how the story might change if the guests had also seen Banquo's ghost.",
        originalChoice: "Ignore the empty chair and continue the feast",
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
    id: "scene4C",
    title: "The Murder of Banquo",
    text: "You've grown increasingly paranoid about Banquo and his son Fleance. The witches' prophecy about Banquo's descendants becoming kings haunts you. You meet with two murderers, manipulating them by questioning their manhood and blaming Banquo for their misfortunes.",
    quote: "For Banquo's issue have I filed my mind; For them the gracious Duncan have I murdered.",
    quoteSource: "Act 3, Scene 1",
    choices: [
      {
        label: "A",
        text: "Call off the murder and face your guilt",
        nextScene: "scene5C",
        ambitionChange: -20
      },
      {
        label: "B",
        text: "Proceed with Banquo's murder",
        nextScene: "scene4B",
        ambitionChange: +30
      }
    ]
  },
  {
    id: "scene4D",
    title: "The Second Prophecy",
    text: "You return to the witches, seeking more knowledge. They show you three apparitions: an armed head warning of Macduff, a bloody child saying none of woman born shall harm you, and a crowned child with a tree saying you won't be vanquished until Birnam Wood comes to Dunsinane.",
    quote: "Double, double toil and trouble; Fire burn, and cauldron bubble.",
    quoteSource: "Act 4, Scene 1",
    choices: [
      {
        label: "A",
        text: "Trust in the prophecies and grow more tyrannical",
        nextScene: "scene5B",
        ambitionChange: +35
      },
      {
        label: "B",
        text: "Question the prophecies and seek redemption",
        nextScene: "scene5D",
        ambitionChange: -25
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
    text: "Lady Macbeth dismisses the guests and confronts you about your behavior. She questions your manhood and resolve, trying to help you regain composure. Her words are sharp, but you sense her growing concern for your mental state.",
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
        text: "Use the prophecies to strengthen your resolve",
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
    text: "You stand victorious on the battlefield, having defeated the traitorous Macdonwald. The Captain describes your bravery to King Duncan, saying you 'unseamed him from the nave to th'chaps.' Ross arrives with news of your victory over the Norwegian forces, calling you 'Bellona's bridegroom.'",
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
    ]
  },
  {
    id: "scene2C",
    title: "The Letter",
    text: "Lady Macbeth reads your letter about the witches' prophecy. She fears you are 'too full o' the milk of human kindness' to seize the crown. She calls upon dark spirits to 'unsex' her and fill her with cruelty. When you arrive, she immediately begins to manipulate you.",
    quote: "Come, you spirits that tend on mortal thoughts, unsex me here, and fill me from the crown to the toe top-full of direst cruelty!",
    quoteSource: "Act 1, Scene 5",
    choices: [
      {
        label: "A",
        text: "Resist her influence and maintain your honor",
        nextScene: "scene3C",
        ambitionChange: -15
      },
      {
        label: "B",
        text: "Allow her to strengthen your resolve",
        nextScene: "scene3A",
        ambitionChange: +20
      }
    ]
  },
  {
    id: "scene3E",
    title: "The Dagger Soliloquy",
    text: "Alone in the castle, you see a dagger floating before you. It leads you toward Duncan's chamber. You question whether it's real or a 'dagger of the mind.' The handle points toward your hand, and drops of blood appear on its blade.",
    quote: "Is this a dagger which I see before me, The handle toward my hand? Come, let me clutch thee.",
    quoteSource: "Act 2, Scene 1",
    choices: [
      {
        label: "A",
        text: "Recognize this as a sign to stop",
        nextScene: "scene4A",
        ambitionChange: -20
      },
      {
        label: "B",
        text: "Follow the dagger's guidance",
        nextScene: "scene3D",
        ambitionChange: +25
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
        ambitionChange: +25
      },
      {
        label: "B",
        text: "Join them to ensure success",
        nextScene: "scene4F",
        ambitionChange: +35
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
        ambitionChange: +30
      },
      {
        label: "B",
        text: "Hunt down Fleance immediately",
        nextScene: "scene5E",
        ambitionChange: +40
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
        nextScene: "scene4B",
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
      quotes: [
        {
          text: "The murder of the guards marks a point of no return in Macbeth's descent into tyranny.",
          critic: "Prof. Michael Brown"
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
        nextScene: "scene4C",
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
      quotes: [
        {
          text: "The frame-up scene demonstrates how power corrupts and how the innocent often suffer for the crimes of the powerful.",
          critic: "Prof. James Thompson"
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
        nextScene: "scene4D",
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
        nextScene: "scene3G",
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
  }
]; 