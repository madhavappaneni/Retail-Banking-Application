CREATE TYPE account_frequency AS ENUM (
    'Issuance After Transaction',
    'Monthly Issuance',
    'Weekly Issuance'
);

CREATE TABLE public.account (
    account_id varchar NOT NULL,
    district_id integer NOT NULL,
    frequency account_frequency NOT NULL,
    "date" date NOT NULL
)