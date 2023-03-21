//const subtrair = require('../src/subtrair');
//const somar = require('../src/somar');
const {subtrair, somar, multiplicar} = require('../src/calculadora')

describe("Calcular a soma", ()=>{
  test("Verificar a soma de dois valores positivo", () => {
  
    //execute
    let resultado = somar(2,2)

    //assert
    expect(resultado).toBe(4);
    
  });

  test("Verificar a soma de dois valores negativo",()=>{
    let result_1 = somar(-1,-3)
    let result_2 = somar(2,-2)

    expect(result_1).toBe(-4)
    expect(result_2).toBe(0)

  })

});

describe("Calcular subtração", ()=>{
  test("Verificar a subtração de dois numeros inteiros",()=>{
    let result = subtrair(2,1)
    expect(result).toBe(1)
  })
    

});

describe("Calcular multiplicacao",()=>{
  test("Verificar a multiplicacao de dois numeros inteiros positivo",()=>{
    let result = multiplicar(2,1)
    expect(result).toBe(2)
  })
  //FAILL
  test("Verificar a multiplicacao de dois numeros inteiros negativo",()=>{
    let result = multiplicar(-5,-7)
    expect(result).toBe(12)
  })

})

describe("Calcular soma e subtracao",()=>{
  test("Soma",()=>{
    let result = somar(2,2)
    expect(result).toBe(4)
  })

  test("Subtração",()=>{
    let result = subtrair(2,2)
    expect(result).toBe(0)
  })

})