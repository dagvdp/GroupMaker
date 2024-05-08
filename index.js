console.log("Hello World");

var button = document.getElementById("btn-submit");

button.addEventListener('click', () => {
    
    //gets info and place to insert
    var area = document.getElementById("area");
    var groups = document.getElementById("group-number").valueAsNumber;
    var teamList = document.getElementById("teams-list");
    //cleans the div
    teamList.innerHTML= "";
    //creates array split by \n
    var lines = area.value.split("\n");

    //floors the value in case of not being perfectly divisible
    var groupNumber = Math.floor(lines.length / groups);
    //gets the number of extra members
    var extra = lines.length % groups;
    //creates aux variable to facilitate inserting the extra members
    var actualGroupNumber = 0;
    //loops to add unordered lists to div
    for (var i = 0; i < groups; i++){

        var ul = document.createElement("ul");

        //checks if there is extra members, probably could be simplified
        if(extra !=  0){
            actualGroupNumber = groupNumber + 1;
            extra--;
        }
        else{
            actualGroupNumber = groupNumber;
        }

        for (var j = 0; j < actualGroupNumber; j++){

            var li = document.createElement("li");
            //gets random elements, adds to a li and removes it from the array
            const randomElement = Math.floor(Math.random() * lines.length);
            li.appendChild(document.createTextNode(lines[randomElement]));
            //slices at the index and removes the number necessary, in this case 1
            lines.splice(randomElement, 1);
            ul.appendChild(li);
        }
        
        teamList.appendChild(ul);
    }
})
