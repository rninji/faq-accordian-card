var desktop = document.getElementsByClassName("desktop");
var mobile = document.getElementsByClassName("mobile");

function displayDesktop(){
    for (var i=0;i<desktop.length;i+=1){
        desktop[i].style.display = 'block';
    }
    for (var i=0;i<mobile.length;i+=1){
        mobile[i].style.display = 'none';
    }
}

function displayMobile(){
    for (var i=0;i<desktop.length;i+=1){
        desktop[i].style.display = 'none';
    }
    for (var i=0;i<mobile.length;i+=1){
        mobile[i].style.display = 'block';
    }
}

displayDesktop();