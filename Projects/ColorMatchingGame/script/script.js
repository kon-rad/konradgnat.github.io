'use strict';

  var numberOfFaces = 5;

  function generateFaces()
  {
    var i = 0;
    while( i < numberOfFaces)
    {
      var pTop = Math.floor(Math.random() * 401).toFixed();
      var pLeft = Math.floor(Math.random() * 401).toFixed();
      var smile = document.createElement("img");
      var theLeftSide  = document.getElementById("leftSide");
      smile.src = "../images/smile.png";
      smile.style.top = pTop + "px";
      smile.style.left = pLeft + "px";
      theLeftSide.appendChild(smile);
      i++;
    }

    /*
    Cloning to the Right Side
    */

    var theRightSide = document.getElementById("rightSide");
    leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    rightSide.appendChild(leftSideImages);

    /*
    Event hander functions
    */

    var theBody = document.getElementsByTagName("body")[0];
    var theLeftSide  = document.getElementById("leftSide");
    theLeftSide.lastChild.onclick=function nextLevel(event)
    {
      event.stopPropagation();
      numberOfFaces += 5;

      /*
      Clear both sides before generating new set of faces
      */

      while(theLeftSide.firstChild)
      {
        theLeftSide.removeChild(theLeftSide.firstChild);
      };
      while(theRightSide.firstChild)
      {
        theRightSide.removeChild(theRightSide.firstChild);
      };
      generateFaces();
    };

    /*
    Game Over function
    */

    theBody.onclick = function gameOver()
    {
      alert("Game Over!");
      theBody.onclick = null;
      theLeftSide.lastChild.onclick = null;
    };

  }
