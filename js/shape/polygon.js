class Polygon {

    /**
     * Creates an instance of Polygon.
     * @param {...Point} vertices 
     * @memberof Polygon
     */
    constructor(...vertices) {
        this.vertices = vertices
        this.center = this.computeCenter()
        this.context = CANVAS.context
    }

    /**
     * Render the Polygon with saved context
     * 
     * @memberof Polygon
     */
    render() {
        this.context.beginPath()

        this.vertices.forEach(function (vertex, index) {
            const nextVertex = this.vertices[(index + 1) % this.vertices.length]

            this.context.moveTo(...vertex.coordinates)
            this.context.lineTo(...nextVertex.coordinates)

        }, this)

        this.context.stroke();
        return this
    }

    /**
     * Rotate the Polygon by an angle theta
     * 
     * @param {Double} theta 
     * @returns The Polygon instance
     * @memberof Polygon
     */
    rotate(theta) {
        const center = this.center

        this.vertices = this.vertices.map(function (vertex) {
            const radius = vertex.distanceTo(center)
            const [w, h] = vertex.diff(center)
            const oldAngle = Math.atan(h / w)
            const newAngle = (2 * Math.PI - oldAngle - theta) % Math.PI

            const X = radius * Math.cos(newAngle)
            const Y = radius * Math.sin(newAngle)

            return center.clone().shift(X, Y)

        })

        this.center = this.computeCenter()
        this.render()

        return this
    }

    /**
     * Shift the polygon by point coordinates
     * 
     * @param {Point} point 
     * @returns The Polygon instance
     * @memberof Polygon
     */
    shift(point) {
        this.vertices.forEach(function (vertex) {
            vertex.shift(...point.coordinates)
        })

        return this.render()
    }

    /**
     * Compute the center of the Polygon
     * 
     * @returns The center point
     * @memberof Polygon
     */
    computeCenter() {
        return this.vertices.reduce(function (center, vertex) {
            return center.shift(...vertex.coordinates)
        }, new Point(0, 0))
            // Reduce the vertices by adding combining all coordinate values
            // then average the lot with a scale
            .scale(1 / this.vertices.length)
    }

}