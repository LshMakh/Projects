import { Component } from '@angular/core';
import { Card } from '../card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  cards : Card[] = [
    new Card('Test','Test','https://as1.ftcdn.net/v2/jpg/02/22/85/16/1000_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg'),
    new Card('Test','Test','https://as1.ftcdn.net/v2/jpg/02/22/85/16/1000_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg'),
    new Card('Test','Test','https://as1.ftcdn.net/v2/jpg/02/22/85/16/1000_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg')
  ]

}
