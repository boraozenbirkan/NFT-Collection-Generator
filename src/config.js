const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Bora's Dummy Collection";
const description = "This dummies made it here so far!";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [

  // If you want to have 10k collection with accurate rarities, you should aim to generate 200k images. 
  // Formula is: (layer1 size) * (layer2 size) * (layer3 size) = Total Size
  // For this test: 3 * 1 * 3 * 3 * 5 = 135. I can generate 10 images with accurate rarity.

  // 16,875 > 8,000       1k accurate
  // 3,375	 > 2,225      280 accurate
  // 675	 > 521
  // 225 	 > 205
  // 135	 > 132
  // 90 	 > 89
  // 45 	 > 45         

  {
    growEditionSizeTo: 1000,
    layersOrder: [  // I have 20k element. 
      { name: "Background" },
      { name: "Body" },
      { name: "Eye" },
      { name: "Mouth" },
      { name: "Extra" },
      { name: "Accessory" },
    ],
  },/*
  {
    growEditionSizeTo: 10000,   // Add the number to previous one. If you want to have 10k collection from 2 types where each type has 5k images. You should make the size of first type 5k and second type 10k. 
    layersOrder: [
      { name: "Background" },
      { name: "Type2 Body" },
      { name: "Type2 Eye" },
      { name: "Type2 Mouth" },
      { name: "Type2 Extra" },
      { name: "Type2 Extra1" },
      { name: "Type2 Extra2" },
    ],
  },*/
];

// Mix the Types to have random generation
const shuffleLayerConfigurations = false;

const debugLogs = false;

// Image sizes
const format = {
  width: 512,      // Change it to your original size
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 100000; // Default: 10000

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
