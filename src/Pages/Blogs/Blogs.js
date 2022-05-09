import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='w-50 p-5'>
                <h3>1.Differences between sql and nosql databases?</h3>
                <p>
                    SQL:RELATIONAL DATABASE MANAGEMENT SYSTEM,Vertically Scalable,These databases have fixed or static or predefined schema
                </p>
                <p>NOSQL:Non-relational or distributed database system,They have dynamic schema.</p>
            </div>
            <div className='w-50 p-5'>
                <h3>2.Difference between JavaScript and Node.js?</h3>
                <p>JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine.</p>
            </div>
            <div className='w-50 p-5'>
                <h3> 3.What is the purpose of jwt and how does it work?</h3>
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims.</p>
            </div>
        </div>
    );
};

export default Blogs;