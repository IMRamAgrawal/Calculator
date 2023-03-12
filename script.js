
    //For Implementing C
    let z = document.getElementsByClassName('button')[0].innerHTML
    document.getElementsByClassName("button")[0].addEventListener("click", function() {
    document.getElementById("box").value = "";
    });

    //For Implementing %
    let y = document.getElementsByClassName('button')[1].innerHTML
    document.getElementsByClassName("button")[1].addEventListener("click", function() {
    document.getElementById("box").value += y;
    });
    
    //For Implementing ← 
    let x = document.getElementsByClassName('button')[2].innerHTML
    document.getElementsByClassName("button")[2].addEventListener("click", function() {
    var value = document.getElementById("box").value
    document.getElementById("box").value = value.substr(0,value.length-1);
    // document.getElementById("box").value = (document.getElementById("box").value).substr(0,(document.getElementById("box").value).length-1);
    });
    
    //For Implementing ÷
    let w = document.getElementsByClassName('button')[3].innerHTML
    document.getElementsByClassName("button")[3].addEventListener("click", function() {
    document.getElementById("box").value += w;
    });

    //For Implementing 7
    let a = document.getElementsByClassName('button')[4].innerHTML
    document.getElementsByClassName("button")[4].addEventListener("click", function() {
    document.getElementById("box").value += a;
    });
    
    //For Implementing 8
    let b = document.getElementsByClassName('button')[5].innerHTML
    document.getElementsByClassName("button")[5].addEventListener("click", function() {
    document.getElementById("box").value += b;
    });

    //For Implementing 9
    let c = document.getElementsByClassName('button')[6].innerHTML
    document.getElementsByClassName("button")[6].addEventListener("click", function() {
    document.getElementById("box").value += c;
    });

    //For Implementing X
    let d = document.getElementsByClassName('button')[7].innerHTML
    document.getElementsByClassName("button")[7].addEventListener("click", function() {
    document.getElementById("box").value += d;
    });

    //For Implementing 4
    let e = document.getElementsByClassName('button')[8].innerHTML
    document.getElementsByClassName("button")[8].addEventListener("click", function() {
    document.getElementById("box").value += e;
    });
   
    //For Implementing 5
    let f = document.getElementsByClassName('button')[9].innerHTML
    document.getElementsByClassName("button")[9].addEventListener("click", function() {
    document.getElementById("box").value += f;
    });

    //For Implementing 6
    let g = document.getElementsByClassName('button')[10].innerHTML
    document.getElementsByClassName("button")[10].addEventListener("click", function() {
    document.getElementById("box").value += g;
    });

    //For Implementing -
    let h = document.getElementsByClassName('button')[11].innerHTML
    document.getElementsByClassName("button")[11].addEventListener("click", function() {
    document.getElementById("box").value += h;
    });

    //For Implementing 1
    let i = document.getElementsByClassName('button')[12].innerHTML
    document.getElementsByClassName("button")[12].addEventListener("click", function() {
    document.getElementById("box").value += i;
    });

    //For Implementing 2
    let j = document.getElementsByClassName('button')[13].innerHTML
    document.getElementsByClassName("button")[13].addEventListener("click", function() {
    document.getElementById("box").value += j;
    });
    
    //For Implementing 3
    let k = document.getElementsByClassName('button')[14].innerHTML
    document.getElementsByClassName("button")[14].addEventListener("click", function() {
    document.getElementById("box").value += k;
    });
    
    //For Implementing +
    let l = document.getElementsByClassName('button')[15].innerHTML
    document.getElementsByClassName("button")[15].addEventListener("click", function() {
    document.getElementById("box").value += l;
    });
    
    //For Implementing 00
    let m = document.getElementsByClassName('button')[16].innerHTML
    document.getElementsByClassName("button")[16].addEventListener("click", function() {
    document.getElementById("box").value += m;
    });
    
    //For Implementing 0
    let n = document.getElementsByClassName('button')[17].innerHTML
    document.getElementsByClassName("button")[17].addEventListener("click", function() {
    document.getElementById("box").value += n;
    });

    //For Implementing .
    let o = document.getElementsByClassName('button')[18].innerHTML
    document.getElementsByClassName("button")[18].addEventListener("click", function() {
    document.getElementById("box").value += o;
    });
   
   //For Implementing =
    document.getElementsByClassName("button")[19].addEventListener("click", function() {
      //  let string =  document.getElementById("box").value
      //  document.getElementById("box").value=(string = eval(string));
        document.getElementById("box").value=eval(document.getElementById("box").value);
        
        
    });