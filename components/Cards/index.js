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

function cardMaker(head, photo, auth) {
  let card = document.createElement("div");
  let headline = document.createElement("div");
  let author = document.createElement("div");
  let imgContainer = document.createElement("div");
  let image = document.createElement("img");
  let spanName = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  cardsContainer.appendChild(card);
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(spanName);
  imgContainer.appendChild(image);

  headline.textContent = head;
  image.src = photo;
  spanName.textContent = auth;

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

 

    combinedArticles.forEach((element) => {
      const newCard = cardMaker(element);
      cardsContainer.appendChild(newCard);
      console.log(newCard);
    });

    // const bhead = articleArr.bootstrap.map((m) => m.headline);
    // const bphoto = articleArr.bootstrap.map((m) => m.authorPhoto);
    // const bauthor = articleArr.bootstrap.map((m) => m.authorName);

    // const jsHead = articleArr.javascript.map((m) => m.headline);
    // const jsPhoto = articleArr.javascript.map((m) => m.authorPhoto);
    // const jsAuthor = articleArr.javascript.map((m) => m.authorName);

    // const jqHead = articleArr.jquery.map((m) => m.headline);
    // const jqPhoto = articleArr.jquery.map((m) => m.authorPhoto);
    // const jqAuthor = articleArr.jquery.map((m) => m.authorName);

    // const nodeHead = articleArr.node.map((m) => m.headline);
    // const nodePhoto = articleArr.node.map((m) => m.authorPhoto);
    // const nodeAuthor = articleArr.node.map((m) => m.authorName);

    // const techHead = articleArr.technology.map((m) => m.headline);
    // const techPhoto = articleArr.technology.map((m) => m.authorPhoto);
    // const techAuthor = articleArr.technology.map((m) => m.authorName);

    // let combinedHeadlines = [];
    // let combinedPhotos = [];
    // let combinedAuthors = [];

    // combinedHeadlines.push(bhead, jsHead, jqHead, nodeHead, techHead);
    // combinedPhotos.push(bphoto, jsPhoto, jqPhoto, nodePhoto, techPhoto);
    // combinedAuthors.push(bauthor, jsAuthor, jqAuthor, nodeAuthor, techAuthor);
    // console.log(combinedHeadlines);
    // console.log(combinedPhotos);
    // console.log(combinedAuthors);

    // combinedHeadlines.forEach((item) => {
    //   const cardNew = cardMaker(item);
    //   cardsContainer.appendChild(cardNew);
    // });

    // combinedPhotos.forEach((item) => {
    //   const cardNew = cardMaker(item);
    //   cardsContainer.appendChild(cardNew);
    // });

    // combinedAuthors.forEach((item) => {
    //   const cardNew = cardMaker(item);
    //   cardsContainer.appendChild(cardNew);
    // });

    // // combinedArticles.push(bootstrap);
    // // combinedArticles.push(bootstrap.map((m) => m.headline));
    // // console.log(
    // //   `these are combined articles in one array ${combinedArticles} `
    // // );
    // // console.log(`these are combined article objects ${combinedObjects}`);
    // // console.log(bhead);
    // // console.log(bphoto);
    // // console.log(bauthor);
    // // console.log(js);
    // // console.log(jq);
    // // console.log(node);
    // // console.log(tech);
  });
