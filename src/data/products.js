const apfcPanelImg = "/assets/images/APFC_PANEL.png";
const htApfcImg = "/assets/images/HT_APFC_Panels.jpg";
const hybridApfcImg = "/assets/images/Hybrid_APFC_Panels.png";
const rtpfcPanelImg = "/assets/images/rtpfc-panel.png";

export const products = [
  {
    id: "lt-apfc-panel",
    name: "LT APFC Panel",
    fullName: "Automatic Power Factor Correction Panel",
    category: "APFC Solutions",
    description: "The LT APFC Panel (Low Voltage Automatic Power Factor Correction Panel) is engineered to deliver consistent power factor above 0.99 in 415V / 440V industrial electrical systems.",
    fullDescription: "The LT APFC Panel (Low Voltage Automatic Power Factor Correction Panel) by Domain Powers is engineered to deliver consistent power factor above 0.99 in 415V / 440V industrial electrical systems. Designed with industrial grade PFC components and precision control technology, our LT APFC panels ensure maximum penalty savings, reduced kVA demand and long operational life even under demanding load conditions.\n\nBuilt for Indian power conditions, fluctuating loads and heavy motor applications, our LT APFC panels provide stable, intelligent and reliable power factor correction for industries and commercial facilities.",
    keyFeatures: [
      "Heavy Duty / Super Heavy Duty Power Capacitors",
      "Advanced Microprocessor-Based APFC Relay",
      "Accurate Reactive Power Compensation",
      "Fast Response Switching",
      "Engineered for Continuous 24x7 Industrial Operation"
    ],
    technicalHighlights: [
      "Microprocessor-based 3CT sensing APFC controller for accurate real-time load monitoring across all three phases",
      "Capacitor duty AC6b rated contactors with inrush current suppression for safe switching",
      "Intelligent step-by-step capacitor bank operation to prevent overcompensation",
      "Thermostat-controlled cooling fans for optimal internal temperature management",
      "Individual step protection using MCB / MCCB / HRC fuse",
      "Copper busbar system with proper spacing for low temperature rise"
    ],
    benefits: [
      "Maintains continuous power factor up to 0.99",
      "Eliminates power factor penalty charges completely",
      "Reduces maximum demand (kVA) and electricity bills",
      "Increases transformer efficiency",
      "Improves voltage stability across LT network",
      "Prevents capacitor failures due to controlled switching",
      "Ensures longer capacitor and contactor life",
      "Delivers faster return on investment (ROI)",
      "Suitable for fluctuating motor loads and industrial duty"
    ],
    applications: [
      "Manufacturing industries with heavy motor loads",
      "Steel plants & rolling mills",
      "Chemical and process plants with continuous operations",
      "Commercial complexes, malls and multiplexes",
      "Hospitals and healthcare facilities with sensitive electrical loads",
      "Water Treatment Plants (WTP) and Sewage Treatment Plants (STP)",
      "IT parks and corporate office buildings",
      "Warehouses, logistics hubs and automated facilities",
      "Textile, packaging and FMCG industries"
    ],
    faqs: [
      {
        q: "What is an LT APFC Panel?",
        a: "An LT APFC Panel is an electrical system used in 415V / 440V three-phase networks to automatically maintain power factor by switching capacitor banks based on real-time load conditions."
      },
      {
        q: "What voltage is an LT APFC panel used for?",
        a: "LT APFC panels are designed for 415V / 440V low voltage three-phase electrical systems commonly used in industrial and commercial installations."
      },
      {
        q: "What power factor can be achieved?",
        a: "A properly engineered LT APFC panel can maintain a stable power factor between 0.98 and 0.99, depending on load variation and system conditions."
      }
    ],
    image: apfcPanelImg
  },
  {
    id: "rtpfc-panel",
    name: "RTPFC Panel",
    fullName: "Real-Time Power Factor Correction Panel",
    category: "APFC Solutions",
    description: "The RTPFC Panel (Real-Time Power Factor Correction Panel) is an advanced automatic power factor correction system designed to deliver instantaneous compensation in highly dynamic electrical environments.",
    fullDescription: "The RTPFC Panel (Real-Time Power Factor Correction Panel) is an advanced automatic power factor correction system designed to deliver instantaneous compensation in highly dynamic electrical environments. Engineered with fast solid-state switching technology, RTPFC panels maintain stable power factor up to 0.99 even in rapidly fluctuating loads such as data centers, automation systems, HVACs, Drives and heavy VFD applications.\n\nDomain Powers manufactures RTPFC panels for industries where conventional APFC panels cannot respond fast enough, ensuring zero penalty, stable voltage and uninterrupted electrical performance.",
    keyFeatures: [
      "Solid-State Technology with zero cross over",
      "Real-Time Compensation- Millisecond Switching",
      "Heavy Duty Capacitors with filters",
      "No Mechanical Wear",
      "Fast discharge resistors- snubber circuits"
    ],
    technicalHighlights: [
      "High-speed switching response in milliseconds",
      "Zero-voltage switching to prevent transients",
      "Accurate three-phase sensing for precise PF correction",
      "Silent and spark-free capacitor engagement",
      "Reduced stress on capacitors and busbars",
      "Designed for rapidly changing and non-linear loads",
      "Compatible with harmonic-prone environments (with optional detuning)"
    ],
    benefits: [
      "Transient free capacitor group switching using Electronics Switching elements",
      "Maintains power factor up to 0.99 under dynamic load changes",
      "Avoid wave form distortions, since capacitors are connected and disconnected during Zero crossing",
      "Saves energy by reduced max. Demand, PF bonus & saving in Transformer losses.",
      "Ideal for high-speed and fluctuating load systems",
      "Provides silent and maintenance-friendly operation",
      "Extends lifespan of capacitors and switching devices",
      "Reduces maximum demand (kVA) charges"
    ],
    applications: [
      "Data centers and server facilities",
      "IT parks and software companies",
      "Automation-driven manufacturing plants",
      "CNC, robotics and precision industries",
      "Quick commerce warehouses",
      "Airports and metro rail systems",
      "Hospitals with critical electrical loads",
      "Printing, packaging and textile industries"
    ],
    faqs: [
      {
        q: "How is RTPFC different from a conventional APFC panel?",
        a: "Conventional APFC panels use mechanical switching devices with time delay, while RTPFC panels use high-speed solid-state switching to provide real-time correction without delay."
      },
      {
        q: "Where should RTPFC panels be installed?",
        a: "RTPFC panels are recommended for data centers, automation plants, VFD-dominated systems and industries where load fluctuates frequently."
      }
    ],
    image: rtpfcPanelImg
  },
  {
    id: "ht-apfc-panel",
    name: "HT APFC Panel",
    fullName: "High Tension Automatic Power Factor Correction Panel",
    category: "APFC Solutions",
    description: "The HT APFC Panel (High Tension Automatic Power Factor Correction Panel) is designed for medium and high voltage systems ranging from 3.3kV, 6.6kV, 11kV, 22kV and 33kV.",
    fullDescription: "The HT APFC Panel (High Tension Automatic Power Factor Correction Panel) is designed for medium and high voltage systems ranging from 3.3kV, 6.6kV, 11kV, 22kV and 33kV. Domain Powers engineers HT APFC panels to provide centralized reactive power compensation at the transformer or feeder level, ensuring stable power factor up to 0.99, reduced maximum demand and improved grid performance.\n\nBuilt for large industrial plants, utilities and infrastructure projects, our HT APFC panels are engineered with robust switching systems, heavy-duty capacitor banks and advanced protection schemes suitable for high voltage applications.",
    keyFeatures: [
      "Centralized Reactive power Compensation",
      "Vacuum Contactor / Circuit Breaker Switching",
      "Heavy Duty HT Capacitor Banks",
      "Protection Interlocks",
      "Intelligent PF Controller",
      "Automatic Step Control"
    ],
    technicalHighlights: [
      "Heavy-duty, internally fused or externally fused capacitor units designed for medium voltage applications",
      "HT APFC panels use vacuum contactors or vacuum circuit breakers (VCB) for reliable and safe capacitor switching",
      "Advanced Protection System including Overcurrent, Overvoltage, and Neutral Unbalance protection",
      "Microprocessor-based controller with programmable set points to maintain desired PF automatically",
      "Harmonic Filtering / Detuned Configuration to prevent resonance and capacitor stress"
    ],
    benefits: [
      "Maintains stable power factor up to 0.99 at HT level",
      "Eliminates power factor penalties from utility",
      "Reduces maximum demand (kVA) at grid connection point",
      "Improves transformer loading capacity",
      "Reduces I²R losses in HT feeders",
      "Enhances voltage regulation across plant",
      "Increases overall electrical system efficiency",
      "Provides long-term reliability in heavy industrial environments"
    ],
    applications: [
      "Large manufacturing plants & steel rolling mills",
      "Cement plants & mining operations",
      "Oil & gas facilities",
      "Power generation plants & utility substations",
      "Infrastructure projects (Metro, Airports)",
      "Large water pumping stations (WTP, Sewage)",
      "Industrial parks and SEZs"
    ],
    faqs: [
      {
        q: "What is an HT APFC Panel?",
        a: "An HT APFC Panel is a High Tension Automatic Power Factor Correction system used at 11kV or 33kV levels to improve power factor and reduce reactive power demand."
      },
      {
        q: "Why use HT APFC instead of LT APFC?",
        a: "HT APFC corrects power factor at the source (transformer or feeder level), reducing current flow in the entire distribution system and improving overall plant efficiency."
      }
    ],
    image: htApfcImg
  },
  {
    id: "hybrid-apfc-panel",
    name: "Hybrid APFC Panel",
    fullName: "Thyristor + SVG System",
    category: "APFC Solutions",
    description: "The Hybrid APFC Panel is an advanced power factor correction solution combining fast thyristor-based capacitor switching with Static VAR Generator (SVG) technology.",
    fullDescription: "The Hybrid APFC Panel by Domain Powers is an advanced power factor correction solution combining fast thyristor-based capacitor switching with Static VAR Generator (SVG) technology. Designed for highly dynamic and harmonic-rich electrical systems, Hybrid APFC panels deliver real-time reactive power compensation with unmatched accuracy and stability.\n\nThis integrated solution ensures power factor close to unity (up to 0.99 or above), minimizes harmonic distortion and provides superior voltage stability for critical industrial and infrastructure applications.",
    keyFeatures: [
      "Integrated Static VAR Generator (SVG)",
      "Thyristor-Based Fast Switching",
      "Dynamic kVAr Injection",
      "Harmonic Mitigation Capability",
      "Near Unity Power Factor (0.99+)",
      "Bidirectional Reactive Control",
      "Intelligent Monitoring System",
      "HMI based control & monitoring"
    ],
    technicalHighlights: [
      "Static VAR Generator (SVG) provides continuous and smooth reactive power compensation",
      "Thyristor-Based Capacitor Switching ensures instantaneous capacitor engagement with zero wear",
      "Unlike traditional APFC panels, the SVG module provides dynamic and continuous kVAr adjustment",
      "Fine and real-time correction through SVG ensures precise compensation even during rapid fluctuations",
      "Works effectively in harmonic-rich systems and eliminates overcompensation"
    ],
    benefits: [
      "Maintains near unity power factor (0.99 or higher)",
      "Eliminates power factor penalties completely",
      "Reduces maximum demand (kVA) charges significantly",
      "Improves voltage regulation and stability",
      "Minimizes harmonic distortion impact",
      "Prevents overcompensation and resonance issues",
      "Enhances power quality for sensitive equipment",
      "Extends transformer and distribution system life"
    ],
    applications: [
      "Large data centers/ IT Parks",
      "Semiconductor and electronics manufacturing",
      "Steel plants with heavy VFD loads",
      "Cement plants with fluctuating load patterns",
      "Metro rail and airport infrastructure",
      "Large hospitals with sensitive diagnostic equipment",
      "Industrial automation and robotics systems",
      "Precision engineering industries"
    ],
    faqs: [
      {
        q: "What is a Hybrid APFC Panel?",
        a: "A Hybrid APFC Panel is a power factor correction system that combines thyristor-based fast switching capacitor banks with Static VAR Generator (SVG) technology."
      },
      {
        q: "How is Hybrid APFC different from conventional APFC?",
        a: "Conventional APFC uses fixed capacitor steps. Hybrid APFC integrates SVG technology, allowing continuous reactive power adjustment along with fast switching."
      }
    ],
    image: hybridApfcImg
  }
];

export const categorizedProducts = {
  "APFC Solutions": ["lt-apfc-panel", "rtpfc-panel", "ht-apfc-panel", "hybrid-apfc-panel"]
};
