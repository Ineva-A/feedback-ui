const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");

const containerEl = document.getElementById("container");

let selectedRating = "";

ratingEls.forEach((ratingEls) => {
    ratingEls.addEventListener("click", (event) => {
        removeActive();
        selectedRating =
        event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");

    });
});

btnEl.addEventListener("click", () => {
   if (selectedRating !== "") {
    containerEl.innerHTML = `
    <strong>Thanks you so much!</strong>
    <br>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>With your feedback we want to be better in our work.</p>
    `;
   }
});

function removeActive() {
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
    });
}