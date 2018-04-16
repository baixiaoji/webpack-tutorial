let BD = {
    name: 'bigdream',
    member: ['zlj', 'zpj', 'zpk', 'jh', 'gxf', 'yj'],
    sayLeaderName(){
        this.member.map((name, i) => {
            if (i > 0) {
                console.log(`${name} say: ' our leader is zlj '`)
            }
        })
    }
}
