// const mode = "dev"
const mode ="prod"

// http://localhost:3000/
// https://demo-project-backend-nnef.vercel.app/


const baseValues = {
    baseProtocal:{
        dev:"http://",
        prod:"https://",
       
    },
    baseHost:{
        dev:"localhost:3000",
        prod:"demo-project-backend-nnef.vercel.app"


    }
}

const baseprotocal = baseValues.baseProtocal[mode];
const basehost = baseValues.baseHost[mode]

export const baseUrl=baseprotocal+basehost