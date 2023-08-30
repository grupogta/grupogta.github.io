

let projectPeru = [
  ["En Ejecución", "Proyecto de contrucción y tendido de lineas","YANA-COYA", "ISA Perú", "2022", "../img/projects/proyectos033.jpg" ],
];

addProjects()
function addProjects(){
    for(let i= 0; i < projectPeru.length ; i++)
    {
        addDomProjects(projectPeru[i]);
       
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
    cardNode.children[0].children[0].setAttribute("src", project[5] );
    //Establecer el estado del proyecto
    cardNode.children[0].children[1].innerHTML = project[0];
    //Establecer el objeto del proyecto
    cardNode.children[1].children[0].innerHTML =  project[1];
    //Establecer en donde se realizo el proyecto
    cardNode.children[1].children[1].innerHTML =  project[2] ;
    //Establecer el cliente del proyecto
    cardNode.children[1].children[3].innerHTML =  project[3] ;
    //Establecer en donde se realizo el proyecto
    //cardNode.children[1].children[6].innerHTML = project[4];
    

    domProjects.appendChild(cardNode);
}


/*
    let domProjects = document.getElementById("contain-projects");

    let cardProject = document.getElementById("card-project");
    //Clonar un card element
    let cardNode = cardProject.cloneNode(true);
    cardNode.setAttribute("id", " ");

    //Cambiar el identificador 

    //Establecer la imagen de un proyecto
    cardProject.children[0].children[0].setAttribute("src", "holaMundo");
    //Establecer el estado del proyecto
    cardProject.children[0].children[1].innerHTML = "Finalizado";
    //Establecer el objeto del proyecto
    cardNode.children[1].children[0].innerHTML = "Hola mundo" ;
    //Establecer en donde se realizo el proyecto
    cardNode.children[1].children[1].innerHTML = "Hola mundo" ;
    //Establecer el cliente del proyecto
    cardNode.children[1].children[3].innerHTML = " ISA" ;
    //Establecer en donde se realizo el proyecto
    cardNode.children[1].children[6].innerHTML = "2023" ;

    domProjects.appendChild(cardNode);
*/

/*
let projectPeru = [
    ["En Ejecución", "Proyecto de contrucción y tendido de lineas","YANA-COYA", "ISA Perú", "2022", "../img/projects/1.jpg" ],
    
    ["Finalizado", "Construcción líneas de transmisión 500kV","YANA-COYA", " ISA Perú", "2020", "../img/projects/1.jpg" ], 
    ["Finalizado", "Construcción líneas de transmisión 220kV","FRIASPATA-MOLLEPATA Y SUB", " ISA Perú", "2018", "../img/projects/1.jpg" ], 
    ["Finalizado", "Construcción líneas de transmisión 220kV","FRIASPATA-MOLLEPATA Y SUB", " ISA Perú", "2017", "../img/projects/1.jpg" ], 
    ["Finalizado", "Construcción de torres eléctricas","MANTARO-MONTALVO", " ISA Perú", " 2018", "../img/projects/1.jpg" ],
    ["Finalizado", "Construcción de torres eléctricas- variante 69kV","MANTARO-MONTALVO", " ISA Perú", "2016", "../img/projects/1.jpg" ],
    ["Finalizado", "Construcción de torres eléctricas","MANTARO-MONTALVO", " ISA Perú", "2017", "../img/projects/1.jpg" ],
    ["Finalizado", "Construcción líneas de transmisión 138kV TOAR","MARICOTA-TOQUEPALA", " ISA Perú", "2017", "../img/projects/1.jpg" ],
    ["Finalizado", "Cambio de retenidas de la linea L-6627 Y L-6628", "MARCONA- SAN NICOLAS", " REP", "2017", "../img/projects/1.jpg" ],
    ["Finalizado", "Construcción de lineas de transmisión 220kV", "MACHUPICCHU-ABANCAY-COTARUSE", " ISA", "2016", "../img/projects/1.jpg" ],
    ["Finalizado", "Instalación separadores de lineas de transmisión", "HIDROELECTRICA CHAGLIA-MANNTTO", "GRUPO UNIÓN", "2015", "../img/projects/1.jpg" ],
    ["Finalizado", "Construcción líneas de transmisión para tendido de fibra optica -500 Kv", "TRUJILLO-CHICLAYO", "EDEMSA-PERÚ", "2014", "../img/projects/1.jpg" ],
    ["Finalizado", "Ejecución obra civil LT Trujillo-Chiclayo 500kV", "TRUJILLO-CHICLAYO", "EDEMSA-PERÚ", "2014", "../img/projects/1.jpg" ],
    ["Finalizado", "Tendido de fibra optica S.E Pariñas y LT L2248 a 220kV", "TALARA-PIURA", "CYFO-PERÚ", "2014", "../img/projects/1.jpg" ],
    
  ];*/