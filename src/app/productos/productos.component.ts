import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})




export class ProductosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  titulo = "Listado de productos de la tienda X";

  productos = [
    {
      nombre: "Camisas",
      valor: 20000,
      contenido: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque asperiores provident, architecto quam ab temporibus"
    },
    {
      nombre: "Pantalon",
      valor: 50000,
      contenido: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque asperiores provident, architecto quam ab temporibus"
    },
    {
      nombre: "medias",
      valor: 10000,
      contenido: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque asperiores provident, architecto quam ab temporibus"
    },
    {
      nombre: "Zapatos",
      valor: 100000,
      contenido: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque asperiores provident, architecto quam ab temporibus"
    },
  ];




}
