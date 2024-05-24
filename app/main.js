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
function formSubmitMain() {
    Email.send({
        SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
        To : 'codertarak@gmail.com',
        From : document.getElementById("emailF").value,
        Subject : "New Form Submited from Portfolio2.O",
        Body : "Name: " + document.getElementById("nameF").value +"\n"+"Email:"+document.getElementById("emailF").value+"\n"+"Phone: "+document.getElementById("phoneF".value)+"\n"+"Message: "+document.getElementById("messageF").value,
    }).then(
      message => alert("hacknote added")
    );
    return false
}

document.onselectstart = () => {
    event.preventDefault();
}
infoConsole();