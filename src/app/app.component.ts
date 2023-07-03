import { Component, Input } from '@angular/core';
import { ApiserviceService } from './apiservice.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'json_formatter';


  textJson='';
  jsonFormat='';
  constructor(private service : ApiserviceService){}

  getJsonFormat(){
      this.service.getJsonFormat(this.textJson).subscribe(result=>{
          this.jsonFormat=result;
          console.log(result);
      });
  }
}
