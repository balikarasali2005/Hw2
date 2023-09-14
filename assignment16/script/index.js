// Filter the products by smartphones
fetch('https://dummyjson.com/products').then((value)=>{
    return value.json();
}).then((value)=>{
    // console.log(value)
    const filterProducts = value.products.filter((items)=>{
        if(items.category ==="smartphones"){
return true;
        }
    });
    console.log(filterProducts);
});
