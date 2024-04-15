biblioteca = {
    'Books': {
        'Harry Potter': {
            'Author': 'JK Rolling',
            'Gender': 'Fantasy',
            'PublicationYear': '1998',
        },
        'Bible': {
            'Author': 'Lord God',
            'Gender': 'Its own',
            'PublicationYear': 'Long time ago',
        },
        'AnotherOne': {
            'Author': 'Mateus Fenoci',
            'Gender': 'None',
            'PublicationYear': '2024',  
        }
    },
    
}

function addNewBook(Title, Author, Gender, PublicationYear) {
    biblioteca[Title] = {'Author': Author, 'Gender': Gender, 'PublicationYear': PublicationYear}

    // retorna undefined
}

function showBooks() {
    console.log(biblioteca.Books)

    // retorna undefined
}

console.log(addNewBook("O Pequeno Principe", "Saint Exupery", "Ficção", "1998"))

console.log(showBooks())