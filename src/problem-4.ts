{
    //Problem - 4 => Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.


    interface Circle {
        shape: 'circle';
        radius: number;
    }

    interface Rectangle {
        shape: 'rectangle',
        height: number;
        width: number;
    }

    type Shape = Circle | Rectangle;

    function calculateCircleArea(radius: number): number {
        const circleAreaString = (Math.PI * radius * radius).toFixed(2);
        const circleAreaNumber = parseFloat(circleAreaString);
        return circleAreaNumber;
    }

    function calculateRectangleArea(height: number, width: number): number {
        const rectangleAreaString = (height * width).toFixed(2);
        const rectangleAreaNumber = parseFloat(rectangleAreaString);

        return rectangleAreaNumber;
    }

    const calculateShapeArea = (shape: Shape): string | number => {
        if (shape.shape === 'circle') {
            return calculateCircleArea(shape.radius);
        }
        else if (shape.shape === 'rectangle') {
            return calculateRectangleArea(shape.height, shape.width);
        }
        else {
            throw new Error('Unauthorized shape');
        }
    }

    const circle: Circle = {
        shape: 'circle',
        radius: 10,

    }
    const rectangle: Rectangle = {
        shape: 'rectangle',
        height: 1.245,
        width: 2.1236688,
    }

    const circleArea = calculateShapeArea(circle);
    const rectangleArea = calculateShapeArea(rectangle);

    // console.log(circleArea);
    // console.log(rectangleArea);

}