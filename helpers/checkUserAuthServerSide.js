export const checkUserAuthServerSide = async (ctx) => {
    
    if (!ctx.req.headers.cookie?.includes('token')) {
        return {
          redirect: {
            destination: '/login?prev='+ctx.req.url,
            permanent: false
          }
        }
      }
      return {
        props: {}
      }
}