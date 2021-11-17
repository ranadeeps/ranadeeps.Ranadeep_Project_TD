function addi(){
    console.log("asc");
    let ele = document.getElementById("con");
    let a = document.getElementById("ans");
    let b = document.createElement('div');
    b.className = "input-group mb-3 inp";
    b.id = new Date();
    let c = document.createElement('input');
    c.type = "text";
    c.className = "form-control";
    c.value = ele.value;
    c.disabled = true;
    let d = document.createElement("button");
    d.className = "btn btn-outline-secondary";
    d.type="button";
    d.onclick = function(){
        del(b.id);
    }
    let e = document.createElement("img");
    e.src = "./IMG/trash.svg";
    e.width = "30";
    e.height = "24";
    e.className="d-inline-block align-text-top";
    d.appendChild(e);
    b.appendChild(c);
    b.appendChild(d);
    a.appendChild(b);
    ele.value="";
}
function del(ide){
    let ele = document.getElementById(ide);
    ele.remove();
}