import React, { useState } from 'react';
import '../css/estilo.css';
import TODO from './Todo';

function App() {
	const [estadoInput, setEstadoInput] = useState('');
	const [todos, setTodos] = useState([]);

	const cambiarInput = (e) => {
		setEstadoInput(e.target.value);
	};

	const clickBoton = () => {
		if (estadoInput.trim() === '') return;
		let id = Math.floor(Math.random() * (100 - 1) + 1);
		setTodos([...todos, { contenido: estadoInput, id, ok: false }]);
		setEstadoInput('');
	};

	return (
		<div>
			<input
				type='text'
				placeholder='TODO'
				value={estadoInput}
				onChange={cambiarInput}
			></input>
			<button onClick={clickBoton}>Generar TODO</button>
			{todos.map((tdo) => (
				<li className={tdo.ok ? 'raya' : 'nueva'} key={tdo.id}>
					<TODO contenido={tdo} setTodos={setTodos} todos={todos} />
				</li>
			))}
		</div>
	);
}

export default App;
