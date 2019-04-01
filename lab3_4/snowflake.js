
  function flakeMove() {
    var snowflake = document.getElementById("flake1");
    var flakeTop = snowflake.style.top;
    //  alert("flake has top of " + flakeTop);
    snowflake.style.top == "200px;";
  
    var newFlakeTop = parseInt(flakeTop) + 25;
    snowflake.style.top = newFlakeTop + "px";
  
    if (newFlakeTop > window.innerHeight) {
      newFlakeTop = 0;
      snowflake.style.top = newFlakeTop;
      // alert("The height of the browser is " + window.innerHeight);

      
    }
  }
  
  
  
  
  function snowing() {
    flakeMove();
  
    setTimeout(function() {
      snowing();
    }, 200);

    setTimeout(function() {
        showText();
    }, 3000);
  
      
  }  

  function showText() {
    document.getElementById('letitsnow').style.display ='block';
    }
    