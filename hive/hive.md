## 1. load table
```shell
LOAD DATA INPATH '/user/cloudera/access.log' OVERWRITE INTO TABLE apache_log;
```

## 2. query
```shell
SELECT
        month,
        count(1) AS count
      FROM (SELECT split(time, '/')[1] AS month FROM apache_log) l
      GROUP BY month
      ORDER BY count DESC;

 ```

