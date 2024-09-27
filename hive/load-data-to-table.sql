USE log_data;
LOAD DATA INPATH '/home/cloudera/access.log' OVERWRITE INTO TABLE apache_log;
