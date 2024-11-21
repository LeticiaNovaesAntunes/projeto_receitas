import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import {LinkCircularComponent} from './link-circular/link-circular.component';
import { CardReceitaComponent } from './card-receita/card-receita.component';
declare const $: any; // Declaração do jQuery

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CardReceitaComponent, LinkCircularComponent], // Combine todos os imports em um único array
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'projeto_angular';
  usuarios: any[] = []; // Array para armazenar os dados dos usuários

  ngOnInit() {
    this.fetchUsuarios(); // Chama a função para buscar os dados assim que o componente for inicializado
  }

  // Função para buscar os dados da tabela 'Usuarios' usando jQuery AJAX
  fetchUsuarios() {
    $.ajax({
      url: 'http://localhost/backend/conexao.php', // Caminho do arquivo PHP
      method: 'GET',
      dataType: 'json',
      success: (data: any) => {
        this.usuarios = data; // Armazena os dados no array 'usuarios'
      },
      error: (err: any) => {
        console.error('Erro ao buscar usuários:', err);
      }
    });
  }
}
