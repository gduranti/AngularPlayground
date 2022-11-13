import { Component, OnInit } from '@angular/core';
import { observable, Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <span style="display: block">{{ title }} app is running!</span>
      <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    </div>
    <h2>Here are some links to help you start: </h2>
    <ul>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/cli">CLI Documentation</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
      </li>
    </ul>
    
  `,
  styles: []
})
export class AppComponent implements OnInit {

  title = 'rxjs-tests';

  ngOnInit(): void {

    this.minhaPromisse('Gabriel')
      .then(result => console.log(result))
      .catch(error => console.log(error));

    this.minhaObservable('Fulano2')
      .subscribe({
        next: (result) => console.log(result),
        error: (error) => console.log(error),
        complete: () => console.log('Fim')
      })
  }

  minhaObservable(nome: string): Observable<string> {
    return new Observable(subscriber => {
      if (nome === 'Fulano') {
        subscriber.next('Olá ' + nome);
        subscriber.next('Outro olá ' + nome);
        setTimeout(() => {
          subscriber.next('Olá com delay ' + nome);
        }, 1500);

        // O complete encerra o fluxo. O delay não será
        // recebido pelo observer.
        subscriber.complete();

      } else {
        subscriber.error('Você não é o Fulano');
      }
    });
  }

  minhaPromisse(nome: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (nome === 'Gabriel') {
        setTimeout(() => {
          resolve('Bem vindo ' + nome);
        }, 1000);
      } else {
        reject('Você não é o Gabriel');
      }
    })
  }

}
