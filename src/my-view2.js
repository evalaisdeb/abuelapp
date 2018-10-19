/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView2 extends PolymerElement {
  static get template() {
        return html`
          <style include="shared-styles">
            :host {
              display: block;

              padding: 10px;
            }
          </style>

        <template is="dom-repeat" items="{{getItems()}}" as="item">
            <template is="dom-if" if="{{averiguarDia(item.days)}}">
            <div>
                <span> {{item.name}} </span>
                <button on-click="clickedButton"> + </button>
            </div>
        </template>
        `;
    }


     clickedButton(oEvent){
        // oEvent.model.get is the getter for all properties of "item" in your bound array
        console.log(oEvent.model.get('item.name'));
    }
    averiguarDia(dias){
        var days = ["domingo","lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        var d = new Date();
        var hoy = days[d.getDay()];
        return (dias.indexOf(hoy)!==-1);
    }

    getItems() {
        return [{
            "name": "Milanesa Carne",
            "price": "100",
            "days": ["lunes", "martes", "miercoles", "jueves", "viernes"],
            "extras": [{"name": "napolitana", "price": "10"},
                {"name": "pure", "price": "0"},
                {"name": "ensalada", "price": "0"}]
        }, {
            "name": "Milanesa Pollo",
            "price": "100",
            "days": ["lunes", "martes", "miercoles", "jueves", "viernes"],
            "extras": [{"name": "napolitana", "price": "10"},
                {"name": "pure", "price": "0"},
                {"name": "ensalada", "price": "0"}]
        }, {
            "name": "Pollo al horno con papas",
            "price": "120",
            "days": ["lunes"]
        }, {
            "name": "Lentejas",
            "price": "120",
            "days": ["martes"]
        }, {
            "name": "Mondongo",
            "price": "110",
            "days": ["viernes"]
        }, {
            "name": "Risotto con pollo",
            "price": "90",
            "days": ["miercoles"]
        }, {
            "name": "Agnolottis de verdura",
            "price": "80",
            "days": ["jueves"]
        }]
    }


}

window.customElements.define('my-view2', MyView2);
