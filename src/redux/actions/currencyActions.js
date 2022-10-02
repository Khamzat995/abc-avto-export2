import axios from "axios";
export const SET_CURRENCY = "SET_CURRENCY";
export const SET_RATES = "SET_RATES"

export const loadCurrency = () => {
  return dispatch => {
    axios
      .get(`https://api.apilayer.com/currency_data/live?base=USD`, {
        headers: {
          apikey: 'odzYu3BfbJuCeHTHn6KWtTCfom6IJ4iN'
        }
      })
      .then(response => {
        const { quotes } = response.data;

        dispatch({
          type: SET_RATES,
          payload: quotes
        });
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }
}

export const setCurrency = currencyName => {
  return {
    type: SET_CURRENCY,
    payload: currencyName
  }
};
