import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private toaSrv: ToastrService){

  }

  onExit(): void {
    this.toaSrv.success('Side Bar Exit','En construcción...')
  }
  onEdit(): void {
    this.toaSrv.warning('Side Bar Edit','En construcción...')
  }

  onDelete(): void {
    this.toaSrv.error('Side Bar Delete','En construcción...')
  }

  onShow(): void {
    this.toaSrv.success('Side Bar Dashboard','En construcción...')
  }

  onAdd(): void {
    this.toaSrv.success('Side Bar Añadir','En construcción...')
  }  
}
