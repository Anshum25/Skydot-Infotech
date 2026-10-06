import https from 'https';
import fs from 'fs';

const url = 'https://raw.githubusercontent.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json';
const dest = 'c:/Users/Admin/Desktop/Skydot Infotech/public/india-states.json';

https.get(url, (res) => {
  const file = fs.createWriteStream(dest);
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Downloaded TopoJSON successfully');
  });
}).on('error', (err) => {
  console.log('Error:', err.message);
});
