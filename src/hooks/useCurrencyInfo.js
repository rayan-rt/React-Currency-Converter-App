import { useEffect, useState } from "react";
import axios from "axios";

// `https://api.currencyapi.com/v3/latest?apikey=cur_live_BFh3Z5NfWAsU9WCQctN6qg0rfpGG7YoFjGjG7Xvr&base_currency=${country_currency}`;

function useCurrencyInfo(country_currency) {
	let [data, setData] = useState({});

	useEffect(() => {
		const fetchCurrencyData = async () => {
			try {
				const response = await axios.get(
					`https://api.currencyapi.com/v3/latest`,
					{
						params: {
							apikey: "cur_live_BFh3Z5NfWAsU9WCQctN6qg0rfpGG7YoFjGjG7Xvr",
							base_currency: country_currency,
						},
					},
				);
				setData(response.data.data);
			} catch (error) {
				console.error("Error fetching currency data:", error);
			}
		};

		fetchCurrencyData();
	}, [country_currency]);

	return data;
}

export default useCurrencyInfo;
