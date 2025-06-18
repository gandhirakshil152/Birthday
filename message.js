window.onload = function() {
    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("di");

    // Ensure the first div is visible
    div1.style.display = "block";

    // After 5 seconds, hide the first div and show the second one
    setTimeout(() => {
        div1.style.display = "none";
        div2.style.display = "block";
    }, 5000);
};
