#!/bin/sh bash


## chmod +x backup.sh
## 1 1 * * *    /home/web/take-start/svaiprof/backup.sh
## rsync -e ssh -a —delete you@example.com:/var/www/vhosts/example.com/backups/files/ /your/path/to/offsitebackups/

SITE="simple.ru"
SITE_DIR="/home/web/simple"
DB="simple"
DB_USER="root"
DB_PASS="root"
BACKUP_DIR="/var/backups/sites"
DATE=`date +%Y-%m-%d_%H-%M`


echo "LS -la ${SITE_DIR}"
ls -la ${SITE_DIR}

echo "LS -la ${BACKUP_DIR}"
ls -la ${BACKUP_DIR}

echo "MUST REMOVE"
find ${BACKUP_DIR}/${SITE}* -mtime +7;

echo "RUN mysqldump -u ${DB_USER} -p${DB_PASS} $DB | gzip > ${SITE_DIR}/db.sql.gz"
mysqldump --add-drop-table --comments --force --verbose -u ${DB_USER} -p${DB_PASS} $DB | gzip > ${SITE_DIR}/db.sql.gz

echo "RUN tar -cvf ${BACKUP_DIR}/${SITE}_${DATE}.tar -C ${SITE_DIR}/*"
tar -cvf ${BACKUP_DIR}/${SITE}_${DATE}.tar -C ${SITE_DIR}/*

echo "RUN ${BACKUP_DIR}/${SITE}_${DATE}.tar"
gzip ${BACKUP_DIR}/${SITE}_${DATE}.tar


echo "LS -la ${BACKUP_DIR}"
ls -la ${BACKUP_DIR}

echo "MUST REMOVE"
find ${BACKUP_DIR}/${SITE}* -mtime +7;

echo "RUN find ${BACKUP_DIR}/${SITE}* -mtime +7 -exec rm {} \;"
find ${BACKUP_DIR}/${SITE}* -mtime +7 -exec rm {} \;

