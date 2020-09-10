import React from 'react';

const TODO = ({ contenido, setTodos, todos }) => {
	const eliminar = (id) => () => {
		setTodos((todos) => todos.filter((t) => t.id !== id));
	};

	const hecho = (id) => () => {
		let t = todos.map((t) => {
			if (t.id === id) {
				t.ok = true;
			}
			return t;
		});
		setTodos(t);
	};

	const porHacer = (id) => () => {
		let t = todos.map((t) => {
			if (t.id === id) {
				t.ok = false;
			}
			return t;
		});
		setTodos(t);
	};

	return (
		<>
			<p>{contenido.contenido}</p>
			<button onClick={eliminar(contenido.id)}>Eliminar</button>
			<button onClick={hecho(contenido.id)}>Ok</button>
			<button onClick={porHacer(contenido.id)}>!Ok</button>
		</>
	);
};

export default TODO;
