import { useEffect, useState } from "react";

function useCurrencyInfo(country_currency) {
	let [data, setData] = useState({});

	useEffect(() => {
		fetch(
			`https://api.currencyapi.com/v3/latest?apikey=cur_live_BFh3Z5NfWAsU9WCQctN6qg0rfpGG7YoFjGjG7Xvr&base_currency=${country_currency}`,
		)
			.then((response) => response.json())
			.then((result) => setData(result.data));
	}, [country_currency]);

	return data;
}

export default useCurrencyInfo;
