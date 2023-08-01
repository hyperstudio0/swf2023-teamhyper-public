1. 스키마 업데이트와 쓰기 작업에는 마스터 서버를 사용합니다. 모든 스키마 업데이트와 쓰기 작업은 마스터 서버에서 수행됩니다.

2. 단순한 쿼리에는 슬레이브 서버를 사용합니다. find 메서드나 select 쿼리 빌더를 사용하여 수행되는 단순한 쿼리는 랜덤한 슬레이브 인스턴스를 사용하여 실행됩니다. 이렇게 함으로써 읽기 작업을 슬레이브 서버로 분산시켜 마스터 서버의 부하를 줄일 수 있습니다.

3. 쿼리 작업에는 마스터 서버를 사용합니다. query 메서드를 사용하여 수행되는 쿼리 작업은 마스터 인스턴스를 사용하여 실행됩니다. 이는 직접적으로 마스터 서버에서 쿼리 작업을 수행해야 할 경우에 사용됩니다.

4. 쿼리 빌더로 생성된 SELECT 쿼리에는 마스터 서버를 명시적으로 사용할 수 있습니다. 아래의 코드를 사용하여 마스터 서버를 사용하는 SELECT 쿼리를 생성할 수 있습니다:

    ```typescript
    const masterQueryRunner = dataSource.createQueryRunner("master");
    try {
        const postsFromMaster = await dataSource
            .createQueryBuilder(Post, "post")
            .setQueryRunner(masterQueryRunner)
            .getMany();
    } finally {
        await masterQueryRunner.release();
    }
    ```

5. 원시 쿼리에는 슬레이브 서버를 명시적으로 사용해야 합니다. 아래의 코드를 사용하여 슬레이브 서버를 사용하는 원시 쿼리를 실행할 수 있습니다:

    ```typescript
    const slaveQueryRunner = dataSource.createQueryRunner("slave");
    try {
        const userFromSlave = await slaveQueryRunner.query(
            "SELECT * FROM users WHERE id = $1",
            [userId],
        );
    } finally {
        await slaveQueryRunner.release();
    }
    ```

위 코드들을 사용하여 데이터베이스에서 마스터와 슬레이브 서버를 구성하고, 적절한 서버를 사용하여 작업을 수행할 수 있습니다.
