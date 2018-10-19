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
            <template is="dom-if" if="{{averiguarDia(item.dias)}}">
            <div>
                <span> {{item.nombre}} </span>
                <a on-click="clickedButton"> + </a>
            </div>
        </template>

        `;
    }


     clickedButton(oEvent){
        // oEvent.model.get is the getter for all properties of "item" in your bound array
        console.log(oEvent.model.get('item.nombre'));
    }
    averiguarDia(dias){
        var days = ["domingo","lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        var d = new Date();
        var hoy = days[d.getDay()];
        return (dias.indexOf(hoy)!==-1);
    }

    getItems() {
        return [{
            "nombre": "Milanesa Carne",
            "precio": "100",
            "dias": ["lunes", "martes", "miercoles", "jueves", "viernes"],
            "agregados": [{"nombre": "napolitana", "precio": "10"},
                {"nombre": "pure", "precio": "0"},
                {"nombre": "ensalada", "precio": "0"}]
        }, {
            "nombre": "Milanesa Pollo",
            "precio": "100",
            "dias": ["lunes", "martes", "miercoles", "jueves", "viernes"],
            "agregados": [{"nombre": "napolitana", "precio": "10"},
                {"nombre": "pure", "precio": "0"},
                {"nombre": "ensalada", "precio": "0"}]
        }, {
            "nombre": "Pollo al horno con papas",
            "precio": "120",
            "dias": ["lunes"]
        }, {
            "nombre": "Lentejas",
            "precio": "120",
            "dias": ["martes"]
        }, {
            "nombre": "Mondongo",
            "precio": "110",
            "dias": ["viernes"]
        }, {
            "nombre": "Risotto con pollo",
            "precio": "90",
            "dias": ["miercoles"]
        }, {
            "nombre": "Agnolottis de verdura",
            "precio": "80",
            "dias": ["jueves"]
        }]
    }


}

window.customElements.define('my-view2', MyView2);
