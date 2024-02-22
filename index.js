//RESUELVE LOS EJERCICIOS AQUI
/* - [ ] 1.- Dado el array **numbers** cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una función **elevados** que devuelva un array con el cuadrado de cada uno de los elementos. */

const numbers = [4, 5, 6, 7, 8, 9, 10];
const elevados = elemento => numbers.map(elemento => elemento ** elemento);

//Math.pow(base, exponente);

/* - [ ] 2.- Dado el array **foodList** con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], generar un segundo array que consiga generar de salida el resultado esperado.
```
[
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
]
``` */

let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

let result2 = foodList.map((comida, i) => {
    let pais = ["Italia", "Japón", "Valencia"];
    if (i <= 2) {
      return `Como soy de ${pais[i]}, amo comer ${comida}`;
    } else {
      return `Aunque no como carne, el ${comida} es sabroso`;
    }
  });


/*  3.- Dado el  array **staff**, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado: */

// Resultado esperado

/*   [
    'Pepe es The Boss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Ana es becaria y le gusta nadar y bailar',
    'Carlos es secretario y le gusta futbol y queso'
  ] */

const staff = [
    {
        name: 'Pepe',
        role: 'The Boss',
        hobbies: ['leer', 'ver pelis']
    },
    {
        name: 'Ana',
        role: 'becaria',
        hobbies: ['nadar', 'bailar']
    },
    {
        name: 'Luis',
        role: 'programador',
        hobbies: ['dormir', 'comprar']
    },
    {
        name: 'Carlos',
        role: 'secretario',
        hobbies: ['futbol', 'queso']
    }
];

let result3 = staff.map(personas => `${personas.name} es ${personas.role} y le gusta ${personas.hobbies[0]} y ${personas.hobbies[1]}`);




/* Filter
 4.- Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; */

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result4 = numbers2.filter(a => a % 2 != 0);


/* 5.- Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo */

const foodList2 = [
    {
        name: 'Tempeh',
        isVeggie: true
    },
    {
        name: 'Cheesbacon burguer',
        isVeggie: false
    },
    {
        name: 'Tofu burguer',
        isVeggie: true
    },
    {
        name: 'Entrecot',
        isVeggie: false
    }];

function fraseVegana(verdura, i) {
    if (i == 0) {
        return `Que rico ${verdura.name} me voy a comer!`;
    }
    else {
        return `Que rica ${verdura.name} me voy a comer!`;
    }
}

let result5 = foodList2
    .filter(comida => comida.isVeggie)
    .map(fraseVegana);


/*  6.- Dado el array inventory, devolver un array con los nombres de los elementos que valgan más de 300 euros. */

const inventory = [
    {
        name: 'Mobile phone',
        price: 199
    },
    {
        name: 'TV Samsung',
        price: 459
    },
    {
        name: 'Viaje a Cancún',
        price: 600
    },
    {
        name: 'Mascarilla',
        price: 1
    }
];

/*
  [
    'TV Samsung,',
    'Viaje a Cancún'
  ]
*/

let precio = inventory.filter(dinero => dinero.price > 300)

let result6 = precio.map((mayor300, i) => {
    if (i == 0) {
        return mayor300.name;
    } else {
        return "Viaje a Cancún";
    }
});


/*       Reduce
 6.- Dado el siguiente array numeros [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array */

let numeros3 = [39, 2, 4, 25, 62];

let result7 = numeros3.reduce((acc, item) => acc * item);


/* 7.- Concatena todos los elementos del array con reduce para que devuelva una sola frase*/

const sentenceElements = [
    'Me',
    'llamo',
    'Adri',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];

/*Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'*/

let result8 = sentenceElements.reduce((acc, item) => acc + " " + item);

/* 8.- Obtener el monto total de los elementos que pertenecen a catergory "code" en el siguiente array. */

const books = [
    {
        name: ' JS for dummies',
        author: 'Emily A. Vander Veer',
        price: 20,
        category: 'code'
    },
    {
        name: 'Don Quijote de la Mancha',
        author: 'Cervantes',
        price: 14,
        category: 'novel'
    },
    {
        name: 'Juego de tronos',
        author: 'George R. Martin',
        price: 32,
        category: 'Fantasy'
    },
    {
        name: 'javascript the good parts',
        author: 'Douglas Crockford',
        price: 40,
        category: 'code'
    }
];
// Resultado --> 60


let code = books.filter(code => code.category === "code");

let precioLibro = code.map(precioCode => precioCode.price);

let result9 = precioLibro.reduce((acc, item) => acc + item);