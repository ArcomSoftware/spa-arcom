import  "./arcade.scss";

const Arcade = () => {
    return(
        <>
            <div className="arcade-machine">
            <div className="arcade-machine-title"></div>
            <label>
                <arcade-button style="--button-label: 'Start'">
                <input type="checkbox" id="input"/>
                <arcade-button-text></arcade-button-text>
                <ghost class="clyde"></ghost>
                <pacman></pacman>
                <dots></dots>
                <dots-v></dots-v>
                <walls></walls>
                </arcade-button>
            </label>
            </div>
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