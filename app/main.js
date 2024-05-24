function infoConsole(){
    console.log("%c!!STOP!!","font-size:90px;color:#ff0000;");
    console.log("%cThis is a highly secure world! If you attempt to inject anything to bring down this site, your machine's information, as well as your address and personal details, will be recorded in our directory.","font-size:30px;");
    const messages = [
        "%cMAC Copied...",
        "%cIp added...",
        "%clatitude searching...",
        "%clatitude found!!",
        "%clatitude adding...",
        "%cCamera port BB564...",
        "%clongitude searching...",
        "%cTunel port...",
        "%clongitude found!!",
        "%clongitude adding..."
    ];
    messages.forEach(message => {
        console.log(message, "font-size:12px;color:#33ff10;");
    });
  
}
function formSubminMain(){
    
}
document.onselectstart = () => {
    event.preventDefault();
}
infoConsole();