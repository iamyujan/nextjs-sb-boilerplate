const SbLink = ({name, link}) => {
    const {linktype, cached_url, email = false} = link
    const href = linktype === 'story' ?
                    `/${cached_url}`
                : linktype === 'email' ?
                    `mailto:${email}`
                :
                    cached_url
    return  href && href !== '' && href !== undefined ?
            <a href={href}>{name}</a>
        :
            <a href="#">{name}</a>
}

export default SbLink