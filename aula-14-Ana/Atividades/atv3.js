class Carro {
    // Construtor para inicializar o estado do carro
    constructor(modelo) {
      this.modelo = modelo;       // Modelo do carro
      this._velocidade = 0;       // Atributo privado (por convenção com underscore)
      this._ligado = false;       // Estado do carro (ligado ou desligado)
    }
  
    // Método público para ligar o carro
    ligar() {
      if (!this._ligado) {
        this._ligado = true;
        console.log(`${this.modelo} está ligado.`);
      } else {
        console.log(`${this.modelo} já está ligado.`);
      }
    }
  
    // Método público para frear o carro
    frear() {
      if (this._velocidade > 0) {
        this._velocidade = 0;
        console.log(`${this.modelo} parou.`);
      } else {
        console.log(`${this.modelo} já está parado.`);
      }
    }
  
    // Getter para acessar a velocidade (com segurança)
    getVelocidade() {
      return this._velocidade;
    }
  
    // Setter para alterar a velocidade com validação
    setVelocidade(velocidade) {
      if (velocidade < 0) {
        console.log("Velocidade não pode ser negativa.");
      } else if (velocidade > 200) {
        console.log("Velocidade máxima permitida é 200 km/h.");
      } else {
        this._velocidade = velocidade;
        console.log(`${this.modelo} está a ${this._velocidade} km/h.`);
      }
    }
  }
  
  // Testando a classe Carro
  const meuCarro = new Carro("Fusca");
  
  meuCarro.ligar();          // Liga o carro
  meuCarro.setVelocidade(50); // Define a velocidade do carro para 50 km/h
  console.log(meuCarro.getVelocidade()); // Acessa a velocidade (50 km/h)
  meuCarro.setVelocidade(220); // Tenta definir uma velocidade acima do limite
  meuCarro.frear();           // Freia o carro
  