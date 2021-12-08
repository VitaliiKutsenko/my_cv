import mail from "./icon/email.png";
import number from "./icon/smartphone.png";
import location from "./icon/map.png";
import linkedin from "./icon/linkedin.png";
import github from "./icon/github.png";
import photo from "./photo/photo.png";
import ipris from "./icon/ipris.png";
import smt from "./icon/smt.png";
import "./style.css";
const ar = document.querySelector(".frame img");

const links = {
    mail: mail,
    number: number,
    location: location,
    linkedin: linkedin,
    github: github,
};
const list = document.querySelectorAll(".contact li img");
const ltds = document.querySelectorAll("[data-ltd]");

document.body.onload = () => {
    ar.src = photo;
    [...ltds].forEach((icon) => {
        if (icon.dataset.ltd in { ipris, smt }) {
            icon.src = { ipris, smt }[icon.dataset.ltd];
        }
    });
    [...list].forEach((item) => {
        if (item.dataset.contact in links) {
            item.src = links[item.dataset.contact];
        }
    });
    createPixel();
};
function createPixel() {
    const $el = document.querySelector(".head");
    const cube = document.createElement("div");
    cube.className = "cube";
    cube.style.borderRadius = "1px";
    $el.append(cube);
    cube.style.background = "rgba(125,125,125,0.2)";
    cube.style.position = "absolute";
    const XY = parseFloat(getComputedStyle($el).height) / 40;
    const widthEl = parseFloat(getComputedStyle($el).width);
    const heightEl = parseFloat(getComputedStyle($el).height);

    cube.style.width = XY + "px";
    cube.style.height = XY + "px";
    let arr = "";

    function createPixel() {
        for (let i = XY - XY; i <= widthEl; i = i + XY + 0.5) {
            for (let z = XY - XY; z <= heightEl; z = z + XY + 0.5) {
                arr += `rgba(125,125,125,${
                    createRandomMinMax(10, 20) / getRandom()
                }) ${i}px ${z}px,`;
                cube.style.boxShadow = arr.slice(0, arr.length - 1);
            }
        }
    }
    createPixel();
    function createRandomMinMax(min, max) {
        return Math.floor(min + Math.random() * max + 1 - min);
    }

    function getRandom() {
        return Math.random() * 10 >= 5 ? 100 : 200;
    }
}
