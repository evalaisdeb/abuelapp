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

class OrderDetails extends PolymerElement {
  static get template() {
        return html`
            <style include="shared-styles">
            :host {
              display: block;

              padding: 10px;
            }
            </style>
            <div class="card">
                    <span>
                        {{food.name}}
                    </span>
                    <span class="">
                        - Precio: $
                        <span>
                            {{food.price}}
                        </span>
                    </span>
                    <div>
                        <template if="{{tieneAgregados(food.extras)}}" is="dom-if">
                            Agregados:
                            <template as="agreg" class="" is="dom-repeat" items="{{food.extras}}">
                                <p style="text-indent:20px; line-height: 1px;">
                                    <input checked="{{food.Checked}}" type="checkbox">
                                        <span>
                                            {{agreg.name}}
                                        </span>
                                        - $
                                        <span>
                                            {{agreg.price}}
                                        </span>
                                    </input>
                                </p>
                            </template>
                        </template>
                    </div>
                    <br>
                        <br>
                        </br>
                    </br>
                </input>
                <div>
                    <a on-click="clickedCancelButton">
                        <button>
                            CANCEL
                        </button>
                    </a>
                    <a on-click="clickedOKButton">
                        <button>
                            OK
                        </button>
                    </a>
                </div>
            </div>

        `;
    }
    static get properties() {
        return {
            food:  {type: Object, notify: true, reflectToAttribute: true},
            orderPage:  {type: String, value: "foodSelector", notify: true},
            foodSelector:  {type: Boolean, value: true, notify: true},
            detailsSelector:  {type: Boolean,  value: false, notify: true},
            selectedFood:  {type: Object, value:{}}
        }
    }
 connectedCallback() {
    super.connectedCallback();
    console.log('my-element created!');
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


    clickedCancelButton(){
        console.log(this.food);
        console.log("CANCEL");
    }
    clickedOKButton(){
        console.log("OK");
    }

    selectFood(oEvent){
        // oEvent.model.get is the getter for all properties of "item" in your bound array
        this.selectedFood = oEvent.model.get('item');
        //_pageChanged('view1');
        //this.orderPage = "detailsSelector";
        //this.detailsSelector = true;
        //this.foodSelector = false;
        // This event will be handled by shop-app.
        this.dispatchEvent(new CustomEvent('add-cart-item', {
          bubbles: true, composed: true, detail: {
            food: this.selectedFood,
            quantity: 1
          }}));
    }


}

window.customElements.define('order-details', OrderDetails);
