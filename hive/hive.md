## 1. create table
```shell
hive < create-table-log.sql
```
## 2. put access.log to HDFS
```shell

hadoop fs -put access.log /user/cloudera/access.log

```
## 3. load table
```shell
use log_data;
LOAD DATA INPATH '/user/cloudera/access.log' OVERWRITE INTO TABLE apache_log;
```

## 4. query
```shell
SELECT
        month,
        count(1) AS count
      FROM (SELECT split(time, '/')[1] AS month FROM apache_log) l
      GROUP BY month
      ORDER BY count DESC;

 ```

