			//****removing NORTH, SOUTH, EAST,&WEST, going to use curentLocation for everything****
			//replacing old system fully, removed score in this build fully since it was not kept to date
			var currentLocation = "default";
			var NORTH = 1;
			var SOUTH = 11;
			var EAST = 21;
			var WEST = 31;
			var direction = ""
			var invDisplay = ""
			
			function init() {
				updateText("You wake up in a room lying down on a couch. You have no recollection of what happened. Getting up off of the couch, you walk to the middle of the room.");
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
				} else if (check.value === "take x"){
					take(check.value);
				} else if ((check.value === "help") || (check.value === "Help") || (check.value === "HELP")) {
					updateText("insert cmdlist");
				} else if (check.value === "inventory") {
					updateText("You have in your inventory:" + invDisplay);
				} else {
					updateText("Unknown command");
				}
			}
	
			
			/*//generic move function
			function move(direction) {
				if	(direction === NORTH) {
					if (currentLocation === "south1") {
					currentLocation = "default";
				} else if (currentLocation === "default") {
					currentLocation = "north1"
				} else if (currentLocation === "north1") {
					currentLocation = "north2"
			}
			}else if (direction === SOUTH) {
					if (currentLocation === "north1") {
					currentLocation = "default";
				} else if (currentLocation === "default"){
					currentLocation = "south1";
				} else if (currentLocation === "north2") {
					currentLocation === "north1";
			}
			} else if (direction === EAST) {
					if (currentLocation === "west1") {
					currentLocation = "default";
				} else if (currentLocation === "default") {
					currentLocation = "east1";
			}
			} else if (direction === WEST) {
					if (currentLocation === "east1") {
					currentLocation === "default";
					} else if (currentLocation === "default") {
					currentLocation = "west1"
			} 
			}else {
					updateText("Unknown direction" + direction)
				}
				updateLocation();
				}*/
				
		function move(direction) {
          switch (direction) {
            case NORTH:
              switch(currentLocation) {
				case "west2":
				   currentLocation = "northwest1"
				   northwest1();
				break;
				
                case "south2":
                  currentLocation = "south1"
                  south1();
                break;
                  
                case "south1":
                  currentLocation = "default";
                  defaultloc();
                break;
                  
                case "default":
                  currentLocation = "north1";
                  north1();
                break;
                 
                case "north1":
                  currentLocation = "north2"
                  north2();
                break;
                    
                 default:
                   updateText ("Unknown direction" + direction)
                 }
            break;
                        
            case SOUTH:
                  switch(currentLocation){
					case "northwest1":
					   currentLocation = "west2"
					   west2();
					break;
					
                    case "north2":
                      currentLocation = "north1"
                      north1();
                    break;
                    
                    case "north1":
                      currentLocation = "default"
                      defaultloc();
                    break;
                    
                    case "default":
                      currentLocation = "south1"
                      south1();
                    break; 
                    
                    case "south1":
                      currentLocation = "south2"
                      south2();
                    break;
                    
                    default:
                      updateText ("Unknown direction" + direction)
                    }
                    break;
                  
                case EAST:
                  switch(currentLocation){
                    case "west2":
                      currentLocation = "west1"
                      west1();
                    break;
                   
                    case "west1":
                      currentLocation = "default"
                      defaultloc();
                    break;
                    
                    case "default":
                      currentLocation = "east1"
                      east1();
                    break;
                    
                    case "east1":
                      currentLocation = "east2"
                      east2();
                    break;
                    
                    default:
                      updateText ("Unknown direction" + direction)
                    }
                    break;
                    
                  case WEST:
                    switch(currentLocation){
                      case "east2":
                        currentLocation = "east1"
                        east1();
                      break;
                      
                      case "east1":
                         currentLocation = "default"
                         defaultloc();
                       break;
                         
                       case "default":
                          currentLocation = "west1"
                          west1();
                       break;
                       
                       case "west1":
                          currentLocation = "west2"
                          west2();
                       break;
                        
                       default:
                      updateText ("Unknown direction" + direction)
                    }
                    break;
                   }
				   northBtnDisable();
				   southBtnDisable();
				   eastBtnDisable();
				   westBtnDisable();
                 }
                    
				
				
		
			/*function updateLocation(){
				switch (currentLocation) {
				case "default":
					updateText("starting location" + direction)
					break;
				case "north1":
					updateText("north1" + direction)
					break;
				case "south1":
					updateText("south1" + direction)
					break;
				case "east1":
					updateText("east1" + direction)
					break;
				case "west1":
					updateText("west1" + direction)
					break;
				case "north2":
					updateText("north2" + direction)
					break;
				default:
					updateText("Unknown direction" + direction)
				}
			}*/
			
			//location text functions
	  function defaultloc(){
        updateText("default location")
      }
      function north2(){
        updateText("north2")
      }
      function north1(){
        updateText("north1")
      }
      function east2(){
        updateText("east2")
      }
      function east1(){
        updateText("east1")
      }
      function west2(){
        updateText("west2")
      }
      function west1(){
        updateText("west1")
      }
      function south2(){
        updateText("south2")
      }
      function south1(){
        updateText("south1")
      }
	  function northwest1(){
		updateText("northwest1")
	  }
        
			//to have dynamic text updates
			function updateText(msg){
				msg = msg+ "[" + currentLocation + "]";
				var ta = document.getElementById("taGame")
				ta.value=msg + "\n" + ta.value
			}
			//for items
			/*function take(){
			var check = document.getElementById("txtcmd");
			var item = "";
				switch(item){
					case "take x":
						hasItemX=true;
					break;
			}
			}*/
			function take(){
				var check = document.getElementById("txtcmd");
				if ((currentLocation = "default") && (check.value = "take x")){
					invDisplay = invDisplay + "Item X";
				}
			}
					
				
			//having these totally break my game..they work kind of. can't debug this will keep enabled anyway
			
				function northBtnDisable(){
				  if ((currentLocation ="north2") || (currentLocation ="east2") || 
				  (currentLocation ="northwest1") || (currentLocation ="east1") || (currentLocation ="west1")){
					document.getElementById("northBtn").disabled=true
					} else {
						document.getElementById("northBtn").disabled=false
					}
				}

				function southBtnDisable(){
				  if ((currentLocation ="south2") || (currentLocation ="east2") || 
				  (currentLocation ="west2") ||(currentLocation ="east1") || (currentLocation ="west1")) {
					document.getElementById("southBtn").disabled=true
					} else { 
						document.getElementById("southBtn").disabled=false
					}
				}

				function eastBtnDisable(){
				  if ((currentLocation ="north2") || (currentLocation ="south2") || 
				  (currentLocation ="south1") || (currentLocation ="north1") || 
				  (currentLocation ="east2") || (currentLocation ="northwest1")) {
					document.getElementById("eastBtn").disabled=true
					} else {
						document.getElementById("eastBtn").disabled=false
					}
				}

				function westBtnDisable(){
				  if ((currentLocation ="north2") || (currentLocation ="north1") || 
				  (currentLocation ="south1") || (currentLocation ="south2") || 
				  (currentLocation ="west2") || (currentLocation ="northwest1")){
					document.getElementById("westBtn").disabled=true
					} else {
						document.getElementById("westBtn").disabled=false
					}
				}
			
				
				
				
				
				
				
				
				
				
				
			//while loop example
		/*	var total = 0;
			var done = false;
			var count = 0;
			while (!done){
				var scoreStr = "";
				//take score as stirng
				scoreStr = prompt ("enter a score, 0 to quit")
				//convert score as a string
				var scoreInt=0;
				scoreInt = parseInt(scoreStr);
				//check tosee whether or not we're done
				if (scoreInt === 0 {
					done = true;
				} else {
					    total=total + scoreInt;
						count = count + 1;
						average = (total / count);
						updateText( Total: " + total + "Avg: " + average);
			*/
			
			//spaceship example (locations)
		/*	function spaceShip (_name, _clazz, _creator, _hp){
				this.name  = _name
				this.clazz = _clazz;
				this.creator = _creator;
				this.hp = _hp;
				this.color = "silver";
				
				this.toString = function() {
					var retVal = "";
					retval= "[spaceShip]" +
							" name:" + this.name +
							" class:" + this.clazz +
							" creator:" + this.creator +
							" horse power:" + this.hp +
							" color:" + this.color;
					return retVal;
					}
				}
			function tester (){
			//create myShip as an instance of the spaceShip prototype.
			myship = new spaceShip ("Alan", "CS-1", "Kirok", 1.5);
			yourShip = new spaceShip ("Justin", "Bashful", "Sleepy", "Dopey")
			updateText(myShip.name + "," myship.hp + "," + myShip.color);
			
			*/
