import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reva',
  templateUrl: './reva.component.html',
  styleUrls: ['./reva.component.css']
})
export class RevaComponent implements OnInit {

  title = "Reva is in bangalore";
  num = 90;
  imageurl = "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/1220/2018/6/19/Reva-University-Bangalore-Campus2.jpg"

  hero = {name: "yash", movie: "kgf 2", city: "bangalore"};

  onClickHandler(){
    console.log("This is click is responding")
    window.alert("This is click is responding")
  }

  onEnter(){
    const element = document.getElementById('hover');
    element.style.background = 'grey';
  }
  onExit(){
    const element = document.getElementById('hover');
    element.style.background = 'white';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
