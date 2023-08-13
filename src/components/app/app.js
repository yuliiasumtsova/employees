
import { Component } from 'react';
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import './app.css'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [
                { name: 'Yuliia', salary: '2000', increase: false, favorite: false, id: 1 },
                { name: 'Mariia', salary: '1500', increase: true, favorite: false, id: 2 },
                { name: 'Vlad', salary: '6000', increase: false, favorite: true, id: 3 },
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({ employees }) => {
            return {
                employees: employees.filter(obj => obj.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name: name,
            salary: salary,
            increase: false,
            favorite: false,
            id: this.maxId++,
        }
        this.setState(({ employees }) => {
            const newArr = [...employees, newItem];
            return {
                employees: newArr
            }
        })
        console.log(this.state.employees)
    }

    onToggleIncrease = (id) => {
        this.setState(({ employees }) => ({
            employees: employees.map(employee => {
                if (employee.id === id) {
                    return { ...employee, increase: !employee.increase }
                }
                return employee
            })
        }))
    }


    onToggleFavorite = (id) => {
        this.setState(({ employees }) => ({
            employees: employees.map(employee => {
                if (employee.id === id) {
                    return { ...employee, favorite: !employee.favorite }
                }
                return employee
            })
        }))
    }

    searchEmployee = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({ term: term });
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'favorite':
                return items.filter(item => item.favorite);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({ filter });
    }

    onChangeSalary = (id, e) => {
        this.setState(({ employees }) => ({
            employees: employees.map(employee => {
                if (employee.id === id) {
                    return { ...employee, salary: e.target.value }
                }
                return employee
            })
        }))
    }

    render() {
        const { employees, term, filter } = this.state;
        const commonValue = this.state.employees.length;
        const increaseValue = this.state.employees.filter(employee => employee.increase).length;
        const visibleData = this.filterPost(this.searchEmployee(employees, term), filter)

        return (
            <div className="app">
                <AppInfo
                    commonValue={commonValue}
                    increaseValue={increaseValue} />
                <div className="search-panel">
                    <SearchPanel
                        visibleData={visibleData}
                        onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect} />
                </div>
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleFavorite={this.onToggleFavorite}
                    onChangeSalary={this.onChangeSalary} />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;