const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()                                        // Automatically puts the cursor in the textarea when the page is loading.

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim()
    !== '').map(tag => tag.trim())

    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')

    })

}
 
 
Fortsätt: https://www.youtube.com/watch?v=JkeyKeK3V24 timestamp 53 min