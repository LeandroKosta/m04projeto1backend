"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(database) {
        this.database = database;
    }
    async createUser(dadosDoUsuario) {
        if (dadosDoUsuario.senha !== dadosDoUsuario.confirmacaoSenha) {
            throw new common_1.UnauthorizedException('A senha e a confirmação não são compativeis.');
        }
        const userExists = await this.database.user.findUnique({
            where: { email: dadosDoUsuario.email },
        });
        if (userExists) {
            throw new common_1.ConflictException('Este email já está cadastrado!');
        }
        const saltos = 10;
        const hashDaSenha = await bcrypt.hash(dadosDoUsuario.senha, saltos);
        delete dadosDoUsuario.confirmacaoSenha;
        const user = await this.database.user.create({
            data: Object.assign(Object.assign({}, dadosDoUsuario), { senha: hashDaSenha }),
        });
        delete user.senha;
        return user;
    }
    async update(id, dadosDoUsuario) {
        const user = await this.database.user.update({
            data: dadosDoUsuario,
            where: { id: id },
        });
        delete user.senha;
        return user;
    }
    async findMany() {
        const user = await this.database.user.findMany();
        const userNoPass = user.map((_a) => {
            var { senha } = _a, resto = __rest(_a, ["senha"]);
            return resto;
        });
        return userNoPass;
    }
    async findUnique(id) {
        const user = await this.database.user.findUnique({
            where: { id },
        });
        if (!user) {
            throw new common_1.NotAcceptableException('Usuário com o ID informado não foi encontrado!');
        }
        delete user.senha;
        return user;
    }
    async delete(id) {
        const user = await this.database.user.findUnique({
            where: { id },
        });
        if (!user) {
            throw new common_1.NotAcceptableException('Usuário com o ID informado não foi encontrado!');
        }
        else {
            await this.database.user.delete({
                where: { id },
            });
        }
        return {
            message: 'Id encontrado e deletado com sucesso!',
        };
    }
    async addList(user, animeId) {
        const anime = await this.database.anime.findUnique({
            where: { id: animeId },
        });
        if (!anime) {
            throw new common_1.NotFoundException('Anime não encontrado');
        }
        const usuario = await this.database.user.update({
            where: { id: user.id },
            data: {
                animes: {
                    connect: {
                        id: anime.id,
                    },
                },
            },
            include: {
                animes: true,
            },
        });
        delete usuario.senha;
        return usuario;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map