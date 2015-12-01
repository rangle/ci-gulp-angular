(function() {
'use strict';


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

angular.module('multi-filter-list')
  .factory('multiFilterListService', function(mockDataSet) {

    var multiFilterListService = this;
    
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

    };

    // getting a default list with no filter parameters
    multiFilterListService.filterList({});

    // "exporting" the service
    return multiFilterListService;

  });

})();
