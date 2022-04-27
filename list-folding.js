var faq = document.querySelectorAll(".faq");

function clickFaq(){
    if (this.getElementsByClassName("faq-detail")[0].style.display == 'none'){
        for (const f of faq){
            f.getElementsByClassName("faq-detail")[0].style.display = 'none';
            f.getElementsByClassName("faq-title")[0].style.fontWeight = 500;
        } 
        this.getElementsByClassName("faq-detail")[0].style.display = 'block';
        this.getElementsByClassName("faq-title")[0].style.fontWeight = 800;
    }
    else{
        this.getElementsByClassName("faq-detail")[0].style.display = 'none';
        this.getElementsByClassName("faq-title")[0].style.fontWeight = 500;
    }
}

for (const f of faq){
    f.getElementsByClassName("faq-detail")[0].style.display = 'none';
    f.addEventListener("click", clickFaq);
} 