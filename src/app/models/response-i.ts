export interface ResponseI {
  status: number,
  message: string,
  user: {
    name: string,
    email: string,
    jwtAccess: string,
    expiresIn: number
  }
}
