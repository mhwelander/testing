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
const post_type_1 = require("./post.type");
const user_type_1 = require("./user.type");
let UserResolver = class UserResolver {
    posts(user, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield ctx.prisma.user.findOne({
                where: {
                    id: user.id
                }
            }).post());
        });
    }
    user(id, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var user = yield ctx.prisma.user.findOne({
                    where: { id: id }
                });
                return user;
            }
            catch (error) {
                throw error;
            }
        });
    }
};
__decorate([
    type_graphql_1.FieldResolver(),
    __param(0, type_graphql_1.Root()), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_type_1.User, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "posts", null);
__decorate([
    type_graphql_1.Query(returns => user_type_1.User),
    __param(0, type_graphql_1.Arg("id")), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "user", null);
UserResolver = __decorate([
    type_graphql_1.Resolver(user_type_1.User)
], UserResolver);
exports.UserResolver = UserResolver;
let PostResolver = class PostResolver {
    post(id, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var post = yield ctx.prisma.post.findOne({
                    where: { id: id }
                });
                return post;
            }
            catch (error) {
                throw error;
            }
        });
    }
    filterPosts(searchQuery, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var posts = yield ctx.prisma.post.findMany({
                    where: {
                        OR: [
                            { title: { contains: searchQuery } },
                            { content: { contains: searchQuery } },
                        ]
                    }
                });
                return posts;
            }
            catch (error) {
                throw error;
            }
        });
    }
    author(post, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield ctx.prisma.post.findOne({
                where: {
                    id: post.id
                }
            }).author());
        });
    }
    feed(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var posts = yield ctx.prisma.post.findMany({
                    where: {
                        published: true
                    }
                });
                return posts;
            }
            catch (error) {
                throw error;
            }
        });
    }
    createDraft(newPostData, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ctx.prisma.post.create({
                    data: {
                        title: newPostData.title,
                        content: newPostData.content,
                        author: {
                            connect: { email: newPostData.email }
                        }
                    }
                });
            }
            catch (error) {
                throw error;
            }
        });
    }
    publish(id, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ctx.prisma.post.update({
                    where: {
                        id: id
                    },
                    data: {
                        published: true
                    }
                });
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteOnePost(id, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ctx.prisma.post.delete({
                    where: {
                        id: id
                    }
                });
            }
            catch (error) {
                throw error;
            }
        });
    }
    signUpUser(userCreateInput, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ctx.prisma.user.create({
                    data: {
                        email: userCreateInput.email,
                        name: userCreateInput.name
                    }
                });
            }
            catch (error) {
                throw error;
            }
        });
    }
};
__decorate([
    type_graphql_1.Query(returns => post_type_1.Post),
    __param(0, type_graphql_1.Arg("id")), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "post", null);
__decorate([
    type_graphql_1.Query(returns => [post_type_1.Post]),
    __param(0, type_graphql_1.Arg("searchQuery")), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "filterPosts", null);
__decorate([
    type_graphql_1.FieldResolver(),
    __param(0, type_graphql_1.Root()), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_type_1.Post, Object]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "author", null);
__decorate([
    type_graphql_1.Query(returns => [post_type_1.Post]),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "feed", null);
__decorate([
    type_graphql_1.Mutation(returns => post_type_1.Post),
    __param(0, type_graphql_1.Arg("newPostData")), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_type_1.PostCreateInput, Object]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "createDraft", null);
__decorate([
    type_graphql_1.Mutation(returns => post_type_1.Post),
    __param(0, type_graphql_1.Arg("id")), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "publish", null);
__decorate([
    type_graphql_1.Mutation(returns => post_type_1.Post),
    __param(0, type_graphql_1.Arg("id")), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "deleteOnePost", null);
__decorate([
    type_graphql_1.Mutation(returns => user_type_1.User),
    __param(0, type_graphql_1.Arg("userCreateInput")), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_type_1.UserCreateInput, Object]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "signUpUser", null);
PostResolver = __decorate([
    type_graphql_1.Resolver(post_type_1.Post)
], PostResolver);
exports.PostResolver = PostResolver;
