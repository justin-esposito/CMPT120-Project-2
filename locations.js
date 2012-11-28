			//****removing NORTH, SOUTH, EAST,&WEST, going to use curentLocation for everything****
			//replacing old system fully, removed score in this build fully since it was not kept to date
			var currentLocation = "default";
			var NORTH = 1;
			var SOUTH = 11;
			var EAST = 21;
			var WEST = 31;
			var direction = ""
			var invDisplay = ""
			var inventory = new Array;
			
			
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
				} else if ((check.value === "take item x") && (currentLocation === "default")){
					take(check.value);
				} else if ((check.value === "take item y") && (currentLocation === "east1")){
					take(check.value);
				} else if ((check.value === "take item z") && (currentLocation === "west1")){
					take(check.value);
				} else if ((check.value === "take item a") && (currentLocation === "northwest1")){
					take(check.value);
				} else if ((check.value === "help") || (check.value === "Help") || (check.value === "HELP")) {
					updateText("insert cmdlist");
				} else if (check.value === "inventory") {
					updateText("You have in your inventory:" + inventory);
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
		defaultlocation = new Location (currentLocation, "defaultloc", "the default location", "ItemX");
        updateText(defaultlocation)
		location_itemx = new item ("01", "ItemX", "insert item description")
		updateText (location_itemx)
      }
      function north2(){
		northtwo = new Location (currentLocation, "north2", "x=0, y=2", "No Item");
        updateText(northtwo)
      }
      function north1(){
		northone = new Location (currentLocation, "north1", "x=0, y=1", "No Item");
        updateText(northone)
      }
      function east2(){
		easttwo = new Location (currentLocation, "east2", "x=2, y=0", "No Item");
        updateText(easttwo)
      }
      function east1(){
		eastone = new Location (currentLocation, "east1", "x=1, y=0", "Item Y");
        updateText(eastone)
		location_itemy = new item ("02", "ItemY", "insert item description")
		updateText (location_itemy)
      }
      function west2(){
		westtwo = new Location (currentLocation, "west", "x=-2, y=0", "No Item");
        updateText(westtwo)
      }
      function west1(){
		westone = new Location (currentLocation, "west1", "x=-1, y=0", "Item Z");
        updateText(westone)
		location_itemz = new item ("03", "ItemZ", "insert item description")
		updateText (location_itemz)
      }
      function south2(){
		southtwo = new Location (currentLocation, "south2", "x=0, y=-2", "No Item");
        updateText(southtwo)
      }
      function south1(){
		southone = new Location (currentLocation, "south1", "x=0, y=-1", "No Item");
        updateText(southone)
      }
	  function northwest1(){
		northwestone = new Location (currentLocation, "northwest1", "x=-1, y=1", "Item A");
		updateText(northwestone)
		location_itema = new item ("04", "ItemA", "insert item description")
		updateText (location_itema)
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
				if ((currentLocation = "default") && (check.value === "take item x")){
					updateText("Taken Item X")
					inventory.push("ItemX")
				}
				if ((currentlocation = "west1") && (check.value === "take item z")){
					updateText ("Taken Item Z")
					inventory.push("ItemZ")
				}
				if ((currentlocation = "northwest1") && (check.value === "take item a")){
					updateText ("Taken Item A")
					inventory.push("ItemA")
				}
				if ((currentlocation = "east1") && (check.value === "take item y")){
					updateText ("Taken Item Y")
					inventory.push("ItemY")
				}
				else updateText("");
			}

				
			//having these totally break my game..they work kind of.
			
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
				
				
				
				
	