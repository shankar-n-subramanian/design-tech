import { number, arrayOf, shape } from "prop-types";


const SalesTopPerformers = ({highestSaleThreshold, salesTopPerformers}) => {

    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="row">
                    <div className="col-xs-12"><h3 className="section-header spark-mar-t-2">Top Performers (${highestSaleThreshold}+ / month)</h3></div>
                </div>

                <div className="spark-panel spark-panel--card panel--rounded-border">
                    <div className="spark-panel__content spark-expand">
                        <div className="row">
                            <div className="col-xs-6 spark-text-left">Number of clients:</div>
                            <div className="col-xs-6 spark-text-right">{salesTopPerformers.clientsCount}</div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 spark-text-left">Average Monthly Sales:</div>
                            <div className="col-xs-6 spark-text-right">${salesTopPerformers.averageMonthlySales}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

SalesTopPerformers.prototype = {
    highestSaleThreshold: number,
    salesTopPerformers: arrayOf(shape({
        highestSalesTotal: number,
        clientsCount: number,
        average: number
    }))

};

export default SalesTopPerformers;