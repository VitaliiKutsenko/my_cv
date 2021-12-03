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
};
