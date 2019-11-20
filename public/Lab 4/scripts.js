function Enlarge(obj){
    document.images[3].src = obj.src
}

function img(obj,action) {
    if(action) {
        obj.width = 200
        obj.height = 200
    }
    else{
        obj.width = 100
        obj.height = 100
    }
}

function imgMenu(obj,action) {
    if(action){
        obj.src = "images/"+obj.name+"s.png"
    }
    else{
        obj.src = "images/"+obj.name+".png"
    }
}

function test(){
    alert("123")
}