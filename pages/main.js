
//Cuando el usuario hace clic en ese elemento, se ejecuta la función showSelectOfCommands.

window.onload= function(){
    document.querySelector('.terminal').addEventListener('click', showSelectOfCommands);
}






//function executeFromSelect(commandSelected){
    //Excecuta el comando seleccionado en la lista de comandos
//}

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
            text = github();
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

}

}