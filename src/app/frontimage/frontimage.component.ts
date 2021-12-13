import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontimage',
  templateUrl: './frontimage.component.html',
  styleUrls: ['./frontimage.component.scss']
})
export class FrontimageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
