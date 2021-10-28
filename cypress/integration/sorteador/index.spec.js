/// <reference types="cypress" />

describe("Suite de testes: Testar funcionalidades do site Project D6", () => {
    it("Cenario de testes: testando se o dado D6 tem resultado menor que 7", () => { 
        cy.visit("https://ctigs5dbfi2rgqdzrb63ma-on.drv.tw/huiwefhuiWEFHUIO/")
        cy.get('[onclick="onClick(6)"]').click()
        cy.get('#result').invoke("text").then(parseFloat).should("be.below",7)
    }),
    it("Cenario de testes: testando se o dado D6 tem resultado maior que 0", () => { 
        cy.visit("https://ctigs5dbfi2rgqdzrb63ma-on.drv.tw/huiwefhuiWEFHUIO/")
        cy.get('[onclick="onClick(6)"]').click()
        cy.get('#result').invoke("text").then(parseFloat).should("be.above",0)
    })
    it("Cenario de testes: testando o botão de Reset", () => { 
        cy.visit("https://ctigs5dbfi2rgqdzrb63ma-on.drv.tw/huiwefhuiWEFHUIO/")
        cy.get('[onclick="reset()"]').click()
        cy.get('#result').should("contain.text", "0")
    })
    it("Cenario de testes: testando o botão Negativo", () => { 
        cy.visit("https://ctigs5dbfi2rgqdzrb63ma-on.drv.tw/huiwefhuiWEFHUIO/")
        cy.get('[onclick="modifySignal(false)"]').click()
        cy.get('[onclick="onClick(8)"]').click()
        cy.get('#result').invoke("text").then(parseFloat).should("be.below",0)
    })
    it("Cenario de testes: testando o botão Positivo", () => { 
        cy.visit("https://ctigs5dbfi2rgqdzrb63ma-on.drv.tw/huiwefhuiWEFHUIO/")
        cy.get('[onclick="modifySignal(true)"]').click()
        cy.get('[onclick="onClick(8)"]').click()
        cy.get('#result').invoke("text").then(parseFloat).should("be.above",0)
    })
    it("Cenario de testes: tentando escrever nos Inputs", () => { 
        cy.visit("https://ctigs5dbfi2rgqdzrb63ma-on.drv.tw/huiwefhuiWEFHUIO/")
        cy.get('#numbers').type("aaaaaaaaaaa")
    })

})