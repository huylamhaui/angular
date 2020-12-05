import { MatDialogRef } from '@angular/material/dialog';
import { createAction, props } from '@ngrx/store';
import { ApiResponse, Page } from 'src/app/shared/models/api.model';
import { MenuDialogComponent } from '../components/menu-dialog/menu-dialog.component';
import { Menu } from '../menu.model';

export const getMenuPage = createAction(
    '[Menu page] get menu page',
    props<{ query: any }>()
);

export const getMenuPageFailure = createAction(
    '[Menu api] get menu page failure',
    props<{ error: any }>()
);

export const getMenuPageSuccess = createAction(
    '[Menu api] get menu page success',
    props<{ response: ApiResponse<Page<Menu>> }>()
);






export const createMenu = createAction(
    '[Menu page] create menu',
    props<{ payload: Menu }>()
);


export const createMenuSuccess = createAction(
    '[Menu api] create menu success',
    props<{ response: ApiResponse<Menu> }>()
);


export const createMenuFailure = createAction(
    '[Menu api] create menu failure',
    props<{ error: any }>()
);
