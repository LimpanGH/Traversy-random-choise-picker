/* We want to ceate tags under the textarea and split them by comma. 
   Then we want to randomly select one tag and highlight it. */

const tagsEl = document.getElementById('tags')            // This const adresses (brings in) the tags element in our html. We can name it "tagsEl" and set it to "document.getElementById". In the () we set it to the id of " 'tags' ".
const textarea = document.getElementById('textarea')      // This const adresses the textarea-element in our html.

textarea.focus()                                          // With the focus-method, textarea will automatically be in focus and the cursor will be in textarea when user is loading the page.

textarea.addEventListener('keyup', (e) => {               // We want an eventlistener on the text-area and we set it to listen for when a keyboard-key is pressed down and then released. When that happens "=>" ...
    createTags(e.target.value)                            // ... we call the function "create tags". We pass in "e.target.value", which is basically what we are typing in our text-area later.
                                                          // The "e" is short for event and is an event parameter, https://stackoverflow.com/questions/35936365/what-exactly-is-the-parameter-e-event-and-why-pass-it-to-javascript-functions.
    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

function createTags(input) {                              // Here we create the function "createTags" that we are calling on line 9-10, we tell it to take the input from what is written in the textarea.
    const tags = input.split(',')  .filter(tag => tag.trim() !== '')                        .map(tag => tag.trim()) /* here we tell the code to split words that has a comma between and create an array of the words we type in, we also trim any extra spacing that we might type in. Filter is a high-order array-method that allows you to return certain things based on a conditional. The map() method creates a new array populated with the results of calling a provided function on every element in the calling array, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map.
 // const name = split text by ,   return tags without witespace, unless they're empty     for each tag, return an array with the tag and trim it                                                                               The code ".filter(tag => tag.trim() !== '')" means that for each tag => trim of whitespace from the tag and if it's not an empty string " !== '' ", then return it.  Map manipulates the array, for each tag, we want to return an array with the tag but we want to trim the tags. So basically we say it can't be an empty string and also we are going to trim any white-space.*/
    tagsEl.innerHTML = ''                                 // Clears the "textarea" so that the tags don't pile up.  

    tags.forEach(tag => {                                 // Our "tags"-array, created on line 22, loop through the array with "forEach".
        const tagEl = document.createElement('span')      // we then use "document.createElement" to create a "tag"-element for each tag that the loop finds.
        tagEl.classList.add('tag')                        // here we add a class of "tag" by using "classList.add"
        tagEl.innerText = tag                             // here we take the text that "tags.forEach" finds in each tag in the textarea and puts that text into our html-element, i.e copys the text in textarea and puts it in the tags underneath.
        tagsEl.appendChild(tagEl)                         // takes the "tagsEl" (plural) in js, which takes the div with id of "tags" in html and then appends "tagEl" (singular). The appendChild() method of the Node interface adds a node to the end of the list of children of a specified parent node. If the given child is a reference to an existing node in the document, appendChild() moves it from its current position to the new position, https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild.
    })
}

function randomSelect() {
    const times = 30

    const interval = setInterval (() => {
        const randomTag = pickRandomTag()    
        
    if (randomTag !== undefined) {    
        highlightTag(randomTag)
    
        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    } 
    }, 100); 

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)
    }, times * 100)
}

function pickRandomTag() { 
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}

