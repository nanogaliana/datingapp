import { CanDeactivateFn } from '@angular/router';
import { MemberProfile } from '../../features/members/member-profile/member-profile';

export const preventUnsavedChangesGuard: CanDeactivateFn<MemberProfile> = (component, currentRoute, currentState, nextState) => {
  if (component.editForm?.dirty) {
    return confirm('Está seguro que desea continuar? Se perderán los cambios realizados');
  }
  
  return true;
};
