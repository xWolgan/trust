const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(bodyParser.json());

app.use(express.static('public'));

app.post("/save-point", (req, res) => {
  const { pointName, xValue, yValue, zValue, forced } = req.body;

  const pointData = { pointName, xValue, yValue, zValue, forced };
  const filePath = path.join(__dirname, "points", `${pointName}.json`);

  fs.writeFile(filePath, JSON.stringify(pointData), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error saving point data.");
    } else {
      res.status(200).send("Point data saved.");
    }
  });
});


app.get("/load-points", (req, res) => {
  const pointsDir = path.join(__dirname, "points");

  fs.readdir(pointsDir, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading points directory.");
    } else {
      const points = [];

      files.forEach((file) => {
        const filePath = path.join(pointsDir, file);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const pointData = JSON.parse(fileContent);
        const pointName = path.basename(file, ".json");

        points.push({ pointName, ...pointData });
      });

      res.status(200).json(points);
    }
  });
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});