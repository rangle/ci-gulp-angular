
angular
  .module('multi-filter-list')
  .value('mockDataSet', [{
      "code": "16001",
      "name": "CI American Managers® Corporate Class",
      "description": "American Equity Mandate",
      "fundValue": 0,
      "fundDetailLink": "http://funds.ci.com/?FC=209",
      "assetClass": {
        "code": "UEX",
        "name": "US Equity", // Canadian Equity, Income, REIT
        "description": "US Equity",
        "assetMixRate": 0
      },
      "fundManagerInfo": {
        "code": "13",
        "name": "Tetrem", // Harbour, Signature
        "description": ""
      },
      "fundCurrencyCode": "USD", // USD
      "fundStructureCode": "SEG" // MUT
    }, {
      "code": "16002",
      "name": "CI Canadian ",
      "description": "Canadian Equity Mandate",
      "fundValue": 0,
      "fundDetailLink": "http://funds.ci.com/?FC=309",
      "assetClass": {
        "code": "CEX",
        "name": "CA Equity", // Canadian Equity, Income, REIT
        "description": "CA Equity",
        "assetMixRate": 0
      },
      "fundManagerInfo": {
        "code": "15",
        "name": "Tetrem", // Harbour, Signature
        "description": ""
      },
      "fundCurrencyCode": "CDN", // USD
      "fundStructureCode": "SEG" // MUT
    }, {
      "code": "16003",
      "name": "CI European",
      "description": "European Equity Mandate",
      "fundValue": 0,
      "fundDetailLink": "http://funds.ci.com/?FC=309",
      "assetClass": {
        "code": "EEX",
        "name": "EU Equity",
        "description": "EU Equity",
        "assetMixRate": 0
      },
      "fundManagerInfo": {
        "code": "13",
        "name": "Hans", // Harbour, Signature
        "description": ""
      },
      "fundCurrencyCode": "EUR", // USD
      "fundStructureCode": "SEG" // MUT
    }]);
