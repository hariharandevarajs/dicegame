function dicegame() {

    var n = Math.random();
    var n=n*6;
   n = Math.floor(n)+1;
   if (n==1) {
    var img = document.createElement("img");
        img.src = "./images/images/dice1.png"; // Replace with the actual path to your image
        img.alt = "Condition Satisfied";
        img.width = 300; // Set width if needed
        img.height = 200; // Set height if needed

        // Append the image to the div with id 'imageContainer'
        document.getElementById("imageContainer").appendChild(img);
   }
   else if (n==2) {

    var img = document.createElement("img");
        img.src = "./images/images/dice2.png"; // Replace with the actual path to your image
        img.alt = "Condition Satisfied";
        img.width = 300; // Set width if needed
        img.height = 200; // Set height if needed

        // Append the image to the div with id 'imageContainer'
        document.getElementById("imageContainer").appendChild(img);
    
   }
   else if (n==3) {
    var img = document.createElement("img");
    img.src = "./images/images/dice3.png"; // Replace with the actual path to your image
    img.alt = "Condition Satisfied";
    img.width = 300; // Set width if needed
    img.height = 200; // Set height if needed

    // Append the image to the div with id 'imageContainer'
    document.getElementById("imageContainer").appendChild(img);
   }
   else if (n==4) {
    var img = document.createElement("img");
    img.src = "./images/images/dice4.png"; // Replace with the actual path to your image
    img.alt = "Condition Satisfied";
    img.width = 300; // Set width if needed
    img.height = 200; // Set height if needed

    // Append the image to the div with id 'imageContainer'
    document.getElementById("imageContainer").appendChild(img);
    
   }
   else if (n==5) {
    var img = document.createElement("img");
    img.src = "./images/images/dice5.png"; // Replace with the actual path to your image
    img.alt = "Condition Satisfied";
    img.width = 300; // Set width if needed
    img.height = 200; // Set height if needed

    // Append the image to the div with id 'imageContainer'
    document.getElementById("imageContainer").appendChild(img);
   }
   else if (n==6) {
    var img = document.createElement("img");
    img.src = "./images/images/dice6.png"; // Replace with the actual path to your image
    img.alt = "Condition Satisfied";
    img.width = 300; // Set width if needed
    img.height = 200; // Set height if needed

    // Append the image to the div with id 'imageContainer'
    document.getElementById("imageContainer").appendChild(img);
   }
   return n;
   
    
}


function dicegame1() {

    var n = Math.random();
    var n=n*6;
   n = Math.floor(n)+1;
   if (n==1) {
    var img = document.createElement("img");
        img.src = "./images/images/dice1.png"; // Replace with the actual path to your image
        img.alt = "Condition Satisfied";
        img.width = 300; // Set width if needed
        img.height = 200; // Set height if needed

        // Append the image to the div with id 'imageContainer'
        document.getElementById("imageContainer1").appendChild(img);
   }
   else if (n==2) {

    var img = document.createElement("img");
        img.src = "./images/images/dice2.png"; // Replace with the actual path to your image
        img.alt = "Condition Satisfied";
        img.width = 300; // Set width if needed
        img.height = 200; // Set height if needed

        // Append the image to the div with id 'imageContainer'
        document.getElementById("imageContainer1").appendChild(img);
    
   }
   else if (n==3) {
    var img = document.createElement("img");
    img.src = "./images/images/dice3.png"; // Replace with the actual path to your image
    img.alt = "Condition Satisfied";
    img.width = 300; // Set width if needed
    img.height = 200; // Set height if needed

    // Append the image to the div with id 'imageContainer'
    document.getElementById("imageContainer1").appendChild(img);
   }
   else if (n==4) {
    var img = document.createElement("img");
    img.src = "./images/images/dice4.png"; // Replace with the actual path to your image
    img.alt = "Condition Satisfied";
    img.width = 300; // Set width if needed
    img.height = 200; // Set height if needed

    // Append the image to the div with id 'imageContainer'
    document.getElementById("imageContainer1").appendChild(img);
   }
   else if (n==5) {
    var img = document.createElement("img");
    img.src = "./images/images/dice5.png"; // Replace with the actual path to your image
    img.alt = "Condition Satisfied";
    img.width = 300; // Set width if needed
    img.height = 200; // Set height if needed

    // Append the image to the div with id 'imageContainer'
    document.getElementById("imageContainer1").appendChild(img);
   }
   else if (n==6) {
    var img = document.createElement("img");
    img.src = "./images/images/dice6.png"; // Replace with the actual path to your image
    img.alt = "Condition Satisfied";
    img.width = 300; // Set width if needed
    img.height = 200; // Set height if needed

    // Append the image to the div with id 'imageContainer'
    document.getElementById("imageContainer1").appendChild(img);
   }
   return n;
   
}


function play() {

var dice = dicegame() ;
var dice1 = dicegame1() ;
if (dice>dice1) {

   document.querySelector("h1").innerHTML="Player 1 win"
   
}
else if (dice==dice1) {

    document.querySelector("h1").innerHTML="Draw"
    
 }
else{
     document.querySelector("h1").innerHTML="Player 2 win"
    
}
}
play();

