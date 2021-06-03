import { useState, useEffect } from "react";
import { string, number, arrayOf, shape, func } from "prop-types";

import Pagination from "../../common-components/pagination/pagination";
import { formatNumber } from '../../utils/utils';


const SalesInformation = ({filteredData, refreshDataHandler}) => {
    const [paginatedData, setPaginatedData] = useState([]);

    let totalSales = 0;
    let pageTotalSales = 0;

    // useEffect(() => {
    //     setPaginatedData(filteredData);
    // }, [filteredData]);

    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 spark-mar-t-2">
                <div className="row">
                    <div className="col-xs-6 spark-text-left"><h3 className="section-header">Sales Data</h3></div>
                    <div className="col-xs-6 spark-text-right"><a className="section-header" onClick={refreshDataHandler}>REFRESH DATA</a></div>
                </div>

                <section className="spark-table spark-table--condensed spark-table--resizable table--rounded-border">
                    <div className="spark-table__scroll">
                        <table role="grid">
                            <thead>
                                <tr>
                                    <th className="spark-text-center">Name</th>
                                    <th className="spark-text-center">Company</th>
                                    <th className="spark-text-center">Monthly Sales</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    paginatedData.map(eachData => {
                                        pageTotalSales += eachData.sales;
                                        return (
                                            <tr key={`key-${eachData.id}`}>
                                                <td className="spark-text-left">{eachData.name}</td>
                                                <td className="spark-text-left">{eachData.company}</td>
                                                <td className="spark-text-right">{formatNumber(eachData.sales)}</td>
                                            </tr>
                                        );
                                    })
                                }
                                <tr>
                                    <td colSpan="2" className="sales-total-label">Page Sales Subtotal</td>
                                    <td className="sales-total-amount">{formatNumber(pageTotalSales)}</td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="sales-total-label">Total Sales</td>
                                    <td className="sales-total-amount">{formatNumber(totalSales)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            
                <Pagination
                    filteredData={filteredData}
                    setPaginatedDataHandler={setPaginatedData}
                />
            </div>
        </div>
    );
};

SalesInformation.prototype = {
    filteredData: arrayOf(shape(
        {
            id: number,
            name: string,
            company: string,
            sales: number
        }
    )),
    refreshDataHandler: func
};

export default SalesInformation;