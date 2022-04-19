const cliente = {
    nome: 'André',
    idade: 32,
    cpf: '96325874132',
    email: "andre@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

console.log(cliente[chaves[0]])

chaves.forEach(info=>console.log(cliente[info]));