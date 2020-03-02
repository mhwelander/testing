import "reflect-metadata";
import * as tq from "type-graphql"
import * as rs from "./postresolvers"
import { introspectionQuery, printSchema } from 'graphql';
import { Container } from "typedi";
import { GraphQLServer } from 'graphql-yoga'
import { PrismaClient } from "@prisma/client";

const app = async () => {
    
    Container.set("prismaClient", new PrismaClient()); // QUESTION: Should I instantiate a new client inside each resolver instead?

    const schema = await tq.buildSchema({
        resolvers: [rs.PostResolver],
        container: Container
    });

    new GraphQLServer({ schema }).start(() =>
        console.log(
            `🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/ts/graphql#3-using-the-graphql-api`,
        ),
    )
}

app();

