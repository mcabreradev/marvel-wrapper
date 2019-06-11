import React, { Component } from 'react';

class Filters extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    
    onChange(e) {
        switch (e.target.name) {
            case "name":
                this.props.setNameAction(e.target.value);
                break;
            
            case "sortBy":
                this.props.setSortByAction(e.target.value);
                break;
        
            default:
                break;
        }
    }

    render() { 
        const { name, sortBy } = this.props;

        return (
            <div className="columns filters"> 
                <div className="field column is-7">
                    <div className="control is-medium has-icons-right">
                        <input className="input is-medium" type="text" placeholder="Restaurant or Address" name="name" value={ name } onChange={ this.onChange } />
                        <span className="icon is-medium is-right"><i className="fas fa-search"></i></span>
                    </div>
                </div>

                <div className="field column is-5 is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Sort By</label>
                    </div>
                    <div className="field-body">
                        <div className="control is-expanded">
                            <div className="select is-medium is-fullwidth">
                                <select name="sortBy" onChange={ this.onChange } >
                                    <option value="">{ sortBy === "" ? "Select" : "-- Reset Filter" }</option>
                                    <option value="highest_rated">Highest Rated</option>
                                    <option value="lower_rated">Lower Rated</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Filters.defaultProps = {  
    name: "",
    sortBy: "",
};

export default Filters;
