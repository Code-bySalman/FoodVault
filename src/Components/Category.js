import React from 'react'
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiMeat, GiChopsticks, GiNoodles } from "react-icons/gi";




function Category() {
  return (
    <div>
        <div>
            <h4>Italian</h4>
            <FaPizzaSlice/>
        </div>
        <div>
            <h4>American</h4>
            <FaHamburger/>
        </div>
        <div>
            <h4>Tandoori</h4>
            <GiMeat/>
        </div>
        <div>
            <h4>Asian</h4>
            <GiChopsticks/>
        </div>
        <div>
            <h4>Chineese</h4>
            <GiNoodles/>
        </div>
    </div>
  )
}

export default Category