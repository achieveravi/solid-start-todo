import { createSignal } from 'solid-js';

export default function Counter() {
	console.log('Render: <Counter/>');
	const [count, setCount] = createSignal(0);
	return (
		<div>
			<Display count={count()} />
			<Incrementor setCount={setCount} count={count()} />
		</div>
	);
}

function Display(props: { count: number }) {
	console.log('Render: <Display/>');
	return <div>Current count: {props.count}</div>;
}

function Incrementor(props: {
	count: number;
	setCount: (count: number) => void;
}) {
	console.log('Render: <Incrementor/>');
	return (
		<button
			onClick={() => {
				console.log('Interaction: +1');
				props.setCount(props.count + 1);
			}}
		>
			+1
		</button>
	);
}
