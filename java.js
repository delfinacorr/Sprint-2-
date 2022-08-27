const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const form = document.getElementById("formGastos");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
const montos = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  montos.push(data);
  text = `${data.nombre}: $${data.monto}`;

  const li = document.createElement("li");
  const p = document.createElement("p");
  p.textContent = text;

  li.appendChild(p);
  li.appendChild(addDeleteBtn());
  ul.appendChild(li);

  e.target.reset();

  actualizarTotales();

  empty.style.display = "none";
});

function actualizarTotales() {
  var total = (total = montos
    .map((d) => Number(d.monto))
    .reduce((a, b) => a + b, 0));
  document.getElementById("total").innerHTML = total;
  var subtotales = total / montos.length;
  document.getElementById("cadauno").innerHTML = subtotales;
}

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}