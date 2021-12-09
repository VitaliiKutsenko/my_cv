import { createPixel } from "./helper.js";

export function getPixel(element = "header") {
    const $el = document.querySelector(`${element}`);
    const cube = document.createElement("div");
    cube.className = "cube";
    cube.style.background = "rgba(125,125,125,0.1)";
    cube.style.position = "absolute";
    const XY = parseFloat(getComputedStyle($el).height) / 60;
    cube.style.width = XY + "px";
    cube.style.height = XY + "px";
    let widthEl = parseFloat(getComputedStyle($el).width);
    let heightEl = parseFloat(getComputedStyle($el).height);
    cube.style.boxShadow = createPixel(widthEl, heightEl, XY);
    $el.append(cube);
}
