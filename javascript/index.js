function setUpAPI() {
    /* testing to ensure we enter this function */
    // alert("Processing Your Drink Request!");

    /* Main Function Processing */
    /* grabbing div & user_bev_type to write text to */
    output_div  = document.getElementById("beverage");
    user_answer = document.getElementById("beverage_type").value;

    if (user_answer == "Surprise Me!"){
        /* generate random choice of alcoholic or non-alcoholic */
        console.log("surprise me drink chosen");
    } else if (user_answer == "Type of Beverage") {
        /* do nothing, user hasn't made a choice */ 
        return;
    }
    
    /* url to append user_answer to */
    url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=";

    /* creating a new HTTP request */
    request = new XMLHttpRequest();
    request.open("GET", url + user_answer, true);
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            objData = request.responseText;
            objData = JSON.parse(objData);

            /* uncomment if you want to see in console log */
            // console.log(objData.drinks[0]);
            
            /* getting random drink */
            /* setting up seeding */
            drink_num = parseInt(Math.random() * objData.drinks.length);
            
            output_div.innerHTML = "";
            output_div.innerHTML += objData.drinks[drink_num].strDrink + "<br>";
            output_div.innerHTML += "<img src='" + objData.drinks[drink_num].strDrinkThumb + "'>" + "<br>";

        } else if (request.readyState == 4 && request.status != 200) {
            alert("Please try again!");
        };
    }
    request.send();
}
