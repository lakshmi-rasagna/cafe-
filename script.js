

function filterMenu(category) {

    const cards = document.querySelectorAll(".menu-card");

    cards.forEach(function(card) {

        if (category === "all") {

            card.style.display = "block";

        } else if (card.classList.contains(category)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}




function submitForm(event) {

    event.preventDefault();

    alert("Thank you! Your message has been received.");

    event.target.reset();

}




const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});