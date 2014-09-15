var img = ["009.png","010.png","011.png","012.png"];
var i = 0;

function slideUp(){
    i++;
    document.getElementById("imagen").setAttribute("src",img[i]);
    
    if(i==img.length){
        i = 0;
        document.getElementById("imagen").setAttribute("src",img[i]);
    }


}

function slideDown(){
    i--;
    document.getElementById("imagen").setAttribute("src",img[i]);
     
    if(i==-1){
        i = img.length-1;
        document.getElementById("imagen").setAttribute("src",img[i]);
    }

}
