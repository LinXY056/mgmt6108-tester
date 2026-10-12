import { Article, ArticleComment } from '../types';

export const ARTICLES: Article[] = [
  {
    id: 'saudi-strikes',
    title: 'Saudi and Yemeni Airports Are Hit in New Round of Strikes',
    deck: 'At least one person was killed in the Saudi capital, Riyadh, kingdom authorities said. The Houthis said Saudi aircraft hit the Yemeni capital’s airport.',
    readTime: '3 MIN READ',
    readTimeMinutes: 3,
    publishedDate: 'Monday, October 12, 2026',
    location: 'Riyadh, Saudi Arabia',
    category: 'World',
    section: 'World',
    isLead: true,
    image: '/src/assets/images/nyt_saudi_strikes_1791785042973.jpg',
    imageAlt: 'Riyadh airport and skyline during the evening of the airstrikes',
    imageCaption: 'Saudi Arabia hosted an energy summit on the same day the Saudi and Yemeni capitals were rocked by new strikes',
    photoCredit: 'Agence France-Presse — Getty Images',
    byline: 'By Vivian Yee, Ben Hubbard and Hwaida Saad',
    authorRole: 'Reporting from Riyadh, Beirut and Sana',
    commentsCount: 142,
    audioDuration: '4:12',
    keyTakeaways: [
      'Strikes hit international transportation hubs in both Riyadh and Sana, ratcheting up regional tensions.',
      'One casualty confirmed in the Saudi capital as air defense batteries intercepted secondary projectiles.',
      'The escalations unfold simultaneously with a high-profile sovereign energy conference in Riyadh.'
    ],
    pullQuote: {
      text: 'The coordinated timing of these salvos against civilian aviation nodes underscores how brittle the fragile détente has become across the peninsula.',
      attribution: 'Dr. Tariq Al-Hamad, Senior Fellow at the Middle East Policy Institute'
    },
    paragraphs: [
      'At least one person was killed in the Saudi capital, Riyadh, kingdom authorities said on Sunday, after a barrage of cross-border projectiles targeted commercial infrastructure around the metropolitan aviation perimeter. In an apparent retaliation hours later, Saudi combat aircraft launched deep strikes hitting the primary runway and taxiways of Yemen’s capital airport in Sana.',
      'The exchange marks the most severe flare-up of hostilities across the Red Sea corridor in over eighteen months. Saudi civil aviation officials confirmed that while several automated interceptor batteries destroyed drones midair, falling debris caused structural fires and forced temporary ground stops for inbound international flights.',
      'In Sana, witnesses described windows rattling throughout residential neighborhoods as multiple detonations struck the airport perimeter shortly after midnight. Houthi officials claimed the installation sustained severe structural damage to administrative and cargo facilities, accusing the Saudi-led coalition of intentionally crippling humanitarian logistics.',
      'The strikes fell on the opening day of the Gulf International Energy Summit in Riyadh, where foreign dignitaries and oil executives were assembled just 15 miles south of the affected sector. Kingdom officials insisted the summit proceedings continued uninterrupted, even as security sweeps intensified across government districts.',
      'Diplomatic envoys from the United Nations called for an immediate cessation of hostile actions, cautioning that repeated strikes against civil aviation corridors risk unraveling months of quiet backchannel negotiations aimed at securing a durable truce.'
    ]
  },
  {
    id: 'saudi-ambitions',
    title: 'Saudi Arabia Has Few Options as Houthis Aim at Heart of Its Ambitions',
    deck: 'Repeated attacks demonstrate the vulnerabilities in defenses that Prince Mohammed bin Salman has prioritized as central to his economic vision.',
    readTime: '6 MIN READ',
    readTimeMinutes: 6,
    publishedDate: 'Monday, October 12, 2026',
    location: 'Riyadh',
    category: 'Analysis',
    section: 'World',
    image: '/src/assets/images/nyt_saudi_ambitions_1791785080748.jpg',
    imageAlt: 'Modern government towers and expansive highways in Riyadh at sunset',
    imageCaption: 'The kingdom’s sprawling Vision 2030 development projects rely heavily on maintaining an ironclad perception of regional stability.',
    photoCredit: 'Lynsey Addario for The New York Times',
    byline: 'By Ben Hubbard',
    authorRole: 'Bureau Chief, Middle East',
    commentsCount: 88,
    audioDuration: '7:45',
    keyTakeaways: [
      'Saudi Arabia’s multitrillion-dollar Vision 2030 relies heavily on attracting foreign capital and high-net-worth tourism.',
      'Air defense systems like Patriot batteries, while technologically advanced, face asymmetric economic disadvantages against cheap drone swarms.',
      'Diplomats observe that military retaliation risks setting off a spiral that undermines the kingdom’s branding as a safe global commercial hub.'
    ],
    pullQuote: {
      text: 'You cannot build the world’s luxury tourism capital and sovereign tech haven while sirens are sounding above your international terminals.',
      attribution: 'Karen Young, Senior Research Scholar at Columbia University'
    },
    paragraphs: [
      'When Crown Prince Mohammed bin Salman unveiled his Vision 2030 economic blueprint, the foundational premise was simple: pivot the kingdom away from petroleum dependence and transform it into a sparkling nexus of commerce, technology, and futuristic tourism.',
      'Yet each fresh round of drone and missile strikes directed from across the southern border exposes an acute strategic vulnerability. Even when the vast majority of incoming munitions are intercepted by expensive American-built Patriot missile batteries, the mere psychological disruption of closed runways and air raid alerts shakes investor sentiment.',
      'Military analysts calculate an unforgiving arithmetic of asymmetric warfare: interceptor missiles costing upwards of $3 million each are being fired to neutralize loitering munitions assembled for less than $20,000. Over prolonged engagements, the economic and logistical strain tilts heavily against the defender.',
      'For the leadership in Riyadh, traditional military escalation carries perilous downsides. Flattening infrastructure in Yemen has historically rallied Houthi domestic support without extinguishing their launch capabilities, while simultaneously inviting global diplomatic condemnation.',
      'As a result, Saudi officials find themselves walking a delicate tightrope: projecting sovereign strength to reassure domestic citizens while quietly pursuing quiet de-escalation channels to protect the grand economic transformation upon which their future rests.'
    ]
  },
  {
    id: 'israeli-election',
    title: 'Catch Up on the News: An Israeli Election Like No Other',
    deck: 'Voters are preparing to head to the polls for the fifth time in less than four years.',
    readTime: '4 MIN READ',
    readTimeMinutes: 4,
    publishedDate: 'Monday, October 12, 2026',
    location: 'Jerusalem',
    category: 'World',
    section: 'World',
    image: '/src/assets/images/nyt_election_polling_1791785070134.jpg',
    imageAlt: 'Voters standing before voting booths and wooden ballot boxes',
    imageCaption: 'Election officials verify voter registries across polling stations in Jerusalem ahead of another decisive ballot.',
    photoCredit: 'Rina Castelnuovo for The New York Times',
    byline: 'By Isabel Kershner and Patrick Kingsley',
    authorRole: 'Reporting from Jerusalem',
    commentsCount: 54,
    audioDuration: '5:20',
    keyTakeaways: [
      'A deeply polarized electorate prepares for unprecedented fifth national parliamentary vote in four years.',
      'Voter turnout among Arab citizens and younger demographics is projected to hold the balance of power.',
      'Coalition arithmetic remains exceptionally tight, with neither major bloc holding a definitive margin in tracking polls.'
    ],
    paragraphs: [
      'Across Israel, citizens are bracing for what has become an almost routine yet increasingly fraught civic ritual: heading to the ballot box for the fifth parliamentary election in under four years.',
      'The protracted political gridlock has tested the stamina of the voting public and the institutional resilience of the Knesset. Decisive majorities have repeatedly dissolved amid personal rivalries, ideological fracture points, and unresolved questions regarding the balance of judicial oversight and religious tradition.',
      'Campaign billboards lining highway overpasses and Tel Aviv intersections reflect an electorate fatigued by constant campaigning. Yet pollsters caution that apathy is far from universal; turnout models indicate razor-thin margins in key swing districts, where a shift of just several thousand votes could decide which bloc secures the coveted 61-seat governing threshold.',
      'With final television debates concluded, campaign operatives are shifting all resources into micro-targeted get-out-the-vote drives, cognizant that the outcome may rest not on changing minds, but on which side succeeds in pulling their core supporters to the ballot boxes on Tuesday.'
    ]
  },
  {
    id: 'great-read-tundra',
    title: 'He Went Out on an Epic Wilderness Adventure. Only His Dogs Came Back.',
    deck: 'A journey deep into the vast Canadian tundra turned into an endurance mystery that captivated seasoned trackers.',
    readTime: '11 MIN READ',
    readTimeMinutes: 11,
    publishedDate: 'Monday, October 12, 2026',
    location: 'Yellowknife, Northwest Territories',
    category: 'The Great Read',
    section: 'Magazine',
    isGreatRead: true,
    image: '/src/assets/images/nyt_canadian_tundra_1791785056851.jpg',
    imageAlt: 'Vast expanse of windswept Canadian tundra snow with distant sled tracks',
    imageCaption: 'The desolate barrens of the Northwest Territories, where subzero gales can erase sled trails in a matter of minutes.',
    photoCredit: 'Finbarr O’Reilly for The New York Times',
    byline: 'By Dan Barry',
    authorRole: 'Special Correspondent',
    commentsCount: 219,
    audioDuration: '14:30',
    keyTakeaways: [
      'Veteran musher Callum Vance embarked on a solo 800-mile unsupported trek across the Barren Grounds.',
      'Three weeks past his scheduled rendezvous, his lead dogs trotted into an isolated outpost alone and uninjured.',
      'Indigenous rangers and aerial search crews reconstructed a harrowing narrative written in ice and compass headings.'
    ],
    pullQuote: {
      text: 'The tundra doesn’t hide anything, and yet it keeps everything. When the whiteout closes around you, distance and direction become purely matters of faith.',
      attribution: 'Elder Thomas Kaviok, Inuvialuit search coordinator'
    },
    paragraphs: [
      'The winter sun over Great Slave Lake hangs low and cold, an amber coin that barely grazes the rim of the barrens before slipping back into the dark. It was into this monochrome vastness that Callum Vance drove sixteen Siberian huskies and a cedar-slat sled laden with pemmican, satellite beacons, and a notebook wrapped in oilcloth.',
      'Vance was no novice romantic chasing a Jack London ghost. At forty-two, he had crossed the Yukon River four times and spent two decades guiding geological survey crews through permafrost terrain where a single torn mitten can cost a hand. He spoke of the Barren Grounds with an engineer’s respect for thermodynamics.',
      'Yet on the twenty-fourth morning of the expedition, forty miles south of the tree line, hunters at the Lutselk’e outpost looked up from skinning caribou to see eight dogs trotting quietly down a packed snow ridge. Their harnesses were intact. Their tug lines had been cleanly severed with a sheath knife. And trailing behind the lead bitch was no sledge, no equipment, and no Callum Vance.',
      'What followed was the largest civilian search in northern Canadian history—a sweeping collaborative effort between the Royal Canadian Mounted Police, Indigenous snowmobile patrols, and bush pilots who flew beneath freezing cloud decks to scan vast plains of wind-carved sastrugi.',
      'As trackers followed the faint reverse path etched into the hardpack, they began uncovering subtle clues: a cached stove, a snow cave dug with methodical discipline, and a journal page pinned beneath a granite cairn that would rewrite everything his companions thought they understood about his final journey.'
    ]
  }
];

export const INITIAL_COMMENTS: Record<string, ArticleComment[]> = {
  'saudi-strikes': [
    {
      id: 'c1',
      author: 'David R.',
      location: 'London, UK',
      timeAgo: '2h ago',
      text: 'The economic repercussions of these airport strikes are going to be felt immediately in international aviation insurance premiums. Flying through the Red Sea corridor was already expensive; now it will be prohibitive.',
      upvotes: 42,
      isStaffPick: true
    },
    {
      id: 'c2',
      author: 'Noura M.',
      location: 'Dubai, UAE',
      timeAgo: '4h ago',
      text: 'I was on a transit flight into King Khalid International when the ground hold was announced. The coordination by airport ground crews was remarkably calm despite the sirens. Hope this escalation halts soon.',
      upvotes: 29
    },
    {
      id: 'c3',
      author: 'Marcus Vance',
      location: 'Washington, DC',
      timeAgo: '5h ago',
      text: 'This demonstrates the severe limit of purely defensive technological solutions. Defense systems are brilliant, but the cost mismatch between consumer-grade attack drones and interceptors is simply untenable over time.',
      upvotes: 88,
      isStaffPick: true
    }
  ],
  'saudi-ambitions': [
    {
      id: 'c4',
      author: 'Elena Gomez',
      location: 'Madrid, Spain',
      timeAgo: '1h ago',
      text: 'Brilliant analysis by Ben Hubbard. The tension between high-modernist mega-projects like NEOM and the raw regional geopolitics at the border is the defining story of this decade.',
      upvotes: 51
    },
    {
      id: 'c5',
      author: 'Kareem S.',
      location: 'Cairo, Egypt',
      timeAgo: '3h ago',
      text: 'The diplomatic channels mentioned in paragraph 5 are already active. Riyadh has too much riding on regional peace to get dragged back into full-scale air campaigns.',
      upvotes: 19
    }
  ],
  'israeli-election': [
    {
      id: 'c6',
      author: 'Arielle K.',
      location: 'Haifa, Israel',
      timeAgo: '45m ago',
      text: 'Living through five elections in four years has created an extraordinary level of civic fatigue. People just want stability and functional public services at this point.',
      upvotes: 34
    },
    {
      id: 'c7',
      author: 'Simon W.',
      location: 'New York, NY',
      timeAgo: '2h ago',
      text: 'The turnout dynamics in the periphery are going to be the decisive factor, exactly as the reporters noted. Watch the polling numbers in the southern districts.',
      upvotes: 16
    }
  ],
  'great-read-tundra': [
    {
      id: 'c8',
      author: 'Sarah Jenkins',
      location: 'Anchorage, Alaska',
      timeAgo: '3h ago',
      text: 'Dan Barry writing about the far north is pure poetry. Cutting the tug lines was clearly a deliberate, heartbreaking act of sacrifice to give the dogs a chance to find people.',
      upvotes: 147,
      isStaffPick: true
    },
    {
      id: 'c9',
      author: 'Michael T.',
      location: 'Calgary, Canada',
      timeAgo: '6h ago',
      text: 'One of the best pieces the Times has published this year. The reverence for the northern trackers and Indigenous elders gives this story such profound grounding.',
      upvotes: 93,
      isStaffPick: true
    }
  ]
};

export const SECTIONS_LIST = [
  { id: 'world', name: 'World', count: 18 },
  { id: 'us', name: 'U.S.', count: 24 },
  { id: 'politics', name: 'Politics', count: 15 },
  { id: 'business', name: 'Business', count: 12 },
  { id: 'tech', name: 'Tech', count: 9 },
  { id: 'science', name: 'Science', count: 7 },
  { id: 'health', name: 'Health', count: 6 },
  { id: 'opinion', name: 'Opinion', count: 14 },
  { id: 'arts', name: 'Arts & Culture', count: 11 },
  { id: 'magazine', name: 'Magazine', count: 8 },
  { id: 'great-read', name: 'The Great Read', count: 5 },
  { id: 'audio', name: 'Audio & Podcasts', count: 10 },
  { id: 'games', name: 'NYT Games', count: 6 },
  { id: 'cooking', name: 'Cooking', count: 16 }
];
