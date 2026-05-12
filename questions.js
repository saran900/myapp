/* ============================================================
   QUESTION BANKS — Voice of Students
   ============================================================ */

/* ---- ANSWER IN OUR WORDS (40 questions, cycled across 240 levels) ---- */
var ANSWER_BANK = [
  { q: "A young boy found a lost puppy in the rain. He took it home, dried it, and fed it warm milk. The next day he searched the neighbourhood for its owner.", ask: "What kind of person is the boy? Use evidence from the passage.", hint: "Think about his actions and what they say about his character.", keys: ["kind","caring","responsible","helpful","compassionate","generous","selfless","thoughtful"] },
  { q: "Maria studied hard every night for two weeks before her exam. When results came, she scored the highest in her class.", ask: "What lesson do you learn from Maria's story?", hint: "Think about effort, persistence, and reward.", keys: ["hard work","effort","persistence","dedication","practice","discipline","success","reward","prepare"] },
  { q: "The sun is the closest star to Earth. It provides light and heat that make life possible. Without the sun, plants cannot grow and Earth would freeze.", ask: "Explain in your own words why the sun is important for life on Earth.", hint: "Think about energy, plants, temperature, and food chains.", keys: ["light","heat","energy","plants","grow","food","temperature","life","survive","warm"] },
  { q: "A farmer woke up early every morning, tended his crops through drought and flood, and never gave up even when harvests failed.", ask: "Describe the character of the farmer in your own words.", hint: "What qualities does his behaviour show?", keys: ["hardworking","determined","resilient","patient","dedicated","persistent","never give up","strong","disciplined"] },
  { q: "After the earthquake, neighbours who had never spoken shared food, tools, and helped rebuild each other's homes.", ask: "What does this event tell us about human nature during crisis?", hint: "Think about community, empathy, and cooperation.", keys: ["unity","community","cooperation","empathy","kindness","support","together","helping","sharing","bond"] },
  { q: "'The pen is mightier than the sword.' — Edward Bulwer-Lytton", ask: "What do you think this quote means? Give one real-life example.", hint: "Think about the power of words vs. violence.", keys: ["words","power","writing","ideas","influence","change","peaceful","communication","knowledge","writing"] },
  { q: "A student cheats on an exam and gets a high score. An honest student gets a lower score.", ask: "Is being honest always worth it? What would you do?", hint: "Think about integrity, trust, and long-term consequences.", keys: ["honest","integrity","trust","fair","wrong","consequences","self-respect","values","ethical","long-term"] },
  { q: "Social media allows people to connect globally but also spreads false information quickly.", ask: "Is social media more helpful or harmful to young people? Explain.", hint: "Consider both positive and negative effects with examples.", keys: ["connect","communicate","mental health","false","misinformation","anxiety","benefits","harmful","balance","influence"] },
  { q: "A young girl from a poor family walked 5 km to school every day because she believed education was her only way forward.", ask: "What values does the girl demonstrate? Why are these important?", hint: "Think about determination, sacrifice, and the value of education.", keys: ["determination","sacrifice","education","perseverance","value","motivated","ambitious","future","hopeful","committed"] },
  { q: "Scientists discovered that ocean plastic is now found inside fish eaten by humans, affecting our food supply.", ask: "Explain in your own words why this is a serious global problem.", hint: "Think about the chain: plastic → ocean → fish → humans.", keys: ["plastic","pollution","ocean","fish","humans","health","food chain","dangerous","serious","environment"] },
  { q: "A teacher spent extra hours helping a struggling student every week. Years later, that student became a successful doctor.", ask: "What role did the teacher play in the student's success? Explain.", hint: "Think about influence, mentorship, and inspiration.", keys: ["teacher","mentor","inspire","guide","help","support","influence","dedicated","care","impact"] },
  { q: "A city replaced all its petrol buses with electric ones. Pollution levels dropped by 40% within a year.", ask: "What conclusion can we draw from this action? Explain your reasoning.", hint: "Think about cause and effect, environment, and government decisions.", keys: ["electric","pollution","reduce","clean","environment","government","action","effective","change","sustainable"] },
  { q: "A child who grew up in a war zone later wrote a book about peace that was read in 50 countries.", ask: "What does this tell us about the human spirit and resilience?", hint: "Think about resilience, hope, and turning pain into purpose.", keys: ["resilience","hope","overcome","strength","peace","transform","inspire","determination","survive","purpose"] },
  { q: "Research shows that reading for just 20 minutes a day can dramatically improve vocabulary, focus, and empathy.", ask: "Why do you think reading has such wide-ranging benefits?", hint: "Think about how reading stimulates the brain and imagination.", keys: ["vocabulary","knowledge","imagination","focus","brain","empathy","mental","grow","stories","think"] },
  { q: "Many great inventions — including the telephone and light bulb — came after thousands of failures.", ask: "What does this tell us about the process of innovation?", hint: "Think about failure as a stepping stone, not an end point.", keys: ["failure","learn","try","innovation","persist","success","mistake","improve","process","never give up"] },
  { q: "A country that invests heavily in education consistently ranks among the happiest and most developed nations.", ask: "Why might education lead to national happiness and development?", hint: "Think about jobs, health, equality, and decision-making.", keys: ["education","develop","knowledge","jobs","equality","progress","informed","opportunity","healthcare","prosperity"] },
  { q: "During a famine, a village leader distributed food equally to all families, even the wealthiest, to maintain dignity.", ask: "Do you agree with this decision? Justify your view.", hint: "Think about fairness, dignity, and the purpose of community leadership.", keys: ["fair","dignity","equal","leader","community","care","respect","right","justice","distribute"] },
  { q: "A teenager spent her savings to buy trees for a deforested hill in her village instead of buying a phone.", ask: "What values guided her decision? Do you admire it?", hint: "Think about priorities, environment, and community responsibility.", keys: ["environment","sacrifice","responsible","community","priorities","nature","selfless","trees","admire","future"] },
  { q: "Kindness is described as 'a language the deaf can hear and the blind can see.'", ask: "What does this mean? How can kindness transcend differences?", hint: "Think about actions vs. words and universal human connection.", keys: ["kindness","action","universal","language","feel","heart","connect","difference","deaf","blind","humanity"] },
  { q: "A village with no electricity built its own solar panels using online instructions and scrap materials.", ask: "What qualities did the villagers show? What does this tell us about human potential?", hint: "Think about creativity, teamwork, self-reliance, and resourcefulness.", keys: ["creative","teamwork","resourceful","solar","determined","potential","solve","independent","community","innovative"] },
  { q: "'Failure is the best teacher.' Do you agree?", ask: "Argue your position with at least two reasons and one example.", hint: "Think about growth, learning from mistakes, and resilience.", keys: ["fail","learn","grow","mistake","improve","experience","lesson","strength","better","try again"] },
  { q: "Technology is replacing many jobs that humans used to do.", ask: "How should young people prepare for a future where AI may handle most work?", hint: "Think about skills, creativity, emotional intelligence, and adaptation.", keys: ["skills","creative","adapt","emotional","technology","future","prepare","learn","human","unique"] },
  { q: "Climate change is the greatest challenge facing humanity today.", ask: "What do you believe is the single most important action individuals can take? Justify.", hint: "Think about lifestyle, carbon footprint, and collective impact.", keys: ["reduce","carbon","energy","environment","lifestyle","change","impact","individual","sustainable","responsible"] },
  { q: "In many countries, students spend more time on screens than sleeping or exercising.", ask: "Is this trend dangerous? What should be done to address it?", hint: "Think about health, sleep, attention span, and social skills.", keys: ["screen","health","sleep","exercise","balance","danger","attention","social","limit","wellbeing"] },
  { q: "A small library in a remote village changed the lives of hundreds of children over 30 years.", ask: "How can access to books transform lives? Explain with detail.", hint: "Think about knowledge, imagination, opportunity, and empowerment.", keys: ["books","knowledge","opportunity","imagine","transform","dream","education","inspire","grow","empower"] },
  { q: "Honesty requires courage. Most people choose comfortable lies over uncomfortable truths.", ask: "Why is telling the truth often difficult? When is it most important?", hint: "Think about consequences, trust, and moral courage.", keys: ["truth","courage","trust","honest","difficult","consequence","moral","integrity","fear","relationship"] },
  { q: "A mother worked three jobs so her children could attend university. All three graduated and found good careers.", ask: "Reflect on the sacrifices parents make. What do we owe them in return?", hint: "Think about gratitude, reciprocity, love, and responsibility.", keys: ["sacrifice","gratitude","love","responsibility","respect","family","support","appreciate","dedication","repay"] },
  { q: "Water scarcity affects over 2 billion people worldwide, yet billions of litres are wasted daily in wealthier nations.", ask: "What does this inequality reveal about global priorities?", hint: "Think about fairness, privilege, responsibility, and global citizenship.", keys: ["inequality","water","waste","priority","global","fairness","responsibility","privilege","share","crisis"] },
  { q: "A famous scientist once said, 'The more I learn, the more I realise I don't know.'", ask: "What does this quote reveal about the nature of knowledge and learning?", hint: "Think about humility, curiosity, and the infinite depth of knowledge.", keys: ["humble","curious","learn","knowledge","infinite","wisdom","grow","question","discover","understand"] },
  { q: "In sports, teamwork is often more important than individual talent.", ask: "Do you agree? Support your view with reasons or examples.", hint: "Think about coordination, trust, complementary skills, and shared goals.", keys: ["teamwork","together","trust","coordinate","goals","support","strength","collaboration","unity","win"] },
  { q: "Governments must prioritise mental health alongside physical health in public policy.", ask: "Why should mental health be taken as seriously as physical health?", hint: "Think about impact, stigma, productivity, and quality of life.", keys: ["mental health","important","stigma","wellbeing","support","aware","equal","impact","quality","policy"] },
  { q: "A child who was told they would never succeed in school went on to win a national science prize.", ask: "What does this story tell us about labels and potential?", hint: "Think about self-belief, labels, growth mindset, and proving others wrong.", keys: ["believe","potential","label","prove","mindset","growth","success","underestimate","determined","achieve"] },
  { q: "Languages are dying at a rate of one every two weeks as the world becomes more globalised.", ask: "Why does the loss of a language matter? Explain your view.", hint: "Think about culture, identity, history, and diversity.", keys: ["culture","identity","history","diversity","heritage","language","loss","important","connect","unique"] },
  { q: "During a blackout that lasted three days, people in one neighbourhood rediscovered face-to-face connection.", ask: "What does this suggest about how technology affects human relationships?", hint: "Think about isolation, screens, conversation, and real community.", keys: ["technology","connect","real","conversation","screen","isolate","community","human","relationship","digital"] },
  { q: "A 10-year-old raised money to buy winter coats for homeless children in her city by baking and selling cookies.", ask: "What character traits does she demonstrate? What can adults learn from children like her?", hint: "Think about compassion, initiative, and generosity without being asked.", keys: ["compassion","initiative","generous","kind","empathy","action","inspire","lead","care","community"] },
  { q: "Poetry has been described as 'the art of saying the unsayable.'", ask: "What do you think this means? Why might someone choose poetry over plain writing?", hint: "Think about emotion, imagery, language, and what ordinary words cannot express.", keys: ["emotion","express","language","feel","imagine","beauty","meaning","art","words","creative"] },
  { q: "A country with the world's highest life expectancy spends very little on healthcare but a lot on walkable cities and community gardens.", ask: "What can we learn from this about what really keeps people healthy?", hint: "Think about lifestyle, community, diet, movement, and social connection.", keys: ["lifestyle","community","health","exercise","diet","social","environment","design","nature","connection"] },
  { q: "Scientists warn that the next pandemic could be worse than COVID-19 if the world does not prepare now.", ask: "What lessons should governments and individuals have learned from the COVID-19 pandemic?", hint: "Think about preparedness, cooperation, science, and individual responsibility.", keys: ["prepare","cooperate","science","lesson","health","pandemic","responsible","global","community","learn"] },
  { q: "A student who struggled with reading until age 12 became an award-winning author at 25.", ask: "What does this journey tell us about the power of perseverance?", hint: "Think about late bloomers, belief, support, and continued effort.", keys: ["persevere","struggle","believe","support","success","late","bloom","never give up","journey","achieve"] },
  { q: "The Amazon rainforest produces 20% of the world's oxygen and is home to 10% of all species.", ask: "Why should people who have never visited the Amazon still care about its preservation?", hint: "Think about global responsibility, interconnected ecosystems, and our shared planet.", keys: ["oxygen","biodiversity","global","ecosystem","responsibility","planet","shared","environment","care","future"] }
];

/* ---- STORY WRITING BANK (40 prompts) ---- */
var STORY_BANK = [
  { prompt: "The old lighthouse had not shone its light for a hundred years, until one stormy night when…", task: "Continue this scene in at least 3 sentences.", minWords: { easy: 30, medium: 60, hard: 100 } },
  { prompt: "She opened the box that had been hidden under the floorboards and gasped because…", task: "Describe what she found and how it changed everything.", minWords: { easy: 30, medium: 60, hard: 100 } },
  { prompt: "The last robot on Earth walked slowly through the empty streets, remembering…", task: "Write about its memories and what it feels.", minWords: { easy: 30, medium: 60, hard: 100 } },
  { prompt: "A student discovers they can hear other people's thoughts — but only during exams.", task: "Write a paragraph about what happens during their first exam.", minWords: { easy: 40, medium: 70, hard: 120 } },
  { prompt: "A small village has only one tree left in the entire country.", task: "Write about how the villagers protect it and what it means to them.", minWords: { easy: 40, medium: 70, hard: 120 } },
  { prompt: "On her first day at a new school, Priya found a letter in her locker addressed to her — but from herself, ten years in the future.", task: "What did the letter say? What did Priya do next?", minWords: { easy: 40, medium: 80, hard: 130 } },
  { prompt: "Every morning, an old man sat on the same bench and smiled at every passing stranger.", task: "Who was he? Why did he smile? Write a short story about him.", minWords: { easy: 30, medium: 60, hard: 100 } },
  { prompt: "The spaceship was supposed to carry 500 people to a new planet. Only one person woke up — 90 years too early.", task: "Write the story of what that person discovers and decides to do.", minWords: { easy: 50, medium: 90, hard: 140 } },
  { prompt: "A boy found a glass bottle on the beach containing a photograph of a girl who looked exactly like his mother — dated 1963.", task: "Write the story that follows his discovery.", minWords: { easy: 50, medium: 90, hard: 140 } },
  { prompt: "The day the river stopped flowing, everyone in the village knew something was deeply wrong.", task: "Write about what happened next and how the community responded.", minWords: { easy: 40, medium: 70, hard: 120 } },
  { prompt: "A mysterious door appeared overnight in the middle of the school playground.", task: "Write a story about what happens when someone opens it.", minWords: { easy: 40, medium: 80, hard: 130 } },
  { prompt: "An elderly woman received a phone call from a number she didn't recognise. The voice on the other end was her own — from 40 years ago.", task: "What did the two versions of herself say to each other?", minWords: { easy: 50, medium: 90, hard: 140 } },
  { prompt: "Every year on the same day, a single flower grew in the cracked concrete of the city square.", task: "Write the story of this flower and what it came to mean to the people of the city.", minWords: { easy: 40, medium: 70, hard: 120 } },
  { prompt: "A child discovers that the drawings she makes always come true by morning.", task: "Write about what she draws one night and what happens when the sun rises.", minWords: { easy: 40, medium: 80, hard: 130 } },
  { prompt: "Two enemies find themselves trapped in a lift together for three hours.", task: "Write the story of their conversation and how they emerge.", minWords: { easy: 50, medium: 90, hard: 140 } },
  { prompt: "The village baker always left an extra loaf outside the bakery door every night.", task: "Write the story of who took the bread and why, and the day the baker finally met them.", minWords: { easy: 40, medium: 70, hard: 120 } },
  { prompt: "A scientist discovered a formula that could erase any one memory from any person's mind.", task: "Write about the first time she used it and the consequences she did not expect.", minWords: { easy: 50, medium: 90, hard: 140 } },
  { prompt: "A young musician played on street corners for years and was ignored — until one rainy Tuesday.", task: "Write the story of that Tuesday and how it changed his life.", minWords: { easy: 40, medium: 70, hard: 120 } },
  { prompt: "The map was drawn on a piece of cloth so old it crumbled at the edges. It showed a path to something that should not exist.", task: "Write the adventure that follows.", minWords: { easy: 50, medium: 90, hard: 150 } },
  { prompt: "She had walked across the entire country alone and finally reached the sea. She sat down and began to write a letter.", task: "Write the letter she wrote and to whom it was addressed.", minWords: { easy: 40, medium: 70, hard: 120 } },
  { prompt: "A grandfather spent every evening telling his grandchildren about a great war he had survived. One evening he told them a detail he had never shared before.", task: "Write that evening's conversation and its impact on the family.", minWords: { easy: 50, medium: 90, hard: 140 } },
  { prompt: "On the day the machines stopped working, people suddenly remembered what it meant to do things by hand.", task: "Write a story about one family's first week without electricity or technology.", minWords: { easy: 50, medium: 90, hard: 140 } },
  { prompt: "A girl was born in a library and grew up among its shelves. She had never once set foot outside.", task: "Write the story of the day she finally opened the front door.", minWords: { easy: 40, medium: 80, hard: 130 } },
  { prompt: "The theme is: A second chance.", task: "Write a complete short story with a title about a character given one final opportunity to change something important.", minWords: { easy: 60, medium: 100, hard: 160 } },
  { prompt: "Every night at exactly midnight, the statue in the town square would speak — but only one person could hear it.", task: "Write the story of that person and what the statue said.", minWords: { easy: 40, medium: 80, hard: 130 } },
  { prompt: "A doctor who had saved thousands of lives received a letter from someone whose life she had accidentally made worse.", task: "Write about how she responds and what she does next.", minWords: { easy: 50, medium: 90, hard: 140 } },
  { prompt: "Two children from opposite sides of a wall became friends by passing notes through a hole.", task: "Write about their friendship and the day the wall came down.", minWords: { easy: 40, medium: 70, hard: 120 } },
  { prompt: "An explorer returned from 10 years in the jungle to find everything he knew had changed — except one small shop on a corner.", task: "Write about his first week back and the significance of that shop.", minWords: { easy: 50, medium: 90, hard: 140 } },
  { prompt: "The theme is: Courage in silence.", task: "Write a story about a character who does something brave without anyone knowing.", minWords: { easy: 60, medium: 100, hard: 160 } },
  { prompt: "A girl planted a seed on the day her grandmother died. By the time she was old herself, it had become the largest tree in the region.", task: "Write the story of the tree across the years.", minWords: { easy: 50, medium: 90, hard: 140 } },
  { prompt: "A fisherman hauled in his net one morning and found it full of books instead of fish.", task: "Write the story of where the books came from and what he did with them.", minWords: { easy: 40, medium: 80, hard: 130 } },
  { prompt: "A young woman received a scholarship to study art in another country but had never left her village.", task: "Write her first month in the city — the fear, the wonder, and the discovery.", minWords: { easy: 50, medium: 90, hard: 140 } },
  { prompt: "The theme is: The kindness of a stranger.", task: "Write a short story where an unexpected act of kindness from a stranger changes the course of someone's life.", minWords: { easy: 60, medium: 100, hard: 160 } },
  { prompt: "On the last day of school, a teacher left a handwritten note on each student's desk.", task: "Write the story of one student who found that note 20 years later.", minWords: { easy: 40, medium: 80, hard: 130 } },
  { prompt: "A boy who had never spoken a single word his whole life suddenly said one sentence on his twelfth birthday.", task: "Write what he said and how the world changed after those words.", minWords: { easy: 50, medium: 90, hard: 140 } },
  { prompt: "A painter discovered that every portrait she painted showed the subject's future.", task: "Write about the day she painted her own portrait.", minWords: { easy: 50, medium: 90, hard: 140 } },
  { prompt: "The theme is: What we leave behind.", task: "Write a story about what one person's life left behind in the world — even after they were gone.", minWords: { easy: 60, medium: 100, hard: 160 } },
  { prompt: "A 12-year-old found a wallet with a huge sum of money and a photograph of a crying child.", task: "Write the journey she takes to return it and what she discovers along the way.", minWords: { easy: 50, medium: 90, hard: 140 } },
  { prompt: "The theme is: Forgiveness.", task: "Write a story about two characters — one who wronged another — and the long road to forgiveness.", minWords: { easy: 60, medium: 100, hard: 160 } },
  { prompt: "A clock in an old house ticked backwards. The family who moved in ignored it at first.", task: "Write the story of what happened when they finally paid attention to it.", minWords: { easy: 50, medium: 90, hard: 140 } }
];

/* ---- PSYCHOLOGY QUESTION BANK ---- */
/* MCQ questions for levels 1–160 (40 questions cycling) */
var PSYCH_MCQ = [
  { q: "What is 'self-esteem'?", opts: ["Fear of social situations","How you value and see yourself","The ability to memorise facts","A personality disorder"], correct: 1, exp: "Self-esteem refers to how much you value, respect, and feel confident about yourself." },
  { q: "Which part of the brain is most associated with emotions and memory?", opts: ["Cerebellum","Frontal lobe","Limbic system","Brain stem"], correct: 2, exp: "The limbic system, including the amygdala and hippocampus, governs emotions and memory." },
  { q: "What does 'empathy' mean?", opts: ["Feeling sorry for someone","Understanding and sharing another's feelings","Ignoring people's problems","Being shy"], correct: 1, exp: "Empathy is the ability to understand and share the feelings of another person." },
  { q: "Pavlov trained dogs to salivate at a bell. This is an example of:", opts: ["Operant conditioning","Observational learning","Classical conditioning","Cognitive development"], correct: 2, exp: "Classical conditioning involves associating a neutral stimulus (bell) with an unconditioned response (salivation)." },
  { q: "Maslow placed 'self-actualisation' at which level of his hierarchy?", opts: ["Bottom","Middle","Second from top","Top"], correct: 3, exp: "Self-actualisation — reaching one's full potential — sits at the very top of Maslow's pyramid." },
  { q: "Which defence mechanism involves attributing your own feelings to others?", opts: ["Denial","Projection","Rationalisation","Sublimation"], correct: 1, exp: "Projection means attributing your own unacceptable thoughts or feelings to someone else." },
  { q: "A phobia is best described as:", opts: ["Dislike of something","Intense irrational fear of something specific","Inability to remember","Social anxiety"], correct: 1, exp: "A phobia is a persistent, excessive, and irrational fear of a specific object or situation." },
  { q: "The 'fight or flight' response is controlled by which system?", opts: ["Somatic nervous system","Parasympathetic system","Sympathetic nervous system","Central nervous system"], correct: 2, exp: "The sympathetic nervous system activates the body's fight-or-flight response under stress." },
  { q: "What is 'cognitive dissonance'?", opts: ["Excellent memory","Discomfort from conflicting beliefs or actions","Fear of thinking","Learning through observation"], correct: 1, exp: "Cognitive dissonance is the mental discomfort caused by holding two contradictory beliefs simultaneously." },
  { q: "Operant conditioning rewards desired behaviour using:", opts: ["Classical association","Punishment only","Reinforcement","Observation"], correct: 2, exp: "Operant conditioning (B.F. Skinner) uses positive or negative reinforcement to shape behaviour." },
  { q: "Which psychologist developed the theory of psychosexual stages?", opts: ["Carl Jung","Abraham Maslow","Sigmund Freud","John Watson"], correct: 2, exp: "Sigmund Freud proposed that personality develops through a series of psychosexual stages in childhood." },
  { q: "What is 'confirmation bias'?", opts: ["Seeking information that confirms existing beliefs","Changing your mind based on evidence","Random decision-making","Forgetting painful memories"], correct: 0, exp: "Confirmation bias is the tendency to search for information that supports your pre-existing beliefs." },
  { q: "The Bystander Effect suggests people are less likely to help in an emergency when:", opts: ["They are alone","Others are present","They know the victim","It is daytime"], correct: 1, exp: "The bystander effect occurs because individuals assume others will take responsibility when a crowd is present." },
  { q: "Short-term memory can typically hold how many items at once?", opts: ["3–4","7 ± 2","15–20","2–3"], correct: 1, exp: "George Miller's research showed short-term memory holds approximately 7 (±2) chunks of information." },
  { q: "Observational learning (modelling) was studied by which psychologist?", opts: ["Ivan Pavlov","B.F. Skinner","Albert Bandura","Jean Piaget"], correct: 2, exp: "Albert Bandura's Bobo doll experiment showed children learn behaviours by watching adults." },
  { q: "Which stage of sleep is most associated with dreaming?", opts: ["Stage 1","Stage 2","Stage 3 (deep)","REM sleep"], correct: 3, exp: "Rapid Eye Movement (REM) sleep is when most vivid dreaming occurs." },
  { q: "The 'halo effect' means:", opts: ["Good events follow good thoughts","One positive trait leads to positive judgements overall","Sunshine improves mood","Memory works best in familiar places"], correct: 1, exp: "The halo effect is a cognitive bias where one positive quality leads us to assume other positive qualities." },
  { q: "Intrinsic motivation comes from:", opts: ["External rewards like money","Internal satisfaction and interest","Fear of punishment","Social pressure"], correct: 1, exp: "Intrinsic motivation is driven by internal rewards — enjoyment, curiosity, or personal satisfaction." },
  { q: "'Neuroplasticity' refers to the brain's ability to:", opts: ["Grow in size indefinitely","Change and reorganise by forming new connections","Store infinite memories","Control the entire body"], correct: 1, exp: "Neuroplasticity is the brain's remarkable ability to restructure itself by forming new neural connections." },
  { q: "What does 'attachment theory' (John Bowlby) focus on?", opts: ["Workplace motivation","Emotional bonds between infants and caregivers","Learning through punishment","Memory storage"], correct: 1, exp: "Bowlby's attachment theory examines the importance of the bond between children and their caregivers for healthy development." },
  { q: "Which of these is an example of negative reinforcement?", opts: ["Giving candy for good behaviour","Removing loud noise when someone completes a task","Grounding a child","Ignoring bad behaviour"], correct: 1, exp: "Negative reinforcement involves removing an unpleasant stimulus to increase desired behaviour." },
  { q: "Post-Traumatic Stress Disorder (PTSD) is triggered by:", opts: ["Exam stress","Everyday worries","Experiencing or witnessing a traumatic event","Low self-confidence"], correct: 2, exp: "PTSD can develop after experiencing or witnessing a traumatic event such as disaster, abuse, or war." },
  { q: "The 'unconscious mind' is central to which psychological approach?", opts: ["Behaviourism","Humanism","Psychoanalysis","Cognitive psychology"], correct: 2, exp: "Psychoanalytic theory, founded by Freud, emphasises the role of the unconscious mind in shaping behaviour." },
  { q: "What is the main claim of the 'nature vs nurture' debate?", opts: ["Genetics alone determine personality","Environment alone shapes us","Both genetics and environment influence who we are","Neither factors matter"], correct: 2, exp: "Most psychologists agree that both genetic (nature) and environmental (nurture) factors shape human development." },
  { q: "Stanley Milgram's obedience experiment showed that people would:", opts: ["Refuse all authority","Follow authority even when it caused harm","Act independently under pressure","Behave altruistically in groups"], correct: 1, exp: "Milgram's study revealed that ordinary people would administer what they believed were dangerous electric shocks under authority." },
  { q: "Selective attention means:", opts: ["Remembering everything equally","Focusing on one stimulus while ignoring others","Paying attention in class","Avoiding difficult topics"], correct: 1, exp: "Selective attention is the ability to focus on a specific stimulus while filtering out other stimuli." },
  { q: "Which type of memory stores personal life events?", opts: ["Semantic memory","Procedural memory","Episodic memory","Sensory memory"], correct: 2, exp: "Episodic memory stores autobiographical memories of personal experiences — what happened to you and when." },
  { q: "What is 'learned helplessness'?", opts: ["Learning new skills","Believing one has no control after repeated failures","Helping others learn","A type of intelligence"], correct: 1, exp: "Learned helplessness occurs when repeated failure leads a person to believe they cannot control outcomes — even when they can." },
  { q: "The 'growth mindset' (Carol Dweck) is the belief that:", opts: ["Intelligence is fixed at birth","Abilities can be developed through effort","Success comes from talent alone","Failure defines a person"], correct: 1, exp: "A growth mindset is the belief that intelligence and abilities can be developed with effort, strategies, and persistence." },
  { q: "Which of these best describes 'social conformity'?", opts: ["Thinking independently","Adjusting behaviour to match group norms","Leading others","Helping strangers"], correct: 1, exp: "Social conformity is the adjustment of one's behaviour, attitudes, or beliefs to match those of a group." },
  { q: "Stress that motivates performance is called:", opts: ["Distress","Chronic stress","Eustress","Burnout"], correct: 2, exp: "Eustress is positive stress that enhances focus, performance, and motivation — such as before a competition." },
  { q: "Which hormone is often called the 'stress hormone'?", opts: ["Dopamine","Serotonin","Oxytocin","Cortisol"], correct: 3, exp: "Cortisol is released by the adrenal glands in response to stress and plays a key role in the fight-or-flight response." },
  { q: "What does it mean to 'internalise' behaviour?", opts: ["Copy others","Adopt a behaviour as your own genuine belief","Forget learned information","Resist social pressure"], correct: 1, exp: "Internalisation means adopting a behaviour or belief because you genuinely agree with it, not just because of social pressure." },
  { q: "Which approach in psychology focuses on free will and personal growth?", opts: ["Behaviourism","Psychoanalysis","Humanism","Cognitive neuroscience"], correct: 2, exp: "Humanistic psychology (Maslow, Rogers) emphasises free will, personal growth, and the fulfilment of human potential." },
  { q: "The 'fight, flight, or freeze' response is:", opts: ["A memory technique","The brain's automatic survival response to danger","A type of meditation","A learning strategy"], correct: 1, exp: "This is the body's automatic physiological response to perceived threats, preparing you to fight, run, or freeze." },
  { q: "What is 'desensitisation' in psychology?", opts: ["Making someone more sensitive to stimuli","Gradually reducing emotional response to a stimulus","A type of memory loss","Increasing fear over time"], correct: 1, exp: "Desensitisation (systematic desensitisation) reduces anxiety by gradually exposing a person to a feared stimulus." },
  { q: "Erikson's stages of psychosocial development focuses on:", opts: ["Intellectual growth only","Conflicts we resolve across our entire lifespan","Behaviour modification","Brain chemistry"], correct: 1, exp: "Erik Erikson proposed 8 life stages, each involving a central psychosocial conflict that shapes personality." },
  { q: "The term 'locus of control' refers to:", opts: ["Where the brain processes emotions","The degree to which people believe they control their outcomes","A type of memory","Brain structure"], correct: 1, exp: "Locus of control is the extent to which people believe they (internal) or outside forces (external) control events in their lives." },
  { q: "What is the primary purpose of the 'placebo effect' in psychology research?", opts: ["To test real drugs","To measure how belief affects outcomes","To increase sample size","To reduce bias"], correct: 1, exp: "The placebo effect demonstrates that belief in treatment can itself produce real psychological and physical changes." },
  { q: "Which neurotransmitter is associated with happiness and mood regulation?", opts: ["Adrenaline","Cortisol","Serotonin","Dopamine"], correct: 2, exp: "Serotonin is a key neurotransmitter involved in mood regulation, happiness, and emotional well-being." }
];

/* Open questions for levels 161–240 (40 questions cycling) */
var PSYCH_OPEN = [
  { q: "Maslow's Hierarchy of Needs suggests basic needs must be met before higher-level ones.", ask: "Give a real-world example and explain how it affects a student's ability to learn.", keys: ["safety","food","shelter","basic","need","learn","focus","hierarchy","motivation","comfortable"] },
  { q: "Cognitive Behavioural Therapy (CBT) is based on the idea that thoughts influence feelings and behaviour.", ask: "Describe a negative thought pattern a student might have and how they could challenge it.", keys: ["thought","feeling","behaviour","negative","challenge","replace","positive","change","pattern","CBT"] },
  { q: "Social media platforms use variable reward schedules to keep users engaged.", ask: "Explain what a variable reward schedule is and why it makes social media addictive.", keys: ["reward","random","unpredictable","dopamine","scroll","like","addictive","schedule","reinforce","engage"] },
  { q: "The Milgram experiment showed that ordinary people could follow harmful orders from authority.", ask: "What does this reveal about human nature? How can we protect against blind obedience?", keys: ["obey","authority","harm","ordinary","responsibility","question","resist","moral","pressure","conform"] },
  { q: "Attachment in childhood shapes adult relationships significantly.", ask: "Explain how early attachment styles (secure/anxious/avoidant) might affect adult behaviour.", keys: ["attachment","secure","anxious","avoidant","childhood","adult","trust","relationship","bond","develop"] },
  { q: "Cognitive dissonance is resolved by changing our beliefs, actions, or justifications.", ask: "Give a personal or observed example of cognitive dissonance and how it was resolved.", keys: ["dissonance","conflict","belief","action","justify","change","uncomfortable","resolve","attitude","behaviour"] },
  { q: "The Stanford Prison Experiment (Zimbardo) showed how quickly roles can corrupt behaviour.", ask: "What does this tell us about situational vs. dispositional explanations of behaviour?", keys: ["situation","role","power","corrupt","disposition","environment","influence","context","behaviour","identity"] },
  { q: "Growth mindset (Dweck) suggests intelligence is not fixed.", ask: "How can teachers and parents practically apply growth mindset principles to help students?", keys: ["effort","praise","grow","feedback","process","challenge","improve","fixed","mindset","potential"] },
  { q: "Learned helplessness is a major barrier to success for many students.", ask: "How might it develop, and what can educators do to reverse it?", keys: ["helpless","failure","control","repeat","break","encourage","success","reverse","cycle","support"] },
  { q: "Confirmation bias affects how we consume news and information.", ask: "How does this pose a danger to democratic society? What can individuals do about it?", keys: ["bias","confirm","believe","filter","news","diverse","critical","think","media","danger"] },
  { q: "Self-actualisation is the pinnacle of Maslow's hierarchy.", ask: "What does self-actualisation look like in practice? Can everyone achieve it?", keys: ["potential","fulfil","purpose","grow","achieve","meaning","creative","Maslow","peak","authentic"] },
  { q: "The bystander effect means larger crowds reduce individual helping behaviour.", ask: "How can this knowledge be used to increase helping in emergencies?", keys: ["bystander","crowd","responsibility","diffuse","individual","step up","aware","action","intervene","help"] },
  { q: "Neuroplasticity means the brain changes based on experience.", ask: "What are the implications of neuroplasticity for education and recovery from brain injury?", keys: ["brain","change","adapt","learn","recover","plasticity","new","connection","exercise","therapy"] },
  { q: "Stress can be both beneficial (eustress) and harmful (distress).", ask: "How can we tell the difference, and how can we convert distress into eustress?", keys: ["eustress","distress","manage","cope","challenge","view","positive","healthy","balance","control"] },
  { q: "PTSD can result from a single traumatic event.", ask: "Explain the psychological mechanisms behind PTSD and why some people are more vulnerable than others.", keys: ["trauma","memory","trigger","anxiety","fear","flashback","brain","amygdala","cope","support"] },
  { q: "The 'social learning theory' (Bandura) suggests we learn by watching others.", ask: "How does this theory explain the influence of social media influencers on young people?", keys: ["model","observe","influence","copy","social","media","behaviour","learn","role","imitate"] },
  { q: "Locus of control affects how people respond to success and failure.", ask: "Compare how someone with an internal vs. external locus of control would react to failing an exam.", keys: ["internal","external","control","blame","responsibility","effort","chance","luck","agency","respond"] },
  { q: "Operant conditioning can be used ethically to shape behaviour in schools.", ask: "Design a simple reward system for a classroom using the principles of operant conditioning.", keys: ["reinforce","reward","positive","behaviour","token","system","target","consistent","consequence","motivate"] },
  { q: "Selective attention explains why we miss what is right in front of us.", ask: "Describe one example of inattentional blindness and its implications for everyday life.", keys: ["attention","miss","focus","blind","distract","aware","drive","danger","concentrate","notice"] },
  { q: "Emotional intelligence (EQ) may be as important as IQ.", ask: "Define emotional intelligence and explain how it contributes to success in school and work.", keys: ["emotional","empathy","awareness","manage","regulate","relate","social","skill","success","intelligence"] },
  { q: "Erikson believed that identity crisis is a normal part of adolescence.", ask: "How might a healthy identity be formed? What risks arise if this stage is not resolved?", keys: ["identity","adolescence","role","confusion","values","self","crisis","develop","social","culture"] },
  { q: "Desensitisation can reduce phobias through gradual exposure.", ask: "Outline the process of systematic desensitisation and how it could help someone with a fear of heights.", keys: ["expose","gradual","anxiety","relax","hierarchy","fear","reduce","step","systematic","response"] },
  { q: "The unconscious mind (Freud) influences behaviour without our awareness.", ask: "Give two examples of how the unconscious might manifest in everyday behaviour.", keys: ["unconscious","dream","slip","suppress","desire","defence","repression","manifest","hidden","Freud"] },
  { q: "Cultural factors significantly influence psychological development.", ask: "How might growing up in a collectivist vs. individualist culture shape a person's identity and values?", keys: ["culture","collectivist","individual","identity","values","community","self","norm","behaviour","society"] },
  { q: "Mental health stigma prevents many people from seeking help.", ask: "What causes stigma, and how can schools and communities reduce it?", keys: ["stigma","shame","mental","seek help","aware","educate","open","talk","reduce","community"] },
  { q: "The Pygmalion effect shows that teacher expectations affect student performance.", ask: "Explain the Pygmalion effect and discuss its ethical implications for classrooms.", keys: ["expectation","performance","teacher","belief","self-fulfilling","prophecy","raise","impact","label","ethical"] },
  { q: "Sleep deprivation significantly impairs cognitive function.", ask: "Using psychology, explain how lack of sleep affects memory, mood, and decision-making.", keys: ["sleep","memory","mood","decision","impair","brain","consolidate","emotion","regulate","rest"] },
  { q: "Mindfulness is increasingly used to manage anxiety and depression.", ask: "What is mindfulness, and what does psychological research say about its effectiveness?", keys: ["mindfulness","present","aware","breath","anxiety","reduce","focus","calm","evidence","practice"] },
  { q: "The 'just world hypothesis' leads people to blame victims of misfortune.", ask: "Explain this bias and how it affects our response to poverty, crime, and illness.", keys: ["just world","blame","victim","deserve","fair","bias","suffer","poverty","attitude","social"] },
  { q: "The halo effect affects hiring decisions, jury judgments, and grading.", ask: "Give two real contexts where the halo effect could lead to unfair outcomes, and suggest solutions.", keys: ["halo","bias","attractive","impression","judge","fair","unfair","hiring","solution","aware"] },
  { q: "Intrinsic motivation leads to deeper and more sustained learning than extrinsic motivation.", ask: "How can teachers shift students from extrinsic to intrinsic motivation in the classroom?", keys: ["intrinsic","extrinsic","internal","reward","choice","autonomy","interest","engage","motivate","sustain"] },
  { q: "Phobias are maintained by avoidance behaviour.", ask: "Explain why avoidance maintains phobias and what approach would be most effective in treating them.", keys: ["avoidance","maintain","phobia","expose","face","fear","escape","cycle","treatment","CBT"] },
  { q: "Nature and nurture interact in complex ways to shape intelligence.", ask: "Discuss how both genetics and environment contribute to cognitive development.", keys: ["nature","nurture","genes","environment","interact","intelligence","develop","twin","family","complex"] },
  { q: "Prosocial behaviour tends to increase in close-knit communities.", ask: "What social and psychological factors encourage people to help others?", keys: ["prosocial","help","community","empathy","norm","altruism","close","trust","encourage","social"] },
  { q: "The placebo effect demonstrates the power of the mind over the body.", ask: "Describe how the placebo effect works and give one example from medicine or psychology.", keys: ["placebo","belief","mind","body","expect","real","effect","treatment","powerful","example"] },
  { q: "Groupthink occurs when desire for harmony overrides critical thinking in groups.", ask: "Describe groupthink with an example and explain how it can be prevented.", keys: ["groupthink","harmony","critical","group","pressure","conform","decision","prevent","diverse","dissent"] },
  { q: "Positive psychology focuses on strengths rather than disorders.", ask: "How does positive psychology differ from traditional psychology, and what are its practical benefits?", keys: ["positive","strength","flourish","wellbeing","traditional","disorder","focus","happiness","resilience","growth"] },
  { q: "Self-efficacy (Bandura) is the belief in one's ability to succeed in specific tasks.", ask: "How does self-efficacy affect academic performance and how can it be improved?", keys: ["self-efficacy","belief","ability","succeed","task","confidence","performance","improve","mastery","experience"] },
  { q: "The prisoner's dilemma illustrates the conflict between cooperation and self-interest.", ask: "Explain the prisoner's dilemma and what it reveals about human social behaviour.", keys: ["cooperate","self-interest","trust","dilemma","rational","choose","outcome","game","social","strategy"] },
  { q: "Adolescence is a time of identity formation and significant brain development.", ask: "How does brain development during adolescence explain risk-taking and emotional intensity?", keys: ["prefrontal","develop","risk","emotion","impulse","adolescent","brain","regulate","identity","teen"] }
];

/* ============================================================
   MATHS QUESTION GENERATOR (deterministic by level)
   ============================================================ */
function seededRNG(seed) {
  let s = (seed * 1664525 + 1013904223) & 0xFFFFFFFF;
  return {
    next() {
      s = (s * 1664525 + 1013904223) & 0xFFFFFFFF;
      return (s >>> 0) / 4294967295;
    },
    int(min, max) {
      return Math.floor(this.next() * (max - min + 1)) + min;
    }
  };
}

function genDistractors(correct, rng, count = 3) {
  const set = new Set([correct]);
  while (set.size < count + 1) {
    const offset = rng.int(1, Math.max(5, Math.abs(Math.round(correct * 0.3)) || 5));
    const sign   = rng.next() > 0.5 ? 1 : -1;
    const cand   = correct + sign * offset;
    if (cand !== correct && cand >= 0) set.add(cand);
  }
  const arr = [...set];
  arr.splice(arr.indexOf(correct), 1);
  const d = arr.slice(0, count);
  const allOpts = [correct, ...d].sort((a, b) => a - b);
  const ci = allOpts.indexOf(correct);
  return { options: allOpts.map(String), correct: ci };
}

function fraction(n, d) { return `${n}/${d}`; }

function generateMathQuestion(level) {
  const rng = seededRNG(level * 7919);

  /* ---- LEVELS 1–30: Single-digit addition ---- */
  if (level <= 30) {
    const a = rng.int(1, 9), b = rng.int(1, 9);
    const ans = a + b;
    const { options, correct } = genDistractors(ans, rng);
    return { question: `What is ${a} + ${b}?`, options, correct, pts: 5, type: "mcq", topic: "Basic Addition" };
  }
  /* ---- 31–60: Double-digit addition ---- */
  if (level <= 60) {
    const a = rng.int(10, 99), b = rng.int(10, 99);
    const ans = a + b;
    const { options, correct } = genDistractors(ans, rng);
    return { question: `What is ${a} + ${b}?`, options, correct, pts: 8, type: "mcq", topic: "Addition" };
  }
  /* ---- 61–90: Subtraction ---- */
  if (level <= 90) {
    const b = rng.int(10, 80), a = b + rng.int(5, 60);
    const ans = a - b;
    const { options, correct } = genDistractors(ans, rng);
    return { question: `What is ${a} − ${b}?`, options, correct, pts: 8, type: "mcq", topic: "Subtraction" };
  }
  /* ---- 91–120: Multiplication tables ---- */
  if (level <= 120) {
    const a = rng.int(2, 12), b = rng.int(2, 12);
    const ans = a * b;
    const { options, correct } = genDistractors(ans, rng);
    return { question: `What is ${a} × ${b}?`, options, correct, pts: 10, type: "mcq", topic: "Multiplication" };
  }
  /* ---- 121–150: Division ---- */
  if (level <= 150) {
    const b = rng.int(2, 12), ans = rng.int(2, 20);
    const a = b * ans;
    const { options, correct } = genDistractors(ans, rng);
    return { question: `What is ${a} ÷ ${b}?`, options, correct, pts: 10, type: "mcq", topic: "Division" };
  }
  /* ---- 151–170: Percentages ---- */
  if (level <= 170) {
    const pct = [10, 20, 25, 50][rng.int(0, 3)];
    const whole = rng.int(2, 20) * 10;
    const ans = (pct / 100) * whole;
    const { options, correct } = genDistractors(ans, rng);
    return { question: `What is ${pct}% of ${whole}?`, options, correct, pts: 12, type: "mcq", topic: "Percentages" };
  }
  /* ---- 171–190: Simple fractions ---- */
  if (level <= 190) {
    const d = rng.int(2, 8), n1 = rng.int(1, d - 1), n2 = rng.int(1, d - 1);
    const ans = n1 + n2;
    const { options, correct } = genDistractors(ans, rng);
    return {
      question: `Add fractions (same denominator): ${fraction(n1, d)} + ${fraction(n2, d)} = ?/${d}`,
      options: options.map(o => `${o}/${d}`), correct, pts: 12, type: "mcq", topic: "Fractions"
    };
  }
  /* ---- 191–210: Basic algebra ---- */
  if (level <= 210) {
    const x = rng.int(2, 15), c = rng.int(1, 20), b = c + x;
    const ans = x;
    const { options, correct } = genDistractors(ans, rng);
    return { question: `Solve for x:  x + ${c} = ${b}`, options, correct, pts: 15, type: "mcq", topic: "Algebra" };
  }
  /* ---- 211–225: Two-step algebra ---- */
  if (level <= 225) {
    const x = rng.int(2, 10), m = rng.int(2, 5), c = rng.int(1, 15);
    const rhs = m * x + c;
    const ans = x;
    const { options, correct } = genDistractors(ans, rng);
    return { question: `Solve for x:  ${m}x + ${c} = ${rhs}`, options, correct, pts: 18, type: "mcq", topic: "Algebra" };
  }
  /* ---- 226–240: Word problems (open text) ---- */
  const problems = [
    { q: `A train travels at ${rng.int(60, 120)} km/h for ${rng.int(2, 5)} hours. How far does it travel?`, hint: "Distance = Speed × Time. Show your working." },
    { q: `A shopkeeper bought ${rng.int(5, 15)} boxes of pens at ₹${rng.int(20, 50)} each, then sold them for ₹${rng.int(60, 100)} per box. What was his profit?`, hint: "Profit = Selling Price − Cost Price. Show all steps." },
    { q: `If ${rng.int(3, 6)} workers can build a wall in ${rng.int(4, 10)} days, how many days will ${rng.int(2, 4)} workers take?`, hint: "Use the formula: Workers × Days = constant. Show your reasoning." },
    { q: `A rectangle has a perimeter of ${rng.int(40, 80)} cm. Its length is ${rng.int(5, 15)} cm more than its width. Find the length and width.`, hint: "Perimeter = 2(l + w). Set up an equation and solve." },
    { q: `Two numbers have a sum of ${rng.int(30, 80)} and a difference of ${rng.int(2, 20)}. What are the two numbers?`, hint: "Use simultaneous equations: a + b = sum, a − b = difference." }
  ];
  const pb = problems[rng.int(0, problems.length - 1)];
  return { question: pb.q, hint: pb.hint, pts: 20, type: "open", topic: "Word Problems", keys: ["working","answer","therefore","equals","result","calculate","so","total","final","steps"] };
}
