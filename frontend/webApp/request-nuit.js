import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `request-nuit`
 *
 * RequestNuit element.
 *
 * @customElement
 * @polymer
 */
class RequestNuit extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
        `;
    }

    static get is() {
        return 'request-nuit';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(RequestNuit.is, RequestNuit);
