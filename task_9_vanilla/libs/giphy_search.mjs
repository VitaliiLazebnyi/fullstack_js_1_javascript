//
// Giphy Search lib part
//
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

class GiphyHTTPLib {
    _URL             = 'https://api.giphy.com/v1/gifs/search';
    _LIMIT           = 5;
    _cache           = {}
    _lastRequestTime = null

    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    _searchParams(request) {
        let params = {
            q: request,
            api_key: this.apiKey,
            limit: this._LIMIT
        }

        return Object.keys(params)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&')
    }

    _searchUrl(request){
        return `${this._URL}?${this._searchParams(request)}`
    }

    _followTimeouts(){
        const time = Date().now - this._lastRequestTime

        if (time < 500) {
            sleep(500 - time)
        }

        this._lastRequestTime = Date().now
    }

    async search(request) {
        this._followTimeouts()

        if (!this._cache[request]){
            const response       = await fetch(this._searchUrl(request));
            const json           = await response.json();
            this._cache[request] = json
        }

        return this._cache[request]
    }
}
