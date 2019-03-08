import nd from 'multi-dim'

export default class Layout {
    constructor(layout) {
        this.origin = layout.origin
        this.size = layout.size
        this.shape = layout.shape(this.size, this.origin)
    }

    reposition(data) {

        return data
            // move points to origin
            .dot(Layout.translate(...data.mean(0).multiply(-1)))
            // scale to fill size of pod
            .dot(Layout.scale(...this.size.multiply(1.3).divide(data.norm(1).max()).set(3)(1)))
            // move to location of pod
            .dot(Layout.translate(...this.origin))

    }

    static translate(x, y, z) {
        return nd.array([
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [x, y, z, 1],
        ])
    }

    static scale(x, y, z) {
        return nd.array([
            [x, 0, 0, 0],
            [0, y, 0, 0],
            [0, 0, z, 0],
            [0, 0, 0, 1],
        ])
    }

    static rotate(angle, axis) {
        const c = Math.cos(angle)
        const s = Math.sin(angle)

        if (axis === 'x')
            return nd.array([
                [1, 0, 0, 0],
                [0, c, s, 0],
                [0, -s, c, 0],
                [0, 0, 0, 1],
            ])

        if (axis === 'y')
            return nd.array([
                [c, 0, s, 0],
                [0, 1, 0, 0],
                [-s, 0, c, 0],
                [0, 0, 0, 1],
            ])

        if (axis === 'z')
            return nd.array([
                [c, s, 0, 0],
                [-s, c, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1],
            ])
    }
}

