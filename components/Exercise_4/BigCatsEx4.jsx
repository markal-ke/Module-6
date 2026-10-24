import { useState } from 'react';

function BigCatsEx4() {

    const cats = [

        { id: 1, name: "Cheetah", latinName: "Acinonyx jubatus" },

        { id: 2, name: "Cougar", latinName: "Puma concolor" },

        { id: 3, name: "Jaguar", latinName: "Panthera onca" },

        { id: 4, name: "Leopard", latinName: "Panthera pardus" },

        { id: 5, name: "Lion", latinName: "Panthera leo" },

        { id: 6, name: "Snow leopard", latinName: "Panthera uncia" },

        { id: 7, name: "Tiger", latinName: "Panthera tigris" },
    ];
const [currentCats, setCurrentCats] = useState(cats);

const handleReverseCats = () => {
// first clone the original, so we don’t mutate it
let newCats = [...currentCats];
newCats.reverse(); 
setCurrentCats(newCats); 
}

const handleSortCats = () => {
let sortCats = [...currentCats]
sortCats.sort((a, b) => a.name.localeCompare(b.name));
setCurrentCats(sortCats);
}

const handleCatFilter = () => {
let filtered = cats.filter(cat => cat.latinName.startsWith("Panthera"));
setCurrentCats(filtered); 
}




const handleResetCats = () => {
  setCurrentCats(cats);
};

const SingleCat = currentCats.map(cat => (
<Cat
key={cat.id} 
name={cat.name}
latinName={cat.latinName}
image={cat.image}
>/</Cat>

)
)


function Cat({image, name, latinName}) {
return (
         < li >
        <h3>{name}</h3> <span>({latinName})</span>
        <div>{image}</div> 
      
        </li >
    );
}

return (
<div className="cats">
<ul>{ SingleCat }</ul>

<button onClick={handleReverseCats}>Reverse List</button>
<button onClick={handleSortCats}>Sort List</button>
<button onClick={handleCatFilter}> Filter List by Pathera </button>
<button onClick={handleResetCats}> Reset List </button>

</div>
);

}

export default BigCatsEx4