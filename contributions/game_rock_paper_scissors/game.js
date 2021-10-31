function compIn(num_comp){
    var pic_comp;
    if(num_comp==1){
      pic_comp="rock.png"
    }
    else if(num_comp==2){
      pic_comp="paper.png"
    }
    else {
      pic_comp="scissors.png"
    }
    document.getElementById("Computer").src=pic_comp;
  }
  
  
  
  
  function userIn(num){
    var pic;
    if(num==1){
      pic="rock.png"
    }
    else if(num==2){
      pic="paper.png"
    }
    else {
      pic="scissors.png"
    }
    document.getElementById("You").src=pic;
  
  
    var a= Math.floor(Math.random() * 3) + 1;
    compIn(a);
  
    if(num==a) {document.getElementById("result").innerHTML="It's a Tie!";}
  
    else if((num==1 && a==3)||(num==2 && a==1) ||(num==3 && a==2)) { 
      document.getElementById("result").innerHTML="You Won!";
    }
    
    else {document.getElementById("result").innerHTML="You Lost! :(";}
    
  
  }
  
  