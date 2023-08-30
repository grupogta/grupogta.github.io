 
const projectColombia = 
[
    [ "En Ejecución", "Mantenimiento y lineas de transmisión todo nivel", "Mantenimiento líneas de transmisión hasta 500KV", "GEB", "../img/projects/proyecto4.png" ],
    [ "En Ejecución", "Construcción y tendidos de líneas", "Proyecto UPME 01-2013 (Sogamoso- Norte-Nueva Esperanza)", "GEB",  "../img/projects/proyecto05.jpg" ],
    [ "En Ejecución",  "Construcción y tendidos de líneas", "Contrato marco ISA (ESOL)", "ISA", "../img/projects/proyecto06.jpg"],
    [ "En Ejecución",  "Construcción y tendidos de líneas",  "Proyecto VINES", "TCE", "../img/projects/proyecto07.jpg"],
    [ "En Ejecución",  "Construcción y tendidos de líneas",  "Proyecto de líneas de transmisión parques eólicos- ABCU", "ISA" , "../img/projects/proyecto08.jpg" ],
    [ "En Ejecución",  "Construcción y tendidos de líneas",  "Contrato Marco ISA- (Varaiante SAVI)", "ISA", "../img/projects/proyecto09.jpg"]
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
    //cardNode.children[1].children[6].innerHTML = project[4];
    

    domProjects.appendChild(cardNode);
}


