import Scene from './display/scene'
import Keyboard from './io/keyboard'
import Socket from './io/socket'
import Mouse from './io/mouse'

new Scene({
    socket: new Socket(3000, 'localhost'),
    canvas: document.getElementById('canvas'),
    keyboard: new Keyboard({ /* Key Bindings */ }),
    mouse: new Mouse()
})