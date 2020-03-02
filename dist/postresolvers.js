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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const client_1 = require("@prisma/client");
const typedi_1 = require("typedi");
const post_type_1 = require("./post.type");
let PostResolver = class PostResolver {
    constructor(prismaClient) {
        this.prismaClient = prismaClient;
    }
    post(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var post = yield this.prismaClient.post.findOne({
                    where: { id: id }
                });
                return post;
            }
            catch (error) {
                throw error;
            }
            finally {
                yield this.prismaClient.disconnect(); // QUESTION: Required?
            }
        });
    }
    addPost(newPostData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prismaClient.post.create({
                    data: {
                        title: newPostData.title,
                        content: newPostData.content
                    }
                });
            }
            catch (error) {
                throw error;
            }
            finally {
                yield this.prismaClient.disconnect(); // QUESTION: Required?
            }
        });
    }
};
__decorate([
    type_graphql_1.Query(returns => post_type_1.Post),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "post", null);
__decorate([
    type_graphql_1.Mutation(returns => post_type_1.Post),
    __param(0, type_graphql_1.Arg("newPostData")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_type_1.PostCreateInput]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "addPost", null);
PostResolver = __decorate([
    typedi_1.Service(),
    type_graphql_1.Resolver(post_type_1.Post),
    __metadata("design:paramtypes", [client_1.PrismaClient])
], PostResolver);
exports.PostResolver = PostResolver;
