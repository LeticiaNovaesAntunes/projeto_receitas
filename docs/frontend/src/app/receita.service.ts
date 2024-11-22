import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {
  private apiUrl = 'http://localhost/projeto_angular/backend/conexao.php'; // Substitua pelo caminho correto

  constructor(private http: HttpClient) {}

  getReceitas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
