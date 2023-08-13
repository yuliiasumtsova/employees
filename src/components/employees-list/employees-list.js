import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleFavorite, onChangeSalary}) => {
    const elements = data.map(employee => {
        const {id, ...employeeProps} = employee;
        return <EmployeesListItem 
                    key={employee.id}
                    {...employeeProps}
                    onDelete={() => onDelete(id)} 
                    onToggleIncrease={() => onToggleIncrease(id)} 
                    onToggleFavorite={() => onToggleFavorite(id)}
                    onChangeSalary={(e) => onChangeSalary(id, e)}/>
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;