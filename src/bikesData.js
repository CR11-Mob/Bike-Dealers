const brands = ["honda", "royal enfield", "ktm", "yamaha", "hero", "suzuki"];

const models = {
  honda: ["activa 6G", "Honda Hornet 2.0"],
  "royal enfield": ["classic 350", "Royal Enfield Himalayan"],
  ktm: ["duke 200"],
  yamaha: ["fz 25"],
  hero: ["deluxe hf"],
  suzuki: ["hayabusa 2021"],
};

const bikeTypes = [
  "commuter bike",
  "sport bike",
  "cruiser bike",
  "electric bike",
];

const detailsByModel = {
  Suzuki: {
    brand: "Suzuki",
    model: "2021 Suzuki Hayabusa",
    price: "16,58,000",
    type: "sport bike",
    img: "https://source.unsplash.com/random/200*100",
    specifications: {
      mileage: "-",
      "engine type": "Fan Cooled, 4 Stroke, SI Engine",
      "Max Power": "7.79 PS @ 8000 rpm",
      "Fuel Capacity": "5.3 L",
    },
    features: {
      "braking type": "Combi Brake System",
      speedometer: "Analogue",
      abs: "No",
      "seat opening switch": "Yes",
    },
    "key specs": {
      engine: "1340 cc",
      power: "190 PS",
      brakes: "Double Disc",
      "tyre type": "Tubeless",
    },
    highlights:
      "Suzuki has given the 2021 Hayabusa a host of new features. The bike now gets LED lights, a new TFT inlay in the instrument console that displays the different electronic settings. For the first time, the Hayabusa receives a comprehensive electronics suite, which includes 10-level traction control, 10-level wheelie control, three levels of engine brake control and launch control, and the new Suzuki Drive Mode Selector (SDMS). The SDMS comprises three presets and three user-defined modes. The new Hayabusa even gets a quickshifter and hill assist control.",
  },
};

const allBikesData = [
  {
    brand: "Harley Davidson",
    model: "Iron 883",
    price: "9,26,000",
    type: "cruiser bike",
    img: "/images/ducati-scrambler-2.png",
    specifications: {
      mileage: "-",
      "engine type": "Fan Cooled, 4 Stroke, SI Engine",
      "Max Power": "7.79 PS @ 8000 rpm",
      "Fuel Capacity": "5.3 L",
    },
    features: {
      "braking type": "Combi Brake System",
      speedometer: "Analogue",
      abs: "No",
      "seat opening switch": "Yes",
    },
    "key specsArr": ["engine", "brakes", "tyre type"],
    "key specs": {
      engine: { svg: "/images/svg/engine-1", data: "803 cc" },
      brakes: { svg: "/images/svg/brake-1", data: "Double Disc" },
      "tyre type": { svg: "/images/svg/tyre-1", data: "Tubeless" },
    },
    highlights:
      "Harley-Davidson has announced the Freedom Promise scheme under which you can trade in any Sportster model within a year of purchase for a Softail and get a discount worth the full price you had paid for the Sportster. Know more details here. One of the most handsome two-wheelers from Harley Davidson, the Sportster Iron 883 is an entry-level cruiser that is assembled in India. The bike is more of a veteran biker’s choice than of a beginner. The bike confidently upholds the all-black charm with no chrome highlights. The cruiser gets an elongated and low shape with seat at just 760 mm above the ground. The bike sports tough 9-spoke wheels and a drag-style handlebar that pushes the rider in a little bent aggressive riding position as of a retro sport bike. The gorgeous beast draws dynamism from the Evolution V-twin 883 cc air-cooled engine that sits in a bare-bone chassis and generates 50.6 PS @ 5500 rpm worth of maximum power along with 70 Nm of peak torque at 3500 rpm. This power is transmitted to the 9-spoke wheels of the bike with the help of a seamless 5–speed transmission gearbox.",
  },

  {
    brand: "Ducati",
    model: "Scrambler 800",
    price: "9,80,000",
    type: "sport bike",
    img: "/images/ducati-scrambler-2.png",
    specifications: {
      mileage: "-",
      "engine type": "Fan Cooled, 4 Stroke, SI Engine",
      "Max Power": "7.79 PS @ 8000 rpm",
      "Fuel Capacity": "5.3 L",
    },
    features: {
      "braking type": "Combi Brake System",
      speedometer: "Analogue",
      abs: "No",
      "seat opening switch": "Yes",
    },
    "key specs": {
      engine: "803 cc",
      power: "72.8 PS",
      brakes: "Double Disc",
      "tyre type": "Tubeless",
    },
    highlights:
      "Ducati spruced up the Scrambler a while back. The neo-retro motorcycle got a cross-shaped LED DRL and LED turn indicators. The LCD digital console also saw minor revisions with a gear position indicator and fuel gauge. This console is Ducati Multimedia System ready, allowing you to connect your smartphone to your ride to control music on the go.",
  },

  {
    brand: "Ola",
    model: "S1 Pro",
    price: "1,30,000",
    type: "electric bike",
    img: "/images/ducati-scrambler-2.png",
    specifications: {
      mileage: "-",
      "engine type": "Fan Cooled, 4 Stroke, SI Engine",
      "Max Power": "7.79 PS @ 8000 rpm",
      "Fuel Capacity": "5.3 L",
    },
    features: {
      "braking type": "Combi Brake System",
      speedometer: "Analogue",
      abs: "No",
      "seat opening switch": "Yes",
    },
    "key specs": {
      "driving range": "181 km/charge",
      "battery capacity": "3.97 KWh",
      "motor power": "8500 W",
      "max speed": "115 kmph",
    },
    highlights:
      "The Ola S1 as well as the Ola S1 Pro are equipped with an all-LED lighting system, a massive 36-litre underseat storage, TFT instrument cluster with smartphone, Bluetooth, Wifi and GPS connectivity. Other noteworthy standard features include side-stand-down and anti-theft alert, geo-fencing, reverse mode, Get Home Mode, Take Me Home Lights, and a Limp Home Mode. The S1 Pro variant also comes with a hill-hold function, voice assistant, and cruise control. The e-scooter also comes with multiple profiles, and a sound system to imitate a petrol-powered scooter.",
  },

  {
    brand: "Suzuki",
    model: "Hayabusa",
    price: "16,58,000",
    type: "sport bike",
    img: "/images/ducati-scrambler-2.png",
    specifications: {
      mileage: "-",
      "engine type": "Fan Cooled, 4 Stroke, SI Engine",
      "Max Power": "7.79 PS @ 8000 rpm",
      "Fuel Capacity": "5.3 L",
    },
    features: {
      "braking type": "Combi Brake System",
      speedometer: "Analogue",
      abs: "No",
      "seat opening switch": "Yes",
    },
    "key specs": {
      engine: "1340 cc",
      power: "190 PS",
      brakes: "Double Disc",
      "tyre type": "Tubeless",
    },
    highlights:
      "Suzuki has given the 2021 Hayabusa a host of new features. The bike now gets LED lights, a new TFT inlay in the instrument console that displays the different electronic settings. For the first time, the Hayabusa receives a comprehensive electronics suite, which includes 10-level traction control, 10-level wheelie control, three levels of engine brake control and launch control, and the new Suzuki Drive Mode Selector (SDMS). The SDMS comprises three presets and three user-defined modes. The new Hayabusa even gets a quickshifter and hill assist control.",
  },
  {
    brand: "Suzuki",
    model: "V-Strom 650XT",
    price: "9,00,000",
    type: "cruiser bike",
    img: "https://source.unsplash.com/random/200*100",
    specifications: {
      mileage: "-",
      "engine type": "Fan Cooled, 4 Stroke, SI Engine",
      "Max Power": "7.79 PS @ 8000 rpm",
      "Fuel Capacity": "5.3 L",
    },
    features: {
      "braking type": "Combi Brake System",
      speedometer: "Analogue",
      abs: "No",
      "seat opening switch": "Yes",
    },
    "key specs": {
      engine: "645 cc",
      power: "-",
      brakes: "Double Disc",
      "tyre type": "Tubeless",
    },
    highlights:
      "Electronic rider aids like three levels of switchable traction control and dual-channel ABS come as standard. The settings can be altered to suit the rider via the bike’s analogue-digital instrument console. ",
  },

  {
    brand: "Hero",
    model: "Glamour",
    price: "83,000",
    type: "commuter bike",
    img: "https://source.unsplash.com/random/200*100",
    specifications: {
      mileage: "-",
      "engine type": "Fan Cooled, 4 Stroke, SI Engine",
      "Max Power": "7.79 PS @ 8000 rpm",
      "Fuel Capacity": "5.3 L",
    },
    features: {
      "braking type": "Combi Brake System",
      speedometer: "Analogue",
      abs: "No",
      "seat opening switch": "Yes",
    },
    "key specs": {
      engine: "124.7 cc",
      power: "10.84 PS",
      brakes: "Disc",
      "tyre type": "Tubeless",
    },
    highlights:
      "While the standard variant of the Glamour only has CBS, i3S start-stop system, real-time mileage indicator and Auto Sail Technology (essentially crawl assist), the Glamour Xtec comes loaded with segment-first features like an integrated USB charging port, Bluetooth connectivity, turn-by-turn navigation with Google map connectivity, a gear position indicator, a bank angle sensor that shuts off the engine during a fall and side-stand engine cut off. Moreover, it also gets an LED headlight which the standard variant misses out on. The bike is available in four colours: Sports Red, Tornado Grey, Techno Blue and Radiant Red.",
  },
  {
    brand: "Hero",
    model: "Splendor Plus",
    price: "68,000",
    type: "commuter bike",
    img: "https://source.unsplash.com/random/200*100",
    specifications: {
      mileage: "-",
      "engine type": "Fan Cooled, 4 Stroke, SI Engine",
      "Max Power": "7.79 PS @ 8000 rpm",
      "Fuel Capacity": "5.3 L",
    },
    features: {
      "braking type": "Combi Brake System",
      speedometer: "Analogue",
      abs: "No",
      "seat opening switch": "Yes",
    },
    "key specs": {
      engine: "97.2 cc",
      power: "8.02 PS",
      brakes: "Drum",
      "tyre type": "Tubeless",
    },
    highlights:
      "The Hero Splendor BS6 remains a no-frills motorcycle. It gets a basic lighting system and an analogue console. This basic instrumentation reads out only the speed, total distance covered, and fuel level. The bikini fairing and the iconic rectangular headlight have been synonymous with the Splendor. The i3S variant, as the name suggests, comes with the Idle Stop-Start System. This feature turns off the engine when it idles for more than 5 seconds in traffic. The engine turns back on once the clutch lever is pulled. This helps it extract better mileage out of the motorcycle, especially on traffic-riddled roads.",
  },

  {
    brand: "Yamaha",
    model: "R15 V4",
    price: "1,86,000",
    type: "sport bike",
    img: "https://source.unsplash.com/random/200*100",
    specifications: {
      mileage: "-",
      "engine type": "Fan Cooled, 4 Stroke, SI Engine",
      "Max Power": "7.79 PS @ 8000 rpm",
      "Fuel Capacity": "5.3 L",
    },
    features: {
      "braking type": "Combi Brake System",
      speedometer: "Analogue",
      abs: "No",
      "seat opening switch": "Yes",
    },
    "key specs": {
      engine: "155 cc",
      power: "18.4 PS",
      brakes: "Double Disc",
      "tyre type": "Tubeless",
    },
    highlights:
      "The fourth generation of the R15 comes packed to the teeth with features. It gets a revised front fascia featuring a new Bi-functional LED headlamp flanked by LED DRLs, and a new full-digital instrument console with Yamaha's Y-Connect app. The display gets modes (Street and Track), along with a lap timer, gear position indicator, call/message alerts, mobile battery status, connection status, average fuel efficiency and last parked location. You can also access information like instantaneous fuel economy, intake air temperature, Eco indicator, degree of throttle opening and rate of acceleration The R15 V4 Racing Blue, ‘M’ and MotoGP Edition take things a step further by offering traction control and a quickshifter as part of the standard equipment. You could, however, opt for a quickshifter as an add on, on the base variants",
  },
  {
    brand: "Yamaha",
    model: "Fascino 125",
    price: "80,000",
    type: "commuter bike",
    img: "https://source.unsplash.com/random/200*100",
    specifications: {
      mileage: "-",
      "engine type": "Fan Cooled, 4 Stroke, SI Engine",
      "Max Power": "7.79 PS @ 8000 rpm",
      "Fuel Capacity": "5.3 L",
    },
    features: {
      "braking type": "Combi Brake System",
      speedometer: "Analogue",
      abs: "No",
      "seat opening switch": "Yes",
    },
    "key specs": {
      engine: "125 cc",
      power: "8.2 PS",
      brakes: "Disc",
      "tyre type": "Tubeless",
    },
    highlights:
      "The Fascino 125 Hybrid continues to use the BS6 Fascino’s styling but it is more evolved now. The disc variant gets an LED headlamp while the tail lamp continues the ‘V’ pattern. The grab handles have been revised as well. On the drum variant you get a chrome finish on the headlamp, front apron-mounted turn indicators and side panel trim; while the disc version gets a black finish. Sadly the drum Fascino still continues to use a halogen bulb headlamp and bulb tail lamp and turn indicators. The 125cc scooter, however, gets a new side-stand cutoff switch and an optional underseat USB charger. Yamaha also has now equipped the hybrid scooter with a digital instrument console complete with bluetooth connectivity (only for disc variant).",
  },

  {
    brand: "KTM",
    model: "RC 390",
    price: "2,78,000",
    type: "sport bike",
    img: "https://source.unsplash.com/random/200*100",
    specifications: {
      mileage: "-",
      "engine type": "Fan Cooled, 4 Stroke, SI Engine",
      "Max Power": "7.79 PS @ 8000 rpm",
      "Fuel Capacity": "5.3 L",
    },
    features: {
      "braking type": "Combi Brake System",
      speedometer: "Analogue",
      abs: "No",
      "seat opening switch": "Yes",
    },
    "key specs": {
      engine: "373.3 cc",
      power: "43.5 PS",
      brakes: "Double Disc",
      "tyre type": "Tubeless",
    },
    highlights:
      "The KTM RC 390 hasn’t received too many updates over the course of its life but it still continues to be a well-equipped motorcycle even today. It gets twin-projector headlights, all-digital LCD instrumentation, dual-channel ABS, a slipper clutch and ride-by-wire technology.",
  },
  {
    brand: "KTM",
    model: "Duke 200",
    price: "1,86,000",
    type: "sport bike",
    img: "https://source.unsplash.com/random/200*100",
    specifications: {
      mileage: "-",
      "engine type": "Fan Cooled, 4 Stroke, SI Engine",
      "Max Power": "7.79 PS @ 8000 rpm",
      "Fuel Capacity": "5.3 L",
    },
    features: {
      "braking type": "Combi Brake System",
      speedometer: "Analogue",
      abs: "No",
      "seat opening switch": "Yes",
    },
    "key specs": {
      engine: "199.5 cc",
      power: "25.83 PS",
      brakes: "Double Disc",
      "tyre type": "Tubeless",
    },
    highlights:
      "On the feature front, the Duke 200 gets a halogen headlamp running fork-like LED DRLs and a new LED tail lamp similar to the KTM 250 Duke. It retains the same digital instrument console as before with readouts such as a gear position indicator, real-time fuel efficiency, average fuel efficiency, service indicator, distance-to-empty gauge, clock, and side-stand warning light. Tell-tale lights sit above the speedometer along with a shift indicator placed in the centre.",
  },

  {
    brand: "Honda",
    model: "Activa 6G",
    price: "75,000",
    type: "commuter bike",
    img: "https://source.unsplash.com/random/200*100",
    specifications: {
      mileage: "-",
      "engine type": "Fan Cooled, 4 Stroke, SI Engine",
      "Max Power": "7.79 PS @ 8000 rpm",
      "Fuel Capacity": "5.3 L",
    },
    features: {
      "braking type": "Combi Brake System",
      speedometer: "Analogue",
      abs: "No",
      "seat opening switch": "Yes",
    },
    "key specs": {
      engine: "109.51 cc",
      power: "7.79 PS",
      brakes: "Drum",
      "tyre type": "Tubeless",
    },
    highlights:
      "Honda has increased the prices of select offerings in September 2021. Luckily, only certain commuter motorcycles have been affected while the prices of all the other models have remained unchanged. Honda top-selling scooter, the Activa 6G starts from Rs 69,080 and goes up to Rs 72,325.",
  },
  {
    brand: "Honda",
    model: "Hornet 2.0",
    price: "1,35,000",
    type: "sport bike",
    img: "https://source.unsplash.com/random/200*100",
    specifications: {
      mileage: "-",
      "engine type": "Fan Cooled, 4 Stroke, SI Engine",
      "Max Power": "7.79 PS @ 8000 rpm",
      "Fuel Capacity": "5.3 L",
    },
    features: {
      "braking type": "Combi Brake System",
      speedometer: "Analogue",
      abs: "No",
      "seat opening switch": "Yes",
    },
    "key specs": {
      engine: "184.4 cc",
      power: "17.26 PS",
      brakes: "Double Disc",
      "tyre type": "Tubeless",
    },
    highlights:
      "Honda has increased the prices of select offerings in September 2021. Luckily, only some of the commuter motorcycles have been affected while the prices of all the rest of the two-wheelers have remained unchanged.",
  },

  {
    brand: "Royal Enfield",
    model: "Classic 350",
    price: "1,90,000",
    type: "cruiser bike",
    img: "https://source.unsplash.com/random/200*100",
    specifications: {
      mileage: "-",
      "engine type": "Fan Cooled, 4 Stroke, SI Engine",
      "Max Power": "7.79 PS @ 8000 rpm",
      "Fuel Capacity": "5.3 L",
    },
    features: {
      "braking type": "Combi Brake System",
      speedometer: "Analogue",
      abs: "No",
      "seat opening switch": "Yes",
    },
    "key specs": {
      engine: "349.34 cc",
      power: "20.21 PS",
      brakes: "Double Disc",
      "tyre type": "Tubeless",
    },
    highlights:
      "Royal Enfield has launched the 2021 Royal Enfield Classic 350 in India. It is priced at Rs 1,84,374 for the base single-channel ABS variant (Redditch Series) and Rs 1,93,123 for the most affordable colour variant (Halcyon Series) with dual-channel ABS.",
  },
  {
    brand: "Royal Enfield",
    model: "Himalayan",
    price: "1,90,000",
    type: "cruiser bike",
    img: "https://source.unsplash.com/random/200*100",
    specifications: {
      mileage: "-",
      "engine type": "Fan Cooled, 4 Stroke, SI Engine",
      "Max Power": "7.79 PS @ 8000 rpm",
      "Fuel Capacity": "5.3 L",
    },
    features: {
      "braking type": "Combi Brake System",
      speedometer: "Analogue",
      abs: "No",
      "seat opening switch": "Yes",
    },
    "key specs": [
      { engine: "411 cc" },
      { power: "24.31 PS" },
      { brakes: "Double Disc" },
      { "tyre type": "Tube" },
    ],
    highlights:
      "Royal Enfield has launched the 2021 Royal Enfield Classic 350 in India. It is priced at Rs 1,84,374 for the base single-channel ABS variant (Redditch Series) and Rs 1,93,123 for the most affordable colour variant (Halcyon Series) with dual-channel ABS.",
  },
];

export { brands, models, bikeTypes, detailsByModel };

export default allBikesData;
