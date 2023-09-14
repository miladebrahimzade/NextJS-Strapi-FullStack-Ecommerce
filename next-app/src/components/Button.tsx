'use client'

const Button = () => {
  const handleClick = async () => {
    const response = await fetch('/api/contact')
    const message = await response.json()
    console.log(message)
  }

  return <button onClick={handleClick}>get message</button>
}

export default Button
