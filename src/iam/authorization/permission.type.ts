import { CoffeesPermission } from '../../coffees/coffees.permission';

// all permissions from the application
export const Permission = {
  ...CoffeesPermission,
};

export type PermissionType = CoffeesPermission;
