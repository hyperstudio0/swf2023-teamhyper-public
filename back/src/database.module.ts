import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PostSubscriber } from './entity.subscriber';

// ALTER USER 'username'@'host' IDENTIFIED WITH mysql_native_password BY 'password'; << 암호 설정 필수
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env', // .env 파일 경로 설정
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      logging: process.env.DB_LOG === 'true',
      entities: [__dirname + '/domain/**/*.entity{.ts,.js}'],
      // subscribers: [PostSubscriber],
      synchronize: true,
      replication: {
        master: {
          host: process.env.DB_HOST_MASTER,
          port: parseInt(process.env.DB_PORT, 10),
          username: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE,
        },
        slaves: [
          {
            host: process.env.DB_HOST_SLAVES_1,
            port: parseInt(process.env.DB_PORT, 10),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
          },
        ],
        canRetry: true, // 연결이 실패할 경우 PoolCluster가 재연결을 시도할지 여부를 나타내는 부울 값입니다. 기본값은 true입니다.
        removeNodeErrorCount: 5, // 연결이 실패한 경우 노드의 errorCount가 증가합니다. errorCount가 removeNodeErrorCount보다 큰 경우 PoolCluster에서 노드를 제거합니다. 기본값은 5입니다.
        restoreNodeTimeout: 0, // 연결이 실패한 경우 다음 연결 시도가 이루어지기 전에 기다리는 밀리초 단위의 시간을 지정합니다. 0으로 설정하면 노드가 제거되고 더 이상 재사용되지 않습니다. 기본값은 0입니다.
        selector: 'RR', // 슬레이브 노드를 선택하는 방법을 지정합니다. 다음 옵션이 가능합니다:
        // 'RR': 라운드로빈 방식으로 노드를 번갈아가며 선택합니다.
        // 'RANDOM': 노드를 무작위로 선택합니다.
        // 'ORDER': 첫 번째로 이용 가능한 노드를 무조건 선택합니다.
      },
    }),
  ],
})
export class DatabaseModule {}
