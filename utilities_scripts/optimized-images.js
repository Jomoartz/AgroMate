const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputFilePath = path.join(__dirname, 'app', 'logo_480.png');
const outputFilePath = path.join(__dirname, './app', 'assets', 'logo_480.png');

// Function to process a single image
const processImage = async () => {
  try {
    // Check if the file exists before processing
    if (fs.existsSync(inputFilePath)) {
      console.log(`Processing: ${inputFilePath}`);

      // Optimize the image using Sharp
      await sharp(inputFilePath)
        .resize({ width: 1242, height: 2436, fit: 'cover' }) // Resize to specific dimensions with fit cover
        .toFile(outputFilePath); // Save optimized image to output directory

      console.log('Image has been optimized!');
    } else {
      console.error('File does not exist:', inputFilePath);
    }
  } catch (err) {
    console.error('Error processing image:', err);
  }
};

// Execute the function
processImage();
