//make an array

/*const bookList = [
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

let ul = document.createElement('ul');
document.getElementById('books').appendChild(ul);

bookList.forEach(book => {
  let li = document.createElement('li');
  ul.appendChild(li);
  li.innerHTML += book;
});
*/

const bookInfo = {
  'Elia1': {
    properties: {
      name: 'Elia 1',
      Author: 'Elia the Famouse',
      Language: 'English',
      img: 'eli.jpg',
    },
  },
  'Elia2': {
    properties: {
      name: 'Elia 2',
      Author: 'Elia the Famouse',
      Language: 'English',
      img: 'eli.jpg',
    },
  },
  'Elia3': {
    properties: {
      name: 'Elia 3',
      Author: 'Elia the Famouse',
      Language: 'English',
      img: 'eli.jpg',
    },
  },
  'Elia4': {
    properties: {
      name: 'Elia 4',
      Author: 'Elia the Famouse',
      Language: 'English',
      img: 'eli.jpg',
    },
  },
  'Elia5': {
    properties: {
      name: 'Elia 5',
      Author: 'Elia the Famouse',
      Language: 'English',
      img: 'eli.jpg',
    },
  }
}

document.getElementById('inf').innerHTML = `<li>${bookInfo.key}</li>`;