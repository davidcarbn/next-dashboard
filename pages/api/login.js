import {serialize} from 'cookie'

export default (req,res) => {
    res.statusCode = 200
    res.setHeader('Set-Cookie', serialize('token','loggedin', {path: '/',httpOnly: true,samesite:"lax",secure:false}))
    res.json({
        success:true,
        user: {
            name: "John Doe"
        }
    })
}