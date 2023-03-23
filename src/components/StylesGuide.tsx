import * as React from 'react'
import NoteLayer from './subComponents/NoteLayer'
import { BiEdit, BiCross } from 'react-icons/bi'

function StylesGuide({
    iconSize
}: {
    iconSize: string
}) {
    const layerRef = React.createRef<HTMLDivElement>()

    const handleOpenClick: React.MouseEventHandler<SVGElement> = (e) => {
        const { current } = layerRef
        current?.classList.add('reveal')
    }

    return (
        <div className="section-guide">
            <div className="buttons-section">
                <div className="space-between">
                    <h3>Button Style</h3>
                    <BiEdit fontSize={iconSize} onClick={handleOpenClick} />
                </div>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum libero voluptas ea ipsam. Dolor nulla, eum corporis voluptate quae nihil.</p>
                
                <div className="section-content">
                    <button>Default</button>
                </div>

                <NoteLayer ref={layerRef} />
            </div>

            <div className="input-section">
                <div className="space-between">
                    <h3>Input Style</h3>
                    <BiEdit fontSize={iconSize} />
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vitae sapiente explicabo rerum omnis magni quam! Odio voluptates molestiae qui?</p>
                
                <div className="section-content">
                    <input type="text" placeholder='Aa'/>
                </div>
            </div>

            <div className="checkbox-section">
                <div className="space-between">
                    <h3>Checkbox Style</h3>
                    <BiEdit fontSize={iconSize} />
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quaerat natus? Est asperiores quibusdam fugit assumenda nemo neque ex voluptatibus!</p>
                
                <div className="section-content">
                    <input type="checkbox" name="" id="" />
                </div>
            </div>

            <div className="select-section">
                <div className="space-between">
                    <h3>Select Style</h3>
                    <BiEdit fontSize={iconSize} />
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem exercitationem natus quisquam recusandae reprehenderit architecto repellendus illo minus perspiciatis?</p>
                
                <div className="section-content">
                    <select name="" id="">
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="js">JavaScript</option>
                        <option value="react">React</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default StylesGuide