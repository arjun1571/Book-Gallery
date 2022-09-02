const searchBook= (v) =>{
    const serchValue = document.getElementById("search-value");
    const value = serchValue.value;
    fetch(`http://openlibrary.org/search.json?q=${value}`)
    .then(res=> res.json())
    .then(data=>displayBook(data.docs))

    serchValue.value="";
} 


const displayBook= (book) =>{
console.log(book);
const serachResult = document.getElementById("search-result");
serachResult.innerHTML=""
book.forEach(books => {
    const {title,author_name,publisher,publish_date,cover_i}=books
    const create = document.createElement("div")
    create.innerHTML=`
    <div class="col">
                    <div class="card h-100">
                        <img src="https://covers.openlibrary.org/b/id/${cover_i}-M.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Book-title: ${title}</h5>
                            <h5>Author_Name: ${author_name}</h5>
                            <h5>Publisher: ${publisher}</h5>
                            
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated ${publish_date}</small>
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

searchBook("helloworld")