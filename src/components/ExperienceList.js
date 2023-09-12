function ExperienceList({ id, title, date, desc}) {
    return (
        <li className='experience__list--item' key={id}>
            <h3 className="">{title}</h3>
            <span>{date}</span>
            <p>{desc}</p>
        </li>
    )
}

export default ExperienceList