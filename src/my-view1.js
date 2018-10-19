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

class MyView1 extends PolymerElement {
    static get template() {

        return html`
      <style include="shared-styles" xmlns="http://www.w3.org/1999/html">
        :host {
          display: block;
          padding: 10px;
        }
      </style>
    
    hay que replantear la vista, primero vamos a hacer view 2 para que se pueda sumar
    el pedido que vamos a hacer y despues ver los detalles de ese plato
    <br><br><br><br><br><br><br>
    
    <template is="dom-repeat" items="{{getItems()}}" as="item">
      <template is="dom-if" if="{{averiguarDia(item.dias)}}">
        <input type="checkbox" checked="{{item.Checked}}"> <span> {{item.nombre}} </span> 
        <span class=""> - Precio: $<span>{{item.precio}}</span></span>
        <div>
          <template is="dom-if" if="{{tieneAgregados(item.agregados)}}">
            Agregados:   
            <template class="" is="dom-repeat" items="{{item.agregados}}" as="agreg"> 
                  <p style="text-indent:20px; line-height: 1px;">
                  <input type="checkbox" checked="{{item.Checked}}"> <span>{{agreg.nombre}}</span>
                    - $ <span>{{agreg.precio}}</span>
                  </p>
            </template>
          </template>
        </div>
        <br><br>
      </template>  
    </template>
    `;
    }

    tieneAgregados(agregados){
        if(agregados != null && agregados.length > 0)
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

window.customElements.define('my-view1', MyView1);
