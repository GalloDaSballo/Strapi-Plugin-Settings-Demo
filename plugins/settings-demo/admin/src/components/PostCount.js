import React, {useEffect, useState} from 'react'
import {
    request
} from 'strapi-helper-plugin'

export default () => {

    const [postCount, setPostCount] = useState(0)

    useEffect(() => {
        const loadPosts = async () => {
            const count = await request(`${strapi.backendURL}/posts/count`)
            setPostCount(count)
        }

        loadPosts()
    })

    return (
        <div>
            The Post Count: {postCount}
        </div>
    )

}