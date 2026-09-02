function showMessage(part) {

    alert(
        "You selected: " +
        part +
        "\n\nPlease contact Star Auto Parts for availability and pricing."
    );

}


document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        alert(
            "Thank you, " +
            name +
            "!\n\nYour message has been received."
        );

        this.reset();

    });