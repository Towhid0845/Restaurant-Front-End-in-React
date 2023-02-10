import React from "react";

const MenuCard = ({ dataPassByProps }) => {
	return (
		<>
			<section className="main-card--container">
				{dataPassByProps.map((currElem) => {
					{
						/* by applying object destructuring, we minimized some code here. (e.g. {id} instead fo {currElem.id}) */
					}
					const { id, name, category, image, description } = currElem;
					return (
						<>
							{/* why key={currElem.id} ❓ */}
							<div className="card-container" key={id}>
								<div className="card">
									<div className="card-body">
										<span className="card-number card-circle subtle">{id}</span>
										<span className="card-author subtle">{category}</span>
										<h2 className="card-title">{name}</h2>
										<span className="card-description subtle">
											{description}
										</span>
										<div className="card-read">Read</div>
									</div>
									<img src={image} alt="error" className="card-media" />
									<span className="card-tag subtle">Order Now</span>
								</div>
							</div>
						</>
					);
				})}
			</section>
		</>
	);
};

export default MenuCard;
