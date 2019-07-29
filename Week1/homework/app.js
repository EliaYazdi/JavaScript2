//make an array

const bookList = [
  'elia1',
  'elia2',
  'elia3',
  'elia4',
  'elia5',
  'elia6',
  'elia7',
  'elia7',
  'elia8',
  'elia9',
  'elia10',
];

//console.log(bookList);

//creat UL

//make an object containing info

const bookInfo = {
  elia1: {
    name: 'Elia 1',
    Author: 'Elia the Famouse',
    Language: 'English',
  },
  elia2: {
    name: 'Elia 1',
    Author: 'Elia the Famouse',
    Language: 'English',
  },
  elia3: {
    name: 'Elia 1',
    Author: 'Elia the Famouse',
    Language: 'English',
  },
  elia4: {
    name: 'Elia 1',
    Author: 'Elia the Famouse',
    Language: 'English',
  },
  elia5: {
    name: 'Elia 1',
    Author: 'Elia the Famouse',
    Language: 'English',
  },
  elia6: {
    name: 'Elia 1',
    Author: 'Elia the Famouse',
    Language: 'English',
  },

  elia7: {
    name: 'Elia 1',
    Author: 'Elia the Famouse',
    Language: 'English',
  },
  elia8: {
    name: 'Elia 1',
    Author: 'Elia the Famouse',
    Language: 'English',
  },
  elia9: {
    name: 'Elia 1',
    Author: 'Elia the Famouse',
    Language: 'English',
  },
  elia1: {
    name: 'Elia 1',
    Author: 'Elia the Famouse',
    Language: 'English',
  },
};

let ul = document.createElement('ul');
document.getElementById('books').appendChild(ul);

bookList.forEach(function (book) {
  let li = document.createElement('li');
  ul.appendChild(li);
  li.innerHTML += book;
});