import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 fruits=['banana','apple','orange']
  myvalue=true
  mytext="bye"
  constructor() { }

  ngOnInit() {
  }
clickMe()
{

  alert("hello")
  this.mytext="bye bye"
}
}
