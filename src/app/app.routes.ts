import { Routes } from '@angular/router';
import { ListarComponent } from './Componentes/Moneda/listar/listar.component';
import { EditarComponent } from './Componentes/Moneda/editar/editar.component';
import { EliminarComponent } from './Componentes/Moneda/eliminar/eliminar.component';
import { NuevoComponent } from './Componentes/Moneda/nuevo/nuevo.component';

export const routes: Routes = [

    {
        path: 'moneda/listar',
        component: ListarComponent
    },
    {
        path: 'moneda/editar',
        component: EditarComponent
    },
    {
        path: 'moneda/eliminar',
        component: EliminarComponent
    },
    {
        path: 'moneda/nuevo',
        component: NuevoComponent
    }
];
