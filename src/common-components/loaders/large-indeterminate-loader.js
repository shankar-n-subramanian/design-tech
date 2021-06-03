import "./large-indeterminate-loader.css";

import { useEffect } from "react";

import { ProgressIndicator } from "@sabre/spark/js/dist/spark";
import { bool, string } from "prop-types";

const LargeIndeterminateLoader = ({isLoading, loadingLabel, cssClass}) => {

    useEffect(() => {
        const el = document.querySelector('.spark-progress');
        new ProgressIndicator(el);
    }, []);

    const isHideCss = isLoading ? "" : "display-none";
    const isAdditionalCss = cssClass ? cssClass : "";
    
    return (
        <div className={`spark-progress spark-progress--horizontal spark-progress--sm ${isAdditionalCss} ${isHideCss}`} role="progressbar">
            <progress></progress>
            <span className="spark-progress__text" role="status">{loadingLabel ? loadingLabel : "Fetching..."}</span>
            <span className="spark-progress__meter"></span>
        </div>
    );
};

LargeIndeterminateLoader.propTypes = {
    isLoading: bool.isRequired,
    loadingLabel: string,
    cssClass: string
};

export default LargeIndeterminateLoader;