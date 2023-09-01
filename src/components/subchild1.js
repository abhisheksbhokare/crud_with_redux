import React from 'react'
import { useSelector } from 'react-redux';

export const Subchild1 = () => {

    const data = useSelector((c) => {
        console.log(c);
    })

  return (
    <div>Subchild1</div>
  )
}

export default Subchild1;