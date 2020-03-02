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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const tq = __importStar(require("type-graphql"));
const user_type_1 = __importDefault(require("./user.type"));
let Post = class Post {
};
__decorate([
    tq.Field(type => tq.ID) // Auto-generated
    ,
    __metadata("design:type", Number)
], Post.prototype, "id", void 0);
__decorate([
    tq.Field(),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    tq.Field(type => String, { nullable: true }),
    __metadata("design:type", Object)
], Post.prototype, "content", void 0);
__decorate([
    tq.Field(type => Boolean, { nullable: true }),
    __metadata("design:type", Object)
], Post.prototype, "published", void 0);
__decorate([
    tq.Field(type => user_type_1.default, { nullable: true }),
    __metadata("design:type", user_type_1.default)
], Post.prototype, "author", void 0);
Post = __decorate([
    tq.ObjectType()
], Post);
exports.Post = Post;
let PostCreateInput = class PostCreateInput {
    constructor() {
        this.published = false; // Defaults to false
    }
};
__decorate([
    tq.Field(),
    __metadata("design:type", String)
], PostCreateInput.prototype, "title", void 0);
__decorate([
    tq.Field(type => String, { nullable: true }),
    __metadata("design:type", Object)
], PostCreateInput.prototype, "content", void 0);
__decorate([
    tq.Field(type => Boolean, { nullable: true }),
    __metadata("design:type", Object)
], PostCreateInput.prototype, "published", void 0);
PostCreateInput = __decorate([
    tq.InputType()
], PostCreateInput);
exports.PostCreateInput = PostCreateInput;
