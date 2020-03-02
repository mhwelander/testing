"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
const rs = __importStar(require("./postresolvers"));
const typedi_1 = require("typedi");
const graphql_yoga_1 = require("graphql-yoga");
const client_1 = require("@prisma/client");
const app = () => __awaiter(void 0, void 0, void 0, function* () {
    typedi_1.Container.set("prismaClient", new client_1.PrismaClient()); // TODO: Do I need to manage the connection?
    const schema = yield tq.buildSchema({
        resolvers: [rs.PostResolver],
        container: typedi_1.Container
    });
    new graphql_yoga_1.GraphQLServer({ schema }).start(() => console.log(`🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/ts/graphql#3-using-the-graphql-api`));
});
app();
