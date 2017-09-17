import { NgModule } from '@angular/core';
import { TickTockComponent } from './components/tick-tock.component';
import { TickTockService } from './services/tick-tock.service';

export function tickTockServiceFactory() {
  return new TickTockService();
}

@NgModule({
  providers: [
    { provide: TickTockService, useFactory: tickTockServiceFactory }
  ],
  declarations: [TickTockComponent],
  exports: [TickTockComponent]
})
export class TickTockModule { }
