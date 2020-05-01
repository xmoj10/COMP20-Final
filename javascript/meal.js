function setUpAPI() {
          /* Main Function Processing */
          /* grabbing div & user_bev_type to write text to */
          output_div  = document.getElementById("meal-image");
          output_div2  = document.getElementById("meal-name");
          user_answer = document.getElementById("meal_type").value;
      	  console.log(user_answer);
		  
          if (user_answer == "surprise"){
              var url = "https://www.themealdb.com/api/json/v1/1/random.php";
              console.log("surprise me drink chosen");
          } else if (user_answer == "Type of Meal") {
              /* do nothing, user hasn't made a choice */ 
              return;
          } else {
			  var url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + user_answer;
		  }
          
      
          /* creating a new HTTP request */
          request = new XMLHttpRequest();
          request.open("GET", url, true);
          request.onreadystatechange = function() {
              if (request.readyState == 4 && request.status == 200) {
                  objData = request.responseText;
                  objData = JSON.parse(objData);
      
                  meal_num = parseInt(Math.random() * objData.meals.length);
                  
                  output_div.innerHTML = "";
                  output_div2.innerHTML = objData.meals[meal_num].strMeal + "<br>";
                  output_div.innerHTML = "<img src='" + objData.meals[meal_num].strMealThumb + "' style='width:400px'>" + "<br>";
				  
				document.getElementById("recipeName").value = objData.meals[meal_num].strMeal;
				document.getElementById("imgLink").value = objData.meals[meal_num].strMealThumb;


              } else if (request.readyState == 4 && request.status != 200) {
                  alert("Please try again!");
            };
          }
          request.send();
        }
		
		// function validate(){
		// 	if (document.getElementById("username").value == "" ) {
		// 		document.getElementById("errorBox").innerHTML = "Please Enter a Username";
		// 		return false;
		// 	}
		// }