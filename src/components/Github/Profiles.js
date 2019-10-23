import React from 'react'

const Profiles = props =>{
    console.log(props)
    if(props.data){
        let data = props.data; if (data.message ==='Not Found')
        return(
            <div className="notfound">
                <h2>Oops!!!</h2>
                <p>Component couldn't find the user</p>
            </div>
        );
        else{
            let userList = data.items.map((name)=>{
                return(
                    <a 
                        href={name.html_url}
                        key={name.id}
                        target="blank"
                        >
                    <div className="bs-callout bs-calllout-info">
                        <img 
                            src={name.avatar_url} 
                            alt={`${name.login}`} 
                            className="user"
                            />
                        <h4>Username: {name.login}</h4>
                        <p>Url : {name.html_url}</p>
                        <p>Score : {name.score}</p>
                    </div>
                    </a>
                )
            })
            return(
                <div>
                    {userList}
                </div>
            );
        }
    }
    else{
        return <div>Getting Data...</div>
    }
}

export default Profiles