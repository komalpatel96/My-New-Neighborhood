import React from "react";

// RecipeList renders a bootstrap list item
export const EventList = props => 

<div className="white-back">

<h2 className="marginTopBot">Upcoming Events In This Area - From EventBrite</h2>

<div className="scrolling-wrapper-flexbox">{props.children}

</div>
</div>;