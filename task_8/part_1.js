module.exports = Promise;

function Promise(func) {
    let state = 'pending';
    let deferred = null;
    let value;

    function resolve(newValue) {
        try {
            if (newValue && typeof newValue.then === 'function') {
                newValue.then(resolve, reject);
                return;
            }
            state = 'resolved';
            value = newValue;

            if (deferred) {
                handle(deferred);
            }
        } catch (err) {
            reject(err);
        }
    }

    function reject(reason) {
        state = 'rejected';
        value = reason;

        if (deferred) {
            handle(deferred);
        }
    }

    function handle(handler) {
        if (state === 'pending') {
            deferred = handler;
            return;
        }

        setTimeout(function(){
            let handlerCb;

            if (state === 'resolved') {
                handlerCb = handler.onResolved;
            }

            else if (state === 'rejected') {
                handlerCb = handler.onRejected;
            }

            if (handlerCb) {
                let returnValueOrReason;

                try {
                    returnValueOrReason = handlerCb(value);
                } catch (err) {
                    handler.reject(err);
                    return;
                }

                if (state === 'resolved') {
                    handler.resolve(returnValueOrReason);
                }
                else if (state === 'rejected') {
                    handler.reject(returnValueOrReason);
                }
            }

            if (!handlerCb) {
                state === 'resolved' ? handler.resolve(value) : handler.reject(value);
                return;
            }
        }, 1);
    }

    this.then = function(onResolved, onRejected) {
        return new Promise(function(resolve, reject){
            handle({
                onResolved: onResolved,
                onRejected: onRejected,
                reject: reject,
                resolve: resolve
            });
        });
    }

    func(resolve, reject);
}

function someAsyncFunction() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            let value = Math.ceil(Math.random() * 10);
            if (value % 2) {
                resolve(value);
            } else {
                reject(value);
            }
        }, 0);
    });
}

someAsyncFunction()
    .then(function(odd){
        console.log("odd number: " + odd);
        return odd;
    }, function(even) {
        console.log("even number: " + even);
        return even;
    });
