describe('Pizza Order Form', () => {
    beforeEach(() => {
        cy.visit('http://10.0.0.79:3000/pizza')
    })

    const nameInput = () => cy.get('input[name=name_input]');
    const sizeInput = () => cy.get('#size-dropdown')
    const specialInput = () => cy.get('input[name=special]');
    const pepCheck = () => cy.get('input[name=pepperoni]');
    const pineCheck = () => cy.get('input[name=pineapple]');
    const mushCheck = () => cy.get('input[name=mushrooms]');
    const sausageCheck = () => cy.get('input[name=sausage]');

    it('sanity check', () => {
        expect(1 + 1).to.equal(2);
    })

    describe('can add text to boxes', () => {
        it('add text to name box', () => {
            nameInput()
            .should('have.value', '')
            .type('pep')
            .should('have.value', 'pep')

            specialInput()
            .should('have.value', '')
            .type('porch')
            .should('have.value', 'porch')
        })
    })

    describe('can add toppings', () => {
        it('add topping', () => {
            pepCheck()
            .should('not.be.checked')
            .click()
            .should('be.checked')

            pineCheck()
            .should('not.be.checked')
            .click()
            .should('be.checked')

            mushCheck()
            .should('not.be.checked')
            .click()
            .should('be.checked')

            sausageCheck()
            .should('not.be.checked')
            .click()
            .should('be.checked')
        })
    })

    describe('can submit a pizza', () => {
        it('fill out form', () => {
            nameInput()
            .should('have.value', '')
            .type('pep')
            .should('have.value', 'pep')

            sizeInput()
            .
        })
    })

})