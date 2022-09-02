const disNone = (id) =>{
    document.getElementById(id).style.display="none"
}

disNone("erro")
disNone("spiner")
// document.getElementById("erro").style.display="none"
// document.getElementById("spiner").style.display="none"
const searchBook= (v) =>{
    const serchValue = document.getElementById("search-value");
    const value = serchValue.value;
    if(value === ""){
        document.getElementById("erro").style.display="block"
    }
    else{
        document.getElementById("spiner").style.display="block"
        disNone("erro")
    }
    fetch(`http://openlibrary.org/search.json?q=${value}`)
    .then(res=> res.json())
    .then(data=>displayBook(data.docs))

    serchValue.value="";
} 


const displayBook= (book) =>{
    document.getElementById("spiner").style.display="none"
console.log(book);
const serachResult = document.getElementById("search-result");
serachResult.innerHTML=""
book.slice(0,20).forEach((books) => {
    const {title,author_name,publisher,publish_date,cover_i,author_key}=books
    const create = document.createElement("div")
    create.classList.add("card-style")
    create.innerHTML=`
    <div class="col">
                    <div class="card h-100">
                        <img src="https://covers.openlibrary.org/b/id/${cover_i ? cover_i:'N/A'}-M.jpg" style="height:300px" class="img-fluid card-img-top" alt="no img">
                        <div class="card-body">
                            <h5 class="card-title">Book-title: ${title}</h5>
                            <h5>Author_Name: ${author_name.slice(0,1)}</h5>
                            <h5>Publisher: ${publisher.slice(0,1)}</h5>
                            
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated ${publish_date.slice(0,1)}</small> <br>  
                            <button class="btn btn-primary" onclick="loadAuthorDeatail('${author_key}')">Author Detail</button>
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

const loadAuthorDeatail = (auth) =>{
    fetch(`https://openlibrary.org/authors/${auth}.json`)
    .then(res=>res.json())
    .then(data=>displayAuth(data))
}


const displayAuth = (auth) =>{
    console.log(auth);
    window.scrollTo(0,40)
    const {name,birth_date,last_modified,bio}=auth;

    const authDetailView= document.getElementById("auth-detail");
    authDetailView.innerHTML=`
                        <div class="card-body">
                            <h5 class="card-title">Author Name: ${name}</h5>
                            <h5 class="card-title">Author date of birth : ${birth_date ? birth_date:"N/a"}</h5>
                            <h5 class="card-title">last update in this book : ${last_modified.value ? last_modified.value:"N/a"}</h5>
                        </div>
    `

}


