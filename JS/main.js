const filterButtons = document.querySelectorAll(".filtterButton button");
const filterableCards = document.querySelectorAll(".filterable_card .card");

const filterCards = (e) => {
    document.querySelector(".active").classList.remove("active");

    e.target.classList.add("active");

    const filterCategory = e.target.dataset.name;

    filterableCards.forEach(card => {

        card.classList.add("hide");

        if (card.dataset.name === filterCategory || filterCategory === "all") {
            card.classList.remove("hide");
        }
    });
};

filterButtons.forEach(button => button.addEventListener("click", filterCards));
