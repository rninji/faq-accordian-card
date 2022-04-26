var desktop = document.getElementsByClassName(desktop);
var mobile = document.getElementsByClassName(mobile);

function displayDesktop(){
    console.log(desktop);
    for (var i=0;i<desktop.length;i+=1){
        desktop[i].style.display = 'block';
        console.log(desktop[i]);
    }
    for (var i=0;i<mobile.length;i+=1){
        mobile[i].style.display = 'none';
    }
    console.log("desktop");
}

function displayMobile(){

}

displayDesktop();