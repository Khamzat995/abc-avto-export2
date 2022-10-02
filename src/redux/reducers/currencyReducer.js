import { SET_CURRENCY, SET_RATES } from "../actions/currencyActions";

const initState = {
  currencySymbol: "$",
  currencyName: "USD",
  currencyRate: 1,
  quotes: {}
};

const currencyReducer = (state = initState, action) => {
  if (action.type === SET_RATES) {
    return {
      ...state,
      quotes: action.payload
    }
  }

  if (action.type === SET_CURRENCY) {
    const currencyName = action.payload;
    const currencyRate = state.quotes[`USD${currencyName}`];
    if (currencyName === "USD") {
      return {
        ...state,
        currencySymbol: "$",
        currencyName,
        currencyRate: 1
      };
    }
    if (currencyName === "EUR") {
      console.log(action);
      return {
        ...state,
        currencySymbol: "€",
        currencyName,
        currencyRate
      };
    }
    if (currencyName === "TRY") {
      return {
        ...state,
        currencySymbol: "₺",
        currencyName,
        currencyRate
      };
    }
    if (currencyName === "RUB") {
      return {
        ...state,
        currencySymbol: "₽",
        currencyName,
        currencyRate
      };
    }
  }

  return state;
};

export default currencyReducer;
