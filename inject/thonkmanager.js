/**
 * @typedef {(thonker: HTMLElement, value: boolean | String | number, index: number, items: HTMLElement[]) => void} callbackfunction
 */

class ThonkManager {
    /**
     * Create a manager of thine thonkers
     */
    constructor() {
        /**
         * The map of the thonkers by name
         * @type {Map<string, {items: HTMLElement[], value: boolean | String | number, callbacks: callbackfunction[]}>}
         */
        this.thonkers = new Map();
    }
    
    /**
     * Bind some thonkers to a name
     * @param {string} nameofthonker The name of the thonkers
     * @param {HTMLElement[]} thonkers Thonkers to bind
     */
    bind(nameofthonker, ...thonkers) {
        let value = this.thonkers.get(nameofthonker);
        if (!value) 
            value = {
                items: [],
                value: false,
                callbacks: []
            }
        value.items = value.items.concat(thonkers);

        this.thonkers.set(nameofthonker, value)
    }

    /**
     * Listen for a change in value of a thonker
     * @param {string} nameofthonker The name of the thonkers
     * @param {callbackfunction[]} callbacks Callback(s) to bind
     */
    listen(nameofthonker, ...callbacks) {
        let value = this.thonkers.get(nameofthonker);
        if (!value)
            throw `${nameofthonker} must be bound before you can listen to it`

        value.callbacks = value.callbacks.concat(callbacks);
        
        this.thonkers.set(nameofthonker, value)
    }

    /**
     * Set a value of some thonkers
     * @param {string} nameofthonker The name of the thonkers
     * @param {boolean | String | number} value The value to set
     */
    set(nameofthonker, value) {
        if (!nameofthonker)
            throw 'You must specify a name to set';

        let currentthonkers = this.thonkers.get(nameofthonker);

        if (currentthonkers.callbacks === [])
            throw 'Your actions are futile unless you are listining for them';

        if (!currentthonkers)
            throw `${nameofthonker} has not been defined`

        currentthonkers.value = value;

        for (let index in currentthonkers.items) {
            let thonker = currentthonkers.items[index];
            if (!thonker instanceof HTMLElement)
                throw `In the list '${nameofthonker}' at position: ${index}, ${typeof thonker} is not an instance of an HTMLElement`

            if (currentthonkers.callbacks)
                for (let callback of currentthonkers.callbacks)
                    callback(thonker, currentthonkers.value, index, currentthonkers.items);
        }

        this.thonkers.set(nameofthonker, currentthonkers);
    }

    /**
     * Get a value of them thonkers
     * @param {string} nameofthonker 
     */
    get(nameofthonker) {
        if (!nameofthonker)
            throw 'You must specify a name to get';

        return this.thonkers.get(nameofthonker).value;
    }
}