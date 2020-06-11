import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-up-file',
  templateUrl: './up-file.component.html',
  styleUrls: ['./up-file.component.css']
})
export class UpFileComponent implements OnInit {
  uploadedFiles: Array < File > ;
  constructor(public usuariosService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
  }

  
  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }
  
  upload() {
    let formData = new FormData();
    console.log(this.uploadedFiles.length);
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append( "uploads[]",this.uploadedFiles[i], this.uploadedFiles[i].name);
      
    }
    
    this.usuariosService.uploadFile(formData).subscribe((res)=> {
      console.log('response received is ', res)
    },
    err=>{
      if(err.status==403){ M.toast({html: 'Recuerda que solo se aceptan archivos en formato .pdf'})}
    });
    }

}
