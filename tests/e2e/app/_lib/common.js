function appendMessageToDom(message, className="") {
    var x = document.createElement("p");        // Create a <p> element
    x.className = className;
    var t = document.createTextNode(message);   // Create a text node
    x.appendChild(t);                           // Append the text to <p>
    document.body.appendChild(x);
}