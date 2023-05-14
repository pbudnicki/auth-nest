import {
  Permission,
  PermissionType,
} from '../../iam/authorization/permission.type';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../enums/role.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ enum: Role, default: Role.Regular })
  role: Role;

  // NOTE: Having the "permissions" column in combination with the "role"
  // likely does not make sense. I use both in this code just to showcase
  // two different approaches to authorization.
  // NOTE2: in real world application, you would likely have a dedicated
  // permissions table where you'd store app-specific permissions.
  // also, instead of storing users permissions in a JSON column, there would
  // be a many to many relationship between the users and permissions table.
  @Column({ enum: Permission, default: [], type: 'json' })
  permissions: PermissionType[];
}
