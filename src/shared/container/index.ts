import { container } from 'tsyringe';
import { AddAccount } from '../../domain/usecases/add-account';
import { DbAddAccount } from '../../data/usecases/db-add-account';
import { AddRole } from '../../domain/usecases/add-role';
import { DbAddRole } from '../../data/usecases/db-add-role';
import { Hasher } from '../../infra/cryptography/protocols';
import { BcryptAdapter } from '../../infra/cryptography/adapters';
import { RoleRepository } from '../../infra/db/role/repositories/role-repository';
import { MongoRoleRepository } from '../../infra/db/role/repositories/mongo/mongo-role-repository';
import { MongoAccountRepository } from '../../infra/db/account/repositories/mongo/mongo-account-repository';
import { AccountRepository } from '../../infra/db/account/repositories/account-repository';

container.registerSingleton<AccountRepository>(
  'AccountRepository',
  MongoAccountRepository
);
container.registerSingleton<RoleRepository>(
  'RoleRepository',
  MongoRoleRepository
);

container.registerSingleton<AddAccount>('AddAccount', DbAddAccount);
container.registerSingleton<AddRole>('AddRole', DbAddRole);

container.registerSingleton<Hasher>('Hasher', BcryptAdapter);
