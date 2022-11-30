export const isTokenValid = (JWT) => {

    if(!JWT) return false

    const jwtPayload = JSON.parse(window.atob(JWT.split('.')[1]))

    return (new Date().getTime() < jwtPayload.exp * 1000)
}