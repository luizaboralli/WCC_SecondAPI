const listaCompras = {
    batata: 13,
    sabao: 3,
    abobrinha: 5,
    toalha: 1,
    cenoura: 8,
    balas: 10, 
    chuchu: 0
}
console.log('Começou')
for(let i = 0; i < 7; i++){

    console.log(Object.keys(listaCompras)[i])
       
    setTimeout(3000);
}
pegar()
console.log('Terminou')

