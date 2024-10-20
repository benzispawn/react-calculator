import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
    const [currentInput, setCurrentInput] = useState('');
    const [previousInput, setPreviousInput] = useState('');
    const [operation, setOperation] = useState(null);

    const appendNumber = (number) => {
        setCurrentInput(currentInput + number);
    };

    const chooseOperation = (operation) => {
        if (currentInput === '') return;
        if (previousInput !== '') {
            compute();
        }
        setOperation(operation);
        setPreviousInput(currentInput);
        setCurrentInput('');
    };

    const compute = () => {
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        if (isNaN(prev) || isNaN(current)) return;

        let result;
        switch (operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }

        setCurrentInput(result.toString());
        setOperation(null);
        setPreviousInput('');
    };

    const clear = () => {
        setCurrentInput('');
        setPreviousInput('');
        setOperation(null);
    };

    return (
        <div className="calculator">
            <input type="text" value={currentInput} readOnly />
            <div className="buttons">
                <button onClick={() => appendNumber(7)}>7</button>
                <button onClick={() => appendNumber(8)}>8</button>
                <button onClick={() => appendNumber(9)}>9</button>
                <button onClick={() => chooseOperation('+')}>+</button>

                <button onClick={() => appendNumber(4)}>4</button>
                <button onClick={() => appendNumber(5)}>5</button>
                <button onClick={() => appendNumber(6)}>6</button>
                <button onClick={() => chooseOperation('-')}>-</button>

                <button onClick={() => appendNumber(1)}>1</button>
                <button onClick={() => appendNumber(2)}>2</button>
                <button onClick={() => appendNumber(3)}>3</button>
                <button onClick={() => chooseOperation('*')}>*</button>

                <button onClick={clear}>C</button>
                <button onClick={() => appendNumber(0)}>0</button>
                <button onClick={compute}>=</button>
                <button onClick={() => chooseOperation('/')}>/</button>
            </div>
        </div>
    );
}

export default Calculator;
