import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { categoriaComponent } from 'src/categoria/categoria.component';
import { TarefaComponent } from 'src/tarefa/tarefa.component';
import { categoriaModule } from 'src/categoria/categoria.module';
import { TarefaModule } from 'src/tarefa/tarefa.module';

@NgModule({
  declarations: [
    AppComponent,
    categoriaComponent,
    TarefaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    categoriaModule,
    TarefaModule
    //ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }