const ul = document.querySelector('ul')
const deleteButtons = document.querySelectorAll('.delete-btn')
//const deleteButtons = ul.children;

console.log(
    ul.firstElementChild
);

console.log(
 ul.lastElementChild
);

deleteButtons.forEach(btn => {
   btn.addEventListener('click', e => {
    e.target.closest('li').remove()
    if (ul.childElementCount == 0 ){
        ul.innerHTML = 'gosterilecek veri bulunamadi'
     } 
   })
})

console.log(
   ul.childElementCount 
)


const test = document.querySelector('.test')

console.log(
    test.clientWidth
)


const title = document.querySelector('.title')
console.log(
  title.previousElementSibling  
)


console.log( 
    title.nextElementSibling.nextElementSibling
)

const scrollContent = document.querySelector('.scroll-content')
const scrolldDownBtn = document.getElementById('scroll-down')
console.log(
    scrollContent.scrollHeight
)
scrolldDownBtn.addEventListener('click',() => {
   console.log(
    scrollContent.scrollTop += 50
   )
})

const scrollContent2 = document.querySelector('.scroll-content2')
const scrollRightBtn = document.getElementById('scroll-right')
const scrollLeftBtn = document.getElementById('scroll-left')

if(scrollContent2.scrollLeft == 0) {
    scrollLeftBtn.setAttribute('disabled' , 'disabled')
}else{
    scrollLeftBtn.removeAttribute('disabled')
}


console.log(
    scrollContent2.scrollWidth,
    scrollContent2.clientWidth
)


console.log(
    scrollContent2.scrollWidth
)
scrollRightBtn.addEventListener('click',e => {
    scrollContent2.scrollLeft += 50
    console.log(e.target.tagName)
})

scrollLeftBtn.addEventListener('click',() => {
     scrollContent2.scrollLeft -= 50
 })

scrollContent2.addEventListener('scroll', e => {
    if(scrollContent2.scrollWidth - scrollContent2.clientWidth == e.target.scrollLeft) {
        scrollRightBtn.setAttribute('disabled' , 'disabled')
    }else{
        scrollRightBtn.removeAttribute('disabled')
    } 
})


const ankara = document.getElementById('ankara')

const h1 = document.createElement('h1')
h1.textContent = 'baslik'

// ankara.before(h1) hata veriyor
//ankara.append(h1)
//ankara.prepend(h1)
//ankara.after(h1)

console.log(
    ankara.getBoundingClientRect()
)


const aElements = document.querySelectorAll('a')
 
aElements.forEach(a => {
    if(a.hasAttribute('title')) {
        a.style.backgroundColor = 'lightgreen'
    }
})

const buttons = document.querySelectorAll('button')
for (const button of buttons){
    if(button.matches('button[type=submit][disabled]')){
   button.style.fontSize = '100px'
}
}






