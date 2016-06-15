export function substringDescription(description) {
    if(description && description.length > 200){
        var indices = [];
        for(var i=0; i < 200; i++) {
            if (description[i] === '.') {
                indices.push(i);
            }
        }
        if(indices.length > 0){
            return description.substring(0, indices.pop()+1);
        }
        return description.substring(0, 197)+'...';
    }
    return description;
}

