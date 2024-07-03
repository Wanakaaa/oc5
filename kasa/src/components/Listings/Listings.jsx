import React from 'react'
import { Link } from 'react-router-dom'
import listLogements from '../../datas/listLogements.json'

function Logements() {
  return (
    <div>Logements
        <ul>
            {listLogements.map((logement) => (
                <li key={logement.id}>
                    <Link to={`/logements/${logement.id}`}>
                        {logement.title}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Logements