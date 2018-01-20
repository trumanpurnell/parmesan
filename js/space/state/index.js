
const ORIGIN = new Point(0, 0)
const CANVAS = document.getElementById('myCanvas')
const CARTESIAN = { I: 0, II: 1, III: 2, IV: 3 }

const PRESSED_KEYS = new Set()
const CLOCK = new Clock()

const SELECTED = new Polygon(
    new Point(225, 225),
    new Point(350, 225),
    new Point(350, 300),
    new Point(225, 300))
    .setContext(CANVAS.getContext("2d"))
    .render()

const HANDLERS = {
    // Movement
    ArrowUp: (velocity) => SELECTED.shift(new Point(0, -velocity)),
    ArrowDown: (velocity) => SELECTED.shift(new Point(0, velocity)),
    ArrowLeft: (velocity) => SELECTED.shift(new Point(-velocity, 0)),
    ArrowRight: (velocity) => SELECTED.shift(new Point(velocity, 0)),

    // Rotation
    s: () => SELECTED.rotate(Math.PI / 8),
    a: () => SELECTED.rotate(-Math.PI / 8),

    // Zoom

    // Lookup
    lookup: function (PRESSED_KEYS) {
        return Array.from(PRESSED_KEYS).map(function (key) {
            return HANDLERS[key]
        })
    }
}

window.addEventListener("keydown", function (keyDownEvent) {
    keyDownEvent.preventDefault()
    PRESSED_KEYS.add(keyDownEvent.key)

    CLOCK.tick(HANDLERS.lookup(PRESSED_KEYS))
}, true);

window.addEventListener("keyup", function (keyUpEvent) {
    keyUpEvent.preventDefault()
    PRESSED_KEYS.delete(keyUpEvent.key)

    CLOCK.tick(HANDLERS.lookup(PRESSED_KEYS))
}, true);

