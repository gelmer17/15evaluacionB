
function WOWDATA(charName,charRealm) {
  
  // Variables
  var apiKey = "INSERT_API_KEY_HERE"; // your API key
  var lang = "en_GB"; // select language for items and such, "en_US", "de_DE", "fr_FR", "es_ES", "it_IT", ...
  var region = "eu"; // select the region, "eu", "us", "kr", "tw"
  
  
  // Catch if parameters were set
  if(charName && charRealm)
  {

  	/ Create String and fetch URL Response with it
    var fetchString = "https://" + region + ".api.battle.net/wow/character/" + charRealm + "/" + charName +"?fields=items&locale=" + lang + "&apikey=" + apiKey;
    var fetchItems = UrlFetchApp.fetch(fetchString);
    
    // Parse the HTTPResponse string as JSON object
    var char = JSON.parse(fetchItems.getContentText());
    
    // Create result array with chosen fields from the JSON object
    var result = [char.items.head.itemLevel,
                  char.items.neck.itemLevel,
                  char.items.shoulder.itemLevel,
                  char.items.back.itemLevel,
                  char.items.chest.itemLevel,
                  char.items.wrist.itemLevel,
                  char.items.hands.itemLevel,
                  char.items.waist.itemLevel,
                  char.items.legs.itemLevel,
                  char.items.feet.itemLevel,
                  char.items.finger1.itemLevel,
                  char.items.finger2.itemLevel,
                  char.items.trinket1.itemLevel,
                  char.items.trinket2.itemLevel];
    
    return result; // return final result
  }
  
  else {
    Logger.log("Missing Parameter");
    return "Missing parameter";  // Returned string for "missing parameter" exception   
  }
}