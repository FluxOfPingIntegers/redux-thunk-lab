import React from "react"

const CatList = props => {
  let cats = (<li>Loading...</li>)
  if (!props.loading) {
    cats = props.catPics.map(cat => { return <li key={cat.id}><img src={cat.url} /></li>})
  }
  return (
    <ul>
      {cats}
    </ul>
  )
}

export default CatList