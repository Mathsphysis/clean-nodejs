import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class EnvValidator {
  knexConfig: any;

  @IsInt()
  @IsNotEmpty()
  httpPort: number;

  @IsInt()
  @IsNotEmpty()
  cryptographySalt: number;

  @IsString()
  @IsNotEmpty()
  mongoHost: string;

  @IsInt()
  @IsNotEmpty()
  mongoPort: number;

  @IsString()
  @IsNotEmpty()
  mongoDatabase: string;

  constructor(props: any) {
    Object.assign(this, props);
  }
}
