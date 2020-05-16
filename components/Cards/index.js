// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(function (response) {
    // console.log(response);
    const articles = response.data.articles
    const proto = Object.keys(articles)

    proto.forEach(topic => {
        articles[topic].forEach(article => {
            const posts = newCards(article)
            document.querySelector('.cards-container').append(posts)
        })
    })
  })

  function newCards(panels){
    const cardDiv = document.createElement('div')
    const headDiv = document.createElement('div')
    const authorDiv = document.createElement('div')
    const imgDiv = document.createElement('div')
    const img = document.createElement('img')
    const authorSpan = document.createElement('span')
    
    cardDiv.classList.add('card')
    headDiv.classList.add('headline')
    authorDiv.classList.add('author')
    imgDiv.classList.add('img-container')

    headDiv.textContent = panels.headline
    authorSpan.textContent = panels.authorName

    img.src = panels.authorPhoto

    cardDiv.append(headDiv, authorDiv)
    authorDiv.append(imgDiv, authorSpan)
    imgDiv.append(img)

    return cardDiv
}



// mvp if i'm not mistaken