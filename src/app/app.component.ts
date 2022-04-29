import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { FilesService } from './services/files.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-store'
  imageUpload = ''
  constructor(
    private filesService: FilesService,
    private auth : AuthService,
    private tokenService : TokenService
  ) { }
  
  ngOnInit(): void {
    const token = this.tokenService.getToken()
    if (token){
      this.auth.profile().subscribe()
    }
  }
  
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