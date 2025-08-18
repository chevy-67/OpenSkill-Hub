import React from 'react'

const CreatePost = () => {
  return (
    <div>
        <form>
            <lable>Title : </lable>
            <input type='text' /><br/><br/>
            <lable>Description : </lable>
            <input type='textarea' /><br/><br/>
            <button>Post</button>
        </form>
    </div>
  )
}

export default CreatePost