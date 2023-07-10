# DMQL-Project

# Retail Banking Application

This project is based on the dataset called "Retail Banking Demo Data." The dataset consists of various datasets stitched together from real-world data sources, including CRM (Customer Relationship Management) and core banking data. It is built off the 1999 Czech banking dataset, with further modifications and augmentation.

## Description

The dataset provides a simulated environment for a retail banking scenario, revolving around a fictional bank named Eagle National Bank. The data includes information about accounts, core banking transactions, customer interactions, and a luxury loan portfolio. The dataset has been fully translated and modified to suit the purpose of this project.

## Data Contents

The dataset comprises several components:

1. Completed Files - Core Banking System: This section contains data related to the core banking system, where accounts are linked by identifiers. The data has been fully translated and further modified and augmented from the original 1999 Czech banking dataset.

   - Geospatial Data: Geospatial information is provided at the zip code and area code of phone number level for records in Massachusetts (MA) and New York (NY).
   - Addresses: The addresses included in the dataset are not real, except for the MA and NY zip codes. Other zip codes are randomly generated numbers within the range of 40000-60000.

2. CRM Datasets: This section contains data related to customer relationship management, with a focus on customer interactions and complaints. The CRM events text can be parsed for sentiment analysis. Some phone calls from the call center are matched to CRM event records. Additionally, some phone calls are made from known client numbers, allowing inference of the caller's identity. Certain clients have alternative phone numbers, providing backup contact information.

3. Luxury Loan Portfolio: Eagle National Bank has recently acquired this loan portfolio. The dataset includes information about the loans, including the factors used to determine interest rates (with a hint that one factor is the size of the loan). It presents an opportunity to analyze and forecast profits or collections for the bank by combining all loan data.

## Acknowledgments

The dataset was initially prepared by an intern for a software demo at Cambridge Semantics. If you are interested in graph databases, consider checking out https://data.world/lpetrocelli/retail-banking-demo-data

**Note**: The information provided in this readme file is based on the available summary of the dataset. For more detailed information or any specific questions about the dataset, kindly refer to the original dataset source or contact the creator.