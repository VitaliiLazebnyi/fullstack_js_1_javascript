import React from 'react';
import GiphyHTTPLib from '../libs/giphy_search';

class GiphyForm extends React.Component {
    constructor(props) {
        super(props);
        this.searchGiphy        = this.searchGiphy.bind(this);
        this.handleAPIKeyChange = this.handleAPIKeyChange.bind(this);
    }

    handleAPIKeyChange(event) {
        if (!event.target.value) {
            return
        }

        this.apiKey = event.target.value;
    }

    searchGiphy(event) {
        if (!event.target.value) {
            return
        }

        const request = async () => {
            const giphy   = await new GiphyHTTPLib(this.apiKey);
            const results = await giphy.search(event.target.value);
            this.props.setGiphyList(results)
        }

        request();
    }

    render() {
        return (
            <form>
                <label>
                    API key:
                    <input type="text" name="name" onChange={this.handleAPIKeyChange} />
                </label>
                <br />
                <label>
                    Search for:
                    <input type="text" name="name" onChange={this.searchGiphy} />
                </label>
            </form>
        )
    }
}

export default GiphyForm;
