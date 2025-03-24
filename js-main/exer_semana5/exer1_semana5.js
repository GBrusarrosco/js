window.onload = () => {
    const calculator = document.getElementById('calculator');
    
   
    const display = document.createElement('input');
    display.type = 'text';
    display.className = 'display';
    display.readOnly = true;
    calculator.appendChild(display);


    const buttons = document.createElement('div');
    buttons.className = 'buttons';
    
  
    const buttonValues = [
        ['7', '8', '9', '/'],
        ['4', '5', '6', '*'],
        ['1', '2', '3', '-'],
        ['0', 'C', '=', '+']
    ];

    buttonValues.forEach(row => {
        row.forEach(value => {
            const button = document.createElement('button');
            button.className = `btn ${value === 'C' || value === '=' ? 'operator' : ''}`;
            button.textContent = value;
            
            if (value === '0') button.classList.add('zero');
            
            button.addEventListener('click', () => handleButtonClick(value, display));
            buttons.appendChild(button);
        });
    });

    calculator.appendChild(buttons);
};

function handleButtonClick(value, display) {
    switch(value) {
        case 'C':
            display.value = '';
            break;
        case '=':
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Erro';
            }
            break;
        default:
            display.value += value;
    } 
}