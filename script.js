/*carousal*/
const imgs = document.querySelectorAll('.carousal ul img');
const previous = document.querySelector('.prev');
const next = document.querySelector('.next');

let n = 0;
 function change(){
    for (let i=0; i<imgs.length;i++){
        imgs[i].style.display='none';
    }
    imgs[n].style.display='block';
}
change();

previous.addEventListener('click',(e)=>{
    if (n>0){
        n--;
    }else{
        n=imgs.length -1;
    }
    change();
})

next.addEventListener('click',(e)=>{
    if (n < imgs.length -1){
        n++;
    }else{
        n = 0;
    }
    change();
})

/*scroll*/
