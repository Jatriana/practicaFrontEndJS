import PubSub from '../service/Pubsub.js';

export default class BaseController {
    constructor(elemento){
        this.elemento = elemento;
        this.PubSub = PubSub;
        this.eventos = {
            START_LOADING: 'startLoading',
            FINISH_LOADING: 'finishLoading',
            ERROR: 'error'
        };
    }

    subscribe(eventName, eventHandler) {
        this.PubSub.subscribe(eventName, eventHandler);
    }

    publish(eventName, eventData) {
        this.PubSub.publish(eventName, eventData);
    }


}