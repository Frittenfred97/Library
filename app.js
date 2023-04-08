const divRow = document.getElementById("books");
let bookLoop = 0;

let myLibrary = [
    {
        "title": "The Martian",
        "author": "Andy Weir",
        "pages": "381",
        "informations": "Good Sci-Fi Book!"
    },
];

function Book(title, author, pages, informations) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.informations = informations;
};

function addBookToLibrary() {

    for (;bookLoop < myLibrary.length; bookLoop++) {

        const divCol = document.createElement("div");
        divCol.className = "col-auto";
        const divCard = document.createElement("div");
        divCard.className = "card shadow";
        divCard.setAttribute("Data-tilt", "");
        const divCardHeader = document.createElement("div");
        divCardHeader.className = "card-header";
        const cardTitle = document.createElement("h3");
        cardTitle.className = "card-title mx-auto";
        cardTitle.innerText = myLibrary[bookLoop].title;
        const divCardBody = document.createElement("div");
        divCardBody.className = "card-body";
        const titleAuthor = document.createElement("h3");
        titleAuthor.innerText = "Author:";
        const bookAuthor = document.createElement("p");
        bookAuthor.innerText = myLibrary[bookLoop].author;
        const titleNumbers = document.createElement("h3");
        titleNumbers.innerText = "Page numbers:";
        const pageNumbers = document.createElement("p");
        pageNumbers.innerText = myLibrary[bookLoop].pages;
        const titleInformations = document.createElement("h3");
        titleInformations.innerText = "Additional information:" 
        const bookInformations = document.createElement("p");
        bookInformations.className = "text-muted";
        bookInformations.innerText = myLibrary[bookLoop].informations;
        const divCardFooter = document.createElement("div");
        divCardFooter.className = "card-footer d-flex align-items-center justify-content-between";
        const labelForm = document.createElement("label");
        labelForm.className = "form-check form-switch col-6";
        const inputForm = document.createElement("input");
        inputForm.className = "form-check-input";
        inputForm.type = "checkbox";
        const spanForm = document.createElement("span");
        spanForm.className = "form-check-label"
        spanForm.innerText = "unread/read";
        const deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-danger";
        const deleteImage = document.createElement("img");
        deleteImage.src = "images/trash-x.svg"


        divRow.append(divCol);
        divCol.append(divCard);
        divCard.append(divCardHeader);
        divCardHeader.append(cardTitle);
        divCard.append(divCardBody);
        divCardBody.append(titleAuthor);
        divCardBody.append(bookAuthor);
        divCardBody.append(titleNumbers);
        divCardBody.append(pageNumbers);
        divCardBody.append(titleInformations);
        divCardBody.append(bookInformations);
        divCard.append(divCardFooter);
        divCardFooter.append(labelForm);
        labelForm.append(inputForm);
        labelForm.append(spanForm);
        divCardFooter.append(deleteButton);
        deleteButton.append(deleteImage);
    }
};

function deleteFromLibrary() {

};

function getFormValues() {
    const getTitle = document.getElementById("title").value;
    const getAuthor = document.getElementById("author").value;
    const getNumber = document.getElementById("number").value;
    const getInformation = document.getElementById("information").value;

    let getBook = new Book(getTitle, getAuthor, getNumber, getInformation);

    myLibrary.push(getBook);

    console.log(getTitle);
    console.log(getAuthor);
    console.log(getNumber);
    console.log(getInformation);

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("number").value = "";
    document.getElementById("information").value = "";

    addBookToLibrary();

}

function changeTheme() {

    console.log("test");

    let planets = document.getElementById("planets");
    let theme = document.getElementById("theme");

    if (theme.classList.contains("theme-dark-auto")) {
        planets.src = "images/moon-filled.svg";
        theme.className.remove = "theme-dark-auto";
    } else {
        planets.src = "images/sun-filled.svg"
        theme.className = "theme-dark-auto";
    }
}

addBookToLibrary();