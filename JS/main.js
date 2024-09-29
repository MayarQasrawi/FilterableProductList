const products=[
    {id:1, name:'Shirt',category:'shirts',src:'Picters/Shirt1.jpg',price:'17$'},
    {id:2, name:'shirt',category:'shirts',src:'Picters/Shirt2.jpg',price:'17$'},
    {id:3, name:'shirt',category:'shirts',src:'Picters/Shirt3.jpg',price:'19$'},
    {id:4, name:'shirt',category:'shirts',src:'Picters/Shirt4.jpg',price:'18$'},
    {id:5, name:'abaya',category:'abaya',src:'Picters/abaya2.jpg',price:'100$'},
    {id:5, name:'abaya',category:'abaya',src:'Picters/abaya1.jpg',price:'98$'},
    {id:5, name:'abaya',category:'abaya',src:'Picters/abaya3.jpg',price:'98$'},
    {id:5, name:'abaya',category:'abaya',src:'Picters/abaya4.jpg',price:'98$'},
    {id:5, name:'abaya',category:'abaya',src:'Picters/abaya5.jpg',price:'98$'},
    {id:5, name:'abaya',category:'abaya',src:'Picters/abaya6.jpg',price:'98$'},
    {id:6, name:'dress',category:'dresses',src:'Picters/dresse1.jpg',price:'100$'},
    {id:6, name:'dress',category:'dresses',src:'Picters/dresse2.jpg',price:'100$'},

    
];


const productContainer=document.querySelector('.filterable_card');
const filterButton = document.querySelector(".filtterButton ");
//Create a function to display the products
function displayProduct(array){
    let list='';
   list= array.map((product)=> {
        return `
                   <div class="card">
                    
                    <img src=${product.src} alt=${product.category}>
                    <div class="card_body">
                    <h3 >${product.name}</h3>
                    <p>${product.category}</p>
                    <p>${product.price}</p>
                     </div>
                   </div>
        `
    })
    productContainer.innerHTML=list.join('');
}

displayProduct(products);



//Filter the products
console.log(filterButton);
filterButton.onclick=function(e){
    document.querySelector(".active").classList.remove("active");

    e.target.classList.add("active");

    if(e.target.name==='all')
        displayProduct(products);
    else{
        const category=e.target.name;
        const filteredProducts=products.filter(product=>product.category===category);
        console.log(filteredProducts);
        displayProduct(filteredProducts);
    }

}

