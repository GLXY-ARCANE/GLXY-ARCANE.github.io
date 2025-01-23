document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // Create the hover effect element
    const hoverEffect = document.createElement("div");
    hoverEffect.classList.add("hover-effect");
    body.appendChild(hoverEffect);

    // Event listeners for hoverable elements
    const hoverTargets = document.querySelectorAll("a, button, .aboutSection, .goalsSection");
    hoverTargets.forEach(target => {
        target.addEventListener("mouseenter", (e) => {
            const rect = e.target.getBoundingClientRect();
            hoverEffect.style.left = `${rect.left + rect.width / 2}px`;
            hoverEffect.style.top = `${rect.top + rect.height / 2 + window.scrollY}px`;
            hoverEffect.style.transform = "translate(-50%, -50%) scale(1)";
        });

        target.addEventListener("mouseleave", () => {
            hoverEffect.style.transform = "translate(-50%, -50%) scale(0)";
        });

        target.addEventListener("mousemove", (e) => {
            const rect = e.target.getBoundingClientRect();
            hoverEffect.style.left = `${e.clientX}px`;
            hoverEffect.style.top = `${e.clientY + window.scrollY}px`;
        });
    });
});
