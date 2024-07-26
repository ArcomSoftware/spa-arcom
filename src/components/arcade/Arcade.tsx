import  "./arcade.scss";


const Arcade = () => {
    return(
        <>
           <arcade-machine>
            <arcade-machine-title></arcade-machine-title>
            <label>
                <arcade-button style="--button-label: 'Start'">
                <input type="checkbox" id="input">
                <arcade-button-text></arcade-button-text>
                <ghost className="clyde"></ghost>
                <pacman></pacman>
                <dots></dots>
                <dots-v></dots-v>
                <walls></walls>
                </arcade-button>
            </label>
            </arcade-machine>
            <div className="ghosts-bar">
            <div className="ghosts">
                <ghost className="blinky"></ghost>
                <ghost className="clyde"></ghost>
                <ghost className="inky"></ghost>
                <ghost className="pinky"></ghost>
                <ghost className="dizzied"></ghost>
            </div>
            </div>
        </>
    )
}

export default Arcade