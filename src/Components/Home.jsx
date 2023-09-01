import React from 'react'

const Home = () => {
    let name = localStorage.getItem("name")
    let surname = localStorage.getItem("surname")
  return (
    <section>
        <article>
            <h1>WELCOME User {name} {surname}!!</h1>
        </article>
    </section>
  )
}

export default Home