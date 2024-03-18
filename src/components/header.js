import React from "react";

const Header = () => {
return (
    <header style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "50px", backgroundColor: "lightgray", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Itabirito</h1>
        <nav>
            <ul style={{ display: "flex", listStyle: "none" }}>
                <li><a href="/page1">btn1</a></li>
                <li><a href="/page2">btn2</a></li>
                <li><a href="/page3">btn3</a></li>
            </ul>
        </nav>
    </header>
);
}

export default Header;