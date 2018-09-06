import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// PAGES
import { TabsPage } from '../pages/tabs/tabs';
import { PendientesPage } from '../pages/pendientes/pendientes.page';
import { TerminadosPage } from '../pages/terminados/terminados.page';
import { AgregarPage } from '../pages/agregar/agregar.page';

// SERVICES
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WishService } from '../providers/wishes.provider';
import { FilterCompletedPipe } from '../pipes/filter-completed/filter-completed';
import { ListsComponent } from '../components/lists/lists';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendientesPage,
    TerminadosPage,
    AgregarPage,
    FilterCompletedPipe,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendientesPage,
    TerminadosPage,
    AgregarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WishService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
