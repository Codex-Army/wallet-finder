// Initialize EmailJS with your public API key
(function() {
    emailjs.init("REYAKW-Bk4kYulDIf"); // Replace with your actual public API key
})();

function sendLocationEmail() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const message = `I found your wallet! The current location is: Latitude: ${latitude}, Longitude: ${longitude}`;

    // Send email with geolocation data
    emailjs.send("service_nuic9cx", "template_8jjfldp", {
        to_name: "Murad",
        message: message
    }).then(function(response) {
        alert("Email with location sent successfully!");
    }, function(error) {
        alert("Failed to send email: " + JSON.stringify(error));
    });
}

function showError(error) {
    alert("Error retrieving location.");
}
