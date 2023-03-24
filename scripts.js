// Initialize Three.js 3D graph
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('#333335');
document.getElementById('3d-graph').appendChild(renderer.domElement);
//camera.position.z = 30;
camera.up.set(0, 0, 1);
camera.position.set(0, 0, 30);


// camera.lookAt(scene.position);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
// controls.target.set(0, 10, 0); // Set target higher in Y-axis
controls.enableDamping = true;
controls.dampingFactor = 0.1;
controls.screenSpacePanning = false;
controls.minDistance = 20;
controls.maxDistance = 50;
// controls.maxPolarAngle = Math.PI / 2;
//controls.minPolarAngle = Math.PI / 2; // 90 degrees (up to 180 degrees around the X-axis)
//controls.maxPolarAngle = Math.PI; // 180 degrees (up to 90 degrees around the Z-axis)
controls.minPolarAngle = 0;
controls.maxPolarAngle = Math.PI;
controls.minAzimuthAngle = 0;
controls.maxAzimuthAngle = Math.PI / 2;
controls.enableRotate = true;
controls.autoRotate = false;

const pointNameInput = document.getElementById("point-name");
const xValueInput = document.getElementById("x-value");
const yValueInput = document.getElementById("y-value");
const zValueInput = document.getElementById("z-value");
const addButton = document.getElementById("add-button");

function createCustomAxes(length) {
  const axesGroup = new THREE.Group();
  const material = new THREE.LineBasicMaterial({ color: 0xffffff });


  // Create the x, y, z axes lines
  const xLine = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(length, 0, 0),
  ]);
  const yLine = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, -length, 0),
    new THREE.Vector3(0, 0, 0),
  ]);
  const zLine = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0, -length),
    new THREE.Vector3(0, 0, length),
  ]);

  axesGroup.add(new THREE.Line(xLine, material));
  axesGroup.add(new THREE.Line(yLine, material));
  axesGroup.add(new THREE.Line(zLine, material));

  // Add integer marks and labels
  const loader = new THREE.FontLoader();
  loader.load("https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_regular.typeface.json", (font) => {
    for (let i = 1; i <= length; i++) {
  //    if (i === 0) continue;

      // X axis marks and labels
 //     createAxisMarkAndLabel(axesGroup, font, i, new THREE.Vector3(i, 0, 0));

      // Y axis marks and labels
 //     createAxisMarkAndLabel(axesGroup, font, i, new THREE.Vector3(0, -i, 0));

      // Z axis marks and labels
//      createAxisMarkAndLabel(axesGroup, font, i, new THREE.Vector3(0, 0, i));
 //     createAxisMarkAndLabel(axesGroup, font, i, new THREE.Vector3(0, 0, -i));
    }
  });

  return axesGroup;
}

function createAxisMarkAndLabel(group, font, value, position, axis) {
  const markSize = 0.05;
  const material = new THREE.MeshBasicMaterial({ color: 0x000000 });

  const markGeometry = new THREE.BoxGeometry(markSize, markSize, markSize);
  const mark = new THREE.Mesh(markGeometry, material);
  mark.position.copy(position);
  group.add(mark);

  const textGeometry = new THREE.TextGeometry(value.toString(), {
    font: font,
    size: 0.3,
    height: 0.1,
  });

  const textMesh = new THREE.Mesh(textGeometry, material);
  const offset = 0.1;

  switch (axis) {
    case "X":
      textMesh.position.set(position.x - offset, position.y + offset, position.z + offset);
      break;
    case "Y":
      textMesh.position.set(position.x + offset, position.y - offset, position.z + offset);
      break;
    case "Z":
      textMesh.position.set(position.x + offset, position.y + offset, position.z - offset);
      break;
  }

  group.add(textMesh);
}

const customAxes = createCustomAxes(10);
scene.add(customAxes);

let scene2Dxy, scene2Dxz, scene2Dyz, camera2Dxy, camera2Dxz, camera2Dyz, renderer2Dxy, renderer2Dxz, renderer2Dyz;

function drawQuarterCircles() {
  const circleMaterial = new THREE.LineBasicMaterial({ color: 0x444444 });

  for (let i = 2; i <= 10; i += 2) {
    const circleRadius = i;
    const circleSegments = 64;
    const circleBufferGeometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let j = 0; j <= circleSegments; j++) {
      const theta = -(Math.PI / 2) * j / circleSegments;
      // const theta = (Math.PI / 2) * (1 - j / circleSegments);
      const x = circleRadius * Math.cos(theta);
      const y = circleRadius * Math.sin(theta);
      vertices.push(x, 0, y);
    }

    circleBufferGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const circle = new THREE.Line(circleBufferGeometry, circleMaterial);
    circle.rotation.x = -Math.PI / 2;
    scene.add(circle);
  }
}
const forcedValueInput = document.getElementById("forced-value");

addButton.addEventListener("click", () => {
  const pointName = pointNameInput.value;
  const xValue = parseFloat(xValueInput.value);
  const yValue = parseFloat(yValueInput.value);
  const zValue = parseFloat(zValueInput.value); 
  const forcedValue = forcedValueInput.value === "1";


  if (!isNaN(xValue) && !isNaN(yValue) && !isNaN(zValue)) {
    const adjustedZValue = forcedValue ? -zValue : zValue;
    addPointToScene(pointName, xValue, yValue, adjustedZValue);
    savePoint(pointName, xValue, yValue, adjustedZValue, forcedValue)
      .then(() => {
        console.log("Point saved");
      })
      .catch((error) => {
        console.error("Error saving point:", error);
      });
   
 //   const color = new THREE.Color(xValue / 20, yValue / 20, zValue / 20); 
 //   const geometry = new THREE.SphereGeometry(0.1, 16, 16);
 //   const material = new THREE.MeshBasicMaterial({ color });
 //   const sphere = new THREE.Mesh(geometry, material);
 //   sphere.position.set(xValue, yValue, adjustedZValue);
 //   scene.add(sphere);
  }
});

function createAxisTitle(font, text, position, color, rotation) {
  const material = new THREE.MeshBasicMaterial({ color: color });
  const textGeometry = new THREE.TextGeometry(text, {
    font: font,
    size: 0.3,
    height: 0.1,
  });

  const textMesh = new THREE.Mesh(textGeometry, material);
  textMesh.position.copy(position);
  if (rotation) {
    textMesh.rotation.copy(rotation);
  }
  return textMesh;
}

function addAxisLabels(group, font) {
  const xAxisLabel = createAxisTitle(font, "RELIABILITY", new THREE.Vector3(length + 3.5, 0.5, 0), 0xA83232); // red
  const yAxisLabel = createAxisTitle(font, "ALIGNMENT", new THREE.Vector3(- 0.5, -length - 5.5, 0), 0xD4AF37, new THREE.Euler(0, 0, Math.PI / 2)); // yellow
  const zAxisLabelPositive = createAxisTitle(font, "ENERGY", new THREE.Vector3( - 0.5, 0, length + 5), 0xD46A2C, new THREE.Euler(Math.PI / 2, 0, Math.PI / 2)); // orange
  const zAxisLabelWilling = createAxisTitle(font, "VOLUNTARY TRUST", new THREE.Vector3( 5, - 8.5, length + 0.5), 0x808080, new THREE.Euler(Math.PI / 2, Math.PI / 4, 0)); // grey
  const zAxisLabelForced = createAxisTitle(font, "FORCED TRUST", new THREE.Vector3(5.5, - 8, -length - 1), 0x808080, new THREE.Euler(Math.PI / 2, Math.PI / 4, 0)); // grey

  group.add(xAxisLabel);
  group.add(yAxisLabel);
  group.add(zAxisLabelPositive);
  group.add(zAxisLabelWilling);
  group.add(zAxisLabelForced);
}

//const customAxes = createCustomAxes(10);
//scene.add(customAxes);

const loader = new THREE.FontLoader();
loader.load("https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_regular.typeface.json", (font) => {
  addAxisLabels(customAxes, font);
});



function addPointToScene(pointName, xValue, yValue, zValue, forced) {
  // Set base colors
  const color = new THREE.Color();
  const blueBase = new THREE.Color(0x7080a0);
  const orangeBase = new THREE.Color(0xa07030);
  
// Calculate brightness based on zValue
  const brightness = 1 - (zValue / 20);

// Make orange points more red or yellow based on position
  if (zValue > 0) {
    const redFactor = xValue / 20;
    const yellowFactor = yValue / 20;
    color.lerp(new THREE.Color(1, 0, 0), redFactor);
    color.lerp(new THREE.Color(1, 1, 0), yellowFactor);
  } else {
    // Make blue points greener or bluer based on position
    const greenFactor = xValue / 20;
    const blueFactor = yValue / 20;
    color.lerp(new THREE.Color(0, 1, 0.5), greenFactor);
    color.lerp(new THREE.Color(0, 0.5, 1), blueFactor);

  }

  // const color = new THREE.Color(xValue / 20, yValue / 20, zValue / 20);
  const geometry = new THREE.SphereGeometry(0.1, 16, 16);
  const material = new THREE.MeshBasicMaterial({ color });
  const sphere = new THREE.Mesh(geometry, material);
  const adjustedZValue = forced ? -zValue : zValue;
  sphere.position.set(xValue, -yValue, adjustedZValue);
  scene.add(sphere);

// Create canvas with text
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.font = '20px Arial';

// Calculate text width and center it on the canvas
const textWidth = ctx.measureText(pointName).width;
canvas.width = (textWidth + 1); // Add some padding to the canvas width
canvas.height = 30;  // Set canvas height considering the font size and some padding

  ctx.fillStyle = 'white';
  ctx.textBaseline = 'middle';
  ctx.fillText(pointName, (canvas.width - textWidth) / 2, canvas.height / 2);

  // ctx.fillText(pointName, 0, 20);

  // Create sprite with the canvas as a texture
  const texture = new THREE.CanvasTexture(canvas);
  const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
  const sprite = new THREE.Sprite(spriteMaterial);

  // Scale and position the sprite
  
  const scale = 0.04;
  sprite.scale.set(canvas.width * scale, canvas.height * scale, 1);
  sprite.position.set(xValue, -yValue, adjustedZValue);
  scene.add(sprite);
// Set the sprite's center to align with the sphere's center
  sprite.center.set(0.5, 0.5);
}

function savePoint(pointName, xValue, yValue, zValue, forced) {
  return fetch("http://localhost:3000/save-point", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pointName, xValue, yValue, zValue, forced }),
  });
}

function loadPoints() {
  return fetch("http://localhost:3000/load-points")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error loading points");
      }
      return response.json();
    })
    .then((points) => {
      points.forEach((point) => {
        const { pointName, xValue, yValue, zValue, forced } = point;
        const adjustedZValue = zValue;
        addPointToScene(pointName, xValue, yValue, adjustedZValue);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

drawQuarterCircles();
loadPoints().then(() =>{;
animate();
});