
class Interface {
    static allCubes=[];

    constructor() {
        document.querySelector('.createcube').addEventListener('click',Interface.addCube)
    }

    static addCube() {
        event.preventDefault();
        const arrIntermediate=Array.from(document.forms[0]);
        const parameters=arrIntermediate.map(function(el){if (el.value==='checkbox') {return el.checked} else {return el.value}}).slice(0,arrIntermediate.length-1)

        Interface.allCubes.push(new CubeRotate(...parameters))
    }
}

new Interface;

