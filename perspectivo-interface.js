const allCubes=[];

document.querySelector('.createcube').addEventListener('click',addCube)

function addCube() {
    event.preventDefault();
    const arrIntermediate=Array.from(document.forms[0]);
    const parameters=arrIntermediate.map(function(el){if (el.value==='checkbox') {return el.checked} else {return el.value}}).slice(0,arrIntermediate.length-1)

    allCubes.push(new CubeRotate(...parameters))
}