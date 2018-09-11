import {genContainer, drainAppContainers} from "Settings/Helpers";
import {CONTENT, LOGO} from "Enum/Vanilla";

let body = document.querySelector("body");
let masterContainer = body.querySelector("#vanilla-container");


let containerGenerator = genContainer(2);
let miniAppContainers = drainAppContainers(containerGenerator);

//<editor-fold desc="Content Section">
let mainContent = miniAppContainers[CONTENT];
mainContent.style.width = "75%";
let h1Node = document.createElement("h1");
h1Node.innerHTML = "Hello World from Vanilla JS!";
mainContent.appendChild(h1Node);
//</editor-fold>

//<editor-fold desc="Logo Section">

//</editor-fold>
let logoHolder = miniAppContainers[LOGO];
logoHolder.style.width = "25%";
logoHolder.style.height = "100%";
let imgNode = document.createElement("img");
imgNode.src = "./img/javascript.png";
logoHolder.style.display = "flex";
logoHolder.style.flexDirection = "row";
logoHolder.style.flexWrap = "wrap";
logoHolder.style.justifyContent = "flex-end";
logoHolder.style.alignItems = "flex-end";
imgNode.style.width = "40%";
imgNode.style.height = "40%";
imgNode.style.position = "relative";
imgNode.style.right = "10px";
imgNode.style.bottom = "10px";
imgNode.style.borderRadius = "5px";
logoHolder.appendChild(imgNode);

miniAppContainers.map(miniAppContainer => masterContainer.appendChild(miniAppContainer));