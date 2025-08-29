// 7 Crie uma classe Retangulo com base e altura privados. Crie métodos para calcular área e perímetro.

class Retangulo {
    #base;
    #altura;

    constructor(base, altura) {
        this.#base = base;
        this.#altura = altura;
    }

    setBase(base) {
        if (base > 0) {
            this.#base = base;
        }
    }

    getBase() {
        return this.#base;
    }

    setAltura(altura) {
        if (altura > 0) {
            this.#altura = altura;
        }
    }

    getAltura() {
        return this.#altura;
    }

    calcularArea() {
        return this.#base * this.#altura;
    }

    calcularPerimetro() {
        return 2 * (this.#base + this.#altura);
    }
}

const retangulo1 = new Retangulo(10, 40); // base 10, altura 40
let area = retangulo1.calcularArea();// 400
let perimetro = retangulo1.calcularPerimetro(); // 100 
console.log(`Área: ${area}, Perímetro: ${perimetro}`); // Área: 400, Perímetro: 100
