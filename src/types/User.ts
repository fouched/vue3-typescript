interface User {
  email: string,
  password: string,
  role: string,
  terms: boolean,
  skills: Array<string>,
  tools: Array<string>
}

export default User