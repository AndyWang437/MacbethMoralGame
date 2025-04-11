import { Scene, CriticalAnalysis, ModernTranslation, WhatIfScenario } from '../types/game';

export const scenes: Scene[] = [
    // ACT 1 - THE PROPHECY
    {
      id: "scene1",
      title: "The Witches' Prophecy",
      text: "On a misty heath, you and Banquo encounter three witches who prophesy you will become Thane of Cawdor and eventually King. Their words leave you with mixed feelings of excitement and unease as they vanish into the fog.",
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
          nextScene: "scene2D",
          ambitionChange: +5 
        },
        {
          label: "D",
          text: "Consult with Banquo about what you both witnessed",
          nextScene: "scene2C",
          ambitionChange: 0
        }
      ],
    },
    
    // ACT 2 - THE TEST
    {
      id: "scene2A",
      title: "The First Step",
      text: "Having embraced the prophecy, you receive news that King Duncan has named you Thane of Cawdor. The first part of the witches' prediction has come true, sending a chill down your spine.",
      quote: "The Thane of Cawdor lives: why do you dress me in borrowed robes?",
      quoteSource: "Act 1, Scene 3",
      choices: [
        {
          label: "A",
          text: "Accept the title with humility",
          nextScene: "scene3A",
          ambitionChange: +5
        },
        {
          label: "B",
          text: "Let the prophecy strengthen your determination",
          nextScene: "scene3D",
          ambitionChange: +15
        },
        {
          label: "C",
          text: "Write to Lady Macbeth about this development",
          nextScene: "scene2D",
          ambitionChange: +10
        },
        {
          label: "D",
          text: "Reflect on the meaning of the witches' words in private",
          nextScene: "scene3A",
          ambitionChange: 0
        }
      ]
    },
    {
      id: "scene2B",
      title: "The Path of Duty",
      text: "Despite dismissing the witches' words, you learn that King Duncan has named you Thane of Cawdor. The prophecy's first part has inexplicably come true, forcing you to question your skepticism.",
      quote: "The service and the loyalty I owe, in doing it, pays itself.",
      quoteSource: "Act 1, Scene 4",
      choices: [
        {
          label: "A",
          text: "Remain loyal to Duncan",
          nextScene: "scene3A",
          ambitionChange: -10
        },
        {
          label: "B",
          text: "Begin to question your skepticism",
          nextScene: "scene3D",
          ambitionChange: +5
        },
        {
          label: "C",
          text: "Share these developments with Lady Macbeth",
          nextScene: "scene2D",
          ambitionChange: +10
        },
        {
          label: "D",
          text: "Seek guidance from a trusted advisor",
          nextScene: "scene2C",
          ambitionChange: -5
        }
      ]
    },
    {
      id: "scene2C",
      title: "Seeking Counsel",
      text: "You seek advice about the witches' prophecy from a trusted friend. They warn you about supernatural promises, cautioning that dark forces often tell half-truths to lead people to harm.",
      quote: "That, trusted home, might yet enkindle you unto the crown, besides the thane of Cawdor. But 'tis strange.",
      quoteSource: "Banquo, Act 1, Scene 3",
      choices: [
        {
          label: "A",
          text: "Heed the warning and remain cautious",
          nextScene: "scene3A",
          ambitionChange: -15
        },
        {
          label: "B",
          text: "Dismiss their concerns as excessive caution",
          nextScene: "scene3D",
          ambitionChange: +10
        },
        {
          label: "C",
          text: "Consult Lady Macbeth instead",
          nextScene: "scene2D",
          ambitionChange: +5
        },
        {
          label: "D",
          text: "Pray for guidance in the castle chapel",
          nextScene: "scene3C",
          ambitionChange: -10
        }
      ]
    },
    {
      id: "scene2D",
      title: "Lady Macbeth's Influence",
      text: "Your letter about the prophecy ignites Lady Macbeth's ambition, and she develops a plan to murder Duncan. When you hesitate, she questions your courage and manhood, her words cutting deep.",
      quote: "Art thou afeard to be the same in thine own act and valour as thou art in desire?",
      quoteSource: "Act 1, Scene 7",
      choices: [
        {
          label: "A",
          text: "Stand firm against her manipulation",
          nextScene: "scene3C",
          ambitionChange: -15
        },
        {
          label: "B",
          text: "Agree to help murder Duncan",
          nextScene: "scene3D",
          ambitionChange: +25
        },
        {
          label: "C",
          text: "Seek counsel from Banquo about the prophecy",
          nextScene: "scene3E",
          ambitionChange: -10
        },
        {
          label: "D",
          text: "Ask for time to consider your options",
          nextScene: "scene3A",
          ambitionChange: 0
        }
      ],
    },
  
    // ACT 3 - THE DECISION
    {
      id: "scene3A",
      title: "The King's Arrival",
      text: "King Duncan arrives at your castle, praising its pleasant atmosphere and treating you with warm trust. His kindness makes Lady Macbeth's murderous plot weigh even heavier on your conscience.",
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
          nextScene: "scene3C",
          ambitionChange: -15
        },
        {
          label: "C",
          text: "Welcome the king with genuine hospitality",
          nextScene: "scene4A",
          ambitionChange: -20
        },
        {
          label: "D",
          text: "Discuss your doubts with Lady Macbeth once more",
          nextScene: "scene2D",
          ambitionChange: +5
        }
      ]
    },
    {
      id: "scene3C",
      title: "The Path of Honor",
      text: "You stand firm against Lady Macbeth's scheme to murder the king. She circles you like a predator, questioning your courage and manhood as you wrestle with your conscience.",
      quote: "When you durst do it, then you were a man; And to be more than what you were, you would be so much more the man.",
      quoteSource: "Act 1, Scene 7",
      choices: [
        {
          label: "A",
          text: "Maintain your honorable stance",
          nextScene: "scene4A",
          ambitionChange: -20
        },
        {
          label: "B",
          text: "Let her words affect you",
          nextScene: "scene3D",
          ambitionChange: +15
        },
        {
          label: "C",
          text: "Suggest an alternative plan for advancement",
          nextScene: "scene3E",
          ambitionChange: +5
        },
        {
          label: "D",
          text: "Confide your moral struggles to a friend",
          nextScene: "scene2C",
          ambitionChange: -10
        }
      ]
    },
    {
      id: "scene3D",
      title: "The Murder",
      text: "As you approach Duncan's chamber, a ghostly dagger appears floating before you. The vision seems to guide you toward the king's room, the spectral blade pointing the way to your dark deed.",
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
          nextScene: "scene4A",
          ambitionChange: -20
        },
        {
          label: "C",
          text: "Pause to consider the supernatural omen",
          nextScene: "scene3C",
          ambitionChange: -5
        },
        {
          label: "D",
          text: "Dismiss the vision and proceed with determination",
          nextScene: "scene3F", 
          ambitionChange: +30
        }
      ]
    },
    {
      id: "scene3E",
      title: "Alternative Ambitions",
      text: "You consider ways to advance without murdering Duncan. Perhaps loyal service or strategic alliances could elevate your position naturally, letting fate fulfill the prophecy without bloodshed.",
      quote: "If chance will have me king, why, chance may crown me without my stir.",
      quoteSource: "Act 1, Scene 3",
      choices: [
        {
          label: "A",
          text: "Commit to advancing through honorable means",
          nextScene: "scene4A",
          ambitionChange: -10
        },
        {
          label: "B",
          text: "Decide this path is too slow and uncertain",
          nextScene: "scene3D",
          ambitionChange: +20
        },
        {
          label: "C",
          text: "Seek to undermine Duncan's other supporters",
          nextScene: "scene4B",
          ambitionChange: +15
        },
        {
          label: "D",
          text: "Consult Lady Macbeth about this alternative approach",
          nextScene: "scene2D",
          ambitionChange: +5
        }
      ]
    },
  
    // ACT 4 - THE AFTERMATH
    {
      id: "scene3F",
      title: "The Guards' Fate",
      text: "Duncan lies murdered in his bed, and you've killed his guards to frame them for the crime. The metallic scent of death fills the air as nobles and servants gather, casting suspicious glances your way.",
      quote: "The sleeping and the dead are but as pictures; 'tis the eye of childhood that fears a painted devil.",
      quoteSource: "Act 2, Scene 2",
      choices: [
        {
          label: "A",
          text: "Claim the guards were the murderers",
          nextScene: "scene4B",
          ambitionChange: +20
        },
        {
          label: "B",
          text: "Express regret for killing the guards",
          nextScene: "scene4A",
          ambitionChange: -10
        },
        {
          label: "C",
          text: "Feign shock and grief over Duncan's death",
          nextScene: "scene4B",
          ambitionChange: +25
        },
        {
          label: "D",
          text: "Privately confess to a trusted advisor",
          nextScene: "scene5C",
          ambitionChange: -20
        }
      ]
    },
    {
      id: "scene4B",
      title: "The Investigation",
      text: "The castle has become a court of inquiry following Duncan's murder. Nobles whisper in clusters as Macduff leads the questioning, with all eyes frequently turning to you and Lady Macbeth.",
      quote: "O, yet I do repent me of my fury, That I did kill them.",
      quoteSource: "Act 2, Scene 3",
      choices: [
        {
          label: "A",
          text: "Maintain the guards' guilt",
          nextScene: "scene5A",
          ambitionChange: +20
        },
        {
          label: "B",
          text: "Express doubt about their guilt",
          nextScene: "scene4A",
          ambitionChange: -15
        },
        {
          label: "C",
          text: "Suggest Duncan's sons may be responsible",
          nextScene: "scene5A",
          ambitionChange: +25
        },
        {
          label: "D",
          text: "Call for a thorough investigation",
          nextScene: "scene5C",
          ambitionChange: -5
        }
      ]
    },
  
    // ACT 5 - THE DESCENT
    {
      id: "scene5A",
      title: "Banquo's Ghost Appears",
      text: "During your coronation banquet, Banquo's ghost appears, visible only to you. The nobles watch in confusion as you address the empty chair, unaware of the bloody specter that torments their new king.",
      quote: "Avaunt! and quit my sight! let the earth hide thee!",
      quoteSource: "Act 3, Scene 4",
      choices: [
        {
          label: "A",
          text: "Confront the ghost and express your guilt",
          nextScene: "scene5C",
          ambitionChange: -15
        },
        {
          label: "B",
          text: "Try to maintain composure despite the vision",
          nextScene: "scene5B",
          ambitionChange: +5
        },
        {
          label: "C",
          text: "Flee from the banquet in terror",
          nextScene: "scene5E",
          ambitionChange: -5
        },
        {
          label: "D",
          text: "Accuse the nobles of plotting against you",
          nextScene: "scene5B",
          ambitionChange: +15
        }
      ]
    },
    {
      id: "scene5B",
      title: "The Path of Tyranny",
      text: "The ghost's appearance has hardened your resolve rather than bringing remorse. You begin marking nobles you suspect of disloyalty as fear replaces trust in your rule.",
      quote: "I am in blood stepped in so far that, should I wade no more, returning were as tedious as go o'er.",
      quoteSource: "Act 3, Scene 4",
      choices: [
        {
          label: "A",
          text: "Embrace your growing tyranny",
          nextScene: "scene5D",
          ambitionChange: +20
        },
        {
          label: "B",
          text: "Question your path",
          nextScene: "scene5C",
          ambitionChange: -10
        },
        {
          label: "C",
          text: "Eliminate potential threats among the nobles",
          nextScene: "scene5D",
          ambitionChange: +25
        },
        {
          label: "D",
          text: "Seek comfort from Lady Macbeth",
          nextScene: "scene5E",
          ambitionChange: +5
        }
      ]
    },
  
    // ACT 6 - THE FINAL ACT
    {
      id: "scene5D",
      title: "The Second Prophecy",
      text: "You return to the witches seeking more guidance about your fate. They conjure three apparitions with new prophecies that seem to promise invulnerability, though their words contain hidden meanings.",
      quote: "Macbeth! Macbeth! Macbeth! beware Macduff; Beware the thane of Fife.",
      quoteSource: "First Apparition, Act 4, Scene 1",
      choices: [
        {
          label: "A",
          text: "Take the prophecies at face value",
          nextScene: "scene5E",
          ambitionChange: +25
        },
        {
          label: "B",
          text: "Question the witches' intentions",
          nextScene: "scene5F",
          ambitionChange: -15
        },
        {
          label: "C",
          text: "Order Macduff's family killed immediately",
          nextScene: "scene5F",
          ambitionChange: +30
        },
        {
          label: "D",
          text: "Consider the deeper meaning of these prophecies",
          nextScene: "scene5E",
          ambitionChange: +10
        }
      ]
    },
    {
      id: "scene5F",
      title: "The Final Battle",
      text: "Malcolm and Macduff's forces approach with branches from Birnam Wood, fulfilling one of the witches' prophecies. Inside your castle, Lady Macbeth has taken her own life as your remaining soldiers prepare for the final conflict.",
      quote: "Lay on, Macduff, and damned be him that first cries, 'Hold, enough!'",
      quoteSource: "Act 5, Scene 8",
      choices: [
        {
          label: "A",
          text: "Fight to the death",
          nextScene: "ending_ambition",
          ambitionChange: +40
        },
        {
          label: "B",
          text: "Surrender",
          nextScene: "ending_redemption",
          ambitionChange: -35
        },
        {
          label: "C",
          text: "Try to negotiate with Malcolm",
          nextScene: "ending_redemption",
          ambitionChange: -25
        },
        {
          label: "D",
          text: "Attempt to flee Scotland",
          nextScene: "ending_ambition",
          ambitionChange: +15
        }
      ]
    },
  {
    id: "ending_ambition",
    title: "The Ambition Ending",
    text: "You choose to fight to the death rather than surrender to Malcolm's forces. Macduff reveals he was not born naturally but \"untimely ripped\" from his mother's womb, fulfilling the prophecy's loophole as he defeats you in combat.",
    quote: "I will not yield to kiss the ground before young Malcolm's feet.",
    quoteSource: "Act 5, Scene 8",
    choices: [
      {
        label: "A",
        text: "Start a new game",
        nextScene: "scene1",
        ambitionChange: 0,
        guiltChange: 0
      },
      {
        label: "B",
        text: "Reflect on your journey",
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
          description: "Justin Kurzel's adaptation emphasized the psychological horror of Macbeth's final moments.",
          differences: [
            "Uses realistic psychological horror",
            "Emphasized PTSD and trauma",
            "Blended supernatural and psychological elements"
          ]
        },
        {
          title: "Throne of Blood (1957)",
          description: "Akira Kurosawa's adaptation set in feudal Japan, where the ending is portrayed through traditional Japanese theater techniques.",
          differences: [
            "Uses traditional Japanese theater techniques",
            "Emphasized the cultural aspects of ambition",
            "Portrayed the supernatural through stylized performance"
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
    text: "You surrender to Malcolm's forces and acknowledge your crimes with genuine remorse. Though your life is forfeit, you find peace in accepting responsibility, the burden of ambition finally lifting from your shoulders.",
    quote: "I have lived long enough: my way of life is fall'n into the sear, the yellow leaf.",
    quoteSource: "Act 5, Scene 3",
    choices: [
      {
        label: "A",
        text: "Start a new game",
        nextScene: "scene1",
        ambitionChange: 0,
        guiltChange: 0
      },
      {
        label: "B",
        text: "Contemplate your legacy",
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
          description: "The scene reveals how Macbeth's understanding of his actions led to a form of redemption.",
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
          description: "Justin Kurzel's adaptation emphasized the psychological aspects of Macbeth's redemption.",
          differences: [
            "Uses realistic psychological horror",
            "Emphasized PTSD and trauma",
            "Blended supernatural and psychological elements"
          ]
        },
        {
          title: "Throne of Blood (1957)",
          description: "Akira Kurosawa's adaptation set in feudal Japan, where the redemption is portrayed through traditional Japanese theater techniques.",
          differences: [
            "Uses traditional Japanese theater techniques",
            "Emphasized the cultural aspects of honor",
            "Portrayed the supernatural through stylized performance"
          ]
        }
      ]
    },
    modernTranslation: {
      original: "I have lived long enough: my way of life is fall'n into the sear, the yellow leaf.",
      modern: "I have lived long enough: my life has withered like a dying leaf.",
      explanation: "Macbeth reflected on how his life had lost its vitality and meaning through his pursuit of power."
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
    id: "scene4A",
    title: "The Path of Honor",
    text: "Having refused to murder Duncan, you face Lady Macbeth's fury but gain respect among the nobles. The throne seems further away, but your conscience remains clear as you stand at a moral crossroads.",
    quote: "I dare do all that may become a man; who dares do more is none.",
    quoteSource: "Act 1, Scene 7",
    choices: [
      {
        label: "A",
        text: "Stand by your honorable decision despite Lady Macbeth's anger",
        nextScene: "ending_redemption",
        ambitionChange: -25,
        guiltChange: -15
      },
      {
        label: "B",
        text: "Begin to doubt your decision and reconsider your ambition",
        nextScene: "scene3D",
        ambitionChange: +15,
        guiltChange: +10
      },
      {
        label: "C",
        text: "Seek a compromise that satisfies both honor and ambition",
        nextScene: "scene3E",
        ambitionChange: +5,
        guiltChange: 0
      },
      {
        label: "D",
        text: "Distance yourself from Lady Macbeth's influence",
        nextScene: "ending_redemption",
        ambitionChange: -20,
        guiltChange: -10
      }
    ],
    criticalLens: {
      interpretations: [
        {
          title: "The Value of Honor",
          description: "This scene explores the tension between honor and ambition, showing how maintaining one's integrity can lead to personal sacrifice.",
          critic: "Dr. James Wilson"
        }
      ],
      criticQuotes: [
        {
          text: "Macbeth's moments of moral clarity represent brief windows into what might have been had he chosen a different path.",
          critic: "Harold Bloom",
          source: "Shakespeare: The Invention of the Human"
        }
      ],
      adaptations: [
        {
          title: "Macbeth (2015)",
          description: "Justin Kurzel's adaptation emphasized the psychological struggle of maintaining honor in a world of ambition.",
          differences: [
            "Uses visual motifs to represent honor",
            "Contrasted light and darkness as symbols",
            "Emphasized psychological rather than supernatural elements"
          ]
        }
      ]
    },
    modernTranslation: {
      original: "I dare do all that may become a man; who dares do more is none.",
      modern: "I'll do anything that a man should do; anyone who does more isn't really a man.",
      explanation: "Macbeth is expressing that there are moral limits to what actions a true man should take."
    },
    whatIfScenarios: [
      {
        id: "whatif20",
        title: "What if Macbeth had maintained his honor throughout?",
        description: "Exploring how the story might have changed if Macbeth had consistently chosen honor over ambition.",
        originalChoice: "Stand by your honorable decision",
        alternativeChoice: "Maintain honor throughout the entire story",
        consequences: [
          "Duncan might have lived a long reign",
          "Macbeth might have been remembered as a loyal thane",
          "Lady Macbeth might have grown increasingly bitter",
          "The natural succession would likely have been preserved"
        ]
      }
    ]
  },
  {
    id: "scene5C",
    title: "The Weight of Guilt",
    text: "You're haunted by visions of those you've wronged, unable to sleep or find peace. Compulsively washing your hands to remove imaginary blood stains, you wonder if your guilt can ever be cleansed.",
    quote: "Will all great Neptune's ocean wash this blood clean from my hand? No, this my hand will rather the multitudinous seas incarnadine, making the green one red.",
    quoteSource: "Act 2, Scene 2",
    choices: [
      {
        label: "A",
        text: "Seek redemption through confession",
        nextScene: "ending_redemption",
        ambitionChange: -25,
        guiltChange: -15
      },
      {
        label: "B",
        text: "Try to suppress your guilt",
        nextScene: "scene5E",
        ambitionChange: +10,
        guiltChange: +20
      },
      {
        label: "C",
        text: "Consult the witches for guidance",
        nextScene: "scene5D",
        ambitionChange: +15,
        guiltChange: +5
      },
      {
        label: "D",
        text: "Confide in a trusted advisor about your visions",
        nextScene: "ending_redemption",
        ambitionChange: -20,
        guiltChange: -10
      }
    ],
    criticalLens: {
      interpretations: [
        {
          title: "The Psychology of Guilt",
          description: "This scene explores how guilt manifests both psychologically and physically, showing how the mind can torment itself.",
          critic: "Dr. Sarah Johnson"
        }
      ],
      criticQuotes: [
        {
          text: "The hand-washing motif in Macbeth represents the futile attempt to cleanse oneself of moral guilt.",
          critic: "A.C. Bradley",
          source: "Shakespearean Tragedy"
        }
      ],
      adaptations: [
        {
          title: "Macbeth (1971)",
          description: "Roman Polanski's adaptation portrayed the psychological horror of guilt through vivid visual metaphors.",
          differences: [
            "Uses explicit imagery to represent guilt",
            "Focused on psychological deterioration",
            "Emphasized the physical manifestations of guilt"
          ]
        }
      ]
    },
    modernTranslation: {
      original: "Will all great Neptune's ocean wash this blood clean from my hand?",
      modern: "Could all the water in the ocean wash this blood from my hands?",
      explanation: "Macbeth was expressing that his guilt was so profound that it couldn't be cleansed, no matter how much he tried."
    },
    whatIfScenarios: [
      {
        id: "whatif21",
        title: "What if Macbeth had embraced his guilt?",
        description: "Exploring how the story might have changed if Macbeth had fully acknowledged his guilt and sought redemption earlier.",
        originalChoice: "Seek redemption through confession",
        alternativeChoice: "Publicly confess and accept punishment",
        consequences: [
          "Possibility of spiritual redemption",
          "Different power dynamics in Scotland",
          "Lady Macbeth's fate might have changed",
          "A different historical legacy for Macbeth"
        ]
      }
    ]
  },
  {
    id: "scene5E",
    title: "The Descent Into Madness",
    text: "Your mental state deteriorates as you see enemies in every shadow. Lady Macbeth sleepwalks through the castle muttering about blood on her hands while your paranoia grows stronger each day.",
    quote: "I am cabined, cribbed, confined, bound in to saucy doubts and fears.",
    quoteSource: "Act 3, Scene 4",
    choices: [
      {
        label: "A",
        text: "Double down on your tyranny to maintain control",
        nextScene: "scene5F",
        ambitionChange: +20,
        guiltChange: +15
      },
      {
        label: "B",
        text: "Seek help for Lady Macbeth's condition",
        nextScene: "ending_redemption",
        ambitionChange: -15,
        guiltChange: +5
      },
      {
        label: "C",
        text: "Prepare for the coming conflict with Malcolm and Macduff",
        nextScene: "scene5F",
        ambitionChange: +10,
        guiltChange: 0
      },
      {
        label: "D",
        text: "Attempt to regain your sanity through solitude",
        nextScene: "scene5C",
        ambitionChange: -5,
        guiltChange: -5
      }
    ],
    criticalLens: {
      interpretations: [
        {
          title: "The Nature of Madness",
          description: "This scene explored the different manifestations of guilt-induced madness in Macbeth and Lady Macbeth.",
          critic: "Dr. Emily Wilson"
        }
      ],
      criticQuotes: [
        {
          text: "Lady Macbeth's madness represented the feminine conscience that couldn't suppress natural human empathy indefinitely.",
          critic: "Prof. Jennifer Smith",
          source: "Gender and Power in Shakespeare"
        }
      ],
      adaptations: [
        {
          title: "Macbeth (2015)",
          description: "Justin Kurzel's adaptation portrayed the madness of both Macbeth and Lady Macbeth with stark visual imagery.",
          differences: [
            "Emphasized the isolation of madness",
            "Used harsh lighting and visual distortion",
            "Portrayed madness as a form of clarity rather than confusion"
          ]
        }
      ]
    },
    modernTranslation: {
      original: "I am cabined, cribbed, confined, bound in to saucy doubts and fears.",
      modern: "I'm trapped, restricted, and bound by overwhelming doubts and fears.",
      explanation: "Macbeth expressed how his mental state had become a prison, confining him with anxiety and paranoia."
    },
    whatIfScenarios: [
      {
        id: "whatif22",
        title: "What if Macbeth had recognized his declining mental state?",
        description: "Exploring how the story might have changed if Macbeth had acknowledged his deteriorating sanity and sought help.",
        originalChoice: "Double down on your tyranny",
        alternativeChoice: "Recognize your madness and step down from power",
        consequences: [
          "Possibility of personal redemption",
          "Different power transition in Scotland",
          "Lady Macbeth might have recovered",
          "The bloodshed might have been lessened"
        ]
      }
    ]
  }
]; 