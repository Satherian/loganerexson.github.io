function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function calculateStr(){
    var str = parseFloat(document.getElementById("strScore").value);

    var mod = Math.floor((str - 10) / 2);
    var capacity = 15 * str;
    if(document.getElementById("powBuild").checked){
        capacity *=2;
    }
    if(document.getElementById("isSmall").checked){
        capacity /=2;
    }
    var longJump = str;
    var highJump = ((3+str)/2);

    var resultString = "<h4>Results:</h4><ul>";
    resultString += "<li>Modifier: <b>"+mod+"</b></li>";
    resultString += "<li>Carrying Capacity: <b>"+ capacity+"</b> lb</li>";
    resultString += "<li>Push/Drag/Lift Limit: <b>"+capacity*2+"</b> lb</li>";
    resultString += "<li>Long Jump:<ul><li>10-foot-Run: <b>" + longJump + 
        "</b> ft.</li><li>Standing: <b>" + longJump/2 +"</b> ft.</li></ul></li>";
    resultString += "<li>High Jump: <b>"+highJump+"</b> ft.</li></ul>";

    var strResults = document.getElementById("strResults");
    strResults.innerHTML = resultString;
}

function calculateCon(){
    var con = parseFloat(document.getElementById("conScore").value);

    var mod = Math.floor((con - 10) / 2);
    var breath = Math.max(0.5,(1+mod));

    var resultString = "<h4>Results:</h4><ul>";
    resultString += "<li>Modifier: <b>"+mod+"</b></li>";
    resultString +="<li>You can hold your breath for <b>" + breath + "</b> minutes. When"
        + " you run out of breath, you survive for <b>" + Math.max(1, mod) 
        + "</b> rounds. On the next turn, you drop to 0 hit points and are dying</li></ul>";

    var conResults = document.getElementById("conResults");
    conResults.innerHTML = resultString;
}

function calculateTravel(){
    var speed = parseFloat(document.getElementById("speed").value);

    var perMin = speed*10;
    var perHour = speed/10;
    var perDay = perHour*8;

    var resultString = "<h4>Results:</h4><ul>";
    resultString += "<li>Round (6 seconds): <b>" + speed + "</b> ft.</li>";
    resultString += "<li>1 minute: <b>" + perMin + "</b> ft.</li>";
    resultString += "<li>1 hour (Normal Pace): <b>" + perHour + "</b> mi.</li>";
    resultString += "<li>1 hour (Fast Pace): <b>" + (perHour*4)/3 + "</b> mi.</li>";
    resultString += "<li>1 hour (Slow Pace): <b>" + (perHour*2)/3 + "</b> mi.</li>";
    resultString += "<li>1 Day (Normal Pace): <b>" + perDay + "</b> mi.</li>";
    resultString += "<li>1 Day (Fast Pace): <b>" + (perDay*4)/3 + "</b> mi.</li>";
    resultString += "<li>1 Day (Slow Pace): <b>" + (perDay*2)/3 + "</b> mi.</li>";

    var travelResults = document.getElementById("travelResults");
    travelResults.innerHTML = resultString;
}

function addCoins(){
    var coinInput = document.getElementById("coinInput");
    var coinSelect = document.getElementById("coinSelect");
    var coins = parseInt(coinInput.value);
    var coinType = coinSelect.value;

    var current = document.getElementById(coinType);
    current.textContent = coins + parseInt(current.textContent);
}

function subCoins(){
    var coinInput = document.getElementById("coinInput");
    var coinSelect = document.getElementById("coinSelect");
    var coins = parseInt(coinInput.value);
    var coinType = coinSelect.value;

    var current = document.getElementById(coinType);
    var currentOfType =  parseInt(current.textContent);
    current.textContent =currentOfType-coins;
}
