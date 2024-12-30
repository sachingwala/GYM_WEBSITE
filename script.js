
// Functionality for interactive cards
const cards = document.querySelectorAll(".card .btn");
cards.forEach(card => {
    card.addEventListener("click", () => {
        alert("Membership selected! Proceed to payment.");
    });
});

// Scroll animations for sections
const sections = document.querySelectorAll("section");
sections.forEach(section => {
    gsap.from(section, { 
        scrollTrigger: {
            trigger: section,
            start: "top 80%"
        },
        opacity: 0,
        y: 50,
        duration: 1
    });
});
    