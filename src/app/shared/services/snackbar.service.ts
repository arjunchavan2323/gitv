import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackbar : MatSnackBar) { }



  opensnackbar(msg:string){
    this._snackbar.open(msg, 'Closed', {
      duration:2000,
      horizontalPosition:'left',
      verticalPosition:'top'
    })
  }
}
