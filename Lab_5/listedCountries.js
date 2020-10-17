// (2) Using JS, inject an ordered list into the div with the class "content"

// holds country codes
var countryCodeList = ["AF",	"AX",	"AL",	"DZ",	"AS",	
"AD",	"AO",	"AI",	"AQ",	"AG",	"AR",	"AM",	"AW",	
"AU",	"AT",	"AZ",	"BS",	"BH",	"BD",	"BB",	"BY",	
"BE",	"BZ",	"BJ",	"BM",	"BT",	"BO",	"BQ",	"BA",	
"BW",	"BV",	"BR",	"IO",	"BN",	"BG",	"BF",	"BI",	
"CV",	"KH",	"CM",	"CA",	"KY",	"CF",	"TD",	"CL",	
"CN",	"CX",	"CC",	"CO",	"KM",	"CG",	"CD",	"CK",	
"CR",	"CI",	"HR",	"CU",	"CW",	"CY",	"CZ",	"DK",	
"DJ",	"DM",	"DO",	"EC",	"EG",	"SV",	"GQ",	"ER",	
"EE",	"SZ",	"ET",	"FK",	"FO",	"FJ",	"FI",	"FR",	
"GF",	"PF",	"TF",	"GA",	"GM",	"GE",	"DE",	"GH",	
"GI",	"GR",	"GL",	"GD",	"GP",	"GU",	"GT",	"GG",	
"GN",	"GW",	"GY",	"HT",	"HM",	"VA",	"HN",	"HK",	
"HU",	"IS",	"IN",	"ID",	"IR",	"IQ",	"IE",	"IM",	
"IL",	"IT",	"JM",	"JP",	"JE",	"JO",	"KZ",	"KE",	
"KI",	"KP",	"KR",	"KW",	"KG",	"LA",	"LV",	"LB",	
"LS",	"LR",	"LY",	"LI",	"LT",	"LU",	"MO",	"MG",	
"MW",	"MY",	"MV",	"ML",	"MT",	"MH",	"MQ",	"MR",	
"MU",	"YT",	"MX",	"FM",	"MD",	"MC",	"MN",	"ME",	
"MS",	"MA",	"MZ",	"MM",	"NA",	"NR",	"NP",	"NL",	
"NC",	"NZ",	"NI",	"NE",	"NG",	"NU",	"NF",	"MK",	
"MP",	"NO",	"OM",	"PK",	"PW",	"PS",	"PA",	"PG",	
"PY",	"PE",	"PH",	"PN",	"PL",	"PT",	"PR",	"QA",	
"RE",	"RO",	"RU",	"RW",	"BL",	"SH",	"KN",	"LC",	
"MF",	"PM",	"VC",	"WS",	"SM",	"ST",	"SA",	"SN",	
"RS",	"SC",	"SL",	"SG",	"SX",	"SK",	"SI",	"SB",	
"SO",	"ZA",	"GS",	"SS",	"ES",	"LK",	"SD",	"SR",	
"SJ",	"SE",	"CH",	"SY",	"TW",	"TJ",	"TZ",	"TH",	
"TL",	"TG",	"TK",	"TO",	"TT",	"TN",	"TR",	"TM",	
"TC",	"TV",	"UG",	"UA",	"AE",	"GB",	"US",	"UM",	
"UY",	"UZ",	"VU",	"VE",	"VN",	"VG",	"VI",	"WF",
"EH",	"YE",	"ZM",	"ZW"];

// holds country names
var countryNameList = ["Afghanistan",	"Ã…land Islands",	"Albania",	"Algeria",	"American Samoa",	
"Andorra",	"Angola",	"Anguilla",	"Antarctica",	"Antigua and Barbuda",	"Argentina",	"Armenia",	
"Aruba",	"Australia",	"Austria",	"Azerbaijan",	"Bahamas",	"Bahrain",	"Bangladesh",	"Barbados",	
"Belarus",	"Belgium",	"Belize",	"Benin",	"Bermuda",	"Bhutan",	"Bolivia (Plurinational State of)",	
"Bonaire, Sint Eustatius and Saba",	"Bosnia and Herzegovina",	"Botswana",	"Bouvet Island",	"Brazil",	
"British Indian Ocean Territory",	"Brunei Darussalam",	"Bulgaria",	"Burkina Faso",	"Burundi",	"Cabo Verde",	
"Cambodia",	"Cameroon",	"Canada",	"Cayman Islands",	"Central African Republic",	"Chad",	"Chile",	"China",	
"Christmas Island",	"Cocos (Keeling) Islands",	"Colombia",	"Comoros",	"Congo",	"Congo, Democratic Republic of the",	
"Cook Islands",	"Costa Rica",	"CÃ´te d'Ivoire",	"Croatia",	"Cuba",	"CuraÃ§ao",	"Cyprus",	"Czechia",	"Denmark",	
"Djibouti",	"Dominica",	"Dominican Republic",	"Ecuador",	"Egypt",	"El Salvador",	"Equatorial Guinea",	
"Eritrea",	"Estonia",	"Eswatini",	"Ethiopia",	"Falkland Islands (Malvinas)",	"Faroe Islands",	"Fiji",	
"Finland",	"France",	"French Guiana",	"French Polynesia",	"French Southern Territories",	"Gabon",	
"Gambia",	"Georgia",	"Germany",	"Ghana",	"Gibraltar",	"Greece",	"Greenland",	"Grenada",	
"Guadeloupe",	"Guam",	"Guatemala",	"Guernsey",	"Guinea",	"Guinea-Bissau",	"Guyana",	"Haiti",	
"Heard Island and McDonald Islands",	"Holy See",	"Honduras",	"Hong Kong",	"Hungary",	"Iceland",	"India",	
"Indonesia",	"Iran (Islamic Republic of)",	"Iraq",	"Ireland",	"Isle of Man",	"Israel",	"Italy",	
"Jamaica",	"Japan",	"Jersey",	"Jordan",	"Kazakhstan",	"Kenya",	"Kiribati",	
"Korea (Democratic People's Republic of)",	"Korea, Republic of",	"Kuwait",	"Kyrgyzstan",	
"Lao People's Democratic Republic",	"Latvia",	"Lebanon",	"Lesotho",	"Liberia",	"Libya",	
"Liechtenstein",	"Lithuania",	"Luxembourg",	"Macao",	"Madagascar",	"Malawi",	"Malaysia",	"Maldives",	"Mali",	"Malta",	
"Marshall Islands",	"Martinique",	"Mauritania",	"Mauritius",	"Mayotte",	"Mexico",	"Micronesia (Federated States of)",	
"Moldova, Republic of",	"Monaco",	"Mongolia",	"Montenegro",	"Montserrat",	"Morocco",	"Mozambique",	"Myanmar",	"Namibia",	"Nauru",	
"Nepal",	"Netherlands",	"New Caledonia",	"New Zealand",	"Nicaragua",	"Niger",	"Nigeria",	"Niue",	
"Norfolk Island",	"North Macedonia",	"Northern Mariana Islands",	"Norway",	"Oman",	"Pakistan",	"Palau",	
"Palestine, State of",	"Panama",	"Papua New Guinea",	"Paraguay",	"Peru",	"Philippines",	"Pitcairn",	"Poland",	
"Portugal",	"Puerto Rico",	"Qatar",	"RÃ©union",	"Romania",	"Russian Federation",	"Rwanda",	"Saint BarthÃ©lemy",	
"Saint Helena, Ascension and Tristan da Cunha",	"Saint Kitts and Nevis",	"Saint Lucia",	"Saint Martin (French part)",	
"Saint Pierre and Miquelon",	"Saint Vincent and the Grenadines",	"Samoa",	"San Marino",	"Sao Tome and Principe",	
"Saudi Arabia",	"Senegal",	"Serbia",	"Seychelles",	"Sierra Leone",	"Singapore",	"Sint Maarten (Dutch part)",	
"Slovakia",	"Slovenia",	"Solomon Islands",	"Somalia",	"South Africa",	"South Georgia and the South Sandwich Islands",	
"South Sudan",	"Spain",	"Sri Lanka",	"Sudan",	"Suriname",	"Svalbard and Jan Mayen",	"Sweden",	"Switzerland",	
"Syrian Arab Republic",	"Taiwan, Province of China",	"Tajikistan",	"Tanzania, United Republic of",	"Thailand",	
"Timor-Leste",	"Togo",	"Tokelau",	"Tonga",	"Trinidad and Tobago",	"Tunisia",	"Turkey",	"Turkmenistan",	
"Turks and Caicos Islands",	"Tuvalu",	"Uganda",	"Ukraine",	"United Arab Emirates",	"United Kingdom of Great Britain and Northern Ireland",	
"United States of America",	"United States Minor Outlying Islands",	"Uruguay",	"Uzbekistan",	"Vanuatu",	
"Venezuela (Bolivarian Republic of)",	"Viet Nam",	"Virgin Islands (British)",	"Virgin Islands (U.S.)",	
"Wallis and Futuna",	"Western Sahara",	"Yemen",	"Zambia",	"Zimbabwe"];

// injects an ordered list into the html
var countryList = [];
var countryListContainer = document.createElement("div");
var countryListElement   = document.createElement("ol");

// other necessary variables for the getRandomCountries function
var countryListCount     = countryList.length;
var listItem;
var randNum, usedNum = 9999999;
var x, y1, y2, z1, z2;

// variable used to store any countries display on button click
var usedCountries = [];


// (3) Give your ordered list the class "countries."
countryListElement.className = "countries";


// (4) Design the following function to run on the click of a button from the index page.
const countryButton = document.querySelector("button");


// (5) Select 25 random countries from your list by writing a separate function that makes use of Math.random.
// (6) Make sure the selection is unique.

// uses an event listener to listen for button clicks
countryButton.addEventListener('click', getRandomCountries);
function getRandomCountries()
{
    document.querySelector(".content").appendChild(countryListContainer);
    countryListContainer.appendChild(countryListElement);

    for(x = 0; x < 25; x++)
    {
        // generates a random number
        randNum = Math.floor(Math.random() * countryCodeList.length);

        // checks if random number has already been used
        // reiterate loop and output nothing if true
        if(randNum == usedNum)
        {
            continue;
        }
        else
        {
            // create the String that holds a random country's name.
            y1 = document.createElement("p1");
            y2 = document.createTextNode(countryNameList[randNum] + ", ");
            y1.appendChild(y2);
            y1.className = "country-name";

            // store that country in the list of used countries
            usedCountries += countryNameList[randNum];

            // create the String that holds that country's code.
            z1 = document.createElement("p2");
            z2 = document.createTextNode(countryCodeList[randNum]);
            z1.appendChild(z2);
            z1.className = "country-code";

            // create the list element that holds both Strings
            listItem = document.createElement("li");
            listItem.appendChild(y1);
            listItem.appendChild(z1);

            // append the list item to the country list
            countryListElement.appendChild(listItem);

            // stores randomly generated number as a used number
            usedNum = randNum;
        }
    }

    // (10) Log all unselected countries into the console.
    // create a separate array to remove used countries from
    var unusedCountries = countryNameList;

    // function returns a list of countries minus the 25 countries displayed 
    unusedCountries = unusedCountries.filter(function(c) {return !usedCountries.includes(c)});
    console.log(unusedCountries);

    // clears used countries list for next button press
    usedCountries = [];
}