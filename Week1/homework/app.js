//make an array

const bookList = [
  'the-kite-runner',
  'number-the-stars',
  'pride-and-prejudice',
  'the-outsiders',
  'little-women',
];
//this is how I printed my array in the DOM but not like a list. like a line!
document.querySelector('#myArr').innerHTML = `<li>${bookList}</li>`

//Now I want to creat an unordered list out of the bookList array

function createList() {
  let uList = document.createElement('ul');
  uList.setAttribute('id', 'li');
  document.body.appendChild(uList);


  for (let index in bookList) {
    let eachBook = document.createElement('li');
    uList.appendChild(eachBook);

    eachBook.textContent = bookList[index];
  }
}
createList();

//Now I have an object of my must read books information

let booksInfo = {
  book1: {
    title: 'The Kite Runner',
    author: 'Khaled Hosseini',
    language: 'English',
  },
  book2: {
    title: 'Number the Stars',
    author: 'lois Lowry',
    language: 'English',

  },
  book3: {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    language: 'English',

  },
  book4: {
    title: 'The Outsiders',
    author: 'S.E Hinton',
    language: 'English',

  },
  book5: {
    title: 'Little Women',
    author: 'Louisa May',
    language: 'English'
  }
};

function makeArray(myObj) {
  let newArray = [];
  for (let i in myObj) {
    newArray.push(i);
  }
  console.log(newArray);
}
let book1infoArr = makeArray(booksInfo.book1);
let book2infoArr = makeArray(booksInfo.book2);
let book3infoArr = makeArray(booksInfo.book3);
let book4infoArr = makeArray(booksInfo.book4);
let book5infoArr = makeArray(booksInfo.book5);

