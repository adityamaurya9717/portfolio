let form=document.querySelector("#contact-form");
document.getElementById("submit").addEventListener('click',(e)=>{
    e.preventDefault();
    let l=form.elements.length
    for(let i=0;i<l-1;i++){
        console.log(form.elements[i].value)

    }
})
let v=form.elements;
//console.log(v[0].value)