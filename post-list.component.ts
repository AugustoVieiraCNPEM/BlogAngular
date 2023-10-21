import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    { title: 'Meu primeiro post', content: 'Este é o conteúdo do meu primeiro post.' },
    { title: 'Outro post', content: 'Aqui está outro conteúdo de post.' },
    { title: 'Último post', content: 'Este é o conteúdo do último post.' }
  ];
}
Abra o arquivo post-list.component.html no mesmo diretório e adicione o seguinte código para exibir as postagens:
html
Copy code
<div class="post-list">
  <div *ngFor="let post of posts" class="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
  </div>
</div>
Inicie o servidor de desenvolvimento com o seguinte comando:
bash
Copy code
ng serve
Agora, você pode acessar seu blog simples em http://localhost:4200. Ele exibirá as postagens que você definiu no componente PostListComponent. Claro, esse é apenas um exemplo muito simples. Um blog real exigiria muito mais funcionalidade, como adicionar postagens, autenticação de usuário e um back-end para armazenar as postagens. Este exemplo é um ponto de partida para criar um aplicativo Angular que pode ser expandido em um blog completo.





