import { useEffect, useState } from 'react';
import { string, array, func } from "prop-types";
import { Slider } from "@sabre/spark/js/dist/spark";

import { getSliderConfigurations } from "./slider-input-utils";


const SliderInput = ({elId, customCss, sliderLabel, sliderConfig, sliderValueOnChangeHandler}) => {
    const [sliderValue, setSliderValue] = useState(0);
    const inputId = `slider-input-${elId}`;
    let sliderConfigs = getSliderConfigurations(sliderConfig);


    useEffect(() => {
        const sliderEl = document.querySelector('.spark-slider--input');
        const sl = new Slider(sliderEl, {onChange: setSliderValue});
        sliderConfigs = getSliderConfigurations(sliderConfig);
    }, [sliderConfig]);

    useEffect(() => {
        sliderValueOnChangeHandler(sliderValue);
    }, [sliderValue]);

    return (
        <div className={`spark-slider--input ${customCss}`}>
            <label id={`label-${elId}`} className="spark-label">{sliderLabel}</label>
            <input
                type="number"
                min={sliderConfigs.min}
                max={sliderConfigs.max}
                value={sliderValue}
                step={sliderConfigs.step}
                id={inputId}
                onChange={e => setSliderValue(e.target.value)}
            />
            <div className="spark-slider__controls">
                <button
                    className="spark-slider__handle"
                    role="slider"
                    aria-orientation={sliderConfigs.orientation}
                    aria-valuemin={sliderConfigs.min}
                    aria-valuemax={sliderConfigs.max}
                    aria-valuenow={sliderValue}
                    aria-valuetext={sliderValue}
                    aria-labelledby={sliderLabel}
                    aria-controls={inputId}
                >
                </button>
                <span className="spark-slider__track">
                    <span className="spark-slider__track-fill"></span>
                </span>
            </div>
        </div>        
    );
};

SliderInput.prototype = {
    elId: string.isRequired,
    customCss: string,
    sliderLabel: string.isRequired,
    sliderConfig: array,
    sliderValueOnChangeHandler: func
};

export default SliderInput;