import { useState } from "react";
import { InputBox } from "./Components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

//
function App() {
	// state
	let [amount, setAmount] = useState(0);
	let [from, setFrom] = useState("USD");
	let [to, setTo] = useState("PKR");
	let [converted_amount, setConvertedAmount] = useState(0);

	// custom Hook
	let currency_obj = useCurrencyInfo(from);
	let options = Object.keys(currency_obj);

	const swap = () => {
		setFrom(to);
		setTo(from);
		setAmount(converted_amount);
		setConvertedAmount(amount);
	};

	const conversion = () => {
		setConvertedAmount((amount * currency_obj[to].value).toFixed(2));
	};

	// --
	return (
		<div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
			<div className="w-full">
				<div className="w-full max-w-md mx-auto rounded-lg p-5 backdrop-blur-lg shadow-md bg-white/30">
					<form
						onSubmit={(e) => {
							e.preventDefault();
							conversion;
						}}
					>
						<div className="w-full mb-1">
							<InputBox
								label="From"
								amount={amount}
								onAmountChange={(amount) => setAmount(amount)}
								country_currency={from}
								onCountryCurrencyChange={(currency) =>
									setFrom(currency)
								}
								currency_options={options}
							/>
						</div>
						<div className="relative w-full h-0.5">
							<button
								onClick={swap}
								type="button"
								className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 active:scale-90 duration-300"
							>
								swap
							</button>
						</div>
						<div className="w-full mt-1 mb-4">
							<InputBox
								label="To"
								amount={converted_amount}
								country_currency={to}
								onCountryCurrencyChange={(currency) =>
									setTo(currency)
								}
								currency_options={options}
								amount_dis={true}
							/>
						</div>
						<button
							onClick={conversion}
							type="submit"
							className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg active:scale-90 duration-300"
						>
							Convert
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
export default App;
