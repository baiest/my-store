import { FilesService } from './services/files.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store'
  imageUpload = ''
  constructor(
    private filesService: FilesService
  ) { }
  
  downloadPdf(){
    this.filesService.getFile('my.pdf', 'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf', 'application/pdf')
      .subscribe()
  }
  
  onUpload(event: Event){
    const element = <HTMLInputElement>event.target
    const file = element.files?.item(0)
    file && this.filesService.uploadFile(file)
      .subscribe(res => this.imageUpload = res.location)
  }
}