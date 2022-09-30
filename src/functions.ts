
export const calculateLimit = (limit : any) => {
    let limitsArr = [];
    for (const item in limit) {
        limitsArr.push(parseInt(limit[item]))
    }

    return limitsArr;

}//Math.ceil(60 * 1000 / calculateLimit()[2])

export const sleep = (ms : number) => {
    return new Promise(resolve => setTimeout(resolve, ms)).then(v => 1)
}