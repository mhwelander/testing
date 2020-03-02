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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const tq = __importStar(require("type-graphql"));
const cv = __importStar(require("class-validator"));
const post_type_1 = require("./post.type");
let User = class User {
};
__decorate([
    tq.Field(type => tq.ID),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    tq.Field(),
    cv.IsEmail(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    tq.Field(type => String, { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "name", void 0);
__decorate([
    tq.Field(type => [post_type_1.Post], { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "posts", void 0);
User = __decorate([
    tq.ObjectType()
], User);
exports.User = User;
let UserCreateInput = class UserCreateInput {
};
__decorate([
    tq.Field(),
    cv.IsEmail(),
    __metadata("design:type", String)
], UserCreateInput.prototype, "email", void 0);
__decorate([
    tq.Field(type => String, { nullable: true }),
    __metadata("design:type", Object)
], UserCreateInput.prototype, "name", void 0);
UserCreateInput = __decorate([
    tq.InputType()
], UserCreateInput);
exports.UserCreateInput = UserCreateInput;
