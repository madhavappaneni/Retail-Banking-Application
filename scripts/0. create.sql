CREATE TYPE account_frequency_enum AS ENUM (
    'Issuance After Transaction',
    'Monthly Issuance',
    'Weekly Issuance'
);

CREATE TABLE public.account (
    account_id varchar NOT NULL,
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
    card_id varchar(50) NOT NULL,
    disp_id varchar(50) NOT NULL,
    "type" card_type_enum NOT NULL,
    date date NOT NULL
);

CREATE TYPE disposition_type_enum AS ENUM ('Owner', 'User');

CREATE TABLE public.disposition (
    disp_id varchar(10) NOT NULL,
    client_id varchar(10) NOT NULL,
    account_id varchar(10) NOT NULL,
    "type" varchar(50) NOT NULL
);

CREATE TABLE public.client (
	client_id varchar NOT NULL,
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
	district_id int4 NOT NULL,
	city varchar(50) NULL,
	state_name varchar(50) NULL,
	state_abbrev varchar(50) NULL,
	region varchar(50) NULL,
	division varchar(50) NULL
);

CREATE TABLE public.loan (
	loan_id varchar(50) NOT NULL,
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

