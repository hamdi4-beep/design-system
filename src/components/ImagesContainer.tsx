import * as React from 'react'
import {useBackground } from '../context/StateContext'

const URLS = [
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/35271885-b64b-49da-b43d-e9aa8fa4d471/deib63r-0ab3a0f9-f527-45fc-aa28-0e2520df03fd.jpg/v1/fill/w_1920,h_1080,q_75,strp/persona_5_strikers___yellow_wallpaper_by_thetruemask_deib63r-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzM1MjcxODg1LWI2NGItNDlkYS1iNDNkLWU5YWE4ZmE0ZDQ3MVwvZGVpYjYzci0wYWIzYTBmOS1mNTI3LTQ1ZmMtYWEyOC0wZTI1MjBkZjAzZmQuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.yy8iADJSfnWFmfvmqFcQFGbaDuQH0qLIVPljlsbC-FQ',
    'https://i.redd.it/vry3uc5ok9w81.png',
    '/assets/images/cyberpunk.jpg',
    'https://i.pinimg.com/originals/50/54/5e/50545e40f9d985da117eb9aed395bdf8.jpg'
]

const Image: React.FC<{
    URL: string
}> = ({
    URL
}) => {
    const {setBackgroundURL} = useBackground()

    const clickHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
        const img = e.target as HTMLImageElement
        setBackgroundURL(img.src)
    }

    return (
        <div
            className='img'
            onClick={clickHandler}>
                <img src={URL} alt="" />
        </div>
    )
}

function ImagesContainer() {
    return (
        <div className="images-container">
            {URLS.map((url, i) => (<Image URL={url} key={i} />))}
        </div>
    )
}

export default ImagesContainer