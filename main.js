menuArray = ["veggie pizza", 
"Normal Pizza", 
"Normal Chicken Pizza", 
"Mooshroom Pizza", 
"Pineapple Pizza", 
" Normal Pizza but with Pineapple toppings",
 "yum-yum Pizza"];

 getMenu()
 {

    var htmldata
    htmldata = "<ol class = 'menulist'>"
    menuArray.sort();
    for (i=0;i<menuArray.length;i++)
    {
        htmldata=htmldata+ '<li>' + menuArray[i] + '<li>'
    }
    htmldata=htmldata+ "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
 }

 add_item()
{
var htmldata
var item=document.getElementById("add_item").value
menuArray.push(item);
menuArray.sort();
htmldata = '<section class="cards">'
for (i=0;i<menuArray.length;i++)
{
    htmldata= '<div class="cards">' + '<img src="images/pizzaIng.png"/>' + menuArray[i] + '</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedMenu").innerHTML=htmldata;

}

 