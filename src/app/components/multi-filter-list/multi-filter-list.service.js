angular.module('multi-filter-list')
  .factory('multiFilterListService', function() {

    var multiFilterListService = this;

    // all filters ensure if their parameter matches
    // all filters skip, if the parameter is undefined

    function matchesAssetClassName (item, assetClassName) {
      return item.assetClass.name === assetClassName || !assetClassName; 
    }

    function matchesFundManagerName (item, fundManagerName) {
      return item.fundManagerInfo.name === fundManagerName || !fundManagerName; 
    }

    function matchesFundStructureCode (item, fundStructureCode) {
      return item.fundStructureCode === fundStructureCode || !fundStructureCode; 
    }

    function matchesCurrencyCode (item, fundCurrencyCode) {
      return item.fundCurrencyCode === fundCurrencyCode || !fundCurrencyCode;
    }

    
    /**
     * @method filterList
     * @public
     * 
     * @param {object} query
     * 
     * a filter running through all other filters. if any of the filters fails
     * the object is filtered out
     * it sets the filter array on filteredList, a public parameter that can be used
     * by the controller
     */
    multiFilterListService.filterList = function filterList(query) {

      multiFilterListService.filteredList = _
        .filter(mockDataSet, function(item) {
          return matchesAssetClassName(item, query.assetClassName) &&
            matchesFundManagerName(item, query.fundManagerName) &&
            matchesFundStructureCode(item, query.fundStructureCode) &&
            matchesCurrencyCode(item, query.fundCurrencyCode);
        });

      //    this is the type of code we'd use if we wanted to also sort the array 
      //    without using angular 
      //multiFilterListService.filteredList = _
      //  .sortByOrder(
      //    multiFilterListService.filteredList,  
      //    ['fundManagerInfo.code', 'desc']
      //  );

    };

    // a hard coded data set
    // should be loaded from the server and kept in a better place
    var mockDataSet = [{
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
    }];

    // getting a default list with no filter parameters
    multiFilterListService.filterList({});

    // "exporting" the service
    return multiFilterListService;

  });


