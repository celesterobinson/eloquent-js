// let buildTriangle = (buildingMaterial, height) => {
//   for (let i = 0; i < height; i++) {
//     console.log(buildingMaterial.repeat(i + 1));
//   }
// }

// OR

let buildTriangle = (buildingMaterial, height) => {
  let result = '';
  for (let i = 0; i < height; i++) {
    result += buildingMaterial;
    console.log(result);
  }
}

buildTriangle('#', 20);

