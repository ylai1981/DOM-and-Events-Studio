// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.onload = function() {
    alert("Get ready for your flight simulator experience!");
    const button1 = document.getElementById("takeoff");
    const button2 = document.getElementById("landing");
    const button3 = document.getElementById("missionAbort");
    const img = document.getElementById("rocket");
    var height = 10000;
    

    button1.addEventListener("click", function(){
        var readyLaunch = confirm("Confirm that the shuttle is ready for takeoff.");
    
        if(readyLaunch == true){
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = 10000;
        }
    });

    button2.addEventListener("click", function(){
        alert("The shuttle is landing. Landing gear engaged.");

        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
               
    });

    button3.addEventListener("click", function(){
        var abort = confirm("Confirm that you want to abort the mission.");

        if(abort == true){
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
        }
    });

    document.getElementById("up").addEventListener("click", function(){
        img.style.top = `${img.offsetTop - 10}px`;
        document.getElementById("spaceShuttleHeight").innerHTML = height += 10000;

    });
        

    document.getElementById("down").addEventListener("click", function(){
        img.style.top = `${img.offsetTop + 10}px`;
        document.getElementById("spaceShuttleHeight").innerHTML = height -= 10000;
    });

    document.getElementById("left").addEventListener("click", function(){
        img.style.left = `${img.offsetLeft - 10}px`;
    });

    document.getElementById("right").addEventListener("click", function(){
        img.style.left = `${img.offsetLeft + 10}px`;
    });
}



