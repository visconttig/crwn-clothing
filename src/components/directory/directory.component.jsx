import React from "react";
import MenuItem from "../menu-item/menu-item.component.jsx";
import sections from "../../data.js";
import "./directory.styles.scss";

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            collections: sections 
        }
    }

    render(){
        return (
            <div className="directory-menu">
                {
                    this.state.collections.map(({id, ...otherProps}) => (
                        <MenuItem id={id}
                                {...otherProps} />
                    ))
                }
            </div>  
        );
    }

    
}

export default Directory;