// 8 Implemente uma classe Circulo com raio privado e métodos para calcular área e circunferência

class Circulo {
    #raio;

    constructor(raio) {
        this.#raio = raio;
    }
    setRaio(raio) {
        if (raio > 0) {
            this.#raio = raio;
        }
    }

    getRaio() {
        return this.#raio;
    }
}
