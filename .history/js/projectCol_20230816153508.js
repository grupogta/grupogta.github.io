 
const projectColombia = 
[
    [  "Finalizado", "Construcción de la línea de transmisión a 500 Kv. ",  "Línea San Carlos - Sabanalarga",    "Eléctricas de Medellín Ltda.",  1991 ],
    [ "Finalizado", "Construcción de la línea de transmisión a 230 Kv.", "Línea Ocaña - Villacaro", "Eléctricas de Medellín Ltda.", 1994  ],
   
    [
      "En Ejecución",
      "CONSTRCCIÓN DE LOS TRAMOS 1 Y 2 a 600 KV",
     "LT KILO A 600 KV EN CHILE",
      "ISA INTERCHILE",
      2021
],
    [
      "En Ejecución",
      "Construcción,  montaje, pruebas,   a 500 kV ",
     "Línea de trasmisión Cuestecitas-Alpha 500\nkV asociadas a la conexión de los parques eólicos Alpha y Beta, Proyecto ABCU. Tramo 2",
     "ISA",
      2022
],
    [
      "En Ejecución",
      "Mantenimiento, atención de emergencias y  adecuación de infraestructura hasta 500 kV.",
     "Mantenimiento Lineas Transmision GEB",
        "GEB",
      2022
],
    [
      "Finalizado",
      "MANTENIMIENTO DEL ESTADO DE LOS\nCOMPONENTES CIVIL, ESTRUCTURAL, ELECTROMECÁNICO, CONEXIONES Y\nGEOTÉCNICO ",
     "Mantenimiento TESALIA-ALFEREZ 230 Kv",
        "GEB",
      2022
],
    [
      "En Ejecución",
      "Construcción y tendidos de lineas",
     "Proyecto de líneas de transmisión parques eólicos- ABCU",
        "ISA",
      "-"
    ],
    [
      "En Ejecución",
      "Construcción y tendidos de lineas",
      "Contrato Marco ISA- (Varaiante SAVI)",
      "ISA",
      2023
    ]
];
  
const orderProjects = projectColombia.reverse();
addProjects()
function addProjects(){
    for(let i= 0; i < orderProjects.length ; i++)
    {
        addDomProjects(orderProjects[i]);
       
    }
    
}

function addDomProjects(project)
{
    
    let domProjects = document.getElementById("contain-projects");
    let cardProject = document.getElementById("card-project");

    //Clonar un card element
    let cardNode = cardProject.cloneNode(true);
    
    //Cambiar el estilo
    cardNode.setAttribute("style", "width: 18rem;")

    //Cambiar el identificador 
    cardNode.setAttribute("id", "" );
    //Establecer la imagen de un proyecto
    cardNode.children[0].children[0].setAttribute("src", "../img/projects/1.jpg" );
    //Establecer el estado del proyecto
    cardNode.children[0].children[1].innerHTML = project[0];
    //Establecer el objeto del proyecto
    cardNode.children[1].children[0].innerHTML =  project[1];
    //Establecer en donde se realizo el proyecto
    cardNode.children[1].children[1].innerHTML =  project[2] ;
    //Establecer el cliente del proyecto
    cardNode.children[1].children[3].innerHTML =  project[3] ;
    //Establecer el año en el qué se realizo el proyecto
    cardNode.children[1].children[6].innerHTML = project[4];
    

    domProjects.appendChild(cardNode);
}


