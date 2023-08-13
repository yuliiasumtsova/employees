import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        }
    }

    onChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: '',
        })
    }

    render() {
        return (
            <div className="app-add-form">
                <h3>Додайте нового співробітника</h3>
                <form 
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Як його звуть"
                        name='name'
                        value={this.state.name}
                        onChange={this.onChangeValue} />
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="З/П в $"
                        name='salary'
                        value={this.state.salary}
                        onChange={this.onChangeValue} />
                    <button
                        type="submit"
                        className="btn btn-outline-light">Додати</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;