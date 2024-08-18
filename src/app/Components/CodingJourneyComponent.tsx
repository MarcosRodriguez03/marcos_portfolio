import React from 'react'

interface IContents {
  Title: string;
  TimeFrame: string;
  Content: string;
}

const CodingJourneyComponent = (props: IContents) => {
  return (
    <div className='border-b border-black pb-4 my-[10px] lg:mx-8'>
      <p>{props.Title}</p>
      <p className='my-[10px]'>{props.TimeFrame}</p>
      <p>{props.Content}</p>
    </div>
  )
}

export default CodingJourneyComponent
