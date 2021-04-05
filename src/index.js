import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Button, Input, TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";

import './style.css'

const ChildAgeSelector = (props) => {

    const { setChilds, childs,
        setChildSelector, mainStyles,
        buttonStyles, buttonClsses,
        mainClasses, labels } = props;

    useEffect(() => {
        setChilds(childs);
        document.addEventListener('mousedown', handleClickOutside);
    }, []);

    const handleClickOutside = (event) => {
        if (!event.target.closest(".child-selector")) {
            setChildSelector(false)
        }
    }

    const removeChild = (e) => {
        e.preventDefault()
        if (childs && childs.length >= 2) {
            childs.pop();
            setChilds(childs)
        } else {
            setChilds([])
        }

    }

    const getAgeSelected = (age) => {

        let select = [];
        for (let i = 0; i <= 12; i++) {
            select.push(<option value={i} key={i} selected={age === i}>{i} {labels.dropDownLabel || ' year(s) old'}</option>)
        }
        return select;
    }

    const addChild = (e) => {

        e.preventDefault()

        if (!childs || (childs && childs.length <= 11)) {

            const data = childs && childs.length && [...childs, 1] || [1];
            setChilds(data)

        }
    }

    const addChildAge = (index, age) => {

        childs[index] = parseInt(age);
        setChilds(childs)
    }

    const t = (d) => d;
    return (<div className={`child-selector ${mainClasses}`} style={{ ...mainStyles }}>
        <div className="close-icon" onClick={() => { setChildSelector(false) }}>X</div>
        <div >
            <div className="child-title selector">
                {labels.childrace || 'Childrance'}
            </div>
            <div className="child-button selector-button">
                <Button style={{ ...buttonStyles }} color="primary" className={`site-button outline child-update ${buttonClsses}`} onClick={(e) => removeChild(e)}>-</Button>

                <span className="child-selected-number">{childs && childs.length || 0}</span>

                <Button style={{ ...buttonStyles }} color="primary" className={`site-button outline child-update ${buttonClsses}`} onClick={(e) => addChild(e)}>+</Button>
            </div>
        </div>
        <div className="Clearfix"></div>
        <div >
            <div className="selected-childs">

                {childs && childs.length >= 1 &&
                    <>
                        <ul className="mt-2" >
                            {
                                childs.map((age, index) => <li key={index} className="child-age-dropdown" >


                                    {labels.childrace ? labels.childLabel.indexOf("{number}") !== -1 ?
                                        labels.childLabel.replace("{number}", parseInt(index + 1)) : labels.childLabel : 'Child'} {" "}

                                    <select key={index} className="child-age-select" onChange={(e) => addChildAge(index, e.target.value)}>
                                        {getAgeSelected(age)}
                                    </select>
                                </li>)
                            }
                        </ul> </>
                }
            </div>
        </div>
    </div>)
}

ChildAgeSelector.propTypes = {
    setChilds: PropTypes.func.isRequired,
    searchData: PropTypes.object.isRequired,
    mainStyles: PropTypes.object,
    mainClasses: PropTypes.string,
    buttonClsses: PropTypes.string,
    labels: PropTypes.object
}

ChildAgeSelector.defaultProps = {
    setChilds: () => {},
    buttonStyles: {},
    mainStyles: {},
    mainClasses: '',
    buttonClsses: '',
    labels: {}
}

export default ChildAgeSelector;