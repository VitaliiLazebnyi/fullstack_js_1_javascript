const makePizza = async (sauceType, toppingType, finalStep) => {
    const makeDough = () => {
        const pizza = {};

        return new Promise(()=>{
            setTimeout(()=> {
                resolve(pizza);
            }, 500);
        })
    };

    const addSauce = pizza => {
        const pizza = {};

        return new Promise(()=>{
            setTimeout(()=> {
                resolve(pizza);
            }, 500);
        })
    };

    const addTopping = pizza => {
        const pizza = {};

        return new Promise(()=>{
            setTimeout(()=> {
                resolve(pizza);
            }, 500);
        })
    };

    const dough = await makeDough();
    let pizza   = await addSauce(dough, sauceType);
    pizza       = await addTopping(pizza, toppingType);
    return pizza
}

makePizza('tomato', 'salman').then(
    pizza => console.log(pizza)
)
