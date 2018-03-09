// https://raw.githubusercontent.com/cdaein/mica-gd355/fall2017/files/mammals.csv
//
// id,species,name
// 0,Capra hircus,Goat
// 1,Panthera pardus,Leopard
// 2,Equus zebra,Zebra

var table;


var rowIndex = 0;
var artistFont;
var Italic;
var body;
//var bodyFont;

function preload() {
  table = loadTable("assets/lighttable.csv", "csv", "header");
  artistFont = loadFont("assets/CormorantGaramond-SemiBold.ttf");
  Italic = loadFont("assets/CormorantGaramond-SemiBoldItalic.ttf");
  body = loadFont("assets/Times New Roman.ttf");
  //myFont = loadFont("assets/Times New Roman.ttf");
}

function setup() {
  createCanvas(432, 288);
    
  rectMode(CENTER);
  //console.log(	width[1] );
  
    
    
}

function draw() {
  background(20, 20, 20);
    
  var x = 100;
  var y = 100;
  var w = 20;
  var c1 = color(193, 122, 252);
  var c2 = color(244, 46, 120);

  

  var id = table.getString(rowIndex, 0);
  var title = table.getString(rowIndex, 1);
  var artist = table.getString(rowIndex, 2);
  var ing = table.getString(rowIndex, 3);
  var type = table.getString(rowIndex,4);
  var from = table.getString(rowIndex,5);
  var height = table.getString(rowIndex,6);
  //var width = table.getString(rowIndex,7);
  //var energy = table.getString(rowIndex,8);
  var description = table.getString(rowIndex,9);


    //individual or group classification
    if (ing == "individual") {
        background(240, 241, 238);
        fill(0); 

    }   else if (ing == "group") {
        background(41, 41, 41);
        fill(253, 210, 108);
}       
    
  // console.log(type);  
  noStroke();
  push();
  textSize(13);
  //text(id + ": ", 50, 50);
  textFont(artistFont);
  text(artist, 30, 111);
  textFont(Italic);
  text(title, 30, 128);
  textSize(11);
  textLeading(14);
  textFont(body);
  text(description, 215, 360, 370, 400);
  pop();  
    
    
    
    
noFill();
    

    
//color change
    if (from == "Hampden") {
        c2 = color(245, 78, 162);
        c1 = color(255, 118, 118);
    
    
}   else if (from == "New York") {
       c2 = color(240, 47, 194);
       c1 = color(96, 148, 234);
    
}   else if (from == "Hamilton-lauraville") {
       c2 = color(97, 37, 138);
       c1 = color(253, 15, 119);
    
}   else if (from == "Baltimore") {
       c2 = color(0, 242, 152);
       c1 = color(7, 247, 247);
    
}   else if (from == "Canada") {
       c2 = color(251, 18, 26);
       c1 = color(250, 235, 24);
    
}   else if (from == "Little Italy") {
        c2 = color(212, 129, 255);
        c1 = color(5, 241, 225);
}   else if (from == "Belgium") {
        c2 = color(244, 135, 49);
        c1 = color(216, 224, 21);
}   else if (from == "France") {
        c2 = color(242, 155, 131);
        c1 = color(165, 249, 249);
}   else if (from == "Palestine") {
        c1 = color(193, 122, 252);
        c2 = color(244, 46, 120);
           
}   else if (from == "Coldstream") {
        c2 = color(48, 51, 149);
        c1 = color(39, 240, 240);
}   else if (from == "Lebanon") {
        c2 = color(0, 153, 0);
        c1 = color(255, 255, 146);
}   
 

//opacity     
    /*if (energy == "7") {
        
        
        
    }*/
    
//height small- one, medium- two, big- three
   if (height == "medium-pf") {
        for (var i = 0; i <= w; i++) {
        var inter = map(i, 0, w, 0, 1);
        var c = lerpColor(c2, c1, inter);
        stroke(c)
        
        rect(x-i-20, y-i-20, w-i+10, w-i-10);
        }
            
} else if (height == "medium-s") {
      for (var i = 0; i <= w; i++) {
      var inter = map(i, 0, w, 0, 1);
      var c = lerpColor(c2, c1, inter);
      stroke(c);

      rect(x-i-10, y-i-30, w-i-10, w+i-10);
      //rect(x-i-10, y-i-10, w+i, w+i);  
      }
    
}  else if (height == "medium-c") {
      for (var i = 0; i <= w; i++) {
      var inter = map(i, 0, w, 0, 1);
      var c = lerpColor(c2, c1, inter);
      stroke(c);

      rect(x+i-30, y+i-40, w+i-20, w+i-20);
      }
    
} else if (height == "medium-pr") {
      for (var i = 0; i <= w; i++) {
      var inter = map(i, 0, w, 0, 1);
      var c = lerpColor(c2, c1, inter);
      stroke(c);

      rect(x+i-47, y+i-40, w-i+20, w-i);
        
    }
    
}   else if (height == "medium-it") {
      for (var i = 0; i <= w; i++) {
      var inter = map(i, 0, w, 0, 1);
      var c = lerpColor(c2, c1, inter);
      stroke(c);

      rect(x+i-40, y+i-50, w-i+10, w+i-20);
      }
    
}   else if (height == "big-pf"){
    for (var i = 0; i <= w; i++) {
      var inter = map(i, 0, w, 0, 1);
      var c = lerpColor(c2, c1, inter);
      stroke(c);

      rect(x-i-20, y-i-20, w-i+10, w-i-10);
      rect(x-i-36, y-i-30, w-i+10, w-i-30);  
      

    }      
}   else if (height == "big-s"){
    for (var i = 0; i <= w; i++) {
        var inter = map(i, 0, w, 0, 1);
        var c = lerpColor(c2, c1, inter);
        stroke(c);

        rect(x-i-10, y-i-30, w-i-10, w+i-10);
        rect(x-i-30, y+i-65, w-i, w+i);
    }
}  else if (height == "big-c") {
      for (var i = 0; i <= w; i++) {
      var inter = map(i, 0, w, 0, 1);
      var c = lerpColor(c2, c1, inter);
      stroke(c);

      rect(x+i-30, y+i-40, w+i-20, w+i-20);
      rect(x+i-35, y+i-60, w-i-10, w-i+10);
      }
    
} else if (height == "big-pr") {
      for (var i = 0; i <= w; i++) {
      var inter = map(i, 0, w, 0, 1);
      var c = lerpColor(c2, c1, inter);
      stroke(c);

      rect(x+i-47, y+i-40, w-i+20, w-i);
      rect(x+i-44, y+i-50, w+i-20, w-i+10);
      }

} else if (height == "big-it") {
      for (var i = 0; i <= w; i++) {
      var inter = map(i, 0, w, 0, 1);
      var c = lerpColor(c2, c1, inter);
      stroke(c);

      rect(x+i-40, y+i-50, w-i+10, w+i-20);
      rect(x+i-25, y+i-45, w-i-10, w-i+10);
      }
    
} 
    
//type of art 
  if (type == "performance") {
    for (var i = 0; i <= w; i++) {
      var inter = map(i, 0, w, 0, 1);
      var c = lerpColor(c2, c1, inter);
      stroke(c)

      rect(x-i-33, y+i-40, w+i-10, w-i-10);
      //rect(x-i-20, y+i-10, w-i, w-i);
    }
  
  } else if (type == "sculpture"){
    for (var i = 0; i <= w; i++) {
      var inter = map(i, 0, w, 0, 1);
      var c = lerpColor(c2, c1, inter);
      stroke(c);

      rect(x+i-50, y-i-30, w+i+5, w-i+5);
      //rect(x+i, y-i, w+i, w+i);
    }  
    
  } else if (type == "concert"){
    for (var i = 0; i <= w; i++) {
      var inter = map(i, 0, w, 0, 1);
      var c = lerpColor(c2, c1, inter);
      stroke(c);

      rect(x-i-30, y+i-50, w+i-10, w+i-10);
      //rect(x+i+10, y+i-10, w+i, w+i);
    }    
      
    } else if (type == "projection"){
    for (var i = 0; i <= w; i++) {
      var inter = map(i, 0, w, 0, 1);
      var c = lerpColor(c2, c1, inter);
      stroke(c);

      rect(x+i-28, y-i-30, w+i, w-i);
      //rect(x+i, y-i, w+i+10, w-i+10);
      
    } 
    
    } else if (type == "interactive technology"){
    for (var i = 0; i <= w; i++) {
      var inter = map(i, 0, w, 0, 1);
      var c = lerpColor(c2, c1, inter);
      stroke(c);

      rect(x+i-60, y+i-40, w+i, w-i);
      //rect(x+i+30, y+i, w+i+10, w-i+10);  
      //rect(x+i-10, y+i-10, w-i, w-i);
    }  
        
    }
    
    /*for (var i = 0; i < width.length; i++) {
    // map() map number from one range to another
    // map(varlue, origMin, origMax, newMin, newMax)
    var h = map(width[i], 0, 10000, 0, 250);
    // the last two numbers are minimum and maximum
    
    rect( i*40, height-100, 20, -width[i]/50 );
    //divide by 50 make the bars different length in y 
  }*/
    

    
}




  
    


function mousePressed() {
  rowIndex++;
  if (rowIndex >= table.getRowCount()) {
    rowIndex = 0;
  }
}

