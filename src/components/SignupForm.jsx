import { zodResolver } from '@hookform/resolvers/zod'
import { OTPInput, REGEXP_ONLY_DIGITS } from 'input-otp'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  email: z.email('Enter a valid email'),
})

export const SignupForm = () => {
  const [code, setCode] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = () => setCode('')

  return (
    <form className="rounded-lg border border-white/10 bg-white/[0.04] p-4" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="mb-3 text-base font-semibold">Validated access</h2>
      <label className="grid gap-2 text-sm">
        Email
        <input className="field" type="email" {...register('email')} />
      </label>
      {errors.email && <p className="mt-2 text-sm text-rose-300">{errors.email.message}</p>}
      <div className="mt-4">
        <OTPInput
          containerClassName="flex gap-2"
          maxLength={6}
          onChange={setCode}
          pattern={REGEXP_ONLY_DIGITS}
          value={code}
          render={({ slots }) =>
            slots.map((slot, index) => (
              <div className="grid size-10 place-items-center rounded-md border border-white/10 bg-slate-950" key={index}>
                {slot.char ?? (slot.hasFakeCaret ? '|' : '')}
              </div>
            ))
          }
        />
      </div>
      <button className="mt-4 rounded-md bg-cyan-400 px-4 py-2 text-sm font-semibold text-cyan-950" type="submit">
        Save
      </button>
    </form>
  )
}
