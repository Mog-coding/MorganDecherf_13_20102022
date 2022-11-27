export const isTokenValid = (JWT) => {

    if(!JWT) return false

    console.log("type token", typeof JWT);
    console.log("token", JWT)

    const jwtPayload = JSON.parse(window.atob(JWT.split('.')[1]))


    if ((new Date().getTime() / 1000) < jwtPayload.exp) {
        return true
    } else {
        return false
    }
}