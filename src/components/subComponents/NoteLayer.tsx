import * as React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const NoteLayer = React.forwardRef<HTMLDivElement>((props, ref) => {
    const handleCloseClick: React.MouseEventHandler<SVGElement> = ({ currentTarget: {
        parentElement
    } }) => {
        const layer = parentElement?.parentNode as HTMLDivElement
        layer.classList.remove('reveal')
    }

    return (
        <div className="note-layer" ref={ref}>
            <div className="note-header space-between">
                <h3>Notes</h3>
                <AiOutlineClose fontSize='1.2rem' onClick={handleCloseClick} />
            </div>
        </div>
    )
})

export default NoteLayer