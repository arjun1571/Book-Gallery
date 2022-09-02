const searchBook= () =>{
    const serchValue = document.getElementById("search-value");
    const value = serchValue.value;
    fetch(`http://openlibrary.org/search.json?q=${value}`)
    .then(res=> res.json())
    .then(data=>displayBook(data.docs))
} 


const displayBook= (book) =>{
console.log(book);
const serachResult = document.getElementById("search-result");
book.forEach(books => {
    const create = document.createElement("div")
    create.innerHTML=`
    <div class="col">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
    `
    serachResult.appendChild(create)
});
}


document.getElementById("search-value").addEventListener("keypress",function(e){
    if (e.key === "Enter") {
        searchBook();
      }
})