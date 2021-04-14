var myArray = [ 
 ["1","2","3","4","5","6","7","8","9"], 
 ["1","2","3","4","5","6","7","8","9"], 
 ["1","2","3","4","5","6","7","8","9"],
 ["1","2","3","4","5","6","7","8","9"],
 ["1","2","3","4","5","6","7","8","9"],
 ["1","2","3","4","5","6","7","8","9"] 
 ];

 var myString="<table border=2>";
   for (var y=0; y<myArray.length; y++ ) { // for each row
      myString += "<br>";
      for (var x=0; x<myArray.length; x++ ) { // for each clm
         myString += "<td>" + myArray[y][x] + "<br>";
      }
       sOut += "</tr>";
   }
   sOut += "</table>";