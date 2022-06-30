const whiteBox = document.getElementsByClassName("whiteBox");
const imgBox = document.querySelector(".imgBox");

imgBox.addEventListener("dragstart", (e) => {
    e.target.className += " hold";

    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);

});

imgBox.addEventListener("dragend", (e) => {
    e.target.className = "imgBox";
});

for (whiteB of whiteBox) {
    whiteB.addEventListener("dragover", (e) => {
        e.preventDefault();

    });

    whiteB.addEventListener("dragenter", (e) => {
        // e.preventDefault();
        e.target.className += ' dashed';

    });

    whiteB.addEventListener("dragleave", (e) => {
        e.target.className = 'whiteBox'
    });

    whiteB.addEventListener("drop", (e) => {
        e.target.append(imgBox);
    });
}