/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
let anioActual = new Date();
  datosPersona.nombre = prompt("Ingresa tu nombre");
  datosPersona.edad =  anioActual.getFullYear() - parseInt(prompt("Ingresa el año en que naciste"))  ;
  datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");
  datosPersona.interesPorJs = confirm("Te interesa Javascript ?");

console.log(datosPersona);
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  
  const nombre = document.querySelector("#nombre");
  const edad = document.querySelector("#edad");
  const ciudad = document.querySelector("#ciudad");
  const interesjs = document.querySelector("#javascript");

  if (datosPersona.interesPorJs == true){
    respuesta_interesjs= "SI";
  }else {
    respuesta_interesjs = "NO";
  }
  nombre.innerText +=  datosPersona.nombre
  edad.innerHTML += datosPersona.edad;
  ciudad.innerText += datosPersona.ciudad;
  interesjs.innerText += respuesta_interesjs;


}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
let fila = document.querySelector("#fila");

listado.forEach(materia =>{
  fila.innerHTML +=
  `<article class = "caja">
  <img src ="${materia.imgUrl}" alt = "${materia.lenguajes}">
  <p class = "lenguajes">Lenguajes: ${materia.lenguajes}</p>
  <p class= "bimestre"> Bimestre ${materia.bimestre}</p>
  </article>`
});
materiasBtn.removeEventListener("click", recorrerListadoYRenderizarTarjetas);

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 let color = document.querySelector("#sitio");

 if (color.classList !='dark'){
   color.classList.add('dark');
 }
 else {
  color.classList.remove('dark')
 }
  

}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

window.addEventListener('keypress', function(e){
  let oculto = document.querySelector('.oculto');

  if (e.key === 'f' || e.key ==='F'){
  oculto.classList.remove("oculto");
  }
})
