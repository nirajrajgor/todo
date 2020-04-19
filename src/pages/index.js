import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

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
				<h1>Todos</h1>
				<form onSubmit={this.onSubmitMethod}>
					<input type="text" value={this.state.taskName} onChange={this.onChangeValue} />
					<button type="submit">Submit</button>
				</form>
				{
					localStorage.getItem('tasks') ?
						JSON.parse(localStorage.getItem('tasks')).map((task, i) => (
							<>
								<span key={i}>{task.text}</span>{' '}
								<button onClick={() => this.deleteTask(task.id)}>Delete</button>
								<br />
							</>
						))
						:
						<p>Nothing to do! Add a task?</p>

				}
				<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
					<Image />
				</div>
				<Link to="/page-2/">Go to page 2</Link>
			</Layout>
		)
	}
}

export default IndexPage
