
import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '~/header/navbar';
import { Footer } from '~/footer/footer';
import $ from "jquery";
import "jqvmap/dist/jqvmap.min.css";

// Define types based on the Excel data
type JobFunction =
    | 'Executive / C-Level'
    | 'Finance & Accounting'
    | 'IT & Technology'
    | 'Operations & Supply Chain'
    | 'Sales & Business Development'
    | 'Marketing'
    | 'Human Resources'
    | 'Legal & Compliance'
    | 'Customer Service & Support'
    | 'Engineering & Product'
    | '';

type Region =
    | 'Africa'
    | 'APAC (Asia Pacific)'
    | 'Asia'
    | 'Canada'
    | 'DACH (Germany, Austria, Switzerland)'
    | 'Europe'
    | 'FR(France)'
    | 'North America'
    | 'Oceania'
    | 'South America'
    | 'United Kingdom'
    | 'United States'
    | '';

type Industry =
    | 'Technology & IT'
    | 'Financial Services'
    | 'Healthcare & Life Sciences'
    | 'Professional Services'
    | 'Manufacturing & Industrial'
    | 'Retail & Consumer Goods'
    | 'Energy & Utilities'
    | 'Education & Training'
    | 'Real Estate & Construction'
    | 'Travel & Hospitality'
    | '';

// Continent to country code mapping
const continentCountries: Record<string, string[]> = {
    northAmerica: ['us', 'ca', 'mx', 'gl', 'bm', 'gt', 'sv', 'hn', 'ni', 'cr', 'pa', 'bs', 'cu', 'jm', 'ht', 'do', 'pr'],
    southAmerica: ['br', 'ar', 'cl', 'co', 'pe', 've', 'ec', 'bo', 'py', 'uy', 'sr', 'gf', 'gy', 'fk'],
    europe: ['gb', 'fr', 'de', 'it', 'es', 'pl', 'ro', 'nl', 'be', 'se', 'cz', 'gr', 'pt', 'hu', 'at', 'ch', 'ie', 'dk', 'fi', 'no', 'sk', 'bg', 'rs', 'hr', 'lt', 'si', 'lv', 'ee', 'is', 'al', 'ba', 'mk', 'me', 'cy', 'lu', 'mt', 'ad', 'li', 'mc', 'sm', 'va'],
    asia: ['cn', 'in', 'ru', 'jp', 'id', 'pk', 'tr', 'th', 'kr', 'vn', 'ph', 'my', 'kz', 'sa', 'ir', 'uz', 'mm', 'iq', 'af', 'ye', 'sy', 'kh', 'tj', 'np', 'lk', 'bd', 'la', 'jo', 'az', 'ae', 'il', 'tw', 'hk', 'kg', 'tm', 'sg', 'ge', 'mn', 'om', 'kw', 'qa', 'bh', 'am', 'ps', 'bt', 'mv', 'bn', 'tl'],
    africa: ['ng', 'eg', 'za', 'dz', 'sd', 'ly', 'ma', 'ke', 'et', 'gh', 'cm', 'ci', 'mg', 'mz', 'ang', 'ne', 'bf', 'ml', 'zw', 'tn', 'ss', 'sn', 'td', 'so', 'er', 'cf', 'rw', 'bj', 'gn', 'ug', 'zm', 'sl', 'mw', 'tg', 'lr', 'mr', 'na', 'bw', 'gm', 'ga', 'ls', 'gw', 'gq', 'mu', 'eq', 'dj', 're', 'km', 'cv', 'sc', 'eh', 'st', 'sh', 'ao', 'bi', 'cg', 'cd', 'sz', 'tz'],
    oceania: ['au', 'nz', 'pg', 'fj', 'sb', 'vu', 'nc', 'pf', 'ws', 'ki', 'fm', 'to', 'mh', 'pw', 'nr', 'tv']
};

// Region to continent mapping
const regionToContinent: Record<string, string> = {
    'Africa': 'africa',
    'APAC (Asia Pacific)': 'asia',
    'Asia': 'asia',
    'Canada': 'canada',

    'DACH (Germany, Austria, Switzerland)': 'europe',
    'Europe': 'europe',
    'FR (France)': 'europe',
    'North America': 'northAmerica',
    'Oceania': 'oceania',
    'South America': 'southAmerica',
    'United Kingdom': 'uk',
    'United States': 'unitedStates'
};

// Color palette for different continents
const continentColors: Record<string, string> = {
    northAmerica: "#49f6ffff",
    southAmerica: "#49f6ffff",
    canada: "#49f6ffff",
    unitedStates: "#49f6ffff",
    europe: "#49f6ffff",
    asia: "#49f6ffff",
    africa: "#49f6ffff",
    oceania: "#49f6ffff",
    uk: "#49f6ffff",

};

// Data from the Excel file (simplified representation)
const volumeData = [
    { jobFunction: 'Executive / C - Level', region: 'Africa', industry: 'Technology & IT', volume: 70000 },
    { jobFunction: 'Executive / C - Level', region: 'Africa', industry: 'Financial Services', volume: 41000 },
    { jobFunction: 'Executive / C - Level', region: 'Africa', industry: 'Healthcare & Life Sciences', volume: 32000 },
    { jobFunction: 'Executive / C - Level', region: 'Africa', industry: 'Professional Services', volume: 26000 },
    { jobFunction: 'Executive / C - Level', region: 'Africa', industry: 'Manufacturing & Industrial', volume: 32000 },
    { jobFunction: 'Executive / C - Level', region: 'Africa', industry: 'Retail & Consumer Goods', volume: 22000 },
    { jobFunction: 'Executive / C - Level', region: 'Africa', industry: 'Energy & Utilities', volume: 16000 },
    { jobFunction: 'Executive / C - Level', region: 'Africa', industry: 'Education & Training', volume: 13000 },
    { jobFunction: 'Executive / C - Level', region: 'Africa', industry: 'Real Estate & Construction', volume: 13000 },
    { jobFunction: 'Executive / C - Level', region: 'Africa', industry: 'Travel & Hospitality', volume: 10000 },
    { jobFunction: 'Finance & Accounting', region: 'Africa', industry: 'Technology & IT', volume: 67000 },
    { jobFunction: 'Finance & Accounting', region: 'Africa', industry: 'Financial Services', volume: 39000 },
    { jobFunction: 'Finance & Accounting', region: 'Africa', industry: 'Healthcare & Life Sciences', volume: 31000 },
    { jobFunction: 'Finance & Accounting', region: 'Africa', industry: 'Professional Services', volume: 24000 },
    { jobFunction: 'Finance & Accounting', region: 'Africa', industry: 'Manufacturing & Industrial', volume: 31000 },
    { jobFunction: 'Finance & Accounting', region: 'Africa', industry: 'Retail & Consumer Goods', volume: 21000 },
    { jobFunction: 'Finance & Accounting', region: 'Africa', industry: 'Energy & Utilities', volume: 15000 },
    { jobFunction: 'Finance & Accounting', region: 'Africa', industry: 'Education & Training', volume: 12000 },
    { jobFunction: 'Finance & Accounting', region: 'Africa', industry: 'Real Estate & Construction', volume: 12000 },
    { jobFunction: 'Finance & Accounting', region: 'Africa', industry: 'Travel & Hospitality', volume: 9000 },
    { jobFunction: 'IT & Technology', region: 'Africa', industry: 'Technology & IT', volume: 157000 },
    { jobFunction: 'IT & Technology', region: 'Africa', industry: 'Financial Services', volume: 92000 },
    { jobFunction: 'IT & Technology', region: 'Africa', industry: 'Healthcare & Life Sciences', volume: 71000 },
    { jobFunction: 'IT & Technology', region: 'Africa', industry: 'Professional Services', volume: 57000 },
    { jobFunction: 'IT & Technology', region: 'Africa', industry: 'Manufacturing & Industrial', volume: 71000 },
    { jobFunction: 'IT & Technology', region: 'Africa', industry: 'Retail & Consumer Goods', volume: 50000 },
    { jobFunction: 'IT & Technology', region: 'Africa', industry: 'Energy & Utilities', volume: 36000 },
    { jobFunction: 'IT & Technology', region: 'Africa', industry: 'Education & Training', volume: 29000 },
    { jobFunction: 'IT & Technology', region: 'Africa', industry: 'Real Estate & Construction', volume: 29000 },
    { jobFunction: 'IT & Technology', region: 'Africa', industry: 'Travel & Hospitality', volume: 21000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Africa', industry: 'Technology & IT', volume: 60000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Africa', industry: 'Financial Services', volume: 35000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Africa', industry: 'Healthcare & Life Sciences', volume: 27000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Africa', industry: 'Professional Services', volume: 22000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Africa', industry: 'Manufacturing & Industrial', volume: 27000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Africa', industry: 'Retail & Consumer Goods', volume: 19000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Africa', industry: 'Energy & Utilities', volume: 14000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Africa', industry: 'Education & Training', volume: 11000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Africa', industry: 'Real Estate & Construction', volume: 11000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Africa', industry: 'Travel & Hospitality', volume: 8000 },
    { jobFunction: 'Sales & Business Development', region: 'Africa', industry: 'Technology & IT', volume: 73000 },
    { jobFunction: 'Sales & Business Development', region: 'Africa', industry: 'Financial Services', volume: 43000 },
    { jobFunction: 'Sales & Business Development', region: 'Africa', industry: 'Healthcare & Life Sciences', volume: 33000 },
    { jobFunction: 'Sales & Business Development', region: 'Africa', industry: 'Professional Services', volume: 27000 },
    { jobFunction: 'Sales & Business Development', region: 'Africa', industry: 'Manufacturing & Industrial', volume: 33000 },
    { jobFunction: 'Sales & Business Development', region: 'Africa', industry: 'Retail & Consumer Goods', volume: 23000 },
    { jobFunction: 'Sales & Business Development', region: 'Africa', industry: 'Energy & Utilities', volume: 17000 },
    { jobFunction: 'Sales & Business Development', region: 'Africa', industry: 'Education & Training', volume: 13000 },
    { jobFunction: 'Sales & Business Development', region: 'Africa', industry: 'Real Estate & Construction', volume: 13000 },
    { jobFunction: 'Sales & Business Development', region: 'Africa', industry: 'Travel & Hospitality', volume: 10000 },
    { jobFunction: 'Marketing', region: 'Africa', industry: 'Technology & IT', volume: 63000 },
    { jobFunction: 'Marketing', region: 'Africa', industry: 'Financial Services', volume: 37000 },
    { jobFunction: 'Marketing', region: 'Africa', industry: 'Healthcare & Life Sciences', volume: 28000 },
    { jobFunction: 'Marketing', region: 'Africa', industry: 'Professional Services', volume: 23000 },
    { jobFunction: 'Marketing', region: 'Africa', industry: 'Manufacturing & Industrial', volume: 28000 },
    { jobFunction: 'Marketing', region: 'Africa', industry: 'Retail & Consumer Goods', volume: 20000 },
    { jobFunction: 'Marketing', region: 'Africa', industry: 'Energy & Utilities', volume: 14000 },
    { jobFunction: 'Marketing', region: 'Africa', industry: 'Education & Training', volume: 11000 },
    { jobFunction: 'Marketing', region: 'Africa', industry: 'Real Estate & Construction', volume: 11000 },
    { jobFunction: 'Marketing', region: 'Africa', industry: 'Travel & Hospitality', volume: 9000 },
    { jobFunction: 'Human Resources', region: 'Africa', industry: 'Technology & IT', volume: 52000 },
    { jobFunction: 'Human Resources', region: 'Africa', industry: 'Financial Services', volume: 31000 },
    { jobFunction: 'Human Resources', region: 'Africa', industry: 'Healthcare & Life Sciences', volume: 24000 },
    { jobFunction: 'Human Resources', region: 'Africa', industry: 'Professional Services', volume: 19000 },
    { jobFunction: 'Human Resources', region: 'Africa', industry: 'Manufacturing & Industrial', volume: 24000 },
    { jobFunction: 'Human Resources', region: 'Africa', industry: 'Retail & Consumer Goods', volume: 17000 },
    { jobFunction: 'Human Resources', region: 'Africa', industry: 'Energy & Utilities', volume: 12000 },
    { jobFunction: 'Human Resources', region: 'Africa', industry: 'Education & Training', volume: 10000 },
    { jobFunction: 'Human Resources', region: 'Africa', industry: 'Real Estate & Construction', volume: 10000 },
    { jobFunction: 'Human Resources', region: 'Africa', industry: 'Travel & Hospitality', volume: 7000 },
    { jobFunction: 'Legal & Compliance', region: 'Africa', industry: 'Technology & IT', volume: 30000 },
    { jobFunction: 'Legal & Compliance', region: 'Africa', industry: 'Financial Services', volume: 18000 },
    { jobFunction: 'Legal & Compliance', region: 'Africa', industry: 'Healthcare & Life Sciences', volume: 14000 },
    { jobFunction: 'Legal & Compliance', region: 'Africa', industry: 'Professional Services', volume: 11000 },
    { jobFunction: 'Legal & Compliance', region: 'Africa', industry: 'Manufacturing & Industrial', volume: 14000 },
    { jobFunction: 'Legal & Compliance', region: 'Africa', industry: 'Retail & Consumer Goods', volume: 10000 },
    { jobFunction: 'Legal & Compliance', region: 'Africa', industry: 'Energy & Utilities', volume: 7000 },
    { jobFunction: 'Legal & Compliance', region: 'Africa', industry: 'Education & Training', volume: 5000 },
    { jobFunction: 'Legal & Compliance', region: 'Africa', industry: 'Real Estate & Construction', volume: 5000 },
    { jobFunction: 'Legal & Compliance', region: 'Africa', industry: 'Travel & Hospitality', volume: 4000 },
    { jobFunction: 'Customer Service & Support', region: 'Africa', industry: 'Technology & IT', volume: 45000 },
    { jobFunction: 'Customer Service & Support', region: 'Africa', industry: 'Financial Services', volume: 26000 },
    { jobFunction: 'Customer Service & Support', region: 'Africa', industry: 'Healthcare & Life Sciences', volume: 20000 },
    { jobFunction: 'Customer Service & Support', region: 'Africa', industry: 'Professional Services', volume: 16000 },
    { jobFunction: 'Customer Service & Support', region: 'Africa', industry: 'Manufacturing & Industrial', volume: 20000 },
    { jobFunction: 'Customer Service & Support', region: 'Africa', industry: 'Retail & Consumer Goods', volume: 14000 },
    { jobFunction: 'Customer Service & Support', region: 'Africa', industry: 'Energy & Utilities', volume: 10000 },
    { jobFunction: 'Customer Service & Support', region: 'Africa', industry: 'Education & Training', volume: 8000 },
    { jobFunction: 'Customer Service & Support', region: 'Africa', industry: 'Real Estate & Construction', volume: 8000 },
    { jobFunction: 'Customer Service & Support', region: 'Africa', industry: 'Travel & Hospitality', volume: 6000 },
    { jobFunction: 'Engineering & Product', region: 'Africa', industry: 'Technology & IT', volume: 82000 },
    { jobFunction: 'Engineering & Product', region: 'Africa', industry: 'Financial Services', volume: 48000 },
    { jobFunction: 'Engineering & Product', region: 'Africa', industry: 'Healthcare & Life Sciences', volume: 37000 },
    { jobFunction: 'Engineering & Product', region: 'Africa', industry: 'Professional Services', volume: 30000 },
    { jobFunction: 'Engineering & Product', region: 'Africa', industry: 'Manufacturing & Industrial', volume: 37000 },
    { jobFunction: 'Engineering & Product', region: 'Africa', industry: 'Retail & Consumer Goods', volume: 26000 },
    { jobFunction: 'Engineering & Product', region: 'Africa', industry: 'Energy & Utilities', volume: 19000 },
    { jobFunction: 'Engineering & Product', region: 'Africa', industry: 'Education & Training', volume: 15000 },
    { jobFunction: 'Engineering & Product', region: 'Africa', industry: 'Real Estate & Construction', volume: 15000 },
    { jobFunction: 'Engineering & Product', region: 'Africa', industry: 'Travel & Hospitality', volume: 11000 },
    { jobFunction: 'Executive / C - Level', region: 'APAC(Asia Pacific)', industry: 'Technology & IT', volume: 315000 },
    { jobFunction: 'Executive / C - Level', region: 'APAC(Asia Pacific)', industry: 'Financial Services', volume: 185000 },
    { jobFunction: 'Executive / C - Level', region: 'APAC(Asia Pacific)', industry: 'Healthcare & Life Sciences', volume: 143000 },
    { jobFunction: 'Executive / C - Level', region: 'APAC(Asia Pacific)', industry: 'Professional Services', volume: 115000 },
    { jobFunction: 'Executive / C - Level', region: 'APAC(Asia Pacific)', industry: 'Manufacturing & Industrial', volume: 143000 },
    { jobFunction: 'Executive / C - Level', region: 'APAC(Asia Pacific)', industry: 'Retail & Consumer Goods', volume: 100000 },
    { jobFunction: 'Executive / C - Level', region: 'APAC(Asia Pacific)', industry: 'Energy & Utilities', volume: 72000 },
    { jobFunction: 'Executive / C - Level', region: 'APAC(Asia Pacific)', industry: 'Education & Training', volume: 57000 },
    { jobFunction: 'Executive / C - Level', region: 'APAC(Asia Pacific)', industry: 'Real Estate & Construction', volume: 57000 },
    { jobFunction: 'Executive / C - Level', region: 'APAC(Asia Pacific)', industry: 'Travel & Hospitality', volume: 43000 },
    { jobFunction: 'Finance & Accounting', region: 'APAC(Asia Pacific)', industry: 'Technology & IT', volume: 302000 },
    { jobFunction: 'Finance & Accounting', region: 'APAC(Asia Pacific)', industry: 'Financial Services', volume: 177000 },
    { jobFunction: 'Finance & Accounting', region: 'APAC(Asia Pacific)', industry: 'Healthcare & Life Sciences', volume: 137000 },
    { jobFunction: 'Finance & Accounting', region: 'APAC(Asia Pacific)', industry: 'Professional Services', volume: 110000 },
    { jobFunction: 'Finance & Accounting', region: 'APAC(Asia Pacific)', industry: 'Manufacturing & Industrial', volume: 137000 },
    { jobFunction: 'Finance & Accounting', region: 'APAC(Asia Pacific)', industry: 'Retail & Consumer Goods', volume: 96000 },
    { jobFunction: 'Finance & Accounting', region: 'APAC(Asia Pacific)', industry: 'Energy & Utilities', volume: 69000 },
    { jobFunction: 'Finance & Accounting', region: 'APAC(Asia Pacific)', industry: 'Education & Training', volume: 55000 },
    { jobFunction: 'Finance & Accounting', region: 'APAC(Asia Pacific)', industry: 'Real Estate & Construction', volume: 55000 },
    { jobFunction: 'Finance & Accounting', region: 'APAC(Asia Pacific)', industry: 'Travel & Hospitality', volume: 41000 },
    { jobFunction: 'IT & Technology', region: 'APAC(Asia Pacific)', industry: 'Technology & IT', volume: 706000 },
    { jobFunction: 'IT & Technology', region: 'APAC(Asia Pacific)', industry: 'Financial Services', volume: 414000 },
    { jobFunction: 'IT & Technology', region: 'APAC(Asia Pacific)', industry: 'Healthcare & Life Sciences', volume: 321000 },
    { jobFunction: 'IT & Technology', region: 'APAC(Asia Pacific)', industry: 'Professional Services', volume: 257000 },
    { jobFunction: 'IT & Technology', region: 'APAC(Asia Pacific)', industry: 'Manufacturing & Industrial', volume: 321000 },
    { jobFunction: 'IT & Technology', region: 'APAC(Asia Pacific)', industry: 'Retail & Consumer Goods', volume: 225000 },
    { jobFunction: 'IT & Technology', region: 'APAC(Asia Pacific)', industry: 'Energy & Utilities', volume: 161000 },
    { jobFunction: 'IT & Technology', region: 'APAC(Asia Pacific)', industry: 'Education & Training', volume: 129000 },
    { jobFunction: 'IT & Technology', region: 'APAC(Asia Pacific)', industry: 'Real Estate & Construction', volume: 129000 },
    { jobFunction: 'IT & Technology', region: 'APAC(Asia Pacific)', industry: 'Travel & Hospitality', volume: 96000 },
    { jobFunction: 'Operations & Supply Chain', region: 'APAC(Asia Pacific)', industry: 'Technology & IT', volume: 269000 },
    { jobFunction: 'Operations & Supply Chain', region: 'APAC(Asia Pacific)', industry: 'Financial Services', volume: 157000 },
    { jobFunction: 'Operations & Supply Chain', region: 'APAC(Asia Pacific)', industry: 'Healthcare & Life Sciences', volume: 122000 },
    { jobFunction: 'Operations & Supply Chain', region: 'APAC(Asia Pacific)', industry: 'Professional Services', volume: 98000 },
    { jobFunction: 'Operations & Supply Chain', region: 'APAC(Asia Pacific)', industry: 'Manufacturing & Industrial', volume: 122000 },
    { jobFunction: 'Operations & Supply Chain', region: 'APAC(Asia Pacific)', industry: 'Retail & Consumer Goods', volume: 86000 },
    { jobFunction: 'Operations & Supply Chain', region: 'APAC(Asia Pacific)', industry: 'Energy & Utilities', volume: 61000 },
    { jobFunction: 'Operations & Supply Chain', region: 'APAC(Asia Pacific)', industry: 'Education & Training', volume: 49000 },
    { jobFunction: 'Operations & Supply Chain', region: 'APAC(Asia Pacific)', industry: 'Real Estate & Construction', volume: 49000 },
    { jobFunction: 'Operations & Supply Chain', region: 'APAC(Asia Pacific)', industry: 'Travel & Hospitality', volume: 37000 },
    { jobFunction: 'Sales & Business Development', region: 'APAC(Asia Pacific)', industry: 'Technology & IT', volume: 329000 },
    { jobFunction: 'Sales & Business Development', region: 'APAC(Asia Pacific)', industry: 'Financial Services', volume: 192000 },
    { jobFunction: 'Sales & Business Development', region: 'APAC(Asia Pacific)', industry: 'Healthcare & Life Sciences', volume: 149000 },
    { jobFunction: 'Sales & Business Development', region: 'APAC(Asia Pacific)', industry: 'Professional Services', volume: 120000 },
    { jobFunction: 'Sales & Business Development', region: 'APAC(Asia Pacific)', industry: 'Manufacturing & Industrial', volume: 149000 },
    { jobFunction: 'Sales & Business Development', region: 'APAC(Asia Pacific)', industry: 'Retail & Consumer Goods', volume: 105000 },
    { jobFunction: 'Sales & Business Development', region: 'APAC(Asia Pacific)', industry: 'Energy & Utilities', volume: 75000 },
    { jobFunction: 'Sales & Business Development', region: 'APAC(Asia Pacific)', industry: 'Education & Training', volume: 60000 },
    { jobFunction: 'Sales & Business Development', region: 'APAC(Asia Pacific)', industry: 'Real Estate & Construction', volume: 60000 },
    { jobFunction: 'Sales & Business Development', region: 'APAC(Asia Pacific)', industry: 'Travel & Hospitality', volume: 45000 },
    { jobFunction: 'Marketing', region: 'APAC(Asia Pacific)', industry: 'Technology & IT', volume: 282000 },
    { jobFunction: 'Marketing', region: 'APAC(Asia Pacific)', industry: 'Financial Services', volume: 165000 },
    { jobFunction: 'Marketing', region: 'APAC(Asia Pacific)', industry: 'Healthcare & Life Sciences', volume: 128000 },
    { jobFunction: 'Marketing', region: 'APAC(Asia Pacific)', industry: 'Professional Services', volume: 103000 },
    { jobFunction: 'Marketing', region: 'APAC(Asia Pacific)', industry: 'Manufacturing & Industrial', volume: 128000 },
    { jobFunction: 'Marketing', region: 'APAC(Asia Pacific)', industry: 'Retail & Consumer Goods', volume: 90000 },
    { jobFunction: 'Marketing', region: 'APAC(Asia Pacific)', industry: 'Energy & Utilities', volume: 64000 },
    { jobFunction: 'Marketing', region: 'APAC(Asia Pacific)', industry: 'Education & Training', volume: 51000 },
    { jobFunction: 'Marketing', region: 'APAC(Asia Pacific)', industry: 'Real Estate & Construction', volume: 51000 },
    { jobFunction: 'Marketing', region: 'APAC(Asia Pacific)', industry: 'Travel & Hospitality', volume: 38000 },
    { jobFunction: 'Human Resources', region: 'APAC(Asia Pacific)', industry: 'Technology & IT', volume: 236000 },
    { jobFunction: 'Human Resources', region: 'APAC(Asia Pacific)', industry: 'Financial Services', volume: 138000 },
    { jobFunction: 'Human Resources', region: 'APAC(Asia Pacific)', industry: 'Healthcare & Life Sciences', volume: 107000 },
    { jobFunction: 'Human Resources', region: 'APAC(Asia Pacific)', industry: 'Professional Services', volume: 86000 },
    { jobFunction: 'Human Resources', region: 'APAC(Asia Pacific)', industry: 'Manufacturing & Industrial', volume: 107000 },
    { jobFunction: 'Human Resources', region: 'APAC(Asia Pacific)', industry: 'Retail & Consumer Goods', volume: 75000 },
    { jobFunction: 'Human Resources', region: 'APAC(Asia Pacific)', industry: 'Energy & Utilities', volume: 54000 },
    { jobFunction: 'Human Resources', region: 'APAC(Asia Pacific)', industry: 'Education & Training', volume: 43000 },
    { jobFunction: 'Human Resources', region: 'APAC(Asia Pacific)', industry: 'Real Estate & Construction', volume: 43000 },
    { jobFunction: 'Human Resources', region: 'APAC(Asia Pacific)', industry: 'Travel & Hospitality', volume: 32000 },
    { jobFunction: 'Legal & Compliance', region: 'APAC(Asia Pacific)', industry: 'Technology & IT', volume: 135000 },
    { jobFunction: 'Legal & Compliance', region: 'APAC(Asia Pacific)', industry: 'Financial Services', volume: 79000 },
    { jobFunction: 'Legal & Compliance', region: 'APAC(Asia Pacific)', industry: 'Healthcare & Life Sciences', volume: 61000 },
    { jobFunction: 'Legal & Compliance', region: 'APAC(Asia Pacific)', industry: 'Professional Services', volume: 49000 },
    { jobFunction: 'Legal & Compliance', region: 'APAC(Asia Pacific)', industry: 'Manufacturing & Industrial', volume: 61000 },
    { jobFunction: 'Legal & Compliance', region: 'APAC(Asia Pacific)', industry: 'Retail & Consumer Goods', volume: 43000 },
    { jobFunction: 'Legal & Compliance', region: 'APAC(Asia Pacific)', industry: 'Energy & Utilities', volume: 31000 },
    { jobFunction: 'Legal & Compliance', region: 'APAC(Asia Pacific)', industry: 'Education & Training', volume: 25000 },
    { jobFunction: 'Legal & Compliance', region: 'APAC(Asia Pacific)', industry: 'Real Estate & Construction', volume: 25000 },
    { jobFunction: 'Legal & Compliance', region: 'APAC(Asia Pacific)', industry: 'Travel & Hospitality', volume: 18000 },
    { jobFunction: 'Customer Service & Support', region: 'APAC(Asia Pacific)', industry: 'Technology & IT', volume: 202000 },
    { jobFunction: 'Customer Service & Support', region: 'APAC(Asia Pacific)', industry: 'Financial Services', volume: 118000 },
    { jobFunction: 'Customer Service & Support', region: 'APAC(Asia Pacific)', industry: 'Healthcare & Life Sciences', volume: 92000 },
    { jobFunction: 'Customer Service & Support', region: 'APAC(Asia Pacific)', industry: 'Professional Services', volume: 74000 },
    { jobFunction: 'Customer Service & Support', region: 'APAC(Asia Pacific)', industry: 'Manufacturing & Industrial', volume: 92000 },
    { jobFunction: 'Customer Service & Support', region: 'APAC(Asia Pacific)', industry: 'Retail & Consumer Goods', volume: 64000 },
    { jobFunction: 'Customer Service & Support', region: 'APAC(Asia Pacific)', industry: 'Energy & Utilities', volume: 46000 },
    { jobFunction: 'Customer Service & Support', region: 'APAC(Asia Pacific)', industry: 'Education & Training', volume: 37000 },
    { jobFunction: 'Customer Service & Support', region: 'APAC(Asia Pacific)', industry: 'Real Estate & Construction', volume: 37000 },
    { jobFunction: 'Customer Service & Support', region: 'APAC(Asia Pacific)', industry: 'Travel & Hospitality', volume: 28000 },
    { jobFunction: 'Engineering & Product', region: 'APAC(Asia Pacific)', industry: 'Technology & IT', volume: 370000 },
    { jobFunction: 'Engineering & Product', region: 'APAC(Asia Pacific)', industry: 'Financial Services', volume: 216000 },
    { jobFunction: 'Engineering & Product', region: 'APAC(Asia Pacific)', industry: 'Healthcare & Life Sciences', volume: 168000 },
    { jobFunction: 'Engineering & Product', region: 'APAC(Asia Pacific)', industry: 'Professional Services', volume: 135000 },
    { jobFunction: 'Engineering & Product', region: 'APAC(Asia Pacific)', industry: 'Manufacturing & Industrial', volume: 168000 },
    { jobFunction: 'Engineering & Product', region: 'APAC(Asia Pacific)', industry: 'Retail & Consumer Goods', volume: 118000 },
    { jobFunction: 'Engineering & Product', region: 'APAC(Asia Pacific)', industry: 'Energy & Utilities', volume: 84000 },
    { jobFunction: 'Engineering & Product', region: 'APAC(Asia Pacific)', industry: 'Education & Training', volume: 67000 },
    { jobFunction: 'Engineering & Product', region: 'APAC(Asia Pacific)', industry: 'Real Estate & Construction', volume: 67000 },
    { jobFunction: 'Engineering & Product', region: 'APAC(Asia Pacific)', industry: 'Travel & Hospitality', volume: 50000 },
    { jobFunction: 'Executive / C - Level', region: 'Asia', industry: 'Technology & IT', volume: 256000 },
    { jobFunction: 'Executive / C - Level', region: 'Asia', industry: 'Financial Services', volume: 150000 },
    { jobFunction: 'Executive / C - Level', region: 'Asia', industry: 'Healthcare & Life Sciences', volume: 116000 },
    { jobFunction: 'Executive / C - Level', region: 'Asia', industry: 'Professional Services', volume: 93000 },
    { jobFunction: 'Executive / C - Level', region: 'Asia', industry: 'Manufacturing & Industrial', volume: 116000 },
    { jobFunction: 'Executive / C - Level', region: 'Asia', industry: 'Retail & Consumer Goods', volume: 81000 },
    { jobFunction: 'Executive / C - Level', region: 'Asia', industry: 'Energy & Utilities', volume: 58000 },
    { jobFunction: 'Executive / C - Level', region: 'Asia', industry: 'Education & Training', volume: 47000 },
    { jobFunction: 'Executive / C - Level', region: 'Asia', industry: 'Real Estate & Construction', volume: 47000 },
    { jobFunction: 'Executive / C - Level', region: 'Asia', industry: 'Travel & Hospitality', volume: 35000 },
    { jobFunction: 'Finance & Accounting', region: 'Asia', industry: 'Technology & IT', volume: 245000 },
    { jobFunction: 'Finance & Accounting', region: 'Asia', industry: 'Financial Services', volume: 143000 },
    { jobFunction: 'Finance & Accounting', region: 'Asia', industry: 'Healthcare & Life Sciences', volume: 111000 },
    { jobFunction: 'Finance & Accounting', region: 'Asia', industry: 'Professional Services', volume: 89000 },
    { jobFunction: 'Finance & Accounting', region: 'Asia', industry: 'Manufacturing & Industrial', volume: 111000 },
    { jobFunction: 'Finance & Accounting', region: 'Asia', industry: 'Retail & Consumer Goods', volume: 78000 },
    { jobFunction: 'Finance & Accounting', region: 'Asia', industry: 'Energy & Utilities', volume: 56000 },
    { jobFunction: 'Finance & Accounting', region: 'Asia', industry: 'Education & Training', volume: 45000 },
    { jobFunction: 'Finance & Accounting', region: 'Asia', industry: 'Real Estate & Construction', volume: 45000 },
    { jobFunction: 'Finance & Accounting', region: 'Asia', industry: 'Travel & Hospitality', volume: 33000 },
    { jobFunction: 'IT & Technology', region: 'Asia', industry: 'Technology & IT', volume: 572000 },
    { jobFunction: 'IT & Technology', region: 'Asia', industry: 'Financial Services', volume: 335000 },
    { jobFunction: 'IT & Technology', region: 'Asia', industry: 'Healthcare & Life Sciences', volume: 260000 },
    { jobFunction: 'IT & Technology', region: 'Asia', industry: 'Professional Services', volume: 208000 },
    { jobFunction: 'IT & Technology', region: 'Asia', industry: 'Manufacturing & Industrial', volume: 260000 },
    { jobFunction: 'IT & Technology', region: 'Asia', industry: 'Retail & Consumer Goods', volume: 182000 },
    { jobFunction: 'IT & Technology', region: 'Asia', industry: 'Energy & Utilities', volume: 130000 },
    { jobFunction: 'IT & Technology', region: 'Asia', industry: 'Education & Training', volume: 104000 },
    { jobFunction: 'IT & Technology', region: 'Asia', industry: 'Real Estate & Construction', volume: 104000 },
    { jobFunction: 'IT & Technology', region: 'Asia', industry: 'Travel & Hospitality', volume: 78000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Asia', industry: 'Technology & IT', volume: 218000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Asia', industry: 'Financial Services', volume: 128000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Asia', industry: 'Healthcare & Life Sciences', volume: 99000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Asia', industry: 'Professional Services', volume: 79000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Asia', industry: 'Manufacturing & Industrial', volume: 99000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Asia', industry: 'Retail & Consumer Goods', volume: 69000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Asia', industry: 'Energy & Utilities', volume: 50000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Asia', industry: 'Education & Training', volume: 40000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Asia', industry: 'Real Estate & Construction', volume: 40000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Asia', industry: 'Travel & Hospitality', volume: 30000 },
    { jobFunction: 'Sales & Business Development', region: 'Asia', industry: 'Technology & IT', volume: 266000 },
    { jobFunction: 'Sales & Business Development', region: 'Asia', industry: 'Financial Services', volume: 156000 },
    { jobFunction: 'Sales & Business Development', region: 'Asia', industry: 'Healthcare & Life Sciences', volume: 121000 },
    { jobFunction: 'Sales & Business Development', region: 'Asia', industry: 'Professional Services', volume: 97000 },
    { jobFunction: 'Sales & Business Development', region: 'Asia', industry: 'Manufacturing & Industrial', volume: 121000 },
    { jobFunction: 'Sales & Business Development', region: 'Asia', industry: 'Retail & Consumer Goods', volume: 85000 },
    { jobFunction: 'Sales & Business Development', region: 'Asia', industry: 'Energy & Utilities', volume: 61000 },
    { jobFunction: 'Sales & Business Development', region: 'Asia', industry: 'Education & Training', volume: 48000 },
    { jobFunction: 'Sales & Business Development', region: 'Asia', industry: 'Real Estate & Construction', volume: 48000 },
    { jobFunction: 'Sales & Business Development', region: 'Asia', industry: 'Travel & Hospitality', volume: 36000 },
    { jobFunction: 'Marketing', region: 'Asia', industry: 'Technology & IT', volume: 228000 },
    { jobFunction: 'Marketing', region: 'Asia', industry: 'Financial Services', volume: 134000 },
    { jobFunction: 'Marketing', region: 'Asia', industry: 'Healthcare & Life Sciences', volume: 104000 },
    { jobFunction: 'Marketing', region: 'Asia', industry: 'Professional Services', volume: 83000 },
    { jobFunction: 'Marketing', region: 'Asia', industry: 'Manufacturing & Industrial', volume: 104000 },
    { jobFunction: 'Marketing', region: 'Asia', industry: 'Retail & Consumer Goods', volume: 73000 },
    { jobFunction: 'Marketing', region: 'Asia', industry: 'Energy & Utilities', volume: 52000 },
    { jobFunction: 'Marketing', region: 'Asia', industry: 'Education & Training', volume: 42000 },
    { jobFunction: 'Marketing', region: 'Asia', industry: 'Real Estate & Construction', volume: 42000 },
    { jobFunction: 'Marketing', region: 'Asia', industry: 'Travel & Hospitality', volume: 31000 },
    { jobFunction: 'Human Resources', region: 'Asia', industry: 'Technology & IT', volume: 191000 },
    { jobFunction: 'Human Resources', region: 'Asia', industry: 'Financial Services', volume: 112000 },
    { jobFunction: 'Human Resources', region: 'Asia', industry: 'Healthcare & Life Sciences', volume: 87000 },
    { jobFunction: 'Human Resources', region: 'Asia', industry: 'Professional Services', volume: 69000 },
    { jobFunction: 'Human Resources', region: 'Asia', industry: 'Manufacturing & Industrial', volume: 87000 },
    { jobFunction: 'Human Resources', region: 'Asia', industry: 'Retail & Consumer Goods', volume: 61000 },
    { jobFunction: 'Human Resources', region: 'Asia', industry: 'Energy & Utilities', volume: 43000 },
    { jobFunction: 'Human Resources', region: 'Asia', industry: 'Education & Training', volume: 35000 },
    { jobFunction: 'Human Resources', region: 'Asia', industry: 'Real Estate & Construction', volume: 35000 },
    { jobFunction: 'Human Resources', region: 'Asia', industry: 'Travel & Hospitality', volume: 26000 },
    { jobFunction: 'Legal & Compliance', region: 'Asia', industry: 'Technology & IT', volume: 109000 },
    { jobFunction: 'Legal & Compliance', region: 'Asia', industry: 'Financial Services', volume: 64000 },
    { jobFunction: 'Legal & Compliance', region: 'Asia', industry: 'Healthcare & Life Sciences', volume: 50000 },
    { jobFunction: 'Legal & Compliance', region: 'Asia', industry: 'Professional Services', volume: 40000 },
    { jobFunction: 'Legal & Compliance', region: 'Asia', industry: 'Manufacturing & Industrial', volume: 50000 },
    { jobFunction: 'Legal & Compliance', region: 'Asia', industry: 'Retail & Consumer Goods', volume: 35000 },
    { jobFunction: 'Legal & Compliance', region: 'Asia', industry: 'Energy & Utilities', volume: 25000 },
    { jobFunction: 'Legal & Compliance', region: 'Asia', industry: 'Education & Training', volume: 20000 },
    { jobFunction: 'Legal & Compliance', region: 'Asia', industry: 'Real Estate & Construction', volume: 20000 },
    { jobFunction: 'Legal & Compliance', region: 'Asia', industry: 'Travel & Hospitality', volume: 15000 },
    { jobFunction: 'Customer Service & Support', region: 'Asia', industry: 'Technology & IT', volume: 164000 },
    { jobFunction: 'Customer Service & Support', region: 'Asia', industry: 'Financial Services', volume: 96000 },
    { jobFunction: 'Customer Service & Support', region: 'Asia', industry: 'Healthcare & Life Sciences', volume: 74000 },
    { jobFunction: 'Customer Service & Support', region: 'Asia', industry: 'Professional Services', volume: 60000 },
    { jobFunction: 'Customer Service & Support', region: 'Asia', industry: 'Manufacturing & Industrial', volume: 74000 },
    { jobFunction: 'Customer Service & Support', region: 'Asia', industry: 'Retail & Consumer Goods', volume: 52000 },
    { jobFunction: 'Customer Service & Support', region: 'Asia', industry: 'Energy & Utilities', volume: 37000 },
    { jobFunction: 'Customer Service & Support', region: 'Asia', industry: 'Education & Training', volume: 30000 },
    { jobFunction: 'Customer Service & Support', region: 'Asia', industry: 'Real Estate & Construction', volume: 30000 },
    { jobFunction: 'Customer Service & Support', region: 'Asia', industry: 'Travel & Hospitality', volume: 22000 },
    { jobFunction: 'Engineering & Product', region: 'Asia', industry: 'Technology & IT', volume: 300000 },
    { jobFunction: 'Engineering & Product', region: 'Asia', industry: 'Financial Services', volume: 175000 },
    { jobFunction: 'Engineering & Product', region: 'Asia', industry: 'Healthcare & Life Sciences', volume: 136000 },
    { jobFunction: 'Engineering & Product', region: 'Asia', industry: 'Professional Services', volume: 109000 },
    { jobFunction: 'Engineering & Product', region: 'Asia', industry: 'Manufacturing & Industrial', volume: 136000 },
    { jobFunction: 'Engineering & Product', region: 'Asia', industry: 'Retail & Consumer Goods', volume: 95000 },
    { jobFunction: 'Engineering & Product', region: 'Asia', industry: 'Energy & Utilities', volume: 68000 },
    { jobFunction: 'Engineering & Product', region: 'Asia', industry: 'Education & Training', volume: 55000 },
    { jobFunction: 'Engineering & Product', region: 'Asia', industry: 'Real Estate & Construction', volume: 55000 },
    { jobFunction: 'Engineering & Product', region: 'Asia', industry: 'Travel & Hospitality', volume: 41000 },
    { jobFunction: 'Executive / C - Level', region: 'Canada', industry: 'Technology & IT', volume: 98000 },
    { jobFunction: 'Executive / C - Level', region: 'Canada', industry: 'Financial Services', volume: 58000 },
    { jobFunction: 'Executive / C - Level', region: 'Canada', industry: 'Healthcare & Life Sciences', volume: 45000 },
    { jobFunction: 'Executive / C - Level', region: 'Canada', industry: 'Professional Services', volume: 36000 },
    { jobFunction: 'Executive / C - Level', region: 'Canada', industry: 'Manufacturing & Industrial', volume: 45000 },
    { jobFunction: 'Executive / C - Level', region: 'Canada', industry: 'Retail & Consumer Goods', volume: 31000 },
    { jobFunction: 'Executive / C - Level', region: 'Canada', industry: 'Energy & Utilities', volume: 22000 },
    { jobFunction: 'Executive / C - Level', region: 'Canada', industry: 'Education & Training', volume: 18000 },
    { jobFunction: 'Executive / C - Level', region: 'Canada', industry: 'Real Estate & Construction', volume: 18000 },
    { jobFunction: 'Executive / C - Level', region: 'Canada', industry: 'Travel & Hospitality', volume: 13000 },
    { jobFunction: 'Finance & Accounting', region: 'Canada', industry: 'Technology & IT', volume: 94000 },
    { jobFunction: 'Finance & Accounting', region: 'Canada', industry: 'Financial Services', volume: 55000 },
    { jobFunction: 'Finance & Accounting', region: 'Canada', industry: 'Healthcare & Life Sciences', volume: 43000 },
    { jobFunction: 'Finance & Accounting', region: 'Canada', industry: 'Professional Services', volume: 34000 },
    { jobFunction: 'Finance & Accounting', region: 'Canada', industry: 'Manufacturing & Industrial', volume: 43000 },
    { jobFunction: 'Finance & Accounting', region: 'Canada', industry: 'Retail & Consumer Goods', volume: 30000 },
    { jobFunction: 'Finance & Accounting', region: 'Canada', industry: 'Energy & Utilities', volume: 21000 },
    { jobFunction: 'Finance & Accounting', region: 'Canada', industry: 'Education & Training', volume: 17000 },
    { jobFunction: 'Finance & Accounting', region: 'Canada', industry: 'Real Estate & Construction', volume: 17000 },
    { jobFunction: 'Finance & Accounting', region: 'Canada', industry: 'Travel & Hospitality', volume: 13000 },
    { jobFunction: 'IT & Technology', region: 'Canada', industry: 'Technology & IT', volume: 220000 },
    { jobFunction: 'IT & Technology', region: 'Canada', industry: 'Financial Services', volume: 129000 },
    { jobFunction: 'IT & Technology', region: 'Canada', industry: 'Healthcare & Life Sciences', volume: 100000 },
    { jobFunction: 'IT & Technology', region: 'Canada', industry: 'Professional Services', volume: 80000 },
    { jobFunction: 'IT & Technology', region: 'Canada', industry: 'Manufacturing & Industrial', volume: 100000 },
    { jobFunction: 'IT & Technology', region: 'Canada', industry: 'Retail & Consumer Goods', volume: 70000 },
    { jobFunction: 'IT & Technology', region: 'Canada', industry: 'Energy & Utilities', volume: 50000 },
    { jobFunction: 'IT & Technology', region: 'Canada', industry: 'Education & Training', volume: 40000 },
    { jobFunction: 'IT & Technology', region: 'Canada', industry: 'Real Estate & Construction', volume: 40000 },
    { jobFunction: 'IT & Technology', region: 'Canada', industry: 'Travel & Hospitality', volume: 30000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Canada', industry: 'Technology & IT', volume: 84000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Canada', industry: 'Financial Services', volume: 49000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Canada', industry: 'Healthcare & Life Sciences', volume: 38000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Canada', industry: 'Professional Services', volume: 31000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Canada', industry: 'Manufacturing & Industrial', volume: 38000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Canada', industry: 'Retail & Consumer Goods', volume: 27000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Canada', industry: 'Energy & Utilities', volume: 19000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Canada', industry: 'Education & Training', volume: 15000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Canada', industry: 'Real Estate & Construction', volume: 15000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Canada', industry: 'Travel & Hospitality', volume: 11000 },
    { jobFunction: 'Sales & Business Development', region: 'Canada', industry: 'Technology & IT', volume: 102000 },
    { jobFunction: 'Sales & Business Development', region: 'Canada', industry: 'Financial Services', volume: 60000 },
    { jobFunction: 'Sales & Business Development', region: 'Canada', industry: 'Healthcare & Life Sciences', volume: 47000 },
    { jobFunction: 'Sales & Business Development', region: 'Canada', industry: 'Professional Services', volume: 37000 },
    { jobFunction: 'Sales & Business Development', region: 'Canada', industry: 'Manufacturing & Industrial', volume: 47000 },
    { jobFunction: 'Sales & Business Development', region: 'Canada', industry: 'Retail & Consumer Goods', volume: 33000 },
    { jobFunction: 'Sales & Business Development', region: 'Canada', industry: 'Energy & Utilities', volume: 23000 },
    { jobFunction: 'Sales & Business Development', region: 'Canada', industry: 'Education & Training', volume: 19000 },
    { jobFunction: 'Sales & Business Development', region: 'Canada', industry: 'Real Estate & Construction', volume: 19000 },
    { jobFunction: 'Sales & Business Development', region: 'Canada', industry: 'Travel & Hospitality', volume: 14000 },
    { jobFunction: 'Marketing', region: 'Canada', industry: 'Technology & IT', volume: 88000 },
    { jobFunction: 'Marketing', region: 'Canada', industry: 'Financial Services', volume: 51000 },
    { jobFunction: 'Marketing', region: 'Canada', industry: 'Healthcare & Life Sciences', volume: 40000 },
    { jobFunction: 'Marketing', region: 'Canada', industry: 'Professional Services', volume: 32000 },
    { jobFunction: 'Marketing', region: 'Canada', industry: 'Manufacturing & Industrial', volume: 40000 },
    { jobFunction: 'Marketing', region: 'Canada', industry: 'Retail & Consumer Goods', volume: 28000 },
    { jobFunction: 'Marketing', region: 'Canada', industry: 'Energy & Utilities', volume: 20000 },
    { jobFunction: 'Marketing', region: 'Canada', industry: 'Education & Training', volume: 16000 },
    { jobFunction: 'Marketing', region: 'Canada', industry: 'Real Estate & Construction', volume: 16000 },
    { jobFunction: 'Marketing', region: 'Canada', industry: 'Travel & Hospitality', volume: 12000 },
    { jobFunction: 'Human Resources', region: 'Canada', industry: 'Technology & IT', volume: 74000 },
    { jobFunction: 'Human Resources', region: 'Canada', industry: 'Financial Services', volume: 43000 },
    { jobFunction: 'Human Resources', region: 'Canada', industry: 'Healthcare & Life Sciences', volume: 33000 },
    { jobFunction: 'Human Resources', region: 'Canada', industry: 'Professional Services', volume: 27000 },
    { jobFunction: 'Human Resources', region: 'Canada', industry: 'Manufacturing & Industrial', volume: 33000 },
    { jobFunction: 'Human Resources', region: 'Canada', industry: 'Retail & Consumer Goods', volume: 23000 },
    { jobFunction: 'Human Resources', region: 'Canada', industry: 'Energy & Utilities', volume: 17000 },
    { jobFunction: 'Human Resources', region: 'Canada', industry: 'Education & Training', volume: 13000 },
    { jobFunction: 'Human Resources', region: 'Canada', industry: 'Real Estate & Construction', volume: 13000 },
    { jobFunction: 'Human Resources', region: 'Canada', industry: 'Travel & Hospitality', volume: 10000 },
    { jobFunction: 'Legal & Compliance', region: 'Canada', industry: 'Technology & IT', volume: 42000 },
    { jobFunction: 'Legal & Compliance', region: 'Canada', industry: 'Financial Services', volume: 25000 },
    { jobFunction: 'Legal & Compliance', region: 'Canada', industry: 'Healthcare & Life Sciences', volume: 19000 },
    { jobFunction: 'Legal & Compliance', region: 'Canada', industry: 'Professional Services', volume: 15000 },
    { jobFunction: 'Legal & Compliance', region: 'Canada', industry: 'Manufacturing & Industrial', volume: 19000 },
    { jobFunction: 'Legal & Compliance', region: 'Canada', industry: 'Retail & Consumer Goods', volume: 13000 },
    { jobFunction: 'Legal & Compliance', region: 'Canada', industry: 'Energy & Utilities', volume: 10000 },
    { jobFunction: 'Legal & Compliance', region: 'Canada', industry: 'Education & Training', volume: 8000 },
    { jobFunction: 'Legal & Compliance', region: 'Canada', industry: 'Real Estate & Construction', volume: 8000 },
    { jobFunction: 'Legal & Compliance', region: 'Canada', industry: 'Travel & Hospitality', volume: 6000 },
    { jobFunction: 'Customer Service & Support', region: 'Canada', industry: 'Technology & IT', volume: 63000 },
    { jobFunction: 'Customer Service & Support', region: 'Canada', industry: 'Financial Services', volume: 37000 },
    { jobFunction: 'Customer Service & Support', region: 'Canada', industry: 'Healthcare & Life Sciences', volume: 29000 },
    { jobFunction: 'Customer Service & Support', region: 'Canada', industry: 'Professional Services', volume: 23000 },
    { jobFunction: 'Customer Service & Support', region: 'Canada', industry: 'Manufacturing & Industrial', volume: 29000 },
    { jobFunction: 'Customer Service & Support', region: 'Canada', industry: 'Retail & Consumer Goods', volume: 20000 },
    { jobFunction: 'Customer Service & Support', region: 'Canada', industry: 'Energy & Utilities', volume: 14000 },
    { jobFunction: 'Customer Service & Support', region: 'Canada', industry: 'Education & Training', volume: 11000 },
    { jobFunction: 'Customer Service & Support', region: 'Canada', industry: 'Real Estate & Construction', volume: 11000 },
    { jobFunction: 'Customer Service & Support', region: 'Canada', industry: 'Travel & Hospitality', volume: 9000 },
    { jobFunction: 'Engineering & Product', region: 'Canada', industry: 'Technology & IT', volume: 115000 },
    { jobFunction: 'Engineering & Product', region: 'Canada', industry: 'Financial Services', volume: 68000 },
    { jobFunction: 'Engineering & Product', region: 'Canada', industry: 'Healthcare & Life Sciences', volume: 52000 },
    { jobFunction: 'Engineering & Product', region: 'Canada', industry: 'Professional Services', volume: 42000 },
    { jobFunction: 'Engineering & Product', region: 'Canada', industry: 'Manufacturing & Industrial', volume: 52000 },
    { jobFunction: 'Engineering & Product', region: 'Canada', industry: 'Retail & Consumer Goods', volume: 37000 },
    { jobFunction: 'Engineering & Product', region: 'Canada', industry: 'Energy & Utilities', volume: 26000 },
    { jobFunction: 'Engineering & Product', region: 'Canada', industry: 'Education & Training', volume: 21000 },
    { jobFunction: 'Engineering & Product', region: 'Canada', industry: 'Real Estate & Construction', volume: 21000 },
    { jobFunction: 'Engineering & Product', region: 'Canada', industry: 'Travel & Hospitality', volume: 16000 },
    { jobFunction: 'Executive / C - Level', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Technology & IT', volume: 121000 },
    { jobFunction: 'Executive / C - Level', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Financial Services', volume: 71000 },
    { jobFunction: 'Executive / C - Level', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Healthcare & Life Sciences', volume: 55000 },
    { jobFunction: 'Executive / C - Level', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Professional Services', volume: 44000 },
    { jobFunction: 'Executive / C - Level', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Manufacturing & Industrial', volume: 55000 },
    { jobFunction: 'Executive / C - Level', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Retail & Consumer Goods', volume: 38000 },
    { jobFunction: 'Executive / C - Level', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Energy & Utilities', volume: 27000 },
    { jobFunction: 'Executive / C - Level', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Education & Training', volume: 22000 },
    { jobFunction: 'Executive / C - Level', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Real Estate & Construction', volume: 22000 },
    { jobFunction: 'Executive / C - Level', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Travel & Hospitality', volume: 16000 },
    { jobFunction: 'Finance & Accounting', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Technology & IT', volume: 116000 },
    { jobFunction: 'Finance & Accounting', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Financial Services', volume: 68000 },
    { jobFunction: 'Finance & Accounting', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Healthcare & Life Sciences', volume: 53000 },
    { jobFunction: 'Finance & Accounting', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Professional Services', volume: 42000 },
    { jobFunction: 'Finance & Accounting', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Manufacturing & Industrial', volume: 53000 },
    { jobFunction: 'Finance & Accounting', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Retail & Consumer Goods', volume: 37000 },
    { jobFunction: 'Finance & Accounting', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Energy & Utilities', volume: 26000 },
    { jobFunction: 'Finance & Accounting', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Education & Training', volume: 21000 },
    { jobFunction: 'Finance & Accounting', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Real Estate & Construction', volume: 21000 },
    { jobFunction: 'Finance & Accounting', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Travel & Hospitality', volume: 16000 },
    { jobFunction: 'IT & Technology', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Technology & IT', volume: 270000 },
    { jobFunction: 'IT & Technology', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Financial Services', volume: 158000 },
    { jobFunction: 'IT & Technology', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Healthcare & Life Sciences', volume: 123000 },
    { jobFunction: 'IT & Technology', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Professional Services', volume: 98000 },
    { jobFunction: 'IT & Technology', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Manufacturing & Industrial', volume: 123000 },
    { jobFunction: 'IT & Technology', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Retail & Consumer Goods', volume: 86000 },
    { jobFunction: 'IT & Technology', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Energy & Utilities', volume: 61000 },
    { jobFunction: 'IT & Technology', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Education & Training', volume: 49000 },
    { jobFunction: 'IT & Technology', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Real Estate & Construction', volume: 49000 },
    { jobFunction: 'IT & Technology', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Travel & Hospitality', volume: 37000 },
    { jobFunction: 'Operations & Supply Chain', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Technology & IT', volume: 103000 },
    { jobFunction: 'Operations & Supply Chain', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Financial Services', volume: 60000 },
    { jobFunction: 'Operations & Supply Chain', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Healthcare & Life Sciences', volume: 47000 },
    { jobFunction: 'Operations & Supply Chain', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Professional Services', volume: 37000 },
    { jobFunction: 'Operations & Supply Chain', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Manufacturing & Industrial', volume: 47000 },
    { jobFunction: 'Operations & Supply Chain', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Retail & Consumer Goods', volume: 33000 },
    { jobFunction: 'Operations & Supply Chain', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Energy & Utilities', volume: 23000 },
    { jobFunction: 'Operations & Supply Chain', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Education & Training', volume: 19000 },
    { jobFunction: 'Operations & Supply Chain', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Real Estate & Construction', volume: 19000 },
    { jobFunction: 'Operations & Supply Chain', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Travel & Hospitality', volume: 14000 },
    { jobFunction: 'Sales & Business Development', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Technology & IT', volume: 126000 },
    { jobFunction: 'Sales & Business Development', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Financial Services', volume: 74000 },
    { jobFunction: 'Sales & Business Development', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Healthcare & Life Sciences', volume: 57000 },
    { jobFunction: 'Sales & Business Development', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Professional Services', volume: 46000 },
    { jobFunction: 'Sales & Business Development', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Manufacturing & Industrial', volume: 57000 },
    { jobFunction: 'Sales & Business Development', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Retail & Consumer Goods', volume: 40000 },
    { jobFunction: 'Sales & Business Development', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Energy & Utilities', volume: 29000 },
    { jobFunction: 'Sales & Business Development', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Education & Training', volume: 23000 },
    { jobFunction: 'Sales & Business Development', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Real Estate & Construction', volume: 23000 },
    { jobFunction: 'Sales & Business Development', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Travel & Hospitality', volume: 17000 },
    { jobFunction: 'Marketing', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Technology & IT', volume: 108000 },
    { jobFunction: 'Marketing', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Financial Services', volume: 63000 },
    { jobFunction: 'Marketing', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Healthcare & Life Sciences', volume: 49000 },
    { jobFunction: 'Marketing', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Professional Services', volume: 39000 },
    { jobFunction: 'Marketing', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Manufacturing & Industrial', volume: 49000 },
    { jobFunction: 'Marketing', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Retail & Consumer Goods', volume: 34000 },
    { jobFunction: 'Marketing', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Energy & Utilities', volume: 25000 },
    { jobFunction: 'Marketing', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Education & Training', volume: 20000 },
    { jobFunction: 'Marketing', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Real Estate & Construction', volume: 20000 },
    { jobFunction: 'Marketing', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Travel & Hospitality', volume: 15000 },
    { jobFunction: 'Human Resources', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Technology & IT', volume: 90000 },
    { jobFunction: 'Human Resources', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Financial Services', volume: 53000 },
    { jobFunction: 'Human Resources', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Healthcare & Life Sciences', volume: 41000 },
    { jobFunction: 'Human Resources', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Professional Services', volume: 33000 },
    { jobFunction: 'Human Resources', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Manufacturing & Industrial', volume: 41000 },
    { jobFunction: 'Human Resources', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Retail & Consumer Goods', volume: 29000 },
    { jobFunction: 'Human Resources', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Energy & Utilities', volume: 21000 },
    { jobFunction: 'Human Resources', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Education & Training', volume: 16000 },
    { jobFunction: 'Human Resources', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Real Estate & Construction', volume: 16000 },
    { jobFunction: 'Human Resources', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Travel & Hospitality', volume: 12000 },
    { jobFunction: 'Legal & Compliance', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Technology & IT', volume: 52000 },
    { jobFunction: 'Legal & Compliance', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Financial Services', volume: 30000 },
    { jobFunction: 'Legal & Compliance', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Healthcare & Life Sciences', volume: 23000 },
    { jobFunction: 'Legal & Compliance', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Professional Services', volume: 19000 },
    { jobFunction: 'Legal & Compliance', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Manufacturing & Industrial', volume: 23000 },
    { jobFunction: 'Legal & Compliance', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Retail & Consumer Goods', volume: 16000 },
    { jobFunction: 'Legal & Compliance', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Energy & Utilities', volume: 12000 },
    { jobFunction: 'Legal & Compliance', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Education & Training', volume: 9000 },
    { jobFunction: 'Legal & Compliance', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Real Estate & Construction', volume: 9000 },
    { jobFunction: 'Legal & Compliance', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Travel & Hospitality', volume: 7000 },
    { jobFunction: 'Customer Service & Support', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Technology & IT', volume: 77000 },
    { jobFunction: 'Customer Service & Support', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Financial Services', volume: 45000 },
    { jobFunction: 'Customer Service & Support', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Healthcare & Life Sciences', volume: 35000 },
    { jobFunction: 'Customer Service & Support', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Professional Services', volume: 28000 },
    { jobFunction: 'Customer Service & Support', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Manufacturing & Industrial', volume: 35000 },
    { jobFunction: 'Customer Service & Support', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Retail & Consumer Goods', volume: 25000 },
    { jobFunction: 'Customer Service & Support', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Energy & Utilities', volume: 18000 },
    { jobFunction: 'Customer Service & Support', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Education & Training', volume: 14000 },
    { jobFunction: 'Customer Service & Support', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Real Estate & Construction', volume: 14000 },
    { jobFunction: 'Customer Service & Support', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Travel & Hospitality', volume: 11000 },
    { jobFunction: 'Engineering & Product', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Technology & IT', volume: 142000 },
    { jobFunction: 'Engineering & Product', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Financial Services', volume: 83000 },
    { jobFunction: 'Engineering & Product', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Healthcare & Life Sciences', volume: 64000 },
    { jobFunction: 'Engineering & Product', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Professional Services', volume: 52000 },
    { jobFunction: 'Engineering & Product', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Manufacturing & Industrial', volume: 64000 },
    { jobFunction: 'Engineering & Product', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Retail & Consumer Goods', volume: 45000 },
    { jobFunction: 'Engineering & Product', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Energy & Utilities', volume: 32000 },
    { jobFunction: 'Engineering & Product', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Education & Training', volume: 26000 },
    { jobFunction: 'Engineering & Product', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Real Estate & Construction', volume: 26000 },
    { jobFunction: 'Engineering & Product', region: 'DACH(Germany, Austria, Switzerland)', industry: 'Travel & Hospitality', volume: 19000 },
    { jobFunction: 'Executive / C - Level', region: 'Europe', industry: 'Technology & IT', volume: 346000 },
    { jobFunction: 'Executive / C - Level', region: 'Europe', industry: 'Financial Services', volume: 203000 },
    { jobFunction: 'Executive / C - Level', region: 'Europe', industry: 'Healthcare & Life Sciences', volume: 157000 },
    { jobFunction: 'Executive / C - Level', region: 'Europe', industry: 'Professional Services', volume: 126000 },
    { jobFunction: 'Executive / C - Level', region: 'Europe', industry: 'Manufacturing & Industrial', volume: 157000 },
    { jobFunction: 'Executive / C - Level', region: 'Europe', industry: 'Retail & Consumer Goods', volume: 110000 },
    { jobFunction: 'Executive / C - Level', region: 'Europe', industry: 'Energy & Utilities', volume: 79000 },
    { jobFunction: 'Executive / C - Level', region: 'Europe', industry: 'Education & Training', volume: 63000 },
    { jobFunction: 'Executive / C - Level', region: 'Europe', industry: 'Real Estate & Construction', volume: 63000 },
    { jobFunction: 'Executive / C - Level', region: 'Europe', industry: 'Travel & Hospitality', volume: 47000 },
    { jobFunction: 'Finance & Accounting', region: 'Europe', industry: 'Technology & IT', volume: 332000 },
    { jobFunction: 'Finance & Accounting', region: 'Europe', industry: 'Financial Services', volume: 194000 },
    { jobFunction: 'Finance & Accounting', region: 'Europe', industry: 'Healthcare & Life Sciences', volume: 151000 },
    { jobFunction: 'Finance & Accounting', region: 'Europe', industry: 'Professional Services', volume: 121000 },
    { jobFunction: 'Finance & Accounting', region: 'Europe', industry: 'Manufacturing & Industrial', volume: 151000 },
    { jobFunction: 'Finance & Accounting', region: 'Europe', industry: 'Retail & Consumer Goods', volume: 106000 },
    { jobFunction: 'Finance & Accounting', region: 'Europe', industry: 'Energy & Utilities', volume: 75000 },
    { jobFunction: 'Finance & Accounting', region: 'Europe', industry: 'Education & Training', volume: 60000 },
    { jobFunction: 'Finance & Accounting', region: 'Europe', industry: 'Real Estate & Construction', volume: 60000 },
    { jobFunction: 'Finance & Accounting', region: 'Europe', industry: 'Travel & Hospitality', volume: 45000 },
    { jobFunction: 'IT & Technology', region: 'Europe', industry: 'Technology & IT', volume: 775000 },
    { jobFunction: 'IT & Technology', region: 'Europe', industry: 'Financial Services', volume: 454000 },
    { jobFunction: 'IT & Technology', region: 'Europe', industry: 'Healthcare & Life Sciences', volume: 352000 },
    { jobFunction: 'IT & Technology', region: 'Europe', industry: 'Professional Services', volume: 282000 },
    { jobFunction: 'IT & Technology', region: 'Europe', industry: 'Manufacturing & Industrial', volume: 352000 },
    { jobFunction: 'IT & Technology', region: 'Europe', industry: 'Retail & Consumer Goods', volume: 247000 },
    { jobFunction: 'IT & Technology', region: 'Europe', industry: 'Energy & Utilities', volume: 176000 },
    { jobFunction: 'IT & Technology', region: 'Europe', industry: 'Education & Training', volume: 141000 },
    { jobFunction: 'IT & Technology', region: 'Europe', industry: 'Real Estate & Construction', volume: 141000 },
    { jobFunction: 'IT & Technology', region: 'Europe', industry: 'Travel & Hospitality', volume: 106000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Europe', industry: 'Technology & IT', volume: 295000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Europe', industry: 'Financial Services', volume: 173000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Europe', industry: 'Healthcare & Life Sciences', volume: 134000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Europe', industry: 'Professional Services', volume: 107000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Europe', industry: 'Manufacturing & Industrial', volume: 134000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Europe', industry: 'Retail & Consumer Goods', volume: 94000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Europe', industry: 'Energy & Utilities', volume: 67000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Europe', industry: 'Education & Training', volume: 54000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Europe', industry: 'Real Estate & Construction', volume: 54000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Europe', industry: 'Travel & Hospitality', volume: 40000 },
    { jobFunction: 'Sales & Business Development', region: 'Europe', industry: 'Technology & IT', volume: 360000 },
    { jobFunction: 'Sales & Business Development', region: 'Europe', industry: 'Financial Services', volume: 211000 },
    { jobFunction: 'Sales & Business Development', region: 'Europe', industry: 'Healthcare & Life Sciences', volume: 164000 },
    { jobFunction: 'Sales & Business Development', region: 'Europe', industry: 'Professional Services', volume: 131000 },
    { jobFunction: 'Sales & Business Development', region: 'Europe', industry: 'Manufacturing & Industrial', volume: 164000 },
    { jobFunction: 'Sales & Business Development', region: 'Europe', industry: 'Retail & Consumer Goods', volume: 115000 },
    { jobFunction: 'Sales & Business Development', region: 'Europe', industry: 'Energy & Utilities', volume: 82000 },
    { jobFunction: 'Sales & Business Development', region: 'Europe', industry: 'Education & Training', volume: 66000 },
    { jobFunction: 'Sales & Business Development', region: 'Europe', industry: 'Real Estate & Construction', volume: 66000 },
    { jobFunction: 'Sales & Business Development', region: 'Europe', industry: 'Travel & Hospitality', volume: 49000 },
    { jobFunction: 'Marketing', region: 'Europe', industry: 'Technology & IT', volume: 309000 },
    { jobFunction: 'Marketing', region: 'Europe', industry: 'Financial Services', volume: 181000 },
    { jobFunction: 'Marketing', region: 'Europe', industry: 'Healthcare & Life Sciences', volume: 140000 },
    { jobFunction: 'Marketing', region: 'Europe', industry: 'Professional Services', volume: 112000 },
    { jobFunction: 'Marketing', region: 'Europe', industry: 'Manufacturing & Industrial', volume: 140000 },
    { jobFunction: 'Marketing', region: 'Europe', industry: 'Retail & Consumer Goods', volume: 98000 },
    { jobFunction: 'Marketing', region: 'Europe', industry: 'Energy & Utilities', volume: 70000 },
    { jobFunction: 'Marketing', region: 'Europe', industry: 'Education & Training', volume: 56000 },
    { jobFunction: 'Marketing', region: 'Europe', industry: 'Real Estate & Construction', volume: 56000 },
    { jobFunction: 'Marketing', region: 'Europe', industry: 'Travel & Hospitality', volume: 42000 },
    { jobFunction: 'Human Resources', region: 'Europe', industry: 'Technology & IT', volume: 258000 },
    { jobFunction: 'Human Resources', region: 'Europe', industry: 'Financial Services', volume: 151000 },
    { jobFunction: 'Human Resources', region: 'Europe', industry: 'Healthcare & Life Sciences', volume: 117000 },
    { jobFunction: 'Human Resources', region: 'Europe', industry: 'Professional Services', volume: 94000 },
    { jobFunction: 'Human Resources', region: 'Europe', industry: 'Manufacturing & Industrial', volume: 117000 },
    { jobFunction: 'Human Resources', region: 'Europe', industry: 'Retail & Consumer Goods', volume: 82000 },
    { jobFunction: 'Human Resources', region: 'Europe', industry: 'Energy & Utilities', volume: 59000 },
    { jobFunction: 'Human Resources', region: 'Europe', industry: 'Education & Training', volume: 47000 },
    { jobFunction: 'Human Resources', region: 'Europe', industry: 'Real Estate & Construction', volume: 47000 },
    { jobFunction: 'Human Resources', region: 'Europe', industry: 'Travel & Hospitality', volume: 35000 },
    { jobFunction: 'Legal & Compliance', region: 'Europe', industry: 'Technology & IT', volume: 148000 },
    { jobFunction: 'Legal & Compliance', region: 'Europe', industry: 'Financial Services', volume: 86000 },
    { jobFunction: 'Legal & Compliance', region: 'Europe', industry: 'Healthcare & Life Sciences', volume: 67000 },
    { jobFunction: 'Legal & Compliance', region: 'Europe', industry: 'Professional Services', volume: 54000 },
    { jobFunction: 'Legal & Compliance', region: 'Europe', industry: 'Manufacturing & Industrial', volume: 67000 },
    { jobFunction: 'Legal & Compliance', region: 'Europe', industry: 'Retail & Consumer Goods', volume: 47000 },
    { jobFunction: 'Legal & Compliance', region: 'Europe', industry: 'Energy & Utilities', volume: 34000 },
    { jobFunction: 'Legal & Compliance', region: 'Europe', industry: 'Education & Training', volume: 27000 },
    { jobFunction: 'Legal & Compliance', region: 'Europe', industry: 'Real Estate & Construction', volume: 27000 },
    { jobFunction: 'Legal & Compliance', region: 'Europe', industry: 'Travel & Hospitality', volume: 20000 },
    { jobFunction: 'Customer Service & Support', region: 'Europe', industry: 'Technology & IT', volume: 222000 },
    { jobFunction: 'Customer Service & Support', region: 'Europe', industry: 'Financial Services', volume: 130000 },
    { jobFunction: 'Customer Service & Support', region: 'Europe', industry: 'Healthcare & Life Sciences', volume: 101000 },
    { jobFunction: 'Customer Service & Support', region: 'Europe', industry: 'Professional Services', volume: 81000 },
    { jobFunction: 'Customer Service & Support', region: 'Europe', industry: 'Manufacturing & Industrial', volume: 101000 },
    { jobFunction: 'Customer Service & Support', region: 'Europe', industry: 'Retail & Consumer Goods', volume: 71000 },
    { jobFunction: 'Customer Service & Support', region: 'Europe', industry: 'Energy & Utilities', volume: 50000 },
    { jobFunction: 'Customer Service & Support', region: 'Europe', industry: 'Education & Training', volume: 40000 },
    { jobFunction: 'Customer Service & Support', region: 'Europe', industry: 'Real Estate & Construction', volume: 40000 },
    { jobFunction: 'Customer Service & Support', region: 'Europe', industry: 'Travel & Hospitality', volume: 30000 },
    { jobFunction: 'Engineering & Product', region: 'Europe', industry: 'Technology & IT', volume: 406000 },
    { jobFunction: 'Engineering & Product', region: 'Europe', industry: 'Financial Services', volume: 237000 },
    { jobFunction: 'Engineering & Product', region: 'Europe', industry: 'Healthcare & Life Sciences', volume: 184000 },
    { jobFunction: 'Engineering & Product', region: 'Europe', industry: 'Professional Services', volume: 148000 },
    { jobFunction: 'Engineering & Product', region: 'Europe', industry: 'Manufacturing & Industrial', volume: 184000 },
    { jobFunction: 'Engineering & Product', region: 'Europe', industry: 'Retail & Consumer Goods', volume: 129000 },
    { jobFunction: 'Engineering & Product', region: 'Europe', industry: 'Energy & Utilities', volume: 92000 },
    { jobFunction: 'Engineering & Product', region: 'Europe', industry: 'Education & Training', volume: 74000 },
    { jobFunction: 'Engineering & Product', region: 'Europe', industry: 'Real Estate & Construction', volume: 74000 },
    { jobFunction: 'Engineering & Product', region: 'Europe', industry: 'Travel & Hospitality', volume: 55000 },
    { jobFunction: 'Executive / C - Level', region: 'FR(France)', industry: 'Technology & IT', volume: 29000 },
    { jobFunction: 'Executive / C - Level', region: 'FR(France)', industry: 'Financial Services', volume: 17000 },
    { jobFunction: 'Executive / C - Level', region: 'FR(France)', industry: 'Healthcare & Life Sciences', volume: 13000 },
    { jobFunction: 'Executive / C - Level', region: 'FR(France)', industry: 'Professional Services', volume: 11000 },
    { jobFunction: 'Executive / C - Level', region: 'FR(France)', industry: 'Manufacturing & Industrial', volume: 13000 },
    { jobFunction: 'Executive / C - Level', region: 'FR(France)', industry: 'Retail & Consumer Goods', volume: 9000 },
    { jobFunction: 'Executive / C - Level', region: 'FR(France)', industry: 'Energy & Utilities', volume: 7000 },
    { jobFunction: 'Executive / C - Level', region: 'FR(France)', industry: 'Education & Training', volume: 5000 },
    { jobFunction: 'Executive / C - Level', region: 'FR(France)', industry: 'Real Estate & Construction', volume: 5000 },
    { jobFunction: 'Executive / C - Level', region: 'FR(France)', industry: 'Travel & Hospitality', volume: 4000 },
    { jobFunction: 'Finance & Accounting', region: 'FR(France)', industry: 'Technology & IT', volume: 28000 },
    { jobFunction: 'Finance & Accounting', region: 'FR(France)', industry: 'Financial Services', volume: 16000 },
    { jobFunction: 'Finance & Accounting', region: 'FR(France)', industry: 'Healthcare & Life Sciences', volume: 13000 },
    { jobFunction: 'Finance & Accounting', region: 'FR(France)', industry: 'Professional Services', volume: 10000 },
    { jobFunction: 'Finance & Accounting', region: 'FR(France)', industry: 'Manufacturing & Industrial', volume: 13000 },
    { jobFunction: 'Finance & Accounting', region: 'FR(France)', industry: 'Retail & Consumer Goods', volume: 9000 },
    { jobFunction: 'Finance & Accounting', region: 'FR(France)', industry: 'Energy & Utilities', volume: 6000 },
    { jobFunction: 'Finance & Accounting', region: 'FR(France)', industry: 'Education & Training', volume: 5000 },
    { jobFunction: 'Finance & Accounting', region: 'FR(France)', industry: 'Real Estate & Construction', volume: 5000 },
    { jobFunction: 'Finance & Accounting', region: 'FR(France)', industry: 'Travel & Hospitality', volume: 4000 },
    { jobFunction: 'IT & Technology', region: 'FR(France)', industry: 'Technology & IT', volume: 65000 },
    { jobFunction: 'IT & Technology', region: 'FR(France)', industry: 'Financial Services', volume: 38000 },
    { jobFunction: 'IT & Technology', region: 'FR(France)', industry: 'Healthcare & Life Sciences', volume: 30000 },
    { jobFunction: 'IT & Technology', region: 'FR(France)', industry: 'Professional Services', volume: 24000 },
    { jobFunction: 'IT & Technology', region: 'FR(France)', industry: 'Manufacturing & Industrial', volume: 30000 },
    { jobFunction: 'IT & Technology', region: 'FR(France)', industry: 'Retail & Consumer Goods', volume: 21000 },
    { jobFunction: 'IT & Technology', region: 'FR(France)', industry: 'Energy & Utilities', volume: 15000 },
    { jobFunction: 'IT & Technology', region: 'FR(France)', industry: 'Education & Training', volume: 12000 },
    { jobFunction: 'IT & Technology', region: 'FR(France)', industry: 'Real Estate & Construction', volume: 12000 },
    { jobFunction: 'IT & Technology', region: 'FR(France)', industry: 'Travel & Hospitality', volume: 9000 },
    { jobFunction: 'Operations & Supply Chain', region: 'FR(France)', industry: 'Technology & IT', volume: 25000 },
    { jobFunction: 'Operations & Supply Chain', region: 'FR(France)', industry: 'Financial Services', volume: 14000 },
    { jobFunction: 'Operations & Supply Chain', region: 'FR(France)', industry: 'Healthcare & Life Sciences', volume: 11000 },
    { jobFunction: 'Operations & Supply Chain', region: 'FR(France)', industry: 'Professional Services', volume: 9000 },
    { jobFunction: 'Operations & Supply Chain', region: 'FR(France)', industry: 'Manufacturing & Industrial', volume: 11000 },
    { jobFunction: 'Operations & Supply Chain', region: 'FR(France)', industry: 'Retail & Consumer Goods', volume: 8000 },
    { jobFunction: 'Operations & Supply Chain', region: 'FR(France)', industry: 'Energy & Utilities', volume: 6000 },
    { jobFunction: 'Operations & Supply Chain', region: 'FR(France)', industry: 'Education & Training', volume: 5000 },
    { jobFunction: 'Operations & Supply Chain', region: 'FR(France)', industry: 'Real Estate & Construction', volume: 5000 },
    { jobFunction: 'Operations & Supply Chain', region: 'FR(France)', industry: 'Travel & Hospitality', volume: 3000 },
    { jobFunction: 'Sales & Business Development', region: 'FR(France)', industry: 'Technology & IT', volume: 30000 },
    { jobFunction: 'Sales & Business Development', region: 'FR(France)', industry: 'Financial Services', volume: 18000 },
    { jobFunction: 'Sales & Business Development', region: 'FR(France)', industry: 'Healthcare & Life Sciences', volume: 14000 },
    { jobFunction: 'Sales & Business Development', region: 'FR(France)', industry: 'Professional Services', volume: 11000 },
    { jobFunction: 'Sales & Business Development', region: 'FR(France)', industry: 'Manufacturing & Industrial', volume: 14000 },
    { jobFunction: 'Sales & Business Development', region: 'FR(France)', industry: 'Retail & Consumer Goods', volume: 10000 },
    { jobFunction: 'Sales & Business Development', region: 'FR(France)', industry: 'Energy & Utilities', volume: 7000 },
    { jobFunction: 'Sales & Business Development', region: 'FR(France)', industry: 'Education & Training', volume: 6000 },
    { jobFunction: 'Sales & Business Development', region: 'FR(France)', industry: 'Real Estate & Construction', volume: 6000 },
    { jobFunction: 'Sales & Business Development', region: 'FR(France)', industry: 'Travel & Hospitality', volume: 4000 },
    { jobFunction: 'Marketing', region: 'FR(France)', industry: 'Technology & IT', volume: 26000 },
    { jobFunction: 'Marketing', region: 'FR(France)', industry: 'Financial Services', volume: 15000 },
    { jobFunction: 'Marketing', region: 'FR(France)', industry: 'Healthcare & Life Sciences', volume: 12000 },
    { jobFunction: 'Marketing', region: 'FR(France)', industry: 'Professional Services', volume: 9000 },
    { jobFunction: 'Marketing', region: 'FR(France)', industry: 'Manufacturing & Industrial', volume: 12000 },
    { jobFunction: 'Marketing', region: 'FR(France)', industry: 'Retail & Consumer Goods', volume: 8000 },
    { jobFunction: 'Marketing', region: 'FR(France)', industry: 'Energy & Utilities', volume: 6000 },
    { jobFunction: 'Marketing', region: 'FR(France)', industry: 'Education & Training', volume: 5000 },
    { jobFunction: 'Marketing', region: 'FR(France)', industry: 'Real Estate & Construction', volume: 5000 },
    { jobFunction: 'Marketing', region: 'FR(France)', industry: 'Travel & Hospitality', volume: 4000 },
    { jobFunction: 'Human Resources', region: 'FR(France)', industry: 'Technology & IT', volume: 22000 },
    { jobFunction: 'Human Resources', region: 'FR(France)', industry: 'Financial Services', volume: 13000 },
    { jobFunction: 'Human Resources', region: 'FR(France)', industry: 'Healthcare & Life Sciences', volume: 10000 },
    { jobFunction: 'Human Resources', region: 'FR(France)', industry: 'Professional Services', volume: 8000 },
    { jobFunction: 'Human Resources', region: 'FR(France)', industry: 'Manufacturing & Industrial', volume: 10000 },
    { jobFunction: 'Human Resources', region: 'FR(France)', industry: 'Retail & Consumer Goods', volume: 7000 },
    { jobFunction: 'Human Resources', region: 'FR(France)', industry: 'Energy & Utilities', volume: 5000 },
    { jobFunction: 'Human Resources', region: 'FR(France)', industry: 'Education & Training', volume: 4000 },
    { jobFunction: 'Human Resources', region: 'FR(France)', industry: 'Real Estate & Construction', volume: 4000 },
    { jobFunction: 'Human Resources', region: 'FR(France)', industry: 'Travel & Hospitality', volume: 3000 },
    { jobFunction: 'Legal & Compliance', region: 'FR(France)', industry: 'Technology & IT', volume: 12000 },
    { jobFunction: 'Legal & Compliance', region: 'FR(France)', industry: 'Financial Services', volume: 7000 },
    { jobFunction: 'Legal & Compliance', region: 'FR(France)', industry: 'Healthcare & Life Sciences', volume: 6000 },
    { jobFunction: 'Legal & Compliance', region: 'FR(France)', industry: 'Professional Services', volume: 5000 },
    { jobFunction: 'Legal & Compliance', region: 'FR(France)', industry: 'Manufacturing & Industrial', volume: 6000 },
    { jobFunction: 'Legal & Compliance', region: 'FR(France)', industry: 'Retail & Consumer Goods', volume: 4000 },
    { jobFunction: 'Legal & Compliance', region: 'FR(France)', industry: 'Energy & Utilities', volume: 3000 },
    { jobFunction: 'Legal & Compliance', region: 'FR(France)', industry: 'Education & Training', volume: 2000 },
    { jobFunction: 'Legal & Compliance', region: 'FR(France)', industry: 'Real Estate & Construction', volume: 2000 },
    { jobFunction: 'Legal & Compliance', region: 'FR(France)', industry: 'Travel & Hospitality', volume: 2000 },
    { jobFunction: 'Customer Service & Support', region: 'FR(France)', industry: 'Technology & IT', volume: 19000 },
    { jobFunction: 'Customer Service & Support', region: 'FR(France)', industry: 'Financial Services', volume: 11000 },
    { jobFunction: 'Customer Service & Support', region: 'FR(France)', industry: 'Healthcare & Life Sciences', volume: 8000 },
    { jobFunction: 'Customer Service & Support', region: 'FR(France)', industry: 'Professional Services', volume: 7000 },
    { jobFunction: 'Customer Service & Support', region: 'FR(France)', industry: 'Manufacturing & Industrial', volume: 8000 },
    { jobFunction: 'Customer Service & Support', region: 'FR(France)', industry: 'Retail & Consumer Goods', volume: 6000 },
    { jobFunction: 'Customer Service & Support', region: 'FR(France)', industry: 'Energy & Utilities', volume: 4000 },
    { jobFunction: 'Customer Service & Support', region: 'FR(France)', industry: 'Education & Training', volume: 3000 },
    { jobFunction: 'Customer Service & Support', region: 'FR(France)', industry: 'Real Estate & Construction', volume: 3000 },
    { jobFunction: 'Customer Service & Support', region: 'FR(France)', industry: 'Travel & Hospitality', volume: 3000 },
    { jobFunction: 'Engineering & Product', region: 'FR(France)', industry: 'Technology & IT', volume: 34000 },
    { jobFunction: 'Engineering & Product', region: 'FR(France)', industry: 'Financial Services', volume: 20000 },
    { jobFunction: 'Engineering & Product', region: 'FR(France)', industry: 'Healthcare & Life Sciences', volume: 15000 },
    { jobFunction: 'Engineering & Product', region: 'FR(France)', industry: 'Professional Services', volume: 12000 },
    { jobFunction: 'Engineering & Product', region: 'FR(France)', industry: 'Manufacturing & Industrial', volume: 15000 },
    { jobFunction: 'Engineering & Product', region: 'FR(France)', industry: 'Retail & Consumer Goods', volume: 11000 },
    { jobFunction: 'Engineering & Product', region: 'FR(France)', industry: 'Energy & Utilities', volume: 8000 },
    { jobFunction: 'Engineering & Product', region: 'FR(France)', industry: 'Education & Training', volume: 6000 },
    { jobFunction: 'Engineering & Product', region: 'FR(France)', industry: 'Real Estate & Construction', volume: 6000 },
    { jobFunction: 'Engineering & Product', region: 'FR(France)', industry: 'Travel & Hospitality', volume: 5000 },
    { jobFunction: 'Executive / C - Level', region: 'North America', industry: 'Technology & IT', volume: 791000 },
    { jobFunction: 'Executive / C - Level', region: 'North America', industry: 'Financial Services', volume: 463000 },
    { jobFunction: 'Executive / C - Level', region: 'North America', industry: 'Healthcare & Life Sciences', volume: 359000 },
    { jobFunction: 'Executive / C - Level', region: 'North America', industry: 'Professional Services', volume: 288000 },
    { jobFunction: 'Executive / C - Level', region: 'North America', industry: 'Manufacturing & Industrial', volume: 359000 },
    { jobFunction: 'Executive / C - Level', region: 'North America', industry: 'Retail & Consumer Goods', volume: 252000 },
    { jobFunction: 'Executive / C - Level', region: 'North America', industry: 'Energy & Utilities', volume: 180000 },
    { jobFunction: 'Executive / C - Level', region: 'North America', industry: 'Education & Training', volume: 144000 },
    { jobFunction: 'Executive / C - Level', region: 'North America', industry: 'Real Estate & Construction', volume: 144000 },
    { jobFunction: 'Executive / C - Level', region: 'North America', industry: 'Travel & Hospitality', volume: 108000 },
    { jobFunction: 'Finance & Accounting', region: 'North America', industry: 'Technology & IT', volume: 758000 },
    { jobFunction: 'Finance & Accounting', region: 'North America', industry: 'Financial Services', volume: 444000 },
    { jobFunction: 'Finance & Accounting', region: 'North America', industry: 'Healthcare & Life Sciences', volume: 344000 },
    { jobFunction: 'Finance & Accounting', region: 'North America', industry: 'Professional Services', volume: 276000 },
    { jobFunction: 'Finance & Accounting', region: 'North America', industry: 'Manufacturing & Industrial', volume: 344000 },
    { jobFunction: 'Finance & Accounting', region: 'North America', industry: 'Retail & Consumer Goods', volume: 241000 },
    { jobFunction: 'Finance & Accounting', region: 'North America', industry: 'Energy & Utilities', volume: 172000 },
    { jobFunction: 'Finance & Accounting', region: 'North America', industry: 'Education & Training', volume: 138000 },
    { jobFunction: 'Finance & Accounting', region: 'North America', industry: 'Real Estate & Construction', volume: 138000 },
    { jobFunction: 'Finance & Accounting', region: 'North America', industry: 'Travel & Hospitality', volume: 103000 },
    { jobFunction: 'IT & Technology', region: 'North America', industry: 'Technology & IT', volume: 1771000 },
    { jobFunction: 'IT & Technology', region: 'North America', industry: 'Financial Services', volume: 1037000 },
    { jobFunction: 'IT & Technology', region: 'North America', industry: 'Healthcare & Life Sciences', volume: 804000 },
    { jobFunction: 'IT & Technology', region: 'North America', industry: 'Professional Services', volume: 644000 },
    { jobFunction: 'IT & Technology', region: 'North America', industry: 'Manufacturing & Industrial', volume: 804000 },
    { jobFunction: 'IT & Technology', region: 'North America', industry: 'Retail & Consumer Goods', volume: 564000 },
    { jobFunction: 'IT & Technology', region: 'North America', industry: 'Energy & Utilities', volume: 403000 },
    { jobFunction: 'IT & Technology', region: 'North America', industry: 'Education & Training', volume: 322000 },
    { jobFunction: 'IT & Technology', region: 'North America', industry: 'Real Estate & Construction', volume: 322000 },
    { jobFunction: 'IT & Technology', region: 'North America', industry: 'Travel & Hospitality', volume: 242000 },
    { jobFunction: 'Operations & Supply Chain', region: 'North America', industry: 'Technology & IT', volume: 674000 },
    { jobFunction: 'Operations & Supply Chain', region: 'North America', industry: 'Financial Services', volume: 394000 },
    { jobFunction: 'Operations & Supply Chain', region: 'North America', industry: 'Healthcare & Life Sciences', volume: 306000 },
    { jobFunction: 'Operations & Supply Chain', region: 'North America', industry: 'Professional Services', volume: 245000 },
    { jobFunction: 'Operations & Supply Chain', region: 'North America', industry: 'Manufacturing & Industrial', volume: 306000 },
    { jobFunction: 'Operations & Supply Chain', region: 'North America', industry: 'Retail & Consumer Goods', volume: 215000 },
    { jobFunction: 'Operations & Supply Chain', region: 'North America', industry: 'Energy & Utilities', volume: 153000 },
    { jobFunction: 'Operations & Supply Chain', region: 'North America', industry: 'Education & Training', volume: 123000 },
    { jobFunction: 'Operations & Supply Chain', region: 'North America', industry: 'Real Estate & Construction', volume: 123000 },
    { jobFunction: 'Operations & Supply Chain', region: 'North America', industry: 'Travel & Hospitality', volume: 92000 },
    { jobFunction: 'Sales & Business Development', region: 'North America', industry: 'Technology & IT', volume: 823000 },
    { jobFunction: 'Sales & Business Development', region: 'North America', industry: 'Financial Services', volume: 482000 },
    { jobFunction: 'Sales & Business Development', region: 'North America', industry: 'Healthcare & Life Sciences', volume: 374000 },
    { jobFunction: 'Sales & Business Development', region: 'North America', industry: 'Professional Services', volume: 300000 },
    { jobFunction: 'Sales & Business Development', region: 'North America', industry: 'Manufacturing & Industrial', volume: 374000 },
    { jobFunction: 'Sales & Business Development', region: 'North America', industry: 'Retail & Consumer Goods', volume: 262000 },
    { jobFunction: 'Sales & Business Development', region: 'North America', industry: 'Energy & Utilities', volume: 187000 },
    { jobFunction: 'Sales & Business Development', region: 'North America', industry: 'Education & Training', volume: 150000 },
    { jobFunction: 'Sales & Business Development', region: 'North America', industry: 'Real Estate & Construction', volume: 150000 },
    { jobFunction: 'Sales & Business Development', region: 'North America', industry: 'Travel & Hospitality', volume: 112000 },
    { jobFunction: 'Marketing', region: 'North America', industry: 'Technology & IT', volume: 706000 },
    { jobFunction: 'Marketing', region: 'North America', industry: 'Financial Services', volume: 414000 },
    { jobFunction: 'Marketing', region: 'North America', industry: 'Healthcare & Life Sciences', volume: 321000 },
    { jobFunction: 'Marketing', region: 'North America', industry: 'Professional Services', volume: 257000 },
    { jobFunction: 'Marketing', region: 'North America', industry: 'Manufacturing & Industrial', volume: 321000 },
    { jobFunction: 'Marketing', region: 'North America', industry: 'Retail & Consumer Goods', volume: 225000 },
    { jobFunction: 'Marketing', region: 'North America', industry: 'Energy & Utilities', volume: 161000 },
    { jobFunction: 'Marketing', region: 'North America', industry: 'Education & Training', volume: 129000 },
    { jobFunction: 'Marketing', region: 'North America', industry: 'Real Estate & Construction', volume: 129000 },
    { jobFunction: 'Marketing', region: 'North America', industry: 'Travel & Hospitality', volume: 96000 },
    { jobFunction: 'Human Resources', region: 'North America', industry: 'Technology & IT', volume: 591000 },
    { jobFunction: 'Human Resources', region: 'North America', industry: 'Financial Services', volume: 346000 },
    { jobFunction: 'Human Resources', region: 'North America', industry: 'Healthcare & Life Sciences', volume: 268000 },
    { jobFunction: 'Human Resources', region: 'North America', industry: 'Professional Services', volume: 215000 },
    { jobFunction: 'Human Resources', region: 'North America', industry: 'Manufacturing & Industrial', volume: 268000 },
    { jobFunction: 'Human Resources', region: 'North America', industry: 'Retail & Consumer Goods', volume: 188000 },
    { jobFunction: 'Human Resources', region: 'North America', industry: 'Energy & Utilities', volume: 134000 },
    { jobFunction: 'Human Resources', region: 'North America', industry: 'Education & Training', volume: 107000 },
    { jobFunction: 'Human Resources', region: 'North America', industry: 'Real Estate & Construction', volume: 107000 },
    { jobFunction: 'Human Resources', region: 'North America', industry: 'Travel & Hospitality', volume: 81000 },
    { jobFunction: 'Legal & Compliance', region: 'North America', industry: 'Technology & IT', volume: 338000 },
    { jobFunction: 'Legal & Compliance', region: 'North America', industry: 'Financial Services', volume: 198000 },
    { jobFunction: 'Legal & Compliance', region: 'North America', industry: 'Healthcare & Life Sciences', volume: 153000 },
    { jobFunction: 'Legal & Compliance', region: 'North America', industry: 'Professional Services', volume: 123000 },
    { jobFunction: 'Legal & Compliance', region: 'North America', industry: 'Manufacturing & Industrial', volume: 153000 },
    { jobFunction: 'Legal & Compliance', region: 'North America', industry: 'Retail & Consumer Goods', volume: 107000 },
    { jobFunction: 'Legal & Compliance', region: 'North America', industry: 'Energy & Utilities', volume: 77000 },
    { jobFunction: 'Legal & Compliance', region: 'North America', industry: 'Education & Training', volume: 61000 },
    { jobFunction: 'Legal & Compliance', region: 'North America', industry: 'Real Estate & Construction', volume: 61000 },
    { jobFunction: 'Legal & Compliance', region: 'North America', industry: 'Travel & Hospitality', volume: 46000 },
    { jobFunction: 'Customer Service & Support', region: 'North America', industry: 'Technology & IT', volume: 506000 },
    { jobFunction: 'Customer Service & Support', region: 'North America', industry: 'Financial Services', volume: 296000 },
    { jobFunction: 'Customer Service & Support', region: 'North America', industry: 'Healthcare & Life Sciences', volume: 230000 },
    { jobFunction: 'Customer Service & Support', region: 'North America', industry: 'Professional Services', volume: 184000 },
    { jobFunction: 'Customer Service & Support', region: 'North America', industry: 'Manufacturing & Industrial', volume: 230000 },
    { jobFunction: 'Customer Service & Support', region: 'North America', industry: 'Retail & Consumer Goods', volume: 161000 },
    { jobFunction: 'Customer Service & Support', region: 'North America', industry: 'Energy & Utilities', volume: 115000 },
    { jobFunction: 'Customer Service & Support', region: 'North America', industry: 'Education & Training', volume: 92000 },
    { jobFunction: 'Customer Service & Support', region: 'North America', industry: 'Real Estate & Construction', volume: 92000 },
    { jobFunction: 'Customer Service & Support', region: 'North America', industry: 'Travel & Hospitality', volume: 69000 },
    { jobFunction: 'Engineering & Product', region: 'North America', industry: 'Technology & IT', volume: 927000 },
    { jobFunction: 'Engineering & Product', region: 'North America', industry: 'Financial Services', volume: 543000 },
    { jobFunction: 'Engineering & Product', region: 'North America', industry: 'Healthcare & Life Sciences', volume: 421000 },
    { jobFunction: 'Engineering & Product', region: 'North America', industry: 'Professional Services', volume: 337000 },
    { jobFunction: 'Engineering & Product', region: 'North America', industry: 'Manufacturing & Industrial', volume: 421000 },
    { jobFunction: 'Engineering & Product', region: 'North America', industry: 'Retail & Consumer Goods', volume: 295000 },
    { jobFunction: 'Engineering & Product', region: 'North America', industry: 'Energy & Utilities', volume: 211000 },
    { jobFunction: 'Engineering & Product', region: 'North America', industry: 'Education & Training', volume: 169000 },
    { jobFunction: 'Engineering & Product', region: 'North America', industry: 'Real Estate & Construction', volume: 169000 },
    { jobFunction: 'Engineering & Product', region: 'North America', industry: 'Travel & Hospitality', volume: 126000 },
    { jobFunction: 'Executive / C - Level', region: 'Oceania', industry: 'Technology & IT', volume: 60000 },
    { jobFunction: 'Executive / C - Level', region: 'Oceania', industry: 'Financial Services', volume: 35000 },
    { jobFunction: 'Executive / C - Level', region: 'Oceania', industry: 'Healthcare & Life Sciences', volume: 27000 },
    { jobFunction: 'Executive / C - Level', region: 'Oceania', industry: 'Professional Services', volume: 22000 },
    { jobFunction: 'Executive / C - Level', region: 'Oceania', industry: 'Manufacturing & Industrial', volume: 27000 },
    { jobFunction: 'Executive / C - Level', region: 'Oceania', industry: 'Retail & Consumer Goods', volume: 19000 },
    { jobFunction: 'Executive / C - Level', region: 'Oceania', industry: 'Energy & Utilities', volume: 14000 },
    { jobFunction: 'Executive / C - Level', region: 'Oceania', industry: 'Education & Training', volume: 11000 },
    { jobFunction: 'Executive / C - Level', region: 'Oceania', industry: 'Real Estate & Construction', volume: 11000 },
    { jobFunction: 'Executive / C - Level', region: 'Oceania', industry: 'Travel & Hospitality', volume: 8000 },
    { jobFunction: 'Finance & Accounting', region: 'Oceania', industry: 'Technology & IT', volume: 57000 },
    { jobFunction: 'Finance & Accounting', region: 'Oceania', industry: 'Financial Services', volume: 34000 },
    { jobFunction: 'Finance & Accounting', region: 'Oceania', industry: 'Healthcare & Life Sciences', volume: 26000 },
    { jobFunction: 'Finance & Accounting', region: 'Oceania', industry: 'Professional Services', volume: 21000 },
    { jobFunction: 'Finance & Accounting', region: 'Oceania', industry: 'Manufacturing & Industrial', volume: 26000 },
    { jobFunction: 'Finance & Accounting', region: 'Oceania', industry: 'Retail & Consumer Goods', volume: 18000 },
    { jobFunction: 'Finance & Accounting', region: 'Oceania', industry: 'Energy & Utilities', volume: 13000 },
    { jobFunction: 'Finance & Accounting', region: 'Oceania', industry: 'Education & Training', volume: 10000 },
    { jobFunction: 'Finance & Accounting', region: 'Oceania', industry: 'Real Estate & Construction', volume: 10000 },
    { jobFunction: 'Finance & Accounting', region: 'Oceania', industry: 'Travel & Hospitality', volume: 8000 },
    { jobFunction: 'IT & Technology', region: 'Oceania', industry: 'Technology & IT', volume: 134000 },
    { jobFunction: 'IT & Technology', region: 'Oceania', industry: 'Financial Services', volume: 78000 },
    { jobFunction: 'IT & Technology', region: 'Oceania', industry: 'Healthcare & Life Sciences', volume: 61000 },
    { jobFunction: 'IT & Technology', region: 'Oceania', industry: 'Professional Services', volume: 49000 },
    { jobFunction: 'IT & Technology', region: 'Oceania', industry: 'Manufacturing & Industrial', volume: 61000 },
    { jobFunction: 'IT & Technology', region: 'Oceania', industry: 'Retail & Consumer Goods', volume: 43000 },
    { jobFunction: 'IT & Technology', region: 'Oceania', industry: 'Energy & Utilities', volume: 30000 },
    { jobFunction: 'IT & Technology', region: 'Oceania', industry: 'Education & Training', volume: 24000 },
    { jobFunction: 'IT & Technology', region: 'Oceania', industry: 'Real Estate & Construction', volume: 24000 },
    { jobFunction: 'IT & Technology', region: 'Oceania', industry: 'Travel & Hospitality', volume: 18000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Oceania', industry: 'Technology & IT', volume: 51000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Oceania', industry: 'Financial Services', volume: 30000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Oceania', industry: 'Healthcare & Life Sciences', volume: 23000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Oceania', industry: 'Professional Services', volume: 19000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Oceania', industry: 'Manufacturing & Industrial', volume: 23000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Oceania', industry: 'Retail & Consumer Goods', volume: 16000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Oceania', industry: 'Energy & Utilities', volume: 12000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Oceania', industry: 'Education & Training', volume: 9000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Oceania', industry: 'Real Estate & Construction', volume: 9000 },
    { jobFunction: 'Operations & Supply Chain', region: 'Oceania', industry: 'Travel & Hospitality', volume: 7000 },
    { jobFunction: 'Sales & Business Development', region: 'Oceania', industry: 'Technology & IT', volume: 62000 },
    { jobFunction: 'Sales & Business Development', region: 'Oceania', industry: 'Financial Services', volume: 36000 },
    { jobFunction: 'Sales & Business Development', region: 'Oceania', industry: 'Healthcare & Life Sciences', volume: 28000 },
    { jobFunction: 'Sales & Business Development', region: 'Oceania', industry: 'Professional Services', volume: 23000 },
    { jobFunction: 'Sales & Business Development', region: 'Oceania', industry: 'Manufacturing & Industrial', volume: 28000 },
    { jobFunction: 'Sales & Business Development', region: 'Oceania', industry: 'Retail & Consumer Goods', volume: 20000 },
    { jobFunction: 'Sales & Business Development', region: 'Oceania', industry: 'Energy & Utilities', volume: 14000 },
    { jobFunction: 'Sales & Business Development', region: 'Oceania', industry: 'Education & Training', volume: 11000 },
    { jobFunction: 'Sales & Business Development', region: 'Oceania', industry: 'Real Estate & Construction', volume: 11000 },
    { jobFunction: 'Sales & Business Development', region: 'Oceania', industry: 'Travel & Hospitality', volume: 9000 },
    { jobFunction: 'Marketing', region: 'Oceania', industry: 'Technology & IT', volume: 53000 },
    { jobFunction: 'Marketing', region: 'Oceania', industry: 'Financial Services', volume: 31000 },
    { jobFunction: 'Marketing', region: 'Oceania', industry: 'Healthcare & Life Sciences', volume: 24000 },
    { jobFunction: 'Marketing', region: 'Oceania', industry: 'Professional Services', volume: 19000 },
    { jobFunction: 'Marketing', region: 'Oceania', industry: 'Manufacturing & Industrial', volume: 24000 },
    { jobFunction: 'Marketing', region: 'Oceania', industry: 'Retail & Consumer Goods', volume: 17000 },
    { jobFunction: 'Marketing', region: 'Oceania', industry: 'Energy & Utilities', volume: 12000 },
    { jobFunction: 'Marketing', region: 'Oceania', industry: 'Education & Training', volume: 10000 },
    { jobFunction: 'Marketing', region: 'Oceania', industry: 'Real Estate & Construction', volume: 10000 },
    { jobFunction: 'Marketing', region: 'Oceania', industry: 'Travel & Hospitality', volume: 7000 },
    { jobFunction: 'Human Resources', region: 'Oceania', industry: 'Technology & IT', volume: 45000 },
    { jobFunction: 'Human Resources', region: 'Oceania', industry: 'Financial Services', volume: 26000 },
    { jobFunction: 'Human Resources', region: 'Oceania', industry: 'Healthcare & Life Sciences', volume: 20000 },
    { jobFunction: 'Human Resources', region: 'Oceania', industry: 'Professional Services', volume: 16000 },
    { jobFunction: 'Human Resources', region: 'Oceania', industry: 'Manufacturing & Industrial', volume: 20000 },
    { jobFunction: 'Human Resources', region: 'Oceania', industry: 'Retail & Consumer Goods', volume: 14000 },
    { jobFunction: 'Human Resources', region: 'Oceania', industry: 'Energy & Utilities', volume: 10000 },
    { jobFunction: 'Human Resources', region: 'Oceania', industry: 'Education & Training', volume: 8000 },
    { jobFunction: 'Human Resources', region: 'Oceania', industry: 'Real Estate & Construction', volume: 8000 },
    { jobFunction: 'Human Resources', region: 'Oceania', industry: 'Travel & Hospitality', volume: 6000 },
    { jobFunction: 'Legal & Compliance', region: 'Oceania', industry: 'Technology & IT', volume: 26000 },
    { jobFunction: 'Legal & Compliance', region: 'Oceania', industry: 'Financial Services', volume: 15000 },
    { jobFunction: 'Legal & Compliance', region: 'Oceania', industry: 'Healthcare & Life Sciences', volume: 12000 },
    { jobFunction: 'Legal & Compliance', region: 'Oceania', industry: 'Professional Services', volume: 9000 },
    { jobFunction: 'Legal & Compliance', region: 'Oceania', industry: 'Manufacturing & Industrial', volume: 12000 },
    { jobFunction: 'Legal & Compliance', region: 'Oceania', industry: 'Retail & Consumer Goods', volume: 8000 },
    { jobFunction: 'Legal & Compliance', region: 'Oceania', industry: 'Energy & Utilities', volume: 6000 },
    { jobFunction: 'Legal & Compliance', region: 'Oceania', industry: 'Education & Training', volume: 5000 },
    { jobFunction: 'Legal & Compliance', region: 'Oceania', industry: 'Real Estate & Construction', volume: 5000 },
    { jobFunction: 'Legal & Compliance', region: 'Oceania', industry: 'Travel & Hospitality', volume: 3000 },
    { jobFunction: 'Customer Service & Support', region: 'Oceania', industry: 'Technology & IT', volume: 38000 },
    { jobFunction: 'Customer Service & Support', region: 'Oceania', industry: 'Financial Services', volume: 22000 },
    { jobFunction: 'Customer Service & Support', region: 'Oceania', industry: 'Healthcare & Life Sciences', volume: 17000 },
    { jobFunction: 'Customer Service & Support', region: 'Oceania', industry: 'Professional Services', volume: 14000 },
    { jobFunction: 'Customer Service & Support', region: 'Oceania', industry: 'Manufacturing & Industrial', volume: 17000 },
    { jobFunction: 'Customer Service & Support', region: 'Oceania', industry: 'Retail & Consumer Goods', volume: 12000 },
    { jobFunction: 'Customer Service & Support', region: 'Oceania', industry: 'Energy & Utilities', volume: 9000 },
    { jobFunction: 'Customer Service & Support', region: 'Oceania', industry: 'Education & Training', volume: 7000 },
    { jobFunction: 'Customer Service & Support', region: 'Oceania', industry: 'Real Estate & Construction', volume: 7000 },
    { jobFunction: 'Customer Service & Support', region: 'Oceania', industry: 'Travel & Hospitality', volume: 5000 },
    { jobFunction: 'Engineering & Product', region: 'Oceania', industry: 'Technology & IT', volume: 70000 },
    { jobFunction: 'Engineering & Product', region: 'Oceania', industry: 'Financial Services', volume: 41000 },
    { jobFunction: 'Engineering & Product', region: 'Oceania', industry: 'Healthcare & Life Sciences', volume: 32000 },
    { jobFunction: 'Engineering & Product', region: 'Oceania', industry: 'Professional Services', volume: 26000 },
    { jobFunction: 'Engineering & Product', region: 'Oceania', industry: 'Manufacturing & Industrial', volume: 32000 },
    { jobFunction: 'Engineering & Product', region: 'Oceania', industry: 'Retail & Consumer Goods', volume: 22000 },
    { jobFunction: 'Engineering & Product', region: 'Oceania', industry: 'Energy & Utilities', volume: 16000 },
    { jobFunction: 'Engineering & Product', region: 'Oceania', industry: 'Education & Training', volume: 13000 },
    { jobFunction: 'Engineering & Product', region: 'Oceania', industry: 'Real Estate & Construction', volume: 13000 },
    { jobFunction: 'Engineering & Product', region: 'Oceania', industry: 'Travel & Hospitality', volume: 10000 },
    { jobFunction: 'Executive / C - Level', region: 'South America', industry: 'Technology & IT', volume: 52000 },
    { jobFunction: 'Executive / C - Level', region: 'South America', industry: 'Financial Services', volume: 30000 },
    { jobFunction: 'Executive / C - Level', region: 'South America', industry: 'Healthcare & Life Sciences', volume: 23000 },
    { jobFunction: 'Executive / C - Level', region: 'South America', industry: 'Professional Services', volume: 19000 },
    { jobFunction: 'Executive / C - Level', region: 'South America', industry: 'Manufacturing & Industrial', volume: 23000 },
    { jobFunction: 'Executive / C - Level', region: 'South America', industry: 'Retail & Consumer Goods', volume: 16000 },
    { jobFunction: 'Executive / C - Level', region: 'South America', industry: 'Energy & Utilities', volume: 12000 },
    { jobFunction: 'Executive / C - Level', region: 'South America', industry: 'Education & Training', volume: 9000 },
    { jobFunction: 'Executive / C - Level', region: 'South America', industry: 'Real Estate & Construction', volume: 9000 },
    { jobFunction: 'Executive / C - Level', region: 'South America', industry: 'Travel & Hospitality', volume: 7000 },
    { jobFunction: 'Finance & Accounting', region: 'South America', industry: 'Technology & IT', volume: 50000 },
    { jobFunction: 'Finance & Accounting', region: 'South America', industry: 'Financial Services', volume: 29000 },
    { jobFunction: 'Finance & Accounting', region: 'South America', industry: 'Healthcare & Life Sciences', volume: 22000 },
    { jobFunction: 'Finance & Accounting', region: 'South America', industry: 'Professional Services', volume: 18000 },
    { jobFunction: 'Finance & Accounting', region: 'South America', industry: 'Manufacturing & Industrial', volume: 22000 },
    { jobFunction: 'Finance & Accounting', region: 'South America', industry: 'Retail & Consumer Goods', volume: 16000 },
    { jobFunction: 'Finance & Accounting', region: 'South America', industry: 'Energy & Utilities', volume: 11000 },
    { jobFunction: 'Finance & Accounting', region: 'South America', industry: 'Education & Training', volume: 9000 },
    { jobFunction: 'Finance & Accounting', region: 'South America', industry: 'Real Estate & Construction', volume: 9000 },
    { jobFunction: 'Finance & Accounting', region: 'South America', industry: 'Travel & Hospitality', volume: 7000 },
    { jobFunction: 'IT & Technology', region: 'South America', industry: 'Technology & IT', volume: 116000 },
    { jobFunction: 'IT & Technology', region: 'South America', industry: 'Financial Services', volume: 68000 },
    { jobFunction: 'IT & Technology', region: 'South America', industry: 'Healthcare & Life Sciences', volume: 53000 },
    { jobFunction: 'IT & Technology', region: 'South America', industry: 'Professional Services', volume: 42000 },
    { jobFunction: 'IT & Technology', region: 'South America', industry: 'Manufacturing & Industrial', volume: 53000 },
    { jobFunction: 'IT & Technology', region: 'South America', industry: 'Retail & Consumer Goods', volume: 37000 },
    { jobFunction: 'IT & Technology', region: 'South America', industry: 'Energy & Utilities', volume: 26000 },
    { jobFunction: 'IT & Technology', region: 'South America', industry: 'Education & Training', volume: 21000 },
    { jobFunction: 'IT & Technology', region: 'South America', industry: 'Real Estate & Construction', volume: 21000 },
    { jobFunction: 'IT & Technology', region: 'South America', industry: 'Travel & Hospitality', volume: 16000 },
    { jobFunction: 'Operations & Supply Chain', region: 'South America', industry: 'Technology & IT', volume: 44000 },
    { jobFunction: 'Operations & Supply Chain', region: 'South America', industry: 'Financial Services', volume: 26000 },
    { jobFunction: 'Operations & Supply Chain', region: 'South America', industry: 'Healthcare & Life Sciences', volume: 20000 },
    { jobFunction: 'Operations & Supply Chain', region: 'South America', industry: 'Professional Services', volume: 16000 },
    { jobFunction: 'Operations & Supply Chain', region: 'South America', industry: 'Manufacturing & Industrial', volume: 20000 },
    { jobFunction: 'Operations & Supply Chain', region: 'South America', industry: 'Retail & Consumer Goods', volume: 14000 },
    { jobFunction: 'Operations & Supply Chain', region: 'South America', industry: 'Energy & Utilities', volume: 10000 },
    { jobFunction: 'Operations & Supply Chain', region: 'South America', industry: 'Education & Training', volume: 8000 },
    { jobFunction: 'Operations & Supply Chain', region: 'South America', industry: 'Real Estate & Construction', volume: 8000 },
    { jobFunction: 'Operations & Supply Chain', region: 'South America', industry: 'Travel & Hospitality', volume: 6000 },
    { jobFunction: 'Sales & Business Development', region: 'South America', industry: 'Technology & IT', volume: 54000 },
    { jobFunction: 'Sales & Business Development', region: 'South America', industry: 'Financial Services', volume: 31000 },
    { jobFunction: 'Sales & Business Development', region: 'South America', industry: 'Healthcare & Life Sciences', volume: 24000 },
    { jobFunction: 'Sales & Business Development', region: 'South America', industry: 'Professional Services', volume: 20000 },
    { jobFunction: 'Sales & Business Development', region: 'South America', industry: 'Manufacturing & Industrial', volume: 24000 },
    { jobFunction: 'Sales & Business Development', region: 'South America', industry: 'Retail & Consumer Goods', volume: 17000 },
    { jobFunction: 'Sales & Business Development', region: 'South America', industry: 'Energy & Utilities', volume: 12000 },
    { jobFunction: 'Sales & Business Development', region: 'South America', industry: 'Education & Training', volume: 10000 },
    { jobFunction: 'Sales & Business Development', region: 'South America', industry: 'Real Estate & Construction', volume: 10000 },
    { jobFunction: 'Sales & Business Development', region: 'South America', industry: 'Travel & Hospitality', volume: 7000 },
    { jobFunction: 'Marketing', region: 'South America', industry: 'Technology & IT', volume: 46000 },
    { jobFunction: 'Marketing', region: 'South America', industry: 'Financial Services', volume: 27000 },
    { jobFunction: 'Marketing', region: 'South America', industry: 'Healthcare & Life Sciences', volume: 21000 },
    { jobFunction: 'Marketing', region: 'South America', industry: 'Professional Services', volume: 17000 },
    { jobFunction: 'Marketing', region: 'South America', industry: 'Manufacturing & Industrial', volume: 21000 },
    { jobFunction: 'Marketing', region: 'South America', industry: 'Retail & Consumer Goods', volume: 15000 },
    { jobFunction: 'Marketing', region: 'South America', industry: 'Energy & Utilities', volume: 10000 },
    { jobFunction: 'Marketing', region: 'South America', industry: 'Education & Training', volume: 8000 },
    { jobFunction: 'Marketing', region: 'South America', industry: 'Real Estate & Construction', volume: 8000 },
    { jobFunction: 'Marketing', region: 'South America', industry: 'Travel & Hospitality', volume: 6000 },
    { jobFunction: 'Human Resources', region: 'South America', industry: 'Technology & IT', volume: 39000 },
    { jobFunction: 'Human Resources', region: 'South America', industry: 'Financial Services', volume: 23000 },
    { jobFunction: 'Human Resources', region: 'South America', industry: 'Healthcare & Life Sciences', volume: 18000 },
    { jobFunction: 'Human Resources', region: 'South America', industry: 'Professional Services', volume: 14000 },
    { jobFunction: 'Human Resources', region: 'South America', industry: 'Manufacturing & Industrial', volume: 18000 },
    { jobFunction: 'Human Resources', region: 'South America', industry: 'Retail & Consumer Goods', volume: 12000 },
    { jobFunction: 'Human Resources', region: 'South America', industry: 'Energy & Utilities', volume: 9000 },
    { jobFunction: 'Human Resources', region: 'South America', industry: 'Education & Training', volume: 7000 },
    { jobFunction: 'Human Resources', region: 'South America', industry: 'Real Estate & Construction', volume: 7000 },
    { jobFunction: 'Human Resources', region: 'South America', industry: 'Travel & Hospitality', volume: 5000 },
    { jobFunction: 'Legal & Compliance', region: 'South America', industry: 'Technology & IT', volume: 22000 },
    { jobFunction: 'Legal & Compliance', region: 'South America', industry: 'Financial Services', volume: 13000 },
    { jobFunction: 'Legal & Compliance', region: 'South America', industry: 'Healthcare & Life Sciences', volume: 10000 },
    { jobFunction: 'Legal & Compliance', region: 'South America', industry: 'Professional Services', volume: 8000 },
    { jobFunction: 'Legal & Compliance', region: 'South America', industry: 'Manufacturing & Industrial', volume: 10000 },
    { jobFunction: 'Legal & Compliance', region: 'South America', industry: 'Retail & Consumer Goods', volume: 7000 },
    { jobFunction: 'Legal & Compliance', region: 'South America', industry: 'Energy & Utilities', volume: 5000 },
    { jobFunction: 'Legal & Compliance', region: 'South America', industry: 'Education & Training', volume: 4000 },
    { jobFunction: 'Legal & Compliance', region: 'South America', industry: 'Real Estate & Construction', volume: 4000 },
    { jobFunction: 'Legal & Compliance', region: 'South America', industry: 'Travel & Hospitality', volume: 3000 },
    { jobFunction: 'Customer Service & Support', region: 'South America', industry: 'Technology & IT', volume: 33000 },
    { jobFunction: 'Customer Service & Support', region: 'South America', industry: 'Financial Services', volume: 19000 },
    { jobFunction: 'Customer Service & Support', region: 'South America', industry: 'Healthcare & Life Sciences', volume: 15000 },
    { jobFunction: 'Customer Service & Support', region: 'South America', industry: 'Professional Services', volume: 12000 },
    { jobFunction: 'Customer Service & Support', region: 'South America', industry: 'Manufacturing & Industrial', volume: 15000 },
    { jobFunction: 'Customer Service & Support', region: 'South America', industry: 'Retail & Consumer Goods', volume: 11000 },
    { jobFunction: 'Customer Service & Support', region: 'South America', industry: 'Energy & Utilities', volume: 8000 },
    { jobFunction: 'Customer Service & Support', region: 'South America', industry: 'Education & Training', volume: 6000 },
    { jobFunction: 'Customer Service & Support', region: 'South America', industry: 'Real Estate & Construction', volume: 6000 },
    { jobFunction: 'Customer Service & Support', region: 'South America', industry: 'Travel & Hospitality', volume: 5000 },
    { jobFunction: 'Engineering & Product', region: 'South America', industry: 'Technology & IT', volume: 61000 },
    { jobFunction: 'Engineering & Product', region: 'South America', industry: 'Financial Services', volume: 35000 },
    { jobFunction: 'Engineering & Product', region: 'South America', industry: 'Healthcare & Life Sciences', volume: 27000 },
    { jobFunction: 'Engineering & Product', region: 'South America', industry: 'Professional Services', volume: 22000 },
    { jobFunction: 'Engineering & Product', region: 'South America', industry: 'Manufacturing & Industrial', volume: 27000 },
    { jobFunction: 'Engineering & Product', region: 'South America', industry: 'Retail & Consumer Goods', volume: 19000 },
    { jobFunction: 'Engineering & Product', region: 'South America', industry: 'Energy & Utilities', volume: 14000 },
    { jobFunction: 'Engineering & Product', region: 'South America', industry: 'Education & Training', volume: 11000 },
    { jobFunction: 'Engineering & Product', region: 'South America', industry: 'Real Estate & Construction', volume: 11000 },
    { jobFunction: 'Engineering & Product', region: 'South America', industry: 'Travel & Hospitality', volume: 8000 },
    { jobFunction: 'Executive / C - Level', region: 'United Kingdom', industry: 'Technology & IT', volume: 121000 },
    { jobFunction: 'Executive / C - Level', region: 'United Kingdom', industry: 'Financial Services', volume: 71000 },
    { jobFunction: 'Executive / C - Level', region: 'United Kingdom', industry: 'Healthcare & Life Sciences', volume: 55000 },
    { jobFunction: 'Executive / C - Level', region: 'United Kingdom', industry: 'Professional Services', volume: 44000 },
    { jobFunction: 'Executive / C - Level', region: 'United Kingdom', industry: 'Manufacturing & Industrial', volume: 55000 },
    { jobFunction: 'Executive / C - Level', region: 'United Kingdom', industry: 'Retail & Consumer Goods', volume: 38000 },
    { jobFunction: 'Executive / C - Level', region: 'United Kingdom', industry: 'Energy & Utilities', volume: 27000 },
    { jobFunction: 'Executive / C - Level', region: 'United Kingdom', industry: 'Education & Training', volume: 22000 },
    { jobFunction: 'Executive / C - Level', region: 'United Kingdom', industry: 'Real Estate & Construction', volume: 22000 },
    { jobFunction: 'Executive / C - Level', region: 'United Kingdom', industry: 'Travel & Hospitality', volume: 16000 },
    { jobFunction: 'Finance & Accounting', region: 'United Kingdom', industry: 'Technology & IT', volume: 116000 },
    { jobFunction: 'Finance & Accounting', region: 'United Kingdom', industry: 'Financial Services', volume: 68000 },
    { jobFunction: 'Finance & Accounting', region: 'United Kingdom', industry: 'Healthcare & Life Sciences', volume: 53000 },
    { jobFunction: 'Finance & Accounting', region: 'United Kingdom', industry: 'Professional Services', volume: 42000 },
    { jobFunction: 'Finance & Accounting', region: 'United Kingdom', industry: 'Manufacturing & Industrial', volume: 53000 },
    { jobFunction: 'Finance & Accounting', region: 'United Kingdom', industry: 'Retail & Consumer Goods', volume: 37000 },
    { jobFunction: 'Finance & Accounting', region: 'United Kingdom', industry: 'Energy & Utilities', volume: 26000 },
    { jobFunction: 'Finance & Accounting', region: 'United Kingdom', industry: 'Education & Training', volume: 21000 },
    { jobFunction: 'Finance & Accounting', region: 'United Kingdom', industry: 'Real Estate & Construction', volume: 21000 },
    { jobFunction: 'Finance & Accounting', region: 'United Kingdom', industry: 'Travel & Hospitality', volume: 16000 },
    { jobFunction: 'IT & Technology', region: 'United Kingdom', industry: 'Technology & IT', volume: 270000 },
    { jobFunction: 'IT & Technology', region: 'United Kingdom', industry: 'Financial Services', volume: 158000 },
    { jobFunction: 'IT & Technology', region: 'United Kingdom', industry: 'Healthcare & Life Sciences', volume: 123000 },
    { jobFunction: 'IT & Technology', region: 'United Kingdom', industry: 'Professional Services', volume: 98000 },
    { jobFunction: 'IT & Technology', region: 'United Kingdom', industry: 'Manufacturing & Industrial', volume: 123000 },
    { jobFunction: 'IT & Technology', region: 'United Kingdom', industry: 'Retail & Consumer Goods', volume: 86000 },
    { jobFunction: 'IT & Technology', region: 'United Kingdom', industry: 'Energy & Utilities', volume: 61000 },
    { jobFunction: 'IT & Technology', region: 'United Kingdom', industry: 'Education & Training', volume: 49000 },
    { jobFunction: 'IT & Technology', region: 'United Kingdom', industry: 'Real Estate & Construction', volume: 49000 },
    { jobFunction: 'IT & Technology', region: 'United Kingdom', industry: 'Travel & Hospitality', volume: 37000 },
    { jobFunction: 'Operations & Supply Chain', region: 'United Kingdom', industry: 'Technology & IT', volume: 103000 },
    { jobFunction: 'Operations & Supply Chain', region: 'United Kingdom', industry: 'Financial Services', volume: 60000 },
    { jobFunction: 'Operations & Supply Chain', region: 'United Kingdom', industry: 'Healthcare & Life Sciences', volume: 47000 },
    { jobFunction: 'Operations & Supply Chain', region: 'United Kingdom', industry: 'Professional Services', volume: 37000 },
    { jobFunction: 'Operations & Supply Chain', region: 'United Kingdom', industry: 'Manufacturing & Industrial', volume: 47000 },
    { jobFunction: 'Operations & Supply Chain', region: 'United Kingdom', industry: 'Retail & Consumer Goods', volume: 33000 },
    { jobFunction: 'Operations & Supply Chain', region: 'United Kingdom', industry: 'Energy & Utilities', volume: 23000 },
    { jobFunction: 'Operations & Supply Chain', region: 'United Kingdom', industry: 'Education & Training', volume: 19000 },
    { jobFunction: 'Operations & Supply Chain', region: 'United Kingdom', industry: 'Real Estate & Construction', volume: 19000 },
    { jobFunction: 'Operations & Supply Chain', region: 'United Kingdom', industry: 'Travel & Hospitality', volume: 14000 },
    { jobFunction: 'Sales & Business Development', region: 'United Kingdom', industry: 'Technology & IT', volume: 126000 },
    { jobFunction: 'Sales & Business Development', region: 'United Kingdom', industry: 'Financial Services', volume: 74000 },
    { jobFunction: 'Sales & Business Development', region: 'United Kingdom', industry: 'Healthcare & Life Sciences', volume: 57000 },
    { jobFunction: 'Sales & Business Development', region: 'United Kingdom', industry: 'Professional Services', volume: 46000 },
    { jobFunction: 'Sales & Business Development', region: 'United Kingdom', industry: 'Manufacturing & Industrial', volume: 57000 },
    { jobFunction: 'Sales & Business Development', region: 'United Kingdom', industry: 'Retail & Consumer Goods', volume: 40000 },
    { jobFunction: 'Sales & Business Development', region: 'United Kingdom', industry: 'Energy & Utilities', volume: 29000 },
    { jobFunction: 'Sales & Business Development', region: 'United Kingdom', industry: 'Education & Training', volume: 23000 },
    { jobFunction: 'Sales & Business Development', region: 'United Kingdom', industry: 'Real Estate & Construction', volume: 23000 },
    { jobFunction: 'Sales & Business Development', region: 'United Kingdom', industry: 'Travel & Hospitality', volume: 17000 },
    { jobFunction: 'Marketing', region: 'United Kingdom', industry: 'Technology & IT', volume: 108000 },
    { jobFunction: 'Marketing', region: 'United Kingdom', industry: 'Financial Services', volume: 63000 },
    { jobFunction: 'Marketing', region: 'United Kingdom', industry: 'Healthcare & Life Sciences', volume: 49000 },
    { jobFunction: 'Marketing', region: 'United Kingdom', industry: 'Professional Services', volume: 39000 },
    { jobFunction: 'Marketing', region: 'United Kingdom', industry: 'Manufacturing & Industrial', volume: 49000 },
    { jobFunction: 'Marketing', region: 'United Kingdom', industry: 'Retail & Consumer Goods', volume: 34000 },
    { jobFunction: 'Marketing', region: 'United Kingdom', industry: 'Energy & Utilities', volume: 25000 },
    { jobFunction: 'Marketing', region: 'United Kingdom', industry: 'Education & Training', volume: 20000 },
    { jobFunction: 'Marketing', region: 'United Kingdom', industry: 'Real Estate & Construction', volume: 20000 },
    { jobFunction: 'Marketing', region: 'United Kingdom', industry: 'Travel & Hospitality', volume: 15000 },
    { jobFunction: 'Human Resources', region: 'United Kingdom', industry: 'Technology & IT', volume: 90000 },
    { jobFunction: 'Human Resources', region: 'United Kingdom', industry: 'Financial Services', volume: 53000 },
    { jobFunction: 'Human Resources', region: 'United Kingdom', industry: 'Healthcare & Life Sciences', volume: 41000 },
    { jobFunction: 'Human Resources', region: 'United Kingdom', industry: 'Professional Services', volume: 33000 },
    { jobFunction: 'Human Resources', region: 'United Kingdom', industry: 'Manufacturing & Industrial', volume: 41000 },
    { jobFunction: 'Human Resources', region: 'United Kingdom', industry: 'Retail & Consumer Goods', volume: 29000 },
    { jobFunction: 'Human Resources', region: 'United Kingdom', industry: 'Energy & Utilities', volume: 21000 },
    { jobFunction: 'Human Resources', region: 'United Kingdom', industry: 'Education & Training', volume: 16000 },
    { jobFunction: 'Human Resources', region: 'United Kingdom', industry: 'Real Estate & Construction', volume: 16000 },
    { jobFunction: 'Human Resources', region: 'United Kingdom', industry: 'Travel & Hospitality', volume: 12000 },
    { jobFunction: 'Legal & Compliance', region: 'United Kingdom', industry: 'Technology & IT', volume: 52000 },
    { jobFunction: 'Legal & Compliance', region: 'United Kingdom', industry: 'Financial Services', volume: 30000 },
    { jobFunction: 'Legal & Compliance', region: 'United Kingdom', industry: 'Healthcare & Life Sciences', volume: 23000 },
    { jobFunction: 'Legal & Compliance', region: 'United Kingdom', industry: 'Professional Services', volume: 19000 },
    { jobFunction: 'Legal & Compliance', region: 'United Kingdom', industry: 'Manufacturing & Industrial', volume: 23000 },
    { jobFunction: 'Legal & Compliance', region: 'United Kingdom', industry: 'Retail & Consumer Goods', volume: 16000 },
    { jobFunction: 'Legal & Compliance', region: 'United Kingdom', industry: 'Energy & Utilities', volume: 12000 },
    { jobFunction: 'Legal & Compliance', region: 'United Kingdom', industry: 'Education & Training', volume: 9000 },
    { jobFunction: 'Legal & Compliance', region: 'United Kingdom', industry: 'Real Estate & Construction', volume: 9000 },
    { jobFunction: 'Legal & Compliance', region: 'United Kingdom', industry: 'Travel & Hospitality', volume: 7000 },
    { jobFunction: 'Customer Service & Support', region: 'United Kingdom', industry: 'Technology & IT', volume: 77000 },
    { jobFunction: 'Customer Service & Support', region: 'United Kingdom', industry: 'Financial Services', volume: 45000 },
    { jobFunction: 'Customer Service & Support', region: 'United Kingdom', industry: 'Healthcare & Life Sciences', volume: 35000 },
    { jobFunction: 'Customer Service & Support', region: 'United Kingdom', industry: 'Professional Services', volume: 28000 },
    { jobFunction: 'Customer Service & Support', region: 'United Kingdom', industry: 'Manufacturing & Industrial', volume: 35000 },
    { jobFunction: 'Customer Service & Support', region: 'United Kingdom', industry: 'Retail & Consumer Goods', volume: 25000 },
    { jobFunction: 'Customer Service & Support', region: 'United Kingdom', industry: 'Energy & Utilities', volume: 18000 },
    { jobFunction: 'Customer Service & Support', region: 'United Kingdom', industry: 'Education & Training', volume: 14000 },
    { jobFunction: 'Customer Service & Support', region: 'United Kingdom', industry: 'Real Estate & Construction', volume: 14000 },
    { jobFunction: 'Customer Service & Support', region: 'United Kingdom', industry: 'Travel & Hospitality', volume: 11000 },
    { jobFunction: 'Engineering & Product', region: 'United Kingdom', industry: 'Technology & IT', volume: 142000 },
    { jobFunction: 'Engineering & Product', region: 'United Kingdom', industry: 'Financial Services', volume: 83000 },
    { jobFunction: 'Engineering & Product', region: 'United Kingdom', industry: 'Healthcare & Life Sciences', volume: 64000 },
    { jobFunction: 'Engineering & Product', region: 'United Kingdom', industry: 'Professional Services', volume: 52000 },
    { jobFunction: 'Engineering & Product', region: 'United Kingdom', industry: 'Manufacturing & Industrial', volume: 64000 },
    { jobFunction: 'Engineering & Product', region: 'United Kingdom', industry: 'Retail & Consumer Goods', volume: 45000 },
    { jobFunction: 'Engineering & Product', region: 'United Kingdom', industry: 'Energy & Utilities', volume: 32000 },
    { jobFunction: 'Engineering & Product', region: 'United Kingdom', industry: 'Education & Training', volume: 26000 },
    { jobFunction: 'Engineering & Product', region: 'United Kingdom', industry: 'Real Estate & Construction', volume: 26000 },
    { jobFunction: 'Engineering & Product', region: 'United Kingdom', industry: 'Travel & Hospitality', volume: 19000 },
    { jobFunction: 'Executive / C - Level', region: 'United States', industry: 'Technology & IT', volume: 692000 },
    { jobFunction: 'Executive / C - Level', region: 'United States', industry: 'Financial Services', volume: 405000 },
    { jobFunction: 'Executive / C - Level', region: 'United States', industry: 'Healthcare & Life Sciences', volume: 314000 },
    { jobFunction: 'Executive / C - Level', region: 'United States', industry: 'Professional Services', volume: 252000 },
    { jobFunction: 'Executive / C - Level', region: 'United States', industry: 'Manufacturing & Industrial', volume: 314000 },
    { jobFunction: 'Executive / C - Level', region: 'United States', industry: 'Retail & Consumer Goods', volume: 220000 },
    { jobFunction: 'Executive / C - Level', region: 'United States', industry: 'Energy & Utilities', volume: 157000 },
    { jobFunction: 'Executive / C - Level', region: 'United States', industry: 'Education & Training', volume: 126000 },
    { jobFunction: 'Executive / C - Level', region: 'United States', industry: 'Real Estate & Construction', volume: 126000 },
    { jobFunction: 'Executive / C - Level', region: 'United States', industry: 'Travel & Hospitality', volume: 94000 },
    { jobFunction: 'Finance & Accounting', region: 'United States', industry: 'Technology & IT', volume: 664000 },
    { jobFunction: 'Finance & Accounting', region: 'United States', industry: 'Financial Services', volume: 389000 },
    { jobFunction: 'Finance & Accounting', region: 'United States', industry: 'Healthcare & Life Sciences', volume: 301000 },
    { jobFunction: 'Finance & Accounting', region: 'United States', industry: 'Professional Services', volume: 242000 },
    { jobFunction: 'Finance & Accounting', region: 'United States', industry: 'Manufacturing & Industrial', volume: 301000 },
    { jobFunction: 'Finance & Accounting', region: 'United States', industry: 'Retail & Consumer Goods', volume: 211000 },
    { jobFunction: 'Finance & Accounting', region: 'United States', industry: 'Energy & Utilities', volume: 151000 },
    { jobFunction: 'Finance & Accounting', region: 'United States', industry: 'Education & Training', volume: 121000 },
    { jobFunction: 'Finance & Accounting', region: 'United States', industry: 'Real Estate & Construction', volume: 121000 },
    { jobFunction: 'Finance & Accounting', region: 'United States', industry: 'Travel & Hospitality', volume: 91000 },
    { jobFunction: 'IT & Technology', region: 'United States', industry: 'Technology & IT', volume: 1550000 },
    { jobFunction: 'IT & Technology', region: 'United States', industry: 'Financial Services', volume: 908000 },
    { jobFunction: 'IT & Technology', region: 'United States', industry: 'Healthcare & Life Sciences', volume: 704000 },
    { jobFunction: 'IT & Technology', region: 'United States', industry: 'Professional Services', volume: 564000 },
    { jobFunction: 'IT & Technology', region: 'United States', industry: 'Manufacturing & Industrial', volume: 704000 },
    { jobFunction: 'IT & Technology', region: 'United States', industry: 'Retail & Consumer Goods', volume: 494000 },
    { jobFunction: 'IT & Technology', region: 'United States', industry: 'Energy & Utilities', volume: 353000 },
    { jobFunction: 'IT & Technology', region: 'United States', industry: 'Education & Training', volume: 282000 },
    { jobFunction: 'IT & Technology', region: 'United States', industry: 'Real Estate & Construction', volume: 282000 },
    { jobFunction: 'IT & Technology', region: 'United States', industry: 'Travel & Hospitality', volume: 212000 },
    { jobFunction: 'Operations & Supply Chain', region: 'United States', industry: 'Technology & IT', volume: 590000 },
    { jobFunction: 'Operations & Supply Chain', region: 'United States', industry: 'Financial Services', volume: 345000 },
    { jobFunction: 'Operations & Supply Chain', region: 'United States', industry: 'Healthcare & Life Sciences', volume: 268000 },
    { jobFunction: 'Operations & Supply Chain', region: 'United States', industry: 'Professional Services', volume: 215000 },
    { jobFunction: 'Operations & Supply Chain', region: 'United States', industry: 'Manufacturing & Industrial', volume: 268000 },
    { jobFunction: 'Operations & Supply Chain', region: 'United States', industry: 'Retail & Consumer Goods', volume: 188000 },
    { jobFunction: 'Operations & Supply Chain', region: 'United States', industry: 'Energy & Utilities', volume: 134000 },
    { jobFunction: 'Operations & Supply Chain', region: 'United States', industry: 'Education & Training', volume: 107000 },
    { jobFunction: 'Operations & Supply Chain', region: 'United States', industry: 'Real Estate & Construction', volume: 107000 },
    { jobFunction: 'Operations & Supply Chain', region: 'United States', industry: 'Travel & Hospitality', volume: 80000 },
    { jobFunction: 'Sales & Business Development', region: 'United States', industry: 'Technology & IT', volume: 721000 },
    { jobFunction: 'Sales & Business Development', region: 'United States', industry: 'Financial Services', volume: 422000 },
    { jobFunction: 'Sales & Business Development', region: 'United States', industry: 'Healthcare & Life Sciences', volume: 327000 },
    { jobFunction: 'Sales & Business Development', region: 'United States', industry: 'Professional Services', volume: 262000 },
    { jobFunction: 'Sales & Business Development', region: 'United States', industry: 'Manufacturing & Industrial', volume: 327000 },
    { jobFunction: 'Sales & Business Development', region: 'United States', industry: 'Retail & Consumer Goods', volume: 230000 },
    { jobFunction: 'Sales & Business Development', region: 'United States', industry: 'Energy & Utilities', volume: 164000 },
    { jobFunction: 'Sales & Business Development', region: 'United States', industry: 'Education & Training', volume: 131000 },
    { jobFunction: 'Sales & Business Development', region: 'United States', industry: 'Real Estate & Construction', volume: 131000 },
    { jobFunction: 'Sales & Business Development', region: 'United States', industry: 'Travel & Hospitality', volume: 98000 },
    { jobFunction: 'Marketing', region: 'United States', industry: 'Technology & IT', volume: 618000 },
    { jobFunction: 'Marketing', region: 'United States', industry: 'Financial Services', volume: 362000 },
    { jobFunction: 'Marketing', region: 'United States', industry: 'Healthcare & Life Sciences', volume: 281000 },
    { jobFunction: 'Marketing', region: 'United States', industry: 'Professional Services', volume: 225000 },
    { jobFunction: 'Marketing', region: 'United States', industry: 'Manufacturing & Industrial', volume: 281000 },
    { jobFunction: 'Marketing', region: 'United States', industry: 'Retail & Consumer Goods', volume: 197000 },
    { jobFunction: 'Marketing', region: 'United States', industry: 'Energy & Utilities', volume: 141000 },
    { jobFunction: 'Marketing', region: 'United States', industry: 'Education & Training', volume: 113000 },
    { jobFunction: 'Marketing', region: 'United States', industry: 'Real Estate & Construction', volume: 113000 },
    { jobFunction: 'Marketing', region: 'United States', industry: 'Travel & Hospitality', volume: 84000 },
    { jobFunction: 'Human Resources', region: 'United States', industry: 'Technology & IT', volume: 517000 },
    { jobFunction: 'Human Resources', region: 'United States', industry: 'Financial Services', volume: 303000 },
    { jobFunction: 'Human Resources', region: 'United States', industry: 'Healthcare & Life Sciences', volume: 235000 },
    { jobFunction: 'Human Resources', region: 'United States', industry: 'Professional Services', volume: 188000 },
    { jobFunction: 'Human Resources', region: 'United States', industry: 'Manufacturing & Industrial', volume: 235000 },
    { jobFunction: 'Human Resources', region: 'United States', industry: 'Retail & Consumer Goods', volume: 165000 },
    { jobFunction: 'Human Resources', region: 'United States', industry: 'Energy & Utilities', volume: 118000 },
    { jobFunction: 'Human Resources', region: 'United States', industry: 'Education & Training', volume: 94000 },
    { jobFunction: 'Human Resources', region: 'United States', industry: 'Real Estate & Construction', volume: 94000 },
    { jobFunction: 'Human Resources', region: 'United States', industry: 'Travel & Hospitality', volume: 71000 },
    { jobFunction: 'Legal & Compliance', region: 'United States', industry: 'Technology & IT', volume: 296000 },
    { jobFunction: 'Legal & Compliance', region: 'United States', industry: 'Financial Services', volume: 173000 },
    { jobFunction: 'Legal & Compliance', region: 'United States', industry: 'Healthcare & Life Sciences', volume: 134000 },
    { jobFunction: 'Legal & Compliance', region: 'United States', industry: 'Professional Services', volume: 108000 },
    { jobFunction: 'Legal & Compliance', region: 'United States', industry: 'Manufacturing & Industrial', volume: 134000 },
    { jobFunction: 'Legal & Compliance', region: 'United States', industry: 'Retail & Consumer Goods', volume: 94000 },
    { jobFunction: 'Legal & Compliance', region: 'United States', industry: 'Energy & Utilities', volume: 67000 },
    { jobFunction: 'Legal & Compliance', region: 'United States', industry: 'Education & Training', volume: 54000 },
    { jobFunction: 'Legal & Compliance', region: 'United States', industry: 'Real Estate & Construction', volume: 54000 },
    { jobFunction: 'Legal & Compliance', region: 'United States', industry: 'Travel & Hospitality', volume: 40000 },
    { jobFunction: 'Customer Service & Support', region: 'United States', industry: 'Technology & IT', volume: 443000 },
    { jobFunction: 'Customer Service & Support', region: 'United States', industry: 'Financial Services', volume: 260000 },
    { jobFunction: 'Customer Service & Support', region: 'United States', industry: 'Healthcare & Life Sciences', volume: 201000 },
    { jobFunction: 'Customer Service & Support', region: 'United States', industry: 'Professional Services', volume: 161000 },
    { jobFunction: 'Customer Service & Support', region: 'United States', industry: 'Manufacturing & Industrial', volume: 201000 },
    { jobFunction: 'Customer Service & Support', region: 'United States', industry: 'Retail & Consumer Goods', volume: 141000 },
    { jobFunction: 'Customer Service & Support', region: 'United States', industry: 'Energy & Utilities', volume: 101000 },
    { jobFunction: 'Customer Service & Support', region: 'United States', industry: 'Education & Training', volume: 81000 },
    { jobFunction: 'Customer Service & Support', region: 'United States', industry: 'Real Estate & Construction', volume: 81000 },
    { jobFunction: 'Customer Service & Support', region: 'United States', industry: 'Travel & Hospitality', volume: 60000 },
    { jobFunction: 'Engineering & Product', region: 'United States', industry: 'Technology & IT', volume: 812000 },
    { jobFunction: 'Engineering & Product', region: 'United States', industry: 'Financial Services', volume: 475000 },
    { jobFunction: 'Engineering & Product', region: 'United States', industry: 'Healthcare & Life Sciences', volume: 369000 },
    { jobFunction: 'Engineering & Product', region: 'United States', industry: 'Professional Services', volume: 295000 },
    { jobFunction: 'Engineering & Product', region: 'United States', industry: 'Manufacturing & Industrial', volume: 369000 },
    { jobFunction: 'Engineering & Product', region: 'United States', industry: 'Retail & Consumer Goods', volume: 258000 },
    { jobFunction: 'Engineering & Product', region: 'United States', industry: 'Energy & Utilities', volume: 185000 },
    { jobFunction: 'Engineering & Product', region: 'United States', industry: 'Education & Training', volume: 148000 },
    { jobFunction: 'Engineering & Product', region: 'United States', industry: 'Real Estate & Construction', volume: 148000 },
    { jobFunction: 'Engineering & Product', region: 'United States', industry: 'Travel & Hospitality', volume: 111000 },
];

// Get all unique values for dropdowns
const allJobFunctions: JobFunction[] = Array.from(new Set(volumeData.map(item => item.jobFunction))) as JobFunction[];
const allRegions: Region[] = Array.from(new Set(volumeData.map(item => item.region))) as Region[];
const allIndustries: Industry[] = Array.from(new Set(volumeData.map(item => item.industry))) as Industry[];

export default function GlobalReach() {
    const [jobFunction, setJobFunction] = useState<JobFunction>('');
    const [region, setRegion] = useState<Region>('');
    const [industry, setIndustry] = useState<Industry>('');
    const [subscriberCount, setSubscriberCount] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const mapInitialized = useRef(false);
    const mapInstance = useRef<any>(null);
    const allCountries = useRef<string[]>([]);

    useEffect(() => {
        // Expose jQuery globally
        (window as any).jQuery = $;
        (window as any).$ = $;

        // Only initialize the map once
        if (!mapInitialized.current) {
            // Dynamically import jqvmap only in the browser
            import("jqvmap/dist/jquery.vmap.min.js").then(() => {
                import("jqvmap/dist/maps/jquery.vmap.world.js").then(() => {
                    mapInstance.current = ($("#vmap") as any).vectorMap({
                        map: "world_en",
                        backgroundColor: "transparent",
                        borderColor: "#818181",
                        borderOpacity: 0.25,
                        borderWidth: 1,
                        color: "#333344", // Default color
                        enableZoom: true,
                        hoverColor: "#49f6ffff",
                        normalizeFunction: "linear",
                        showTooltip: true,

                        enableSelect: false,
                        selectedColor: null,
                        onRegionClick: function (e: any) {
                            e.preventDefault(); // stop default click behavior
                        },
                        
                        onLoad: function (event: any, map: any) {
                            allCountries.current = Object.keys(map.countries); // works only here
                        }

                    });
                    mapInitialized.current = true;
                });
            });
        }

        return () => {
            // Clean up the map when component unmounts
            if (mapInstance.current) {
                try {
                    mapInstance.current.remove();
                } catch (e) {
                    console.log("Error removing map:", e);
                }
            }
        };
    }, []);

    const calculateTotalVolume = () => {
        setIsLoading(true);

        // Filter data based on selections
        let filteredData = volumeData;

        if (jobFunction) {
            filteredData = filteredData.filter(item => item.jobFunction === jobFunction);
        }

        if (region) {
            filteredData = filteredData.filter(item => item.region === region);
        }

        if (industry) {
            filteredData = filteredData.filter(item => item.industry === industry);
        }

        // Calculate total volume
        const totalVolume = filteredData.reduce((sum, item) => sum + item.volume, 0);

       

        // Update the map based on region selection
        if (region && mapInstance.current) {
            const continent = regionToContinent[region];
            const colors: Record<string, string> = {};

            // First, set all countries to a dim color
            allCountries.current.forEach(countryCode => {
                colors[countryCode] = "#333344"; // Dim color for all countries
            });

            // Highlight the selected continent with its specific color
            if (continent && continent in continentCountries) {
                const countries = continentCountries[continent];
                countries.forEach(code => {
                    if (allCountries.current.includes(code)) {
                        colors[code] = continentColors[continent];
                    }
                });
            }
            // For specific regions that aren't entire continents, we need special handling
            if (region === 'United States') {
                // Highlight only the United States
                colors['us'] = continentColors['unitedStates'];
                
                
            }
             else if (region === 'Canada') {
                // Highlight only Canada
                colors['ca'] = continentColors['northAmerica'];
            } 
            else if (region === 'South America') {
                // Highlight only shoth America
                for (const country of continentCountries.southAmerica) {
                    colors[country] = continentColors['southAmerica'];
                }
              
            }
            else if (region === 'Africa') {
                // Highlight only shoth America
                for (const country of continentCountries.africa) {
                    colors[country] = continentColors['africa'];
                }
            }

            else if (region === 'Oceania') {
                // Highlight only shoth America
                for (const country of continentCountries.oceania) {
                    colors[country] = continentColors['africa'];
                }
            }

            else if (region === 'APAC(Asia Pacific)' ) {
                // Highlight only shoth Asia
                for (const country of continentCountries.asia) {
                    colors[country] = continentColors['africa'];
                }

            }
            else if (region === 'Asia') {
                // Highlight only shoth Asia
                for (const country of continentCountries.asia) {
                    colors[country] = continentColors['africa'];
                }

            }
            else if (region === 'North America') {
                // Highlight only shoth Asia
                for (const country of continentCountries.northAmerica) {
                    colors[country] = continentColors['africa'];
                }

            }
            else if (region === 'Europe') {
                // Highlight only shoth Asia
                for (const country of continentCountries.europe) {
                    colors[country] = continentColors['africa'];
                }

            }
            else if (region === 'United Kingdom') {
                // Highlight only the United Kingdom
                colors['gb'] = continentColors['uk'];
            }
             else if (region === 'DACH(Germany, Austria, Switzerland)') {
                // Highlight Germany, Austria, and Switzerland
                colors['de'] = continentColors['europe'];
                colors['at'] = continentColors['europe'];
                colors['ch'] = continentColors['europe'];
            }
             else if (region === 'FR(France)') {
                // Highlight only France
                colors['fr'] = continentColors['europe'];
            }

            // Update the map colors
            mapInstance.current.setColors(colors);
        } else {
            // Reset to default if no region selected
            if (mapInstance.current) {
                const defaultColors: Record<string, string> = {};
                allCountries.current.forEach(countryCode => {
                    defaultColors[countryCode] = "#333344"; // Default color
                });
                mapInstance.current.setColors(defaultColors);
            }
        }

        setSubscriberCount(totalVolume);
        setIsLoading(false);
    };

    const handleReset = () => {
        setJobFunction('');
        setRegion('');
        setIndustry('');
        setSubscriberCount(null);

        // Reset map to show all regions with default color
        if (mapInstance.current) {
            const defaultColors: Record<string, string> = {};
            allCountries.current.forEach(countryCode => {
                defaultColors[countryCode] = "#333344"; // Default color
            });
            mapInstance.current.setColors(defaultColors);
        }
    };

    return (
        <>
            <Navbar />

            <section
                className="p-6 md:p-12"
                style={{
                    backgroundImage: "url('/backgrounds/GALAXY 5.png')",
                    backgroundSize: 'cover',
                }}
            >
                <div className="p-6 md:p-12 flex-col inset-0 bg-opacity-50 flex items-center justify-center z-10">
                    <div className="text-center p-4 md:p-6 px-4 text-white max-w-4xl">
                        <h1 className="text-4xl md:text-6xl text-[#7852A9] font-semibold brandColor">
                            GLOBAL REACH
                        </h1>
                        <p className="text-lg md:text-2xl mx-auto max-w-1xl">
                            Designed to convert signal into sales momentum.
                        </p>
                    </div>
                </div>
            </section>

            <section className='bg-black px-6 md:px-12 py-12 md:py-24 text-white flex items-center justify-center'>
                <div className="w-full max-w-full md:max-w-[75%] mx-auto text-center">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#7852A9]">
                        BUILD PIPELINE WHERE YOUR BUYERS ARE
                    </h1>
                    <p className="text-lg md:text-2xl mt-4">
                        Tap into over 62 million verified global subscribers — all ethically sourced, privacy-compliant, and aligned to your ICP.
                    </p>
                </div>
            </section>


            {/* /////////////////////////////////////////////////////////////////////////////// */}

            <section className="px-6 md:px-12 pb-16">
                <div className="w-full max-w-full md:max-w-[75%] mx-auto flex flex-col items-center justify-center my-6 md:my-12">
                    <h1 className="text-center text-2xl md:text-3xl text-white">
                        EXPLORE OUR GLOBAL REACH
                    </h1>
                </div>
                <div className='flex flex-col md:flex-row gap-4 px-4 md:px-12'>
                    <div className="md:w-1/3 w-full bg-white text-black p-4 md:p-8 flex flex-col items-center justify-center">
                        <p className='mb-4 text-center text-sm md:text-base'>
                            Select your target Job Function and Geography to see how many subscribers we have in your market
                        </p>
                        <div className='my-4 md:my-6 w-full'>
                            <select
                                value={jobFunction}
                                onChange={(e) => setJobFunction(e.target.value as JobFunction)}
                                className="w-full border-0 border-t-3 border-solid border-[#7852A9] py-3 md:py-4 text-sm md:text-base"
                            >
                                <option value="">Job Function</option>
                                {allJobFunctions.map(func => (
                                    <option key={func} value={func}>{func}</option>
                                ))}
                            </select>
                            <select
                                value={region}
                                onChange={(e) => setRegion(e.target.value as Region)}
                                className="w-full border-0 border-t-3 border-solid border-[#7852A9] py-3 md:py-4 text-sm md:text-base"
                            >
                                <option value="">Region</option>
                                {allRegions.map(region => (
                                    <option key={region} value={region}>{region}</option>
                                ))}
                            </select>
                            <select
                                value={industry}
                                onChange={(e) => setIndustry(e.target.value as Industry)}
                                className="w-full border-0 border-t-3 border-b-3 border-solid border-[#7852A9] py-3 md:py-4 text-sm md:text-base"
                            >
                                <option value="">All Industry</option>
                                {allIndustries.map(ind => (
                                    <option key={ind} value={ind}>{ind}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-wrap gap-2 md:gap-4 my-4 md:my-6 w-full justify-center">
                            <button
                                onClick={handleReset}
                                className="brand-button text-white text-sm md:text-base px-4 py-2 bg-[#7852A9] hover:bg-[#5E3E84] transition-colors"
                            >
                                RESET
                            </button>
                            <button
                                onClick={calculateTotalVolume}
                                disabled={isLoading}
                                className="brand-button text-white text-sm md:text-base px-4 py-2 bg-[#7852A9] hover:bg-[#5E3E84] disabled:bg-gray-400 transition-colors"
                            >
                                {isLoading ? 'LOADING...' : 'SEE RESULT'}
                            </button>
                        </div>

                        {/* Display results */}
                        {subscriberCount !== null && (
                            <div className="mt-4 p-4 bg-[#7852A9] text-white text-center w-full">
                                <h3 className="text-xl font-bold">
                                    {region || 'Global'} {jobFunction && `- ${jobFunction}`} {industry && `- ${industry}`}
                                </h3>
                                <p className="text-3xl mt-2">{subscriberCount.toLocaleString()}</p>
                                <p className="text-sm mt-2">estimated contacts</p>
                            </div>
                        )}
                    </div>
                    <div className="md:w-2/3 w-full text-black p-4 flex items-center justify-center min-h-[400px] rounded-lg relative">
                        <div id="vmap" style={{ width: "100%", height: "500px" }} />
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="bg-black p-6 md:p-12 flex flex-col items-center justify-center min-h-screen" style={{
                backgroundImage: "url('/backgrounds/GALAXY 6.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className="w-full max-w-full  mx-auto flex flex-col items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl md:text-4xl font-bold text-[#7852A9]">
                            THE FOUNDATION — FIRST-PARTY BY DESIGN
                        </h1>
                        <h2 className="text-xl md:text-2xl mt-2 md:mt-4 text-white">
                            100% FIRST-PARTY, ZERO COMPROMISES.
                        </h2>
                        <p className="text-sm md:text-base mt-4 md:mt-6 text-white max-w-3xl mx-auto px-4 md:px-0">
                            Every contact in our ecosystem is opt-in, verified, and refreshed continuously. That means no third-party guesswork, no data resellers – just compliant, accurate, and active buyers.
                        </p>
                    </div>

                    <div className="my-6 md:my-12 text-center">
                        <h3 className="text-lg md:text-2xl text-white">KEY VALUES:</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:flex md:flex-row w-full justify-center items-center px-2 md:px-6">
                        {[
                            {
                                img: "/backgrounds/r2.png",
                                title: "62M+",
                                subtitle: "GLOBAL SUBSCRIBERS"
                            },
                            {
                                img: "/backgrounds/r3.png",
                                title: "GDPR, CASL, CCPA",
                                subtitle: "COMPLIANT"
                            },
                            {
                                img: "/backgrounds/r4.png",
                                content: "FULLY TRANSPARENT SOURCING & ENGAGEMENT"
                            },
                            {
                                img: "/backgrounds/r1.png",
                                content: "REAL-TIME ENRICHMENT AND SIGNAL-MATCHING VIA DEMANDFUSION"
                            }
                        ].map((card, index) => (
                            <div
                                key={index}
                                className="relative rounded-full w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 flex-shrink-0 flex items-center justify-center mx-2"
                            >
                                <img
                                    src={card.img}
                                    alt=""
                                    className="absolute w-full h-full object-cover"
                                />
                                <div className="relative z-10 text-center p-2 md:p-4 bg-opacity-40 rounded-full w-full h-full flex flex-col items-center justify-center">
                                    {card.title && (
                                        <h2 className="text-lg md:text-2xl lg:text-3xl mb-1 font-bold text-white px-1 md:px-2">
                                            {card.title}
                                        </h2>
                                    )}
                                    {card.subtitle ? (
                                        <p className="text-[10px] md:text-xs uppercase tracking-wider text-white px-1">
                                            {card.subtitle}
                                        </p>
                                    ) : (
                                        <p className="text-[10px] md:text-xs uppercase tracking-wider text-white px-1">
                                            {card.content}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 md:mt-16 w-full">
                        <div className="grid grid-cols-3 gap-4 md:flex md:flex-row justify-center items-center">
                            {['Inc Power', 'ISO', 'gdpr', 'ccpa', 'casl', 'canspam'].map((num) => (
                                <div key={num} className="rounded-lg shadow-md p-3 md:p-4 flex items-center justify-center mx-1 md:mx-3">
                                    <img
                                        src={`/logos/${num}.png`}
                                        alt={`${num} logo`}
                                        className="w-full h-auto max-h-16 md:max-h-30 object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-black p-6 md:p-12 text-white border-solid border-[#7852A9] border-b-8 md:border-b-20 border-t-8 md:border-t-20'>
                <div className='flex flex-col md:flex-row px-4 md:px-12'>
                    <div className="md:w-1/3 w-full text-white py-6 md:py-12 flex flex-col">
                        <div className='mb-4 md:mb-6'>
                            <h2 className="text-xl md:text-3xl font-bold text-[#7852A9]">GLOBAL BY NATURE,</h2>
                            <h2 className="text-xl md:text-3xl font-bold">LOCAL BY SIGNAL</h2>
                        </div>
                        <div className='mb-4 md:mb-6'>
                            <h2 className="text-xl md:text-3xl font-bold">A WORLD OF REACH.</h2>
                            <h2 className="text-xl md:text-3xl font-bold">A SIGNAL-LED APPROACH.</h2>
                        </div>
                        <p className='py-3 md:py-6 text-sm md:text-base md:text-xl'>From North America to APAC, we activate global programs with local intelligence and compliance baked in.</p>
                        <h1 className='py-3 md:py-6 text-lg md:text-3xl'>TOP PERFORMING GEOS:</h1>
                        <ul className="list-disc list-inside pl-2 md:pl-4 grid grid-cols-2 gap-1">
                            <li className='text-xl'>United States</li>
                            <li className='text-xl'>Canada</li>
                            <li className='text-xl'>United Kingdom</li>
                            <li className='text-xl'>Germany</li>
                            <li className='text-xl'>France</li>
                            <li className='text-xl'>Nordics</li>
                            <li className='text-xl'>APAC</li>
                        </ul>
                    </div>
                    <div className="md:w-2/3 w-full text-black p-4 md:p-8 flex items-center justify-center">
                        <img src="/map.png" alt="World map" className="w-full h-auto" />
                    </div>
                </div>
            </section>

            <section className='p-6 md:p-12' style={{
                backgroundImage: "url('/backgrounds/GALAXY 3.png')",
                backgroundSize: 'cover',
            }}>
                <div className='flex flex-col gap-6 md:gap-12 md:flex-row px-1 md:px-12 m-2 md:m-3'>
                    <div style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    }} className="w-full  text-white p-4 md:p-12 flex flex-col border-solid border-[rgba(255,255,255,0.6)] border rounded-xl md:rounded-2xl">
                        <h1 className="text-center text-xl md:text-4xl mt-2 font-bold text-[#7852A9]">
                            THE PEOPLE BEHIND THE DATA
                        </h1>
                        <h1 className="text-center text-lg md:text-2xl mt-2 text-white">
                            WE DON'T JUST REACH PEOPLE. <br />
                            WE REACH THE RIGHT PEOPLE.
                        </h1>
                        <p className="text-center text-sm md:text-base mt-2 text-white p-3 md:p-6">
                            From global CIOs to regional HR leaders, our reach spans every major job function driving SMB to enterprise decision-making.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-4 md:mt-8">
                            {[
                                { icon: "/icons/it.png", title: "Information Technology" },
                                { icon: "/icons/marketing.png", title: "Marketing" },
                                { icon: "/icons/finance.png", title: "Finance" },
                                { icon: "/icons/hr.png", title: "Human Resources" },
                                { icon: "/icons/Operations.png", title: "Operations" },
                                { icon: "/icons/sales.png", title: "Sales" }
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col items-center rounded-lg p-2 md:p-4 shadow-md">
                                    <img src={item.icon} alt={item.title} className=" object-contain mb-1 md:mb-2" />
                                    <h3 className="font-bold text-xs md:text-sm text-center">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    }} className="w-full text-white p-4 md:p-12 flex flex-col border-solid border-[rgba(255,255,255,0.6)] border rounded-xl md:rounded-2xl">
                        <h1 className="text-center text-xl md:text-4xl mt-2 font-bold text-[#7852A9]">
                            INDUSTRY PENETRATION
                        </h1>
                        <h1 className="text-center text-lg md:text-2xl mt-2 text-white">
                            BUILT TO SERVE KEY VERTICALS
                        </h1>
                        <p className="text-center text-sm md:text-base mt-2 p-3 md:p-6 text-white">
                            We focus on industries where complexity meets opportunity—enabling scalable programs for the companies shaping tomorrow.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-4 md:mt-8">
                            {[
                                { icon: "/icons/healthcare.png", title: "Healthcare" },
                                { icon: "/icons/manufacturing.png", title: "Manufacturing" },
                                { icon: "/icons/financial services.png", title: "Financial Services" },
                                { icon: "/icons/retail.png", title: "Retail" },
                                { icon: "/icons/technology.png", title: "Technology" }
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col items-center rounded-lg p-2 md:p-4 shadow-md">
                                    <img src={item.icon} alt={item.title} className="w object-contain mb-1 md:mb-2" />
                                    <h3 className="font-bold text-xs md:text-sm text-center">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-full md:max-w-[75%] mx-auto flex flex-col items-center justify-center p-6 md:p-12">
                    <h1 className="text-center text-xl md:text-3xl mt-2 font-bold text-[#7852A9]">
                        KNOW YOUR ICP. WE'LL MATCH THE SIGNAL. <span className="text-white">ANYWHERE</span>
                    </h1>
                    <p className="text-center text-lg md:text-2xl mt-2 text-white">
                        Build geo-aligned, function-targeted, industry-specific demand – globally.
                    </p>
                    <div className="gap-3 md:gap-4 flex flex-col md:flex-row items-center justify-between mt-4 md:mt-6 w-full md:w-auto">
                        <a href='/RequestProposal' className="brand-button text-white w-full md:w-auto">REQUEST A PROPOSAL</a>
                        <a href='/Contact' className="brand-button text-white w-full md:w-auto">TALK TO A TARGETING SPECIALIST</a>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}





// import React, { useState, useEffect, useRef } from 'react';
// import { Navbar } from '~/header/navbar';
// import { Footer } from '~/footer/footer';
// import $ from "jquery";
// import "jqvmap/dist/jqvmap.min.css";

// // Define types for our selections
// type JobFunction = 'sales' | 'marketing' | 'engineering' | 'finance' | 'hr' | '';
// type GeographyType = 'northAmerica' | 'southAmerica' | 'europe' | 'asia' | 'africa' | 'oceania' | 'canada' | '';
// type Industry = 'technology' | 'healthcare' | 'finance' | 'manufacturing' | 'retail' | '';

// // Continent to country code mapping
// const continentCountries: Record<string, string[]> = {
//     northAmerica: [ 'mx', 'gl', 'bm', 'gt', 'sv', 'hn', 'ni', 'cr', 'pa', 'bs', 'cu', 'jm', 'ht', 'do', 'pr'],
//     southAmerica: ['br', 'ar', 'cl', 'co', 'pe', 've', 'ec', 'bo', 'py', 'uy', 'sr', 'gf', 'gy', 'fk'],
//     europe: ['gb', 'fr', 'de', 'it', 'es', 'pl', 'ro', 'nl', 'be', 'se', 'cz', 'gr', 'pt', 'hu', 'at', 'ch', 'ie', 'dk', 'fi', 'no', 'sk', 'bg', 'rs', 'hr', 'lt', 'si', 'lv', 'ee', 'is', 'al', 'ba', 'mk', 'me', 'cy', 'lu', 'mt', 'ad', 'li', 'mc', 'sm', 'va'],
//     asia: ['cn', 'in', 'ru', 'jp', 'id', 'pk', 'tr', 'th', 'kr', 'vn', 'ph', 'my', 'kz', 'sa', 'ir', 'uz', 'mm', 'iq', 'af', 'ye', 'sy', 'kh', 'tj', 'np', 'lk', 'bd', 'la', 'jo', 'az', 'ae', 'il', 'tw', 'hk', 'kg', 'tm', 'sg', 'ge', 'mn', 'om', 'kw', 'qa', 'bh', 'am', 'ps', 'bt', 'mv', 'bn', 'tl'],
//     africa: ['ng', 'eg', 'za', 'dz', 'sd', 'ly', 'ma', 'ke', 'et', 'gh', 'cm', 'ci', 'mg', 'mz', 'ang', 'ne', 'bf', 'ml', 'zw', 'tn', 'ss', 'sn', 'td', 'so', 'er', 'cf', 'rw', 'bj', 'gn', 'ug', 'zm', 'sl', 'mw', 'tg', 'lr', 'mr', 'na', 'bw', 'gm', 'ga', 'ls', 'gw', 'gq', 'mu', 'eq', 'dj', 're', 'km', 'cv', 'sc', 'eh', 'st', 'sh'],
//     oceania: ['au', 'nz', 'pg', 'fj', 'sb', 'vu', 'nc', 'pf', 'ws', 'ki', 'fm', 'to', 'mh', 'pw', 'nr', 'tv'],
//     canada: ['ca', 'us',],
// };

// // Mock data for demonstration
// const mockData = {
//     northAmerica: { count: 18500000, color: "#7852A9" },
//     southAmerica: { count: 7200000, color: "#5E3E84" },
//     europe: { count: 15200000, color: "#4A2F6B" },
//     asia: { count: 19800000, color: "#3B2556" },
//     africa: { count: 6800000, color: "#2E1C43" },
//     canada: { count: 6800000, color: "#2E1C43" },

//     oceania: { count: 4500000, color: "#221532" }
// };

// // Mock data for job functions and industries
// const mockTableData = {
//     northAmerica: {
//         sales: { technology: 4200000, healthcare: 2100000, finance: 3500000, manufacturing: 1800000, retail: 2500000 },
//         marketing: { technology: 3100000, healthcare: 1500000, finance: 2200000, manufacturing: 1200000, retail: 1800000 },
//         engineering: { technology: 5800000, healthcare: 900000, finance: 1200000, manufacturing: 2100000, retail: 600000 },
//         finance: { technology: 1800000, healthcare: 800000, finance: 4200000, manufacturing: 900000, retail: 1200000 },
//         hr: { technology: 1200000, healthcare: 1100000, finance: 900000, manufacturing: 800000, retail: 1400000 }
//     },
//     canada: {
//         sales: { technology: 4200000, healthcare: 2100000, finance: 3500000, manufacturing: 1800000, retail: 2500000 },
//         marketing: { technology: 3100000, healthcare: 1500000, finance: 2200000, manufacturing: 1200000, retail: 1800000 },
//         engineering: { technology: 5800000, healthcare: 900000, finance: 1200000, manufacturing: 2100000, retail: 600000 },
//         finance: { technology: 1800000, healthcare: 800000, finance: 4200000, manufacturing: 900000, retail: 1200000 },
//         hr: { technology: 1200000, healthcare: 1100000, finance: 900000, manufacturing: 800000, retail: 1400000 }
//     },
//     southAmerica: {
//         sales: { technology: 1200000, healthcare: 600000, finance: 900000, manufacturing: 500000, retail: 700000 },
//         marketing: { technology: 900000, healthcare: 400000, finance: 600000, manufacturing: 300000, retail: 500000 },
//         engineering: { technology: 1800000, healthcare: 300000, finance: 400000, manufacturing: 700000, retail: 200000 },
//         finance: { technology: 600000, healthcare: 200000, finance: 1200000, manufacturing: 300000, retail: 400000 },
//         hr: { technology: 400000, healthcare: 300000, finance: 300000, manufacturing: 200000, retail: 500000 }
//     },
//     europe: {
//         sales: { technology: 3800000, healthcare: 1800000, finance: 3000000, manufacturing: 1600000, retail: 2200000 },
//         marketing: { technology: 2800000, healthcare: 1300000, finance: 2000000, manufacturing: 1100000, retail: 1600000 },
//         engineering: { technology: 5200000, healthcare: 800000, finance: 1100000, manufacturing: 1900000, retail: 500000 },
//         finance: { technology: 1600000, healthcare: 700000, finance: 3800000, manufacturing: 800000, retail: 1100000 },
//         hr: { technology: 1100000, healthcare: 1000000, finance: 800000, manufacturing: 700000, retail: 1200000 }
//     },
//     asia: {
//         sales: { technology: 4800000, healthcare: 2400000, finance: 4000000, manufacturing: 2100000, retail: 2900000 },
//         marketing: { technology: 3600000, healthcare: 1700000, finance: 2700000, manufacturing: 1500000, retail: 2200000 },
//         engineering: { technology: 6800000, healthcare: 1100000, finance: 1500000, manufacturing: 2600000, retail: 700000 },
//         finance: { technology: 2100000, healthcare: 900000, finance: 4800000, manufacturing: 1000000, retail: 1400000 },
//         hr: { technology: 1400000, healthcare: 1300000, finance: 1000000, manufacturing: 900000, retail: 1600000 }
//     },
//     africa: {
//         sales: { technology: 900000, healthcare: 450000, finance: 750000, manufacturing: 400000, retail: 550000 },
//         marketing: { technology: 700000, healthcare: 300000, finance: 500000, manufacturing: 250000, retail: 400000 },
//         engineering: { technology: 1300000, healthcare: 200000, finance: 300000, manufacturing: 500000, retail: 150000 },
//         finance: { technology: 400000, healthcare: 150000, finance: 900000, manufacturing: 200000, retail: 250000 },
//         hr: { technology: 300000, healthcare: 250000, finance: 200000, manufacturing: 150000, retail: 350000 }
//     },
//     oceania: {
//         sales: { technology: 600000, healthcare: 300000, finance: 500000, manufacturing: 250000, retail: 350000 },
//         marketing: { technology: 450000, healthcare: 200000, finance: 350000, manufacturing: 180000, retail: 270000 },
//         engineering: { technology: 850000, healthcare: 130000, finance: 180000, manufacturing: 320000, retail: 90000 },
//         finance: { technology: 270000, healthcare: 110000, finance: 600000, manufacturing: 130000, retail: 180000 },
//         hr: { technology: 180000, healthcare: 160000, finance: 130000, manufacturing: 110000, retail: 200000 }
//     }
// };

// export default function GlobalReach() {
//     const [selectedContinent, setSelectedContinent] = useState<GeographyType>('');
//     const [subscriberCount, setSubscriberCount] = useState<number | null>(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const [tableData, setTableData] = useState<any>(null);
//     const mapInitialized = useRef(false);
//     const mapInstance = useRef<any>(null);
//     const allCountries = useRef<string[]>([]);

//     useEffect(() => {
//         // Expose jQuery globally
//         (window as any).jQuery = $;
//         (window as any).$ = $;

//         // Only initialize the map once
//         if (!mapInitialized.current) {
//             // Dynamically import jqvmap only in the browser
//             import("jqvmap/dist/jquery.vmap.min.js").then(() => {
//                 import("jqvmap/dist/maps/jquery.vmap.world.js").then(() => {
//                     mapInstance.current = ($("#vmap") as any).vectorMap({
//                         map: "world_en",
//                         backgroundColor: "transparent",
//                         borderColor: "#818181",
//                         borderOpacity: 0.25,
//                         borderWidth: 1,
//                         color: "#333344",
//                         enableZoom: true,
//                         hoverColor: "#49f6ffff",
//                          // Initial color for Algeria to avoid error

//                         normalizeFunction: "linear",
//                         showTooltip: false, // We'll handle tooltips ourselves

//                         onRegionClick: (event: any, code: string) => {
//                             handleContinentClick(code);
//                             // if (mapInstance.current && continentCountries.africa.includes(code)) {
//                             //     mapInstance.current = ($("#vmap") as any).vectorMap({
//                             //          colors: { 'dz': '#00ff00' },
                                    
//                             //         })
                                
//                             // }
//                         },
//                         onRegionOver: (event: any, code: string) => {
//                             highlightContinent(code);
//                         },
//                         onRegionOut: (event: any, code: string) => {
//                             resetHighlight();
//                         },
//                         onLoad: function (event: any, map: any) {
//                             // Store all country codes when map is loaded
//                             allCountries.current = Object.keys(map);
//                             // Set initial colors for all continents
//                             setInitialMapColors();
//                         }
//                     });
//                     mapInitialized.current = true;
//                 });
//             });
//         }

//         return () => {
//             // Clean up the map when component unmounts
//             if (mapInstance.current) {
//                 try {
//                     mapInstance.current.remove();
//                 } catch (e) {
//                     console.log("Error removing map:", e);
//                 }
//             }
//         };
//     }, []);

//     const setInitialMapColors = () => {
//         if (!mapInstance.current) return;

//         const colors: Record<string, string> = {};

//         // Set all countries to their continent colors
//         Object.entries(continentCountries).forEach(([continent, countries]) => {
//             countries.forEach(code => {
//                 if (allCountries.current.includes(code)) {
//                     colors[code] = mockData[continent as keyof typeof mockData].color;
//                 }
//             });
//         });

//         // Set any remaining countries to default color
//         allCountries.current.forEach(countryCode => {
//             if (!colors[countryCode]) {
//                 colors[countryCode] = "#333344";
//             }
//         });

//         mapInstance.current.setColors(colors);
//     };

//     const highlightContinent = (countryCode: string) => {
//         if (!mapInstance.current || selectedContinent) return;

//         // Find which continent this country belongs to
//         let continent: GeographyType = '';
//         for (const [cont, countries] of Object.entries(continentCountries)) {
//             if (countries.includes(countryCode)) {
//                 continent = cont as GeographyType;
//                 break;
//             }
//         }

//         if (!continent) return;

//         const colors: Record<string, string> = {};
//         const hoverColor = "#49f6ffff";

//         // Set all countries to their base colors
//         Object.entries(continentCountries).forEach(([cont, countries]) => {
//             countries.forEach(code => {
//                 if (allCountries.current.includes(code)) {
//                     colors[code] = mockData[cont as keyof typeof mockData].color;
//                 }
//             });
//         });

//         // Highlight the hovered continent
//         continentCountries[continent].forEach(code => {
//             if (allCountries.current.includes(code)) {
//                 colors[code] = hoverColor;
//             }
//         });

//         // Set any remaining countries to default color
//         allCountries.current.forEach(countryCode => {
//             if (!colors[countryCode]) {
//                 colors[countryCode] = "#333344";
//             }
//         });

//         mapInstance.current.setColors(colors);
//     };

//     const resetHighlight = () => {
//         if (!mapInstance.current || selectedContinent) return;
//         setInitialMapColors();
//     };

//     const handleContinentClick = (countryCode: string) => {
//         // Find which continent this country belongs to
//         let continent: GeographyType = '';
//         for (const [cont, countries] of Object.entries(continentCountries)) {
//             if (countries.includes(countryCode)) {
//                 continent = cont as GeographyType;
//                 break;
//             }
//         }

//         if (!continent) return;

//         setIsLoading(true);
//         setSelectedContinent(continent);

//         // Simulate API call with timeout
//         setTimeout(() => {
//             if (continent && mapInstance.current) {
//                 // Highlight selected continent
//                 const colors: Record<string, string> = {};

//                 // Set all countries to a dim color initially
//                 allCountries.current.forEach(countryCode => {
//                     colors[countryCode] = "#333344"; // Dim color for all countries
//                 });

//                 // Highlight the selected continent with its specific color
//                 const countries = continentCountries[continent];
//                 countries.forEach(code => {
//                     if (allCountries.current.includes(code)) {
//                         colors[code] = mockData[continent as keyof typeof mockData].color;
//                     }
//                 });

//                 // Update the map colors
//                 mapInstance.current.setColors(colors);
//                 setSubscriberCount(mockData[continent as keyof typeof mockData].count);

//                 // Set table data for the selected continent
//                 setTableData(mockTableData[continent as keyof typeof mockTableData]);
//             }

//             setIsLoading(false);
//         }, 800);
//     };

//     const handleReset = () => {
//         setSelectedContinent('');
//         setSubscriberCount(null);
//         setTableData(null);

//         // Reset map to show all regions with their continent colors
//         setInitialMapColors();
//     };

//     // Format continent name for display
//     const formatContinentName = (continent: string) => {
//         return continent.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
//     };

//     return (
//         <>
//             <Navbar />

//             <section
//                 className="p-6 md:p-12"
//                 style={{
//                     backgroundImage: "url('/backgrounds/GALAXY 5.png')",
//                     backgroundSize: 'cover',
//                 }}
//             >
//                 <div className="p-6 md:p-12 flex-col inset-0 bg-opacity-50 flex items-center justify-center z-10">
//                     <div className="text-center p-4 md:p-6 px-4 text-white max-w-4xl">
//                         <h1 className="text-4xl md:text-6xl text-[#7852A9] font-semibold brandColor">
//                             GLOBAL REACH
//                         </h1>
//                         <p className="text-lg md:text-2xl mx-auto max-w-1xl">
//                             Designed to convert signal into sales momentum.
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             <section className='bg-black px-6 md:px-12 py-12 md:py-24 text-white flex items-center justify-center'>
//                 <div className="w-full max-w-full md:max-w-[75%] mx-auto text-center">
//                     <h1 className="text-2xl md:text-3xl font-bold text-[#7852A9]">
//                         BUILD PIPELINE WHERE YOUR BUYERS ARE
//                     </h1>
//                     <p className="text-lg md:text-2xl mt-4">
//                         Tap into over 62 million verified global subscribers — all ethically sourced, privacy-compliant, and aligned to your ICP.
//                     </p>
//                 </div>
//             </section>

//             <section className="px-6 md:px-12 pb-16">
//                 <div className="w-full max-w-full md:max-w-[75%] mx-auto flex flex-col items-center justify-center my-6 md:my-12">
//                     <h1 className="text-center text-2xl md:text-3xl text-white">
//                         EXPLORE OUR GLOBAL REACH
//                     </h1>
//                     <p className="text-white mt-2 text-center">
//                         Click on a continent to see detailed subscriber data
//                     </p>
//                 </div>
//                 <div className='flex flex-col md:flex-row gap-4 px-4 md:px-12'>
//                     <div className="md:w-1/3 w-full bg-white text-black p-4 md:p-8 flex flex-col items-center justify-center">
//                         {selectedContinent ? (
//                             <>
//                                 <h2 className="text-xl font-bold mb-4 text-center">
//                                     {formatContinentName(selectedContinent)}
//                                 </h2>
//                                 {subscriberCount !== null && (
//                                     <div className="mb-6 p-4 bg-[#7852A9] text-white text-center w-full">
//                                         <p className="text-3xl mt-2">{subscriberCount.toLocaleString()}</p>
//                                         <p className="text-sm mt-2">verified contacts</p>
//                                     </div>
//                                 )}
//                                 {tableData && (
//                                     <div className="w-full overflow-auto">
//                                         <table className="w-full text-sm">
//                                             <thead>
//                                                 <tr className="bg-gray-200">
//                                                     <th className="p-2 border">Job Function</th>
//                                                     <th className="p-2 border">Technology</th>
//                                                     <th className="p-2 border">Healthcare</th>
//                                                     <th className="p-2 border">Finance</th>
//                                                     <th className="p-2 border">Manufacturing</th>
//                                                     <th className="p-2 border">Retail</th>
//                                                 </tr>
//                                             </thead>
//                                             <tbody>
//                                                 {Object.entries(tableData).map(([jobFunc, industries]: [string, any]) => (
//                                                     <tr key={jobFunc}>
//                                                         <td className="p-2 border font-medium">{jobFunc.charAt(0).toUpperCase() + jobFunc.slice(1)}</td>
//                                                         <td className="p-2 border">{industries.technology.toLocaleString()}</td>
//                                                         <td className="p-2 border">{industries.healthcare.toLocaleString()}</td>
//                                                         <td className="p-2 border">{industries.finance.toLocaleString()}</td>
//                                                         <td className="p-2 border">{industries.manufacturing.toLocaleString()}</td>
//                                                         <td className="p-2 border">{industries.retail.toLocaleString()}</td>
//                                                     </tr>
//                                                 ))}
//                                             </tbody>
//                                         </table>
//                                     </div>
//                                 )}
//                                 <button
//                                     onClick={handleReset}
//                                     className="mt-6 brand-button text-white text-sm md:text-base px-4 py-2 bg-[#7852A9] hover:bg-[#5E3E84] transition-colors"
//                                 >
//                                     BACK TO MAP
//                                 </button>
//                             </>
//                         ) : (
//                             <>
//                                 <p className='mb-4 text-center text-sm md:text-base'>
//                                     Click on any continent to see detailed subscriber data by job function and industry
//                                 </p>
//                                 <div className="p-4 bg-gray-100 text-center w-full mt-4">
//                                     <p className="text-sm">Total Global Subscribers</p>
//                                     <p className="text-2xl font-bold text-[#7852A9]">62,000,000</p>
//                                 </div>
//                             </>
//                         )}
//                     </div>
//                     <div className="md:w-2/3 w-full text-black p-4 flex items-center justify-center min-h-[400px] rounded-lg relative">
//                         <div id="vmap" style={{ width: "100%", height: "500px" }} />
//                         {isLoading && (
//                             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
//                                 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </section>

//             <section className="bg-black p-6 md:p-12 flex flex-col items-center justify-center min-h-screen" style={{
//                 backgroundImage: "url('/backgrounds/GALAXY 6.png')",
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//             }}>
//                 <div className="w-full max-w-full  mx-auto flex flex-col items-center justify-center">
//                     <div className="text-center">
//                         <h1 className="text-2xl md:text-4xl font-bold text-[#7852A9]">
//                             THE FOUNDATION — FIRST-PARTY BY DESIGN
//                         </h1>
//                         <h2 className="text-xl md:text-2xl mt-2 md:mt-4 text-white">
//                             100% FIRST-PARTY, ZERO COMPROMISES.
//                         </h2>
//                         <p className="text-sm md:text-base mt-4 md:mt-6 text-white max-w-3xl mx-auto px-4 md:px-0">
//                             Every contact in our ecosystem is opt-in, verified, and refreshed continuously. That means no third-party guesswork, no data resellers – just compliant, accurate, and active buyers.
//                         </p>
//                     </div>

//                     <div className="my-6 md:my-12 text-center">
//                         <h3 className="text-lg md:text-2xl text-white">KEY VALUES:</h3>
//                     </div>

//                     <div className="grid grid-cols-2 gap-4 md:flex md:flex-row w-full justify-center items-center px-2 md:px-6">
//                         {[
//                             {
//                                 img: "/backgrounds/r2.png",
//                                 title: "62M+",
//                                 subtitle: "GLOBAL SUBSCRIBERS"
//                             },
//                             {
//                                 img: "/backgrounds/r3.png",
//                                 title: "GDPR, CASL, CCPA",
//                                 subtitle: "COMPLIANT"
//                             },
//                             {
//                                 img: "/backgrounds/r4.png",
//                                 content: "FULLY TRANSPARENT SOURCING & ENGAGEMENT"
//                             },
//                             {
//                                 img: "/backgrounds/r1.png",
//                                 content: "REAL-TIME ENRICHMENT AND SIGNAL-MATCHING VIA DEMANDFUSION"
//                             }
//                         ].map((card, index) => (
//                             <div
//                                 key={index}
//                                 className="relative rounded-full w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 flex-shrink-0 flex items-center justify-center mx-2"
//                             >
//                                 <img
//                                     src={card.img}
//                                     alt=""
//                                     className="absolute w-full h-full object-cover"
//                                 />
//                                 <div className="relative z-10 text-center p-2 md:p-4 bg-opacity-40 rounded-full w-full h-full flex flex-col items-center justify-center">
//                                     {card.title && (
//                                         <h2 className="text-lg md:text-2xl lg:text-3xl mb-1 font-bold text-white px-1 md:px-2">
//                                             {card.title}
//                                         </h2>
//                                     )}
//                                     {card.subtitle ? (
//                                         <p className="text-[10px] md:text-xs uppercase tracking-wider text-white px-1">
//                                             {card.subtitle}
//                                         </p>
//                                     ) : (
//                                         <p className="text-[10px] md:text-xs uppercase tracking-wider text-white px-1">
//                                             {card.content}
//                                         </p>
//                                     )}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="mt-12 md:mt-16 w-full">
//                         <div className="grid grid-cols-3 gap-4 md:flex md:flex-row justify-center items-center">
//                             {['Inc Power', 'ISO', 'gdpr', 'ccpa', 'casl', 'canspam'].map((num) => (
//                                 <div key={num} className="rounded-lg shadow-md p-3 md:p-4 flex items-center justify-center mx-1 md:mx-3">
//                                     <img
//                                         src={`/logos/${num}.png`}
//                                         alt={`${num} logo`}
//                                         className="w-full h-auto max-h-16 md:max-h-30 object-contain"
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className='bg-black p-6 md:p-12 text-white border-solid border-[#7852A9] border-b-8 md:border-b-20 border-t-8 md:border-t-20'>
//                 <div className='flex flex-col md:flex-row px-4 md:px-12'>
//                     <div className="md:w-1/3 w-full text-white py-6 md:py-12 flex flex-col">
//                         <div className='mb-4 md:mb-6'>
//                             <h2 className="text-xl md:text-3xl font-bold text-[#7852A9]">GLOBAL BY NATURE,</h2>
//                             <h2 className="text-xl md:text-3xl font-bold">LOCAL BY SIGNAL</h2>
//                         </div>
//                         <div className='mb-4 md:mb-6'>
//                             <h2 className="text-xl md:text-3xl font-bold">A WORLD OF REACH.</h2>
//                             <h2 className="text-xl md:text-3xl font-bold">A SIGNAL-LED APPROACH.</h2>
//                         </div>
//                         <p className='py-3 md:py-6 text-sm md:text-base md:text-xl'>From North America to APAC, we activate global programs with local intelligence and compliance baked in.</p>
//                         <h1 className='py-3 md:py-6 text-lg md:text-3xl'>TOP PERFORMING GEOS:</h1>
//                         <ul className="list-disc list-inside pl-2 md:pl-4 grid grid-cols-2 gap-1">
//                             <li className='text-xl'>United States</li>
//                             <li className='text-xl'>Canada</li>
//                             <li className='text-xl'>United Kingdom</li>
//                             <li className='text-xl'>Germany</li>
//                             <li className='text-xl'>France</li>
//                             <li className='text-xl'>Nordics</li>
//                             <li className='text-xl'>APAC</li>
//                         </ul>
//                     </div>
//                     <div className="md:w-2/3 w-full text-black p-4 md:p-8 flex items-center justify-center">
//                         <img src="/map.png" alt="World map" className="w-full h-auto" />
//                     </div>
//                 </div>
//             </section>

//             <section className='p-6 md:p-12' style={{
//                 backgroundImage: "url('/backgrounds/GALAXY 3.png')",
//                 backgroundSize: 'cover',
//             }}>
//                 <div className='flex flex-col gap-6 md:gap-12 md:flex-row px-1 md:px-12 m-2 md:m-3'>
//                     <div style={{
//                         backgroundColor: 'rgba(0, 0, 0, 0.7)',
//                     }} className="w-full  text-white p-4 md:p-12 flex flex-col border-solid border-[rgba(255,255,255,0.6)] border rounded-xl md:rounded-2xl">
//                         <h1 className="text-center text-xl md:text-4xl mt-2 font-bold text-[#7852A9]">
//                             THE PEOPLE BEHIND THE DATA
//                         </h1>
//                         <h1 className="text-center text-lg md:text-2xl mt-2 text-white">
//                             WE DON'T JUST REACH PEOPLE. <br />
//                             WE REACH THE RIGHT PEOPLE.
//                         </h1>
//                         <p className="text-center text-sm md:text-base mt-2 text-white p-3 md:p-6">
//                             From global CIOs to regional HR leaders, our reach spans every major job function driving SMB to enterprise decision-making.
//                         </p>
//                         <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-4 md:mt-8">
//                             {[
//                                 { icon: "/icons/it.png", title: "Information Technology" },
//                                 { icon: "/icons/marketing.png", title: "Marketing" },
//                                 { icon: "/icons/finance.png", title: "Finance" },
//                                 { icon: "/icons/hr.png", title: "Human Resources" },
//                                 { icon: "/icons/Operations.png", title: "Operations" },
//                                 { icon: "/icons/sales.png", title: "Sales" }
//                             ].map((item, index) => (
//                                 <div key={index} className="flex flex-col items-center rounded-lg p-2 md:p-4 shadow-md">
//                                     <img src={item.icon} alt={item.title} className=" object-contain mb-1 md:mb-2" />
//                                     <h3 className="font-bold text-xs md:text-sm text-center">{item.title}</h3>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div style={{
//                         backgroundColor: 'rgba(0, 0, 0, 0.7)',
//                     }} className="w-full text-white p-4 md:p-12 flex flex-col border-solid border-[rgba(255,255,255,0.6)] border rounded-xl md:rounded-2xl">
//                         <h1 className="text-center text-xl md:text-4xl mt-2 font-bold text-[#7852A9]">
//                             INDUSTRY PENETRATION
//                         </h1>
//                         <h1 className="text-center text-lg md:text-2xl mt-2 text-white">
//                             BUILT TO SERVE KEY VERTICALS
//                         </h1>
//                         <p className="text-center text-sm md:text-base mt-2 p-3 md:p-6 text-white">
//                             We focus on industries where complexity meets opportunity—enabling scalable programs for the companies shaping tomorrow.
//                         </p>
//                         <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-4 md:mt-8">
//                             {[
//                                 { icon: "/icons/healthcare.png", title: "Healthcare" },
//                                 { icon: "/icons/manufacturing.png", title: "Manufacturing" },
//                                 { icon: "/icons/financial services.png", title: "Financial Services" },
//                                 { icon: "/icons/retail.png", title: "Retail" },
//                                 { icon: "/icons/technology.png", title: "Technology" }
//                             ].map((item, index) => (
//                                 <div key={index} className="flex flex-col items-center rounded-lg p-2 md:p-4 shadow-md">
//                                     <img src={item.icon} alt={item.title} className="w object-contain mb-1 md:mb-2" />
//                                     <h3 className="font-bold text-xs md:text-sm text-center">{item.title}</h3>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//                 <div className="w-full max-w-full md:max-w-[75%] mx-auto flex flex-col items-center justify-center p-6 md:p-12">
//                     <h1 className="text-center text-xl md:text-3xl mt-2 font-bold text-[#7852A9]">
//                         KNOW YOUR ICP. WE'LL MATCH THE SIGNAL. <span className="text-white">ANYWHERE</span>
//                     </h1>
//                     <p className="text-center text-lg md:text-2xl mt-2 text-white">
//                         Build geo-aligned, function-targeted, industry-specific demand – globally.
//                     </p>
//                     <div className="gap-3 md:gap-4 flex flex-col md:flex-row items-center justify-between mt-4 md:mt-6 w-full md:w-auto">
//                         <a href='/RequestProposal' className="brand-button text-white w-full md:w-auto">REQUEST A PROPOSAL</a>
//                         <a href='/Contact' className="brand-button text-white w-full md:w-auto">TALK TO A TARGETING SPECIALIST</a>
//                     </div>
//                 </div>
//             </section>
//             <Footer />
//         </>
//     )
// }