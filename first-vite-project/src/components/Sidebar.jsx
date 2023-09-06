import "./Sidebar.css"
function Sidebar(){
    const iconWidth = "30em",
    iconHeight = "30em"
    return (
    <nav className="sidebar">
        <h3 className="sidebar__header">Internet Menu</h3>
        <ul className="sidebar__body">
            <li className="sidebar__item">
                <img src="https://img.icons8.com/?size=512&id=120093&format=png" width={iconWidth} height={iconHeight} alt="" />
                <p>Pizza</p>
            </li>
            <li className="sidebar__item">
                <img src="https://img.icons8.com/?size=512&id=120356&format=png" width={iconWidth} height={iconHeight} alt="" />
                <p>Sushi</p>
            </li>
            <li className="sidebar__item">
                <img src="https://img.icons8.com/?size=512&id=119948&format=png" width={iconWidth} height={iconHeight} alt="" />
                <p>Drinks</p>
            </li>
            <li className="sidebar__item">
                <img src="https://img.icons8.com/?size=512&id=u62X5BcjLlGm&format=png" width={iconWidth} height={iconHeight} alt="" />
                <p>Deserts</p>
            </li>
        </ul>
    </nav>
    )
}

export default Sidebar;