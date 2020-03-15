// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    console.log("Page is fully loaded.");
    let status = document.getElementById("flightStatus");
    let takeOff = document.getElementById("takeoff");
    let background = document.getElementById("shuttleBackground");
    let height = Number(spaceShuttleHeight.innerHTML);
    let rocketPosition = 0;
    takeOff.addEventListener("click", function() {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            status.innerHTML = "Shuttle in flight.";
            background.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = height + 10000;
        }
    });   
    let land = document.getElementById("landing");
    land.addEventListener("click", function() {
        alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed.";
        background.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    });
    let abort = document.getElementById("missionAbort");
    abort.addEventListener("click", function() {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            status.innerHTML = "Mission aborted.";
            background.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
        }
    });

    let leftButton = document.getElementById("left");
    leftButton.addEventListener("click", function() {
        rocketPosition -= 10;
        rocket.style.left = `${rocketPosition}px`;
    });

    let rightButton = document.getElementById("right");
    rightButton.addEventListener("click", function() {
        rocketPosition += 10;
        rocket.style.left = `${rocketPosition}px`;
    });

    let bottomButton = document.getElementById("down");
    bottomButton.addEventListener("click", function() {
        rocketPosition += 10;
        rocket.style.top = `${rocketPosition}px`;
    });

    let topButton = document.getElementById("up");
    topButton.addEventListener("click", function() {
        rocketPosition -= 10;
        rocket.style.top = `${rocketPosition}px`;
    });

});