import "./sales.css";

import { useEffect, useState, Fragment } from "react";
import clone from "lodash.clone";

import LargeIndeterminateLoader from "../../common-components/loaders/large-indeterminate-loader";

import { URL_DASHBOARD_SALES } from '../../commons/end-points';
import useApi from '../../commons/api-wrapper/use-api';
import SalesFilters from "./sales-filters";
import SalesInformation from "./sales-information";
import SalesTopPerformers from "./sales-top-performers";

import { getHighestSalesDetails } from "./sales-utils";

const salesApiOptions = {
  method: "GET",
  url: URL_DASHBOARD_SALES
};


const Sales = () => {
    const [salesData, fetchSalesData] = useApi(salesApiOptions);
    const { data, error, isLoading } = salesData;
    const [filteredData, setFilteredData] = useState([]);
    const highestSaleThreshold = 800;

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    const reloadData = () => {
        const forceReload = clone(salesApiOptions)
        forceReload.isForceReload = true;
        fetchSalesData(forceReload);
    };

    const salesTopPerformers = getHighestSalesDetails(data, highestSaleThreshold);

    return (
        <div className="sales-container container spark-center-block--lte-lg">
            <Fragment>
                <LargeIndeterminateLoader
                    isLoading={isLoading}
                    loadingLabel="Fetching Sales Data"
                />
                <SalesFilters
                    data={data}
                    filterResultsOnClickHandler={setFilteredData}
                />
                <SalesInformation
                    filteredData={filteredData}
                    refreshDataHandler={reloadData}
                />
                <SalesTopPerformers
                    highestSaleThreshold={highestSaleThreshold}
                    salesTopPerformers={salesTopPerformers}
                />
            </Fragment>
        </div>
    );
}

Sales.propTypes = {
    
};

export default Sales;