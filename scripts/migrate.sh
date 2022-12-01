export PGPASSWORD="postgres"

dbhost="localhost"
dbuser="postgres"
dbname="BankingData"

for filename in *.sql; do
    if [ "$filename" != "drop.sql" ]; 
    then
    psql -h $dbhost -d $dbname -U $dbuser -p 5432 -a -q -f "${filename}"
    # PGPASSWORD=AVNS_WQ_bHmPBZq8RuomfJLK psql -U doadmin -h db-dmql-dbas-do-user-12960261-0.b.db.ondigitalocean.com -p 25060 -d defaultdb --set=sslmode=require -a -q -f "${filename}"
    fi
done




# PGPASSWORD=postgres psql -h localhost -d BankingData -U postgres -p 5432 -a -q -f "0. create.sql"
# PGPASSWORD=postgres psql -h localhost -d BankingData -U postgres -p 5432 -a -q -f "01. 01. state.sql"
# PGPASSWORD=postgres psql -h localhost -d BankingData -U postgres -p 5432 -a -q -f "01. 02. district.sql"
# PGPASSWORD=postgres psql -h localhost -d BankingData -U postgres -p 5432 -a -q -f "02. account.sql"
# PGPASSWORD=postgres psql -h localhost -d BankingData -U postgres -p 5432 -a -q -f "03. client.sql"
# PGPASSWORD=postgres psql -h localhost -d BankingData -U postgres -p 5432 -a -q -f "04. loan.sql"
# PGPASSWORD=postgres psql -h localhost -d BankingData -U postgres -p 5432 -a -q -f "05. 01. clientaccount.sql"
# PGPASSWORD=postgres psql -h localhost -d BankingData -U postgres -p 5432 -a -q -f "05. 02. disposition.sql"
# PGPASSWORD=postgres psql -h localhost -d BankingData -U postgres -p 5432 -a -q -f "06. card.sql"
# PGPASSWORD=postgres psql -h localhost -d BankingData -U postgres -p 5432 -a -q -f "07. order.sql"
# PGPASSWORD=postgres psql -h localhost -d BankingData -U postgres -p 5432 -a -q -f "08. CRMEvents.sql"
# PGPASSWORD=postgres psql -h localhost -d BankingData -U postgres -p 5432 -a -q -f "09. CRMCallCenterLogs.sql"
# PGPASSWORD=postgres psql -h localhost -d BankingData -U postgres -p 5432 -a -q -f "10. CRMReviews.sql"
# PGPASSWORD=postgres psql -h localhost -d BankingData -U postgres -p 5432 -a -q -f "12. transaction.sql"
# PGPASSWORD=postgres psql -h localhost -d BankingData -U postgres -p 5432 -a -q -f "13. transaction.sql"