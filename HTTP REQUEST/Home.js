import React,{ Component }from 'react'
import axios from 'axios'


class Home extends Component {
    constructor(props){
        super(props)

        this.state = { 
            homeState: ""
        }
    }


    compotnentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((data) => {
            this.setState({
         homeState:data
            },() =>{
    console.log(this.state.homeState)
})
        }).catch((err)=>{
            console.log(err);
        })
        }
    
        
postData(){
    const data = { 
        "userId": "233",
        "id": "233",
    "title": "Ok dexter",
    "body": "est molestiae facilis quis tempora numquam nihil qui\nvoluptate sapiente consequatur est qui\nnecessitatibus autem aut ipsa aperiam modi dolore numquam\nreprehenderit eius rem quibusdam"
  }
  axios.post('https://jsonplaceholder.typicode.com/posts',data)
  .then((data) =>{
      console.log(data);
  })
  .catch((err)=>{
      console.log(err);
  })
    }



delData(){
    const data = {
        "userId": "233",
        "id": "233",
    "title": "Ok dexter",
    "body": "est molestiae facilis quis tempora numquam nihil qui\nvoluptate sapiente consequatur est qui\nnecessitatibus autem aut ipsa aperiam modi dolore numquam\nreprehenderit eius rem quibusdam"

    }
    axios.put('https://jsonplaceholder.typicode.com/posts/1',data)
      .then((data) => {
          console.log(data);
      })
    .catch((err)=>{
        console.log(err);
    })
    }




        
        updateData(){
        const data = {
             "userId": "2234",
            "id": "2223",
        "title": "Ok dexter new",
        "body": "est molestiae facilis quis tempora numquam nihil qui\nvoluptate sapiente consequatur est qui\nnecessitatibus autem aut ipsa aperiam modi dolore numquam\nreprehenderit eius rem quibusdam"
      }
      axios.put('https://jsonplaceholder.typicode.com/posts/1',data)
      .then((data) => {
          console.log(data);
      })
    .catch((err)=>{
        console.log(err);
    })
    }



        render(){
            return(

                <div>
                    <h1>Home page</h1>
                    <p>Welcome to axios Http </p>
                    <button onClick={this.postData}>Submit</button>
                    <button onClick={this.updateData}>Update</button>
                    <button onClick={this.delData}>Delete</button>
                </div>
            )
        }
    }
    export default Home;