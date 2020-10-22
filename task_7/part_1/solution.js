const reaction = (event)  => {
    event.preventDefault();
    alert("Hey, don't do it!");
}

document.addEventListener("copy",        reaction, false);
document.addEventListener("cut",         reaction, false);
document.addEventListener("contextmenu", reaction, false);
