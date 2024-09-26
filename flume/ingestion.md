## 1. load set up script 
```shell
https://github.com/bbengfort/hadoop-fundamentals/blob/master/flume/setup.sh
```

## 2. use nano to edit file following content
```shell

#!/bin/bash
hadoop hadoop fs -mkdir -p /user/hadoop/impressions/
hadoop hadoop fs -chmod 1777 /user/hadoop/impressions/

mkdir /tmp/impressions
chmod 777 /tmp/impressions

mkdir /tmp/flume
chmod 1777 /tmp/flume

```
## 3. execute setup script

```shell
sh flume_setup.sh
```

## 4. get data generator script from
```
https://github.com/bbengfort/hadoop-fundamentals/blob/master/flume/impression_tracker.py
```
## 5. add shebang to impression_tracker.py file
```shell
#!/usr/bin/env python

```

## 6. Add execution priviledge to the file then execute it follow:

```shell
chmod +x imporession_tracker.py
./imporession_tracker.py
```

## 7. download client config file
```
https://github.com/bbengfort/hadoop-fundamentals/blob/master/flume/client.conf
```

## 8. download collector config file
```
https://github.com/bbengfort/hadoop-fundamentals/blob/master/flume/collector.conf
```

## 9. run collector 
```shell
flume-ng agent --name collector --conf . --confi-file ./collector.conf &

```

## 10. run client
```shell
flume-ng agent --name client --conf . --confi-file ./client.conf &

```

## 11. check output file

```shell
hadoop fs -l /user/cloudera/impressions 
```