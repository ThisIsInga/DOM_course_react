const elementRoot = document.getElementById('root');
const appContainer = document.createElement('div');
appContainer.innerHTML = `
    Моё первое приложение
    <p>Это первый параграф.</p>
    <button>Нажми на меня!</button>
`;
elementRoot.appendChild(appContainer);