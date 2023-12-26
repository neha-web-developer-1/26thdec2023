import React, {useState} from 'react'

const Authform = () => {
    const [islogin, setIslogin] = useState(false)    
  return (
    <div>
        <div className='card bg-dark text-white'>
            <div className='card-body'>
                <h5 className='card-title'>{islogin ? 'login' : 'Register your self'}</h5>    
                <hr />
                <form>
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email adress</label>
                    <input type='email' className='form-control' id='email'  name='email' autoComplete='off' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password' className='form-label'>Password</label>
                        <input type='password' className='form-control' id ='password' name ='password' />
                    </div>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                    <div className='mt-4'>
                        <button type='button' role='button' className='btn-link' onClick={() =>  setIslogin((preValue) => ! preValue)}
                        >
                            {islogin? 'Need Account?' : 'Already a user ?'}
                        </button>
                        </div>
                
                </form>
            </div>
        </div>
    </div>
  )
}
export default Authform;