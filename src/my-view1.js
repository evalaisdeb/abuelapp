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

let flag = false;

class MyView1 extends PolymerElement {
    static get template() {

        return html`
    <style include="shared-styles" xmlns="http://www.w3.org/1999/html">
      :host {
        display: block;
        padding: 10px;
      }
    </style>
    <template is="dom-repeat" items="{{getItems()}}" as="item">
            <template is="dom-if" if="{{averiguarDia(item.days)}}">
            <div>
                <span> {{item.name}} </span>
                <a on-click="clickedButton" href="view2"> 
                    <button>(+)</button>
                </a>
            </div>
            </template>
    </template>
        <br>
    <div>
        <a on-click="clickedCancelButton" href="view1">
            <button>CANCEL</button>
        </a>
        
        <a on-click="clickedOKButton" href="view1">
            <button>OK</button>
        </a>
    </div>   
    `;
    }


    clickedCancelButton(){
        console.log("CANCEL");
        flag = true;
    }
    clickedOKButton(){
        console.log("OK");
    }

    clickedButton(oEvent){
        // oEvent.model.get is the getter for all properties of "item" in your bound array
        console.log(oEvent.model.get('item.name'));
    }

    tieneAgregados(extras){
        if(extras != null && extras.length > 0)
            return true;
        return false;
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

window.customElements.define('my-view1', MyView1);
