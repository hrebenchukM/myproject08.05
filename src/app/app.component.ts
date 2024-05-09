import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component'
import { AccessoriesComponent } from './accessories/accessories.component';
import { CablesadaptersComponent } from './cablesadapters/cablesadapters.component';
import { ComputerComponent } from './computer/computer.component';
import { ComputerpartsComponent } from './computerparts/computerparts.component';
import { GamingComponent } from './gaming/gaming.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { KeyboardmouseComponent } from './keyboardmouse/keyboardmouse.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { MonitorComponent } from './monitor/monitor.component';
import { NetworkingequipmentComponent } from './networkingequipment/networkingequipment.component';
import { PrintersComponent } from './printers/printers.component';
import { TabletsComponent } from './tablets/tablets.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent,AccessoriesComponent,CablesadaptersComponent,ComputerComponent,ComputerpartsComponent,GamingComponent,HeadphonesComponent,KeyboardmouseComponent,LaptopsComponent,MonitorComponent,NetworkingequipmentComponent,PrintersComponent,TabletsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myproject';
}
