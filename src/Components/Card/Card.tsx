import { PropsWithChildren, ReactNode } from "react"

export type TCards = {
  title: string
  description: string
  button: string
  image?: string
  children?: ReactNode
}



export const Card = ({title, description, button, image, children}: TCards) => {
  return (
    <>
      <div className='card'>
        {children}
        <div className='card-body'>
          <h3 className='card-title'>{title}</h3>
          <p className='card-text'>{description}</p>
          <a href={button} className='btn btn-primary'>Go somewhere</a>
        </div>
      </div>
    </>
  )
}
