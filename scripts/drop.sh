export PGPASSWORD="postgres"

dbhost="localhost"
dbuser="postgres"
dbname="BankingData"

psql -h $dbhost -d $dbname -U $dbuser -p 5432 -a -q -f "drop.sql"