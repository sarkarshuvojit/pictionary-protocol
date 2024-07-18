import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],

      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/gql/graphql.ts'),
      },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client/out/'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
