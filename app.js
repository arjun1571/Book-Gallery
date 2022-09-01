const searchBook= () =>{
    const serchValue = document.getElementById("search-value");
    const value = serchValue.value;
    fetch(`http://openlibrary.org/search.json?q=${value}`)
    .then(res=> res.json())
    .then(data=>console.log(data.docs))
} 

