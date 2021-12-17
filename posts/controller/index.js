const {randomBytes} = require ('crypto')
const post = {}
console.log('dari router')
const controller = {
    getData: async (req, res)=> {
        console.log('MASUK ')
        try{

            res.send(post);

        } catch (err){
            res.send(err.message)
        }
    },
    postData: async (req, res) => {
        console.log('masuk sebeluym try')
        try{
            console.log('masuk setelah try')
            const id = randomBytes(4).toString('hex')
            const {title} = req.body
            console.log(id,'INI ID')
            post[id] = {
                id,title
            };
            res.send(post);

        } catch(err){
            res.send(err.message)
        }
    },
    deleteData: async (req, res) => {
        
    },
    updateData: async (req, res)=>{

    },
    getDetail: async(req,res)=> {
        console.log(req.params,'INI ID PARAMS')
        try{
            console.log('MAUSK SETELAH TRY')
            let id = req.params
            // let get = Object.values(post[id])
            // for(let i = 0; i<post.length)
            console.log(post)
           

            res.send(get)
        } catch (err){
            res.send(err.message)
        }
    }
  
}

module.exports = controller