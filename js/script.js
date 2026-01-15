document.addEventListener("DOMContentLoaded", () => {
    const signinBtn = document.getElementById("signinBtn");
    const readMoreBtn = document.getElementById("readMoreBtn");

    signinBtn.addEventListener("click", () => {
        alert("SIGN IN tugmasi bosildi.");
    });

    readMoreBtn.addEventListener("click", () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    });
});
