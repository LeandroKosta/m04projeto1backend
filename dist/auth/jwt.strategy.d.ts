import { PrismaService } from 'src/prisma.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private database;
    constructor(database: PrismaService);
    validate(payload: {
        email: string;
    }): Promise<import(".prisma/client").User>;
}
export {};
