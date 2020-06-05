// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
let cardsContainer = document.querySelector(".cards-container");

function cardMaker(head, photo, name) {
 

  let card = document.createElement("div");
  let headLine = document.createElement("div");
  let author = document.createElement("div");
  let imgContainer = document.createElement("div");
  let image = document.createElement("img");
  let spanName = document.createElement("span");

  card.classList.add("card");
  headLine.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  cardsContainer.appendChild(card);
  card.appendChild(headLine);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(spanName);
  imgContainer.appendChild(image);

 headLine.textContent = head
 image.src = photo
 spanName.textContent = name

return card;
}

console.log(cardMaker());

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((response) => {
    console.log(response.data);

    let combinedArticles = [];
    combinedArticles.push(response.data.articles.bootstrap[0]);
    combinedArticles.push(response.data.articles.bootstrap[1]);
    combinedArticles.push(response.data.articles.bootstrap[2]);
    combinedArticles.push(response.data.articles.javascript[0]);
    combinedArticles.push(response.data.articles.javascript[1]);
    combinedArticles.push(response.data.articles.javascript[2]);
    combinedArticles.push(response.data.articles.javascript[3]);
    combinedArticles.push(response.data.articles.jquery[0]);
    combinedArticles.push(response.data.articles.jquery[1]);
    combinedArticles.push(response.data.articles.jquery[2]);
    combinedArticles.push(response.data.articles.node[0]);
    combinedArticles.push(response.data.articles.node[1]);
    combinedArticles.push(response.data.articles.technology[0]);
    combinedArticles.push(response.data.articles.technology[1]);
    combinedArticles.push(response.data.articles.technology[2]);
    console.log(combinedArticles);

    
    for(let i = 0; i < combinedArticles.length; i++){
        let head = combinedArticles[i].headline
        let photo = combinedArticles[i].authorPhoto
        let name = combinedArticles[i].authorName
        let newCard = cardMaker(head, photo, name)
        cardsContainer.appendChild(newCard)
    }
  
  });
