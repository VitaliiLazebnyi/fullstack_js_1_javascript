const nestedList = ["Item", ["Item2", ["Item3"]]];

const createNode = (input, parentNode = document.body) => {
    if (Array.isArray(input)) {
        let ul = document.createElement('ul');
        parentNode.appendChild(ul);

        input.forEach((element)=>{
            createNode(element, ul);
        })
    } else {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(input));
        parentNode.appendChild(item);
    }
}

createNode(nestedList);
