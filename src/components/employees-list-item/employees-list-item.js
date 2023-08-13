
import './employees-list-item.css'

const EmployeesListItem = (props) => {

    const { name, salary, onDelete, onToggleIncrease, onToggleFavorite, onChangeSalary, increase, favorite } = props;
    
    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
        classNames += " increase";
    }
    if (favorite) {
        classNames += " like"
    }

    return (
        <div>
            <li className={classNames}>
                <span
                    className="list-group-item-label"
                    onClick={onToggleFavorite}>{name}</span>
                <input onChange={onChangeSalary} type="text" className="list-group-item-input" defaultValue={salary + "$"} />
                <div className="d-flex justify-content-center aling-items-center">
                    <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={onToggleIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        </div>
    );
}

export default EmployeesListItem;