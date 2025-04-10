//Cuando el usuario hace clic en ese elemento, se ejecuta la función showSelectOfCommands.

window.onload= function(){
    document.querySelector('.terminal').addEventListener('click', function(event){
        //Solo abrir si se hace click directamente sobre el fondo del terminal,
        //y no sobre algo dentro...
        if (event.target===terminal){
            showSelectOfCommands();
        }
    });

    window.addEventListener('keyup', function(event){
        if(event.key==='Escape'){
            closeTerminal();
        }
    })
}






function showSelectOfCommands(){
    //Abre terminal de opciones para dispositivos mobiles.

    document.getElementById("terminal").classList.add('blureado');
    let x= document.getElementById("x");
    x.style.display="block";
    x.style.zIndex=3;
    x.focus();

}


function closeTerminal(){
    const terminal = document.getElementById("terminal");
    terminal.classList.remove('blureado');

    const x = document.getElementById('x');
    x.style.display="none";
    x.blur();
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
    setTimeout( ()=>{
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
        command(commandEntered);
 
    }


}



function command(c){
    //recibe un comando y lo ejecuta.


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
        case 'h':
        case 'help':
            text = help();
            break;
        case 'pdf':
        case 'p':
            text = pdf();
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
            text = "<strong>--- Invalid command: '" + c + "' --- List of commands:</strong><br>";
            text+= help();
                    break;
    }
    return text;
}   

    function git(){
        let text = "Enter in <a href='https://github.com/PedroRoberti1'";
        text += "target='_blank onclick='event.stopPropagation();'> my repositorio of github</a>!";
        return text;
    }

    function cv(){
        let text ="Hello! Im <strong class='hl'>Pedro Roberti</strong> and I am a Software Developer living in Rosario, Argentina.<br>";
        text += "I finished my studies as a programmer at the Urquiza Tertiary School<br>";
        text += "I have knowledge in languajes such as PHP and JavaScript.<br>";
        text += "You can visit my GitHub repository and see my completed project."
        return text;
    }

    function contact(){
        let text = "<strong class='hl'>Contactame!</strong>.<br>";
        text += "-Look <a href='https://www.linkedin.com/in/pedro-roberti-526a43358/' target='_blank onlick= 'event.stopPropagation();'> at my Linkedin profile</a>!<br>";
        text += "-Send me a message to: <strong class= 'hl'>Pedroroberti@gmail.com</strong>";
        return text;
    }

    function pdf(){
        let text = "<a href= '../assets/cv.pdf' dowload onclic='event.stopPropagation();'>Here</a> is my cv available, if you need more information <strong class='hl'> contact me</strong>"
        return text;
    }

    function help(){
        let text= "<strong class= 'hl'>Help!</strong>.<br>";
        text += "To see my resume write:<strong class= 'hl'> cv</strong> o <strong class='hl'> c</strong>.<br>"
        text += "To download my traditional resume, write: <strong class= 'hl'> pdf</strong> pdf <strong class='hl'>p</strong>. <br>"
        text += "To view my GitHub repository type:<strong class= 'hl'> github</strong> o <strong class= 'hl'>g</strong>.<br>"
        text += "To see the different contact options write: <strong class= 'hl'> conctact</strong> o <strong class= 'hl'> o</strong>."
        return text;
    }









