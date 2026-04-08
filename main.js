class LottoGenerator extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 350px;
                    background-color: var(--card-background-color);
                    border-radius: 12px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    padding: 24px;
                    text-align: center;
                }

                h2 {
                    color: var(--primary-color);
                    font-size: 24px;
                    margin-bottom: 20px;
                }

                .numbers {
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    margin-bottom: 24px;
                }

                .number {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    background-color: var(--number-background-color);
                    border: 1px solid var(--number-border-color);
                    font-size: 18px;
                    font-weight: bold;
                    color: var(--text-color);
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// Lotto Generation Logic
function getBallClass(num) {
    if (num <= 10) return 'n1';
    if (num <= 20) return 'n11';
    if (num <= 30) return 'n21';
    if (num <= 40) return 'n31';
    return 'n41';
}

function generateLotto() {
    const container = document.getElementById('lotto-display');
    container.innerHTML = ''; // Clear previous

    for (let i = 1; i <= 5; i++) {
        let numbers = [];
        while (numbers.length < 6) {
            let n = Math.floor(Math.random() * 45) + 1;
            if (!numbers.includes(n)) {
                numbers.push(n);
            }
        }
        numbers.sort((a, b) => a - b);

        const row = document.createElement('div');
        row.className = 'row';
        
        const label = document.createElement('span');
        label.className = 'label';
        label.innerText = `게임 ${i}`;
        row.appendChild(label);
        
        const ballsContainer = document.createElement('div');
        ballsContainer.className = 'balls-container';

        numbers.forEach(num => {
            const ball = document.createElement('div');
            ball.className = 'ball ' + getBallClass(num);
            ball.innerText = num;
            ballsContainer.appendChild(ball);
        });

        row.appendChild(ballsContainer);
        container.appendChild(row);
    }
}

// Event Listeners
generateBtn.addEventListener('click', generateLotto);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    generateLotto();
});
