import * as React from 'react'
import { StateContext } from '../context/StateContext'

function ImagesContainer() {
    const {setBg} = React.useContext(StateContext)

    const clickHandler: React.MouseEventHandler<HTMLDivElement> = ({ target }) => {
        const img = target as HTMLImageElement
        setBg(img.src)
    }

    return (
        <div className="images-container" onClick={clickHandler}>
            <div className="img-1">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/35271885-b64b-49da-b43d-e9aa8fa4d471/deib63r-0ab3a0f9-f527-45fc-aa28-0e2520df03fd.jpg/v1/fill/w_1920,h_1080,q_75,strp/persona_5_strikers___yellow_wallpaper_by_thetruemask_deib63r-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzM1MjcxODg1LWI2NGItNDlkYS1iNDNkLWU5YWE4ZmE0ZDQ3MVwvZGVpYjYzci0wYWIzYTBmOS1mNTI3LTQ1ZmMtYWEyOC0wZTI1MjBkZjAzZmQuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.yy8iADJSfnWFmfvmqFcQFGbaDuQH0qLIVPljlsbC-FQ" alt="" />
            </div>

            <div className="img-2">
                <img src="https://i.redd.it/vry3uc5ok9w81.png" alt="" />
            </div>

            <div className="img-3">
                <img src="https://uploads-ssl.webflow.com/6074f6263548834cc1229762/63040b070806156a1fa88877_07.jpg" alt="" />
            </div>

            <div className="img-4">
                <img src="https://i.pinimg.com/originals/50/54/5e/50545e40f9d985da117eb9aed395bdf8.jpg" alt="" />
            </div>
        </div>
    )
}

export default ImagesContainer