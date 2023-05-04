import { booksPerPage, authors, genres, books } from './data.js'


// //Test code
// const element = document.querySelector('body > main > button')
// element.innerHTML = "kkk"

// ////////////////////////////////////



// const range = [12, 24]; // Not sure about this. just added the number for control.

// if (!books || !Array.isArray(books)) {
//   throw new Error('Source required');
// }

// if (!range || !Array.isArray(range) || range.length !== 2) {
//   throw new Error('Range must be an array with two numbers');
// }


// const menu = document.querySelector('overlay__content');
// const themeMenu = document.querySelector('overlay__input');

// menu.addEventListener('click, function(){
//     menu.classList.toggle('is-active');
//     themeMenu.classList.toggle('active');)




// const day = {   //OBJECT
//     dark: '10, 10, 20',
//      light: '255, 255, 255',
//  }

// const night = {   //OBJECT
//      dark: '255, 255, 255',
//      light: '10, 10, 20',
//  }
// console.log(night)

// const themeSelect = document.querySelector('[data-settings-theme]');


// themeSelect.addEventListener('change', () => {
//   const theme = themeSelect.value;

//   if (theme === 'night') {
//     document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
//     document.documentElement.style.setProperty('--color-light', '10, 10, 20');
//   } else if (theme === 'day') {
//     document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
//     document.documentElement.style.setProperty('--color-light', '255, 255, 255');
//   }
// });

//   const fragment = document.querySelector('body > header > div > div:nth-child(2) > button:nth-child(2) > svg');
//   const extracted = books.slice(0, 36);

//   for (let i = 0; i < extracted.length; i++){
//   const { author, image, title, id } = extracted[i];  // Use [i] to access the current item
//   const createPreview = []
//       const preview = createPreview({
//           author,
//           id,
//           image,
//           title
//       });  
//       fragment.appendChild(preview);

//     }
    

//     fragment.appendChild(preview)


// data-list-items.appendChild(fragment)

// const genres = document.createDocumentFragment();
// const element = document.createElement('option');
// element.value = 'any'
// element = 'All Genres'
// genres.appendChild(element)

// for ([id, title]; Object.entries(genres); i++) { //changed name to tittle
//     document.createElement('option')
//     element.value = value
//     element.innerText = text
//     genres.appendChild(element)
// }

//  data-search-genres.appendChild(genres)

//  const authors = document.createDocumentFragment()
// element = document.createElement('option')
// element.value = 'any'
// element.innerText = 'All Authors'
// authors.appendChild(element)

// for ([id, title];Object.entries(authors); id++) {
//     document.createElement('option')
//     element.value = value
//     element = text
//     authors.appendChild(element)
// }

// data-search-authors.appendChild(authors)

// data-settings-theme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
// v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'night' | 'day'

// document.Element.style.setProperty('--color-dark', css[v].dark);
// document.Element.style.setProperty('--color-light', css[v].light);
// data-list-button = "Show more (books.length - BOOKS_PER_PAGE)"

// data-list-button.disabled = !(matches.length - [page * BOOKS_PER_PAGE] > 0)

// data-list-button.innerHTML = /* html */ [
//     '<span>Show more</span>',
//     '<span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>',
// ]

// data-search-cancel.click() { data-search-overlay.open === false }
// data-settings-cancel.click() { querySelect(data-settings-overlay).open === false }
// data-settings-form.submit() { actions.settings.submit }
// data-list-close.click() { data-list-active.open === false }

// data-list-button.click() {
//     document.querySelector([data-list-items]).appendChild(createPreviewsFragment(matches, page x BOOKS_PER_PAGE, {page + 1} x BOOKS_PER_PAGE]))
//     actions.list.updateRemaining()
//     page = page + 1
// }




//Search button 
 const searchButton = document.querySelector('[data-header-search]');
 const searchOverlay = document.querySelector('[data-search-overlay]');
 const searchTitle = document.querySelector('[data-search-title]');
 
 searchButton.addEventListener('click', () => {
   searchOverlay.open = true;
   searchTitle.focus();
 });



//  data-search-form.click(filters) {
//     preventDefault()
//     const formData = new FormData(event.target);
//     const filters = Object.fromEntries(formData);
//     result = []

//     for ( book; booksList; i++) {
//         titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
//         authorMatch = filters.author = 'any' || book.author === filters.author

//         {
//             genreMatch = filters.genre = 'any'
//             for (genre; book.genres; i++) { if singleGenre = filters.genre { genreMatch === true }}}
//         }

//         if titleMatch && authorMatch && genreMatch => result.push(book)
//     }

//     if display.length < 1 
//     data-list-message.class.add('list__message_show')
//     else data-list-message.class.remove('list__message_show')
    

//     data-list-items.innerHTML = ''
//////////////////////////////////////////////////

const fragment = document.createDocumentFragment();            
const extract = books.slice(0,36) //source.slice(range[0], range[1])   // commented out source and replaced it with books to display the 36 books
console.log(books[0])
const inco = document.querySelector('[data-list-items]') // created a variable and took the empty div from HTML line 93

for ( const {authors, image, title, id } of  extract) {       // added s on author, turned it into a for loop
    //const { author: authorId, id, image, title } = props

    let element = document.createElement('button')
    element.classList = 'preview'
    element.setAttribute('data-preview', id)

    element.innerHTML = /* html */ `
        <img
            class ="preview__image"
            src="${image}"
        />
        
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            // <div class="preview__author">${"authors[authorId]"}</div>
        </div>
    `

    fragment.appendChild(element)
}

inco.appendChild(fragment)      // appended the fragment into inco 



    ////////////////////////
    
//     data-list-items.appendChild(fragments)
//     initial === matches.length - [page * BOOKS_PER_PAGE]
//     remaining === hasRemaining ? initial : 0
//     data-list-button.disabled = initial > 0

//     data-list-button.innerHTML = /* html */ `
//         <span>Show more</span>
//         <span class="list__remaining"> (${remaining})</span>
//     `

//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     data-search-overlay.open = false
// }

// data-settings-overlay.submit; {
//     preventDefault()
//     const formData = new FormData(event.target)
//     const result = Object.fromEntries(formData)
//     document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
//     document.documentElement.style.setProperty('--color-light', css[result.theme].light);
//     data-settings-overlay).open === false
// }

// data-list-items.click() {
//     pathArray = Array.from(event.path || event.composedPath())
//     active;

//     for (node; pathArray; i++) {
//         if active break;
//         const previewId = node?.dataset?.preview
    
//         for (const singleBook of books) {
//             if (singleBook.id === id) active = singleBook
//         } 
//     }
    
//     if !active return
//     data-list-active.open === true
//     data-list-blur + data-list-image === active.image
//     data-list-title === active.title
    
//     data-list-subtitle === '${authors[active.author]} (${Date(active.published).year})'
//     data-list-description === active.description