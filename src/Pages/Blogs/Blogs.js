import React from 'react';

const Blogs = () => {
    return (
        <div className='pt-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div class="card lg:max-w-lg bg-neutral text-neutral-content">
                <div class="card-body items-center text-center">
                    <h2 class="text-red-500 card-title">Difference between `javascript` and `nodejs`</h2>

                    <p className='text-green-500'>JavaScript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage. On the other hand, Node.js usually represents a list of objects and methods accessible to JavaScript code when run in the V8 engine or via the node interpreter.</p>
                </div>
            </div>
            <div class="card lg:max-w-lg bg-neutral text-neutral-content">
                <div class="card-body items-center text-center">
                    <h2 class="text-red-500 card-title">What are the Differences between `sql` and `nosql` databases??</h2>
                    <div className='text-green-500'>
                        <p>SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases whereas NoSQL is a Non-relational or Distributed Database.</p>
                        <p>SQL databases have a predefined schema whereas NoSQL databases use dynamic schema for unstructured data.</p>
                    </div>


                </div>
            </div>
            <div class="card lg:max-w-lg bg-neutral text-neutral-content">
                <div class="card-body items-center text-center">
                    <h2 class="text-red-500 card-title">What is the purpose of `jwt` and how does it work?</h2>

                    <div className='text-green-500'>
                        <p>JWT(JSON web Token) is mainly used for <span className='text-red-500'>authorization</span> purpose not <span className='text-red-500'>authentication</span> and securely transmits information between two parties</p>
                        <p>The JWT is divided into three parts- Header, Payload, and Signature. Each piece is separated from the other using a dot(.)</p>
                    </div>

                </div>
            </div>




        </div>
    );
};

export default Blogs;