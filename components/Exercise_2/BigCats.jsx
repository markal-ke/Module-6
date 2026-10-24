function BigCats() {

    const cats = [

        { id: 1, name: "Cheetah", latinName: "Acinonyx jubatus", image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqjcC96CiXEiPrjlQHHZhSlplavQEu7a1RIQtOplGVkDqV9O3Ad9vxDgTr&s=10'},

        { id: 2, name: "Cougar", latinName: "Puma concolor", image: 'https://images.squarespace-cdn.com/content/v1/66ec3b49803ab81bf84f89e4/5a2f798a-354a-4f38-8243-15629a7098c5/CougarPhotos4.jpg'},

        { id: 3, name: "Jaguar", latinName: "Panthera onca", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExGhSpGthkRRGiNhGZFw__4gQELon1Xg52WLVTtLgQQ&s=10'},

        { id: 4, name: "Leopard", latinName: "Panthera pardus", image: 'https://images.squarespace-cdn.com/content/v1/66ec3b49803ab81bf84f89e4/1737488319255-I9Y2KQ7FG8NLIZ15TZS0/Reno-Leopard-2025.jpg'},

        { id: 5, name: "Lion", latinName: "Panthera leo", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb92CjXX6GH78BZ6Jb_zTzbTQtskWYzHXa3pvkzawzSg&s=10'},

        { id: 6, name: "Snow leopard", latinName: "Panthera uncia", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVwu5C_KcrWe2CRqVt_RbgGHpqvn6C1MxbifTqTWJ4yQ&s=10'},

        { id: 7, name: "Tiger", latinName: "Panthera tigris", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCfOwVxFlZU_ocjDJkhRlhJOS3TuouUM7vmgreh9zS4nFW83uugZaf0-M&s=10'},
    ];


const SingleCat = cats.map(cat => (
<Cat
key={cat.id} 
name={cat.name}
latinName={cat.latinName}
image={cat.image}/>

)
)

function Cat({image, name, latinName}) {
return (
         < li >
        <h3>{name}</h3> <span>({latinName})</span>
        <div> 
        <img src= {image} alt={name} width="200" />
        </div>
        </li >
    );
}

return (
<div className="cats">
<ul>{ SingleCat }</ul>
</div>
);

}

export default BigCats