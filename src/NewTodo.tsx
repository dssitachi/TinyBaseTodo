import { useCallback, useState } from "react";
import { useAddRowCallback, useStore, useTable } from "tinybase/ui-react";
import { Button } from "@/components/ui/button";

function NewTodo() {
	const [text, setText] = useState("");
	const store = useStore();
	const handleChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>): void => {
			const { value } = event.target;
			setText(value);
		},
		[]
	);
	// const handleKeyDown = useAddRowCallback(
	// 	"todos",
	// 	({ which, target: { value: text } }: React.KeyboardEvent<HTMLInputElement>) => {
	// 		return { 'text': text}
	// 	},
	// 	[],
	// 	undefined,
	// 	() => setText(""),
	// 	[setText]
	// );

	const handleAddTodo = useAddRowCallback("todo", () => { 
		console.log("hello")
		return {text: text}})

	// function handleAddTodo() {
	// 	console.log(store)
	// 	console.log(store?.addRow("todos", { text: text}, false))
	// }

	return (
		<>
			<input
				id="newTodo"
				onChange={handleChange}
				// onKeyDown={(r) => {}}
				placeholder="New Todo"
				value={text}
			/>
			<Button onClick={handleAddTodo}>Add Todo</Button>
		</>
	);
}

export default NewTodo;
