import React from 'react';
import ReactDOM from 'react-dom';
import { faker } from "@faker-js/faker";
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import './style/App.css';

const App=()=>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
            <CommentDetail 
                author="Jane"
                time="Today at 4:30PM"
                blog="Nice Blog" 
                avatar={faker.image.image()}/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                author="Stefan" 
                time="Today at 5:00PM" 
                blog="Beautiful" 
                avatar={faker.image.image()}/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                author="Leena" 
                time="Today at 5:45PM" 
                blog="Awesome" 
                avatar={faker.image.image()}/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                author="Tyler" 
                time="Today at 6:15PM" 
                blog="toll" 
                avatar={faker.image.image()}/>
            </ApprovalCard>
            
        </div>
    );
};

ReactDOM.render(<App/>,document.querySelector('#root'));