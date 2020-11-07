import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos of All Time!';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://tse3.mm.bing.net/th?id=OIP.gd601QhErYT69gqJyq_mLQHaD4&pid=Api';
  image3 = 'https://tse1.mm.bing.net/th?id=OIP.89A_JOvaaMD7HglIyirtQgAAAA&pid=Api';

  constructor() { }

  ngOnInit() {
  }

}