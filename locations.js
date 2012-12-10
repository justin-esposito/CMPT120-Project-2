			var currentLocation = "defaultloc"
			var NORTH = 0
			var SOUTH = 1
			var EAST = 2
			var WEST = 3
			var invDisplay = ""
			var inventory = new Array;
			var locationArray = new Array;
			var frag1Check = 0
			var frag2Check = 0
			var frag3Check = 0
			var frameCheck = 0
			var moveMatrix = new Array(
		
			
												//direction 0,1,2,3
	                     /* 0default */     ["north1", "south1", "east1", "west1"],
	                     /* 1north1 */     [ "north2", "defaultloc", "falseloc", "falseloc"],
	                     /* 2north2 */     ["falseloc", "north1", "falseloc", "falseloc"],
	                     /* 3south1 */     ["defaultloc", "south2", "falseloc", "falseloc"],
 /*currentLocation */    /* 4south2 */     [ "south1", "falseloc", "falseloc", "falseloc"],
	                     /* 5east1 */     ["falseloc", "falseloc", "east2", "defaultloc"],
	                     /* 6east2 */     ["falseloc", "falseloc", "falseloc", "east1"],
	                     /* 7west1*/     ["falseloc", "falseloc", "defaultloc", "west2"],
	                     /* 8west2*/     [ "northwest1", "falseloc", "west1", "falseloc"],
	                     /* 9northwest1*/     [ "falseloc", "west2", "winroom", "northwest2"]
						 /*10winroom*/ ["falseloc", "falseloc", "falseloc", "falseloc"]
						 
	  
		
			)
			function init() {
				updateText("These rooms are colorful. Somehow you know to find three key fragments and a key frame.");
			}
			
			function txtcmds() {
				var check = document.getElementById("txtcmd");
				//alert(check.value);
				if ((check.value === "n") ||(check.value === "N")) {
				  move(NORTH);
				} else if ((check.value === "s") || (check.value === "S" )) {
				   move(SOUTH);
				} else if ((check.value === "e") || (check.value === "E")) {
				   move(EAST);
				} else if ((check.value === "w") || (check.value === "W")) {
				   move(WEST);
				} else if ((check.value === "take fragment 1") && (currentLocation === "north2")){
					take(check.value);
				} else if ((check.value === "take fragment 2") && (currentLocation === "east1")){
					take(check.value);
				} else if ((check.value === "take fragment 3") && (currentLocation === "west1")){
					take(check.value);
				} else if ((check.value === "take key frame") && (currentLocation === "south2")){
					take(check.value);
				} else if ((check.value === "help") || (check.value === "Help") || (check.value === "HELP")) {
					updateText("insert cmdlist");
				} else if (check.value === "inventory") {
					updateText("You have in your inventory:" + inventory);
				} else {
					updateText("Unknown command");
				}
			}
	
			function newLocations() {
			
  		location0 = new Location("defaultloc", "Black room", "This room is black.", "No item.");
  		location1 = new Location("north1", "Blue Room", "This room is blue. ", "No item.");
  		location2 = new Location("north2", "Teal Room", "This room is teal.", "fragment 1");
  		location3 = new Location("south1", "Red Room", "This room is red.", "No item.");
  		location4 = new Location("south2", "Crimson Room", "This room is crimson.", "key frame");
  		location5 = new Location("east1", "Green Room", "This room is green.", "fragment 2");
  		location6 = new Location("east2", "Lime Room", "This room is lime.", "No item.");
  		location7 = new Location("west1", "Yellow Room", "This room is yellow.", "fragment 3");
  		location8 = new Location("west2", "Orange Room", "This room is orange.", "No item.");
  		location9 = new Location("northwest1", "Rainbow Room", "This room is rainbow. What could it mean? Maybe it has to do something with a locked door to the west.", "No item.");
  		location10 = new Location("winroom", "Coolbeans", "man you put that key together and was all like i win", "Stick of swag that you cant pick up because you won, how unfortunate");

  		locationArray["defaultloc"] = location0;
  		locationArray["north1"] = location1;
  		locationArray["north2"] = location2;
  		locationArray["south1"] = location3;
  		locationArray["south2"] = location4;
  		locationArray["east1"] = location5;
  		locationArray["east2"] = location6;
  		locationArray["west1"] = location7;
  		locationArray["west2"] = location8;
  		locationArray["northwest1"] = location9;
		locationArray["winroom"] = location10
		}
		//i've literally tried troubleshooting this for several hours a day.
		function move(direction) {
			direction = direction;
			var newLocation = moveMatrix[currentLocation][direction];
			
			if (newLocation === "winroom" && frag1Check = 0 || frag2Check = 0 ||frag3Check = 0 || frameCheck =0) {
				currentLocation = "northwest1"
				updateText("You're missing something.")
				}else if (newLocation !== "falseloc" || newLocation !== "winroom") {
					currentLocation = newLocation
					newLocations();
					updateText(locationArray[currentLocation]);
				} else { 
					updateText("There's a wall.")
				}
			}
		
		
			//to have dynamic text updates
			function updateText(msg){
				msg = msg;
				var ta = document.getElementById("taGame")
				ta.value=msg + "\n" + ta.value
			}
			//Can't figure out how to not allow infinite item pickups with an array.
			function take(){
				var check = document.getElementById("txtcmd");
				if ((currentLocation = "north2") && (check.value === "take fragment 1")){
					updateText("Taken fragment 1.")
					inventory.push("Key fragment 1")
					frag1Check = 1
				}
				if ((currentlocation = "west1") && (check.value === "take fragment 3")){
					updateText ("Taken Fragment 2.")
					inventory.push("Key fragment 3")
					frag3Check = 1
				}
				if ((currentlocation = "south2") && (check.value === "take key frame")){
					updateText ("Taken key frame.")
					inventory.push("Key frame")
					frameCheck = 1
				}
				if ((currentlocation = "east1") && (check.value === "take fragment 2")){
					updateText ("Taken fragment 2.")
					inventory.push("Key fragment 2")
					frag2Check = 1
				}
				else updateText("You can't pick up dust.");
			}

				
			//visually disable buttons depending on currentLocation
			
				function northBtnDisable(){
				  if ((currentLocation == "north2") || (currentLocation == "east2") || 
				  (currentLocation == "northwest1") || (currentLocation == "east1") || (currentLocation == "west1")){
					document.getElementById("northBtn").disabled=true
					} else {
						document.getElementById("northBtn").disabled=false
					}
				}

				function southBtnDisable(){
				  if ((currentLocation == "south2") || (currentLocation == "east2") || 
				  (currentLocation == "west2") ||(currentLocation == "east1") || (currentLocation == "west1")) {
					document.getElementById("southBtn").disabled=true
					} else { 
						document.getElementById("southBtn").disabled=false
					}
				}

				function eastBtnDisable(){
				  if ((currentLocation == "north2") || (currentLocation == "south2") || 
				  (currentLocation == "south1") || (currentLocation == "north1") || 
				  (currentLocation == "east2") || (currentLocation == "northwest1")) {
					document.getElementById("eastBtn").disabled=true
					} else {
						document.getElementById("eastBtn").disabled=false
					}
				}

				function westBtnDisable(){
				  if ((currentLocation == "north2") || (currentLocation == "north1") || 
				  (currentLocation == "south1") || (currentLocation == "south2") || 
				  (currentLocation == "west2") || (currentLocation == "northwest1")){
					document.getElementById("westBtn").disabled=true
					} else {
						document.getElementById("westBtn").disabled=false
					}
				}
			
				function Location(_id, _name, _description, _item) {
					this.id = _id;
					this.name = _name;
					this.description = _description;
					this.item = _item;
						
					this.toString= function(){
						var retVal = "";
						retVal= "[Location]" + "\n" +
								"id:" + this.id + "\n" +
								"name:" + this.name + "\n" +
								"description:" + this.description + "\n" +
								"item:" + this.item + "\n";
						return retVal;
						}
					}

				function item(_id, _name, _description) {
					this.id = _id;
					this.name = _name;
					this.description = _description;		
					this.toString= function(){
						var retVal = "";
						retVal= "[Item]" + "\n" +
								"id:" + this.id + "\n" +
								"name:" + this.name + "\n" +
								"description:" + this.description + "\n"
						return retVal;
						}
					}
	