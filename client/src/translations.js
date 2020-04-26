const translations = {
    "Beneficiary": {
        "EN": "Beneficiary",
        "FR": "Bénéficiaire",
        "RU": "бенефициар",
        "DE": "Begünstigter"
    },
    "Bank details": {
        "EN": "Bank details",
        "FR": "coordonnées bancaires",
        "RU": "Банковские реквизиты",
        "DE": "Bankdaten"
    },
    "Address": {
        "EN": "Address",
        "FR": "Adresse",
        "RU": "Адрес",
        "DE": "Adresse"
    },
    "Country": {
        "EN": "Address",
        "FR": "Pays",
        "RU": "Страна",
        "DE": "Land"
    },
    "Currency": {
        "EN": "Currency",
        "FR": "Devise",
        "RU": "валюта",
        "DE": "Währung"
    },
    "Account Number": {
        "EN": "Account Number",
        "FR": "Numéro de compte",
        "RU": "Номер аккаунта",
        "DE": "Accountnummer"
    },
    "Personal": {
        "EN": "Personal",
        "FR": "Personnel",
        "RU": "Бизнес",
        "DE": "persönlich"
    },
    "Business": {
        "EN": "Business",
        "FR": "Affaires",
        "RU": "Бизнес",
        "DE": "Geschäft"
    },
    "First Name": {
        "EN": "Personal",
        "FR": "Prénom",
        "RU": "Имя",
        "DE": "Vorname"
    },
    "Last Name": {
        "EN": "Last Name",
        "FR": "Nom de famille",
        "RU": "Фамилия",
        "DE": "Nachname"
    },
    "Email": {
        "EN": "Email",
        "FR": "Email",
        "RU": "Электронное письмо",
        "DE": "Email"
    },
    "Phone Number": {
        "EN": "Phone Number",
        "FR": "Numéro de téléphone",
        "RU": "Номер телефона",
        "DE": "Telefonnummer"
    },
    "Next": {
        "EN": "Next",
        "FR": "Prochain",
        "RU": "следующий",
        "DE": "Nächster"
    },
    "Previous": {
        "EN": "Previous",
        "FR": "précédent",
        "RU": "предыдущий",
        "DE": "Bisherige"
    },
    "Business Name": {
        "EN": "Business Name",
        "FR": "Nom de l'entreprise",
        "RU": "Наименование фирмы",
        "DE": "Business Name"
    },
    "City": {
        "EN": "City",
        "FR": "Ville",
        "RU": "город",
        "DE": "Stadt"
    },
    "Post Code": {
        "EN": "Post Code",
        "FR": "code postal",
        "RU": "Почтовый индекс",
        "DE": "Postleitzahl"
    },
    "Address": {
        "EN": "Address",
        "FR": "Adresse",
        "RU": "Адрес",
        "DE": "Adresse"
    },
    "Submit": {
        "EN": "Submit",
        "FR": "Soumettre",
        "RU": "Разместить",
        "DE": "einreichen"
    }
}

export const languages = ["EN", "FR", "RU", "DE"]

export const translate = (word, language) => {
    return translations[word][language]
}