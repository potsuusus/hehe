function openLetter() {

    const intro = document.getElementById("intro");
    const letterSection = document.getElementById("letterSection");
    const envelope = document.getElementById("envelope");

    intro.style.display = "none";

    letterSection.classList.add("show");

    setTimeout(() => {
        envelope.classList.add("open");
    }, 500);

    setTimeout(() => {

        document
            .getElementById("continueContainer")
            .classList.add("show");

    }, 1800);
}


function showMemory() {

    const memorySection =
        document.getElementById("memorySection");

    memorySection.classList.add("show");

    setTimeout(() => {

        memorySection.scrollIntoView({
            behavior: "smooth"
        });

    }, 100);

}