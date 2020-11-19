export const formatString = (t)=>{
    if(t){
    let newString = t;
    let words = []
    if(t.indexOf('_')>=0){
        words = t.split('_')
    }
    else if(newString.indexOf(',')>=0){
        words = newString.split(',')
    } else {
        const f = newString[0].toUpperCase();
        const r = newString.slice(1).toLowerCase();
        return f+r;
    }

    if(words){
        const formattedWords = words.map(w =>{
            const first = w[0].toUpperCase()
            const rest = w.slice(1).toLowerCase();
            return first+rest
        })
        if(formattedWords) newString = formattedWords.map(w =>{return `${w} `});
    }
    return newString; 
    }
    return ""
}
