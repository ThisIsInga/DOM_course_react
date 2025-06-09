const elementRoot = document.getElementById('root');
const appContainer = document.createElement('div');
appContainer.textContent = 'Моё первое приложение';
appContainer.innerHTML = `
    <p>Это первый параграф.</p>
    <button>Нажми на меня!</button>
`;
elementRoot.appendChild(appContainer);