import React from 'react';

class GiphyList extends React.Component {
    constructor(props) {
        super(props);
        this.chooseGiphy = this.chooseGiphy.bind(this);
    }

    chooseGiphy(event) {
        const url = event.target.getAttribute('data-url');
        this.props.setGiphyImage(url)
    }

    render() {
        const giphyList = () => {
            const data = this.props.giphyList['data'];

            if (!data){
                return;
            }

            return data.map(
                (giphy) => <div data-url={giphy.images.original.url} onClick={this.chooseGiphy}>{giphy.title}</div>
            );
        }

        return (
            <div id='giphyList'>
                { giphyList() }
            </div>
        )
    }
}

export default GiphyList;
