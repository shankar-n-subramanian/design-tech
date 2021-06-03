import { useEffect, useState } from 'react';
import { string, number, arrayOf, shape, func } from "prop-types";
import { TextInput } from "@sabre/spark/js/dist/spark";

import SliderInput from "../../common-components/slider-input/slider-input";
import { getFilteredData } from "./sales-utils";


const SalesFilters = ({data, filterResultsOnClickHandler}) => {
    const [companyName, setCompanyName] = useState("");
    const [minimumSales, setMinimumSales] = useState(0);

    useEffect(() => {
        setCompanyName("");
        setMinimumSales(0);
    }, [data]);

    useEffect(() => {
        const companyFieldEl = document.querySelector('.spark-input');
        new TextInput(companyFieldEl);
    }, []);

    const handleFilterResultsOnClick = () => {
        filterResultsOnClickHandler(getFilteredData(data, companyName, minimumSales));
    };

    const sliderConfig = {
        configData: data,
        sliderKey: 'sales'
    };

    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h3 className="section-header">Global Sales</h3>

                <div className="spark-panel spark-panel--card panel--rounded-border">
                    <div className="spark-panel__content spark-expand">
                            <div>
                                <label className="spark-input">
                                    <input
                                        className="spark-input__field"
                                        name="text-input-company"
                                        placeholder="Company"
                                        role="textbox"
                                        onChange={e => setCompanyName(e.target.value)}
                                    />
                                    <span className="spark-label">Company</span>
                                </label>
                            </div>

                            <div>
                                <SliderInput
                                    elId="min-sales"
                                    customCss=""
                                    sliderLabel="Minimum Sales ($)"
                                    sliderConfig={sliderConfig}
                                    sliderValueOnChangeHandler={setMinimumSales}
                                />
                            </div>

                            <div>
                                <button
                                    className="spark-btn spark-btn--md spark-btn--block"
                                    onClick={handleFilterResultsOnClick}
                                >FILTER RESULTS</button>
                            </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

SalesFilters.prototype = {
    filteredData: arrayOf(shape(
        {
            id: number,
            name: string,
            company: string,
            sales: number
        }
    )),
    filterResultsOnClickHandler: func
};

export default SalesFilters;