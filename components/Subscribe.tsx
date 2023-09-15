import axios from 'axios'
import React, { useState } from 'react'

function Subscribe() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle')
  const [errorMsg, setErrorMsg] = useState(null)

  const subscribe = async (e) => {
    if (email) {
      e.preventDefault()

      setState('Loading')

      try {
        const response = await axios.post('/api/subscribe', { email })
        setState('Success')
        setEmail('')
      } catch (e) {
        setErrorMsg(e.response?.data?.error)
        setState('Error')
      }
    }
  }

  return (
    <section className="w-full h-screen py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Revolutionize Your Email Experience
              </h1>
              <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                Get to notified on quality articles about Web development and
                more sent to your inbox. I will send you an email once a month,
                no spam.
              </p>
            </div>

            <div className="w-full max-w-sm space-y-2 mx-auto">
              <form className="flex space-x-2" onSubmit={subscribe}>
                <input
                  className="max-w-lg flex-1 bg-gray-800 text-white border-gray-900 px-2"
                  placeholder="Enter your email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-green-600 text-white w-auto px-4 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 rounded-full"
                >
                  ✨ Subscribe
                </button>
              </form>
              {state === 'Error' && (
                <p className="error-state text-red-500">{errorMsg}</p>
              )}
              {state === 'Success' && (
                <p className="error-state text-green-500">
                  Awesome, you have been subscribed!
                </p>
              )}
              <p className="text-xs text-zinc-200 dark:text-zinc-100">
                Get ready to redefine your email experience.
                {/* <Link className="underline underline-offset-2 text-white"  href="/terms">
                            Terms & Conditions
        </Link> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
