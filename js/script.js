document.addEventListener("DOMContentLoaded", () => {
    const signinBtn = document.getElementById("signinBtn");
    const readMoreBtn = document.getElementById("readMoreBtn");

    if (signinBtn) {
        signinBtn.addEventListener("click", () => {
            alert("Sign-in model is opening!");
        });
    }

    if (readMoreBtn) {
        readMoreBtn.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth"
            });
        });
    }
});