function parseTemplate(element, data) {
    const children = Array.from(element.childNodes);
    children.forEach((item) => {
        if (!item.dataset)
            return;

        if (!data[item.dataset.field])
            throw new Error('Field value is not defined');

        item.textContent = data[item.dataset.field];
    });
}

parseTemplate(
    document.getElementById('item1'), {
    title: 'Hello world',
    description: 'The first program',
});