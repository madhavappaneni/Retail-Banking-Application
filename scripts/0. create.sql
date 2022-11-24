create schema public;

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
	fulldate date NOT NULL,
	age integer NOT NULL,
	social varchar NOT NULL,
	first varchar NOT NULL,
	middle varchar NULL,
	last varchar NOT NULL,
	phone integer NOT NULL,
	email varchar NOT NULL,
	address_1 varchar NOT NULL,
	address_2 varchar NULL,
	city varchar NOT NULL,
	state varchar NOT NULL,
	zipcode varchar NOT NULL,
	district_id integer NOT NULL
);

CREATE TABLE public.district (
	district_id integer NOT NULL PRIMARY KEY,
	city varchar(50) NOT NULL,
	state_name varchar(50) NOT NULL,
	state_abbrev varchar(50) NOT NULL,
	region varchar(50) NOT NULL,
	division varchar(50) NOT NULL
);

CREATE TABLE public.loan (
	loan_id varchar(50) NOT NULL,
	account_id varchar(50) NOT NULL,
	amount integer NOT NULL,
	duration integer NOT NULL,
	payments integer NOT NULL,
	status varchar(50) NOT NULL,
	date date NOT NULL,
	location integer NOT NULL,
	purpose varchar(50) NOT NULL
);

CREATE TABLE public.CRMCallCenterLogs (
	"Date received" varchar(50) NOT NULL,
	"Complaint ID" varchar(50) NOT NULL,
	"rand client" varchar(50) NULL,
	phonefinal varchar(50) NULL,
	"vru+line" varchar(50) NULL,
	call_id integer NULL,
	priority integer NULL,
	"type" varchar(50) NULL,
	outcome varchar(50) NULL,
	"server" varchar(50) NULL,
	ser_start varchar(50) NOT NULL,
	ser_exit varchar(50) NOT NULL,
	ser_time varchar(50) NOT NULL
);

CREATE TABLE public."order" (
	order_id integer NOT NULL PRIMARY KEY,
	account_id varchar(50) NOT NULL,
	bank_to varchar(50) NOT NULL,
	account_to integer NOT NULL,
	amount integer NOT NULL,
	k_symbol varchar(50) NULL
);

-- CREATE TABLE public.LuxuryLoanPortfolio (
-- 	loan_id varchar(50) NOT NULL PRIMARY KEY,
-- 	funded_amount float4 NOT NULL,
-- 	funded_date varchar(50) NOT NULL,
-- 	"duration years" integer NULL,
-- 	"duration months" integer NULL,
-- 	"10 yr treasury index date funded" float4 NULL,
-- 	"interest rate percent" float4 NULL,
-- 	"interest rate" float4 NULL,
-- 	payments float4 NULL,
-- 	"total past payments" integer NULL,
-- 	"loan balance" float4 NULL,
-- 	"property value" float4 NULL,
-- 	purpose varchar(50) NULL,
-- 	first varchar(50) NULL,
-- 	middle varchar(50) NULL,
-- 	last varchar(50) NULL,
-- 	social varchar(50) NOT NULL,
-- 	phone varchar(50) NULL,
-- 	title varchar(50) NULL,
-- 	"employment length" integer NULL,
-- 	"BUILDING CLASS CATEGORY" varchar(50) NULL,
-- 	"TAX CLASS AT PRESENT" varchar(50) NULL,
-- 	"BUILDING CLASS AT PRESENT" varchar(50) NULL,
-- 	"ADDRESS 1" varchar(50) NULL,
-- 	"ADDRESS 2" varchar(50) NULL,
-- 	"ZIP CODE" integer NULL,
-- 	city varchar(50) NULL,
-- 	state varchar(50) NULL,
-- 	"TOTAL UNITS" integer NULL,
-- 	"LAND SQUARE FEET" varchar(50) NULL,
-- 	"GROSS SQUARE FEET" varchar(50) NULL,
-- 	"TAX CLASS AT TIME OF SALE" integer NULL
-- );

CREATE TABLE public."CRMEvents" (
	"Date received" date NOT NULL,
	"Product" varchar(50) NOT NULL,
	"Sub-product" varchar(50) NULL,
	"Issue" varchar(50) NOT NULL,
	"Sub-issue" varchar(50) NOT NULL,
	"Consumer complaint narrative" varchar(20000) NULL,
	"Tags" varchar(50) NULL,
	"Consumer consent provided?" varchar(50) NULL,
	"Submitted via" varchar(50) NOT NULL,
	"Date sent to company" varchar(50) NOT NULL,
	"Company response to consumer" varchar(50) NOT NULL,
	"Timely response?" varchar(50) NOT NULL,
	"Consumer disputed?" varchar(50) NULL,
	"Complaint ID" varchar(50) NOT NULL,
	"Client_ID" varchar(50) NULL,
	"createdAt" timestamptz NOT null DEFAULT NOW(),
	"updatedAt" timestamptz NOT null DEFAULT NOW()
);

CREATE TABLE public.CRMReviews (
	"Date" date NOT NULL,
	"Stars" integer NOT NULL,
	"Reviews" varchar NULL,
	"Product" varchar(50) NOT NULL,
	district_id integer NOT NULL
);

CREATE TABLE public.transaction (
	trans_id varchar(50) NOT NULL PRIMARY KEY,
	account_id varchar(50) NOT NULL,
	"type" varchar(50) NOT NULL,
	operation varchar(50) NULL,
	amount integer NOT NULL,
	balance integer NOT NULL,
	k_symbol varchar(50) NULL,
	bank varchar(50) NULL,
	account varchar(50) NULL,
	"date" varchar(50) NULL,
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
	FOREIGN KEY ("Client_ID") REFERENCES client(client_id);

ALTER TABLE
	public.CRMCallCenterLogs
ADD
	FOREIGN KEY ("Complaint ID") REFERENCES crmevents("Complaint ID");

ALTER TABLE
	public.order
ADD
	FOREIGN KEY (account_id) references account(account_id);

-- 
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
	foreign key (client_id) references client(client_id);

ALTER TABLE
	public.disposition
ADD
	foreign key (account_id) references account(account_id);

ALTER TABLE
	public.client
ADD
	foreign key (district_id) references district(district_id);

ALTER TABLE
	public.CRMReviews
ADD
	foreign key (district_id) references district(district_id);