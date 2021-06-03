import { useEffect, useState } from "react";
import axios from "axios";
import getFormattedError from "./get-formatted-error";
import isEmpty from "lodash.isempty";
import get from "lodash.get";

const defRes = {
  data: [],
  isLoading: false,
  error: null
};

const _getOptions = apiOptions => {
  const { method = "GET", headers = {} } = apiOptions;
  return {
    ...apiOptions,
    method,
    headers: {
      "content-type": "application/json",
      ...headers
    }
  };
};


const useApi = (defaultApiOptions, defaultRes = defRes) => {
  const [response, setResponse] = useState(defaultRes);
  const [apiOptions, setApiOptions] = useState(defaultApiOptions);

  // const fetchData = async () => {
  //   setResponse({ ...defRes, isLoading: true });
  //   try {
  //     const response = await axios(_getOptions(apiOptions));
  //     setResponse({ data: response.data, error: null, isLoading: false });
  //   } catch (error) {
  //     setResponse({
  //       data: [],
  //       error: getFormattedError(error),
  //       isLoading: false
  //     });
  //   };
  // };


  useEffect(() => {
    const fetchData = async () => {
      setResponse({ ...defRes, isLoading: true });
      try {
        const response = await axios(_getOptions(apiOptions));
        setResponse({ data: response.data, error: null, isLoading: false });
      } catch (error) {
        setResponse({
          data: [],
          error: getFormattedError(error),
          isLoading: false
        });
      };
    };

    if(!isEmpty(get(apiOptions, 'url'))) {
      fetchData();
    }
  }, [apiOptions]);

  // if(!isEmpty(get(apiOptions, 'url')) && get(apiOptions, 'isForceReload') === true) {
  //   fetchData();
  // }

  return [response, setApiOptions];
};

export default useApi;
