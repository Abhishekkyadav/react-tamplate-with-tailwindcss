import React from 'react'

const Home = () => {
    const arr = [3, 5453, 2, 333, 2, 6, 78, 6, 6, 545, 454];
    const data = arr.reduce((curr, prev) => {
        console.log("curr", curr);
        console.log("prev", prev);
        console.log("data", curr < prev ? prev : curr);
        return curr > prev ? curr : prev

    })
    console.log("Welcome to Programiz!", data);
    return (
        <div>Home</div>
    )
}

export default Home