CREATE TYPE account_frequency_enum AS ENUM (
	'Issuance After Transaction',
	'Monthly Issuance',
	'Weekly Issuance'
);

CREATE TABLE public.account (
	account_id varchar NOT NULL primary key,
	district_id integer NOT NULL,
	frequency account_frequency_enum NOT NULL,
	"date" date NOT NULL
);

CREATE TYPE card_type_enum AS ENUM (
	'VISA Signature',
	'VISA Standard',
	'VISA Infinite'
);

CREATE TABLE public.card (
	card_id varchar(50) NOT NULL primary key,
	disp_id varchar(50) NOT NULL,
	"type" card_type_enum NOT NULL,
	date date NOT NULL
);

CREATE TYPE disposition_type_enum AS ENUM ('Owner', 'User');

CREATE TABLE public.disposition (
	disp_id varchar(10) NOT NULL primary key,
	client_id varchar(10) NOT NULL,
	account_id varchar(10) NOT NULL,
	"type" varchar(50) NOT NULL
);

CREATE TABLE public.client (
	client_id varchar NOT NULL primary key,
	sex varchar NOT NULL,
	fulldate date NULL,
	age int4 NULL,
	social varchar NOT NULL,
	"first" varchar NOT NULL,
	middle varchar NULL,
	"last" varchar NOT NULL,
	phone int4 NULL,
	email varchar NOT NULL,
	address_1 varchar NOT NULL,
	address_2 varchar NULL,
	city varchar NOT NULL,
	state varchar NOT NULL,
	zipcode varchar NOT NULL,
	district_id varchar NOT NULL
);

CREATE TABLE public.district (
	district_id int4 NOT NULL PRIMARY KEY,
	city varchar(50) NULL,
	state_name varchar(50) NULL,
	state_abbrev varchar(50) NULL,
	region varchar(50) NULL,
	division varchar(50) NULL
);

CREATE TABLE public.loan (
	loan_id varchar(50) NOT NULL PRIMARY KEY,
	account_id varchar(50) NOT NULL,
	amount int4 NULL,
	duration int4 NULL,
	payments int4 NULL,
	status varchar(50) NULL,
	fulldate varchar(50) NULL,
	"location" int4 NULL,
	purpose varchar(50) NULL
);

CREATE TABLE public.CRMCallCenterLogs (
	"Date received" varchar(50) NOT NULL,
	"Complaint ID" varchar(50) NOT NULL,
	"rand client" varchar(50) NULL,
	phonefinal varchar(50) NULL,
	"vru+line" varchar(50) NULL,
	call_id int4 NULL,
	priority int4 NULL,
	"type" varchar(50) NULL,
	outcome varchar(50) NULL,
	"server" varchar(50) NULL,
	ser_start varchar(50) NULL,
	ser_exit varchar(50) NULL,
	ser_time varchar(50) NULL
);

CREATE TABLE public."order" (
	order_id int4 NOT NULL PRIMARY KEY,
	account_id varchar(50) NOT NULL,
	bank_to varchar(50) NULL,
	account_to int4 NULL,
	amount int4 NULL,
	k_symbol varchar(50) NULL
);

CREATE TABLE public.LuxuryLoanPortfolio (
	loan_id varchar(50) NOT NULL PRIMARY KEY,
	funded_amount float4 NOT NULL,
	funded_date varchar(50) NOT NULL,
	"duration years" int4 NULL,
	"duration months" int4 NULL,
	"10 yr treasury index date funded" float4 NULL,
	"interest rate percent" float4 NULL,
	"interest rate" float4 NULL,
	payments float4 NULL,
	"total past payments" int4 NULL,
	"loan balance" float4 NULL,
	"property value" float4 NULL,
	purpose varchar(50) NULL,
	firstname varchar(50) NULL,
	middlename varchar(50) NULL,
	lastname varchar(50) NULL,
	social varchar(50) NOT NULL,
	phone varchar(50) NULL,
	title varchar(50) NULL,
	"employment length" int4 NULL,
	"BUILDING CLASS CATEGORY" varchar(50) NULL,
	"TAX CLASS AT PRESENT" varchar(50) NULL,
	"BUILDING CLASS AT PRESENT" varchar(50) NULL,
	"ADDRESS 1" varchar(50) NULL,
	"ADDRESS 2" varchar(50) NULL,
	"ZIP CODE" int4 NULL,
	city varchar(50) NULL,
	state varchar(50) NULL,
	"TOTAL UNITS" int4 NULL,
	"LAND SQUARE FEET" varchar(50) NULL,
	"GROSS SQUARE FEET" varchar(50) NULL,
	"TAX CLASS AT TIME OF SALE" int4 NULL
);

CREATE TABLE public.crmevents (
	"Date received" date NULL,
	"Product" varchar(50) NULL,
	"Sub-product" varchar(50) NULL,
	"Issue" varchar(50) NULL,
	"Sub-issue" varchar(50) NULL,
	"Consumer complaint narrative" varchar NULL,
	"Tags" varchar(50) NULL,
	"Consumer consent provided?" varchar(50) NULL,
	"Submitted via" varchar(50) NULL,
	"Date sent to company" varchar(50) NULL,
	"Company response to consumer" varchar(50) NULL,
	"Timely response?" varchar(50) NULL,
	"Consumer disputed?" varchar(50) NULL,
	"Complaint ID" varchar(50) NOT NULL PRIMARY KEY,
	"Client_ID" varchar(50) NULL,
	foreign key(client_id) references client(client_id)
);

CREATE TABLE public.CRMReviews (
	"Date" date NULL,
	"Stars" int4 NULL,
	"Reviews" varchar NULL,
	"Product" varchar(50) NULL,
	district_id int4 NOT NULL PRIMARY KEY
);

CREATE TABLE public.transaction (
	"Column1" int4 NULL,
	trans_id varchar(50) NOT NULL PRIMARY KEY,
	account_id varchar(50) NULL,
	"type" varchar(50) NULL,
	operation varchar(50) NULL,
	amount int4 NULL,
	balance int4 NULL,
	k_symbol varchar(50) NULL,
	bank varchar(50) NULL,
	account varchar(50) NULL,
	"year" int4 NULL,
	"month" int4 NULL,
	"day" int4 NULL,
	"date" varchar(50) NULL,
	fulltime varchar(50) NULL,
	fulldatewithtime varchar(50) NULL
);

ALTER TABLE
	public.transaction
ADD
	FOREIGN KEY (account_id) REFERENCES account(account_id);

ALTER TABLE
	public.loan
ADD
	FOREIGN KEY (account_id) references account(account_id);

ALTER TABLE
	public.transaction
ADD
	FOREIGN KEY (account_id) REFERENCES account(account_id);

ALTER TABLE
	public.crmevents
ADD
	FOREIGN KEY (client_id) REFERENCES client(client_id);

ALTER TABLE
	public.CRMCallCenterLogs
ADD
	FOREIGN KEY (complaint_id) REFERENCES CRMEvents(complaint_id);

ALTER TABLE
	public.order
ADD
	FOREIGN KEY (account_id) references account(account_id);

ALTER TABLE
	public.account
ADD
	foreign key(district_id) references district(district_id);

ALTER TABLE
	public.card
ADD
	foreign key(disp_id) references disposition(disp_id);

ALTER TABLE
	public.disposition
ADD
	foreign key(client_id) references client(client_id),
	foreign key(account_id) references account(account_id);

ALTER TABLE
	public.client
ADD
	foreign key (district_id) references district(district_id);