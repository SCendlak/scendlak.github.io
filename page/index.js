function addStuff(body) {

    var p = document.createElement("p")
    p.innerText = "TEST"

    body.appendChild(p)
}

function createDonut(rootDiv){
    rootDiv.appendChild(createSvg());
}

function createSvg(){
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('id', 'donut');
    svg.setAttribute('width', window.innerWidth);
    svg.setAttribute('height', window.innerHeight);
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    return svg;
}

var root = document.querySelector("#root")
addStuff(root);
createDonut(root);