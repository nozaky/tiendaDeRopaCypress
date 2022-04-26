const AdmZip = require("adm-zip");

async function createZipArchive(fileDirectory, outputFile) {
  const zip = new AdmZip();
  zip.addLocalFolder(fileDirectory);
  zip.writeZip(outputFile);
  console.log(`Created ${outputFile} successfully`);
}

//create zip with videos
const fileDirectory = './cypress/videos';
const outDirectory = './videos.zip';
createZipArchive(fileDirectory,outDirectory);