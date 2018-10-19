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
        <input type="checkbox" checked="{{item.Checked}}"> <span> {{item.name}} </span> 
        <span class=""> - Precio: $<span>{{item.price}}</span></span>
        <div>
          <template is="dom-if" if="{{tieneAgregados(item.extras)}}">
            Agregados:   
            <template class="" is="dom-repeat" items="{{item.extras}}" as="agreg"> 
                  <p style="text-indent:20px; line-height: 1px;">
                  <input type="checkbox" checked="{{item.Checked}}"> <span>{{agreg.name}}</span>
                    - $ <span>{{agreg.price}}</span>
                  </p>
            </template>
          </template>
        </div>
        <br><br>
      </template>  
    </template>
    
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


}

window.customElements.define('my-view2', MyView2);
