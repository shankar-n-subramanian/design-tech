import filter from "lodash.filter";

import { formatNumber } from "../../utils/utils"

export const getFilteredData = (data, companyName, minimumSales) => {
  return filter(data, function(eachData) {
    return companyName ? (eachData.company.toLowerCase() === companyName.toLowerCase() && eachData.sales > minimumSales) : eachData.sales >= minimumSales; 
  });
};

export const getHighestSalesDetails = (data, highestSaleThreshold) => {
  let highestSalesTotal = 0;
  let clientsCount = 0;
  data.map(eachData => {
    if(eachData.sales > highestSaleThreshold) {
      highestSalesTotal += eachData.sales;
      clientsCount++;
    }
  });

  return {
    highestSalesTotal: formatNumber(highestSalesTotal),
    clientsCount: formatNumber(clientsCount),
    averageMonthlySales: formatNumber(highestSalesTotal / clientsCount)
  }
};