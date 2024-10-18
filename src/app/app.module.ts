import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { HeaderComponent } from './layout/header/header.component';
// import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { authInterceptor } from './core/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    provideHttpClient(withInterceptors([authInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
