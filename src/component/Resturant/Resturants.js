import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

// 🔥 This portion of code is to create a category dynamically 🔥
// using map method we are getting all category
// using new Set method we are getting uqique category
// using [] and ... to convert object to array
// after that storing the data in uniqueLinst.
const uniqueList = [
	...new Set(
		Menu.map((curElem) => {
			return curElem.category;
		})
	),
	"All",
];
console.log(uniqueList);

const Resturants = () => {
	// using useState hook to get all the menu data from menuApi
	const [menuData, setMenuData] = useState(Menu);
	// console.log(menuData);
	const [menuList, setMenuList] = useState(uniqueList);
	const filterItem = (category) => {
		if (category === "All") {
			setMenuData(Menu);
			return;
		}
		const updateList = Menu.filter((currElem) => {
			return currElem.category === category;
		});

		setMenuData(updateList);
	};

	return (
		<>
			<Navbar filterItem={filterItem} menuList={menuList} />

			{/* code of MenuCard was here but to keep the main page simple,
			 we separated it to another component and importing here */}
			{/* props is passing which is actually an array */}
			<MenuCard dataPassByProps={menuData} />
		</>
	);
};

export default Resturants;
