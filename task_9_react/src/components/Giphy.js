import React from 'react';
import GiphyForm from "./GiphyForm";
import GiphyList from "./GiphyList";
import GiphyImage from "./GiphyImage";

class Giphy extends React.Component {
    constructor(props) {
        super(props);
        this.setGiphyList = this.setGiphyList.bind(this);
        this.setGiphyImage = this.setGiphyImage.bind(this);
    }

    state = {
        giphyList: {}
    }

    setGiphyList = (list) => {
        this.setState({ giphyList: list })
    }

    setGiphyImage = (img) => {
        this.setState({ giphyImage: img })
    }

    render() {
        return (
            <div>
                <GiphyForm
                    setGiphyList={this.setGiphyList}
                />
                <GiphyList
                    giphyList={this.state.giphyList}
                    setGiphyImage={this.setGiphyImage}
                />
                <GiphyImage
                    giphyImage={this.state.giphyImage}
                />
            </div>
        )
    }
}

export default Giphy;
