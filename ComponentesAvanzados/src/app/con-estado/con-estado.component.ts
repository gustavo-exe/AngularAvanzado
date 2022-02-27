import { Component, OnInit } from '@angular/core';
import { Producto } from "../interfaces/producto";
import { Tienda } from "../models/tienda.model";

@Component({
  selector: 'app-con-estado',
  templateUrl: './con-estado.component.html',
  styleUrls: ['./con-estado.component.css']
})
export class ConEstadoComponent implements OnInit {

  modeloTienda: Tienda = new Tienda();
  itemsComprados: Array<Producto> = [];

  constructor() { }

  ngOnInit(): void {
  }

  comprarProducto(item: Producto) {
    this.itemsComprados.push(item);
  }

  onProductoSelecionado(_event: Producto) {
    //console.log(_event);
    this.comprarProducto(_event)
  }

  getPrecioTotal() {
    if (this.itemsComprados) {
      return this.itemsComprados.reduce(
        (prev: number, items: Producto) => prev + items.precio,
        0
      );
    }else{return null}
  }
}
