function Greeting({name = 'World'}) {
    const stringProps = JSON.stringify(name);
    
return (
    <div>
<h2>Hello {name} </h2>
</div>
)
}

export default Greeting