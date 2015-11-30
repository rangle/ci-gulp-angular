'use strict';

describe('Service:multiFilterList', function () {
  var multiFilterListService;

  beforeEach(module('multi-filter-list'));
  beforeEach(inject(function (_multiFilterListService_) {
    multiFilterListService = _multiFilterListService_;
  }));

  it('shold get instantiated', function() {
    expect(multiFilterListService).to.be.an('Object');
  });

  it('should expose a filteredList Array property', function () {
    expect(multiFilterListService.filteredList).to.be.an('Array');
  });

  it('should have as many items as the mockDataSet by default', function () {
    var numberOfItemsInMockDataSet = 3;
    expect(multiFilterListService.filteredList.length).to.equal(numberOfItemsInMockDataSet);
  });

  context('#filterList', function () {

    it('when asset class name is "US Equity" ' +
       'then the list should contain only objects with assetClass.name = "US Equity"', 
        function () {
      multiFilterListService.filterList({ 
        assetClassName: 'US Equity'
      });
      expect(multiFilterListService.filteredList).to.be.an('Array');
      expect(multiFilterListService.filteredList.length).to.equal(1);
      expect(multiFilterListService.filteredList[0].assetClass.name).to.equal('US Equity');
    });

    it('when asset class name is "CA Equity" ' +
       'and fund Manager name is "Tetrem" ' +
       'then the list should contain only objects with assetClass.name === "CA Equity"' +
       'and fundManagerInfo.name === "Tetrem"', 
        function () {
      multiFilterListService.filterList({ 
        assetClassName: 'CA Equity',
        fundManagerName: 'Tetrem'
      });
      expect(multiFilterListService.filteredList).to.be.an('Array');
      expect(multiFilterListService.filteredList.length).to.equal(1);
      expect(multiFilterListService.filteredList[0].assetClass.name).to.equal('CA Equity');
      expect(multiFilterListService.filteredList[0].fundManagerInfo.name).to.equal('Tetrem');
    });

    it('when non matching data is passed, the filteredList array should be empty', function() {
      multiFilterListService.filterList({ 
        assetClassName: 'CA Equity',
        fundManagerName: 'Tetrem',
        fundStructureCode: 'SEG',
        fundCurrencyCode: 'EUR'
      });
      expect(multiFilterListService.filteredList).to.be.an('Array');
      expect(multiFilterListService.filteredList.length).to.equal(0);
    });

    it('should work with all 4 filters', function () {
      multiFilterListService.filterList({ 
        assetClassName: 'EU Equity',
        fundManagerName: 'Hans',
        fundStructureCode: 'SEG',
        fundCurrencyCode: 'EUR'
      });
      expect(multiFilterListService.filteredList.length).to.equal(1);
      expect(multiFilterListService.filteredList[0].assetClass.name).to.equal('EU Equity');
      expect(multiFilterListService.filteredList[0].fundManagerInfo.name).to.equal('Hans');
    });

});

});
