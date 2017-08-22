import SHA256    from 'crypto-js/sha256'
import Base64    from 'crypto-js/enc-base64'

let memHash  = { }

export default {

  hashMany: (req, res) => {
    if (req.body.data && Array.isArray(req.body.data)) {

      let hashes = {}

      for (var i in req.body.data) {
        let x = req.body.data[i]
        if (x in memHash) { hashes[x] = memHash[x] } else { 
          let hash = Base64.stringify(SHA256(x))
          hashes[x]  = hash
          memHash[x] = hash
        }
      }
        
      res.json(hashes)
    } else {
      res.status(400)
      res.json({'error': "Must contain an attribute 'data' with an array of strings to be hashed."})
    }
  },

  hashOne: (req, res) => {
    if (req.params.string in memHash) {
      res.json(memHash[req.params.string])
    } else {
      const hash = Base64.stringify(SHA256(req.params.string))
      memHash[req.params.string] = hash
      res.json(hash)
    }
  },

  getMem: (req, res) => {
    res.json(memHash)
  }
}
