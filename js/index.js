
let message=document.querySelector('.btn');
message.addEventListener('click',()=>{
    message.innerText='📄 Copied!'
})

var li_elements=document.querySelectorAll(".wrapper_left ul li");
var item_elements=document.querySelectorAll(".item");
for(var i=0;i<li_elements.length;i++){
    li_elements[i].addEventListener("click",function(){
        li_elements.forEach(function(li){
            li.classList.remove("data");

        });
        this.classList.add("data");
        var li_value=this.getAttribute("data-li");
        item_elements.forEach(function(item){
            item.style.display="none";
        });
        if(li_value=="deep"){
            document.querySelector("."+li_value).style.display="block";
        }
        else if(li_value=="pre"){
            document.querySelector("."+li_value).style.display="block";
        }
        else if(li_value=="lay"){
            document.querySelector("."+li_value).style.display="block";
        }
       else if(li_value=="expo"){
            document.querySelector("."+li_value).style.display="block";
        }
      else  if(li_value=="effi"){
            document.querySelector("."+li_value).style.display="block";
        }
       else if(li_value=="visu"){
            document.querySelector("."+li_value).style.display="block";
        }
       else if(li_value=="train"){
            document.querySelector("."+li_value).style.display="block";
        }
       else if(li_value=="share"){
            document.querySelector("."+li_value).style.display="block";
        }
       else if(li_value=="tut"){
            document.querySelector("."+li_value).style.display="block";
        }

        
    })
}