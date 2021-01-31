
function description(){
   var workout_id=localStorage.getItem("workout_id");
   console.log(workout_id);

   $.post("http://localhost/getting_workout_by_id.php", {workout_request_id:workout_id}, function(data,status){
  
      console.log(data);
      var workout_json = JSON.parse(data);
      console.log(workout_json)
      document.getElementById("image").src = "http://localhost/"+workout_json["thumbnail_link"];
      document.getElementById("workout_title").innerHTML = workout_json["exercise_name"];
      document.getElementById("description").innerHTML = workout_json["description"];
      
      var exercises = JSON.parse(workout_json["exercises"]);
      console.log(exercises)

      for(var i=0; i < exercises.length; i++){
          var new_exercise_div = document.createElement("div");
          new_exercise_div.className = "single_exercise";
          document.getElementById("exercises").appendChild(new_exercise_div);

          var new_exercise_name_div = document.createElement("div");
          new_exercise_name_div.className = "single_exercise_name";
          new_exercise_name_div.innerHTML = exercises[i]["exercise_name"];
          new_exercise_div.appendChild(new_exercise_name_div);

          var new_exercise_duration_div = document.createElement("div");
          new_exercise_duration_div.className = "single_exercise_amount";
          new_exercise_duration_div.innerHTML = exercises[i]["amount_duration"];
          new_exercise_div.appendChild(new_exercise_duration_div);
      } //end of forloop
   })
 }

 function checkConnection() {
  var networkState = navigator.connection.type;

  var states = {};
  states[Connection.UNKNOWN]  = 'Unknown connection';
  states[Connection.ETHERNET] = 'Ethernet connection';
  states[Connection.WIFI]     = 'WiFi connection';
  states[Connection.CELL_2G]  = 'Cell 2G connection';
  states[Connection.CELL_3G]  = 'Cell 3G connection';
  states[Connection.CELL_4G]  = 'Cell 4G connection';
  states[Connection.CELL]     = 'Cell generic connection';
  states[Connection.NONE]     = 'No network connection';

  alert('Connection type: ' + states[networkState]);
}

function body_ready(){
  description();
}