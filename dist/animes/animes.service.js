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
exports.AnimesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let AnimesService = class AnimesService {
    constructor(database) {
        this.database = database;
    }
    async create(dadosDoAnime) {
        const animeExiste = await this.database.anime.findUnique({
            where: { titulo: dadosDoAnime.titulo },
        });
        if (animeExiste) {
            throw new common_1.ConflictException('Esse anime já está cadastrado!');
        }
        const anime = await this.database.anime.create({ data: dadosDoAnime });
        return anime;
    }
    async findAll() {
        const anime = await this.database.anime.findMany();
        const userNoPass = anime.map((_a) => {
            var { status } = _a, resto = __rest(_a, ["status"]);
            return resto;
        });
        return userNoPass;
    }
    async findOne(id) {
        const animeExiste = await this.database.anime.findUnique({
            where: { id },
        });
        if (!animeExiste) {
            throw new common_1.NotFoundException('Anime com o ID informado não foi encontrado!');
        }
        delete animeExiste.status;
        return animeExiste;
    }
    async update(id, updateAnimeDto) {
        const anime = await this.database.anime.update({
            data: updateAnimeDto,
            where: { id },
        });
        return anime;
    }
    async remove(id) {
        const animeExiste = await this.database.anime.findUnique({
            where: { id },
        });
        if (!animeExiste) {
            throw new common_1.NotFoundException('Anime com o ID informado não foi encontrado!');
        }
        else {
            await this.database.anime.delete({
                where: { id },
            });
        }
        return { message: 'Id foi encontrado e deletado' };
    }
};
AnimesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AnimesService);
exports.AnimesService = AnimesService;
//# sourceMappingURL=animes.service.js.map