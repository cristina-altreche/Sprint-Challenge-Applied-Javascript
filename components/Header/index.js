// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
let headerContainer = document.querySelector(".header-container");

function Header() {
  let header = document.createElement("div");
  let spanDate = document.createElement("span");
  let headerH1 = document.createElement("h1");
  let spanTemp = document.createElement("span");

  header.appendChild(spanDate);
  header.appendChild(headerH1);
  header.appendChild(spanTemp);
  headerContainer.appendChild(header);

  spanDate.classList.add("date");

  return header;
}

Header();
