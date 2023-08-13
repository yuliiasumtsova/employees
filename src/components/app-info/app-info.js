
import './app-info.css';

const AppInfo = ({commonValue, increaseValue}) => {
    return(
        <div className="app-info">
            <h1>Облік співробітників компанії N</h1>
            <h2>Загальна кількість співробітників: {commonValue}</h2>
            <h2>Винагороду отримають: {increaseValue}</h2>
        </div>
    );
}

export default AppInfo;