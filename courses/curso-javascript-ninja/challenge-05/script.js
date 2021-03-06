/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var array = [1, 2, 3, 4, 5]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function getArray(arr) {
    return arr;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(getArray(array)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function getArrayIndice(arr, num) {
    return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var arrayTypes = [3,'Laiana', {a:1, b:2}, function(){}, false];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

for(i=0; i < arrayTypes.length; i++ ){

    console.log(getArrayIndice(arrayTypes, i));
    

}


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book (name){
    var books = {
        'Clean code':{
            quantidadePaginas: 431,
            autor: 'MARTIN, ROBERT C.',
            editora: 'PRENTICE HALL'
        },
        'Uma Breve História do Tempo': {
            quantidadePaginas: 	262,
            autor: 'Hawking, Stephen',
            editora: 'Rocco'
        },
        'Javascript e Jquery':{
            quantidadePaginas:  640,
            autor: 'Jon Duckett',
            editora: 'Alta books'
        }

    };
    //IF

    // if(!name){
    //     return books;
    // }
    // return books[name];

    //TERNÁRIO

    return !name ? books : books[name];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var name = 'Javascript e Jquery';

console.log( `O livro ${name} tem ${book(name).quantidadePaginas} páginas!`);
// console.log( 'O livro '+name+' tem ' +book(name).quantidadePaginas+ ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log(`O autor do livro ${name} é ${book(name).autor}.`);
// console.log('O autor do livro '+name+' é ' +book(name).autor+ '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

// console.log(`O livro ${name} foi publicado pela editora ${book(name).editora}.`);
console.log('O livro '+name+' foi publicado pela editora ' +book(name).editora+ '.');

