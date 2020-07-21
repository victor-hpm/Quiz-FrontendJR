// construtor de objeto
function Bodega(heigth, width, depth) {
    this.heigth = heigth;
    this.width = width;
    this.depth = depth;
}

function addBodega() {
    // captura de datos bodega
    const captureHeightB = document.getElementById("heightB").value;
    const capturewidthB = document.getElementById("widthB").value;
    const capturedepthB = document.getElementById("depthB").value;
    // creando objeto bodega
    objectBodega = new Bodega(captureHeightB, capturewidthB, capturedepthB);
    console.log(objectBodega);
}

function addCajas() {
    // captura de datos cajas
    let captureHeightC = document.getElementById("heightC").value;
    let capturewidthC = document.getElementById("widthC").value;
    let capturedepthC = document.getElementById("depthC").value;

    const permutacionesCajas = [];

    // creando el nuevo array  (variable Global)
    arrayBox = new Array(captureHeightC, capturewidthC, capturedepthC);
    // console.log(objectCaja);
    addBox();

    permBoxArray = perm(arrayBox);
    console.log('arraypC', permBoxArray);

    entraCaja();

    todosCaben();

    // // array a objeto
    // for (let i = 0; i < permBoxArray.length; i++) {
    //     let pCaja = new Bodega(permBoxArray[i][0], permBoxArray[i][1], permBoxArray[i][2]);
    //     permutacionesCajas.push(pCaja)
    // }

    // var perAux = permutacionesCajas.sort((a, b) => (a.heigth > b.heigth) ? 1 : -1);
    // if (perAux != null) {

    // }
    // console.log("objectpC", permutacionesCajas);
}

// variable donde almacenaremos todos las cajas
const database = [];

function addBox() {
    database.push(arrayBox);
    console.log('database', database);
}


// funcion para permutar las cajas y ver todos sus posibles giros en el plano 3d
function perm(xs) {
    let ret = [];
    for (let i = 0; i < xs.length; i = i + 1) {
        let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));
        if (!rest.length) {
            ret.push([xs[i]])
        } else {
            for (let j = 0; j < rest.length; j = j + 1) {
                ret.push([xs[i]].concat(rest[j]))
            }
        }
    }
    return ret;
}


function entraCaja(permBoxArray, Bodega) {
    permutEntra = []
    cabe = Boolean(false);
    for (permutacion in permBoxArray) {
        if (permBoxArray[0] < Bodega.heigth &&
            permBoxArray[1] < Bodega.width &&
            permBoxArray[2] < Bodega.depth) {
            permutEntra.push(permBoxArray);
        }
        return permutEntra;
    }
    console.log('permutEntra', permutEntra);
    // if (permutEntra.length < 0) {
    //     cabe = true;
}



function todosCaben(database, Bodega) {
    let numC = 0;
    for (caja in database) {
        let perC = per(caja);
        let perCT = entraCaja(perC, Bodega)
        if (perCT.length > 0 || perCT != null) {
            numC++;
        } else {
            break
        }
        if (numC === database.length) {
            alert('Si caben')
        } else {
            alert('No caben')
        }

    }
}