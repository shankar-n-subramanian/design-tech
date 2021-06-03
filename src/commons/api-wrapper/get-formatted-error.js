import { MESSAGE_TYPE_ERROR } from "./../constants";

const defaultError = {
  status: "",
  text: "",
  type: MESSAGE_TYPE_ERROR,
  title: ""
};

const getGenericError = error => ({
  ...defaultError,
  text: error.message
});

const getResponseError = error => {
  const {
    response: { status, statusText },
    message
  } = error;
  return {
    ...defaultError,
    status,
    text: message,
    title: statusText
  };
};

const getFormattedError = error => {
  if (error.response) {
      return getResponseError(error);
  }

  return getGenericError(error);
};

export default getFormattedError;
