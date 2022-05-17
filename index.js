function checkloveper(){

    var name = document.getElementById('name').value;
    var lname = document.getElementById('lname').value;
  
    if(name == ""){
     alert('Please enter your name');
    }else if (name.length <=2 ) {
     alert('Min lenght is 3')
    }else if(!isNaN(name)){
     alert('Numbers are not allowed');
    }
  
    else if(lname == ""){
     alert('Please enter your love name');
    }else if (lname.length <=2 ) {
     alert('Min lenght is 3')
    }else if(!isNaN(lname)){
     alert('Numbers are not allowed');
    }
    else{
    var lovdata = Math.random() * 100;
    
    if (
        (name =="Satyam" && lname =="Archana")||
        (name =="satyam" && lname =="archana")||
        (name =="archana" && lname =="satyam")||
        (name =="Archana" && lname =="Satyam")||
        (name =="archana" && lname =="Satyam")||
        (name =="Archana" && lname =="satyam")||
        (name =="Satyam" && lname =="Archana")||
        (name =="satyam" && lname =="archana")||
        (name =="Satyam" && lname =="archana")||
        (name =="satyam" && lname =="Archana")
        ) {
        lovdata = 100;
        
    } else {
      lovdata = Math.floor(lovdata);
    }
    document.getElementById('lovevalue').value = lovdata + "%"; 
    }
    
   }