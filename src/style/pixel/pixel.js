import { createPixel } from "./helper.js";

const $el = document.querySelector(".head");
const cube = document.createElement("div");
cube.className = "cube";
cube.style.background = "rgba(125,125,125,0.1)";
cube.style.position = "absolute";
$el.append(cube);
export function getPixel() {
    const XY = parseFloat(getComputedStyle($el).height) / 60;
    cube.style.width = XY + "px";
    cube.style.height = XY + "px";
    let widthEl = parseFloat(getComputedStyle($el).width);
    let heightEl = parseFloat(getComputedStyle($el).height);
    cube.style.boxShadow = createPixel(widthEl, heightEl, XY);
}
function debounce(func, wait, immediate) {
    let timeout;
    return !(() => {
        const context = this,
            args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    })();
}
const ro = new ResizeObserver((entries) => {
    for (let entry of entries) {
        if (entry.contentRect.width) {
            debounce(getPixel, 1000, false);
        }
    }
});

// мы можем следить за любым количеством элементов
ro.observe($el);

// window.addEventListener("resize", debounce(getPixel, 500, false), false);
