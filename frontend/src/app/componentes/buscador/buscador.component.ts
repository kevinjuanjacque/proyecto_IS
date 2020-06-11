import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
  providers:[UsuariosService]
})
export class BuscadorComponent implements OnInit {
  uploadedFiles: Array < File > ;
  constructor(public usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

  
  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }
  
  upload() {
    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    this.usuariosService.uploadFile(formData).subscribe((res)=> {
      console.log('response received is ', res);
    });
    }
}
