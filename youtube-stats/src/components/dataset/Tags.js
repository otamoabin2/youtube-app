import React from 'react';


function Info(props) {
  const tags = props.tags.map(function (tag, i) {
    return <li> -{tag}</li>
  })
  return (
    <div>
      <ul>{tags}</ul>
    </div>
  )
}

export default Info;