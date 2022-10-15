--DISTRICT
INSERT INTO test.district (district_id,city,state_name,state_abbrev,region,division) VALUES
	 (1,'New York City','New York','NY','Northeast','Middle Atlantic'),
	 (2,'Jacksonville','Florida','FL','South','South Atlantic'),
	 (3,'Columbus','Ohio','OH','Midwest','East North Central'),
	 (4,'Charlotte','North Carolina','NC','South','South Atlantic'),
	 (5,'Indianapolis','Indiana','IN','Northeast','East North Central'),
	 (6,'Seattle','Washington','WA','West','Pacific'),
	 (7,'Denver','Colorado','CO','West','Mountain'),
	 (8,'Washington','District of Columbia','DC','South','South Atlantic'),
	 (9,'Boston','Massachusetts','MA','Northeast','New England'),
	 (10,'Detroit','Michigan','MI','Midwest','East North Central');
INSERT INTO test.district (district_id,city,state_name,state_abbrev,region,division) VALUES
	 (11,'Nashville','Tennessee','TN','South','East South Central'),
	 (12,'Portland','Oregon','OR','West','Pacific'),
	 (13,'Oklahoma City','Oklahoma','OK','South','West South Central'),
	 (14,'Las Vegas','Nevada','NV','West','Mountain'),
	 (15,'Louisville','Kentucky','KY','South','East South Central'),
	 (16,'Baltimore','Maryland','MD','South','South Atlantic'),
	 (17,'Milwaukee','Wisconsin','WI','Midwest','East North Central'),
	 (18,'Albuquerque','New Mexico','NM','West','Mountain'),
	 (19,'Atlanta','Georgia','GA','South','South Atlantic'),
	 (20,'Kansas City','Missouri','MO','Midwest','West North Central');
INSERT INTO test.district (district_id,city,state_name,state_abbrev,region,division) VALUES
	 (21,'Omaha','Nebraska','NE','Midwest','West North Central'),
	 (22,'Virginia Beach','Virginia','VA','South','South Atlantic'),
	 (23,'Minneapolis','Minnesota','MN','Midwest','West North Central'),
	 (24,'New Orleans','Louisiana','LA','South','West South Central'),
	 (25,'Wichita','Kansas','KS','Midwest','West North Central'),
	 (26,'Honolulu','Hawaii','HI','West','Pacific'),
	 (27,'San Antonio','Texas','TX','South','West South Central'),
	 (28,'Anchorage','Alaska','AK','West','Pacific'),
	 (29,'Newark','New Jersey','NJ','Northeast','Middle Atlantic'),
	 (30,'Boise','Idaho','ID','West','Mountain');
INSERT INTO test.district (district_id,city,state_name,state_abbrev,region,division) VALUES
	 (31,'Des Moines','Iowa','IA','Midwest','West North Central'),
	 (32,'Birmingham','Alabama','AL','South','East South Central'),
	 (33,'Salt Lake City','Utah','UT','West','Mountain'),
	 (34,'Little Rock','Arkansas','AR','South','West South Central'),
	 (35,'Sioux Falls','South Dakota','SD','Midwest','West North Central'),
	 (36,'Providence','Rhode Island','RI','Northeast','New England'),
	 (37,'Jackson','Mississippi','MS','South','East South Central'),
	 (38,'Bridgeport','Connecticut','CT','Northeast','New England'),
	 (39,'Charleston','South Carolina','SC','South','South Atlantic'),
	 (40,'Fargo','North Dakota','ND','Midwest','West North Central');
INSERT INTO test.district (district_id,city,state_name,state_abbrev,region,division) VALUES
	 (41,'Manchester','New Hampshire','NH','Northeast','New England'),
	 (42,'Billings','Montana','MT','West','Mountain'),
	 (43,'Wilmington','Delaware','DE','South','South Atlantic'),
	 (44,'Portland','Maine','ME','Northeast','New England'),
	 (45,'Cheyenne','Wyoming','WY','West','Mountain'),
	 (46,'San Diego','California','CA','West','Pacific'),
	 (47,'Charleston','West Virginia','WV','South','South Atlantic'),
	 (48,'Worcester','Massachusetts','MA','Northeast','New England'),
	 (49,'Burlington','Vermont','VT','Northeast','New England'),
	 (50,'Buffalo','New York','NY','Northeast','Middle Atlantic');
INSERT INTO test.district (district_id,city,state_name,state_abbrev,region,division) VALUES
	 (51,'Springfield','Massachusetts','MA','Northeast','New England'),
	 (52,'New Haven','Connecticut','CT','Northeast','New England'),
	 (53,'Hartford','Connecticut','CT','Northeast','New England'),
	 (54,'Houston','Texas','TX','South','West South Central'),
	 (55,'Lowell','Massachusetts','MA','Northeast','New England'),
	 (56,'Cambridge','Massachusetts','MA','Northeast','New England'),
	 (57,'New Bedford','Massachusetts','MA','Northeast','New England'),
	 (58,'Brockton','Massachusetts','MA','Northeast','New England'),
	 (59,'Quincy','Massachusetts','MA','Northeast','New England'),
	 (60,'Lynn','Massachusetts','MA','Northeast','New England');
INSERT INTO test.district (district_id,city,state_name,state_abbrev,region,division) VALUES
	 (61,'Fall River','Massachusetts','MA','Northeast','New England'),
	 (62,'Nashua','New Hampshire','NH','Northeast','New England'),
	 (63,'Norwalk','Connecticut','CT','Northeast','New England'),
	 (64,'Phoenix','Arizona','AZ','West','Mountain'),
	 (65,'Newton','Massachusetts','MA','Northeast','New England'),
	 (66,'Warwick','Rhode Island','RI','Northeast','New England'),
	 (67,'Danbury','Connecticut','CT','Northeast','New England'),
	 (68,'Cranston','Rhode Island','RI','Northeast','New England'),
	 (69,'Lawrence','Massachusetts','MA','Northeast','New England'),
	 (70,'Los Angeles','California','CA','West','Pacific');
INSERT INTO test.district (district_id,city,state_name,state_abbrev,region,division) VALUES
	 (71,'Somerville','Massachusetts','MA','Northeast','New England'),
	 (72,'Philadelphia','Pennsylvania','PA','Northeast','Middle Atlantic'),
	 (73,'New Britain','Connecticut','CT','Northeast','New England'),
	 (74,'Chicago','Illinois','IL','Northeast','East North Central'),
	 (75,'Rochester','New York','NY','Northeast','Middle Atlantic'),
	 (76,'Yonkers','New York','NY','Northeast','Middle Atlantic'),
	 (77,'Syracuse','New York','NY','Northeast','Middle Atlantic');
--ACCOUNT
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000009', 70, 'Monthly Issuance', '2013-01-27');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000002', 1, 'Monthly Issuance', '2013-02-26');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000044', 32, 'Monthly Issuance', '2013-05-10');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000023', 30, 'Monthly Issuance', '2013-05-22');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000018', 43, 'Weekly Issuance', '2013-05-26');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000036', 1, 'Monthly Issuance', '2013-07-01');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000035', 75, 'Monthly Issuance', '2013-07-07');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000026', 52, 'Monthly Issuance', '2013-08-08');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000033', 22, 'Monthly Issuance', '2013-08-26');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000034', 67, 'Weekly Issuance', '2013-09-17');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000039', 36, 'Monthly Issuance', '2013-09-22');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000027', 73, 'Monthly Issuance', '2013-09-26');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000015', 70, 'Monthly Issuance', '2013-10-02');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000040', 64, 'Monthly Issuance', '2013-10-25');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000022', 1, 'Monthly Issuance', '2014-03-23');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000031', 68, 'Monthly Issuance', '2014-04-27');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000043', 36, 'Monthly Issuance', '2014-06-12');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000006', 51, 'Monthly Issuance', '2014-09-27');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000029', 7, 'Monthly Issuance', '2014-11-24');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000030', 36, 'Monthly Issuance', '2015-03-04');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000001', 18, 'Monthly Issuance', '2015-03-24');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000019', 21, 'Monthly Issuance', '2015-04-07');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000032', 5, 'Monthly Issuance', '2015-08-28');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000008', 57, 'Monthly Issuance', '2015-09-21');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000011', 76, 'Monthly Issuance', '2015-10-10');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000004', 12, 'Monthly Issuance', '2016-02-21');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000025', 68, 'Monthly Issuance', '2016-07-28');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000042', 39, 'Monthly Issuance', '2016-08-16');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000020', 74, 'Monthly Issuance', '2016-08-24');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000010', 54, 'Monthly Issuance', '2016-08-28');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000007', 60, 'Monthly Issuance', '2016-11-24');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000014', 47, 'Monthly Issuance', '2016-11-27');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000024', 74, 'Monthly Issuance', '2016-12-05');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000017', 1, 'Monthly Issuance', '2017-01-08');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000012', 21, 'Monthly Issuance', '2017-04-15');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000005', 15, 'Monthly Issuance', '2017-05-30');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000003', 5, 'Monthly Issuance', '2017-07-07');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000041', 72, 'Monthly Issuance', '2017-08-02');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000038', 19, 'Weekly Issuance', '2017-08-08');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000013', 76, 'Monthly Issuance', '2017-08-17');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000037', 20, 'Monthly Issuance', '2017-08-18');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000016', 12, 'Monthly Issuance', '2017-09-23');
INSERT INTO test.account (account_id, district_id, frequency, date) VALUES ('A00000021', 54, 'Monthly Issuance', '2017-12-06');

--CLIENT
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000001', 'Female', '1990-12-13', 29, '926-93-2157', 'Emma', 'Avaya', 'Smith', 367, 'emma.smith@gmail.com', '387 Wellington Ave.', 'Unit 1', 'Albuquerque', 'NM', '47246', '18');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000002', 'Male', '1965-02-04', 54, '806-94-5725', 'Noah', 'Everest', 'Thompson', 212, 'noah.thompson@gmail.com', '75 W. Berkshire St.', '', 'New York City', 'NY', '10040', '1');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000003', 'Female', '1960-10-09', 59, '614-70-9100', 'Olivia', 'Brooklynne', 'Johnson', 212, 'olivia.johnson@outlook.com', '36 Second St.', '', 'New York City', 'NY', '10162', '1');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000004', 'Male', '1976-12-01', 43, '580-20-3414', 'Liam', 'Irvin', 'White', 951, 'liam.white@gmail.com', '7607 Sunnyslope Street', '', 'Indianapolis', 'IN', '49047', '5');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000005', 'Female', '1980-07-03', 39, '536-14-5809', 'Sophia', 'Danae', 'Williams', 428, 'sophia.williams@gmail.com', '755 Galvin Street', '', 'Indianapolis', 'IN', '40852', '5');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000006', 'Male', '1939-09-22', 80, '430-17-5825', 'Mason', 'Javen', 'Lopez', 813, 'mason.lopez7@gmail.com', '8266 Arnold Drive', 'Unit 6', 'Portland', 'OR', '44987', '12');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000007', 'Male', '1949-01-25', 71, '305-80-4254', 'Jacob', 'Khai', 'Lee', 836, 'jacob.lee7@gmail.com', '827 N. Green Lake Court', '', 'Louisville', 'KY', '44359', '15');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000008', 'Female', '1958-02-21', 61, '425-96-6358', 'Ava', 'Eliora', 'Brown', 413, 'ava.brown8@gmail.com', '817 Joy Ridge Dr.', '', 'Springfield', 'MA', '01101', '51');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000009', 'Male', '1955-10-16', 64, '832-31-7252', 'William', 'Marek', 'Gonzalez', 781, 'william.marek.gonzalez@gmail.com', '68 Carriage Road', '', 'Lynn', 'MA', '01901', '60');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000010', 'Male', '1963-05-01', 56, '295-22-6122', 'Ethan', 'Veer', 'Harris', 508, 'ethan.harris9@gmail.com', '754 Grandrose St.', '', 'New Bedford', 'MA', '02740', '57');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000011', 'Female', '1970-08-22', 49, '666-36-2990', 'Isabella', 'Haidyn', 'Jones', 508, 'isabella.jones@hotmail.com', '873 Randall Mill Dr.', '', 'New Bedford', 'MA', '02741', '57');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000012', 'Male', '2001-02-20', 18, '771-44-3992', 'James', 'Amauri', 'Clark', 431, 'james.clark9@gmail.com', '275 Fairground Drive', '', 'Fargo', 'ND', '42009', '40');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000013', 'Female', '1994-05-29', 25, '618-33-8801', 'Mia', 'Hawa', 'Miller', 840, 'mia.miller@gmail.com', '7429 Linden Drive', '', 'Houston', 'TX', '47052', '54');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000014', 'Female', '1962-06-22', 57, '806-78-2944', 'Abigail', 'Inaaya', 'Davis', 914, 'abigail.davis5@gmail.com', '708 Oak Valley St.', '', 'Yonkers', 'NY', '10701', '76');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000015', 'Female', '1938-08-28', 81, '711-78-2371', 'Emily', 'Joann', 'Garcia', 556, 'emily.garcia43@outlook.com', '30 Brown St.', '', 'Omaha', 'NE', '49180', '21');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000016', 'Male', '1939-02-25', 80, '923-11-6562', 'Alexander', 'Bronx', 'Lewis', 760, 'alexander.lewis3@gmail.com', '734 Bay Meadows Street', 'Unit 80', 'Omaha', 'NE', '41275', '21');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000017', 'Male', '1954-10-13', 65, '800-28-6783', 'Michael', 'Clifton', 'Robinson', 914, 'michael.robinson2@gmail.com', '907 Green Lake Court', '', 'Yonkers', 'NY', '10702', '76');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000018', 'Female', '1951-04-05', 68, '392-61-8907', 'Charlotte', 'Joi', 'Rodriguez', 914, 'charlotte.rodriguez2@gmail.com', '7463 Griffin St.', '', 'Yonkers', 'NY', '10703', '76');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000019', 'Male', '1962-12-28', 57, '832-01-3704', 'Benjamin', 'Denis', 'Walker', 927, 'benjamin.walker@gmail.com', '8095 Devon Court', '', 'Charleston', 'WV', '48126', '47');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000020', 'Male', '1999-01-04', 21, '419-19-0547', 'Elijah', 'Grayden', 'Perez', 886, 'elijah.perez@gmail.com', '597 Foster Street', '', 'San Diego', 'CA', '48787', '46');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000021', 'Female', '1972-10-29', 47, '139-70-2852', 'Harper', 'Juno', 'Wilson', 894, 'harper.wilson@outlook.com', '6 Devon Court', '', 'Portland', 'OR', '45780', '12');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000022', 'Female', '1989-10-11', 30, '157-87-6583', 'Madison', 'Kimberlyn', 'Martinez', 212, 'madison.martinez@gmail.com', '7062 Temple Court', 'Unit 1B', 'New York City', 'NY', '10282', '1');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000023', 'Male', '1993-05-29', 26, '158-18-4299', 'Daniel', 'Isa', 'Hall', 212, 'daniel.hall67@gmail.com', '30 West Westport Dr.', '', 'New York City', 'NY', '10009', '1');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000024', 'Female', '1959-07-29', 60, '637-42-2042', 'Amelia', 'Leora', 'Anderson', 302, 'amelia.anderson8@gmail.com', '44 Walt Whitman St.', '', 'Wilmington', 'DE', '45260', '43');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000025', 'Female', '1959-04-23', 60, '349-52-4604', 'Elizabeth', 'Lupita', 'Taylor', 184, 'elizabeth.taylor@gmail.com', '92 Fairway Drive', '', 'Omaha', 'NE', '42325', '21');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000026', 'Female', '1989-04-20', 30, '956-04-7186', 'Sofia', 'Makaila', 'Thomas', 660, 'sofia.thomas@gmail.com', '17 East Glenridge Road', 'Apt. 3D', 'Chicago', 'IL', '46300', '74');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000027', 'Female', '1986-03-26', 33, '691-10-5744', 'Evelyn', 'Mari', 'Hernandez', 407, 'evelyn.mari.hernandez8@gmail.com', '88 Second Dr.', '', 'Houston', 'TX', '47795', '54');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000028', 'Male', '1965-09-29', 54, '517-85-8773', 'Aiden', 'Jamil', 'Young', 212, 'aiden.young9@gmail.com', '125 North Holly Dr.', '', 'New York City', 'NY', '10158', '1');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000029', 'Female', '1971-09-11', 48, '518-96-1042', 'Avery', 'Mildred', 'Moore', 996, 'avery.moore@hotmail.com', '327 Golf St.', '', 'Boise', 'ID', '48851', '30');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000030', 'Female', '1977-10-09', 42, '610-21-2152', 'Chloe', 'Odette', 'Martin', 255, 'chloe.martin8765@gmail.com', '8 Pacific Lane', '', 'Chicago', 'IL', '42552', '74');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000031', 'Male', '1982-02-09', 37, '318-55-4386', 'Logan', 'Judd', 'Allen', 452, 'logan.allen4@gmail.com', '9953 Coffee Court', '', 'Cranston', 'RI', '46720', '68');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000032', 'Male', '2000-07-28', 19, '755-20-3365', 'Matthew', 'Keyon', 'Sanchez', 214, 'matthew.sanchez3@gmail.com', '8163 Sutor Court', '', 'New Haven', 'CT', '45291', '52');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000033', 'Female', '1968-12-04', 51, '956-56-8470', 'Ella', 'Triniti', 'Jackson', 769, 'ella.jackson4@outlook.com', '940 Vale Lane', '', 'New Britain', 'CT', '46386', '73');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000036', 'Female', '1998-07-17', 21, '611-81-5222', 'Grace', 'Emma', 'Thompson', 530, 'grace.thompson56@gmail.com', '9675 Tanglewood Drive', '', 'Denver', 'CO', '41755', '7');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000037', 'Male', '1990-08-10', 29, '288-95-5033', 'Lucas', 'Korben', 'Wright', 854, 'lucas.wright5@gmail.com', '50 Elmwood Street', '', 'Denver', 'CO', '48628', '7');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000038', 'Female', '1993-07-23', 26, '881-47-7103', 'Victoria', 'Olivia', 'White', 976, 'victoria.white43@gmail.com', '329 Jockey Hollow Court', '', 'Providence', 'RI', '48105', '36');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000039', 'Male', '1988-01-25', 32, '426-18-0606', 'Jackson', 'Rishaan', 'King', 918, 'jackson.king@gmail.com', '21 Middle River Drive', '', 'Cranston', 'RI', '43461', '68');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000040', 'Female', '1977-01-22', 43, '461-50-3823', 'Aubrey', 'Sophia', 'Lopez', 776, 'aubrey.lopez@gmail.com', '943 N. Birch Hill Avenue', '', 'Indianapolis', 'IN', '42125', '5');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000041', 'Male', '1988-08-27', 31, '779-39-2212', 'David', 'Yousif', 'Scott', 232, 'david.scott@outlook.com', '8572 Mill Pond Rd.', '', 'Virginia Beach', 'VA', '45895', '22');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000042', 'Male', '1955-08-17', 64, '472-48-0888', 'Oliver', 'Bailey', 'Green', 334, 'oliver.green@gmail.com', '50 Smith Store Ave.', '', 'Cranston', 'RI', '45795', '68');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000043', 'Male', '1940-10-28', 79, '445-32-4546', 'Jayden', 'Cedar', 'Baker', 585, 'jayden.baker4@gmail.com', '38 Prairie Street', 'Unit 81', 'Rochester', 'NY', '14602', '75');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000044', 'Female', '1997-01-11', 23, '396-63-1548', 'Scarlett', 'Ann', 'Lee', 184, 'scarlett.lee@gmail.com', '9461 Rockledge Street', '', 'Bridgeport', 'CT', '44504', '38');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000045', 'Male', '1972-08-26', 47, '665-55-8941', 'Joseph', 'Ely', 'Adams', 786, 'joseph.adams@gmail.com', '421 Vermont Drive', '', 'Kansas City', 'MO', '42666', '20');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000046', 'Female', '1960-01-30', 60, '883-63-2770', 'Zoey', 'Emma', 'Gonzalez', 129, 'zoey.gonzalez@gmail.com', '9437 Greystone Drive', '', 'Atlanta', 'GA', '42729', '19');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000047', 'Male', '1954-07-14', 65, '247-03-1392', 'Gabriel', 'Jahlil', 'Nelson', 914, 'gabriel.jahlil.nelson@gmail.com', '8953 Jones Street', '', 'Yonkers', 'NY', '10704', '76');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000048', 'Male', '1960-02-09', 59, '392-60-6346', 'Samuel', 'Koby', 'Hill', 627, 'samuel.hill@gmail.com', '14 Hanover Ave.', 'Unit 1B', 'Baltimore', 'MD', '41466', '16');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000049', 'Female', '1979-05-11', 40, '918-27-5875', 'Addison', 'Olivia', 'Harris', 492, 'addison.harris@hotmail.com', '7715 Prince Dr.', '', 'Philadelphia', 'PA', '43443', '72');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000050', 'Female', '1998-07-30', 21, '874-41-6125', 'Lily', 'Sophia', 'Clark', 874, 'lily.clark@gmail.com', '44 Fordham Ave.', '', 'Charleston', 'SC', '48339', '39');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000051', 'Female', '1999-12-02', 20, '605-79-6843', 'Lillian', 'Ava', 'Lewis', 193, 'lillian.lewis@gmail.com', '948 Annadale St.', '', 'Providence', 'RI', '48078', '36');
INSERT INTO test.client (client_id, sex, fulldate, age, social, first, middle, last, phone, email, address_1, address_2, city, state, zipcode, district_id) VALUES ('C00000052', 'Male', '1944-12-12', 75, '599-20-6019', 'Carter', 'Markel', 'Ramirez', 594, 'carter.ramirez@gmail.com', '89 Henry Smith St.', '', 'Birmingham', 'AL', '45430', '32');

--LOAN
INSERT INTO test.loan (loan_id, account_id, amount, duration, payments, status, date, location, purpose) VALUES ('L00004961', 'A00000019', 30276, 12, 2523, 'B', '2016-04-29', 1, 'debt_consolidation');
INSERT INTO test.loan (loan_id, account_id, amount, duration, payments, status, date, location, purpose) VALUES ('L00004962', 'A00000025', 30276, 12, 2523, 'A', '2017-12-08', 1, 'debt_consolidation');
INSERT INTO test.loan (loan_id, account_id, amount, duration, payments, status, date, location, purpose) VALUES ('L00004959', 'A00000002', 80952, 24, 3373, 'A', '2014-01-05', 1, 'home');
INSERT INTO test.loan (loan_id, account_id, amount, duration, payments, status, date, location, purpose) VALUES ('L00004968', 'A00000038', 110736, 48, 2307, 'C', '2018-04-19', 1, 'home');
INSERT INTO test.loan (loan_id, account_id, amount, duration, payments, status, date, location, purpose) VALUES ('L00004967', 'A00000037', 318480, 60, 5308, 'D', '2018-10-14', 1, 'home');
INSERT INTO test.loan (loan_id, account_id, amount, duration, payments, status, date, location, purpose) VALUES ('L00004961', 'A00000019', 30276, 12, 2523, 'B', '2016-04-29', 1, 'debt_consolidation');
INSERT INTO test.loan (loan_id, account_id, amount, duration, payments, status, date, location, purpose) VALUES ('L00004962', 'A00000025', 30276, 12, 2523, 'A', '2017-12-08', 1, 'debt_consolidation');
INSERT INTO test.loan (loan_id, account_id, amount, duration, payments, status, date, location, purpose) VALUES ('L00004959', 'A00000002', 80952, 24, 3373, 'A', '2014-01-05', 1, 'home');
INSERT INTO test.loan (loan_id, account_id, amount, duration, payments, status, date, location, purpose) VALUES ('L00004968', 'A00000038', 110736, 48, 2307, 'C', '2018-04-19', 1, 'home');
INSERT INTO test.loan (loan_id, account_id, amount, duration, payments, status, date, location, purpose) VALUES ('L00004967', 'A00000037', 318480, 60, 5308, 'D', '2018-10-14', 1, 'home');
