let step = 0 ;


function repo(){
    window.open("https://github.com/MEgooneh/Balls-and-Boxes" , "_blank") ; 
}
function allowDrop(ev) {
    ev.preventDefault();
}
function dragStart(ev) {
    ev.dataTransfer.setData("text", ev.target.id + " " + ev.target.parentElement.id);
}
function checkwin(){
    let check = 1 ; 
    for(let i = 1 ; i <= 3 ; i++){
        if(document.getElementById(parseInt(i)).children[0].id.slice(0,1) != "w" || document.getElementById(parseInt(i+4)).children[0].id.slice(0,1)!="b")
            check = 0 ; 
    }
    return check ; 
}

function dragDrop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const startImg = data.slice(0,2) , startBox = data.slice(3 , 4) ; 
    if(parseInt(ev.target.id)<=7 && Math.abs(parseInt(startBox)-parseInt(ev.target.id))<=2){
        ev.target.appendChild(document.getElementById(startImg));
        step++ ; 
        const steps = document.getElementById('steps')
        steps.textContent = "Turn : " + parseInt(step) ; 
    }
    if(step == 15 && checkwin()){
        if(window.confirm("Congratulation! You win the game ! it can be proven that the minimum possible step is 15 & you did it :)")){
            location.reload() ; 
        }
    }
    else if(checkwin()){
        if(window.confirm("Good job . you solve the problem but it was not the optimal solution ! try again .")){
            location.reload() ; 
        } 
        
    }
}