
export const getSliderConfigurations = sliderConfig => {
    let min = 0;
    let max = 0;
    sliderConfig && sliderConfig.configData && sliderConfig.configData.map(eachData => {
        min = eachData[sliderConfig.sliderKey] < min ? eachData[sliderConfig.sliderKey] : min;
        max = eachData[sliderConfig.sliderKey] > max ? eachData[sliderConfig.sliderKey] : max;
    });

    return {
        orientation: sliderConfig.orientation ? sliderConfig.orientation : "horizontal",
        min: min,
        max: max,
        value: min,
        step: sliderConfig.step ? sliderConfig.step : 0
    };
};