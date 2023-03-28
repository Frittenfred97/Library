const divRow = document.getElementById("books");

let myLibrary = [
    {
        "Title": "Der Marsianer",
        "author": "Andy Weir",
        "pages": "381"
    },
];

function Book() {

};

function addBookToLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {

        const divCol = document.createElement("div");
        divCol.className = "col-3";
        const divCard = document.createElement("div");
        divCard.className = "card";
        const divCardHeader = document.createElement("div");
        divCardHeader.className = "card-header";
        const cardTitle = document.createElement("h3");
        cardTitle.className = "card-title mx-auto";
        cardTitle.innerText = myLibrary[i].Title;
        const divCardBody = document.createElement("div");
        divCardBody.className = "card-body";
        const titleAuthor = document.createElement("h3");
        titleAuthor.innerText = "Author:";
        const bookAuthor = document.createElement("p");
        bookAuthor.innerText = myLibrary[i].author;
        const titleNumbers = document.createElement("h3");
        titleNumbers.innerText = "Page numbers:";
        const pageNumbers = document.createElement("p");
        pageNumbers.innerText = myLibrary[i].pages;
        const divCardFooter = document.createElement("div");
        divCardFooter.className = "card-footer";
        const labelForm = document.createElement("label");
        labelForm.className = "form-check form-switch";
        const inputForm = document.createElement("input");
        inputForm.className = "form-check-input";
        inputForm.type = "checkbox";
        const spanForm = document.createElement("span");
        spanForm.className = "form-check-label"
        spanForm.innerText = "read/unread";
        const deleteButton = document.createElement("button");
        deleteButton.className = "btn";
        deleteButton.innerText = "Delete"


        divRow.append(divCol);
        divCol.append(divCard);
        divCard.append(divCardHeader);
        divCardHeader.append(cardTitle);
        divCard.append(divCardBody);
        divCardBody.append(titleAuthor);
        divCardBody.append(bookAuthor);
        divCardBody.append(titleNumbers);
        divCardBody.append(pageNumbers);
        divCard.append(divCardFooter);
        divCardFooter.append(labelForm);
        labelForm.append(inputForm);
        labelForm.append(spanForm);
        divCardFooter.append(deleteButton);
    }
};

addBookToLibrary();

/* 
                <div class="col-3">
                    <div class="card">
                        <div class="card-header">
                          <h3 class="card-title mx-auto">Der Marsianer</h3>
                        </div>
                        <div class="card-body">
                            <h3>Autor:</h3>
                            <p>Andy Weir</p>
                            <h3>Seitenanzahl:</h3>
                            <p>381</p>
                        </div>
                        <div class="card-footer">
                            <label class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" >
                                <span class="form-check-label">Read/unread</span>
                              </label>
                              <button class="btn">
                                Delete
                              </button>
                        </div>
                      </div>
                </div>

*/