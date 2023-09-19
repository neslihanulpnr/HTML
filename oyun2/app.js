const container = document.getElementById('container');

const colors = ['#Be44ad', 'lightcoral' , '#3498ad', 'cadetblue', 'hotpink', 'lightgreen', 'lightblue', 'pink', 'purple'];
const SQUARE = 500

for(let i=0; i < SQUARE; i++) {
   const square = document.createElement('div');

   square.setAttribute("id", i);
   square.classList.add('square');
   container.appendChild(square);

}

function getRandomColor(){
   return colors[Math.floor(Math.random() * colors.length)]
}

// function removeColor(div) {
//    div.style.backgroundColor = '#111'
//    div.style.boxShadow = '0 0 2px #000'
// } 

const allSquares = document.querySelectorAll('.square'); 
allSquares.forEach((element, square) => {
    element.addEventListener('click', () => {
      console.log('kareye tıklandı - ' + (square + 1));
      // const randomColor = getRandomColor();
      // element.style.backgroundColor = randomColor;
      // element.style.boxShadow = `0 0 10px ${randomColor}`
});
});

allSquares.forEach((element) => {
element.addEventListener('click', () => {
      if (element.style.backgroundColor === '' || element.style.backgroundColor === 'rgb(17, 17, 17)') {
      const randomColor = getRandomColor();
      element.style.backgroundColor = randomColor;
      element.style.boxShadow = `0 0 10px ${randomColor}`;
      } else {
      element.style.backgroundColor = '';
      element.style.boxShadow = '0 0 2px #000';
      }
   });
});

