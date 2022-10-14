export PGPASSWORD="postgres"

dbhost="localhost"
dbuser="postgres"
dbname="BankingData"

for filename in *.sql; do
    if [ "$filename" != "drop.sql" ]; 
    then
    psql -h $dbhost -d $dbname -U $dbuser -p 5432 -a -q -f "${filename}"
    fi
done
