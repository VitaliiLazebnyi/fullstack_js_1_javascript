import React from 'react';

class GiphyImage extends React.Component {
    render() {
        return (
            <img src={this.props.giphyImage} alt="Giphy image" />
        )
    }
}

export default GiphyImage;
