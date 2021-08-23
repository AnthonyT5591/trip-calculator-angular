import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
/**
 * NgModule that includes all Material modules.
*/
@NgModule({
    exports: [
        // Material
        MatButtonModule,
        MatInputModule
    ]
})
export class MaterialModule { }