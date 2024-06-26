'use client'

import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
  EyeSlashIcon,
  EyeIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { useFormState, useFormStatus } from 'react-dom';
import authenticate from '../lib/actions';
import { useState } from 'react';
import Input from './input';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)
  return (
    <form className="space-y-3" action={dispatch}>
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <Input
                required
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                icon={<AtSymbolIcon />}
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <Input
                required
                type='password'
                id="password"
                name='password'
                placeholder='Enter password'
                icon={<KeyIcon />}
              />
            </div>
          </div>
        </div>
        <LoginButton />
        <div
          className="flex h-8 items-end space-x-1"
          aria-live='polite'
          aria-atomic='true'
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className='w-5 h-5 text-red-500'/>
              <p className='text-sm text-red-500'>{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus()
  return (
    <Button className="mt-4 w-full" disabled={pending} aria-disabled={pending}>
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
