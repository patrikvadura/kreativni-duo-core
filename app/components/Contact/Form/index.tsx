import React, { useState } from 'react'
import data from '@/app/lib/data.json'

import classes from './index.module.scss'
import { Input } from '@/app/ui/Forms/Input'
import { Textarea } from '@/app/ui/Forms/Textarea'

interface Items {
  textarea: boolean
  rows: number
  label: string
  type: string
  name: string
  placeholder: string
  required: boolean
  id: number
}

interface Data {
  contact: {
    form: {
      items: Items[]
      submit: string
    }
  }
}

export function Form() {
  // @ts-ignore
  const formData: Data = data

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  //@ts-ignore
  const handleSubmit = async e => {
    setLoading(true)
    e.preventDefault()

    if (name == '' && email == '') {
      setLoading(false)
      alert('Please enter both name & email id')
      return false
    }

    await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
    })
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        if (data && data.id) {
          alert(`Děkujeme ti za tvůj zájem ${name}! Ozveme se ti hned jak to bude možné!`)
          setName('')
          setEmail('')
          setMessage('')
        } else {
          alert('Omlouváme se, zkuste to znovu později.')
        }
      })
      .catch(err => {
        setLoading(false)
        alert('Ooops! Někde se stala chyba. Zkuste to později')
      })
    return true
  }

  return (
    <form className={classes.main} onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Vaše jméno"
        required
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <Input
        type="email"
        name="email"
        placeholder="Emailová adresa"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <Textarea
        name="message"
        value={message}
        required
        rows={4}
        placeholder="Vaše zpráva"
        onChange={e => setMessage(e.target.value)}
      />

      <button type="submit" className={classes.submit}>
        {loading ? (
          <div
            style={{
              borderTopColor: 'transparent',
            }}
            className="w-6 h-6 border-4 border-white border-solid rounded-full animate-spin"
          ></div>
        ) : (
          'Odeslat'
        )}
      </button>
    </form>
  )
}
