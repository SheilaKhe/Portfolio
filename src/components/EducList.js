function EducList({ id, school, year, level}) {
    return (
        <li className='experience__list--item' key={id}>
            <h3 className="">{school}</h3>
            <span>{year}</span>
            <p>{level}</p>
        </li>
    )
}

export default EducList