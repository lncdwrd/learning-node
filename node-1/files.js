const fs = require('fs');

// Read File
fs.readFile('./docs/blog1.txt', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

// Create or Modify File
fs.writeFile('./docs/blog1.txt', 'hello world', () => {
  console.log('file was written');
})

fs.writeFile('./docs/blog2.txt', 'hello world', () => {
  console.log('file was written');
})

// Create or Delete Folder
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  });
} else {
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('folder deleted');
  })
}

// Delete File
if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  })
}
