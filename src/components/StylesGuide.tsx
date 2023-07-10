import * as React from 'react'

const {
    useEffect,
    useState
} = React

function StylesGuide() {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        setCounter((prevCounter) => prevCounter + 1)
        setCounter((prevCounter) => prevCounter + 1)
        setCounter((prevCounter) => prevCounter + 1)
    }, [])

    return (
        <div className="section-guide">
            <div className="buttons-section">
                <div className="space-between">
                    <h3>Button Style</h3>
                </div>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum libero voluptas ea ipsam. Dolor nulla, eum corporis voluptate quae nihil.</p>
                
                <div className="section-content flex-center">
                    <button className="default">Default</button>
                    <button className="squares" onClick={() => console.log(counter)}>Squares</button>
                </div>
            </div>

            <div className="input-section">
                <div className="space-between">
                    <h3>Input Style</h3>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium neque veniam obcaecati suscipit inventore pariatur!</p>
                
                <div className="section-content">
                    <input type="text" placeholder='Aa'/>
                </div>
            </div>

            <div className="checkbox-section">
                <div className="space-between">
                    <h3>Checkbox Style</h3>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti deserunt ipsam praesentium, distinctio excepturi itaque.</p>
                
                <div className="section-content">
                    <input type="checkbox" name="" id="" />
                </div>
            </div>

            <div className="select-section">
                <div className="space-between">
                    <h3>Select Style</h3>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusamus magnam quam consequatur enim tenetur, officiis eum?</p>
                
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