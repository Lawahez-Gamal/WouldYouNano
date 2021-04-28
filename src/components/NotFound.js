import React from 'react'

const Notfound = () => {
    return(
        <div>
            <div className='page-404' style={{textAlign:'center'}}>
                <p>404</p>
                <h3 style={{fontSize:30,marginBottom:'20px',fontWeight:400}}>Sorry.</h3>
                <small style={{fontSize:16,fontWeight:200,lineHeight:'30px'}}>
                    Sorry, You're target doesn't exist.
                    <br/>
                    Go back to <a href='/'>Home</a> and have fun :)
                    <br/>
                </small>
            </div>
        </div>
    )
}
export default Notfound