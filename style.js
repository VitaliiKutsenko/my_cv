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
