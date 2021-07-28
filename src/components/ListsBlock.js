import React from 'react';
import CardItem from './CardItem';
import ListCard from './ListCard';
import './ListsBlock.css';


function ListsBlock() {
    return (
        <div className = 'listsBlock'>
            <div className= "Lists__container">
                <div className = "Lists__wrapper">
                    <ul className = "List__items">
                        <ListCard
                            heading = "Comfortable"
                            itemList = {[["Java","/java"],["Python","/python"]]}
                        />
                        <ListCard
                            heading = "Learning"
                            itemList = {[["React","/react"],["HTML","/html"],["CSS","/css"],['Javascript','javascript']]}
                        />
                        <ListCard
                            heading = "want to learn"
                            itemList = {[["Django","/django"]]}
                        />
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default ListsBlock
