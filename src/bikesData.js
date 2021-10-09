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
      engine: {
        svg: "M8,3h9V6H14V8h5V9h1v4h1V10h3v9H21V16H20c-0.644,6.651-6.032,5.329-13,5-1.127-1.719-.633-1.355-3-2V16H3v3H0V10H3v3H4V10H6L7,8h4V6H8V3Zm4,2V9H9c-1.973,3-2.825.941-4,5H2V12H1v5H2V15H5c1.036,4.047.438,1.261,3,3l1,2h7c1.212-2.128,2.253-2.177,3-5h3v2h1V12H22v2H19V11a3.983,3.983,0,0,1-2-2H13V5h2V4H10V5h2ZM31,22",
        data: "803 cc",
      },
      brakes: {
        svg: "M1,21L0,9H1V3C6.232,2.682,6.592.955,10,0l9,2c1.212,2.128,2.253,2.177,3,5,3.54,3.345.915,7.922,0,12-2.128,1.212-2.177,2.253-5,3C12.69,26.478,6.716,21.488,1,21Zm8-1H7c1.139,1.139,0,.4,2,1,2.924,2.773,7.188-.308,10-1,1.656-3.642,2.942-5.233,3-11-1.361-1.165-1.528-1.825-2-4C16.358,3.344,14.767,2.058,9,2,7.861,3.139,9,2.4,7,3V4c3.516-.451,5.861-1.707,9,0V5c2.7,1.625,1.958-.871,3,3h1V9H18c-1.829-3.373-3.538-4.1-9-4V6H8V8H9c0.565-.664,2.341-2.693,4-2V7c3.315,0.851,2.9,2.263,5,4-0.574,2.01.12,0.865-1,2-0.851,3.315-2.263,2.9-4,5-2.391-.463-3.145-1.158-5-2v2C9.139,19.139,8.4,18,9,20ZM5,5c1.139,1.139,0,.4,2,1C5.861,4.861,7,5.6,5,5ZM4,7c-0.114,3.268-.569,8.3,1,10C5.114,13.732,5.569,8.7,4,7Zm6,3v2L7,11v2c1.139,1.139.4,0,1,2,1.139-1.139.4,0,1-2h2l-1,3h4V15c-1.139-1.139-.4,0-1-2,3.16,0.113,1.874,1.955,3-1H14V10h1L14,8c-1.139,1.139-.4,0-1,2H11V8L8,9C9.139,10.139,8,9.4,10,10Zm9,0c0.88,0.593,2.739.911,2,3H20v2H19V10Zm-8,1h2v2H11V11Zm7,6v2l-3,1V18h1C17.139,16.861,16,17.6,18,17ZM5,18c1.139,1.139,0,.4,2,1C5.861,17.861,7,18.6,5,18Z",
        data: "Double Disc",
      },
      "tyre type": {
        svg: "M9,0a34.23,34.23,0,0,1,8,1V2L11,1V2H7C4.89,5.522,2.338,5.33,2,11H1l1,6H1V15H0V9H1V6L3,5V4L5,3,6,1H9V0Zm8,2c2.835,0.7,2.887,1.783,5,3V7C20.033,6.394,17.926,3.734,17,2ZM8,4h8c3.093,5.185,4.085,2.668,4,12-5.185,3.093-2.668,4.085-12,4-0.7-1.129-3.949-3.891-4-4V8H5Zm3,4V5L8,6c0.844,1.135-.127.145,1,1C10.139,8.139,9,7.4,11,8Zm2-3V8l3-1V6H15C13.861,4.861,15,5.6,13,5Zm9,2c3.156,2.663,1.509,6.86,1,11-3.373,2.129-10.351,10.428-16,4l6,1V22h4c2.11-3.522,4.662-3.33,5-9h1ZM5,11H8L7,8c-1.135.844-.145-0.127-1,1C4.861,10.139,5.6,9,5,11Zm11,0h3L18,8H17V9C15.861,10.139,16.6,9,16,11ZM11,9c-1.66,3.07-2.905,4.775,2,6,0.944-1.8,1.385-1.575,2-4C13.2,10.056,13.426,9.615,11,9Zm0,1,3,1c-0.574,2.01.12,0.865-1,2v1c-2.01-.574-0.865.12-2-1H10V12ZM5,13l1,3c1.135-.844.145,0.127,1-1,1.139-1.139.4,0,1-2H5Zm11,0,1,3h1V15c1.139-1.139.4,0,1-2H16Zm-5,6V16L8,17v1H9C10.139,19.139,9,18.4,11,19Zm2-3v3l3-1V17H15C13.861,15.861,15,16.6,13,16ZM2,17c0.324,0.161,5,5,5,5H5V21C3.025,19.871,2.662,19.583,2,17Z",
        data: "Tubeless",
      },
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

    "key specsArr": ["engine", "power", "brakes", "tyre type"],

    "key specs": {
      engine: {
        svg: "M8,3h9V6H14V8h5V9h1v4h1V10h3v9H21V16H20c-0.644,6.651-6.032,5.329-13,5-1.127-1.719-.633-1.355-3-2V16H3v3H0V10H3v3H4V10H6L7,8h4V6H8V3Zm4,2V9H9c-1.973,3-2.825.941-4,5H2V12H1v5H2V15H5c1.036,4.047.438,1.261,3,3l1,2h7c1.212-2.128,2.253-2.177,3-5h3v2h1V12H22v2H19V11a3.983,3.983,0,0,1-2-2H13V5h2V4H10V5h2ZM31,22",
        data: "803 cc",
      },
      power: {
        svg: "M9,2h6L14,8h4a18.133,18.133,0,0,1-3,7l-2,1v2l-2,1-1,3H8l1-8H6C6.156,8.795,8.065,6.392,9,2Zm2,10v3h1V14c1.614-1.328,2.069-2.849,4-4V9H12a11.883,11.883,0,0,1,1-5H11V5C9.516,6.494,8.82,9.961,8,12h3Z",
        data: "72.8 PS",
      },
      brakes: {
        svg: "M1,21L0,9H1V3C6.232,2.682,6.592.955,10,0l9,2c1.212,2.128,2.253,2.177,3,5,3.54,3.345.915,7.922,0,12-2.128,1.212-2.177,2.253-5,3C12.69,26.478,6.716,21.488,1,21Zm8-1H7c1.139,1.139,0,.4,2,1,2.924,2.773,7.188-.308,10-1,1.656-3.642,2.942-5.233,3-11-1.361-1.165-1.528-1.825-2-4C16.358,3.344,14.767,2.058,9,2,7.861,3.139,9,2.4,7,3V4c3.516-.451,5.861-1.707,9,0V5c2.7,1.625,1.958-.871,3,3h1V9H18c-1.829-3.373-3.538-4.1-9-4V6H8V8H9c0.565-.664,2.341-2.693,4-2V7c3.315,0.851,2.9,2.263,5,4-0.574,2.01.12,0.865-1,2-0.851,3.315-2.263,2.9-4,5-2.391-.463-3.145-1.158-5-2v2C9.139,19.139,8.4,18,9,20ZM5,5c1.139,1.139,0,.4,2,1C5.861,4.861,7,5.6,5,5ZM4,7c-0.114,3.268-.569,8.3,1,10C5.114,13.732,5.569,8.7,4,7Zm6,3v2L7,11v2c1.139,1.139.4,0,1,2,1.139-1.139.4,0,1-2h2l-1,3h4V15c-1.139-1.139-.4,0-1-2,3.16,0.113,1.874,1.955,3-1H14V10h1L14,8c-1.139,1.139-.4,0-1,2H11V8L8,9C9.139,10.139,8,9.4,10,10Zm9,0c0.88,0.593,2.739.911,2,3H20v2H19V10Zm-8,1h2v2H11V11Zm7,6v2l-3,1V18h1C17.139,16.861,16,17.6,18,17ZM5,18c1.139,1.139,0,.4,2,1C5.861,17.861,7,18.6,5,18Z",
        data: "Double Disc",
      },
      "tyre type": {
        svg: "M9,0a34.23,34.23,0,0,1,8,1V2L11,1V2H7C4.89,5.522,2.338,5.33,2,11H1l1,6H1V15H0V9H1V6L3,5V4L5,3,6,1H9V0Zm8,2c2.835,0.7,2.887,1.783,5,3V7C20.033,6.394,17.926,3.734,17,2ZM8,4h8c3.093,5.185,4.085,2.668,4,12-5.185,3.093-2.668,4.085-12,4-0.7-1.129-3.949-3.891-4-4V8H5Zm3,4V5L8,6c0.844,1.135-.127.145,1,1C10.139,8.139,9,7.4,11,8Zm2-3V8l3-1V6H15C13.861,4.861,15,5.6,13,5Zm9,2c3.156,2.663,1.509,6.86,1,11-3.373,2.129-10.351,10.428-16,4l6,1V22h4c2.11-3.522,4.662-3.33,5-9h1ZM5,11H8L7,8c-1.135.844-.145-0.127-1,1C4.861,10.139,5.6,9,5,11Zm11,0h3L18,8H17V9C15.861,10.139,16.6,9,16,11ZM11,9c-1.66,3.07-2.905,4.775,2,6,0.944-1.8,1.385-1.575,2-4C13.2,10.056,13.426,9.615,11,9Zm0,1,3,1c-0.574,2.01.12,0.865-1,2v1c-2.01-.574-0.865.12-2-1H10V12ZM5,13l1,3c1.135-.844.145,0.127,1-1,1.139-1.139.4,0,1-2H5Zm11,0,1,3h1V15c1.139-1.139.4,0,1-2H16Zm-5,6V16L8,17v1H9C10.139,19.139,9,18.4,11,19Zm2-3v3l3-1V17H15C13.861,15.861,15,16.6,13,16ZM2,17c0.324,0.161,5,5,5,5H5V21C3.025,19.871,2.662,19.583,2,17Z",
        data: "Tubeless",
      },
    },
    // "key specs": {
    //   engine: "803 cc",
    //   power: "72.8 PS",
    //   brakes: "Double Disc",
    //   "tyre type": "Tubeless",
    // },
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

    "key specsArr": [
      "driving range",
      "battery capacity",
      "motor power",
      "max speed",
    ],

    "key specs": {
      "driving range": {
        svg: "M8,3h9V6H14V8h5V9h1v4h1V10h3v9H21V16H20c-0.644,6.651-6.032,5.329-13,5-1.127-1.719-.633-1.355-3-2V16H3v3H0V10H3v3H4V10H6L7,8h4V6H8V3Zm4,2V9H9c-1.973,3-2.825.941-4,5H2V12H1v5H2V15H5c1.036,4.047.438,1.261,3,3l1,2h7c1.212-2.128,2.253-2.177,3-5h3v2h1V12H22v2H19V11a3.983,3.983,0,0,1-2-2H13V5h2V4H10V5h2ZM31,22",
        data: "803 cc",
      },
      "battery capacity": {
        svg: "M9,2h6L14,8h4a18.133,18.133,0,0,1-3,7l-2,1v2l-2,1-1,3H8l1-8H6C6.156,8.795,8.065,6.392,9,2Zm2,10v3h1V14c1.614-1.328,2.069-2.849,4-4V9H12a11.883,11.883,0,0,1,1-5H11V5C9.516,6.494,8.82,9.961,8,12h3Z",
        data: "72.8 PS",
      },
      "motor power": {
        svg: "M1,21L0,9H1V3C6.232,2.682,6.592.955,10,0l9,2c1.212,2.128,2.253,2.177,3,5,3.54,3.345.915,7.922,0,12-2.128,1.212-2.177,2.253-5,3C12.69,26.478,6.716,21.488,1,21Zm8-1H7c1.139,1.139,0,.4,2,1,2.924,2.773,7.188-.308,10-1,1.656-3.642,2.942-5.233,3-11-1.361-1.165-1.528-1.825-2-4C16.358,3.344,14.767,2.058,9,2,7.861,3.139,9,2.4,7,3V4c3.516-.451,5.861-1.707,9,0V5c2.7,1.625,1.958-.871,3,3h1V9H18c-1.829-3.373-3.538-4.1-9-4V6H8V8H9c0.565-.664,2.341-2.693,4-2V7c3.315,0.851,2.9,2.263,5,4-0.574,2.01.12,0.865-1,2-0.851,3.315-2.263,2.9-4,5-2.391-.463-3.145-1.158-5-2v2C9.139,19.139,8.4,18,9,20ZM5,5c1.139,1.139,0,.4,2,1C5.861,4.861,7,5.6,5,5ZM4,7c-0.114,3.268-.569,8.3,1,10C5.114,13.732,5.569,8.7,4,7Zm6,3v2L7,11v2c1.139,1.139.4,0,1,2,1.139-1.139.4,0,1-2h2l-1,3h4V15c-1.139-1.139-.4,0-1-2,3.16,0.113,1.874,1.955,3-1H14V10h1L14,8c-1.139,1.139-.4,0-1,2H11V8L8,9C9.139,10.139,8,9.4,10,10Zm9,0c0.88,0.593,2.739.911,2,3H20v2H19V10Zm-8,1h2v2H11V11Zm7,6v2l-3,1V18h1C17.139,16.861,16,17.6,18,17ZM5,18c1.139,1.139,0,.4,2,1C5.861,17.861,7,18.6,5,18Z",
        data: "Double Disc",
      },
      "max speed": {
        svg: "M9,0a34.23,34.23,0,0,1,8,1V2L11,1V2H7C4.89,5.522,2.338,5.33,2,11H1l1,6H1V15H0V9H1V6L3,5V4L5,3,6,1H9V0Zm8,2c2.835,0.7,2.887,1.783,5,3V7C20.033,6.394,17.926,3.734,17,2ZM8,4h8c3.093,5.185,4.085,2.668,4,12-5.185,3.093-2.668,4.085-12,4-0.7-1.129-3.949-3.891-4-4V8H5Zm3,4V5L8,6c0.844,1.135-.127.145,1,1C10.139,8.139,9,7.4,11,8Zm2-3V8l3-1V6H15C13.861,4.861,15,5.6,13,5Zm9,2c3.156,2.663,1.509,6.86,1,11-3.373,2.129-10.351,10.428-16,4l6,1V22h4c2.11-3.522,4.662-3.33,5-9h1ZM5,11H8L7,8c-1.135.844-.145-0.127-1,1C4.861,10.139,5.6,9,5,11Zm11,0h3L18,8H17V9C15.861,10.139,16.6,9,16,11ZM11,9c-1.66,3.07-2.905,4.775,2,6,0.944-1.8,1.385-1.575,2-4C13.2,10.056,13.426,9.615,11,9Zm0,1,3,1c-0.574,2.01.12,0.865-1,2v1c-2.01-.574-0.865.12-2-1H10V12ZM5,13l1,3c1.135-.844.145,0.127,1-1,1.139-1.139.4,0,1-2H5Zm11,0,1,3h1V15c1.139-1.139.4,0,1-2H16Zm-5,6V16L8,17v1H9C10.139,19.139,9,18.4,11,19Zm2-3v3l3-1V17H15C13.861,15.861,15,16.6,13,16ZM2,17c0.324,0.161,5,5,5,5H5V21C3.025,19.871,2.662,19.583,2,17Z",
        data: "Tubeless",
      },
    },
    // "key specs": {
    //   "driving range": "181 km/charge",
    //   "battery capacity": "3.97 KWh",
    //   "motor power": "8500 W",
    //   "max speed": "115 kmph",
    // },
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

    "key specsArr": ["engine", "power", "brakes", "tyre type"],

    "key specs": {
      engine: {
        svg: "M8,3h9V6H14V8h5V9h1v4h1V10h3v9H21V16H20c-0.644,6.651-6.032,5.329-13,5-1.127-1.719-.633-1.355-3-2V16H3v3H0V10H3v3H4V10H6L7,8h4V6H8V3Zm4,2V9H9c-1.973,3-2.825.941-4,5H2V12H1v5H2V15H5c1.036,4.047.438,1.261,3,3l1,2h7c1.212-2.128,2.253-2.177,3-5h3v2h1V12H22v2H19V11a3.983,3.983,0,0,1-2-2H13V5h2V4H10V5h2ZM31,22",
        data: "1340 cc",
      },
      power: {
        svg: "M9,2h6L14,8h4a18.133,18.133,0,0,1-3,7l-2,1v2l-2,1-1,3H8l1-8H6C6.156,8.795,8.065,6.392,9,2Zm2,10v3h1V14c1.614-1.328,2.069-2.849,4-4V9H12a11.883,11.883,0,0,1,1-5H11V5C9.516,6.494,8.82,9.961,8,12h3Z",
        data: "190 PS",
      },
      brakes: {
        svg: "M1,21L0,9H1V3C6.232,2.682,6.592.955,10,0l9,2c1.212,2.128,2.253,2.177,3,5,3.54,3.345.915,7.922,0,12-2.128,1.212-2.177,2.253-5,3C12.69,26.478,6.716,21.488,1,21Zm8-1H7c1.139,1.139,0,.4,2,1,2.924,2.773,7.188-.308,10-1,1.656-3.642,2.942-5.233,3-11-1.361-1.165-1.528-1.825-2-4C16.358,3.344,14.767,2.058,9,2,7.861,3.139,9,2.4,7,3V4c3.516-.451,5.861-1.707,9,0V5c2.7,1.625,1.958-.871,3,3h1V9H18c-1.829-3.373-3.538-4.1-9-4V6H8V8H9c0.565-.664,2.341-2.693,4-2V7c3.315,0.851,2.9,2.263,5,4-0.574,2.01.12,0.865-1,2-0.851,3.315-2.263,2.9-4,5-2.391-.463-3.145-1.158-5-2v2C9.139,19.139,8.4,18,9,20ZM5,5c1.139,1.139,0,.4,2,1C5.861,4.861,7,5.6,5,5ZM4,7c-0.114,3.268-.569,8.3,1,10C5.114,13.732,5.569,8.7,4,7Zm6,3v2L7,11v2c1.139,1.139.4,0,1,2,1.139-1.139.4,0,1-2h2l-1,3h4V15c-1.139-1.139-.4,0-1-2,3.16,0.113,1.874,1.955,3-1H14V10h1L14,8c-1.139,1.139-.4,0-1,2H11V8L8,9C9.139,10.139,8,9.4,10,10Zm9,0c0.88,0.593,2.739.911,2,3H20v2H19V10Zm-8,1h2v2H11V11Zm7,6v2l-3,1V18h1C17.139,16.861,16,17.6,18,17ZM5,18c1.139,1.139,0,.4,2,1C5.861,17.861,7,18.6,5,18Z",
        data: "Double Disc",
      },
      "tyre type": {
        svg: "M9,0a34.23,34.23,0,0,1,8,1V2L11,1V2H7C4.89,5.522,2.338,5.33,2,11H1l1,6H1V15H0V9H1V6L3,5V4L5,3,6,1H9V0Zm8,2c2.835,0.7,2.887,1.783,5,3V7C20.033,6.394,17.926,3.734,17,2ZM8,4h8c3.093,5.185,4.085,2.668,4,12-5.185,3.093-2.668,4.085-12,4-0.7-1.129-3.949-3.891-4-4V8H5Zm3,4V5L8,6c0.844,1.135-.127.145,1,1C10.139,8.139,9,7.4,11,8Zm2-3V8l3-1V6H15C13.861,4.861,15,5.6,13,5Zm9,2c3.156,2.663,1.509,6.86,1,11-3.373,2.129-10.351,10.428-16,4l6,1V22h4c2.11-3.522,4.662-3.33,5-9h1ZM5,11H8L7,8c-1.135.844-.145-0.127-1,1C4.861,10.139,5.6,9,5,11Zm11,0h3L18,8H17V9C15.861,10.139,16.6,9,16,11ZM11,9c-1.66,3.07-2.905,4.775,2,6,0.944-1.8,1.385-1.575,2-4C13.2,10.056,13.426,9.615,11,9Zm0,1,3,1c-0.574,2.01.12,0.865-1,2v1c-2.01-.574-0.865.12-2-1H10V12ZM5,13l1,3c1.135-.844.145,0.127,1-1,1.139-1.139.4,0,1-2H5Zm11,0,1,3h1V15c1.139-1.139.4,0,1-2H16Zm-5,6V16L8,17v1H9C10.139,19.139,9,18.4,11,19Zm2-3v3l3-1V17H15C13.861,15.861,15,16.6,13,16ZM2,17c0.324,0.161,5,5,5,5H5V21C3.025,19.871,2.662,19.583,2,17Z",
        data: "Tubeless",
      },
    },

    // "key specs": {
    //   engine: "1340 cc",
    //   power: "190 PS",
    //   brakes: "Double Disc",
    //   "tyre type": "Tubeless",
    // },
    highlights:
      "Suzuki has given the 2021 Hayabusa a host of new features. The bike now gets LED lights, a new TFT inlay in the instrument console that displays the different electronic settings. For the first time, the Hayabusa receives a comprehensive electronics suite, which includes 10-level traction control, 10-level wheelie control, three levels of engine brake control and launch control, and the new Suzuki Drive Mode Selector (SDMS). The SDMS comprises three presets and three user-defined modes. The new Hayabusa even gets a quickshifter and hill assist control.",
  },
  {
    brand: "Suzuki",
    model: "V Strom 650XT",
    price: "9,00,000",
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
      engine: {
        svg: "M8,3h9V6H14V8h5V9h1v4h1V10h3v9H21V16H20c-0.644,6.651-6.032,5.329-13,5-1.127-1.719-.633-1.355-3-2V16H3v3H0V10H3v3H4V10H6L7,8h4V6H8V3Zm4,2V9H9c-1.973,3-2.825.941-4,5H2V12H1v5H2V15H5c1.036,4.047.438,1.261,3,3l1,2h7c1.212-2.128,2.253-2.177,3-5h3v2h1V12H22v2H19V11a3.983,3.983,0,0,1-2-2H13V5h2V4H10V5h2ZM31,22",
        data: "645 cc",
      },
      brakes: {
        svg: "M1,21L0,9H1V3C6.232,2.682,6.592.955,10,0l9,2c1.212,2.128,2.253,2.177,3,5,3.54,3.345.915,7.922,0,12-2.128,1.212-2.177,2.253-5,3C12.69,26.478,6.716,21.488,1,21Zm8-1H7c1.139,1.139,0,.4,2,1,2.924,2.773,7.188-.308,10-1,1.656-3.642,2.942-5.233,3-11-1.361-1.165-1.528-1.825-2-4C16.358,3.344,14.767,2.058,9,2,7.861,3.139,9,2.4,7,3V4c3.516-.451,5.861-1.707,9,0V5c2.7,1.625,1.958-.871,3,3h1V9H18c-1.829-3.373-3.538-4.1-9-4V6H8V8H9c0.565-.664,2.341-2.693,4-2V7c3.315,0.851,2.9,2.263,5,4-0.574,2.01.12,0.865-1,2-0.851,3.315-2.263,2.9-4,5-2.391-.463-3.145-1.158-5-2v2C9.139,19.139,8.4,18,9,20ZM5,5c1.139,1.139,0,.4,2,1C5.861,4.861,7,5.6,5,5ZM4,7c-0.114,3.268-.569,8.3,1,10C5.114,13.732,5.569,8.7,4,7Zm6,3v2L7,11v2c1.139,1.139.4,0,1,2,1.139-1.139.4,0,1-2h2l-1,3h4V15c-1.139-1.139-.4,0-1-2,3.16,0.113,1.874,1.955,3-1H14V10h1L14,8c-1.139,1.139-.4,0-1,2H11V8L8,9C9.139,10.139,8,9.4,10,10Zm9,0c0.88,0.593,2.739.911,2,3H20v2H19V10Zm-8,1h2v2H11V11Zm7,6v2l-3,1V18h1C17.139,16.861,16,17.6,18,17ZM5,18c1.139,1.139,0,.4,2,1C5.861,17.861,7,18.6,5,18Z",
        data: "Double Disc",
      },
      "tyre type": {
        svg: "M9,0a34.23,34.23,0,0,1,8,1V2L11,1V2H7C4.89,5.522,2.338,5.33,2,11H1l1,6H1V15H0V9H1V6L3,5V4L5,3,6,1H9V0Zm8,2c2.835,0.7,2.887,1.783,5,3V7C20.033,6.394,17.926,3.734,17,2ZM8,4h8c3.093,5.185,4.085,2.668,4,12-5.185,3.093-2.668,4.085-12,4-0.7-1.129-3.949-3.891-4-4V8H5Zm3,4V5L8,6c0.844,1.135-.127.145,1,1C10.139,8.139,9,7.4,11,8Zm2-3V8l3-1V6H15C13.861,4.861,15,5.6,13,5Zm9,2c3.156,2.663,1.509,6.86,1,11-3.373,2.129-10.351,10.428-16,4l6,1V22h4c2.11-3.522,4.662-3.33,5-9h1ZM5,11H8L7,8c-1.135.844-.145-0.127-1,1C4.861,10.139,5.6,9,5,11Zm11,0h3L18,8H17V9C15.861,10.139,16.6,9,16,11ZM11,9c-1.66,3.07-2.905,4.775,2,6,0.944-1.8,1.385-1.575,2-4C13.2,10.056,13.426,9.615,11,9Zm0,1,3,1c-0.574,2.01.12,0.865-1,2v1c-2.01-.574-0.865.12-2-1H10V12ZM5,13l1,3c1.135-.844.145,0.127,1-1,1.139-1.139.4,0,1-2H5Zm11,0,1,3h1V15c1.139-1.139.4,0,1-2H16Zm-5,6V16L8,17v1H9C10.139,19.139,9,18.4,11,19Zm2-3v3l3-1V17H15C13.861,15.861,15,16.6,13,16ZM2,17c0.324,0.161,5,5,5,5H5V21C3.025,19.871,2.662,19.583,2,17Z",
        data: "Tubeless",
      },
    },

    // "key specs": {
    //   engine: "645 cc",
    //   power: "-",
    //   brakes: "Double Disc",
    //   "tyre type": "Tubeless",
    // },
    highlights:
      "Electronic rider aids like three levels of switchable traction control and dual-channel ABS come as standard. The settings can be altered to suit the rider via the bike’s analogue-digital instrument console. ",
  },

  {
    brand: "Hero",
    model: "Glamour",
    price: "83,000",
    type: "commuter bike",
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

    "key specsArr": ["engine", "power", "brakes", "tyre type"],

    "key specs": {
      engine: {
        svg: "M8,3h9V6H14V8h5V9h1v4h1V10h3v9H21V16H20c-0.644,6.651-6.032,5.329-13,5-1.127-1.719-.633-1.355-3-2V16H3v3H0V10H3v3H4V10H6L7,8h4V6H8V3Zm4,2V9H9c-1.973,3-2.825.941-4,5H2V12H1v5H2V15H5c1.036,4.047.438,1.261,3,3l1,2h7c1.212-2.128,2.253-2.177,3-5h3v2h1V12H22v2H19V11a3.983,3.983,0,0,1-2-2H13V5h2V4H10V5h2ZM31,22",
        data: "124.7 cc",
      },
      power: {
        svg: "M9,2h6L14,8h4a18.133,18.133,0,0,1-3,7l-2,1v2l-2,1-1,3H8l1-8H6C6.156,8.795,8.065,6.392,9,2Zm2,10v3h1V14c1.614-1.328,2.069-2.849,4-4V9H12a11.883,11.883,0,0,1,1-5H11V5C9.516,6.494,8.82,9.961,8,12h3Z",
        data: "10.84 PS",
      },
      brakes: {
        svg: "M1,21L0,9H1V3C6.232,2.682,6.592.955,10,0l9,2c1.212,2.128,2.253,2.177,3,5,3.54,3.345.915,7.922,0,12-2.128,1.212-2.177,2.253-5,3C12.69,26.478,6.716,21.488,1,21Zm8-1H7c1.139,1.139,0,.4,2,1,2.924,2.773,7.188-.308,10-1,1.656-3.642,2.942-5.233,3-11-1.361-1.165-1.528-1.825-2-4C16.358,3.344,14.767,2.058,9,2,7.861,3.139,9,2.4,7,3V4c3.516-.451,5.861-1.707,9,0V5c2.7,1.625,1.958-.871,3,3h1V9H18c-1.829-3.373-3.538-4.1-9-4V6H8V8H9c0.565-.664,2.341-2.693,4-2V7c3.315,0.851,2.9,2.263,5,4-0.574,2.01.12,0.865-1,2-0.851,3.315-2.263,2.9-4,5-2.391-.463-3.145-1.158-5-2v2C9.139,19.139,8.4,18,9,20ZM5,5c1.139,1.139,0,.4,2,1C5.861,4.861,7,5.6,5,5ZM4,7c-0.114,3.268-.569,8.3,1,10C5.114,13.732,5.569,8.7,4,7Zm6,3v2L7,11v2c1.139,1.139.4,0,1,2,1.139-1.139.4,0,1-2h2l-1,3h4V15c-1.139-1.139-.4,0-1-2,3.16,0.113,1.874,1.955,3-1H14V10h1L14,8c-1.139,1.139-.4,0-1,2H11V8L8,9C9.139,10.139,8,9.4,10,10Zm9,0c0.88,0.593,2.739.911,2,3H20v2H19V10Zm-8,1h2v2H11V11Zm7,6v2l-3,1V18h1C17.139,16.861,16,17.6,18,17ZM5,18c1.139,1.139,0,.4,2,1C5.861,17.861,7,18.6,5,18Z",
        data: "Disc",
      },
      "tyre type": {
        svg: "M9,0a34.23,34.23,0,0,1,8,1V2L11,1V2H7C4.89,5.522,2.338,5.33,2,11H1l1,6H1V15H0V9H1V6L3,5V4L5,3,6,1H9V0Zm8,2c2.835,0.7,2.887,1.783,5,3V7C20.033,6.394,17.926,3.734,17,2ZM8,4h8c3.093,5.185,4.085,2.668,4,12-5.185,3.093-2.668,4.085-12,4-0.7-1.129-3.949-3.891-4-4V8H5Zm3,4V5L8,6c0.844,1.135-.127.145,1,1C10.139,8.139,9,7.4,11,8Zm2-3V8l3-1V6H15C13.861,4.861,15,5.6,13,5Zm9,2c3.156,2.663,1.509,6.86,1,11-3.373,2.129-10.351,10.428-16,4l6,1V22h4c2.11-3.522,4.662-3.33,5-9h1ZM5,11H8L7,8c-1.135.844-.145-0.127-1,1C4.861,10.139,5.6,9,5,11Zm11,0h3L18,8H17V9C15.861,10.139,16.6,9,16,11ZM11,9c-1.66,3.07-2.905,4.775,2,6,0.944-1.8,1.385-1.575,2-4C13.2,10.056,13.426,9.615,11,9Zm0,1,3,1c-0.574,2.01.12,0.865-1,2v1c-2.01-.574-0.865.12-2-1H10V12ZM5,13l1,3c1.135-.844.145,0.127,1-1,1.139-1.139.4,0,1-2H5Zm11,0,1,3h1V15c1.139-1.139.4,0,1-2H16Zm-5,6V16L8,17v1H9C10.139,19.139,9,18.4,11,19Zm2-3v3l3-1V17H15C13.861,15.861,15,16.6,13,16ZM2,17c0.324,0.161,5,5,5,5H5V21C3.025,19.871,2.662,19.583,2,17Z",
        data: "Tubeless",
      },
    },

    // "key specs": {
    //   engine: "124.7 cc",
    //   power: "10.84 PS",
    //   brakes: "Disc",
    //   "tyre type": "Tubeless",
    // },
    highlights:
      "While the standard variant of the Glamour only has CBS, i3S start-stop system, real-time mileage indicator and Auto Sail Technology (essentially crawl assist), the Glamour Xtec comes loaded with segment-first features like an integrated USB charging port, Bluetooth connectivity, turn-by-turn navigation with Google map connectivity, a gear position indicator, a bank angle sensor that shuts off the engine during a fall and side-stand engine cut off. Moreover, it also gets an LED headlight which the standard variant misses out on. The bike is available in four colours: Sports Red, Tornado Grey, Techno Blue and Radiant Red.",
  },
  {
    brand: "Hero",
    model: "Splendor Plus",
    price: "68,000",
    type: "commuter bike",
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

    "key specsArr": ["engine", "power", "brakes", "tyre type"],

    "key specs": {
      engine: {
        svg: "M8,3h9V6H14V8h5V9h1v4h1V10h3v9H21V16H20c-0.644,6.651-6.032,5.329-13,5-1.127-1.719-.633-1.355-3-2V16H3v3H0V10H3v3H4V10H6L7,8h4V6H8V3Zm4,2V9H9c-1.973,3-2.825.941-4,5H2V12H1v5H2V15H5c1.036,4.047.438,1.261,3,3l1,2h7c1.212-2.128,2.253-2.177,3-5h3v2h1V12H22v2H19V11a3.983,3.983,0,0,1-2-2H13V5h2V4H10V5h2ZM31,22",
        data: "97.2 cc",
      },
      power: {
        svg: "M9,2h6L14,8h4a18.133,18.133,0,0,1-3,7l-2,1v2l-2,1-1,3H8l1-8H6C6.156,8.795,8.065,6.392,9,2Zm2,10v3h1V14c1.614-1.328,2.069-2.849,4-4V9H12a11.883,11.883,0,0,1,1-5H11V5C9.516,6.494,8.82,9.961,8,12h3Z",
        data: "8.02 PS",
      },
      brakes: {
        svg: "M1,21L0,9H1V3C6.232,2.682,6.592.955,10,0l9,2c1.212,2.128,2.253,2.177,3,5,3.54,3.345.915,7.922,0,12-2.128,1.212-2.177,2.253-5,3C12.69,26.478,6.716,21.488,1,21Zm8-1H7c1.139,1.139,0,.4,2,1,2.924,2.773,7.188-.308,10-1,1.656-3.642,2.942-5.233,3-11-1.361-1.165-1.528-1.825-2-4C16.358,3.344,14.767,2.058,9,2,7.861,3.139,9,2.4,7,3V4c3.516-.451,5.861-1.707,9,0V5c2.7,1.625,1.958-.871,3,3h1V9H18c-1.829-3.373-3.538-4.1-9-4V6H8V8H9c0.565-.664,2.341-2.693,4-2V7c3.315,0.851,2.9,2.263,5,4-0.574,2.01.12,0.865-1,2-0.851,3.315-2.263,2.9-4,5-2.391-.463-3.145-1.158-5-2v2C9.139,19.139,8.4,18,9,20ZM5,5c1.139,1.139,0,.4,2,1C5.861,4.861,7,5.6,5,5ZM4,7c-0.114,3.268-.569,8.3,1,10C5.114,13.732,5.569,8.7,4,7Zm6,3v2L7,11v2c1.139,1.139.4,0,1,2,1.139-1.139.4,0,1-2h2l-1,3h4V15c-1.139-1.139-.4,0-1-2,3.16,0.113,1.874,1.955,3-1H14V10h1L14,8c-1.139,1.139-.4,0-1,2H11V8L8,9C9.139,10.139,8,9.4,10,10Zm9,0c0.88,0.593,2.739.911,2,3H20v2H19V10Zm-8,1h2v2H11V11Zm7,6v2l-3,1V18h1C17.139,16.861,16,17.6,18,17ZM5,18c1.139,1.139,0,.4,2,1C5.861,17.861,7,18.6,5,18Z",
        data: "Drum",
      },
      "tyre type": {
        svg: "M9,0a34.23,34.23,0,0,1,8,1V2L11,1V2H7C4.89,5.522,2.338,5.33,2,11H1l1,6H1V15H0V9H1V6L3,5V4L5,3,6,1H9V0Zm8,2c2.835,0.7,2.887,1.783,5,3V7C20.033,6.394,17.926,3.734,17,2ZM8,4h8c3.093,5.185,4.085,2.668,4,12-5.185,3.093-2.668,4.085-12,4-0.7-1.129-3.949-3.891-4-4V8H5Zm3,4V5L8,6c0.844,1.135-.127.145,1,1C10.139,8.139,9,7.4,11,8Zm2-3V8l3-1V6H15C13.861,4.861,15,5.6,13,5Zm9,2c3.156,2.663,1.509,6.86,1,11-3.373,2.129-10.351,10.428-16,4l6,1V22h4c2.11-3.522,4.662-3.33,5-9h1ZM5,11H8L7,8c-1.135.844-.145-0.127-1,1C4.861,10.139,5.6,9,5,11Zm11,0h3L18,8H17V9C15.861,10.139,16.6,9,16,11ZM11,9c-1.66,3.07-2.905,4.775,2,6,0.944-1.8,1.385-1.575,2-4C13.2,10.056,13.426,9.615,11,9Zm0,1,3,1c-0.574,2.01.12,0.865-1,2v1c-2.01-.574-0.865.12-2-1H10V12ZM5,13l1,3c1.135-.844.145,0.127,1-1,1.139-1.139.4,0,1-2H5Zm11,0,1,3h1V15c1.139-1.139.4,0,1-2H16Zm-5,6V16L8,17v1H9C10.139,19.139,9,18.4,11,19Zm2-3v3l3-1V17H15C13.861,15.861,15,16.6,13,16ZM2,17c0.324,0.161,5,5,5,5H5V21C3.025,19.871,2.662,19.583,2,17Z",
        data: "Tubeless",
      },
    },

    // "key specs": {
    //   engine: "97.2 cc",
    //   power: "8.02 PS",
    //   brakes: "Drum",
    //   "tyre type": "Tubeless",
    // },
    highlights:
      "The Hero Splendor BS6 remains a no-frills motorcycle. It gets a basic lighting system and an analogue console. This basic instrumentation reads out only the speed, total distance covered, and fuel level. The bikini fairing and the iconic rectangular headlight have been synonymous with the Splendor. The i3S variant, as the name suggests, comes with the Idle Stop-Start System. This feature turns off the engine when it idles for more than 5 seconds in traffic. The engine turns back on once the clutch lever is pulled. This helps it extract better mileage out of the motorcycle, especially on traffic-riddled roads.",
  },

  {
    brand: "Yamaha",
    model: "R15 V4",
    price: "1,86,000",
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

    "key specsArr": ["engine", "power", "brakes", "tyre type"],

    "key specs": {
      engine: {
        svg: "M8,3h9V6H14V8h5V9h1v4h1V10h3v9H21V16H20c-0.644,6.651-6.032,5.329-13,5-1.127-1.719-.633-1.355-3-2V16H3v3H0V10H3v3H4V10H6L7,8h4V6H8V3Zm4,2V9H9c-1.973,3-2.825.941-4,5H2V12H1v5H2V15H5c1.036,4.047.438,1.261,3,3l1,2h7c1.212-2.128,2.253-2.177,3-5h3v2h1V12H22v2H19V11a3.983,3.983,0,0,1-2-2H13V5h2V4H10V5h2ZM31,22",
        data: "155 cc",
      },
      power: {
        svg: "M9,2h6L14,8h4a18.133,18.133,0,0,1-3,7l-2,1v2l-2,1-1,3H8l1-8H6C6.156,8.795,8.065,6.392,9,2Zm2,10v3h1V14c1.614-1.328,2.069-2.849,4-4V9H12a11.883,11.883,0,0,1,1-5H11V5C9.516,6.494,8.82,9.961,8,12h3Z",
        data: "18.4 PS",
      },
      brakes: {
        svg: "M1,21L0,9H1V3C6.232,2.682,6.592.955,10,0l9,2c1.212,2.128,2.253,2.177,3,5,3.54,3.345.915,7.922,0,12-2.128,1.212-2.177,2.253-5,3C12.69,26.478,6.716,21.488,1,21Zm8-1H7c1.139,1.139,0,.4,2,1,2.924,2.773,7.188-.308,10-1,1.656-3.642,2.942-5.233,3-11-1.361-1.165-1.528-1.825-2-4C16.358,3.344,14.767,2.058,9,2,7.861,3.139,9,2.4,7,3V4c3.516-.451,5.861-1.707,9,0V5c2.7,1.625,1.958-.871,3,3h1V9H18c-1.829-3.373-3.538-4.1-9-4V6H8V8H9c0.565-.664,2.341-2.693,4-2V7c3.315,0.851,2.9,2.263,5,4-0.574,2.01.12,0.865-1,2-0.851,3.315-2.263,2.9-4,5-2.391-.463-3.145-1.158-5-2v2C9.139,19.139,8.4,18,9,20ZM5,5c1.139,1.139,0,.4,2,1C5.861,4.861,7,5.6,5,5ZM4,7c-0.114,3.268-.569,8.3,1,10C5.114,13.732,5.569,8.7,4,7Zm6,3v2L7,11v2c1.139,1.139.4,0,1,2,1.139-1.139.4,0,1-2h2l-1,3h4V15c-1.139-1.139-.4,0-1-2,3.16,0.113,1.874,1.955,3-1H14V10h1L14,8c-1.139,1.139-.4,0-1,2H11V8L8,9C9.139,10.139,8,9.4,10,10Zm9,0c0.88,0.593,2.739.911,2,3H20v2H19V10Zm-8,1h2v2H11V11Zm7,6v2l-3,1V18h1C17.139,16.861,16,17.6,18,17ZM5,18c1.139,1.139,0,.4,2,1C5.861,17.861,7,18.6,5,18Z",
        data: "Double Disc",
      },
      "tyre type": {
        svg: "M9,0a34.23,34.23,0,0,1,8,1V2L11,1V2H7C4.89,5.522,2.338,5.33,2,11H1l1,6H1V15H0V9H1V6L3,5V4L5,3,6,1H9V0Zm8,2c2.835,0.7,2.887,1.783,5,3V7C20.033,6.394,17.926,3.734,17,2ZM8,4h8c3.093,5.185,4.085,2.668,4,12-5.185,3.093-2.668,4.085-12,4-0.7-1.129-3.949-3.891-4-4V8H5Zm3,4V5L8,6c0.844,1.135-.127.145,1,1C10.139,8.139,9,7.4,11,8Zm2-3V8l3-1V6H15C13.861,4.861,15,5.6,13,5Zm9,2c3.156,2.663,1.509,6.86,1,11-3.373,2.129-10.351,10.428-16,4l6,1V22h4c2.11-3.522,4.662-3.33,5-9h1ZM5,11H8L7,8c-1.135.844-.145-0.127-1,1C4.861,10.139,5.6,9,5,11Zm11,0h3L18,8H17V9C15.861,10.139,16.6,9,16,11ZM11,9c-1.66,3.07-2.905,4.775,2,6,0.944-1.8,1.385-1.575,2-4C13.2,10.056,13.426,9.615,11,9Zm0,1,3,1c-0.574,2.01.12,0.865-1,2v1c-2.01-.574-0.865.12-2-1H10V12ZM5,13l1,3c1.135-.844.145,0.127,1-1,1.139-1.139.4,0,1-2H5Zm11,0,1,3h1V15c1.139-1.139.4,0,1-2H16Zm-5,6V16L8,17v1H9C10.139,19.139,9,18.4,11,19Zm2-3v3l3-1V17H15C13.861,15.861,15,16.6,13,16ZM2,17c0.324,0.161,5,5,5,5H5V21C3.025,19.871,2.662,19.583,2,17Z",
        data: "Tubeless",
      },
    },

    // "key specs": {
    //   engine: "155 cc",
    //   power: "18.4 PS",
    //   brakes: "Double Disc",
    //   "tyre type": "Tubeless",
    // },
    highlights:
      "The fourth generation of the R15 comes packed to the teeth with features. It gets a revised front fascia featuring a new Bi-functional LED headlamp flanked by LED DRLs, and a new full-digital instrument console with Yamaha's Y-Connect app. The display gets modes (Street and Track), along with a lap timer, gear position indicator, call/message alerts, mobile battery status, connection status, average fuel efficiency and last parked location. You can also access information like instantaneous fuel economy, intake air temperature, Eco indicator, degree of throttle opening and rate of acceleration The R15 V4 Racing Blue, ‘M’ and MotoGP Edition take things a step further by offering traction control and a quickshifter as part of the standard equipment. You could, however, opt for a quickshifter as an add on, on the base variants",
  },
  {
    brand: "Yamaha",
    model: "Fascino 125",
    price: "80,000",
    type: "commuter bike",
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

    "key specsArr": ["engine", "power", "brakes", "tyre type"],

    "key specs": {
      engine: {
        svg: "M8,3h9V6H14V8h5V9h1v4h1V10h3v9H21V16H20c-0.644,6.651-6.032,5.329-13,5-1.127-1.719-.633-1.355-3-2V16H3v3H0V10H3v3H4V10H6L7,8h4V6H8V3Zm4,2V9H9c-1.973,3-2.825.941-4,5H2V12H1v5H2V15H5c1.036,4.047.438,1.261,3,3l1,2h7c1.212-2.128,2.253-2.177,3-5h3v2h1V12H22v2H19V11a3.983,3.983,0,0,1-2-2H13V5h2V4H10V5h2ZM31,22",
        data: "125 cc",
      },
      power: {
        svg: "M9,2h6L14,8h4a18.133,18.133,0,0,1-3,7l-2,1v2l-2,1-1,3H8l1-8H6C6.156,8.795,8.065,6.392,9,2Zm2,10v3h1V14c1.614-1.328,2.069-2.849,4-4V9H12a11.883,11.883,0,0,1,1-5H11V5C9.516,6.494,8.82,9.961,8,12h3Z",
        data: "8.2 PS",
      },
      brakes: {
        svg: "M1,21L0,9H1V3C6.232,2.682,6.592.955,10,0l9,2c1.212,2.128,2.253,2.177,3,5,3.54,3.345.915,7.922,0,12-2.128,1.212-2.177,2.253-5,3C12.69,26.478,6.716,21.488,1,21Zm8-1H7c1.139,1.139,0,.4,2,1,2.924,2.773,7.188-.308,10-1,1.656-3.642,2.942-5.233,3-11-1.361-1.165-1.528-1.825-2-4C16.358,3.344,14.767,2.058,9,2,7.861,3.139,9,2.4,7,3V4c3.516-.451,5.861-1.707,9,0V5c2.7,1.625,1.958-.871,3,3h1V9H18c-1.829-3.373-3.538-4.1-9-4V6H8V8H9c0.565-.664,2.341-2.693,4-2V7c3.315,0.851,2.9,2.263,5,4-0.574,2.01.12,0.865-1,2-0.851,3.315-2.263,2.9-4,5-2.391-.463-3.145-1.158-5-2v2C9.139,19.139,8.4,18,9,20ZM5,5c1.139,1.139,0,.4,2,1C5.861,4.861,7,5.6,5,5ZM4,7c-0.114,3.268-.569,8.3,1,10C5.114,13.732,5.569,8.7,4,7Zm6,3v2L7,11v2c1.139,1.139.4,0,1,2,1.139-1.139.4,0,1-2h2l-1,3h4V15c-1.139-1.139-.4,0-1-2,3.16,0.113,1.874,1.955,3-1H14V10h1L14,8c-1.139,1.139-.4,0-1,2H11V8L8,9C9.139,10.139,8,9.4,10,10Zm9,0c0.88,0.593,2.739.911,2,3H20v2H19V10Zm-8,1h2v2H11V11Zm7,6v2l-3,1V18h1C17.139,16.861,16,17.6,18,17ZM5,18c1.139,1.139,0,.4,2,1C5.861,17.861,7,18.6,5,18Z",
        data: "Disc",
      },
      "tyre type": {
        svg: "M9,0a34.23,34.23,0,0,1,8,1V2L11,1V2H7C4.89,5.522,2.338,5.33,2,11H1l1,6H1V15H0V9H1V6L3,5V4L5,3,6,1H9V0Zm8,2c2.835,0.7,2.887,1.783,5,3V7C20.033,6.394,17.926,3.734,17,2ZM8,4h8c3.093,5.185,4.085,2.668,4,12-5.185,3.093-2.668,4.085-12,4-0.7-1.129-3.949-3.891-4-4V8H5Zm3,4V5L8,6c0.844,1.135-.127.145,1,1C10.139,8.139,9,7.4,11,8Zm2-3V8l3-1V6H15C13.861,4.861,15,5.6,13,5Zm9,2c3.156,2.663,1.509,6.86,1,11-3.373,2.129-10.351,10.428-16,4l6,1V22h4c2.11-3.522,4.662-3.33,5-9h1ZM5,11H8L7,8c-1.135.844-.145-0.127-1,1C4.861,10.139,5.6,9,5,11Zm11,0h3L18,8H17V9C15.861,10.139,16.6,9,16,11ZM11,9c-1.66,3.07-2.905,4.775,2,6,0.944-1.8,1.385-1.575,2-4C13.2,10.056,13.426,9.615,11,9Zm0,1,3,1c-0.574,2.01.12,0.865-1,2v1c-2.01-.574-0.865.12-2-1H10V12ZM5,13l1,3c1.135-.844.145,0.127,1-1,1.139-1.139.4,0,1-2H5Zm11,0,1,3h1V15c1.139-1.139.4,0,1-2H16Zm-5,6V16L8,17v1H9C10.139,19.139,9,18.4,11,19Zm2-3v3l3-1V17H15C13.861,15.861,15,16.6,13,16ZM2,17c0.324,0.161,5,5,5,5H5V21C3.025,19.871,2.662,19.583,2,17Z",
        data: "Tubeless",
      },
    },

    // "key specs": {
    //   engine: "125 cc",
    //   power: "8.2 PS",
    //   brakes: "Disc",
    //   "tyre type": "Tubeless",
    // },
    highlights:
      "The Fascino 125 Hybrid continues to use the BS6 Fascino’s styling but it is more evolved now. The disc variant gets an LED headlamp while the tail lamp continues the ‘V’ pattern. The grab handles have been revised as well. On the drum variant you get a chrome finish on the headlamp, front apron-mounted turn indicators and side panel trim; while the disc version gets a black finish. Sadly the drum Fascino still continues to use a halogen bulb headlamp and bulb tail lamp and turn indicators. The 125cc scooter, however, gets a new side-stand cutoff switch and an optional underseat USB charger. Yamaha also has now equipped the hybrid scooter with a digital instrument console complete with bluetooth connectivity (only for disc variant).",
  },

  {
    brand: "KTM",
    model: "RC 390",
    price: "2,78,000",
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

    "key specsArr": ["engine", "power", "brakes", "tyre type"],

    "key specs": {
      engine: {
        svg: "M8,3h9V6H14V8h5V9h1v4h1V10h3v9H21V16H20c-0.644,6.651-6.032,5.329-13,5-1.127-1.719-.633-1.355-3-2V16H3v3H0V10H3v3H4V10H6L7,8h4V6H8V3Zm4,2V9H9c-1.973,3-2.825.941-4,5H2V12H1v5H2V15H5c1.036,4.047.438,1.261,3,3l1,2h7c1.212-2.128,2.253-2.177,3-5h3v2h1V12H22v2H19V11a3.983,3.983,0,0,1-2-2H13V5h2V4H10V5h2ZM31,22",
        data: "373.3 cc",
      },
      power: {
        svg: "M9,2h6L14,8h4a18.133,18.133,0,0,1-3,7l-2,1v2l-2,1-1,3H8l1-8H6C6.156,8.795,8.065,6.392,9,2Zm2,10v3h1V14c1.614-1.328,2.069-2.849,4-4V9H12a11.883,11.883,0,0,1,1-5H11V5C9.516,6.494,8.82,9.961,8,12h3Z",
        data: "43.5 PS",
      },
      brakes: {
        svg: "M1,21L0,9H1V3C6.232,2.682,6.592.955,10,0l9,2c1.212,2.128,2.253,2.177,3,5,3.54,3.345.915,7.922,0,12-2.128,1.212-2.177,2.253-5,3C12.69,26.478,6.716,21.488,1,21Zm8-1H7c1.139,1.139,0,.4,2,1,2.924,2.773,7.188-.308,10-1,1.656-3.642,2.942-5.233,3-11-1.361-1.165-1.528-1.825-2-4C16.358,3.344,14.767,2.058,9,2,7.861,3.139,9,2.4,7,3V4c3.516-.451,5.861-1.707,9,0V5c2.7,1.625,1.958-.871,3,3h1V9H18c-1.829-3.373-3.538-4.1-9-4V6H8V8H9c0.565-.664,2.341-2.693,4-2V7c3.315,0.851,2.9,2.263,5,4-0.574,2.01.12,0.865-1,2-0.851,3.315-2.263,2.9-4,5-2.391-.463-3.145-1.158-5-2v2C9.139,19.139,8.4,18,9,20ZM5,5c1.139,1.139,0,.4,2,1C5.861,4.861,7,5.6,5,5ZM4,7c-0.114,3.268-.569,8.3,1,10C5.114,13.732,5.569,8.7,4,7Zm6,3v2L7,11v2c1.139,1.139.4,0,1,2,1.139-1.139.4,0,1-2h2l-1,3h4V15c-1.139-1.139-.4,0-1-2,3.16,0.113,1.874,1.955,3-1H14V10h1L14,8c-1.139,1.139-.4,0-1,2H11V8L8,9C9.139,10.139,8,9.4,10,10Zm9,0c0.88,0.593,2.739.911,2,3H20v2H19V10Zm-8,1h2v2H11V11Zm7,6v2l-3,1V18h1C17.139,16.861,16,17.6,18,17ZM5,18c1.139,1.139,0,.4,2,1C5.861,17.861,7,18.6,5,18Z",
        data: "Double Disc",
      },
      "tyre type": {
        svg: "M9,0a34.23,34.23,0,0,1,8,1V2L11,1V2H7C4.89,5.522,2.338,5.33,2,11H1l1,6H1V15H0V9H1V6L3,5V4L5,3,6,1H9V0Zm8,2c2.835,0.7,2.887,1.783,5,3V7C20.033,6.394,17.926,3.734,17,2ZM8,4h8c3.093,5.185,4.085,2.668,4,12-5.185,3.093-2.668,4.085-12,4-0.7-1.129-3.949-3.891-4-4V8H5Zm3,4V5L8,6c0.844,1.135-.127.145,1,1C10.139,8.139,9,7.4,11,8Zm2-3V8l3-1V6H15C13.861,4.861,15,5.6,13,5Zm9,2c3.156,2.663,1.509,6.86,1,11-3.373,2.129-10.351,10.428-16,4l6,1V22h4c2.11-3.522,4.662-3.33,5-9h1ZM5,11H8L7,8c-1.135.844-.145-0.127-1,1C4.861,10.139,5.6,9,5,11Zm11,0h3L18,8H17V9C15.861,10.139,16.6,9,16,11ZM11,9c-1.66,3.07-2.905,4.775,2,6,0.944-1.8,1.385-1.575,2-4C13.2,10.056,13.426,9.615,11,9Zm0,1,3,1c-0.574,2.01.12,0.865-1,2v1c-2.01-.574-0.865.12-2-1H10V12ZM5,13l1,3c1.135-.844.145,0.127,1-1,1.139-1.139.4,0,1-2H5Zm11,0,1,3h1V15c1.139-1.139.4,0,1-2H16Zm-5,6V16L8,17v1H9C10.139,19.139,9,18.4,11,19Zm2-3v3l3-1V17H15C13.861,15.861,15,16.6,13,16ZM2,17c0.324,0.161,5,5,5,5H5V21C3.025,19.871,2.662,19.583,2,17Z",
        data: "Tubeless",
      },
    },

    // "key specs": {
    //   engine: "373.3 cc",
    //   power: "43.5 PS",
    //   brakes: "Double Disc",
    //   "tyre type": "Tubeless",
    // },
    highlights:
      "The KTM RC 390 hasn’t received too many updates over the course of its life but it still continues to be a well-equipped motorcycle even today. It gets twin-projector headlights, all-digital LCD instrumentation, dual-channel ABS, a slipper clutch and ride-by-wire technology.",
  },
  {
    brand: "KTM",
    model: "Duke 200",
    price: "1,86,000",
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

    "key specsArr": ["engine", "power", "brakes", "tyre type"],

    "key specs": {
      engine: {
        svg: "M8,3h9V6H14V8h5V9h1v4h1V10h3v9H21V16H20c-0.644,6.651-6.032,5.329-13,5-1.127-1.719-.633-1.355-3-2V16H3v3H0V10H3v3H4V10H6L7,8h4V6H8V3Zm4,2V9H9c-1.973,3-2.825.941-4,5H2V12H1v5H2V15H5c1.036,4.047.438,1.261,3,3l1,2h7c1.212-2.128,2.253-2.177,3-5h3v2h1V12H22v2H19V11a3.983,3.983,0,0,1-2-2H13V5h2V4H10V5h2ZM31,22",
        data: "199.5 cc",
      },
      power: {
        svg: "M9,2h6L14,8h4a18.133,18.133,0,0,1-3,7l-2,1v2l-2,1-1,3H8l1-8H6C6.156,8.795,8.065,6.392,9,2Zm2,10v3h1V14c1.614-1.328,2.069-2.849,4-4V9H12a11.883,11.883,0,0,1,1-5H11V5C9.516,6.494,8.82,9.961,8,12h3Z",
        data: "25.83 PS",
      },
      brakes: {
        svg: "M1,21L0,9H1V3C6.232,2.682,6.592.955,10,0l9,2c1.212,2.128,2.253,2.177,3,5,3.54,3.345.915,7.922,0,12-2.128,1.212-2.177,2.253-5,3C12.69,26.478,6.716,21.488,1,21Zm8-1H7c1.139,1.139,0,.4,2,1,2.924,2.773,7.188-.308,10-1,1.656-3.642,2.942-5.233,3-11-1.361-1.165-1.528-1.825-2-4C16.358,3.344,14.767,2.058,9,2,7.861,3.139,9,2.4,7,3V4c3.516-.451,5.861-1.707,9,0V5c2.7,1.625,1.958-.871,3,3h1V9H18c-1.829-3.373-3.538-4.1-9-4V6H8V8H9c0.565-.664,2.341-2.693,4-2V7c3.315,0.851,2.9,2.263,5,4-0.574,2.01.12,0.865-1,2-0.851,3.315-2.263,2.9-4,5-2.391-.463-3.145-1.158-5-2v2C9.139,19.139,8.4,18,9,20ZM5,5c1.139,1.139,0,.4,2,1C5.861,4.861,7,5.6,5,5ZM4,7c-0.114,3.268-.569,8.3,1,10C5.114,13.732,5.569,8.7,4,7Zm6,3v2L7,11v2c1.139,1.139.4,0,1,2,1.139-1.139.4,0,1-2h2l-1,3h4V15c-1.139-1.139-.4,0-1-2,3.16,0.113,1.874,1.955,3-1H14V10h1L14,8c-1.139,1.139-.4,0-1,2H11V8L8,9C9.139,10.139,8,9.4,10,10Zm9,0c0.88,0.593,2.739.911,2,3H20v2H19V10Zm-8,1h2v2H11V11Zm7,6v2l-3,1V18h1C17.139,16.861,16,17.6,18,17ZM5,18c1.139,1.139,0,.4,2,1C5.861,17.861,7,18.6,5,18Z",
        data: "Double Disc",
      },
      "tyre type": {
        svg: "M9,0a34.23,34.23,0,0,1,8,1V2L11,1V2H7C4.89,5.522,2.338,5.33,2,11H1l1,6H1V15H0V9H1V6L3,5V4L5,3,6,1H9V0Zm8,2c2.835,0.7,2.887,1.783,5,3V7C20.033,6.394,17.926,3.734,17,2ZM8,4h8c3.093,5.185,4.085,2.668,4,12-5.185,3.093-2.668,4.085-12,4-0.7-1.129-3.949-3.891-4-4V8H5Zm3,4V5L8,6c0.844,1.135-.127.145,1,1C10.139,8.139,9,7.4,11,8Zm2-3V8l3-1V6H15C13.861,4.861,15,5.6,13,5Zm9,2c3.156,2.663,1.509,6.86,1,11-3.373,2.129-10.351,10.428-16,4l6,1V22h4c2.11-3.522,4.662-3.33,5-9h1ZM5,11H8L7,8c-1.135.844-.145-0.127-1,1C4.861,10.139,5.6,9,5,11Zm11,0h3L18,8H17V9C15.861,10.139,16.6,9,16,11ZM11,9c-1.66,3.07-2.905,4.775,2,6,0.944-1.8,1.385-1.575,2-4C13.2,10.056,13.426,9.615,11,9Zm0,1,3,1c-0.574,2.01.12,0.865-1,2v1c-2.01-.574-0.865.12-2-1H10V12ZM5,13l1,3c1.135-.844.145,0.127,1-1,1.139-1.139.4,0,1-2H5Zm11,0,1,3h1V15c1.139-1.139.4,0,1-2H16Zm-5,6V16L8,17v1H9C10.139,19.139,9,18.4,11,19Zm2-3v3l3-1V17H15C13.861,15.861,15,16.6,13,16ZM2,17c0.324,0.161,5,5,5,5H5V21C3.025,19.871,2.662,19.583,2,17Z",
        data: "Tubeless",
      },
    },

    // "key specs": {
    //   engine: "199.5 cc",
    //   power: "25.83 PS",
    //   brakes: "Double Disc",
    //   "tyre type": "Tubeless",
    // },
    highlights:
      "On the feature front, the Duke 200 gets a halogen headlamp running fork-like LED DRLs and a new LED tail lamp similar to the KTM 250 Duke. It retains the same digital instrument console as before with readouts such as a gear position indicator, real-time fuel efficiency, average fuel efficiency, service indicator, distance-to-empty gauge, clock, and side-stand warning light. Tell-tale lights sit above the speedometer along with a shift indicator placed in the centre.",
  },

  {
    brand: "Honda",
    model: "Activa 6G",
    price: "75,000",
    type: "commuter bike",
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

    "key specsArr": ["engine", "power", "brakes", "tyre type"],

    "key specs": {
      engine: {
        svg: "M8,3h9V6H14V8h5V9h1v4h1V10h3v9H21V16H20c-0.644,6.651-6.032,5.329-13,5-1.127-1.719-.633-1.355-3-2V16H3v3H0V10H3v3H4V10H6L7,8h4V6H8V3Zm4,2V9H9c-1.973,3-2.825.941-4,5H2V12H1v5H2V15H5c1.036,4.047.438,1.261,3,3l1,2h7c1.212-2.128,2.253-2.177,3-5h3v2h1V12H22v2H19V11a3.983,3.983,0,0,1-2-2H13V5h2V4H10V5h2ZM31,22",
        data: "109.51 cc",
      },
      power: {
        svg: "M9,2h6L14,8h4a18.133,18.133,0,0,1-3,7l-2,1v2l-2,1-1,3H8l1-8H6C6.156,8.795,8.065,6.392,9,2Zm2,10v3h1V14c1.614-1.328,2.069-2.849,4-4V9H12a11.883,11.883,0,0,1,1-5H11V5C9.516,6.494,8.82,9.961,8,12h3Z",
        data: "7.79 PS",
      },
      brakes: {
        svg: "M1,21L0,9H1V3C6.232,2.682,6.592.955,10,0l9,2c1.212,2.128,2.253,2.177,3,5,3.54,3.345.915,7.922,0,12-2.128,1.212-2.177,2.253-5,3C12.69,26.478,6.716,21.488,1,21Zm8-1H7c1.139,1.139,0,.4,2,1,2.924,2.773,7.188-.308,10-1,1.656-3.642,2.942-5.233,3-11-1.361-1.165-1.528-1.825-2-4C16.358,3.344,14.767,2.058,9,2,7.861,3.139,9,2.4,7,3V4c3.516-.451,5.861-1.707,9,0V5c2.7,1.625,1.958-.871,3,3h1V9H18c-1.829-3.373-3.538-4.1-9-4V6H8V8H9c0.565-.664,2.341-2.693,4-2V7c3.315,0.851,2.9,2.263,5,4-0.574,2.01.12,0.865-1,2-0.851,3.315-2.263,2.9-4,5-2.391-.463-3.145-1.158-5-2v2C9.139,19.139,8.4,18,9,20ZM5,5c1.139,1.139,0,.4,2,1C5.861,4.861,7,5.6,5,5ZM4,7c-0.114,3.268-.569,8.3,1,10C5.114,13.732,5.569,8.7,4,7Zm6,3v2L7,11v2c1.139,1.139.4,0,1,2,1.139-1.139.4,0,1-2h2l-1,3h4V15c-1.139-1.139-.4,0-1-2,3.16,0.113,1.874,1.955,3-1H14V10h1L14,8c-1.139,1.139-.4,0-1,2H11V8L8,9C9.139,10.139,8,9.4,10,10Zm9,0c0.88,0.593,2.739.911,2,3H20v2H19V10Zm-8,1h2v2H11V11Zm7,6v2l-3,1V18h1C17.139,16.861,16,17.6,18,17ZM5,18c1.139,1.139,0,.4,2,1C5.861,17.861,7,18.6,5,18Z",
        data: "Drum",
      },
      "tyre type": {
        svg: "M9,0a34.23,34.23,0,0,1,8,1V2L11,1V2H7C4.89,5.522,2.338,5.33,2,11H1l1,6H1V15H0V9H1V6L3,5V4L5,3,6,1H9V0Zm8,2c2.835,0.7,2.887,1.783,5,3V7C20.033,6.394,17.926,3.734,17,2ZM8,4h8c3.093,5.185,4.085,2.668,4,12-5.185,3.093-2.668,4.085-12,4-0.7-1.129-3.949-3.891-4-4V8H5Zm3,4V5L8,6c0.844,1.135-.127.145,1,1C10.139,8.139,9,7.4,11,8Zm2-3V8l3-1V6H15C13.861,4.861,15,5.6,13,5Zm9,2c3.156,2.663,1.509,6.86,1,11-3.373,2.129-10.351,10.428-16,4l6,1V22h4c2.11-3.522,4.662-3.33,5-9h1ZM5,11H8L7,8c-1.135.844-.145-0.127-1,1C4.861,10.139,5.6,9,5,11Zm11,0h3L18,8H17V9C15.861,10.139,16.6,9,16,11ZM11,9c-1.66,3.07-2.905,4.775,2,6,0.944-1.8,1.385-1.575,2-4C13.2,10.056,13.426,9.615,11,9Zm0,1,3,1c-0.574,2.01.12,0.865-1,2v1c-2.01-.574-0.865.12-2-1H10V12ZM5,13l1,3c1.135-.844.145,0.127,1-1,1.139-1.139.4,0,1-2H5Zm11,0,1,3h1V15c1.139-1.139.4,0,1-2H16Zm-5,6V16L8,17v1H9C10.139,19.139,9,18.4,11,19Zm2-3v3l3-1V17H15C13.861,15.861,15,16.6,13,16ZM2,17c0.324,0.161,5,5,5,5H5V21C3.025,19.871,2.662,19.583,2,17Z",
        data: "Tubeless",
      },
    },

    // "key specs": {
    //   engine: "109.51 cc",
    //   power: "7.79 PS",
    //   brakes: "Drum",
    //   "tyre type": "Tubeless",
    // },
    highlights:
      "Honda has increased the prices of select offerings in September 2021. Luckily, only certain commuter motorcycles have been affected while the prices of all the other models have remained unchanged. Honda top-selling scooter, the Activa 6G starts from Rs 69,080 and goes up to Rs 72,325.",
  },
  {
    brand: "Honda",
    model: "Hornet 2.0",
    price: "1,35,000",
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

    "key specsArr": ["engine", "power", "brakes", "tyre type"],

    "key specs": {
      engine: {
        svg: "M8,3h9V6H14V8h5V9h1v4h1V10h3v9H21V16H20c-0.644,6.651-6.032,5.329-13,5-1.127-1.719-.633-1.355-3-2V16H3v3H0V10H3v3H4V10H6L7,8h4V6H8V3Zm4,2V9H9c-1.973,3-2.825.941-4,5H2V12H1v5H2V15H5c1.036,4.047.438,1.261,3,3l1,2h7c1.212-2.128,2.253-2.177,3-5h3v2h1V12H22v2H19V11a3.983,3.983,0,0,1-2-2H13V5h2V4H10V5h2ZM31,22",
        data: "184.4 cc",
      },
      power: {
        svg: "M9,2h6L14,8h4a18.133,18.133,0,0,1-3,7l-2,1v2l-2,1-1,3H8l1-8H6C6.156,8.795,8.065,6.392,9,2Zm2,10v3h1V14c1.614-1.328,2.069-2.849,4-4V9H12a11.883,11.883,0,0,1,1-5H11V5C9.516,6.494,8.82,9.961,8,12h3Z",
        data: "17.26 PS",
      },
      brakes: {
        svg: "M1,21L0,9H1V3C6.232,2.682,6.592.955,10,0l9,2c1.212,2.128,2.253,2.177,3,5,3.54,3.345.915,7.922,0,12-2.128,1.212-2.177,2.253-5,3C12.69,26.478,6.716,21.488,1,21Zm8-1H7c1.139,1.139,0,.4,2,1,2.924,2.773,7.188-.308,10-1,1.656-3.642,2.942-5.233,3-11-1.361-1.165-1.528-1.825-2-4C16.358,3.344,14.767,2.058,9,2,7.861,3.139,9,2.4,7,3V4c3.516-.451,5.861-1.707,9,0V5c2.7,1.625,1.958-.871,3,3h1V9H18c-1.829-3.373-3.538-4.1-9-4V6H8V8H9c0.565-.664,2.341-2.693,4-2V7c3.315,0.851,2.9,2.263,5,4-0.574,2.01.12,0.865-1,2-0.851,3.315-2.263,2.9-4,5-2.391-.463-3.145-1.158-5-2v2C9.139,19.139,8.4,18,9,20ZM5,5c1.139,1.139,0,.4,2,1C5.861,4.861,7,5.6,5,5ZM4,7c-0.114,3.268-.569,8.3,1,10C5.114,13.732,5.569,8.7,4,7Zm6,3v2L7,11v2c1.139,1.139.4,0,1,2,1.139-1.139.4,0,1-2h2l-1,3h4V15c-1.139-1.139-.4,0-1-2,3.16,0.113,1.874,1.955,3-1H14V10h1L14,8c-1.139,1.139-.4,0-1,2H11V8L8,9C9.139,10.139,8,9.4,10,10Zm9,0c0.88,0.593,2.739.911,2,3H20v2H19V10Zm-8,1h2v2H11V11Zm7,6v2l-3,1V18h1C17.139,16.861,16,17.6,18,17ZM5,18c1.139,1.139,0,.4,2,1C5.861,17.861,7,18.6,5,18Z",
        data: "Double Disc",
      },
      "tyre type": {
        svg: "M9,0a34.23,34.23,0,0,1,8,1V2L11,1V2H7C4.89,5.522,2.338,5.33,2,11H1l1,6H1V15H0V9H1V6L3,5V4L5,3,6,1H9V0Zm8,2c2.835,0.7,2.887,1.783,5,3V7C20.033,6.394,17.926,3.734,17,2ZM8,4h8c3.093,5.185,4.085,2.668,4,12-5.185,3.093-2.668,4.085-12,4-0.7-1.129-3.949-3.891-4-4V8H5Zm3,4V5L8,6c0.844,1.135-.127.145,1,1C10.139,8.139,9,7.4,11,8Zm2-3V8l3-1V6H15C13.861,4.861,15,5.6,13,5Zm9,2c3.156,2.663,1.509,6.86,1,11-3.373,2.129-10.351,10.428-16,4l6,1V22h4c2.11-3.522,4.662-3.33,5-9h1ZM5,11H8L7,8c-1.135.844-.145-0.127-1,1C4.861,10.139,5.6,9,5,11Zm11,0h3L18,8H17V9C15.861,10.139,16.6,9,16,11ZM11,9c-1.66,3.07-2.905,4.775,2,6,0.944-1.8,1.385-1.575,2-4C13.2,10.056,13.426,9.615,11,9Zm0,1,3,1c-0.574,2.01.12,0.865-1,2v1c-2.01-.574-0.865.12-2-1H10V12ZM5,13l1,3c1.135-.844.145,0.127,1-1,1.139-1.139.4,0,1-2H5Zm11,0,1,3h1V15c1.139-1.139.4,0,1-2H16Zm-5,6V16L8,17v1H9C10.139,19.139,9,18.4,11,19Zm2-3v3l3-1V17H15C13.861,15.861,15,16.6,13,16ZM2,17c0.324,0.161,5,5,5,5H5V21C3.025,19.871,2.662,19.583,2,17Z",
        data: "Tubeless",
      },
    },

    // "key specs": {
    //   engine: "184.4 cc",
    //   power: "17.26 PS",
    //   brakes: "Double Disc",
    //   "tyre type": "Tubeless",
    // },
    highlights:
      "Honda has increased the prices of select offerings in September 2021. Luckily, only some of the commuter motorcycles have been affected while the prices of all the rest of the two-wheelers have remained unchanged.",
  },

  {
    brand: "Royal Enfield",
    model: "Classic 350",
    price: "1,90,000",
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

    "key specsArr": ["engine", "power", "brakes", "tyre type"],

    "key specs": {
      engine: {
        svg: "M8,3h9V6H14V8h5V9h1v4h1V10h3v9H21V16H20c-0.644,6.651-6.032,5.329-13,5-1.127-1.719-.633-1.355-3-2V16H3v3H0V10H3v3H4V10H6L7,8h4V6H8V3Zm4,2V9H9c-1.973,3-2.825.941-4,5H2V12H1v5H2V15H5c1.036,4.047.438,1.261,3,3l1,2h7c1.212-2.128,2.253-2.177,3-5h3v2h1V12H22v2H19V11a3.983,3.983,0,0,1-2-2H13V5h2V4H10V5h2ZM31,22",
        data: "349.34 cc",
      },
      power: {
        svg: "M9,2h6L14,8h4a18.133,18.133,0,0,1-3,7l-2,1v2l-2,1-1,3H8l1-8H6C6.156,8.795,8.065,6.392,9,2Zm2,10v3h1V14c1.614-1.328,2.069-2.849,4-4V9H12a11.883,11.883,0,0,1,1-5H11V5C9.516,6.494,8.82,9.961,8,12h3Z",
        data: "20.21 PS",
      },
      brakes: {
        svg: "M1,21L0,9H1V3C6.232,2.682,6.592.955,10,0l9,2c1.212,2.128,2.253,2.177,3,5,3.54,3.345.915,7.922,0,12-2.128,1.212-2.177,2.253-5,3C12.69,26.478,6.716,21.488,1,21Zm8-1H7c1.139,1.139,0,.4,2,1,2.924,2.773,7.188-.308,10-1,1.656-3.642,2.942-5.233,3-11-1.361-1.165-1.528-1.825-2-4C16.358,3.344,14.767,2.058,9,2,7.861,3.139,9,2.4,7,3V4c3.516-.451,5.861-1.707,9,0V5c2.7,1.625,1.958-.871,3,3h1V9H18c-1.829-3.373-3.538-4.1-9-4V6H8V8H9c0.565-.664,2.341-2.693,4-2V7c3.315,0.851,2.9,2.263,5,4-0.574,2.01.12,0.865-1,2-0.851,3.315-2.263,2.9-4,5-2.391-.463-3.145-1.158-5-2v2C9.139,19.139,8.4,18,9,20ZM5,5c1.139,1.139,0,.4,2,1C5.861,4.861,7,5.6,5,5ZM4,7c-0.114,3.268-.569,8.3,1,10C5.114,13.732,5.569,8.7,4,7Zm6,3v2L7,11v2c1.139,1.139.4,0,1,2,1.139-1.139.4,0,1-2h2l-1,3h4V15c-1.139-1.139-.4,0-1-2,3.16,0.113,1.874,1.955,3-1H14V10h1L14,8c-1.139,1.139-.4,0-1,2H11V8L8,9C9.139,10.139,8,9.4,10,10Zm9,0c0.88,0.593,2.739.911,2,3H20v2H19V10Zm-8,1h2v2H11V11Zm7,6v2l-3,1V18h1C17.139,16.861,16,17.6,18,17ZM5,18c1.139,1.139,0,.4,2,1C5.861,17.861,7,18.6,5,18Z",
        data: "Double Disc",
      },
      "tyre type": {
        svg: "M9,0a34.23,34.23,0,0,1,8,1V2L11,1V2H7C4.89,5.522,2.338,5.33,2,11H1l1,6H1V15H0V9H1V6L3,5V4L5,3,6,1H9V0Zm8,2c2.835,0.7,2.887,1.783,5,3V7C20.033,6.394,17.926,3.734,17,2ZM8,4h8c3.093,5.185,4.085,2.668,4,12-5.185,3.093-2.668,4.085-12,4-0.7-1.129-3.949-3.891-4-4V8H5Zm3,4V5L8,6c0.844,1.135-.127.145,1,1C10.139,8.139,9,7.4,11,8Zm2-3V8l3-1V6H15C13.861,4.861,15,5.6,13,5Zm9,2c3.156,2.663,1.509,6.86,1,11-3.373,2.129-10.351,10.428-16,4l6,1V22h4c2.11-3.522,4.662-3.33,5-9h1ZM5,11H8L7,8c-1.135.844-.145-0.127-1,1C4.861,10.139,5.6,9,5,11Zm11,0h3L18,8H17V9C15.861,10.139,16.6,9,16,11ZM11,9c-1.66,3.07-2.905,4.775,2,6,0.944-1.8,1.385-1.575,2-4C13.2,10.056,13.426,9.615,11,9Zm0,1,3,1c-0.574,2.01.12,0.865-1,2v1c-2.01-.574-0.865.12-2-1H10V12ZM5,13l1,3c1.135-.844.145,0.127,1-1,1.139-1.139.4,0,1-2H5Zm11,0,1,3h1V15c1.139-1.139.4,0,1-2H16Zm-5,6V16L8,17v1H9C10.139,19.139,9,18.4,11,19Zm2-3v3l3-1V17H15C13.861,15.861,15,16.6,13,16ZM2,17c0.324,0.161,5,5,5,5H5V21C3.025,19.871,2.662,19.583,2,17Z",
        data: "Tubeless",
      },
    },

    // "key specs": {
    //   engine: "349.34 cc",
    //   power: "20.21 PS",
    //   brakes: "Double Disc",
    //   "tyre type": "Tubeless",
    // },
    highlights:
      "Royal Enfield has launched the 2021 Royal Enfield Classic 350 in India. It is priced at Rs 1,84,374 for the base single-channel ABS variant (Redditch Series) and Rs 1,93,123 for the most affordable colour variant (Halcyon Series) with dual-channel ABS.",
  },
  {
    brand: "Royal Enfield",
    model: "Himalayan",
    price: "1,90,000",
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

    "key specsArr": ["engine", "power", "brakes", "tyre type"],

    "key specs": {
      engine: {
        svg: "M8,3h9V6H14V8h5V9h1v4h1V10h3v9H21V16H20c-0.644,6.651-6.032,5.329-13,5-1.127-1.719-.633-1.355-3-2V16H3v3H0V10H3v3H4V10H6L7,8h4V6H8V3Zm4,2V9H9c-1.973,3-2.825.941-4,5H2V12H1v5H2V15H5c1.036,4.047.438,1.261,3,3l1,2h7c1.212-2.128,2.253-2.177,3-5h3v2h1V12H22v2H19V11a3.983,3.983,0,0,1-2-2H13V5h2V4H10V5h2ZM31,22",
        data: "411 cc",
      },
      power: {
        svg: "M9,2h6L14,8h4a18.133,18.133,0,0,1-3,7l-2,1v2l-2,1-1,3H8l1-8H6C6.156,8.795,8.065,6.392,9,2Zm2,10v3h1V14c1.614-1.328,2.069-2.849,4-4V9H12a11.883,11.883,0,0,1,1-5H11V5C9.516,6.494,8.82,9.961,8,12h3Z",
        data: "24.31 PS",
      },
      brakes: {
        svg: "M1,21L0,9H1V3C6.232,2.682,6.592.955,10,0l9,2c1.212,2.128,2.253,2.177,3,5,3.54,3.345.915,7.922,0,12-2.128,1.212-2.177,2.253-5,3C12.69,26.478,6.716,21.488,1,21Zm8-1H7c1.139,1.139,0,.4,2,1,2.924,2.773,7.188-.308,10-1,1.656-3.642,2.942-5.233,3-11-1.361-1.165-1.528-1.825-2-4C16.358,3.344,14.767,2.058,9,2,7.861,3.139,9,2.4,7,3V4c3.516-.451,5.861-1.707,9,0V5c2.7,1.625,1.958-.871,3,3h1V9H18c-1.829-3.373-3.538-4.1-9-4V6H8V8H9c0.565-.664,2.341-2.693,4-2V7c3.315,0.851,2.9,2.263,5,4-0.574,2.01.12,0.865-1,2-0.851,3.315-2.263,2.9-4,5-2.391-.463-3.145-1.158-5-2v2C9.139,19.139,8.4,18,9,20ZM5,5c1.139,1.139,0,.4,2,1C5.861,4.861,7,5.6,5,5ZM4,7c-0.114,3.268-.569,8.3,1,10C5.114,13.732,5.569,8.7,4,7Zm6,3v2L7,11v2c1.139,1.139.4,0,1,2,1.139-1.139.4,0,1-2h2l-1,3h4V15c-1.139-1.139-.4,0-1-2,3.16,0.113,1.874,1.955,3-1H14V10h1L14,8c-1.139,1.139-.4,0-1,2H11V8L8,9C9.139,10.139,8,9.4,10,10Zm9,0c0.88,0.593,2.739.911,2,3H20v2H19V10Zm-8,1h2v2H11V11Zm7,6v2l-3,1V18h1C17.139,16.861,16,17.6,18,17ZM5,18c1.139,1.139,0,.4,2,1C5.861,17.861,7,18.6,5,18Z",
        data: "Double Disc",
      },
      "tyre type": {
        svg: "M9,0a34.23,34.23,0,0,1,8,1V2L11,1V2H7C4.89,5.522,2.338,5.33,2,11H1l1,6H1V15H0V9H1V6L3,5V4L5,3,6,1H9V0Zm8,2c2.835,0.7,2.887,1.783,5,3V7C20.033,6.394,17.926,3.734,17,2ZM8,4h8c3.093,5.185,4.085,2.668,4,12-5.185,3.093-2.668,4.085-12,4-0.7-1.129-3.949-3.891-4-4V8H5Zm3,4V5L8,6c0.844,1.135-.127.145,1,1C10.139,8.139,9,7.4,11,8Zm2-3V8l3-1V6H15C13.861,4.861,15,5.6,13,5Zm9,2c3.156,2.663,1.509,6.86,1,11-3.373,2.129-10.351,10.428-16,4l6,1V22h4c2.11-3.522,4.662-3.33,5-9h1ZM5,11H8L7,8c-1.135.844-.145-0.127-1,1C4.861,10.139,5.6,9,5,11Zm11,0h3L18,8H17V9C15.861,10.139,16.6,9,16,11ZM11,9c-1.66,3.07-2.905,4.775,2,6,0.944-1.8,1.385-1.575,2-4C13.2,10.056,13.426,9.615,11,9Zm0,1,3,1c-0.574,2.01.12,0.865-1,2v1c-2.01-.574-0.865.12-2-1H10V12ZM5,13l1,3c1.135-.844.145,0.127,1-1,1.139-1.139.4,0,1-2H5Zm11,0,1,3h1V15c1.139-1.139.4,0,1-2H16Zm-5,6V16L8,17v1H9C10.139,19.139,9,18.4,11,19Zm2-3v3l3-1V17H15C13.861,15.861,15,16.6,13,16ZM2,17c0.324,0.161,5,5,5,5H5V21C3.025,19.871,2.662,19.583,2,17Z",
        data: "Tube",
      },
    },

    // "key specs": [
    //   { engine: "411 cc" },
    //   { power: "24.31 PS" },
    //   { brakes: "Double Disc" },
    //   { "tyre type": "Tube" },
    // ],
    highlights:
      "Royal Enfield has launched the 2021 Royal Enfield Classic 350 in India. It is priced at Rs 1,84,374 for the base single-channel ABS variant (Redditch Series) and Rs 1,93,123 for the most affordable colour variant (Halcyon Series) with dual-channel ABS.",
  },
];

export { brands, models, bikeTypes, detailsByModel };

export default allBikesData;
