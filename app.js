// var divElement = document.getElementById("main");

// console.log(divElement);

// divElement.innerText = "<h1> hellow world </h1>";

 function completePara() {
      var pElement = document.getElementById("para");
      var aElement = document.getElementById("link");

      if (aElement.innerHTML === "Read more") {
        pElement.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit atque quibusdam eligendi aperiam quia earum minus dolor error sed accusamus?";
        aElement.innerHTML = "Read less";
      } else {
        pElement.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
        aElement.innerHTML = "Read more";
      }
    }

  
// var allpras = document.getElementsByTagName("p");

// for(var i = 0; i < allpras.length; i++){
//     console.log(allpras[i]);

//     allpras[i].style.color = "blue";
    
// }

// setinterval()

// var interval;

// function timer(){
//     console.log("faraz");
    
// }

// interval = setInterval(timer ,1000);

// function stop(){
//     clearInterval(interval);
// }

// settimerout()


function greet(){
   console.log("farheen");
   

}

setTimeout(greet,3000);
