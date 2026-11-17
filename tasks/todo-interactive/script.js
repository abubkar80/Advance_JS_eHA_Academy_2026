const items = document.querySelectorAll("li");

items.forEach(function (item){
    item.addEventListener("click", function(){
        item.classList.toggle("completed");
    });
});