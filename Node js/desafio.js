function dataParaMilissegundos(anos) {
    const gigasegundospordate = 365 * 24 * 60 * 60 * 1000;
    return anos * gigasegundospordate;
}

const today = new Date(); 
const birthday = new Date("December 17, 1995 03:24:00"); 

const Gigasegundos = dataParaMilissegundos (new Date)
console.log(`${birthday} seu aniversario em Gigasegundos é ${Gigasegundos} gs.`);