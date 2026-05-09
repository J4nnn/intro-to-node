#!/home/j4nn/.local/share/fnm/node-versions/v24.15.0/installation/bin/node
import * as utils from "./utils/index.js";

const note = process.argv[2];
const note2 = process.argv[3];
const newNote = {
  content: note,
  id: Date.now(),
  id: utils.count(0),
};
const newNote2 = {
  content: note2,
  id: Date.now(),
  id: utils.count(),
};

console.log(newNote, newNote2);
