// Obligatory reference that I still use for testing
console.log("fragments");

console.log("%cNo wait, I can make it fancier but it'll ruin the haha funny 'console.log(\"fragments\")' joke- ah screw it", "color: rgb(150, 150, 150);", );
console.log("%c<false;IDENTITY>\n%cconsole.log(\"%c fragments %c\");", "background: rgba(19, 125, 255, 0.24); color: white; font-size: 20px", "background: rgba(0, 115, 255, 0.1)", "color: rgb(162, 204, 254)", "background: rgba(0, 115, 255, 0.1)");
console.log("ok fr go to Sources (next to Console) > buddies-demon-list-ranking > script.js and look at the top you'll see it");

console.log("see i told you i still use it to test console outputs to this day");


// For every update: 
// 1. Add level identifiers + spacing
// 2. Add video links + spacing
// 3. Add rankings + spacing
// 4. Add comments (if applicable)
// 5. Change startIndex and cellNum increment, colNum and aOffset (if applicable)

// Starts with the legend hidden
var toggle = false;

// Assigns links to the nav side panel
var levelIDs = ["main-list", 
    
                "super-sandcastle", 
                
                "vegetable-oil", "xronier", "supreme-demon-mix", "fusiondynamix", 

                "prisma", "lockout", "cryothorn-hell", "turbulent-valley", "polyatomic", 

                "vacancy", "plant-wave-infinity", "interstellar", "hypothermia", "motorbreath", "grizzlyware", "malevolent", "manic-machine", "warning", "neon-mixtape-tour", "zen-blast", "painful-playland", "quadratic-function", "rippling-memories","swagsonic", "revitalize","midnight-march", "the-solar-wind", "trobos", "eggplantlust", "dreamfully", "supreme", "mobl-iii", "mobl-ii", "liam-tripple-redux", "mobl", 

                "precipitance", "critical-error-ii", "discoloured-praise", "sheol-death", "eggplant-ideology", "ymthlyfymbikwhrlyf", "betrayal-of-fortuity", "corrode", "demon-collection", "quantum-map", "just-a-dream", "cyclotron", "dark-realm", "fractal-reality", 

                "extended-list", 

                "cerulean-shimmer", "the-truth", "power-hour", "sodium", "supremacy", "eggplantos", "fluorine", "neon", "nitrogen", "oxygen", "eggplant-corridor", "beryllium", "fermion", "carbon", "inevitable-violence", "eggplant-of-justice", "eggplant-wave", 

                "white-space", "hyper-magic-beam", "cosmic-rush", "boron", "impulse-rebirth", "project-omega", "afterplant", "eggplant-bypass", "unholy-alliance", "expurgation", "fresh-fruit-festival", "lithium", "helium", "hydrogen", "t-pose-machine", "wicked-lag-spike", "icdx-rebirth", "duocore", "argon-charge", "voirie", "antivirus", "eledophia", "the-selket", "crumpled-sounds", "subplant", "eggplant-ascent", "eggplant-vortex", "eggplant-dive", "eggplant-planet", 

                "whatt", "culminating", "phobros", "duelo-circulos", 

                "legacy-list", 

                "eggplant-clutter", "twister-circles", "albus", "imperial-force", "azure-spectrum", "foie", "reverie", "replete", 

                "augi-level", "curse-of-the-nile-!", "a-divine-christmas", "divine-mishaps", "eggplant-overnight", "nep-world-rebirth", "eggplanto", "the-mine", "eggplant-in-the-90s", "sakupen-eggplant"

                /* Upcoming potentially:
                "nemesis", "xeroa", "sabishii", "the-eggplantgarasu"
                */
               ];
// Assigns links to the level names
var vids = ["https://www.youtube.com/watch?v=QeRrs1wYO9M", // 1
    
            "https://www.youtube.com/watch?v=H4vN8jXQnKA", // 2
            "https://www.youtube.com/watch?v=FrjF-MQXIM4", // 3
            "https://www.youtube.com/watch?v=1Wl771VCwQY", // 4
            "https://www.youtube.com/watch?v=fv277gx5_Y4", // 5

            "https://www.youtube.com/watch?v=feMj66huRR8", // 6
            "https://www.youtube.com/watch?v=01Oz8VJlGus", // 7
            "https://www.youtube.com/watch?v=npTiGcfk0nk", // 8
            "https://www.youtube.com/watch?v=g7NEb2d8kXU", // 9
            "https://www.youtube.com/watch?v=VaKf1pBHU5Y", // 10

            "https://www.youtube.com/watch?v=ywq2T5D6Kd8", // 11
            "https://www.youtube.com/watch?v=OWKMtLOY9Gw", // 12
            "https://www.youtube.com/watch?v=ceJDr58oleg", // 13
            "https://www.youtube.com/watch?v=mQgvFKLMP2E", // 14
            "https://www.youtube.com/watch?v=R41Yj8XpMhM", // 15
            "https://www.youtube.com/watch?v=OOcqU84IQU0", // 16
            "https://www.youtube.com/watch?v=PVBU-GWyt6o", // 17
            "https://www.youtube.com/watch?v=EfQWT1HP-mI", // 18
            "https://www.youtube.com/watch?v=veQc-9I-6FE", // 19
            "https://www.youtube.com/watch?v=QMlRiUHwZ9c", // 20
            "https://www.youtube.com/watch?v=jqXJlrsqaT0", // 21
            "https://www.youtube.com/watch?v=OngPoKhMIsE", // 22
            "https://www.youtube.com/watch?v=9ZwZZJuAsss", // 23
            "https://www.youtube.com/watch?v=gmoliFvfDaU", // 24
            "https://www.youtube.com/watch?v=W80-0SYeRMw", // 25
            "https://www.youtube.com/watch?v=jasZsj1UUVs", // 26
            "https://www.youtube.com/watch?v=IK7UbWw5zxo", // 27
            "https://www.youtube.com/watch?v=Ay7hA-EyZls", // 28
            "https://www.youtube.com/watch?v=VKDJ-xQHul4", // 29
            "https://www.youtube.com/watch?v=1JViOxK4p18", // 30
            "https://www.youtube.com/watch?v=r7iY5eVMM7g", // 31
            "https://www.youtube.com/watch?v=_ZreZgonPGI", // 32
            "https://www.youtube.com/watch?v=Artnj6sHF9A", // 33
            "https://www.youtube.com/watch?v=aWbns6LJ5YM", // 34
            "https://www.youtube.com/watch?v=9-U_CH2QbZY", // 35
            "https://www.youtube.com/watch?v=ozZcLNaPtwM", // 36
            "https://www.youtube.com/watch?v=_W9xA5lqmLs", // 37

            "https://www.youtube.com/watch?v=RCIkDUedRQE", // 38
            "https://www.youtube.com/watch?v=H2HdTFN3aQA", // 39
            "https://www.youtube.com/watch?v=8RUwPUEB5bc", // 40
            "https://www.youtube.com/watch?v=OUL2oAw25KY", // 41
            "https://www.youtube.com/watch?v=KGruih9zgvg", // 42
            "https://www.youtube.com/watch?v=_Gc8abHFuf0", // 43
            "https://www.youtube.com/watch?v=e2cQ1cqDNTY", // 44
            "https://www.youtube.com/watch?v=vyCJ0vY7QtI", // 45
            "https://www.youtube.com/watch?v=j7P6UBMQr7I", // 46
            "https://www.youtube.com/watch?v=H67Cl3jq8IQ", // 47
            "https://www.youtube.com/watch?v=Kc9wpqIRG34", // 48
            "https://www.youtube.com/watch?v=AX8WYAh-ft8", // 49
            "https://www.youtube.com/watch?v=HINe1laY7Pg", // 50

            "https://www.youtube.com/watch?v=8JWzBFQzozo", // 51
            "https://www.youtube.com/watch?v=vodjyKbZyiU", // 52
            "https://www.youtube.com/watch?v=DoaZ-CiZTZ4", // 53
            "https://www.youtube.com/watch?v=k5FG9QPUFSU", // 54
            "https://www.youtube.com/watch?v=xXLU5n2Vh2c", // 55
            "https://www.youtube.com/watch?v=f09YkON0unc", // 56
            "https://www.youtube.com/watch?v=4Yrin4BQ4e0", // 57
            "https://www.youtube.com/watch?v=swoegcCksRg", // 58
            "https://www.youtube.com/watch?v=knFBQ1DkGdM", // 59
            "https://www.youtube.com/watch?v=6igs17y1WPw", // 60
            "https://www.youtube.com/watch?v=t_zETm4aOfY", // 61
            "https://www.youtube.com/watch?v=mMXFQJUg40I", // 62
            "https://www.youtube.com/watch?v=diLZahgneiM", // 63
            "https://www.youtube.com/watch?v=cRM7G0F2pMg", // 64
            "https://www.youtube.com/watch?v=qjFtpxW797E", // 65
            "https://www.youtube.com/watch?v=TtmYF-QsW4g", // 66
            "https://www.youtube.com/watch?v=x8vMki9ynDA", // 67
            "https://www.youtube.com/watch?v=Ou1KqtKPu_Y", // 68

            "https://www.youtube.com/watch?v=mhRdDE6TCn0", // 69
            "https://www.youtube.com/watch?v=WGP3KaKGHl4", // 70
            "https://www.youtube.com/watch?v=eZY7YEdqZjg", // 71
            "https://www.youtube.com/watch?v=pC3uiXCGm7U", // 72
            "https://www.youtube.com/watch?v=_ujMmrpMSz0", // 73
            "https://www.youtube.com/watch?v=MqR4LsnPFPY", // 74
            "https://www.youtube.com/watch?v=hdYQZ3BRo1A", // 75
            "https://www.youtube.com/watch?v=gbuWt9Ts47I", // 76
            "https://www.youtube.com/watch?v=-nxQuWDmsJs", // 77
            "https://www.youtube.com/watch?v=zmkVR2_oVXI", // 78
            "https://www.youtube.com/watch?v=uTIKvfJ8tXk", // 79
            "https://www.youtube.com/watch?v=hyRu_N2m198", // 80
            "https://www.youtube.com/watch?v=GsOr3zV-3gI", // 81
            "https://www.youtube.com/watch?v=rjFZvvaQy28", // 82
            "https://www.youtube.com/watch?v=niUp46oC-OI", // 83
            "https://www.youtube.com/watch?v=O5QBWOfuZww", // 84
            "https://www.youtube.com/watch?v=At03mLOpNLA", // 85
            "https://www.youtube.com/watch?v=Zi08Kv6Lvt0", // 86
            "https://www.youtube.com/watch?v=PoIFHU4ocWw", // 87
            "https://www.youtube.com/watch?v=2CpBNpcp-Dw", // 88
            "https://www.youtube.com/watch?v=kHfAvSf57k8", // 89
            "https://www.youtube.com/watch?v=FOP8S0n6fuI", // 90
            "https://www.youtube.com/watch?v=qqVpWHf1EQ8", // 91
            "https://www.youtube.com/watch?v=dsSckkDm24U", // 92
            "https://www.youtube.com/watch?v=fvbe14wj-lI", // 93
            "https://www.youtube.com/watch?v=EcJqMZ-RUcY", // 94
            "https://www.youtube.com/watch?v=LeGK3Ki2Xes", // 95
            "https://www.youtube.com/watch?v=sjwt1StvPaY", // 96
            "https://www.youtube.com/watch?v=ShcFRvTl8co", // 97

            "https://www.youtube.com/watch?v=0oaeBEKD7yE", // 98
            "https://www.youtube.com/watch?v=n43S1DUWJRM", // 99
            "https://www.youtube.com/watch?v=dqpo_JmXxf0", // 100

            "https://www.youtube.com/watch?v=sVkKxezCzv0", // a
            "https://www.youtube.com/watch?v=NrOJ-U-1u7A", // b
            "https://www.youtube.com/watch?v=yliW-Y3Mdys", // c
            "https://www.youtube.com/watch?v=x4Z82KG6l20", // d
            "https://www.youtube.com/watch?v=zh-vhj2e444", // e
            "https://www.youtube.com/watch?v=vg5X0O13lzE", // f
            "https://www.youtube.com/watch?v=YUip-rgaFMk", // g
            "https://www.youtube.com/watch?v=gMiIsMosG4k", // h
            "https://www.youtube.com/watch?v=Gy0GUQ3X-nE", // i

            "https://www.youtube.com/watch?v=B0YQ5fzGZl8", // j
            "https://www.youtube.com/watch?v=UK4zWNynJ_M", // k
            "https://www.youtube.com/watch?v=VH4ZYgB-8Rw", // l
            "https://www.youtube.com/watch?v=-bZR1dUldMs", // m
            "https://www.youtube.com/watch?v=cS3iNrG6sL0", // n
            "https://www.youtube.com/watch?v=U4wX5OoV-18", // o
            "https://www.youtube.com/watch?v=QZUxdBM6bZc", // p
            "https://www.youtube.com/watch?v=AfuPr-bNypE", // q
            "https://www.youtube.com/watch?v=YhUaluTjGCg", // r

            /* Upcoming potentially:
            "https://www.youtube.com/watch?v=0KfesEBFAak", // Nemesis
            "https://www.youtube.com/watch?v=zmz7XFxL7Qs" // Xeroa
            "https://www.youtube.com/watch?v=jgQ_d2P7kME" // Sabishii
            "https://www.youtube.com/watch?v=qcZydPfs5EI" // The Eggplantgarasu
            */
           ]
// Assigns scores to the cells + holds level names
var rankings = ['void', '', '', '', '', '', '', '', '', 'Super Sandcastle', 
    
                'void', '', 3, '', 2, 5.5, 6, 7, 2, 'Vegetable Oil', 

                'void', 10, 9, '', 10, 9.5, 9.5, 9, 10, 'Xronier', 
                8.5, '', 8, '', 7, 'void', 8, 7.5, 7, 'Supreme Demon Mix', 
                6.5, '', 7, '', 6, 'void', 5.5, 5, 5, 'FusionDynamix', 

                7.5, '', 7, '', 5, 7, 7.5, 5, 8, 'Prisma', 
                2, '', 4, '', 8, 3.5, 4, 5, 3, 'LockOut', 
                5, '', 7, '', 5, 'void', 2.5, 5.5, 4, 'Cryothorn Hell', 
                8, '', 10, '', 5, 'void', 9, 8.5, 7, 'Turbulent Valley', 
                'void', '', 6.5, '', 3, 5, 6.5, 6, 6, 'Polyatomic', 

                'void', '', 7, '', 2, 2, 7.5, 8, 5, 'Vacancy', 
                8, '', 'void', '', 7, 1, 1.5, 4, 6, 'Plant Wave Infinity', 
                6, '', 4, '', 3, 5, 9, 6, 8, 'Interstellar', 
                'void', '', 6, '', 7, 7, 3, 7, 4, 'HYPOTHERMIA', 
                7.5, '', 8, '', '', 'void', 6.5, 6, 7, 'Motorbreath', 
                9.5, '', 9, '', '', 'void', 8, 8, 8, 'GrizzlyWare', 
                0, '', 1, '', 2, 1, 9, 6, 2, 'Malevolent', 
                9, '', 9, '', 9, 'void', 6, 7, 9, 'Manic Machine', 
                7, '', 7, '', '', 'void', 8, 6.5, 7, 'Warning', 
                8, '', 10, '', '', 'void', 9, 7.5, 10, 'Neon Mixtape Tour', 
                7, '', 8.5, '', '', 'void', 5.5, 8, 10, 'Zen Blast', 
                7, '', 6.8, '', '', 'void', 5, 5.5, 6, 'PAINFUL PLAYLAND', 
                6.5, '', 5, '', '', 'void', 5.5, 6, 5, 'Quadratic Function', 
                7, '', 7, '', 'void', 5, 6.5, 7, 6, 'Rippling Memories', 
                5, '', 4, '', '', 1, 7, 5, 4, 'SwagSonic', 
                'void', '', 8, '', 9, 8, 8.5, 7.5, 9, 'REVITALIZE', 
                'void', '', 9, '', 10, 9, 7.5, 6, 10, 'Midnight March', 
                6, '', 5, '', 'void', 3, 8.5, 5, 5, 'The Solar Wind', 
                3, '', 3, '', '', 2, 4, 5.5, 5, 'Trobos', 
                3, '', 3, '', '', 3, 3, 5, 5, 'Eggplantlust', 
                4.5, '', 5, '', 'void', 3, 7.5, 4.5, 4, 'Dreamfully', 
                5, '', 6, '', '', 1.5, 5.5, 5, 6, 'SupremE', 
                2, '', 4, '', '', 0.5, 7.5, 7, 4, 'MOBL III', 
                1, '', 4, '', '', 0.5, 4, 4, 3, 'MOBL II', 
                4, '', 3, '', '', 2, 4, 1.5, 3, 'Liam Tripple Redux', 
                1, '', 4, '', '', 0.5, 2, 3, 3, 'MOBL', 
                3, '', 6, '', 8, 9, 'void', 5, 9, 'Precipitance', 

                0, '', 3, '', 2, 4, 6.5, 5.5, 3, 'Critical Error II', 
                6.5, '', 3, '', '', 5.5, 'void', 4, 4, 'Discoloured Praise', 
                10, '', 9, '', '', 'void', 8.5, 9, 8, 'Sheol Death', 
                7.5, '', 7, '', '', '', 5, 7, 9, 'Eggplant Ideology', 
                8, '', 7, '', '', '', 4.5, 8, 5, 'YMLTHYFYMBIKWHRLYF', 
                6.5, '', 6, '', 'void', '', 9, 4, 2, 'Betrayal of Fortuity', 
                3, '', 2, '', '', '', 7, 5, 3, 'Corrode', 
                6, '', 7, '', '', 'void', 7.5, 6, 5, 'Demon Collection', 
                'void', '', 6.5, '', '', '', 4, 6, 4, 'Quantum Map', 
                9, '', 'void', '', '', '', 5, 8, 5, 'Just a Dream', 
                0, '', 0, '', '', '', 1.5, 5, 3, 'Cyclotron', 
                10, '', 8, '', '', '', 'void', 8.5, 8, 'Dark Realm', 
                6, '', 6.5, '', 'void', '', 7, 5, 7, 'Fractal Reality',

                'void', '', 7, '', '', '', 5, 5, 6, 'Cerulean Shimmer', 
                10, '', 'void', '', '', '', 3.5, '', 10, 'The Truth',  
                8.5, '', 7.2,  '', '', 'void', 4.5, '', 5, 'Power Hour', 
                8, '', 'void', '', '', '', 6.5, '', 6, 'Sodium', 
                2, '', 2, '', '', '', 8.5, '', 4, 'SupremacY', 
                7.5, '', 7.7, '', '', 'void', 3.5, '', 7, 'Eggplantos', 
                6.5, '', 'void', '', '', '', 7, '', 5, 'Fluorine', 
                6, '', 'void', '', '', '', 6, '', 4, 'Neon', 
                5.5, '', 'void', '', '', '', 5, '', 5, 'Nitrogen', 
                5.5, '', 'void', '', '', '', 7.5, '', 6, 'Oxygen', 
                5, '', 6.5, '', '', '', 3.5, '', 3, 'Eggplant Corridor', 
                5, '', 'void', '', 8, '', 6.5, '', 3, 'Beryllium', 
                'void', '', 5, '', '', '', 5, '', 4, 'Fermion', 
                5, '', 'void', '', 7, '', 5.5, '', 2, 'Carbon', 
                4, '', 4, '', 'void', '', 4, '', 3, 'Inevitable Violence', 
                3.5, '', 5, '', '', '', 3.5, '', 3, 'Eggplant of Justice', 
                6.5, '', 6, '', '', '', 2.5, '', 4, 'Eggplant Wave', 
                'void', '', 6, '', '', '', 7.5, '', 2, 'WHITE SPACE', 

                8.5, '', 7, '', '', 'void', 7, '', 6, 'HYPER MAGIC BEAM', 
                4, '', 5, '', 'void', '', 4, '', 4, 'Cosmic Rush', 
                5, '', 'void', '', 7, '', 8, '', 3, 'Boron', 
                3.5, '', 4, '', '', '', 'void', '', 3, 'Impulse Rebirth', 
                5, '', 4, '', '', '', 8.5, '', 5, 'Project Omega', 
                5, '', 6, '', '', '', 7, '', 3, 'Afterplant', 
                0, '', 1, '', '', '', 2.5, '', 1, "Eggplant Bypass", 
                2, '', 2, '', 'void', '', 3.5, 4.5, 2, 'Unholy Alliance', 
                1, '', 3, '', 6, '', 8, '', 1, 'expurgation', 
                9, '', 8, '', '', '', 6, '', 9, 'Fresh Fruit Festival', 
                5, '', 'void', '', 5, '', 7, '', 4, 'Lithium', 
                5, '', 'void', '', 3, '', 8, '', 3, 'Helium', 
                5, '', 'void', '', 7, '', 5.5, '', 5, 'Hydrogen', 
                0, '', 1, '', '', '', 4, '', 2, 'T Pose Machine', 
                6, '', 7, '', '', 'void', 5, '', 4, 'Wicked Lag Spike', 
                3, '', 5, '', 'void', '', 3.5, '', 3, 'ICDX Rebirth', 
                6, '', 3, '', '', '', 3, '', 2, 'DuoCore', 
                6.5, '', 5.8, '', '', '', 8, '', 3, 'Argon Charge', 
                'void', '', 6.8, '', '', '', 5, '', 5, 'Voirie', 
                'void', '', 6, '', '', '', 8, '', 6, 'Antivirus', 
                7, '', 7.5, '', '', '', 'void', '', 3, 'Eledophia', 
                5, '', 2, '', '', '', 9.5, '', 4, 'The Selket', 
                4, '', 6, '', 'void', '', 6, '', 5, 'Crumpled Sounds', 
                7, '', 3, '', '', '', 4, '', 2, 'Subplant', 
                5, '', 4, '', '', '', 1, '', 9, 'Eggplant Ascent', 
                'void', '', 6, '', '', '', 8, '', 7, 'Eggplant Vortex', 
                1, '', 5, '', '', 'void', 3, '', 6, 'Eggplant Dive', 
                8, '', 7, '', '', 'void', 6.5, '', 8, 'Eggplant Planet', 
                6.5, '', 6.8, '', '', 'void', 8.5, '', 4, 'WhaTt', 

                1, '', 1.5, '', '', '', 8, '', 3, 'CulminatinG', 
                10, 10, 10, '', '', 'void', 3, '', 8, 'Phobros', 
                5, '', 6, '', '', '', 7.5, '', 6, 'Duelo Circulos', 

                4.5, '', 4.5, '', '', '', 5.5, '', 3, 'Eggplant Clutter', 
                5, '', 5, '', '', '', 2, '', 3, 'Twister Circles', 
                'void', '', 6, '', '', '', 8.5, '', 5, 'Albus', 
                6.5, '', 6.5, '', '', '', 8, '', 9, 'Imperial Force', 
                6, '', 7, '', '', '', 'void', '', 7, 'Azure Spectrum', 
                'void', '', 5, '', '', '', 2.5, '', 4, 'Foie', 
                'void', '', 5, '', '', '',  5, '', 5, 'Reverie', 
                7, '', 5, '', '', '', 6, '', 4, 'Replete', 
                7, '', 7, '', '', '', 9, '', 6, 'augi level', 

                10, 10, 9, '', '', '', 5, '', 7, 'Curse of the Nile !', 
                8, '', 8, '', '', 'void', 6, '', 5, 'A Divine Christmas', 
                'void', '', 6, '', '', '', 7, '', 4, 'Divine Mishaps', 
                3, '', 4, '', '', '', 4, '', 3, 'Eggplant Overnight', 
                2, '', 'void', '', '', '', 3, '', 2, 'Nep World Rebirth', 
                3, '', 4, '', '', '', 3, '', 3, 'Eggplanto', 
                5, '', 7, '', '', '', 5, 'void', 6, 'The Mine', 
                4, '', 4, '', '', '', 7, '', 3, 'Eggplant in the 90s', 
                3, '', 5, '', '', '', 4, '', 4, 'Sakupen Eggplant'

                /* Upcoming potentially:
                '', '', '', '', '', '', '', '', '', 'Nemesis', 
                '', '', '', '', '', '', '', '', '', 'Xeroa', 
                '', '', '', '', '', '', '', '', '', 'Sabishii', 
                '', '', '', '', '', '', '', '', '', 'The Eggplantgarasu', 
                */
               ];
// Assigns comment text to the tooltip               
var comments = [
                "<b>Bold</b> = played <br><br> 10 - Masterpiece <br><br> 0 - SO bad that I could not bring myself to ever touch it again (I have never given this to any level in my life)", 
                "scores are not ranked on gameplay, i can only beat maybe 5 of these levels and a subway sandwich", "Completed <br><br> Best level on the whole list imo", 
                "it's sooooo bad but it's sooooo iconic because of how bad it is and it almost wraps around to being something i like because it's shit but it's also just super not well made, my head hurts", 
                "Completed <br><br> Twister's best level imo", 
                "Completed", 
                "it gets a .5 for its funny gags but otherwise it's just a poorly developed swi that's incredibly unbalanced and doesn't feel fair to play", 
                "a modern day eggplant level becoming 2.2 brainrot makes sense but that doesn't mean i have to like it :(", 
                "very nostalgic for me", 
                "i still think the zytra/zivy part in the middle is super out of place but otherwise this was probably the best thing to come out of team amity", 
                "For some reason on the original spreadsheet, if Jino has the lowest ranking on any level it doesn't count it in the 'LOWEST' ranks column?? There are multiple instances of him giving 0s but they don't show up there which is weird <br> - <i>AvieQuaverie</i> <br><br> 5 years of torture and dying at the last click. Thinking space balancing on crack but overall a much easier level. I wanna verify the update so bad but i can't yet", 
                "i want to give this a higher score but a lot of the shaders and camera effects are just nauseating",
                "please don't kill me for this", 
                "i like my duals the way i like my coffee: consumed in the void", 
                "compared to the other mobl levels this one had a lot more parts that were unserious in a charming way rather than just being incomprehensible bad on purpose recent tab tier deco", 
                "HATE. HATE. HATE. HATE. HATE. HATE. HATE. HATE. HATE. HATE. HATE. HATE. HATE. HATE. HATE. HATE. HATE. HATE. HATE. HATE. HATE. HATE. HATE. HATE. HATE. HATE. HATE. HATE. HATE. HATE. HATE. HATE. HATE. HATE.", 
                "Completed", 
                "how you gonna make a nine circles level and the wave part is the most underwhelming", 
                "Anything related to Fusion or Fusion II is immediate peak for me so i loved this, it was super fun too", 
                "minus points for copyright infringement (yes i am taking shots at myself)", 
                "COME COME FUCK APART IN HERE I", 
                "refer to my in-game comment*, would have been a 9 otherwise <br><br> [*(82%) I refuse to play the ending, but the rest of it is amazing.]", 
                "my worst project ever.", 
                "This level reminds me of the old days of insane 2.0 effect levels with Xtrullor songs and i love it so much", 
                "A level that's obviously not highest quality, but this level is so special to me being the first recorded victor and update verifier, I've done the entire wave over 50+ times", 
                "Completed", 
                "Completed", 
                "The only 0 on here I have not played, and for good reason", 
                "really the biggest crime about this level is that the very obvious dedication series demake type level doesn't have a name reminiscent of the other levels in said series <br><br> also i will kill the next person who mentions the song used in this", 
                "WHO THE FUCK???", 
                "The worst balancing known to MAN i hate it so much", 
                "I despise AA with all of my might, my will, and my being. This level does not help with that.", 
                "The best phobos remake", 
                "My other phobos related ratings should help paint the picture", 
                "Hilariously enough SatanicGD's best and funniest level. Life is roblox...", 
                "Completed"
               ];
// Notes:
// Increase by 1 every time a level is added to the panel to account for the nav panel's <td>s
var startIndex = 121;
var rowNum = 118;
// Should always be the # of data cells, [ctrl+f] '<td' to find
var cellNum = 1301;
// Increase if another player's scores are to be added
var colNum = 9;
// Everyone who has contributed comments, add if needed
var playerNames = ["Extrav", "leapin", "JinoBeats"];

// Increase by 1 if a new <a> tag is added *before* the nav panel
// Needs to be +3 to account for: the 2 miscellaneous links and [Back to Top!] button
var aOffset = 3;



navLinks();
vidLinks();
rankingInserts();
rateCol();

averageCalcCompile();
highestLowestTracker();

addonMouseLeave();

document.getElementById("legend").style.display = "none";



// Toggles legend on/off via button
function toggleLegend() {
    
    if (toggle) {
        document.getElementById("legend-text").innerHTML = "Hidden";
        document.getElementById("legend").style.display = "none";

        toggle = false;
    } else {
        document.getElementById("legend-text").innerHTML = "Shown";
        document.getElementById("legend").style.display = "block";
        toggle = true;
    }
}

// Toggles legend off if outside is clicked
function toggleOff() {
    if (toggle) {
        document.getElementById("legend-text").innerHTML = "Hidden";
        document.getElementById("legend").style.display = "none";

        toggle = false;
    }
}

// Handles the links that navigate to certain level rows
function navLinks() {

    for (var i = 0; i < levelIDs.length; i++) {
        document.getElementsByTagName("a")[i + aOffset].href = "#" + levelIDs[i];
        // console.log(levelIDs[i]);
    }
}

// Handles the links that redirect to level showcases
function vidLinks() {

    for (var i = 0; i < vids.length; i++) {
        document.getElementsByTagName("a")[i + levelIDs.length + aOffset].href = vids[i];
                
        // Skips to the right place in the rankings array
        document.getElementsByTagName("a")[i + levelIDs.length + aOffset].innerHTML = String(rankings[colNum + (colNum + 1)*i]);
        // console.log("done");
    }
}

// Inserts the ranking scores into each cell (either numbers, blank or void)
function rankingInserts() {

    var start = startIndex;
    var offset = 0; 

    for (var j = 0; j < rankings.length; j++) {
        if (typeof rankings[j] === 'string' && rankings[j] != '') {
            document.getElementsByTagName("td")[start + j].innerHTML = '';
            document.getElementsByTagName("td")[start + j].classList.add("s0");
        } else {
            document.getElementsByTagName("td")[start + j].innerHTML = rankings[j];
        }
    }
}

// Determines the colour of the cell based on its rating/rank (0, 10, etc.)
function rateCol() {

    for (var i = 0; i < cellNum; i++) {
        var value = document.getElementsByTagName("td")[i].innerHTML;

        if (value == "10" || (document.getElementsByTagName("td")[i].classList.contains("p-extrav-score") && value == "9.5")) {
            document.getElementsByTagName("td")[i].classList.add("rate-10");
        } else if (value == "0" || (document.getElementsByTagName("td")[i].classList.contains("p-extrav-score") && value == "1.5")) {
            document.getElementsByTagName("td")[i].classList.add("rate-0");
        } else if (document.getElementsByTagName("td")[i].classList.contains("p-extrav-score") && value == "9") {
            document.getElementsByTagName("td")[i].classList.add("rate-9-point-5");
        } else if (value == "0" || (document.getElementsByTagName("td")[i].classList.contains("p-extrav-score") && value == "1")) {
            document.getElementsByTagName("td")[i].classList.add("rate-1");
        } else if (document.getElementsByTagName("td")[i].classList.contains("comment")) {
            document.getElementsByTagName("td")[i].classList.add("comment-unrated");
        }
    }
}

// Calculates all the averages based on the row's scores (blanks/void excluded)
function averageCalc(start, end) {
    
    var avgPt1 = 0;
    var avgPt2Counter = 0;
    var avgPt2 = 0;

    for (var i = start; i < end; i++) {
        var value = document.getElementsByTagName("td")[i].innerHTML;

        if (value != "") {
            avgPt1 += Number(value);

            avgPt2Counter++;
        }
        
        // console.log(value);
    }

    // console.log(avgPt1);
    // console.log(avgPt2Counter);

    avgPt2 = avgPt1/avgPt2Counter;

    if (isNaN(avgPt2)) {
        document.getElementsByTagName("td")[i].innerHTML = "N/A";
    } else {
        document.getElementsByTagName("td")[i].innerHTML = avgPt2.toFixed(3);
    }
}

// Compiles all the averages and puts them in the avg column
function averageCalcCompile() {

    var start = startIndex;

    for (var i = 0; i < rowNum ; i++) {
        averageCalc(start, start + colNum);

        start += 10;
    }
}

// Tracks whether a given score/rank is the highest or lowest in its row
function highestLowestTracker() {

    var start = startIndex;

    for (var h = 0; h < rowNum; h++) {
        var rowValues = [];
        var highest = -1;
        var lowest = 11;
        
        for (var i = 0; i < colNum; i++) {
        
            var value = document.getElementsByTagName("td")[start + i].innerHTML;

            if (value != "") {
                rowValues.push(value);
            }
        }

        // console.log(rowValues + ", length: " + rowValues.length);
        
        for (var j = 0; j < rowValues.length; j++) {

            if (Number(rowValues[j]) > highest) {
                highest = rowValues[j];

                // console.log("current highest:" + highest);
            }
            if (Number(rowValues[j]) < lowest) {
                lowest = rowValues[j];

                // console.log("current lowest:" + lowest);
            }

        }

        for (var k = 0; k < colNum; k++) {
            var value = document.getElementsByTagName("td")[start + k].innerHTML;

            if (value == highest) {
                document.getElementsByTagName("td")[start + k].classList.add("highest");
                document.getElementsByTagName("td")[start + k].innerHTML = value;

                // console.log("highest");
            } else if (value == lowest && value != '') {
                document.getElementsByTagName("td")[start + k].classList.add("lowest");
                document.getElementsByTagName("td")[start + k].innerHTML = value;

                // console.log("lowest");
            } else {
                // console.log("middle");
            }
        }

        // console.log("highest: "+ highest + ", lowest: " + lowest);

        start += 10;
    }
}

// Displays the corresponding comment if cell is hovered over
function showComment(commentID, playerID) {

    var x = event.pageX;
    var y = event.pageY;

    // console.log(x + ", " + comments[commentID]);

    document.getElementById("tooltip").style.display = "block";
    document.getElementById("tooltip").style.left = String(x + 5) + "px";
    document.getElementById("tooltip").style.top = String(y + 15) + "px";

    document.getElementById("tooltip").innerHTML = comments[commentID] + "<br><i>- " + playerNames[playerID] + "</i>";

}

// Makes the comment tooltip disappear when moused away on commented cells
function addonMouseLeave() {
    
    for (var i = 0; i < comments.length; i++) {
        // Needs to be +1 to account for the example comment in the legend
        document.getElementsByClassName("comment")[i+1].addEventListener("mouseleave", function () {
            document.getElementById("tooltip").style.display = "none";
            document.getElementById("tooltip").innerHTML = "";
        });
    }
}
