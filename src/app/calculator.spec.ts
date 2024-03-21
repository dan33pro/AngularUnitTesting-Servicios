import { Calculator } from './calculator';

describe('Test for Calculator', () => {

    describe('Test fro multiply', () => {
        it('#multiply should return a nine', () => {
            // AAA
            // Arrange
            const calculator = new Calculator();
            // Act
            const rta = calculator.multiply(3,2);
            // Assert
            expect(rta).toEqual(6);
        });
    
        it('#multiply should return a four', () => {
            const calculator = new Calculator();
            const rta = calculator.multiply(1,4);
            expect(rta).toEqual(4);
        });
    })

    describe('Test for divide', () => {
        it('#divide should return a ten', () => {
            const calculator = new Calculator();
            const rta = calculator.divide(50,5);
            expect(rta).toEqual(10);
        });
    
        it('#divide should return a cero', () => {
            const calculator = new Calculator();
            const rta = calculator.divide(0,5);
            expect(rta).toEqual(0);
        });
    
        it('#divide should return a null', () => {
            const calculator = new Calculator();
            const rta = calculator.divide(5,0);
            expect(rta).toBeNull();
        });
    })

    it('Test matches', () => {
        const name = 'daniel';
        let name2;

        expect(name).toBeDefined();
        expect(name2).toBeUndefined();

        expect(1 + 3 === 4).toBeTruthy();
        expect(1 + 3 === 3).toBeFalsy();
    });
});