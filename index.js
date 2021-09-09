function buildHistogram(magazine){
    let histogram = {}

    magazine.forEach(letter => {
        if(histogram[letter]){
            histogram[letter] += 1
        }else{
            histogram[letter] = 1
        }
    });
    return histogram
}

function canBuildNote(magazine, note){
    let histogram = buildHistogram(magazine)
    let spacelessNote = note.replace(/\s+/g, '')
    
    for(let letter of spacelessNote){
        if(!histogram[letter]){
            return false
        }else{
            histogram[letter] -= 1
        }
    }
    return true

    // let spacelessNote = note.replace(/\s+/g, '')
    
    // let histogram = {}
    // let result = {nextIndex: 0}
    // for(let letter of spacelessNote){
    //     if(histogram[letter]){
    //         histogram[letter] -= 1
    //     }else{
    //         result = buildHistogramTo(magazine, letter, histogram, result.nextIndex)
    //         if(!result.match){
    //             return false
    //         }else{
    //             histogram = result.histogram
    //         }
    //     }
    // }

    // return true
}


// function buildHistogramTo(magazine, target, startingHistogram = {}, startIndex = 0) {
//     let histogram = startingHistogram

//     for(let i = startIndex; i < magazine.length; i++){
//         if(magazine[i] == target){
//             return {histogram: histogram, match: true, nextIndex: i + 1}
//         }else if(histogram[magazine[i]]){
//             histogram[magazine[i]] += 1
//         }else{
//             histogram[magazine[i]] = 1
//         }
//     }

//     return {histogram: histogram, match: false}
// }

