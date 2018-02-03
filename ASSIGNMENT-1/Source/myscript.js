function onSubmit() {
    var x = document.forms["demo"]["firstname"].value;
    var y = document.forms["demo"]["lastname"].value;
    if (x === "" && y === "") {
        alert("First Name and Last Name must be filled out");
        return false;
    }
    if (x === "") {
        alert("First Name must be filled out");
        return false;
    }
    if (y === "") {
        alert("Last Name must be filled out");
        return false;
    }
    var a = document.getElementById("deg");
    var text1 = a.options[a.selectedIndex].text;

    var s = document.getElementById("sem");
    var text2 = s.options[s.selectedIndex].text;

    var c = document.getElementById("car");
    var text3 = c.options[c.selectedIndex].text;

    if (text1 === "Bachelors") {
        if (text2 === "Spring") {
            if (text3 === "Computer Science") {
                window.location.assign("http://localhost:63342/ASSIGNMENT-1/Source/list1.html?_ijt=4mvfu5p64omfa7pia9mi463hfa");
            }

        }

    }
    if (text1==="Bachelors"){
        if(text2==="Spring"){
            if(text3=="Electrical Engineer"){
                window.location.assign("http://localhost:63342/ASSIGNMENT-1/Source/List2.html?_ijt=8qnk2g57q1vtqdoj7go4ip5mh9")
            }
        }
    }
    if (text1==="Masters"){
        if(text2==="Fall"){
            if(text3=="Computer Science"){
                window.location.assign("http://localhost:63342/ASSIGNMENT-1/Source/List3.html?_ijt=2phq4rvqq129utl2u5kgd2rb9m")
            }
        }
    }
    if (text1==="Masters"){
        if(text2==="Fall"){
            if(text3=="Electrical Engineer"){
                window.location.assign("http://localhost:63342/ASSIGNMENT-1/Source/List4.html?_ijt=dt3ij934nc2ftlb8q62mitv13k")
            }
        }
    }
    document.getElementById("demo").innerHTML = "Searching results for " + text1 + " students " + text2 + " semester in " + text3 + " career";



}






