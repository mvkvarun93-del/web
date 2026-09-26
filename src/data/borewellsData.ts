export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  diameter: string;
  tag: string;
  idealFor: string;
  technology: string;
  features: string[];
  depthCapability: string;
  highlights: string[];
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'agricultural' | 'maintenance';
  location: string;
  depth: number;
  diameter: string;
  waterYield: string;
  duration: string;
  rigType: string;
  casingInstalled: string;
  completionDate: string;
  clientType: string;
  description: string;
  testimonial?: {
    quote: string;
    author: string;
    designation: string;
  };
  imageTag: string;
}

export interface SocialFeedItem {
  id: string;
  platform: 'instagram' | 'facebook' | 'youtube' | 'whatsapp';
  accountName: string;
  accountUrl: string;
  externalReelUrl: string;
  date: string;
  title: string;
  caption: string;
  likes: number;
  comments: number;
  shares: number;
  tag: string;
  hasVideo: boolean;
  videoDuration: string;
  videoType: 'water-strike' | 'rig-action' | 'bni-spotlight' | 'urban-drilling' | 'flushing-action';
  videoSrc: string;
  location: string;
  waterYield?: string;
}

export interface PricingRateRow {
  diameter: string;
  depthRange: string;
  minDepth: number;
  maxDepth: number;
  ratePerFoot: number;
  casingRecommended: string;
  bestSuitedFor: string;
  recommendedPump: string;
}

export const COMPANY_INFO = {
  name: 'Sri Venkateshwara Borewells & Motors',
  shortName: 'ENR Borewells',
  domain: 'enrborewells.net',
  websiteUrl: 'https://enrborewells.net',
  cloudUrl: 'https://ais-pre-2strxlwfn5ly5sn43gdb6u-385705889944.asia-southeast1.run.app',
  proprietor: 'Emme Naresh',
  credentials: [
    'Proprietor & Groundwater Specialist',
    'Active BNI Member (Ethics & Verified Quality)',
    '15+ Years Field Experience across Telangana',
    'Advanced High-Capacity Hydraulic Sensor Rigs',
  ],
  phone: '+91 9542326767',
  phoneDisplay: '+91 95423 26767',
  phoneRaw: '919542326767',
  email: 'emmenaresh@gmail.com',
  address: 'Saraswathinagar Colony, L.B. Nagar, Hyderabad, Telangana - 500074',
  landmark: 'Near Saraswathinagar Park, Inner Ring Road Corridor',
  serviceAreas: [
    'L.B. Nagar',
    'Uppal',
    'Hayathnagar',
    'Nagole',
    'Vanasthalipuram',
    'Gachibowli',
    'Kompally',
    'Shamshabad',
    'Ghatkesar',
    'Dilsukhnagar',
    'Kothapet',
    'Saroornagar',
    'Entire Greater Hyderabad & Rangareddy District',
  ],
  stats: [
    { label: 'Successful Borewells Drilled', value: '2,850+' },
    { label: 'Years of Proven Trust', value: '15+' },
    { label: 'Hydraulic Rig Fleet', value: '6 Heavy Rigs' },
    { label: 'Water Strike Success Rate', value: '98.4%' },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: '6-5-dia-drilling',
    title: '6.5" Dia Borewell Drilling',
    shortDesc: 'Deep, high-discharge drilling designed for large-capacity water demands.',
    diameter: '6.5" (165 mm)',
    tag: 'High Yield',
    idealFor: 'Gated communities, commercial buildings, industrial plots, and agricultural land requiring deep water penetration and maximum output.',
    technology: 'Heavy-duty hydraulic sensor rigs capable of drilling through hardest Deccan granite and fractured basalt layers.',
    depthCapability: 'Up to 1,500+ Feet',
    features: [
      'Site hydrogeological rock assessment before drill bit penetration',
      'Advanced sensor feed for fracture detection and water vein identification',
      'High-grade heavy gauge MS/PVC casing pipe seating to prevent surface collapse',
      'Continuous compressed air cleanout for pristine water recovery',
    ],
    highlights: ['Maximum Water Discharge', 'Penetrates Hardest Granite', 'Sensor Depth Telemetry'],
    icon: 'Hammer',
  },
  {
    id: '4-5-dia-drilling',
    title: '4.5" Dia Borewell Drilling',
    shortDesc: 'Cost-effective, compact drilling engineered for independent plots and villas.',
    diameter: '4.5" (115 mm)',
    tag: 'Popular Choice',
    idealFor: 'Independent houses, villas, and compact residential plots with space and setback constraints.',
    technology: 'Agile crawler-mounted hydraulic rigs suited for narrow lane access and boundary wall proximity.',
    depthCapability: 'Up to 900+ Feet',
    features: [
      'Minimal site disturbance and zero damage to adjacent foundations',
      'Cost-effective per-foot operational economics for individual families',
      'Precision casing to isolate top loose red soil and silt',
      'Rapid single-day drilling and prompt testing',
    ],
    highlights: ['Compact Rig Footprint', 'Budget Friendly', 'Optimal Family Discharge'],
    icon: 'Compass',
  },
  {
    id: 'submersible-motors',
    title: 'Submersible Motors & Pump Installation',
    shortDesc: 'End-to-end supply, certified electrical fitting, and testing of high-efficiency pumps.',
    diameter: 'Compatible with 4.5" & 6.5"',
    tag: 'Turnkey Setup',
    idealFor: 'Newly drilled borewells, motor upgrades, or replacements of burnt/inefficient pumps.',
    technology: 'Multi-stage water-filled and oil-filled submersible pumps with digital control panels and dry-run protectors.',
    depthCapability: 'Head capacity matching 100 ft to 1,200 ft',
    features: [
      'Authorized brands: Crompton, Kirloskar, Texmo, CRI, and Lubi',
      'Heavy-duty 100% copper submersible flat cables with waterproof jointing',
      'Microprocessor automated water level controllers and surge breakers',
      'On-site discharge rate (LPM) verification with precision flow testing',
    ],
    highlights: ['Authorized Brand Pumps', 'Automated Control Panels', '1-Year Warranty Support'],
    icon: 'Zap',
  },
  {
    id: 'borewell-cleaning',
    title: 'Borewell Cleaning, Flushing & Maintenance',
    shortDesc: 'High-pressure air compressor flushing to revive silted or low-yield borewells.',
    diameter: 'All Diameters',
    tag: 'Revival & Care',
    idealFor: 'Old borewells with muddy discharge, silt blockages, low water yield, or stuck motor recovery.',
    technology: 'High-pressure 1200 PSI air compressors and chemical-free hydro-flushing systems.',
    depthCapability: 'Full depth restoration up to existing base',
    features: [
      'High-velocity air flushing clears years of accumulated silt and loose sediment',
      'Clears choked subterranean aquifer veins to restore original water flow',
      'Re-drilling and depth extension services if water table has dropped',
      'Emergency retrieval of disconnected or stuck pumps and pipes',
    ],
    highlights: ['1200 PSI Pressure Air Flush', 'Yield Restoration', 'Stuck Motor Recovery'],
    icon: 'RotateCw',
  },
  {
    id: 'groundwater-survey',
    title: 'Hydrogeological Point Selection Survey',
    shortDesc: 'Scientific point identification using resistivity meters and geological rock profiling.',
    diameter: 'All Surveys',
    tag: 'Pre-Drilling',
    idealFor: 'Property owners before committing to drilling, ensuring maximum strike probability.',
    technology: 'Dual-frequency earth resistivity meters and fracture mapping methodology.',
    depthCapability: 'Scans up to 1,200 ft subsurface depth',
    features: [
      'Pinpoint coordinates with optimal water vein intersection potential',
      'Accurate layer stratification: topsoil depth, weathered zone, and hard rock boundary',
      'Provides written estimate of casing depth required',
      'Substantially cuts down dry-bore risks and unnecessary drilling expenses',
    ],
    highlights: ['High Strike Probability', 'Geological Strata Analysis', 'Written Survey Report'],
    icon: 'Search',
  },
];

export const PRICING_RATES: PricingRateRow[] = [
  {
    diameter: '4.5" Dia',
    depthRange: '0 - 300 Feet',
    minDepth: 0,
    maxDepth: 300,
    ratePerFoot: 95,
    casingRecommended: 'Class D Heavy PVC Casing',
    bestSuitedFor: 'Small Residential & Independent Houses',
    recommendedPump: '1.0 HP - 1.5 HP Submersible',
  },
  {
    diameter: '4.5" Dia',
    depthRange: '301 - 600 Feet',
    minDepth: 301,
    maxDepth: 600,
    ratePerFoot: 110,
    casingRecommended: 'Heavy Gauge PVC / MS Casing',
    bestSuitedFor: 'Deep Residential & Multi-Floor Villas',
    recommendedPump: '1.5 HP - 2.0 HP Submersible',
  },
  {
    diameter: '6.5" Dia',
    depthRange: '0 - 400 Feet',
    minDepth: 0,
    maxDepth: 400,
    ratePerFoot: 125,
    casingRecommended: 'ISI 7\" Bore Casing Pipe',
    bestSuitedFor: 'Commercial Properties & Gated Communities',
    recommendedPump: '2.0 HP - 3.0 HP High-Stage',
  },
  {
    diameter: '6.5" Dia',
    depthRange: '401 - 900+ Feet',
    minDepth: 401,
    maxDepth: 1200,
    ratePerFoot: 145,
    casingRecommended: 'Heavy Duty MS Welded / High Impact PVC',
    bestSuitedFor: 'Apartment Complexes, Hospitals & Agriculture',
    recommendedPump: '3.0 HP - 5.0 HP Heavy Duty',
  },
];

export const CASING_RATES = {
  pvc: { name: 'High-Impact ISI PVC Casing (Heavy)', ratePerFoot: 380 },
  ms: { name: 'Mild Steel (MS) Seamless Heavy Casing', ratePerFoot: 560 },
};

export const PUMP_PACKAGES = [
  { id: 'pump_1_5', name: '1.5 HP Submersible Pump + Digital Control Panel', price: 23500, suitableDepth: 'Up to 350 ft' },
  { id: 'pump_2_0', name: '2.0 HP Multi-Stage Submersible + Panel & Cable', price: 29800, suitableDepth: 'Up to 550 ft' },
  { id: 'pump_3_0', name: '3.0 HP Heavy Discharge Submersible + Panel', price: 37500, suitableDepth: 'Up to 750 ft' },
  { id: 'pump_5_0', name: '5.0 HP High-Volume Commercial Submersible', price: 49000, suitableDepth: '750 ft to 1200 ft' },
  { id: 'none', name: 'Drilling Only (No Pump at this time)', price: 0, suitableDepth: 'N/A' },
];

export const COMPLETED_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'High-Yield Deep Well for Prestige Gated Enclave',
    category: 'residential',
    location: 'Hayathnagar, Outer Ring Road, Hyderabad',
    depth: 780,
    diameter: '6.5" Dia',
    waterYield: '3.5 Inches Continuous Gush',
    duration: '14 Hours',
    rigType: 'Hydraulic Sensor Crawler Rig #01',
    casingInstalled: '65 ft MS Heavy Casing',
    completionDate: 'Completed Sep 2026',
    clientType: 'Gated Villa Community (48 Villas)',
    description: 'Drilled through 60 feet of red laterite and weathered rock before striking three primary water-bearing fissures in fractured blue granite at 410ft, 620ft, and 760ft.',
    testimonial: {
      quote: 'Emme Naresh and his crew arrived right on schedule at 6:30 AM with their advanced sensor rig. The transparency in measuring casing depth and per-foot rate was exemplary. Our 48-villa community now has 24/7 abundant water.',
      author: 'K. Rajasekhar Reddy',
      designation: 'Resident Welfare Association President',
    },
    imageTag: 'water_strike_hayathnagar',
  },
  {
    id: 'proj-2',
    title: 'Compact 4.5" Residential Borewell with Zero Foundation Vibration',
    category: 'residential',
    location: 'Saraswathinagar Colony, L.B. Nagar, Hyderabad',
    depth: 520,
    diameter: '4.5" Dia',
    waterYield: '2.5 Inches Crystal Clear',
    duration: '7 Hours',
    rigType: 'Compact Urban Maneuver Hydraulic Rig',
    casingInstalled: '45 ft Class D PVC Casing',
    completionDate: 'Completed Aug 2026',
    clientType: 'G+3 Independent Residential House',
    description: 'Located in a tight 30x40 ft residential plot with only 4 feet boundary passage. Utilized our slim-profile hydraulic rig to drill 520 ft safely without disturbing neighboring structural pillars.',
    testimonial: {
      quote: 'Other contractors claimed a rig could never enter our narrow lane. Sri Venkateshwara Borewells navigated the space effortlessly and struck pure sweet water at 480 feet. Highly recommended!',
      author: 'M. Sridhar Sharma',
      designation: 'Homeowner & Software Architect',
    },
    imageTag: 'compact_lb_nagar',
  },
  {
    id: 'proj-3',
    title: 'Commercial Multi-Stage 6.5" Water Supply for Hospital Facility',
    category: 'commercial',
    location: 'Nagole Inner Ring Road, Hyderabad',
    depth: 920,
    diameter: '6.5" Dia',
    waterYield: '4.0 Inches Industrial Flow (220 LPM)',
    duration: '18 Hours',
    rigType: 'Dual-Compressor 1200 PSI Heavy Rig',
    casingInstalled: '80 ft MS Welded Casing',
    completionDate: 'Completed Jul 2026',
    clientType: '120-Bed Multi-Specialty Hospital',
    description: 'High-volume uninterrupted water supply required for hospital operations and RO plants. Successfully drilled to 920 ft, yielding heavy flow. Fitted with 5.0 HP Crompton Submersible and digital bypass control.',
    testimonial: {
      quote: 'Through BNI Hyderabad, we connected with Emme Naresh. His technical knowledge of the local strata in Nagole saved us thousands in casing calculations. Ethical, swift, and completely professional.',
      author: 'Dr. V. Prasad Rao',
      designation: 'Managing Director, Healthcare Facility',
    },
    imageTag: 'commercial_hospital_nagole',
  },
  {
    id: 'proj-4',
    title: 'High-Pressure Borewell Flushing & Yield Revival',
    category: 'maintenance',
    location: 'Uppal Industrial Area, Hyderabad',
    depth: 650,
    diameter: '6.5" Dia',
    waterYield: 'Revived from Muddy Trickle to 2.8 Inches',
    duration: '6 Hours',
    rigType: '1200 PSI Pressure Air Compressor Unit',
    casingInstalled: 'Existing casing inspected & sealed',
    completionDate: 'Completed Jun 2026',
    clientType: 'Manufacturing Facility',
    description: 'Old borewell had choked with sand sediment after 8 years of use, causing motor tripping. Deployed high-pressure cyclical air blast to flush out 14 tractor-loads of silty sediment and reopened aquifer veins.',
    testimonial: {
      quote: 'We were about to invest ₹2.5 Lakhs in drilling a completely new borewell. Emme Naresh inspected it and recommended air flushing instead. It cost one-fourth the price and brought back full water flow.',
      author: 'Anand Goud',
      designation: 'Factory Plant Head',
    },
    imageTag: 'borewell_flushing_uppal',
  },
  {
    id: 'proj-5',
    title: 'High-Output Agricultural Borewell for Organic Farm',
    category: 'agricultural',
    location: 'Ghatkesar Rural Belt, Rangareddy',
    depth: 850,
    diameter: '6.5" Dia',
    waterYield: '3.8 Inches Copious Flow',
    duration: '16 Hours',
    rigType: 'High-Capacity Crawler Sensor Rig #03',
    casingInstalled: '55 ft Heavy Casing',
    completionDate: 'Completed May 2026',
    clientType: '8-Acre Organic Horticulture Farm',
    description: 'Drilled across challenging quartzite and granite strata in Ghatkesar. Discovered a major subterranean perennial stream at 710 ft that generates round-the-clock water for drip irrigation.',
    testimonial: {
      quote: 'Groundwater in this patch was notoriously difficult to tap. Naresh garu used scientific hydrogeological points and hit water exactly where predicted. Genuine master of this craft.',
      author: 'B. Ravinder Reddy',
      designation: 'Agriculturalist & Farm Owner',
    },
    imageTag: 'agricultural_ghatkesar',
  },
  {
    id: 'proj-6',
    title: 'Commercial IT Park Twin Borewells with Automation',
    category: 'commercial',
    location: 'Gachibowli Financial District, Hyderabad',
    depth: 1050,
    diameter: '6.5" Dia',
    waterYield: '4.5 Inches Heavy Industrial Output',
    duration: '2 Days',
    rigType: 'High-Speed Automated Hydraulic Sensor Rig',
    casingInstalled: '95 ft Heavy Gauge MS Casing',
    completionDate: 'Completed Apr 2026',
    clientType: 'Corporate Campus & Tech Park',
    description: 'Twin 6.5" borewells synchronized with building management systems (BMS), telemetry monitoring, and smart load-balancing submersible motor banks.',
    testimonial: {
      quote: 'Clean execution, strict safety compliance, noise dampening protocols, and spotless site cleanup after drilling. Sri Venkateshwara Borewells is our first-choice drilling partner.',
      author: 'Naveen Kumar Chary',
      designation: 'VP Infrastructure & Facilities',
    },
    imageTag: 'it_park_gachibowli',
  },
];

export const SOCIAL_FEED: SocialFeedItem[] = [
  {
    id: 'post-1',
    platform: 'instagram',
    accountName: '@hyderabadi_borewells',
    accountUrl: 'https://www.instagram.com/hyderabadi_borewells/',
    externalReelUrl: 'https://www.instagram.com/hyderabadi_borewells/',
    date: '2 hours ago',
    title: 'Gushing 3.5" Water Strike in Hayathnagar!',
    caption: 'Pure sweet groundwater tapped at 680 feet! Witness the hydraulic pressure as our sensor rig opens the primary aquifer fissure. Big smiles from our client! #hyderabadi_borewells #HyderabadBorewells #GroundwaterStrike #LBNagar #WaterYield',
    likes: 542,
    comments: 48,
    shares: 112,
    tag: 'Water Strike',
    hasVideo: true,
    videoDuration: '0:45',
    videoType: 'water-strike',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    location: 'Hayathnagar, Hyderabad',
    waterYield: '3.5 Inches Yield',
  },
  {
    id: 'post-2',
    platform: 'facebook',
    accountName: 'Sri Venkateshwara Borewells',
    accountUrl: 'https://www.facebook.com/search/top?q=Sri%20Venkateshwara%20Borewells%20Hyderabad',
    externalReelUrl: 'https://www.facebook.com/search/top?q=Sri%20Venkateshwara%20Borewells%20Hyderabad',
    date: 'Yesterday',
    title: 'Inside Our Advanced Hydraulic Sensor Rig: Hard Granite Penetration',
    caption: 'Site recording: Watch how Emme Naresh calibrates the hydraulic sensor feed to drill through tough Deccan granite in Saraswathinagar, LB Nagar. 100% upfront per-foot pricing with zero hidden surcharges.',
    likes: 890,
    comments: 92,
    shares: 240,
    tag: 'Rig In Action',
    hasVideo: true,
    videoDuration: '3:15',
    videoType: 'rig-action',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    location: 'Saraswathinagar, L.B. Nagar',
  },
  {
    id: 'post-3',
    platform: 'instagram',
    accountName: '@hyderabadi_borewells',
    accountUrl: 'https://www.instagram.com/hyderabadi_borewells/',
    externalReelUrl: 'https://www.instagram.com/hyderabadi_borewells/',
    date: '3 days ago',
    title: 'Old Borewell Revival: 1200 PSI Air Flushing in Action',
    caption: 'Watch the mud and sediment fly out! Don’t drill a new borewell until you try our high-pressure compressor flushing. Saved this Uppal apartment complex over ₹1.8 Lakhs. Follow @hyderabadi_borewells for daily reels!',
    likes: 1140,
    comments: 86,
    shares: 310,
    tag: 'Maintenance',
    hasVideo: true,
    videoDuration: '1:10',
    videoType: 'flushing-action',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    location: 'Uppal Industrial Area, Hyderabad',
    waterYield: 'Restored 2.8" Flow',
  },
  {
    id: 'post-4',
    platform: 'facebook',
    accountName: 'Sri Venkateshwara Borewells',
    accountUrl: 'https://www.facebook.com/search/top?q=Sri%20Venkateshwara%20Borewells%20Hyderabad',
    externalReelUrl: 'https://www.facebook.com/search/top?q=Sri%20Venkateshwara%20Borewells%20Hyderabad',
    date: '4 days ago',
    title: 'Dual 4.5" Drilling in Tight Residential Plot',
    caption: 'Narrow 4-foot passage? Our specialized compact crawler rig navigated the alley without vibration or foundation hazard. 520 ft drilled and pure water yielded in under 7 hours.',
    likes: 312,
    comments: 29,
    shares: 45,
    tag: 'Urban Solution',
    hasVideo: true,
    videoDuration: '1:30',
    videoType: 'urban-drilling',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    location: 'Nagole, Hyderabad',
    waterYield: '2.5 Inches Yield',
  },
  {
    id: 'post-5',
    platform: 'facebook',
    accountName: 'Sri Venkateshwara Borewells',
    accountUrl: 'https://www.facebook.com/search/top?q=Sri%20Venkateshwara%20Borewells%20Hyderabad',
    externalReelUrl: 'https://www.facebook.com/search/top?q=Sri%20Venkateshwara%20Borewells%20Hyderabad',
    date: '5 days ago',
    title: 'BNI Hyderabad Business Excellence Spotlight',
    caption: 'Proud to be recognized among top ethical business providers in Hyderabad by BNI. Transparent per-foot pricing, verified casing depth, and zero hidden charges are the pillars of our 15-year reputation.',
    likes: 460,
    comments: 54,
    shares: 72,
    tag: 'BNI Trust',
    hasVideo: true,
    videoDuration: '2:15',
    videoType: 'bni-spotlight',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    location: 'Hyderabad Convention Centre',
  },
  {
    id: 'post-6',
    platform: 'instagram',
    accountName: '@hyderabadi_borewells',
    accountUrl: 'https://www.instagram.com/hyderabadi_borewells/',
    externalReelUrl: 'https://www.instagram.com/hyderabadi_borewells/',
    date: '1 week ago',
    title: 'Copious 4.0" Water Strike at Ghatkesar Farm',
    caption: 'Unbelievable water strike at 710 ft in Ghatkesar! High pressure perennial stream tapped for horticulture irrigation. Follow @hyderabadi_borewells for more water strike clips in Telangana!',
    likes: 980,
    comments: 110,
    shares: 285,
    tag: 'Agriculture Strike',
    hasVideo: true,
    videoDuration: '0:55',
    videoType: 'water-strike',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    location: 'Ghatkesar, Rangareddy',
    waterYield: '4.0 Inches Copious',
  },
];

export const RESUME_PROFILE = {
  name: 'Emme Naresh',
  title: 'Proprietor & Chief Groundwater Drilling Consultant',
  company: 'Sri Venkateshwara Borewells & Motors',
  address: 'Saraswathinagar Colony, L.B. Nagar, Hyderabad, Telangana',
  phone: '+91 9542326767',
  email: 'emmenaresh@gmail.com',
  summary: 'Respected groundwater technologist and business owner with over 15 years of on-ground expertise executing residential, commercial, industrial, and agricultural borewell drilling projects across Hyderabad and Telangana state. Recognized for ethical, transparent pricing per foot, scientific hydrogeological strata evaluation, and deployment of cutting-edge hydraulic sensor rigs for maximum water strike yield.',
  memberships: [
    'BNI Member (Business Network International) - Hyderabad Chapter',
    'Telangana State Borewell Contractors Association',
    'Groundwater Exploration & Rig Operators Guild',
  ],
  expertise: [
    'High-Capacity Hydraulic Sensor Rig Operations (4.5" & 6.5" Diameter)',
    'Subterranean Strata & Aquifer Fissure Hydrogeological Profiling',
    'Hard Granite & Basalt Layer High-Pressure Percussive Drilling',
    'Casing Pipe Integrity & Anti-Collapse Engineering (PVC & MS)',
    'Submersible Pump Sizing, Motor Head Calculation & Turnkey Installation',
    'Borewell Air Compressor Desilting, Mud Flushing & Re-Drilling',
    'Transparent Per-Foot Cost Estimation & Ethical Client Advisory',
  ],
  careerHistory: [
    {
      role: 'Proprietor & Managing Director',
      org: 'Sri Venkateshwara Borewells & Motors, Hyderabad',
      period: '2011 - Present (15+ Years)',
      achievements: [
        'Personally supervised the successful commissioning of over 2,850 borewells across Hyderabad and neighboring districts.',
        'Pioneered the introduction of crawler-mounted hydraulic sensor rigs for compact residential lanes with zero foundation vibration.',
        'Established transparent per-foot pricing policies, virtually eliminating dispute rates and building an exemplary 98.4% customer satisfaction record.',
        'Awarded active BNI membership recognition for ethical leadership and high referral satisfaction in the infrastructure domain.',
      ],
    },
    {
      role: 'Senior Rig Operations Supervisor & Hydrogeology Technician',
      org: 'Groundwater Survey & Drilling Services, Telangana',
      period: '2007 - 2011',
      achievements: [
        'Supervised deep commercial and agricultural rigs across granite-heavy belts in Medchal, Rangareddy, and Nalgonda.',
        'Assisted hydrogeologists in electrical resistivity imaging and water point identification.',
      ],
    },
  ],
  machineryFleet: [
    'Heavy-Duty Tracked Hydraulic Sensor Rigs (6.5" & 4.5")',
    'High-Pressure Dual Air Compressors (1200 PSI / 350 CFM)',
    'Agile Crawler-Mounted Urban Compact Drilling Units',
    'Digital Ground Resistivity Meters & Strata Depth Sensors',
    'Full Submersible Testing & Automated Flow LPM Meters',
  ],
  educationCertifications: [
    'Certified in Heavy Hydraulic Drilling Systems & Safety (2008)',
    'Advanced Subsurface Water Exploration Workshop - CGWB Guidelines',
    'Electrical Motor Control & Submersible Technology Certification',
  ],
};
