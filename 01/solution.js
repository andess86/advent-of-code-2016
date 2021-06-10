const fs = require("fs");

const text = fs.readFileSync("input.txt", "utf-8", (text, err) => {
  if (err) {
    console.log(err);
  }
});

let coords = [0, 0];
const directions = text.split(", ");
let heading = "N";
directions.map((direction) => {
  let h = direction.substring(0, 1);
  let n = parseInt(direction.substring(1));
  switch (h) {
    case "L":
      switch (heading) {
        case "N":
          heading = "W";
          coords[0] = coords[0] - n;
          break;
        case "W":
          heading = "S";
          coords[1] = coords[1] - n;
          break;
        case "S":
          heading = "E";
          coords[0] = coords[0] + n;
          break;
        case "E":
          heading = "N";
          coords[1] = coords[1] + n;
          break;

        default:
          break;
      }
      break;

    case "R":
      switch (heading) {
        case "N":
          heading = "E";
          coords[0] = coords[0] + n;
          break;
        case "E":
          heading = "S";
          coords[1] = coords[1] - n;
          break;
        case "S":
          heading = "W";
          coords[0] = coords[0] - n;
          break;
        case "W":
          heading = "N";
          coords[1] = coords[1] + n;
          break;
        default:
          break;
      }

      break;

    default:
      break;
  }
});
console.log(coords);
console.log("Easter Bunny HQ is", coords[0] + coords[1] + " blocks away");
