// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  if (!req.headers.cookie.includes('token')) {
    res.statusCode = 401
    res.json({error: "error message"})
  }
  res.statusCode = 200
  res.json({user: {
    name: "John Doe"
  }})
}
