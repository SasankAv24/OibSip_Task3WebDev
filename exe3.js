function reserinput(){
    document.getElementById("input").value='';
    document.getElementById("output").value='';
    }
    function ctf(){
    let cf=document.getElementById("input").value;
    document.getElementById("output").innerHTML=cf+" °C = " +((cf)*(9/5)+32)+" °F";
    }
    function ctk(){
    let ck=document.getElementById("input").value;
    document.getElementById("output").innerHTML=ck+" °C = " +((ck)*(1)+(273.15))+" °K";
    }
    function ftc(){
    let fc=document.getElementById("input").value;
    document.getElementById("output").innerHTML=fc+" °F = " +((fc-32)*(5/9))+" °C";
    }
    function ftk(){
    let fk=document.getElementById("input").value;
    document.getElementById("output").innerHTML=fk+" °F = " +(((fk-32)*(5/9))+273.15)+" °K";
    }
    function ktc(){
    let kc=document.getElementById("input").value;
    document.getElementById("output").innerHTML=kc+" °K = " +((kc)-273.15)+" °C";
    }
    function ktf(){
    let kf=document.getElementById("input").value;
    document.getElementById("output").innerHTML=kf+" °K = " +((((kf)-(273.15))*(9/5))+32)+" °F";
    }