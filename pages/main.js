//Cuando el usuario hace clic en ese elemento, se ejecuta la función showSelectOfCommands.

window.onload= function(){
    document.querySelector('.terminal').addEventListener('click', showSelectOfCommands);
}





function commandStats(comm){
    var request = new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            console.log(this.responseText);
        }
    };
    request.open("POST","commandstats.php", true);
    request.setRequestHeader("Content-type", "application/x-www-form-unrelcoded");
    request.send("command="+comm);
}


function showSelectOfCommands(){
    document.getElementById("terminal").classList.add('blureado');
    let x = document.getElementById("x");
    x.style.display="block";
    x.style.zIndex=3;
    x.focus();

}

function executeFromSelect(commandSelected){
    //Ejecuta los comandos seleccionados en la lista de opciones.
    let x =document.getElementById("x");
    x.style.display= "none";

    //Deseleccionar todos los botones
    var ele= document.getElementsByName("command");
    for(var i=0;i<ele.length;i++){
        ele[i].checked =false;
    }

    document.getElementById("terminal").classList.remove('blureado');
    setTimeout(()=>{
        document.getElementById("currentCommand").innerHTML= commandSelected;
    }, 800);
    setTimeout(()=> {
        command(commandSelected)
    }, 1000);

}

function keypressing(event)
{
    //Cuando el usuario presiona la tecla:
    var x = event.key;
    var c = document.getElementById('currentCommand');

    // Si es un una letra o un numero, agregalo al comando actual.
    if (x.length == 1){
        c.innerHTML +=x;
    }

    // Si es retroceso, borra el ultimo caracter.
    else if (x== 'Backspace' && c.innerHTML.length>0){
        c.innerHTML = c.innerHTML.slice(0, -1);
    }

    // Si es un Enter, ejecuta el comando.
    else if (x== 'Enter'){
        let commandEntered= c.innerHTML;
        commandEntered(commandEntered);
 
    }


}



function command(c){
    //recibe un comando y lo ejecuta.

    commandStats(c);

    //Busca el ultimo comando en la terminal, lo elimina como "comando actual" y lo agrega como un comando ya ejecutado:

    let last_command= document.querySelectorAll('.commandLine');
    last_command= last_command[last_command.length -1];
    last_command.removeChild(last_command.lastChild);
    let commandSpan= document.createElement('span');
    commandSpan.innerHTML=c;
    last_command.appendChild(commandSpan);

    // Crea una linea de aviso para un nuevo comando(futuro):

    let newCommand= document.createElement('p');
    newCommand.className= 'commandLine';
    newCommand.innerHTML = '<p class="commandLine"><span class="prompt">visitante@pedroroberti:~</span> <span class="command"><span id="currentCommand"></span><span class="cursor">_</span></span>';

    //Preparado para responder el ultimo comando:
    let term= document.querySelector('.terminal');
    let responseParagraph= document.createElement('p');
    responseParagraph.className='response';
    responseParagraph.innerHTML=commandResponse(c);

    // Añade la respuesta y el nuevo comando a la terminal:
    term.appendChild(responseParagraph);
    term.appendChild(newCommand);

    term.scrollTop=term.scrollHeight;
}
    
function commandResponse(c){
    //Recibe un comando y ejecuta el mismo.

    let cm= c.toLowerCase();
    let text;
    switch(cm){
        case 'help':
        case 'h':
            text = help();
            break;
        case 'c':
        case 'cv':
            text = cv();
            break;
        case 'github':
        case 'g':
            text = git();
            break;
        case 'contact':
        case 'o':
            text = contact();
            break;
        case 'exit':
        case 'shutdown -h now':
        case 'poweroff':
        case 'sudo shutdown -h now':
        case 'sudo poweroff':
        case 'rm -rf/':
            document.querySelector('#terminal').remove();
            break;
        default:
            text = "<strong>--- Unknown command: '" + c + "' ---</strong><br>";
            text+= help();
                    break;
    }
    return text;

    function git(){
        let text = "Entra a <a href='https://github.com/PedroRoberti1'";
        text += "target='_blank onclick='event.stopPropagation();'> mi respositorio de Github</a>!";
        return text;
    }

    function cv(){
        let text ="Hola! Soy <strong class='hl'>Pedro Roberti</strong> y soy un desarrollador de software viviendo en Rosario, Argentina.<br>";
        text += "Finalice mis estudios como programador en el terciario urquiza.<br>";
        text += "Tengo conocimientos en lenguajes tales como PHP and JavaScript.<br>";
        text += "Puedes visitar mi repositorio de GitHub y ver mis proyectos realizados."
        return text;
    }

    function contact(){
        let text = "<strong class='hl'>Contactame!</strong>.<br>";
        text += "-Mira <strong class='hl'>Mi Linkedin profile</strong>.<br>";
        text += "-Enviame un mensaje a: <strong class= 'hl'>Pedroroberti@gmail.com</strong>";
        return text;
    }



}



