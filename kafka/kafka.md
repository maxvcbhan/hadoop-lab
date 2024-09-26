# install kafka
```shell
sudo su -
cd /home/cloudera
mkfir kafka
cd kafka
wget  https://archive.apache.org/dist/kafka/0.9.0.1/kafka_2.10-0.9.0.1.tgz
tar xzf kafka_2.10-0.9.0.1.tgz
```

## 2. open new terminal and run kafka server
```shell
sudo su -
cd /home/cloudera/kafka/kafka_2.10-0.9.0.1

bin/kafka-server-start.sh config/server.properties &
```

## 3. open new terminal and run kafka producer
```shell
sudo su -
cd /home/cloudera/kafka/kafka_2.10-0.9.0.1

bin/kafka-console-producer.sh --topic test --broker-list localhost:9092

```
## 3. open new terminal and run kafka consumer
```shell
sudo su -
cd /home/cloudera/kafka/kafka_2.10-0.9.0.1

bin/kafka-console-producer.sh --topic test --zookeeper localhost:2181 --from-begining

```
