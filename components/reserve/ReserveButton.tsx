'use client'

import { useReserve } from './ReserveModal'

/** Button that opens the Reserve-a-table popup. Use in place of a reserve link. */
export default function ReserveButton({
  className,
  children,
  onClick,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { open } = useReserve()
  return (
    <button
      type="button"
      onClick={(e) => { onClick?.(e); open() }}
      className={className}
      {...rest}
    >
      {children}
    </button>
  )
}
