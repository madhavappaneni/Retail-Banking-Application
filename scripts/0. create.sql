CREATE TYPE account_frequency_enum AS ENUM (
    'Issuance After Transaction',
    'Monthly Issuance',
    'Weekly Issuance'
);

CREATE TABLE public.account (
    account_id varchar NOT NULL,
    district_id integer NOT NULL,
    frequency account_frequency NOT NULL,
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
    "type" varchar(50) NOT NULL,
    date date NOT NULL
);