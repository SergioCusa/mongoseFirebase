import Daos from "./Daos/index.js"


(async () => {

    const {carrDao,prodDao } = await Daos()

console.log(await carrDao.save({productos:["mesa","escritorio","mate"]}))
})()