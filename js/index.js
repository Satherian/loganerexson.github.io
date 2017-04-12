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
    resultString += "<li>Modifier: "+mod+"</li>";
    resultString += "<li>Carrying Capacity: "+ capacity+" lb</li>";
    resultString += "<li>Push/Drag/Lift Limit: "+capacity*2+" lb</li>";
    resultString += "<li>Long Jump:<ul><li>10-foot-Run: " + longJump + 
        " ft.</li><li>Standing: " + longJump/2 +" ft.</li></ul></li>";
    resultString += "<li>High Jump: "+highJump+" ft.</li></ul>";

    var strResults = document.getElementById("strResults");
    strResults.innerHTML = resultString;
}