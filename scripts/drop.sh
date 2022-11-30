export PGPASSWORD="postgres"

dbhost="localhost"
dbuser="postgres"
dbname="BankingData"

psql -h $dbhost -d $dbname -U $dbuser -p 5432 -a -q -f "drop.sql"

# PGPASSWORD=AVNS_WQ_bHmPBZq8RuomfJLK psql -U doadmin -h db-dmql-dbas-do-user-12960261-0.b.db.ondigitalocean.com -p 25060 -d defaultdb --set=sslmode=require -a -q -f "drop.sql"
