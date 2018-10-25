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

class Order extends PolymerElement {
  static get template() {
        return html`
            <style include="shared-styles">
            :host {
              display: block;

              padding: 10px;
            }
            </style>
            <div class="card">
                <template id="foodSelector" if="{{foodSelector}}" is="dom-if">
                    <ul class="list-group">
                        <template as="item" is="dom-repeat" items="{{getItems()}}">
                            <template if="{{averiguarDia(item.days)}}" is="dom-if">
                                <li class="list-group-item">
                                    <div>
                                        <span>
                                            {{item.name}}
                                        </span>
                                        <a class="btn btn-outline-primary" on-click="selectFood"> + </a>
                                    </div>
                                </li>
                            </template>
                        </template>
                    </ul>
                    <a href="view1" class="btn btn-danger" on-click="clickedCancelButton">CANCEL</a>
                </template>
            </div>

        `;
    }
    static get properties() {
        return {
            orderPage:  {type: String, value: "foodSelector", notify: true},
            foodSelector:  {type: Boolean, value: true, notify: true},
            detailsSelector:  {type: Boolean,  value: false, notify: true},
            selectedFood:  {type: Object, value:{}}
        }
    }


    showFoodSelector(){
        console.log("showFoodSelector");
        return this.orderPage === "foodSelector";
    }

    showDetailsSelector(){
        console.log("showDetailsSelector");
        return this.orderPage === "detailsSelector";
    }

    averiguarDia(dias){
        var days = ["domingo","lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
        var d = new Date();
        var hoy = days[d.getDay()];
        return (dias.indexOf(hoy)!==-1);
    }

    tieneAgregados(extras){
        if(extras != null && extras.length > 0)
            return true;
        return false;
    }

    getItems() {
        return [{
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
        },{
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
      }]
    }


    clickedCancelButton(){
        console.log("CANCEL");
        flag = true;
    }
    clickedOKButton(){
        console.log("OK");
    }

    selectFood(oEvent){
        // oEvent.model.get is the getter for all properties of "item" in your bound array
        this.selectedFood = oEvent.model.get('item');
        this.dispatchEvent(new CustomEvent('add-cart-item', {
          bubbles: true, composed: true, detail: {
            food: this.selectedFood,
            quantity: 1
          }}));
    }


}

window.customElements.define('add-order', Order);
