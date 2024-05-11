import { useId } from "react";

function InputBox({
	label,
	amount,
	onAmountChange,
	country_currency = "USD",
	onCountryCurrencyChange,
	currency_options = [],
	amount_dis = false,
}) {
	const input_id = useId();
	return (
		<div className={`bg-white p-3 rounded-lg text-sm flex`}>
			<div className="w-1/2">
				<label
					htmlFor={input_id}
					className="text-black/40 mb-2 inline-block"
				>
					{label}
				</label>
				<input
					id={input_id}
					value={amount}
					onChange={(e) =>
						onAmountChange && onAmountChange(Number(e.target.value))
					}
					className="text-lg outline-none w-full bg-transparent py-1.5"
					type="number"
					placeholder="Amount"
					disabled={amount_dis}
				/>
			</div>
			<div className="w-1/2 flex flex-wrap justify-end text-right">
				<p className="text-black/40 mb-2 w-full">{country_currency}</p>
				<select
					value={country_currency}
					onChange={(e) =>
						onCountryCurrencyChange &&
						onCountryCurrencyChange(e.target.value)
					}
					className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
				>
					{currency_options.map((currency, i) => (
						<option key={i} value={currency}>
							{currency}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}

export default InputBox;
