## 1. Load dataset  

```https://github.com/bbengfort/hadoop-fundamentals/blob/master/data/avgprice_kwh_state.zip```

## 2. login to mysql
```shell
mysql -h localhost -u root -p
```
## 3. create database
```shell
create database energy data;
```

## 4. use new database
```shell
use energydata;
```

## 5. create table
```shell
CREATE TABLE avgprice_by_state(
    year INT NOT NULL,
    state VARCHAR(5) NOT NULL,
    residential DECIMAL (10, 2),
    industrial DECIMAL (10, 2),
    transportation DECIMAL (10, 2),
    other DECIMAL (10, 2),
    total DECIMAL (10, 2)     
);

```
## 6. load data to table
```shell
load data local infile '/home/cloudera/avgprice_kwh_state.csv' into table avgprice_by_state fields terminated by ',' lines terminated by '\n' ignore 1 lines;
```

## 7. run sqoop to ingest to HDFS
```shell
sqoop import --connect jdbc:mysql://localhost:3306/energydata --username root --password cloudera --table avgprice_by_state --target-dir /user/cloudera/energydata -m 1
```
## 8. check file in HDFS
```shell
hadoop fs -cat /user/cloudera/energydata/part-m-00000
```
## 9. import from MySql to Hive
```shell
sqoop import --connect jdbc:mysql://localhost:3306/energydata --username root --password cloudera --table avgprice_by_state  --hive-table avgprice --hive-import -m 1
```
## 10. create country_db
```shell
mysql -u root -p

create database country_db;
use country_db;
create table table country_tbl (id int not null , country varchar(50), primary key (id));

```

## 11. insert data to mysql
```shell
insert into country_tbl values(1, 'USA');
insert into country_tbl values(2, 'CANADA');
insert into country_tbl values(3, 'JAPAN');
insert into country_tbl values(4, 'ENGLAND');
insert into country_tbl values(5, 'THAILAND');

```

## 12. import from Mysql to Hbase
```shell
sqoop import --connect jdbc:mysql://localhost:3306/energydata --username root --password cloudera --table avgprice_by_state  --hbase-table country --column-family country-cf --hbase-row-key id --hbase-create-table  -m 1

```

## 13. check data on hbase
```shell
scan 'country'
```