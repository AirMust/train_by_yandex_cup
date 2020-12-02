'use struct'

const info = {
    "id": "ezeb2vsfve0b",
    "code": 43,
    "message": "404 Error coffee not found"
}
const elem = document.querySelector('#root');

renderBarcode(info, elem);

/**
 * Отрисовать отладочную информацию кофемашины в element
 * @param debugInfo {CoffeeMachineDebugInfo} - отладочная информация
 * @param element {HTMLDivElement} - div с фиксированным размером 300x96 пикселей,
 *     в который будет отрисовываться баркод
 */
function renderBarcode(debugInfo, element) {
    element.style.display = 'flex';
    element.innerHTML = `
    <style>
        .barcode {
        box-sizing: border-box;
        }
        .content {
        width: 256px;
        height: 96px;
        display: flex;
        flex-wrap: wrap;
        }
        .content__bit {
        width: 8px;
        height: 8px;
        }
        .content__bit--one {
        background: black;
        }
        .content__line {
            width: 5px;
            height: 96px;
        }
        .content__line--one {
            width: 4px;
            background: black;
        }
    </style>`

    const bitMap = barcodeData(debugInfo)

    addLines(element, 5);
    const container = document.createElement('DIV');
    container.classList.add('content');
    element.appendChild(container);
    addBit(container, bitMap)
    addLines(element, 5);

}

function addBit(element, bits) {
    for (let i = 0; i < bits.length; i++) {
        let bit;
        if (bits[i]){
            bit = document.createElement('DIV');
            bit.classList.add('content__bit', 'content__bit--one');
        } else {
            bit = document.createElement('DIV');
            bit.classList.add('content__bit');
        }
        element.appendChild(bit);
    }
}

function addLines(element, n) {
    for (let i = 0; i < n; i++) {
        let line;
        if (i % 2 === 0) {
            line = document.createElement('DIV');
            line.classList.add('content__line', 'content__line--one');
        } else {
            line = document.createElement('DIV');
            line.classList.add('content__line');
        }
        element.appendChild(line);

    }
}

function barcodeData(debugInfo) {
    const id = debugInfo.id;
    let code = '' + debugInfo.code;
    let message = debugInfo.message;

    if (code.length < 3) {
        let k = 3 - code.length;
        for (let i = 0; i < k; i++) {
            code = '0' + code;
        }
    }

    if (message.length < 34) {
        let k = 34 - message.length;
        for (let i = 0; i < k; i++) {
            message = message + ' ';
        }
    }

    const mas = strToASCII(id + code + message);

    mas.push(checkSum(mas));
    const bitMas = [];
    mas.forEach(element => {
        const bits = numToBits(element);
        bitMas.push(...bits);
    });

    return bitMas;
}

function strToASCII(str) {
    const res = [];

    for (let i = 0; i < str.length; i++) {
        res.push(str.charCodeAt(i));

    }
    return res;
}

function checkSum(arr) {
    const reducer = (accumulator, currentValue) => accumulator ^ currentValue;
    return arr.reduce(reducer)
}

function numToBits(num) {
    const res = [];
    while (num > 0 || res.length < 8) {
        if (num > 0) {
            let bit = num % 2;
            res.push(bit);
            num = Math.floor(num / 2);
        } else {
            res.push(0);
        }

    }

    return res.reverse();

}
