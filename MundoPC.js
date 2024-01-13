//Creacion de la clase DispotivoEntrada
class DispositivoEntrada{
    //Creacion del constructor para los atributos de la clase
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    //Creacion de los metodos para cada uno de los atributos
    get tipoEntrada(){
        return this._tipoEntrada
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones; //Por cada objeto del tipo Raton se manda a llamar al constructor y se le agrega un id unico
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado; //Por cada objeto del tipo Teclado se manda a llamar al constructor y se le agrega un id unico
    }
    get _idTeclados(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}]`;
    }
}

class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre, monitor, raton, teclado){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }
    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`
    }
}

class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden(){
        return this._idComputadora;
    }
    //Se programa el metodo que hace la relacion de agregacion entre la clase computadora y la clase orden
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden = '';
        for(let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

//Comprobacion para la clase de Raton
let raton1 = new Raton('USB','HP');
console.log(raton1.toString());
let raton2 = new Raton('Bluetooth','DELL');
raton2.marca = 'HP';
console.log(raton2.toString());

//Comprobacion para la clase de Teclado
let teclado1 = new Teclado('XLR8','Janeus');
console.log(teclado1.toString());
let teclado2 = new Teclado('USB 3.0','XEROS');
teclado2.marca = 'XEROS';
console.log(teclado2.toString());

//Comprobacion para la clase de Monitor
let monitor1 = new Monitor('DELL',15);
let monitor2 = new Monitor('HP',33);
console.log(monitor1.toString());
console.log(monitor2.toString());

//Comprobacion para la clase de Computadora
let computadora1 = new Computadora('HP',monitor1,raton1,teclado1);
console.log(computadora1.toString());
let computadora2 = new Computadora('Acer',monitor2,raton2,teclado2);
console.log(computadora2.toString());

//Comprobacion de la clase orden
let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora2);
orden2.mostrarOrden();

