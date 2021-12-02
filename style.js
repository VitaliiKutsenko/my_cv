const style = (path) => {
    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = `./style/${path}.css`;
    document.head.append(style);
};
style("photo");
style("contact");
style("education");
style("language");
style("skills");
style("employments");
style("books");
const ar = document.querySelector(".frame img");

const links = {
    mail: "./src/icon/email.png",
    number: " ./src/icon/smartphone.png",
    location: "./src/icon/map.png",
    linkedin: "./src/icon/linkedin.png",
    github: "./src/icon/github.png",
};
const list = document.querySelectorAll(".contact li img");
console.dir(list.dataset);
document.body.onload = () => {
    ar.src = "./src/photo/photo.png";
    [...list].forEach((item) => {
        if (item.dataset.contact in links) {
            item.src = links[item.dataset.contact];
            // console.log(item.children);
        }
        // console.log(item.dataset.contact);
    });
    // console.dir(document.body);
};
//

console.log(ar.src);
