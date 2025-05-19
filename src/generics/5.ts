export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

// Замініть наступний код на версію за допомогою Record
type RecordedUser = Record<UserRole, string>;

const RoleDescription: RecordedUser = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};
