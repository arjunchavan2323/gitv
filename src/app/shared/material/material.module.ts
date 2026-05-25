import { NgModule } from "@angular/core";

import{MatButtonModule}from"@angular/material/button"
import{MatSnackBarModule}from"@angular/material/snack-bar"
import{MatCardModule}from"@angular/material/card"
// import{MatCardModule}from"@angular/material/card"






const material=[
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule
]



@NgModule({
    imports:[...material],
    exports:[...material]
})




export class materialmodule{

}