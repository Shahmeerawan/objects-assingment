var mobiles = {
  apple: {
    iphonex: {
      imagee: "imgs/ixw.jpg",
      colors: "red,blue,green",
      memory: 64,
      camera: 12 + "megapxels",
    },
    iphonexr: {
      imagee: "imgs/ipxrwh.jpg",
      colors: "red,blue,green",
      memory: 256,
      camera: 12 + "megapxels",
    },
    iphone13: {
      imagee: "imgs/i13.webp",
      colors: "red,blue,green",
      memory: 512,
      camera: 12 + "megapxels",
    },
    iphone12: {
      imagee: "imgs/i12.jpg",
      colors: "red,blue,green",
      memory: 128,
      camera: 12 + "megapxels",
    },
    iphone13mini: {
      imagee: "imgs/i3mini.jpg",
      colors: "red,blue,green",
      memory: 32,
      camera: 12 + "megapxels",
    },
  },

  infinix: {
    hot10s: {
      imagee: "imgs/10s.jpg",
      colors: "red,blue,green",
      memory: 64,
      camera: 25 + "pxels",
    },
    hot12play: {
      imagee: "imgs/hot12play.webp",
      colors: "red,blue,green",
      memory: 64,
      camera: 25 + "pxels",
    },
    note10: {
      imagee: "imgs/note10.jpg",
      colors: "red,blue,green",
      memory: 32,
      camera: 25 + "pxels",
    },
    note12: {
      imagee: "imgs/note12.jpeg",
      colors: "red,blue,green",
      memory: 64,
      camera: 25 + "pxels",
    },
 
  },

  samsung: {
    note8: {
      imagee: "imgs/note8.jpg",
      colors: "blue,green",
      memory: 128,
      camera: 12 + "megapxels",
    },
    note9: {
      imagee: "imgs/note9.webp",
      colors: "red,blue",
      memory: 512,
      camera: 12 + "megapxels",

    },
    a8: {
      imagee: "imgs/a8.jpg",
      colors: "blue",
      memory: 32,
      camera: 5 + "megapxels",
    },
    j5: {
      imagee: "imgs/j5.jpg",
      colors: "red,blue,green",
      memory: 64,
      camera: 9 + " megapixels",
    },
    coreprime: {
      imagee: "imgs/cp.jpg",
      colors: "red",
      memory: 8,
      camera: 9 + "megapxels",
    },
  },

  vivo: {
    y55: {
      imagee: "imgs/y55m.png",
      colors: "red,blue,green",
      memory: 64,
      camera: 25 + "pxels",
    },
    x80: {
      imagee: "imgs/x80.jpg",
      colors: "oragne",
      memory: 512,
      camera: 20 + "pxels",
    },
    v23: {
      imagee: "imgs/v23.jpg",
      colors: "red",
      memory: 512,
      camera: 29 + "megapxels",
    },
    v5: {
      imagee: "imgs/v5.jpg",
      colors: "blue",
      memory: 8,
      camera: 2 + "megapxels",
    },
    v23e: {
      imagee: "imgs/v23e.jpg",
      colors: "red,blue",
      memory: 512,
      camera: 25 + "megapxels",
    },
  },
};
// var marq = document.getElementById("marq");
// for(key in mobiles){
//     var x = Object.keys(mobiles[key]);
//     marq .innerText = x ;
//     console.log(x[0])
//     marq .innerText = x[0];

//   };



var input_model = document.getElementById("input_model");
var valueSearch = document.getElementById("valueSearch");

for (key in mobiles) {
  var cop = document.createElement("Option");
  cop.innerHTML = key;
  valueSearch.appendChild(cop);
}

function geetvalue() {
  var result = valueSearch.options[valueSearch.selectedIndex].text;
  document.getElementById("result").innerHTML = result;
  var z = input_model.value;
  var answer = mobiles[result][z];
  //           mobile.infinix.hotplay
  console.log(answer);

  var answer2 = mobiles[result][z].colors;
  var answer3 = mobiles[result][z].camera;
  var answer4 = mobiles[result][z].memory;
  var answer5 = mobiles[result][z].imagee;

  var imageeee = document.getElementById("imageeee");
  var camera = document.getElementById("camera"); 
  var meemory = document.getElementById("meemory");
  var colors = document.getElementById("colors");
  // var crtbtncolr1 = document.createElement("button");
  // crtbtncolr1.className = "colorbtn1";
  // var crtbtncolr2 = document.createElement("button");
  // crtbtncolr2.className = "colorbtn2";
  // colors.appendChild(crtbtncolr1);
  // crtbtncolr2.appendChild(colors);

  camera.innerHTML = "Camera : " + answer3;
  meemory.innerHTML ="Storage : " + answer4;
  colors.innerHTML = "Available colors : " + answer2;
  imageeee.src = answer5

  var srch = document.getElementById("nothing");
  var card = document.getElementById("card");
  console.log(card.innerHTML);
  card.style.visibility = "visible";
  srch.style.display = "none";

  }
  
   
    
    // var re = x.join("")
    // console.log(x)
    // console.log(re)
  
 






  // console.log(answer);
  // for (var key in mobiles) {
  //   var mtch = mobiles[key].name
  //     console.log(mtch)
  //   }if(mtch === z){
  //   alert("done")
  // }
  // else{
  //   alert("no")
  // }
  z = "";


// console.log(answer);
// for (var key in mobiles) {
//   for (var key2 in mobiles[key]) {
//     var mtch = mobiles[key][key2].value;
//     console.log(mtch)
//   }}
  // for(key in mobiles){
  //   var x = Object.keys(mobiles[key]);
  //   var reel = x.join(" ")
  //   var khal= [];
  //   var ters = khal.push(reel)
  //   console.log(khal)

  //   console.log(x.join(" "))
  //   for(var i = 0 ; i < x.length ; i++){
  //   console.log(x[i])
  //     if(input_model.value == x[i]){
  //       alert("hi")
  //       break;

  //     }
  //     else{
  //       alert("chala ja")
  //       break;
  //     }
  //     console.log(x[i])
  //   }


