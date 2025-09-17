class Carro {
    constructor(marca, modelo, ano){

        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        
    }

    setMarca(marca) {
        this.marca = marca
    }

    setModelo(modelo) {
        this.modelo = modelo

    }

    setAno(ano){
        this.ano = ano
    }

    getMarca(){
        return this.marca
    }

    getModelo(){
        return this.modelo
    }

    getAno(){
        return this.ano
    }

    
}

const carro1 = new Carro();
carro1.setAno('2025');
carro1.setModelo('Sedan');
carro1.setMarca('Honda');

carro1.getAno();
carro1.getModelo();
carro1.getMarca();

const carro2 = new Carro();
carro2.setAno('2026');
carro1.setModelo('Hatch');
carro1.setMarca('Toyota');

carro2.getAno();
carro2.getModelo();
carro2.getMarca();

