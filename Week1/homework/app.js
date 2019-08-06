//make an array

const bookList = [
    'the-kite-runner',
    'number-the-stars',
    'pride-and-prejudice',
    'the-outsiders',
    'little-women',
];
//console.log(bookList);

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

book1Arr = [];
for (const i in booksInfo.book1) {
    book1Arr.push(booksInfo.book1[i]);
};

document.querySelector('#first').innerHTML = `<li>${book1Arr}</li>`;


//creat UL

//make an object containing info

/*let ul = document.createElement('ul');
document.getElementById('books').appendChild(ul);

bookList.forEach(book => {
  let li = document.createElement('li');
  ul.appendChild(li);
  li.innerHTML += book;
});
*/

/*const bookInfo = {
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

document.getElementById('inf').innerHTML = `<li>${bookInfo.key}</li>`; */