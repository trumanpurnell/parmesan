import axios from 'axios'
import matropa from 'matropa'

export default class App {
    constructor(components) {
        this.scene = components.scene

        this.mic = components.mic
        this.camera = components.camera
        this.fileDrop = components.fileDrop
        this.socket = components.socket

        this.fileDrop.onData = this.addPodFromFileDrop.bind(this)
        this.socket.onData = this.addPodFromSocket.bind(this)
        this.camera.onData = this.addPodFromCamera.bind(this)
        this.mic.onData = this.addPodFromMic.bind(this)

        window.setInterval(this.render.bind(this))
    }

    addPodFromFileDrop(file) {
        console.time('no wrap')
        for(const byte of new Uint8Array(file))
            1000000 / Math.exp(byte + 1) * Math.sin(2 * Math.PI * byte)
        console.timeEnd('no wrap')

    }
    addPodFromSocket(file) { console.log(file) }
    addPodFromCamera(file) {
        // const matDoc = new matropa({
        //     data: new Uint8Array(file),
        //     head: 0
        // })

        axios.post('http://localhost:3000/video', new Uint8Array(file))
        // console.log(matDoc.read())
    }
    addPodFromMic(file) { console.log(file) }

    render() { }
}