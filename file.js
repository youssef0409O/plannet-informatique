

function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  }





  
  
  function functionAlert(msg, myYes) {
    var confirmBox = $("#confirm");
    confirmBox.find(".message").text(msg);
    confirmBox.find(".yes").unbind().click(function() {
       confirmBox.hide();
    });
    confirmBox.find(".yes").click(myYes);
    confirmBox.show();
 }
 
 function enableLightMode(){
        
    document.body.classList.remove("dark");

  }

  function enableDarkMode(){

    document.body.classList.add("dark");

  }




  checkDarkMode();
  
    
  
    function enableLightMode(){
  
      document.body.classList.remove("dark");
  
      localStorage.darkMode = false;
  
    }
  
    function enableDarkMode(){
  
      document.body.classList.add("dark");
  
      localStorage.darkMode = true;
  
    }
  
    function checkDarkMode(){
  
      if(localStorage.darkMode){
  
        document.body.classList.add("dark");
  
      }
  
      else{
  
        document.body.classList.remove("dark");
  
      }
  
    }