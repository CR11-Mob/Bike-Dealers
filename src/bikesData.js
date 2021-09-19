const allBikesData = [
  {
    brand: "honda",
    model: "activa 6G",
    price: "80,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan, ridiculus inceptos placerat venenatis nunc convallis vivamus sodales purus, curabitur sed nisi cras tincidunt mollis quisque. Nam commodo mus molestie odio facilisis faucibus fringilla eu, tincidunt justo congue urna lacinia rutrum mattis viverra, vehicula auctor velit eleifend luctus accumsan lectus. Dictum praesent fusce elementum tristique viverra urna tortor, quam sollicitudin eu at integer neque. Libero cubilia habitant porta tempus malesuada sapien nulla convallis non, imperdiet feugiat fringilla ridiculus et rhoncus nam sollicitudin. Sagittis vel nisl leo phasellus placerat et congue aliquam mauris scelerisque ultricies, ullamcorper laoreet dictumst vehicula luctus convallis duis aptent etiam faucibus, suscipit quam dapibus risus nostra facilisis cum fermentum conubia vitae. Habitasse mollis curabitur leo ligula sodales consequat mus, eu quis interdum mauris dictumst lectus taciti convallis, pharetra scelerisque hendrerit phasellus tempor parturient. Justo tempus nam sociosqu nisl duis cras inceptos vehicula porta, dictumst mauris iaculis proin est velit aenean vulputate lectus, molestie morbi condimentum fringilla commodo posuere ante hac. Condimentum netus vehicula neque eros hendrerit aptent suscipit viverra fusce placerat elementum, scelerisque cubilia faucibus tristique nascetur ut sapien taciti ligula euismod gravida pellentesque, etiam quam laoreet tellus mus platea vestibulum lectus malesuada facilisis.",
  },
  {
    brand: "royal enfield",
    model: "classic 350",
    price: "1,20,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan, ridiculus inceptos placerat venenatis nunc convallis vivamus sodales purus, curabitur sed nisi cras tincidunt mollis quisque. Nam commodo mus molestie odio facilisis faucibus fringilla eu, tincidunt justo congue urna lacinia rutrum mattis viverra, vehicula auctor velit eleifend luctus accumsan lectus. Dictum praesent fusce elementum tristique viverra urna tortor, quam sollicitudin eu at integer neque. Libero cubilia habitant porta tempus malesuada sapien nulla convallis non, imperdiet feugiat fringilla ridiculus et rhoncus nam sollicitudin. Sagittis vel nisl leo phasellus placerat et congue aliquam mauris scelerisque ultricies, ullamcorper laoreet dictumst vehicula luctus convallis duis aptent etiam faucibus, suscipit quam dapibus risus nostra facilisis cum fermentum conubia vitae. Habitasse mollis curabitur leo ligula sodales consequat mus, eu quis interdum mauris dictumst lectus taciti convallis, pharetra scelerisque hendrerit phasellus tempor parturient. Justo tempus nam sociosqu nisl duis cras inceptos vehicula porta, dictumst mauris iaculis proin est velit aenean vulputate lectus, molestie morbi condimentum fringilla commodo posuere ante hac. Condimentum netus vehicula neque eros hendrerit aptent suscipit viverra fusce placerat elementum, scelerisque cubilia faucibus tristique nascetur ut sapien taciti ligula euismod gravida pellentesque, etiam quam laoreet tellus mus platea vestibulum lectus malesuada facilisis.",
  },
  {
    brand: "royal enfield",
    model: "Royal Enfield Himalayan",
    price: "2,00,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan, ridiculus inceptos placerat venenatis nunc convallis vivamus sodales purus, curabitur sed nisi cras tincidunt mollis quisque. Nam commodo mus molestie odio facilisis faucibus fringilla eu, tincidunt justo congue urna lacinia rutrum mattis viverra, vehicula auctor velit eleifend luctus accumsan lectus. Dictum praesent fusce elementum tristique viverra urna tortor, quam sollicitudin eu at integer neque. Libero cubilia habitant porta tempus malesuada sapien nulla convallis non, imperdiet feugiat fringilla ridiculus et rhoncus nam sollicitudin. Sagittis vel nisl leo phasellus placerat et congue aliquam mauris scelerisque ultricies, ullamcorper laoreet dictumst vehicula luctus convallis duis aptent etiam faucibus, suscipit quam dapibus risus nostra facilisis cum fermentum conubia vitae. Habitasse mollis curabitur leo ligula sodales consequat mus, eu quis interdum mauris dictumst lectus taciti convallis, pharetra scelerisque hendrerit phasellus tempor parturient. Justo tempus nam sociosqu nisl duis cras inceptos vehicula porta, dictumst mauris iaculis proin est velit aenean vulputate lectus, molestie morbi condimentum fringilla commodo posuere ante hac. Condimentum netus vehicula neque eros hendrerit aptent suscipit viverra fusce placerat elementum, scelerisque cubilia faucibus tristique nascetur ut sapien taciti ligula euismod gravida pellentesque, etiam quam laoreet tellus mus platea vestibulum lectus malesuada facilisis.",
  },
  {
    brand: "ktm",
    model: "duke 200",
    price: "1,50,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan, ridiculus inceptos placerat venenatis nunc convallis vivamus sodales purus, curabitur sed nisi cras tincidunt mollis quisque. Nam commodo mus molestie odio facilisis faucibus fringilla eu, tincidunt justo congue urna lacinia rutrum mattis viverra, vehicula auctor velit eleifend luctus accumsan lectus. Dictum praesent fusce elementum tristique viverra urna tortor, quam sollicitudin eu at integer neque. Libero cubilia habitant porta tempus malesuada sapien nulla convallis non, imperdiet feugiat fringilla ridiculus et rhoncus nam sollicitudin. Sagittis vel nisl leo phasellus placerat et congue aliquam mauris scelerisque ultricies, ullamcorper laoreet dictumst vehicula luctus convallis duis aptent etiam faucibus, suscipit quam dapibus risus nostra facilisis cum fermentum conubia vitae. Habitasse mollis curabitur leo ligula sodales consequat mus, eu quis interdum mauris dictumst lectus taciti convallis, pharetra scelerisque hendrerit phasellus tempor parturient. Justo tempus nam sociosqu nisl duis cras inceptos vehicula porta, dictumst mauris iaculis proin est velit aenean vulputate lectus, molestie morbi condimentum fringilla commodo posuere ante hac. Condimentum netus vehicula neque eros hendrerit aptent suscipit viverra fusce placerat elementum, scelerisque cubilia faucibus tristique nascetur ut sapien taciti ligula euismod gravida pellentesque, etiam quam laoreet tellus mus platea vestibulum lectus malesuada facilisis.",
  },
  {
    brand: "yamaha",
    model: "fz 25",
    price: "90,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan, ridiculus inceptos placerat venenatis nunc convallis vivamus sodales purus, curabitur sed nisi cras tincidunt mollis quisque. Nam commodo mus molestie odio facilisis faucibus fringilla eu, tincidunt justo congue urna lacinia rutrum mattis viverra, vehicula auctor velit eleifend luctus accumsan lectus. Dictum praesent fusce elementum tristique viverra urna tortor, quam sollicitudin eu at integer neque. Libero cubilia habitant porta tempus malesuada sapien nulla convallis non, imperdiet feugiat fringilla ridiculus et rhoncus nam sollicitudin. Sagittis vel nisl leo phasellus placerat et congue aliquam mauris scelerisque ultricies, ullamcorper laoreet dictumst vehicula luctus convallis duis aptent etiam faucibus, suscipit quam dapibus risus nostra facilisis cum fermentum conubia vitae. Habitasse mollis curabitur leo ligula sodales consequat mus, eu quis interdum mauris dictumst lectus taciti convallis, pharetra scelerisque hendrerit phasellus tempor parturient. Justo tempus nam sociosqu nisl duis cras inceptos vehicula porta, dictumst mauris iaculis proin est velit aenean vulputate lectus, molestie morbi condimentum fringilla commodo posuere ante hac. Condimentum netus vehicula neque eros hendrerit aptent suscipit viverra fusce placerat elementum, scelerisque cubilia faucibus tristique nascetur ut sapien taciti ligula euismod gravida pellentesque, etiam quam laoreet tellus mus platea vestibulum lectus malesuada facilisis.",
  },
  {
    brand: "hero",
    model: "deluxe hf",
    price: "80,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan, ridiculus inceptos placerat venenatis nunc convallis vivamus sodales purus, curabitur sed nisi cras tincidunt mollis quisque. Nam commodo mus molestie odio facilisis faucibus fringilla eu, tincidunt justo congue urna lacinia rutrum mattis viverra, vehicula auctor velit eleifend luctus accumsan lectus. Dictum praesent fusce elementum tristique viverra urna tortor, quam sollicitudin eu at integer neque. Libero cubilia habitant porta tempus malesuada sapien nulla convallis non, imperdiet feugiat fringilla ridiculus et rhoncus nam sollicitudin. Sagittis vel nisl leo phasellus placerat et congue aliquam mauris scelerisque ultricies, ullamcorper laoreet dictumst vehicula luctus convallis duis aptent etiam faucibus, suscipit quam dapibus risus nostra facilisis cum fermentum conubia vitae. Habitasse mollis curabitur leo ligula sodales consequat mus, eu quis interdum mauris dictumst lectus taciti convallis, pharetra scelerisque hendrerit phasellus tempor parturient. Justo tempus nam sociosqu nisl duis cras inceptos vehicula porta, dictumst mauris iaculis proin est velit aenean vulputate lectus, molestie morbi condimentum fringilla commodo posuere ante hac. Condimentum netus vehicula neque eros hendrerit aptent suscipit viverra fusce placerat elementum, scelerisque cubilia faucibus tristique nascetur ut sapien taciti ligula euismod gravida pellentesque, etiam quam laoreet tellus mus platea vestibulum lectus malesuada facilisis.",
  },
  {
    brand: "suzuki",
    model: "hayabusa 2021",
    price: "2,00,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan, ridiculus inceptos placerat venenatis nunc convallis vivamus sodales purus, curabitur sed nisi cras tincidunt mollis quisque. Nam commodo mus molestie odio facilisis faucibus fringilla eu, tincidunt justo congue urna lacinia rutrum mattis viverra, vehicula auctor velit eleifend luctus accumsan lectus. Dictum praesent fusce elementum tristique viverra urna tortor, quam sollicitudin eu at integer neque. Libero cubilia habitant porta tempus malesuada sapien nulla convallis non, imperdiet feugiat fringilla ridiculus et rhoncus nam sollicitudin. Sagittis vel nisl leo phasellus placerat et congue aliquam mauris scelerisque ultricies, ullamcorper laoreet dictumst vehicula luctus convallis duis aptent etiam faucibus, suscipit quam dapibus risus nostra facilisis cum fermentum conubia vitae. Habitasse mollis curabitur leo ligula sodales consequat mus, eu quis interdum mauris dictumst lectus taciti convallis, pharetra scelerisque hendrerit phasellus tempor parturient. Justo tempus nam sociosqu nisl duis cras inceptos vehicula porta, dictumst mauris iaculis proin est velit aenean vulputate lectus, molestie morbi condimentum fringilla commodo posuere ante hac. Condimentum netus vehicula neque eros hendrerit aptent suscipit viverra fusce placerat elementum, scelerisque cubilia faucibus tristique nascetur ut sapien taciti ligula euismod gravida pellentesque, etiam quam laoreet tellus mus platea vestibulum lectus malesuada facilisis.",
  },
];

const brands = ["honda", "royal enfield", "ktm", "yamaha", "hero", "suzuki"];

const models = {
  honda: ["activa 6G"],
  "royal enfield": ["classic 350", "Royal Enfield Himalayan"],
  ktm: ["duke 200"],
  yamaha: ["fz 25"],
  hero: ["deluxe hf"],
  suzuki: ["hayabusa 2021"],
};

const bikeDetails = {
  "activa 6G": {
    brand: "honda",
    price: "80,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan, ridiculus inceptos placerat venenatis nunc convallis vivamus sodales purus, curabitur sed nisi cras tincidunt mollis quisque. Nam commodo mus molestie odio facilisis faucibus fringilla eu, tincidunt justo congue urna lacinia rutrum mattis viverra, vehicula auctor velit eleifend luctus accumsan lectus. Dictum praesent fusce elementum tristique viverra urna tortor, quam sollicitudin eu at integer neque. Libero cubilia habitant porta tempus malesuada sapien nulla convallis non, imperdiet feugiat fringilla ridiculus et rhoncus nam sollicitudin. Sagittis vel nisl leo phasellus placerat et congue aliquam mauris scelerisque ultricies, ullamcorper laoreet dictumst vehicula luctus convallis duis aptent etiam faucibus, suscipit quam dapibus risus nostra facilisis cum fermentum conubia vitae. Habitasse mollis curabitur leo ligula sodales consequat mus, eu quis interdum mauris dictumst lectus taciti convallis, pharetra scelerisque hendrerit phasellus tempor parturient. Justo tempus nam sociosqu nisl duis cras inceptos vehicula porta, dictumst mauris iaculis proin est velit aenean vulputate lectus, molestie morbi condimentum fringilla commodo posuere ante hac. Condimentum netus vehicula neque eros hendrerit aptent suscipit viverra fusce placerat elementum, scelerisque cubilia faucibus tristique nascetur ut sapien taciti ligula euismod gravida pellentesque, etiam quam laoreet tellus mus platea vestibulum lectus malesuada facilisis.",
  },

  "classic 350": {
    brand: "royal enfield",
    price: "1,20,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan, ridiculus inceptos placerat venenatis nunc convallis vivamus sodales purus, curabitur sed nisi cras tincidunt mollis quisque. Nam commodo mus molestie odio facilisis faucibus fringilla eu, tincidunt justo congue urna lacinia rutrum mattis viverra, vehicula auctor velit eleifend luctus accumsan lectus. Dictum praesent fusce elementum tristique viverra urna tortor, quam sollicitudin eu at integer neque. Libero cubilia habitant porta tempus malesuada sapien nulla convallis non, imperdiet feugiat fringilla ridiculus et rhoncus nam sollicitudin. Sagittis vel nisl leo phasellus placerat et congue aliquam mauris scelerisque ultricies, ullamcorper laoreet dictumst vehicula luctus convallis duis aptent etiam faucibus, suscipit quam dapibus risus nostra facilisis cum fermentum conubia vitae. Habitasse mollis curabitur leo ligula sodales consequat mus, eu quis interdum mauris dictumst lectus taciti convallis, pharetra scelerisque hendrerit phasellus tempor parturient. Justo tempus nam sociosqu nisl duis cras inceptos vehicula porta, dictumst mauris iaculis proin est velit aenean vulputate lectus, molestie morbi condimentum fringilla commodo posuere ante hac. Condimentum netus vehicula neque eros hendrerit aptent suscipit viverra fusce placerat elementum, scelerisque cubilia faucibus tristique nascetur ut sapien taciti ligula euismod gravida pellentesque, etiam quam laoreet tellus mus platea vestibulum lectus malesuada facilisis.",
  },

  "Royal Enfield Himalayan": {
    brand: "royal enfield",
    price: "2,00,000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan, ridiculus inceptos placerat venenatis nunc convallis vivamus sodales purus, curabitur sed nisi cras tincidunt mollis quisque. Nam commodo mus molestie odio facilisis faucibus fringilla eu, tincidunt justo congue urna lacinia rutrum mattis viverra, vehicula auctor velit eleifend luctus accumsan lectus. Dictum praesent fusce elementum tristique viverra urna tortor, quam sollicitudin eu at integer neque. Libero cubilia habitant porta tempus malesuada sapien nulla convallis non, imperdiet feugiat fringilla ridiculus et rhoncus nam sollicitudin. Sagittis vel nisl leo phasellus placerat et congue aliquam mauris scelerisque ultricies, ullamcorper laoreet dictumst vehicula luctus convallis duis aptent etiam faucibus, suscipit quam dapibus risus nostra facilisis cum fermentum conubia vitae. Habitasse mollis curabitur leo ligula sodales consequat mus, eu quis interdum mauris dictumst lectus taciti convallis, pharetra scelerisque hendrerit phasellus tempor parturient. Justo tempus nam sociosqu nisl duis cras inceptos vehicula porta, dictumst mauris iaculis proin est velit aenean vulputate lectus, molestie morbi condimentum fringilla commodo posuere ante hac. Condimentum netus vehicula neque eros hendrerit aptent suscipit viverra fusce placerat elementum, scelerisque cubilia faucibus tristique nascetur ut sapien taciti ligula euismod gravida pellentesque, etiam quam laoreet tellus mus platea vestibulum lectus malesuada facilisis.",
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

export { brands, models, bikeDetails, allBikesData };
