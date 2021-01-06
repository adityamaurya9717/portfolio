let images=["flower.jpg","dog.jpg","nature.jpg","flower2.jpg"];
let img=document.getElementById("img");
let ul=document.getElementById("image-list");
let ids=["0","1","2","3"];
let ch=ul.children[0];
let preIndex=0;
ch.style.backgroundColor="red"
function colorChange(id){
   /* for(let x=0;x<images.length;x++){
        let c=ul.children[x];
       c.style.backgroundColor="aqua";
    }*/
    let c=ul.children[preIndex];
    c.style.backgroundColor="aqua";
    preIndex=id;
    let chi=ul.children[id];
    chi.style.backgroundColor="red";
}

function changeImage(current){
    img.src="myimages/"+images[current];
}



ul.addEventListener("click",(e)=>{
   // console.log(e.target.id)
    if(ids.includes(e.target.id)){
       changeImage(parseInt(e.target.id));
       colorChange(parseInt(e.target.id));
    }

})

