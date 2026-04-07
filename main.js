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

                button {
                    background-color: var(--primary-color);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    padding: 12px 24px;
                    font-size: 16px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                button:hover {
                    background-color: #357abd;
                }
            </style>
            <h2>Lotto Number Generator</h2>
            <div class="numbers">
                <div class="number">?</div>
                <div class="number">?</div>
                <div class="number">?</div>
                <div class="number">?</div>
                <div class="number">?</div>
                <div class="number">?</div>
            </div>
            <button id="generate">Generate Numbers</button>
        `;

        this.shadowRoot.getElementById('generate').addEventListener('click', () => this.generateNumbers());
    }

    generateNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
        const numberElements = this.shadowRoot.querySelectorAll('.number');
        
        sortedNumbers.forEach((number, index) => {
            numberElements[index].textContent = number;
        });
    }
}

customElements.define('lotto-generator', LottoGenerator);
