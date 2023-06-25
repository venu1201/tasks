import { useEffect, useState } from 'react';
const api_base = 'http://localhost:5000';

function App() {
	const [formdata, setformdata] = useState([]);
	const [popupActive, setPopupActive] = useState(false);
	const [name, setname] = useState("");
	const [email, setemail] = useState("")
	const [secondname, setsecondname] = useState("")
	const [bestskill, setbestskill] = useState("")
	const [message, setmessage] = useState("")

	useEffect(() => {
		GetTodos();
	}, []);
	console.log(formdata)
	const GetTodos = () => {
		fetch(api_base + '/forms')
			.then(res => res.json())
			.then(data => setformdata(data))
			.catch((err) => console.error("Error: ", err));
	}

	const addForm = async () => {
		const data = await fetch(api_base + "/form/new", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				firstname: name,
				secondname: secondname,
				email: email,
				bestskill: bestskill,
				message: message,
			})
		}).then(res => res.json());

		setformdata([...formdata, data]);
		console.log(data)
		setPopupActive(false);
		setname("")
		setsecondname("")
		setemail("")
		setmessage("")
		setbestskill("")
		
	}



	return (
		<div className="App">
			<h1>Welcome</h1>
			<h4>Your Forms</h4>

			<div className="todos">
				{formdata.length > 0 ? formdata.map(item => (
					<div className='flex bg-[--dark] rounded-xl p-5 mt-4' key={item._id} >

						<div className='card w-full'>
							<div className='flex gap-3'>
								<h3 className='uppercase'>First Name : </h3>
								<div className="text">{item.firstname}</div>
							</div>
							<div className='flex gap-3'>
								<h3 className='uppercase'>Second Name : </h3>
								<div className="text">{item.secondname}</div>
							</div>
							<div className='flex gap-3'>
								<h3 className='uppercase'>email : </h3>
								<div className="text">{item.email}</div>
							</div>
							<div className='flex gap-3'>
								<h3 className='uppercase'>bestskill : </h3>
								<div className="text">{item.bestskill}</div>
							</div>
							<div className='flex gap-3'>
								<h3 className='uppercase'>message : </h3>
								<div className="text">{item.message}</div>
							</div>

						</div>
					</div>
				)) : (
					<p>You currently have no tasks</p>
				)}
			</div>
			
				
			<div className="addPopup" onClick={() => setPopupActive(true)}> +</div>
			
		

			{popupActive ? (
				<div className="popup">
					<div className="closePopup" onClick={() => setPopupActive(false)}>X</div>
					<div className="content text-black" >
						<div className='box'>

							<h3>First Name : </h3>
							<input type="text" required className="add-todo-input" onChange={e => setname(e.target.value)} value={name} />
						</div>
						<div className='box'>

							<h3>Second Name : </h3>
							<input type="text" required className="add-todo-input" onChange={e => setsecondname(e.target.value)} value={secondname} />
						</div>
						<div className='box'>

							<h3>Email : </h3>
							<input type="email" required className="add-todo-input" onChange={e => setemail(e.target.value)} value={email} />
						</div>
						<div className='box'>

							<h3>Best Skill : </h3>
							<input type="text" className="add-todo-input" onChange={e => setbestskill(e.target.value)} value={bestskill} />
						</div>
						<div className='box'>

							<h3>Any message on GGI program : </h3>
							<input type="text" className="add-todo-input" onChange={e => setmessage(e.target.value)} value={message} />
						</div>



						<div className="button" onClick={addForm}>Create Task</div>
					</div>
				</div>
			) : ''}
		</div>
	);
}

export default App;