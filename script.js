document.getElementById('simulate').addEventListener('click', function() {
    const commandsInput = document.getElementById('commands');
    const commands = commandsInput.value.split(',').map(command => command.trim());

    let x = 0;
    let y = 0;

    for (const command of commands) {
        const [direction, quantity] = command.split(' ');
        const amount = parseInt(quantity);

        switch (direction) {
            case 'frente':
                y += amount;
                break;
            case 'trás':
                y -= amount;
                break;
            case 'esquerda':
                x -= amount;
                break;
            case 'direita':
                x += amount;
                break;
            default:
                console.error(`Comando inválido: ${command}`);
        }
    }

    document.getElementById('result').innerText = `Coordenadas finais: (${x}, ${y})`;
});
