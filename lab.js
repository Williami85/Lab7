var groceryItem1 = {
	name:'turkey',
	price: 19.99
};
var groceryItem2 = {
	name:'milk',
	price: 2.99
};
var groceryItem3 = {
	name:'apples',
	price: 1.39
};
var groceryItem4 ={
	name:'crackers',
	price: 1.69
};

var shoppingList =[groceryItem1, groceryItem2, groceryItem3, groceryItem4];
var shoppingTotal=0;
shoppingList.forEach(function(item){
                     
console.log(item.name + " : $"+ item.price);
shoppingTotal += item.price;
});

shopping list.foreach (function(stuff)){
	var groceryList = document.createElement (li);
	groceryList.innerHTML= '<p>' + whatever.name + '$' + whatever.price to fixed (2) + '<p>';

document.body.appendChild (groceryList);
total += whatever.price;

}
}
}

console.log ("Your total is "+shoppingTotal);


// to add a money sign write console.log(item.name+ ": $" +item.price)