import React from 'react'
import AuthForm from '@/components/AuthForm'
import {router} from 'next/navigation'
import Link from 'next/link'

const page = () => {
  return (
    <AuthForm type='sign-up'/>
  )
}

export default page