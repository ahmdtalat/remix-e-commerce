const Rating = ({ rate }: { rate: number }) => (
  <div className='p-0 my-0 mx-auto text-xl relative fill-slate-400'>
    <div
      style={{
        width: `${Math.floor((rate / 5) * 100)}%`
      }}
      className='overflow-hidden left-0 top-0 flex z-10 absolute p-0 fill-orange-500'
    >
      <span>
        <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
          <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
        </svg>
      </span>
      <span>
        <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
          <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
        </svg>
      </span>
      <span>
        <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
          <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
        </svg>
      </span>
      <span>
        <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
          <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
        </svg>
      </span>
      <span>
        <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
          <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
        </svg>
      </span>
    </div>
    <div className='p-0 flex z-0'>
      <span>
        <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
          <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
        </svg>
      </span>
      <span>
        <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
          <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
        </svg>
      </span>
      <span>
        <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
          <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
        </svg>
      </span>
      <span>
        <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
          <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
        </svg>
      </span>
      <span>
        <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
          <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
        </svg>
      </span>
    </div>
  </div>
)

export default Rating
