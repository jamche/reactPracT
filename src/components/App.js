import React, {Component} from 'react'
// import Card from './Card'
// import MasterForm from './wizardForm/MasterForm'
import Header from'./Github/Header'
import Profiles from'./Github/Profiles'
import SearchForm from'./Github/SearchForm'


const API = 'https://api.github.com/'

class App extends Component{

    constructor(props){
        super(props)
        this.state = ({
            searchText : 'jamche',
            data: '',
        })
    }

    fetchSearch = (username) =>{
        let url = `${API}search/users?q=${username}`

        fetch(url)
        .then((res) => res.json())
        .then((data) =>{
            this.setState({
                data
            })
        })
        .catch(err => console.log(`No user found / error occured` + err))
    } 
    componentDidMount(){
        this.fetchSearch(this.state.searchText)
    }
    render(){
        return(
                <div>
                    <Header/>
                    <SearchForm
                        fetchSearch={()=>{this.fetchSearch()}}
                    />
                    <Profiles
                        data={this.state.data}
                    />
                </div>
                // {/* exercise 1 */}
                // {/* <div className="col-sm-4">
                //     <Card 
                //         featureImage ="https://sebhastian.com/static/eb0e936c0ef42ded5c6b8140ece37d3e/fcc29/feature-image.png"
                //         title="Make a Interactive React form"
                //         description = "Let's write some interace form with React"
                //         link = "https://sebhastian.com/interactive-react-form" 
                //     />
                // </div>
                // <div className="col-sm-4">
                //     <Card
                //         featureImage ="https://s2.glbimg.com/Xt3x7cP7aZXIoE0vhbouN3Hs54E=/0x0:1080x608/1600x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/m/b/eEOQUwSae4izcVPBGPOw/neymar-psg.jpg"
                //         title="Neymar annoyed"
                //         description = "neymar needs help at PSG"
                //         link = "https://globoesporte.globo.com/futebol/futebol-internacional/liga-dos-campeoes/noticia/neymar-desfalca-psg-na-liga-dos-campeoes-e-completa-50percent-de-ausencia-desde-chegada-ao-clube.ghtml" 

                //     />
                // </div>
                // <div className="col-sm-4">
                //     <Card
                //         featureImage ="http://www.ansa.it/webimages/img_457x/2019/10/20/db8e68220f6a398dd8f03f3d948dc698.jpg"
                //         title="Parachute Man in Italy"
                //         description = "Man flies into stadium via parachute"
                //         link = "http://www.ansa.it/sito/notizie/topnews/2019/10/22/invade-mapei-stadium-daspo-al-para_639b756b-7c99-4c16-a990-6fd5d1a819b8.html" 
                //     />
                // </div> */}
                // {/* exercise 2 */}
                // {/* <MasterForm/> */}
          
        )
        
    }
}

export default App;