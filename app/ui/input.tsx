import { ReactNode, useState } from "react"
import { EyeIcon, EyeSlashIcon, KeyIcon } from '@heroicons/react/24/outline';


type BasicInputProps = JSX.IntrinsicElements['input'] & {
  icon?: ReactNode
}

type TextProps = BasicInputProps & {
  type?: 'text' | 'email'
}

type PasswordProps = BasicInputProps & {
  type: 'password',
}

type InputProps = PasswordProps | TextProps

const isPasswordProps = (p: InputProps): p is PasswordProps => p.type === 'password'

export default function Input(props: InputProps) {
  if (isPasswordProps(props)) {
    return <PasswordInput {...props}/>
  }
  
  return <TextInput {...props}/>
}

export function TextInput(props: TextProps) {
  const { id, name, required, placeholder, icon, type, ...restProps } = props

  return (
    <>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        minLength={6}
        {...restProps}
      />
      <span className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900">
        {icon}
      </span>
    </>
  )
}

export function PasswordInput(props: PasswordProps) {
  const [visible, setVisible] = useState(false)
  const { id, name, required, placeholder, icon, type: _, ...restProps } = props
  
  return (
    <>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        id={id}
        type={visible ? 'text' : 'password'}
        name={name}
        placeholder={placeholder}
        required={required}
        minLength={6}
        {...restProps}
      />
      <span className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900">
        {icon}
      </span>
      <button
        type='button'
        className='absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 cursor-pointer text-gray-500 peer-focus:text-gray-900'
        title={visible ? 'Hide password' : 'Show password'}
        onClick={() => setVisible(!visible)}
      >
        {visible ? <EyeIcon /> : <EyeSlashIcon />}
      </button>
    </>
  )
}
