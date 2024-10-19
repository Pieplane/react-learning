'use client'

import React from 'react'
import '@/assets/styles/homePage.css'
import { useState } from 'react'

const HomePage = () => {
    const [count, setCount] = useState(0);

    function MyButton(){
        function handleClick(){
            alert('You clicked me!');
            setCount(count + 1);
            console.log(count);
        }

        return (
            <button onClick={handleClick}>Click me</button>
        )
    };

    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize:90,
    };
    const products = [
        {tittle:'Gabbage', isFruit:false, id: 1 },
        {tittle:'Garlic', isFruit:false, id: 2 },
        {tittle:'Apple', isFruit:true, id: 3 },
    ];
    const listItems = products.map(product =>
        <li key={product.id} style={{color: product.isFruit ? 'magenta' : 'darkgreen'}}
        >{product.tittle}</li>
    );



  return (
    <div>
        <h1>Welcome to my app</h1>
        <p>Hello there <br/>How do you do?</p>
        <MyButton />
        <MyButton />
        <img className="avatar" 
            src={user.imageUrl}
            alt={'Photo of' + user.name}
            style={{width: user.imageSize,
                height: user.imageSize
            }}
        />
        <h1>{user.name}</h1>
        <ul>{listItems}</ul>
    </div>
  )
}

export default HomePage