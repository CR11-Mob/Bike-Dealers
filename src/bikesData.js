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
  "activa 6G": {
    brand: "honda",
    model: "activa 6G",
    price: "75,000",
    type: "commuter bike",
    img: "https://source.unsplash.com/random/400*200",
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

  "Honda Hornet 2.0": {
    brand: "honda",
    model: "Honda Hornet 2.0",
    price: "1,35,000",
    type: "sport bike",
    img: "https://source.unsplash.com/random/400*200",
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

  "classic 350": {
    brand: "royal enfield",
    model: "royal enfield classic 350",
    price: "1,90,000",
    type: "cruiser bike",
    img: "https://source.unsplash.com/random/400*200",
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

  "Royal Enfield Himalayan": {
    brand: "royal enfield",
    model: "royal rnfield himalayan",
    price: "1,90,000",
    type: "cruiser bike",
    img: "https://source.unsplash.com/random/400*200",
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
      engine: "411 cc",
      power: "24.31 PS",
      brakes: "Double Disc",
      "tyre type": "Tube",
    },
    highlights:
      "Royal Enfield has launched the 2021 Royal Enfield Classic 350 in India. It is priced at Rs 1,84,374 for the base single-channel ABS variant (Redditch Series) and Rs 1,93,123 for the most affordable colour variant (Halcyon Series) with dual-channel ABS.",
  },

  "duke 200": {
    brand: "ktm",
    price: "1,50,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan, ridiculus inceptos placerat venenatis nunc convallis vivamus sodales purus, curabitur sed nisi cras tincidunt mollis quisque. Nam commodo mus molestie odio facilisis faucibus fringilla eu, tincidunt justo congue urna lacinia rutrum mattis viverra, vehicula auctor velit eleifend luctus accumsan lectus. Dictum praesent fusce elementum tristique viverra urna tortor, quam sollicitudin eu at integer neque. Libero cubilia habitant porta tempus malesuada sapien nulla convallis non, imperdiet feugiat fringilla ridiculus et rhoncus nam sollicitudin. Sagittis vel nisl leo phasellus placerat et congue aliquam mauris scelerisque ultricies, ullamcorper laoreet dictumst vehicula luctus convallis duis aptent etiam faucibus, suscipit quam dapibus risus nostra facilisis cum fermentum conubia vitae. Habitasse mollis curabitur leo ligula sodales consequat mus, eu quis interdum mauris dictumst lectus taciti convallis, pharetra scelerisque hendrerit phasellus tempor parturient. Justo tempus nam sociosqu nisl duis cras inceptos vehicula porta, dictumst mauris iaculis proin est velit aenean vulputate lectus, molestie morbi condimentum fringilla commodo posuere ante hac. Condimentum netus vehicula neque eros hendrerit aptent suscipit viverra fusce placerat elementum, scelerisque cubilia faucibus tristique nascetur ut sapien taciti ligula euismod gravida pellentesque, etiam quam laoreet tellus mus platea vestibulum lectus malesuada facilisis.",
  },

  "fz 25": {
    brand: "yamaha",
    price: "90,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan, ridiculus inceptos placerat venenatis nunc convallis vivamus sodales purus, curabitur sed nisi cras tincidunt mollis quisque. Nam commodo mus molestie odio facilisis faucibus fringilla eu, tincidunt justo congue urna lacinia rutrum mattis viverra, vehicula auctor velit eleifend luctus accumsan lectus. Dictum praesent fusce elementum tristique viverra urna tortor, quam sollicitudin eu at integer neque. Libero cubilia habitant porta tempus malesuada sapien nulla convallis non, imperdiet feugiat fringilla ridiculus et rhoncus nam sollicitudin. Sagittis vel nisl leo phasellus placerat et congue aliquam mauris scelerisque ultricies, ullamcorper laoreet dictumst vehicula luctus convallis duis aptent etiam faucibus, suscipit quam dapibus risus nostra facilisis cum fermentum conubia vitae. Habitasse mollis curabitur leo ligula sodales consequat mus, eu quis interdum mauris dictumst lectus taciti convallis, pharetra scelerisque hendrerit phasellus tempor parturient. Justo tempus nam sociosqu nisl duis cras inceptos vehicula porta, dictumst mauris iaculis proin est velit aenean vulputate lectus, molestie morbi condimentum fringilla commodo posuere ante hac. Condimentum netus vehicula neque eros hendrerit aptent suscipit viverra fusce placerat elementum, scelerisque cubilia faucibus tristique nascetur ut sapien taciti ligula euismod gravida pellentesque, etiam quam laoreet tellus mus platea vestibulum lectus malesuada facilisis.",
  },

  "deluxe hf": {
    brand: "hero",
    price: "80,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan, ridiculus inceptos placerat venenatis nunc convallis vivamus sodales purus, curabitur sed nisi cras tincidunt mollis quisque. Nam commodo mus molestie odio facilisis faucibus fringilla eu, tincidunt justo congue urna lacinia rutrum mattis viverra, vehicula auctor velit eleifend luctus accumsan lectus. Dictum praesent fusce elementum tristique viverra urna tortor, quam sollicitudin eu at integer neque. Libero cubilia habitant porta tempus malesuada sapien nulla convallis non, imperdiet feugiat fringilla ridiculus et rhoncus nam sollicitudin. Sagittis vel nisl leo phasellus placerat et congue aliquam mauris scelerisque ultricies, ullamcorper laoreet dictumst vehicula luctus convallis duis aptent etiam faucibus, suscipit quam dapibus risus nostra facilisis cum fermentum conubia vitae. Habitasse mollis curabitur leo ligula sodales consequat mus, eu quis interdum mauris dictumst lectus taciti convallis, pharetra scelerisque hendrerit phasellus tempor parturient. Justo tempus nam sociosqu nisl duis cras inceptos vehicula porta, dictumst mauris iaculis proin est velit aenean vulputate lectus, molestie morbi condimentum fringilla commodo posuere ante hac. Condimentum netus vehicula neque eros hendrerit aptent suscipit viverra fusce placerat elementum, scelerisque cubilia faucibus tristique nascetur ut sapien taciti ligula euismod gravida pellentesque, etiam quam laoreet tellus mus platea vestibulum lectus malesuada facilisis.",
  },

  "hayabusa 2021": {
    brand: "suzuki",
    price: "2,00,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan, ridiculus inceptos placerat venenatis nunc convallis vivamus sodales purus, curabitur sed nisi cras tincidunt mollis quisque. Nam commodo mus molestie odio facilisis faucibus fringilla eu, tincidunt justo congue urna lacinia rutrum mattis viverra, vehicula auctor velit eleifend luctus accumsan lectus. Dictum praesent fusce elementum tristique viverra urna tortor, quam sollicitudin eu at integer neque. Libero cubilia habitant porta tempus malesuada sapien nulla convallis non, imperdiet feugiat fringilla ridiculus et rhoncus nam sollicitudin. Sagittis vel nisl leo phasellus placerat et congue aliquam mauris scelerisque ultricies, ullamcorper laoreet dictumst vehicula luctus convallis duis aptent etiam faucibus, suscipit quam dapibus risus nostra facilisis cum fermentum conubia vitae. Habitasse mollis curabitur leo ligula sodales consequat mus, eu quis interdum mauris dictumst lectus taciti convallis, pharetra scelerisque hendrerit phasellus tempor parturient. Justo tempus nam sociosqu nisl duis cras inceptos vehicula porta, dictumst mauris iaculis proin est velit aenean vulputate lectus, molestie morbi condimentum fringilla commodo posuere ante hac. Condimentum netus vehicula neque eros hendrerit aptent suscipit viverra fusce placerat elementum, scelerisque cubilia faucibus tristique nascetur ut sapien taciti ligula euismod gravida pellentesque, etiam quam laoreet tellus mus platea vestibulum lectus malesuada facilisis.",
  },
};

const allBikesData = [
  {
    brand: "honda",
    model: "activa 6G",
    price: "75,000",
    type: "commuter bike",
    img: "https://source.unsplash.com/random/400*200",
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
    brand: "honda",
    model: "Honda Hornet 2.0",
    price: "1,35,000",
    type: "sport bike",
    img: "https://source.unsplash.com/random/400*200",
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
    brand: "royal enfield",
    model: "royal enfield classic 350",
    price: "1,90,000",
    type: "cruiser bike",
    img: "https://source.unsplash.com/random/400*200",
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
    brand: "royal enfield",
    model: "royal rnfield himalayan",
    price: "1,90,000",
    type: "cruiser bike",
    img: "https://source.unsplash.com/random/400*200",
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
      engine: "411 cc",
      power: "24.31 PS",
      brakes: "Double Disc",
      "tyre type": "Tube",
    },
    highlights:
      "Royal Enfield has launched the 2021 Royal Enfield Classic 350 in India. It is priced at Rs 1,84,374 for the base single-channel ABS variant (Redditch Series) and Rs 1,93,123 for the most affordable colour variant (Halcyon Series) with dual-channel ABS.",
  },
];

export { brands, models, bikeTypes, detailsByModel };

export default allBikesData;
