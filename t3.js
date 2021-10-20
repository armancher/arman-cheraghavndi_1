function getArrayDepth(ry) {
 
    let depth= 1;
    let prev_length = 1;
    
    let curr_length = ry.length;
   
    while (curr_length > prev_length) {
        ry = ry.flat();
        prev_length = curr_length
        curr_length = ry.length;
        depth++
    }
    return depth;
}



let testRy = [10, [25, 13],
    [14, [55]], 2
];



console.log(getArrayDepth(testRy))

