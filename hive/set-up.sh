hadoop fs -put ./access.log /user/cloudera/access.log

hadoop fs -ls /user/cloudera/access.log

hive < create-table-log.sql
hive < load-data.sql
hive < query.sql
