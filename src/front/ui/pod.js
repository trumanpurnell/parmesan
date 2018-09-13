import MediaManager from './managers/media'
import Layout from './managers/layout'
import Playback from './managers/playback'
import Display from './managers/display'

export default class Pod {
    constructor(props) {
        this.data = MediaManager.getMediaSource(props.data)

        this.layout = new Layout(props.layout)
        this.playback = new Playback(props.playback)
        this.display = new Display(props.display)
    }

    render(scene) {
        if (this.display.border)
            this.layout.shape.render(scene)
        
        scene.context.stroke()
        // this.data.render(scene, this.layoutManager, this.playbackManager, this.displayManager)
    }

    subsumes(click) {
        return this.layoutManager.checkBounds(click)
    }
}
