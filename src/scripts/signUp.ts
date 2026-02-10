const form = document.querySelector<HTMLFormElement>("#signup-form")!
interface IUser {
    name:string;
    email:string;
    password:string;
    confirmPassword:string;
}
form.addEventListener("submit", (e) => {
  e.preventDefault()

  const name = (form.querySelector('[data-input="name"]') as HTMLInputElement).value.trim()
  const email = (form.querySelector('[data-input="email"]') as HTMLInputElement).value.trim()
  const password = (form.querySelector('[data-input="password"]') as HTMLInputElement).value
  const confirmPassword = (form.querySelector('[data-input="confirmPassword"]') as HTMLInputElement).value
  validationSchema({name , email , password , confirmPassword})


})



function validationSchema({ name , email , password , confirmPassword }:IUser) {

      if (!name || !email || !password || !confirmPassword) {
    alert("All fields are required")
    return
  }

  if (!email.includes("@")) {
    alert("Invalid email")
    return
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters")
    return
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match")
    return
  }
  createUser({ name , email , password , confirmPassword })
}

function createUser(newUser:IUser) {



}