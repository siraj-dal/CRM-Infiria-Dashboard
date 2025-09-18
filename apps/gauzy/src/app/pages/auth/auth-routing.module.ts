import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProfileFormComponent } from '@gauzy/ui-core/shared';

const routes: Routes = [
	{
		path: 'profile',
		component: EditProfileFormComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthRoutingModule {}
