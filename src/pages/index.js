import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/main.css";

class IndexPage extends Component {

	state = {
		taskName: ""
	}

	onChangeValue = (e) => {
		this.setState({ taskName: e.target.value });
	};


	onSubmitMethod = (e) => {
		e.preventDefault();
		let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
		let task = {
			id: (tasks.length > 0 ? tasks[tasks.length - 1].id : 0) + 1,
			text: this.state.taskName,
			complete: false
		};
		tasks.push(task);
		localStorage.setItem('tasks', JSON.stringify(tasks));
		this.setState({ taskName: "" });
	}

	deleteTask = (id) => {
		let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
		tasks = tasks.filter(task => task.id !== id);
		localStorage.setItem('tasks', JSON.stringify(tasks));
		this.forceUpdate();
	}

	render() {
		return (
			<Layout>
				<SEO title="Home" />
				<h2>Add Todos</h2>
				<form onSubmit={this.onSubmitMethod}>
					<input type="text" required value={this.state.taskName} onChange={this.onChangeValue} />
					<button type="submit">Submit</button>
				</form>
				{
					typeof window !== 'undefined' && localStorage.getItem('tasks') ?
						JSON.parse(localStorage.getItem('tasks')).map((task, i) => (
							<div className="list">
								<span key={i}>{task.text}</span>{' '}
								<button onClick={() => this.deleteTask(task.id)}>Delete</button>
							</div>
						))
						:
						<p>Nothing to do! Add a task?</p>

				}
			</Layout>
		)
	}
}

export default IndexPage
