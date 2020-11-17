//
// Events part
//
document
    .querySelector('#giphyForm #apiKey')
    .addEventListener('change',
        (event) => {
        this.giphyLib = new GiphyHTTPLib(event.target.value);
    }
);

const setGiphiesEvent = () => {
    const gifs = document.querySelectorAll('.gyphy')
    gifs.forEach( gif => {
        gif.addEventListener('click',
            (event) => {
                    const url = event.target.dataset.url
                    const img = document.querySelector('#giphyImg')
                    img.src = url
                    img.removeAttribute("hidden")
                }
            );
        }

    )
}

document
    .querySelector('#giphyForm #searchFor')
    .addEventListener('change',
        (event) => {
            const list = document.querySelector('#giphyList');
            list.innerHTML = '';

            this.giphyLib.search(event.target.value).then(
                result => {
                    result['data'].forEach((giphy) => {
                        list.innerHTML += `<div class='gyphy' data-url='${giphy.images.downsized.url}'>${giphy.title}</div>`;
                    })
                    setGiphiesEvent();
                });
        }
    );
