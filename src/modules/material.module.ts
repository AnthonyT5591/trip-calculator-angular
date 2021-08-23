import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
/**
 * NgModule that includes all Material modules.
*/
@NgModule({
    exports: [
        // Material
        MatButtonModule,
        MatInputModule,
        MatDividerModule,
        MatChipsModule
    ]
})
export class MaterialModule { }